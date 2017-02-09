var cp = {} // { (permutation): ((swap indices), LDF position) }
var cornerNames = ["LDB", "LDF", "LUF", "LUB", "RUB", "RUF", "RDF", "RDB"];
function dictify(arr) { result = {}; for (var i = 0; i < arr.length; ++i) result[arr[i]] = true; return result };
var cornerStickers = {
  "LDB": dictify([15, 44, 51]),
  "LDF": dictify([17, 24, 45]),
  "LUF": dictify([ 6, 11, 18]),
  "LUB": dictify([ 0,  9, 38]),
  "RUB": dictify([ 2, 29, 36]),
  "RUF": dictify([ 8, 20, 27]),
  "RDF": dictify([26, 33, 47]),
  "RDB": dictify([35, 42, 53])
}
var generators = { "R": [0, 1, 2, 3, 5, 6, 7, 4], "U": [0, 1, 5, 2, 3, 4, 6, 7], "F": [0, 6, 1, 3, 4, 2, 5, 7],
                   "L": [1, 2, 3, 0, 4, 5, 6, 7], "D": [7, 0, 2, 3, 4, 5, 1, 6], "B": [3, 1, 2, 4, 7, 5, 6, 0],
                   "x": [3, 0, 1, 2, 5, 6, 7, 4], "y": [1, 6, 5, 2, 3, 4, 7, 0], "z": [7, 6, 1, 0, 3, 2, 5, 4] };

function permute(x, perm)
{
  var result = [];
  for (var i = 0; i < perm.length; ++i)
    result.push(x[perm[i]]);
  return result;
}

function swap(x, s)
{
  result = x.slice(0);
  var temp = result[s[0]];
  result[s[0]] = result[s[1]];
  result[s[1]] = temp;
  return result;
}

console.log("Generating 2-gen dict...");
var corners = [0, 1, 2, 3, 4, 5, 6, 7];
while (Object.keys(cp).length < 120)
{
  corners = permute(corners, generators[["R", "U"][Math.floor(2*Math.random())]]);
  if (!(JSON.stringify(corners) in cp))
    cp[JSON.stringify(corners)] = [[2, 2], cornerNames.indexOf("LDF")]; // LUF-LUF swap, LDF solved
}

console.log("Generating CP dict (LDB fixed)...");
function populate(corners, remainingCorners)
{
  if (corners.length < 8) {
    for (var i = 0; i < remainingCorners.length; ++i)
    {
      corners.push(remainingCorners[i]);
      populate(corners, remainingCorners.filter(x => x != remainingCorners[i]));
      corners.pop();
    }
    return;
  }

  var ldf = corners.indexOf(cornerNames.indexOf("LDF"));
  var p = swap(corners, [cornerNames.indexOf("LDF"), ldf]); // "insert" LDF
  var possibleSwaps = {
    true: function(ldf) { return [[2, 2], [4, 5], [5, 6], [6, 7], [7, 4], [4, 6]] }, // LDF solved
    false: function(ldf) { return [[ldf, 2], [ldf, 3], [ldf, 4], [ldf, 5], [ldf, 6], [ldf, 7]] } // LDF unsolved
  };
  var swaps = possibleSwaps[ldf == cornerNames.indexOf("LDF")](ldf);
  for (var i = 0; i < swaps.length; ++i)
  {
    var swapped = swap(p, swaps[i]);
    if ((JSON.stringify(swapped) in cp) && (JSON.stringify(cp[JSON.stringify(swapped)][0]) == JSON.stringify([2, 2]))) {
      cp[JSON.stringify(corners)] = [swaps[i], ldf];
      break;
    }
  }
}
populate([0], [1, 2, 3, 4, 5, 6, 7]);

console.log("Done.");

// converts things like R2 to RR, R' to RRR; removes whitespace
function flatten(s)
{
  var result = ""; var last = result;
  var specials = { " ": (x => ""), "'": (x => last+last), "2": (x => last),
                 "T": (x => "RURRRUUURRRFRRUUURRRUUURURRRFFF") };
  for (var i = 0; i < s.length; ++i)
  {
    if (s[i] in specials)
      result += specials[s[i]]();
    else {
      last = s[i];
      result += last;
    }
  }
  
  return result;
}

// reduces scramble to <R,U,F,r,u,f>
function rufduce(moves)
{
  var faces = ["U", "L", "F", "R", "B", "D"];
  var rotated = ["U", "L", "F", "R", "B", "D"];
  var I = [0, 1, 2, 3, 4, 5], x = [2, 1, 5, 3, 0, 4], z = [1, 5, 2, 0, 4, 3], y = [0, 2, 3, 4, 1, 5];
  var rotations = { "R": ["R", I], "U": ["U", I], "F": ["F", I],
                    "L": ["r", x], "B": ["f", z], "D": ["u", y] };
  var result = "";
  var flattened = flatten(moves);
  for (var i = 0; i < flattened.length; ++i)
  {
    var m = faces[rotated.indexOf(flattened[i].toUpperCase())];
    result += rotations[m][0];
    rotated = permute(rotated, rotations[m][1]);
  }
  return result;
}

function applyMoves(moves)
{
  var result = [0, 1, 2, 3, 4, 5, 6, 7];
  for (var i = 0; i < moves.length; ++i)
  {
    if (moves[i].toUpperCase() in generators)
      result = permute(result, generators[moves[i].toUpperCase()]);
  }
  return result;
}

// assumes DBL fixed
function applyMovesFixed(moves)
{
  return applyMoves(rufduce(moves));
}

// returns key swap (assumes DBL fixed)
function getSwapFixed(moves)
{
  return cp[JSON.stringify(applyMovesFixed(moves))];
}

// returns args for CSS demo
function getDemoFixed(moves)
{
  var swap = getSwapFixed(moves);
  var ldf = swap[1], a = swap[0][0], b = swap[0][1];
  
  var colors = "AAAAAA,BBBBBB,CCCCCC,DDDDDD,EEEEEE,FFFFFF";
  var stickers = "";
  for (var i = 0; i < 54; ++i)
  {
    if (i in cornerStickers[cornerNames[ldf]])
      stickers += "5";
    else if (a != b && (i in cornerStickers[cornerNames[a]] || i in cornerStickers[cornerNames[b]]))
      stickers += "3";
    else
      stickers += "0";
  }
  return "&stickers=" + colors + "|" + stickers;
}

/*
def swapToString(s):
    if s[1] in s[0]: # involves ULF
        result = cornerNames[s[1]] + "->" + cornerNames[s[0][~s[0].index(s[1])]]
    else:
        result = cornerNames[s[0][0]] + "<->" + cornerNames[s[0][1]] + " (" + cornerNames[s[1]] + ")"
    return result

def getSwap(moves):
    swapFixed, ldfFixed = getSwapFixed(moves)
    pFixed = applyMovesFixed(moves)
    p = applyMoves(moves)
    swap = ((p.index(pFixed[swapFixed[0]]), p.index(pFixed[swapFixed[1]])), p.index(cornerNames.index("LDF")))
    return swap
*/