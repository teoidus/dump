function Camera(x, y, theta, range, fov, turnRatio, speed) {
  this.x = x;
  this.y = y;
  this.theta = theta;
  this.range = range;
  this.fov = fov;
  this.turnRatio = turnRatio;
  this.speed = speed;
}

Camera.prototype.onmousemove = function(e, dx, dy) {
  //console.log(dx, dy, this.turnRatio, this.theta);
  this.theta -= this.turnRatio * dx;
  console.log('New theta:', this.theta);
}

Camera.prototype.onkeydown = function(e, environment, dt) {
  var key = String.fromCharCode(e.keyCode);
  var theta = this.theta;
  switch (key) {
    case 'W': theta = theta; break;
    case 'A': theta = theta+Math.PI/2; break;
    case 'S': theta = theta+Math.PI; break;
    case 'D': theta = theta-Math.PI/2; break;
  }
  var d = { x: this.speed*dt*Math.cos(theta), y: this.speed*dt*Math.sin(theta) };
  this.x += d.x; this.y += d.y;
  console.log('Keydown:', String.fromCharCode(e.keyCode), '-> new pos:', this.x, this.y);
}