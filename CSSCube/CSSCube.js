function CSSCube(id, stickers, size, div, stickerless, turnSpeed) { // stickers = [[rgb, opacity]], [U L F R B D]
  this.stickers = stickers;
  this.size = size; // length in pixels
  this.div = div;
  this.div.id = id;
  this.div.style.perspective = "2500px";
  this.div.style.width = size + "px";
  this.div.style.height = size + "px";

  this.N = 54;
  this.transitionSpeed = (typeof turnSpeed != "undefined") ? turnSpeed : 0.15;

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
        if (!stickerless) figure.style.border = "1px solid black";
        figure.style.backgroundColor = this.stickers[i][0];
        figure.style.opacity = this.stickers[i][1];
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
  
  // animations
  this.animation = [];
  this.playInterval = null;
  this.currentFrame = 0;
}

CSSCube.prototype.resetTransforms = function() {
  for (var i = 0; i < this.N; i++) {
    var s = ArrayCube.inverse(this.mapping)[i]; // compute transform for proper sticker
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

CSSCube.prototype.moveN = function(moveString, n) {
  if (moveString in ArrayCube.moveMaps) {
    var m = ArrayCube.moveMaps[moveString];
    for (var i = 0; i < this.N; i++) {
      var s = this.mapping[i];
      if (m[i].angle != 0) {
        this.rotations[s].addRotation({
          angle: m[i].angle * n,
          axis: m[i].axis
        }); // need to explicitly copy
      }
    }
    for (var i = 0; i < (4+n)%4; i++) {
      this.mapping = ArrayCube.apply(ArrayCube.mappings[moveString], this.mapping);
    }
    this.updateTransforms();
  }
}

CSSCube.prototype.move = function(moveString) {
  var m = moveString.substring(0,1);
  var nString = moveString.substring(1);
  
  var modifiers = {"'": -1, "2": 2}
  var n = 1;
  for (var i = 0; i < nString.length; ++i)
    if (nString[i] in modifiers)
      n *= modifiers[nString[i]];
  this.moveN(m, n);
}
      
CSSCube.prototype.parseMoves = function(s) {
  var wideMoves = {
    "u": ["U", "E'"],
    "l": ["L", "M"],
    "f": ["F", "S"],
    "r": ["R", "M'"],
    "b": ["B", "S'"],
    "d": ["D", "E"],
  };
  
  var tokens = s.split(" ");
  var moves = [];
  for (var i = 0; i < tokens.length; ++i) {
    var generator = tokens[i].substring(0,1);
    if (generator in wideMoves) {
      var m = wideMoves[generator];
      var n = tokens[i].substring(1);
      moves.push([m[0] + n, m[1] + n]);
    } else {
      moves.push([tokens[i]]);
    }
  }
  
  return moves;
}

CSSCube.prototype.moves = function(s) {
  var moves = this.parseMoves(s);
  for (var i = 0; i < moves.length; ++i)
    for (var j = 0; j < moves[i].length; ++j)
      this.move(moves[i][j]);
}

CSSCube.prototype.updateStickers = function() {
  for (var i = 0; i < this.figures.length; i++) {
    this.figures[i].style.backgroundColor = this.stickers[i][0];
    this.figures[i].style.opacity = this.stickers[i][1];
  }
}

CSSCube.prototype.loadAnimation = function(s) {
  console.log(s);
  this.animation = this.parseMoves(s);
}

CSSCube.prototype.next = function() {
  if (this.currentFrame < this.animation.length)
  {
    var move = this.animation[this.currentFrame];
    for (var i = 0; i < move.length; ++i) {
      this.move(move[i]);
    }
    this.currentFrame = Math.min(this.currentFrame + 1, this.animation.length);
  }
}

CSSCube.prototype.prev = function() {
  if (this.currentFrame > 0)
  {
    var move = this.animation[--this.currentFrame];
    for (var i = 0; i < move.length; ++i) {
      this.move(move[i] + "'");
    }
  }
}

CSSCube.prototype.play = function() {
  with (this) {
    if (!isPaused())
      pause();
    playInterval = setInterval(function() { next() }, 500);
  }
}

CSSCube.prototype.pause = function() {
  if (!this.isPaused()) {
    clearInterval(this.playInterval);
    this.playInterval = null;
  }
}

CSSCube.prototype.jumpToBeginning = function() {
  this.pause();
  while (this.currentFrame > 0) {
    this.prev();
  }
}

CSSCube.prototype.jumpToEnd = function() {
  this.pause();
  while (this.currentFrame < this.animation.length) {
    this.next();
  }
}

CSSCube.prototype.isPaused = function() {
  return this.playInterval == null;
}