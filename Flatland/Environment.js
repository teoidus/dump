function Environment(w, h, cellW, cellH, data) {
  this.w = w;
  this.h = h;
  this.cw = cellW;
  this.ch = cellH;
  this.wc = Math.ceil(this.w/this.cw);
  this.hc = Math.ceil(this.h/this.ch);
  if (typeof data != 'undefined') {
    this.data = data;
  } else {
    this.data = [];
    for (var i = 0; i < this.wc; i++) {
      this.data[i] = [];
      for (var j = 0; j < this.hc; j++) {
        this.data[i][j] = { r: 255, g: 255, b: 255, a: 0, occ: false };
      }
    }
  }
  this.data[2][0] = { r: 100, g: 23, b: 160, a: 1, occ: false };
  //this.data[2][1] = { r: 0, g: 0, b: 255, a: 1, occ: false };
  //this.data[2][2] = { r: 0, g: 0, b: 255, a: 0.5, occ: false };
}

Environment.prototype.getColor = function(x, y) {
  var cellX = this.cw*x/this.w;
  var cellY = this.ch*y/this.h;
  var torusX = cellX%this.wc + Number(cellX < 0) * this.wc;
  var torusY = cellY%this.hc + Number(cellY < 0) * this.hc;
  //console.log('xy: ', x, y, 'cell: ', cellX, cellY, 'torus:', torusX, torusY);
  var color = this.data[Math.floor(torusX)][Math.floor(torusY)];
  return { r: color.r, g: color.g, b: color.b, a: color.a, occ: color.occ };
}

Environment.prototype.getRay = function(camera, dr, theta) { // in radians //??
  var result = [];
  var s = { x: camera.x, y: camera.y };
  var d = { x: dr*Math.cos(theta), y: dr*Math.sin(theta) };

  for (var i = 0; i < camera.range/dr; i++) {
    s.x += d.x; s.y += d.y;
    var c = this.getColor(s.x, s.y);
    if (c.a > 0.001) { // need not store fully transparent
      var fogCoeff = Math.sqrt(Math.pow(s.x - camera.x, 2) + Math.pow(s.y - camera.y, 2)) / camera.range;
      //document.getElementById('logdiv').innerHTML += '<br>' + fogCoeff.toString() + '->' + fogCoeff * (255 - c.r);
      //console.log('oldc', c);
      c.r = Math.floor(c.r + fogCoeff * (255 - c.r));
      c.g = Math.floor(c.g + fogCoeff * (255 - c.g));
      c.b = Math.floor(c.b + fogCoeff * (255 - c.b));
      //console.log('newc', c, 'fogcoeff', fogCoeff);
      result.unshift(c);
    }
    if (c.a > 0.999)
      break; // light cannot pass
  }
  //console.log('y', camera.y, 'result', result);
  //console.log('ray:', result, 'camera:', camera, 'dr:', dr, 'theta:', theta);
  return result;
}

Environment.prototype.getRaytrace = function(camera, dr, dtheta) { // in radians //??
  var result = [];
  var theta = camera.theta + camera.fov/2;
  for (var i = 0; i < camera.fov/dtheta; i++) {
    result.push(this.getRay(camera, dr, theta - i*dtheta));
  }
  //console.log('y', camera.y, 'result', result);
  return result;
}