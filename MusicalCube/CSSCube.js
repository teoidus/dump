function CSSCube(id, stickers, filter, size, div) { // colorScheme = rgb, [U L F R B D]
  this.stickers = stickers;
  this.filter = filter;
  this.filtering = true;
  this.size = size; // length in pixels
  this.div = div;
  this.div.id = id;
  this.div.style.perspective = "2500px";
  this.div.style.width = size + "px";
  this.div.style.height = size + "px";

  this.N = 54;
  this.transitionSpeed = 0.1;

  this.mapping = [];
  for (var i = 0; i < this.N; i++) {
    this.mapping.push(i);
  }

  this.origins = [];
  this.rotations = [];
  this.initials = []; // initial positions before transition to 3d
  this.figures = [];
  for (var i = 0; i < this.N; i++) {
    // stickered UL to UR, down to DL to DR
    this.rotations.push({angle: 0, axis:0});
    this.origins.push(new RelativeOrigin(0,0,0,0));
    this.initials.push({left:0, top:0});
        var figure = document.createElement("figure");
        this.figures.push(figure);
        figure.id = i.toString();
        figure.style.position = "fixed";
        figure.style.transformStyle = "preserve-3d";
        figure.style.width = (this.size/3) + "px";
        figure.style.height = (this.size/3) + "px";
        //figure.style.border = "1px solid black";
        figure.style.backgroundColor = this.stickers[i];
        figure.style.opacity = 0.8;
        //figure.style.display = "block";
        this.div.appendChild(figure);
        figure.style.transition = "transform " + this.transitionSpeed + "s";
  }
  this.div.style.transformStyle = "preserve-3d";
  this.div.style.transition = "transform " + this.transitionSpeed + "s";
  with (this) {
    setTimeout(function() {
      resetTransforms();
      updateStickers();
    }, 100);
    setTimeout(function() {
      div.style.transform = "rotateX(-20deg) rotateY(-15deg)";
    }, 250);
  }
  //this.figures[0].style.backgroundColor = "black";
}

CSSCube.prototype.resetTransforms = function() {
  //console.log("behgin:" + JSON.stringify(ArrayCube.inverse(this.mapping)));
  for (var i = 0; i < this.N; i++) {
    var s = ArrayCube.inverse(this.mapping)[i]; // compute transform for proper sticker
    //console.log("Figure " + i + " -> position " + s);
    var face = Math.floor(s/9);
    var rotations = [{angle:90, axis:0}, {angle:90, axis:2}, {angle:0, axis:2},
                     {angle:-90, axis:2}, {angle:180, axis:2}, {angle:-90, axis:0}];
    this.rotations[i] = new Rotation(rotations[face]);

    var sticker = s % 9; // location of sticker relative to face
    var origins = [ // coords = cube center - sticker center
      [ 1, 1], [ 0, 1], [-1, 1],
      [ 1, 0], [ 0, 0], [-1, 0],
      [ 1,-1], [ 0,-1], [-1,-1]
    ];
    var origin = origins[sticker];
    this.origins[i] = new RelativeOrigin(0.5+origin[0], 0.5+origin[1], -1.5,
      this.size/3); // this.size/3 = length of sticker

    this.initials[i] = {
      left: (sticker%3) * this.size/3,
       top: Math.floor(sticker/3) * this.size/3
    };

    this.figures[i].style.left = this.initials[i].left + "px";
    this.figures[i].style.top = this.initials[i].top + "px";
    this.figures[i].style.transformOrigin = this.origins[i].toCSS();
    this.figures[i].style.transform = this.rotations[i].toCSS();

    /*console.log("Face",face,"rot",this.rotations[i].toCSS(),
            "origin",this.origins[i].toCSS(),
            "initial",JSON.stringify(this.initials[i]),
            this.figures[i].style.backgroundColor,this.figures[i].style.width,
          this.figures[i].style.height, this.figures[i].style.left,
        this.figures[i].style.top);*/
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
    // translate from cube notation to cartesian coords
    this.rotations[i].addRotation({angle: 90, axis: 2});
  }
  this.updateTransforms();
}

CSSCube.prototype.testZ = function() {
  for (var i = 0; i < this.rotations.length; i++) {
    // translate from cube notation to cartesian coords
    this.rotations[i].addRotation({angle: -90, axis: 1});
  }
  this.updateTransforms();
}

CSSCube.prototype.move = function(moveString, n) {
  if (moveString in ArrayCube.moveMaps) {
    var m = ArrayCube.moveMaps[moveString];
    for (var i = 0; i < this.N; i++) {
      //console.log(moveString + " " + JSON.stringify(m));
      var s = this.mapping[i];
      if (m[i].angle != 0) {
        //console.log("i = " + i);
        this.rotations[s].addRotation({
          angle: m[i].angle * n,
          axis: m[i].axis
        }); // need to explicitly copy
      }
    }
    for (var i = 0; i < n; i++) {
      this.mapping = ArrayCube.apply(ArrayCube.mappings[moveString], this.mapping);
    }
    //console.log(JSON.stringify(this.mapping) + " (applied " +
    //  JSON.stringify(ArrayCube.mappings[moveString]) + ")");
    this.updateTransforms();
  }
}

CSSCube.prototype.updateStickers = function() {
  for (var i = 0; i < this.figures.length; i++) {
    if (this.filtering && this.filter[i].filtering) {
      this.figures[i].style.backgroundColor = this.filter[i].color;
    } else
      this.figures[i].style.backgroundColor = this.stickers[i];
  }
}

CSSCube.prototype.newFilter = function(filter) {
  this.filter = filter;
  this.updateStickers();
}

CSSCube.prototype.filterOn = function() {
  this.filtering = true; this.updateStickers();
}
CSSCube.prototype.filterOff = function() {
  this.filtering = false; this.updateStickers();
}