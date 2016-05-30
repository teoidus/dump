function Camera(pos, xDim, yDim) { // x, y in 2d plane
  this.pos = pos; // { x, y, z }
  this.basis = [xDim, yDim]; // magnitude of vectors encodes camera size
}

// returns {a, b}, where a*basis[0] + b*basis[1] = shadow of p in cam plane
Camera.prototype.projection = function(p) {
  with (Vector) return [
    dot(sub(p, this.pos), normalize(this.basis[0])),
    dot(sub(p, this.pos), normalize(this.basis[1]))
  ];
}

Vector = {
  sub: function(a, b) { return [a[0]-b[0], a[1]-b[1], a[2]-b[2]] },
  dot: function(a, b) { return a[0]*b[0] + a[1]*b[1] + a[2]*b[2] },
  cross: function(a, b) { return [
        a[1]*b[2]-a[2]*b[1],
        a[2]*b[0]-a[0]*b[2],
        a[0]*b[1]-a[1]*b[0]
      ]
    },
  scale: function(c, a) { return [c*a[0], c*a[1], c*a[2]] },
  norm: function(a) {
      return Math.sqrt(Math.pow(a[0],2) + Math.pow(a[1],2) + Math.pow(a[2],2))
    },
  normalize: function(a) {
      var l = Vector.norm(a);
      return [a[0]/l, a[1]/l, a[2]/l];
    },
}
