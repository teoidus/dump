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

    var rotations = [{angle:90, axis:0}, {angle:90, axis:2}, {angle:0, axis:0},
                     {angle:-90, axis:2}, {angle:180, axis:0}, {angle:-90, axis:0}];
    this.rotations.push(new Rotation(rotations[face]));

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
    figure.style.opacity = 0.8;
    //figure.style.display = "block";
    this.div.appendChild(figure);
    figure.style.transition = "transform 0.3s";
    figure.style.transformOrigin = this.origins[i].toCSS();
    figure.style.transform = this.rotations[i].toCSS();

    /*console.log("Face",face,"rot",this.rotations[i].toCSS(),
            "origin",this.origins[i].toCSS(),
            "initial",JSON.stringify(this.initials[i]),
            figure.style.backgroundColor);*/
  }
}

CSSCube.prototype.updateTransforms = function() {
  for (var i = 0; i < this.figures.length; i++) {
    this.figures[i].style.transform = this.rotations[i].toCSS();
  }
}

CSSCube.prototype.testX = function() {
  for (var i = 0; i < this.rotations.length; i++) {
    this.rotations[i].addRotation({angle: 90, axis: 0});
  }
  this.updateTransforms();
}

CSSCube.prototype.testY = function() {
  for (var i = 0; i < this.rotations.length; i++) {
    this.rotations[i].addRotation({angle: 90, axis: 1});
  }
  this.updateTransforms();
}

CSSCube.prototype.testZ = function() {
  for (var i = 0; i < this.rotations.length; i++) {
    this.rotations[i].addRotation({angle: 90, axis: 2});
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

// Represent rotations as sequence of transformations
function Rotation(t) {
  this.transforms = [t]; // t = { angle, axis: 0, 1, or 2 }
}

Rotation.prototype.addRotation = function(t) {
  if (this.transforms.length > 0
    && this.transforms[this.transforms.length-1].axis == t.axis)
    this.transforms[this.transforms.length-1].angle += t.angle;
  else
    this.transforms.push(t);
  for (var i = 0; i < this.transforms.length; i++) {
    if (this.transforms[i].angle > 0)
      this.transforms[i].angle = this.transforms[i].angle % 360;
  }
}

// Chg basis to account for fact that rotate_() is not commutative
Rotation.prototype.toCSS = function() {
  var unitVectors = [[1,0,0], [0,1,0], [0,0,1]]; // cartesian system
  var basis = [[1,0,0], [0,0,-1], [0,-1,0]]; // graphics basis vectors

    var removeZero = function(x) { return (Math.abs(x) < 0.001) ? 0 : x };
    var removeZeros = function(x) {
      var r = [];
      for (var i = 0; i < x.length; i++) {
        r.push(removeZero(x[i]));
      }
      return r;
    };

  //console.log("Start toCSS");
  var axes = []; // axes of rotation
  for (var i = 0; i < this.transforms.length; i++) {
    var theta = this.transforms[i].angle * Math.PI/180;
    var axis = Matrix.chgBasis(basis, unitVectors[this.transforms[i].axis]);
    axes.push(axis);
    switch (this.transforms[i].axis) {
      case 0: var t = [
          [1, 0, 0],
          [0, Math.cos(theta), Math.sin(theta)],
          [0, Math.cos(theta + Math.PI/2), Math.sin(theta + Math.PI/2)]
        ]; break;
      case 1: var t = [
          [Math.sin(theta + Math.PI/2), 0, Math.cos(theta + Math.PI/2)],
          [0, 1, 0],
          [Math.sin(theta), 0, Math.cos(theta)]
        ]; break;
      case 2: var t = [
          [Math.cos(theta), Math.sin(theta), 0],
          [Math.cos(theta + Math.PI/2), Math.sin(theta + Math.PI/2), 0],
          [0, 0, 1],
        ]; break;
    }
    basis = Matrix.transformBasis(t, basis);
    //console.log("Pushed axis: " + JSON.stringify(removeZeros(axis)));
    //console.log("New basis: " + JSON.stringify([
    //  removeZeros(basis[0]),
    //  removeZeros(basis[1]),
    //  removeZeros(basis[2])]));
  }

  var s = "";
  for (var i = 0; i < axes.length; i++) {
    axes[i] = removeZeros(axes[i]);
    s += "rotate3d(" + axes[i].join(",") + "," + this.transforms[i].angle + "deg) ";
  }
  s = s.trim();
  //console.log(s);
  return s;
}

Matrix = {
  dot: function(a, b) { var c = 0; for (var i = 0; i < a.length; i++) c += a[i]*b[i]; return c },
  scale: function(a, b) { var c = []; for (var i = 0; i < b.length; i++) c.push(a*b[i]); return c },
  chgBasis: function(b, a) { return [Matrix.dot(b[0],a), Matrix.dot(b[1],a), Matrix.dot(b[2],a)] },
  transformBasis: function(t, b) {
    var result = Matrix.create(t.length, t[0].length);
    for (var i = 0; i < t.length; i++) {
      for (var j = 0; j < t[0].length; j++) {
        result[i][j] = Matrix.dot(t[j], b[i]);
      }
    }
    return result;
  },
  create(length) {
    var arr = new Array(length || 0),
        i = length;

    if (arguments.length > 1) {
        var args = Array.prototype.slice.call(arguments, 1);
        while(i--) arr[length-1 - i] = Matrix.create.apply(this, args);
    }

    return arr;
  },
  transpose: function(a) {
    var result = Matrix.create(a.length, a[0].length);
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < a[0].length; j++) {
        result[j][i] = a[i][j];
      }
    }
    return result;
  }
}
