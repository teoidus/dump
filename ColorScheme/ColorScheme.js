function ColorScheme(groups) {
  this.groups = groups; // [[a,b]] where a b are opposite colors
  // assumes groups[0][0] x groups[1][0] = group[2][0]
  this.problemInterval = null;
}

ColorScheme.prototype.getGroup = function(a) {
  for (var i = 0; i < this.groups.length; i++)
  for (var j = 0; j < this.groups[i].length; j++) {
    if (this.groups[i][j] == a) return i;
  }
}

ColorScheme.prototype.getSign = function(a) {
  for (var i = 0; i < this.groups.length; i++)
  for (var j = 0; j < this.groups[i].length; j++) {
    if (this.groups[i][j] == a) return j;
  }
}

// returns hidden group, and sign
ColorScheme.prototype.groupCrossProduct = function(a, b) {
  return {
    group: 3 - (a+b), // must be either 0, 1, or 2
    sign: Number((b-a+3)%3 != 1) // tests if a, b are in cyclically in order
  }
}

ColorScheme.prototype.getHiddenColor = function(a, b) {
  var product = this.groupCrossProduct(this.getGroup(a), this.getGroup(b));
  var sign = (this.getSign(a) + this.getSign(b) + product.sign) % 2;
  return this.groups[product.group][sign];
}

// returns two adj colors
ColorScheme.prototype.getRandomColors = function() {
  var nonGroup = Math.floor(Math.random() * 3); // group to not be used
  var g1 = (nonGroup+1) % 3; var rand1 = Math.floor(Math.random()*2);
  var g2 = (nonGroup+2) % 3; var rand2 = Math.floor(Math.random()*2);
  return [this.groups[g1][rand1], this.groups[g2][rand2]];
}

// {problem:[[index:color],[index:color]], solution:[index:color]}
ColorScheme.prototype.getProblem = function() {
  var pIndices = [
    [Cube.FACE_U, Cube.FACE_F],
    [Cube.FACE_R, Cube.FACE_U],
    [Cube.FACE_F, Cube.FACE_R]
  ];
  var sIndices = [Cube.FACE_L, Cube.FACE_B, Cube.FACE_D];
  var problemType = Math.floor(Math.random()*3);

  var problem = {}; var solution = {};
  var colors = this.getRandomColors();
  problem[pIndices[problemType][0]] = colors[0];
  problem[pIndices[problemType][1]] = colors[1];
  solution[sIndices[problemType]] = this.getHiddenColor(colors[0], colors[1]);

  return { problem: problem, solution: solution };
}

ColorScheme.prototype.presentProblem = function(problem, cubeCanvas,
  bgColor, unknownColor, delay) {
  var colors = [unknownColor, unknownColor, unknownColor, unknownColor,
    unknownColor, unknownColor];
  var palette = {
    W: '#FFFFFF', O: '#FF8C00', G: '#228B22',
    R: '#B22222', B: '#00008B', Y: '#DDDD00'}; //??
  for (var i in problem.problem) {
    colors[i] = palette[problem.problem[i]];
  }
  var cube = new Cube(colors, bgColor, 1, [0,0,0]);
  cubeCanvas.drawCube(cube, 0.2, 0);
  setTimeout(function() {
    for (var i in problem.solution) {
      colors[i] = palette[problem.solution[i]];
    }
    var cube = new Cube(colors, bgColor, 1, [0,0,0]);
    cubeCanvas.drawCube(cube, 0.2, 0);
  }, delay);
}

ColorScheme.prototype.presentProblems = function(cubeCanvas, bgColor, unknownColor,
  delay, postDelay) {
  if (this.problemInterval) clearInterval(this.problemInterval);
  with (this) {
    this.problemInterval = setInterval(function() {
      presentProblem(getProblem(), cubeCanvas, bgColor, unknownColor, delay);
    }, delay + postDelay);
  }
}
