function newPuzzle(div) {
  Math.seedrandom(btoa(Date.now()));
  let a = Math.floor(25 * Math.random());
  let b = Math.floor(25 * Math.random());
  let c = Math.floor(25 * Math.random());
  let d = Math.floor(25 * Math.random());
  div.innerHTML = a.toString() + " " + b.toString() + " " + c.toString() + " " + d.toString();
}