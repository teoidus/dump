function CubeCanvas(canvas, camera) {
  this.c = canvas; this.ctx = this.c.getContext('2d');
  this.cam = camera;
}

// convert xy projection to canvas pixels
CubeCanvas.prototype.xyToCanvas = function(xy) {
  var unit = [
    this.c.width / (2 * Vector.norm(this.cam.basis[0])),
    -this.c.height / (2 * Vector.norm(this.cam.basis[1]))
  ];
  var origin = [this.c.width/2, this.c.height/2];
  return [origin[0] + xy[0]*unit[0], origin[1] + xy[1]*unit[1]];
}

CubeCanvas.prototype.pointToCanvas = function(p) {
  return this.xyToCanvas(this.cam.projection(p));
}

CubeCanvas.prototype.drawPolygon = function(pts, color) {
  this.ctx.fillStyle = color;
  this.ctx.beginPath();
  this.ctx.moveTo(
    this.pointToCanvas(pts[0])[0],
    this.pointToCanvas(pts[0])[1]);
  for (var i = 1; i < pts.length; i++) {
    this.ctx.lineTo(
      this.pointToCanvas(pts[i])[0],
      this.pointToCanvas(pts[i])[1]);
  }
  this.ctx.closePath();
  this.ctx.fill();
}

CubeCanvas.prototype.drawCube = function(cube, occludedMargin, margin) {
  this.ctx.fillStyle = cube.bgColor;
  this.ctx.fillRect(0, 0, this.c.width, this.c.height);

  var occludedOrder = [Cube.FACE_L, Cube.FACE_B, Cube.FACE_D];
  var order = [Cube.FACE_U, Cube.FACE_R, Cube.FACE_F];
  for (var i = 0; i < occludedOrder.length; i++) {
    this.drawPolygon(cube.getPolygon(occludedOrder[i], occludedMargin),
      cube.colors[occludedOrder[i]]);
  }
  for (var i = 0; i < order.length; i++) {
    this.drawPolygon(cube.getPolygon(order[i], margin),
      cube.colors[order[i]]);
  }
}

// colors: u l f r b d
function Cube(colors, bgColor, size, position) {
  this.colors = colors;
  this.bgColor = bgColor;
  this.size = size;
  this.pos = position; // center
}
Cube.FACE_U = 0; Cube.FACE_L = 1; Cube.FACE_F = 2;
Cube.FACE_R = 3; Cube.FACE_B = 4; Cube.FACE_D = 5;
Cube.FACE = ['U', 'L', 'F', 'R', 'B', 'D'];

// face on [0,5]
// margin = distance from cube surface
Cube.prototype.getPolygon = function(face, margin) {
  var i = 1 + margin/(this.size/2);
  var faces = [[i,2], [-i,1],[i,0],[i,1],[-i,0],[-i,2]]; // [[direction, axis]]
  var vertices = [[-1,-1], [-1,1], [1,1], [1,-1]];
  p = [this.pos[0], this.pos[1], this.pos[2]];
  var dir = faces[face][0]; var axis = faces[face][1];

  result = [];
  for (var i = 0; i < vertices.length; i++) {
    var q = [vertices[i][0], vertices[i][1]];
    q.splice(axis, 0, dir);
    for (var j = 0; j < q.length; j++) {
      q[j] = p[j] + q[j]*this.size/2;
    }
    result.push([q[0], q[1], q[2]]);
  }

  return result;
}
