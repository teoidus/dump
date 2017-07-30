function newPuzzle() {
  let seed = Math.seedrandom(btoa(Math.floor(Date.now() / 30e3)));
  let a = 0, b = 0, c = 0, d = 0;
  do {
    console.log("seed:", seed);
    Math.seedrandom(seed);
    a = Math.floor(25 * Math.random());
    b = Math.floor(25 * Math.random());
    c = Math.floor(25 * Math.random());
    d = Math.floor(25 * Math.random());
    seed = btoa(parseInt(atob(seed))+1);
  } while (typeof solvePuzzle([a, b, c, d]) == "undefined")
  return [a, b, c, d];
}

function exprToStr(expr, ops) {
  let result = [];
  for (let i = 0; i < expr.length; ++i) {
    if (ops.replace(expr[i], "") == ops) { // is value
      result.push(expr[i]);
    } else { // is operator
      a = result.pop();
      b = result.pop();
      result.push("(" + a + " " + expr[i] + " " + b + ")");
    }
  }
  return result[0];
}

function solvePuzzle(p, verbose, log) {
  let perm4 = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3], [0, 2, 3, 1], [0, 3, 1, 2], [0, 3, 2, 1],
              [1, 0, 2, 3], [1, 0, 3, 2], [1, 2, 0, 3], [1, 2, 3, 0], [1, 3, 0, 2], [1, 3, 2, 0],
              [2, 0, 1, 3], [2, 0, 3, 1], [2, 1, 0, 3], [2, 1, 3, 0], [2, 3, 0, 1], [2, 3, 1, 0],
              [3, 0, 1, 2], [3, 0, 2, 1], [3, 1, 0, 2], [3, 1, 2, 0], [3, 2, 0, 1], [3, 2, 1, 0]];
  let ops = "+-*/";
  let goal = 24;
  let epsilon = 1e-6; // tolerance for rounding errors
  for (let i = 0; i < perm4.length; ++i) { // evaluate each possible expression
    for (let j = 0; j < Math.pow(ops.length, ops.length-1); ++j) { // perform all possible operations
      let result = p[perm4[i][0]];
      let opindex = j;
      let expr = [result];
      for (let k = 1; k < p.length; ++k) {
        let op = ops[opindex % ops.length];
        expr.push(p[perm4[i][k]]); expr.push(op);
        result = eval("(" + p[perm4[i][k]] + ")" + op + "(" + result + ")");
        opindex = Math.floor(opindex / ops.length);
      }
      if (typeof log != "undefined" && verbose)
        log("Evaluating " + exprToStr(expr, ops) + " yields " + result + "\n");
      if (Math.abs(result-goal) < epsilon) {
        if (typeof log != "undefined") log("Solution found! Evaluating " + exprToStr(expr, ops) + " yields " + result + ".\n");
        return expr;
      }
    }
  }
  if (typeof log != "undefined") log("No solution found.\n");
}