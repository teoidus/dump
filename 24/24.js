function newPuzzle(div) {
  Math.seedrandom(btoa(Math.floor(Date.now() / 100000)));
  console.log("seed:", btoa(Math.floor(Date.now() / 100000)));
  let a = Math.floor(25 * Math.random());
  let b = Math.floor(25 * Math.random());
  let c = Math.floor(25 * Math.random());
  let d = Math.floor(25 * Math.random());
  return [a, b, c, d];
}