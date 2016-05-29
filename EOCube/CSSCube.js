function CSSCube(id, colorScheme, size, div) { // colorScheme = rgb, [U L F R B D]
  this.colors = colorScheme;
  this.size = size; // length in pixels
  this.div = div;
  this.div.id = id;
  this.div.style.perspective = "1000px";
  this.div.style.width = size + "px";
  this.div.style.height = size + "px";

  this.stickers = [];
  this.origins = [];
  this.rotations = [];
  this.initials = []; // initial positions before transition to 3d
  this.figures = [];
  for (var i = 0; i < 54; i++) {
    // stickered UL to UR, down to DL to DR
    var face = Math.floor(i/9);
    this.stickers.push(this.colors[face]);

    var rotations = [[90,0,0],[0,90,0],[0,0,0],[0,-90,0],[180,0,0],[-90,0,0]];
    var rotation = rotations[face];
    this.rotations.push(new Rotation(rotation[0], rotation[1], rotation[2]));

    var sticker = i % 9; // location of sticker relative to face
    var origins = [ // coords = cube center - sticker center
      [ 1, 1], [ 0, 1], [-1, 1],
      [ 1, 0], [ 0, 0], [-1, 0],
      [ 1,-1], [ 0,-1], [-1,-1]
    ];
    var origin = origins[sticker];
    this.origins.push(new RelativeOrigin(0.5+origin[0], 0.5+origin[1], -1.5,
      this.size/3)); // this.size/3 = length of sticker

    this.initials.push({
      left: (sticker%3) * this.size/3,
       top: Math.floor(sticker/3) * this.size/3
    });

    var figure = document.createElement("figure");
    this.figures.push(figure);
    figure.id = i.toString();
    figure.style.position = "fixed";
    figure.style.left = this.initials[i].left + "px";
    figure.style.top = this.initials[i].top + "px";
    figure.style.transformStyle = "preserve-3d";
    figure.style.width = (this.size/3) + "px";
    figure.style.height = (this.size/3) + "px";
    //figure.style.border = "1px solid black";
    figure.style.backgroundColor = this.stickers[i];
    figure.style.opacity = 1;
    //figure.style.display = "block";
    this.div.appendChild(figure);
    figure.style.transition = "transform 0.5s";
    figure.style.transformOrigin = this.origins[i].toCSS();
    figure.style.transform = this.rotations[i].toCSS();

    console.log("Face",face,"rot",this.rotations[i].toCSS(),
            "origin",this.origins[i].toCSS(),
            "initial",JSON.stringify(this.initials[i]));
  }
}

CSSCube.prototype.updateTransforms = function() {
  for (var i = 0; i < this.figures.length; i++) {
    this.figures[i].style.transform = this.rotations[i].toCSS();
  }
}

CSSCube.prototype.testX = function() {
  for (var i = 0; i < this.rotations.length; i++) {
    this.rotations[i].x += 90;
  }
  this.updateTransforms();
}

CSSCube.prototype.testY = function() {
  for (var i = 0; i < this.rotations.length; i++) {
    this.rotations[i].y -= 90;
  }
  this.updateTransforms();
}

CSSCube.prototype.testZ = function() {
  for (var i = 0; i < this.rotations.length; i++) {
    this.rotations[i].z += 90;
  }
  this.updateTransforms();
}



/*
translate3d( tx, ty, tz )
scale3d( sx, sy, sz )
rotate3d( rx, ry, rz, angle )
*/

// Encodes transform-origin at px,py,pz, where p_ are proportions of object
// dimensions dx,dy,dx respectively
function RelativeOrigin(px, py, pz, dx) {
  this.px = px;
  this.py = py;
  this.pz = pz;
  this.dx = dx;
}

// x, y through proportion, z through absolute pixel value
RelativeOrigin.prototype.toCSS = function() {
  return (this.px*100) + "% " + (this.py*100) + "% " + (this.pz*this.dx) + "px";
}

// Represents rotations in terms of angles rx,ry,rz on x,y,z cartesian axes
function Rotation(rx, ry, rz) {
  this.x = rx; this.y = ry; this.z = rz;
}

// Chg basis to account for fact that rotate_() is not commutative
Rotation.prototype.toCSS = function() {
  return "rotateX(" + this.x + "deg) rotateY(" + this.y + "deg) rotateZ(" + this.z + "deg)";
}

Matrix = {
  dot: function(a, b) { var c = 0; for (var i = 0; i < a.length; i++) c += a[i]*b[i]; return c },
  chgBasis: function(b, a) { return [Matrix.dot(b[0],a), Matrix.dot(b[1],a), Matrix.dot(b[2],a)] }
}
