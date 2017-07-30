function newPuzzle(interval, ops) {
  let seed = Math.seedrandom(btoa(Math.floor(Date.now() / interval)));
  let a = 0, b = 0, c = 0, d = 0, soln = [];
  do {
    console.log("seed:", seed);
    Math.seedrandom(seed);
    a = Math.floor(25 * Math.random());
    b = Math.floor(25 * Math.random());
    c = Math.floor(25 * Math.random());
    d = Math.floor(25 * Math.random());
    seed = btoa((parseInt(atob(seed).split("").reverse().join(""))+1).toString().split("").reverse().join(""));
    soln = solvePuzzle([a, b, c, d], ops);
  } while (soln.length == 0)
  return {numbers: [a, b, c, d], solution: soln};
}

function exprToStr(expr, ops) {
  let result = [];
  for (let i = 0; i < expr.length; ++i) {
    if (ops.replace(expr[i], "") == ops) { // is value
      result.push(expr[i]);
    } else { // is operator
      let b = result.pop();
      let a = result.pop();
      result.push("(" + a + " " + expr[i] + " " + b + ")");
    }
  }
  return result[0];
}

function solvePuzzle(p, ops, verbose, log) {
  let perm4 = [[0, 1, 2, 3], [0, 1, 3, 2], [0, 2, 1, 3], [0, 2, 3, 1], [0, 3, 1, 2], [0, 3, 2, 1],
              [1, 0, 2, 3], [1, 0, 3, 2], [1, 2, 0, 3], [1, 2, 3, 0], [1, 3, 0, 2], [1, 3, 2, 0],
              [2, 0, 1, 3], [2, 0, 3, 1], [2, 1, 0, 3], [2, 1, 3, 0], [2, 3, 0, 1], [2, 3, 1, 0],
              [3, 0, 1, 2], [3, 0, 2, 1], [3, 1, 0, 2], [3, 1, 2, 0], [3, 2, 0, 1], [3, 2, 1, 0]];
  let goal = 24;
  let epsilon = 1e-6; // tolerance for rounding errors
  for (let i = 0; i < perm4.length; ++i) { // evaluate each possible expression
    for (let j = 0; j < Math.pow(ops.length, ops.length-1); ++j) { // perform all possible operations
      let result = p[perm4[i][0]];
      let opindex = j;
      let expr = [result];
      for (let k = 1; k < p.length; ++k) {
        let op = ops[opindex % ops.length];
        expr.unshift(p[perm4[i][k]]); expr.push(op);
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
  return [];
}