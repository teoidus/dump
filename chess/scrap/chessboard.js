//TODO:
// 'flip overlay' button
// only think on 'your' turn
// when in check, only generate king moves or captures
// handle stalemates

var start = Date.now();
console.log('Initializing:');

console.log('- board constants');
var squares = [
  'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', '', '', '', '', '', '', '', '',
  'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', '', '', '', '', '', '', '', '',
  'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', '', '', '', '', '', '', '', '',
  'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', '', '', '', '', '', '', '', '',
  'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', '', '', '', '', '', '', '', '',
  'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', '', '', '', '', '', '', '', '',
  'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', '', '', '', '', '', '', '', '',
  'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8', '', '', '', '', '', '', '', ''
];
var sqIDs = {'a1':0|0,'b1':1|0,'c1':2|0,'d1':3|0,'e1':4|0,'f1':5|0,'g1':6|0,'h1':7|0,'a2':16|0,'b2':17|0,'c2':18|0,'d2':19|0,'e2':20|0,'f2':21|0,'g2':22|0,'h2':23|0,'a3':32|0,'b3':33|0,'c3':34|0,'d3':35|0,'e3':36|0,'f3':37|0,'g3':38|0,'h3':39|0,'a4':48|0,'b4':49|0,'c4':50|0,'d4':51|0,'e4':52|0,'f4':53|0,'g4':54|0,'h4':55|0,'a5':64|0,'b5':65|0,'c5':66|0,'d5':67|0,'e5':68|0,'f5':69|0,'g5':70|0,'h5':71|0,'a6':80|0,'b6':81|0,'c6':82|0,'d6':83|0,'e6':84|0,'f6':85|0,'g6':86|0,'h6':87|0,'a7':96|0,'b7':97|0,'c7':98|0,'d7':99|0,'e7':100|0,'f7':101|0,'g7':102|0,'h7':103|0,'a8':112|0,'b8':113|0,'c8':114|0,'d8':115|0,'e8':116|0,'f8':117|0,'g8':118|0,'h8':119};

console.log('- piece & move constants');
// bitfields for pieces (1 byte/piece): (msb) pawn knight bishop rook queen king black white (lsb)
var ee = 0x00|0,
  wp = 0x81|0, wn = 0x41|0, wb = 0x21|0, wr = 0x11|0, wq = 0x09|0, wk = 0x05|0,
  bp = 0x82|0, bn = 0x42|0, bb = 0x22|0, br = 0x12|0, bq = 0x0A|0, bk = 0x06|0,
  pawn = 0x20|0, knight = 0x10|0, bishop = 0x08|0, rook = 0x04|0, queen = 0x02|0, king = 0x01|0;
var pieceNames = {0x20: 'p', 0x10: 'n', 0x08: 'b', 0x04: 'r', 0x02: 'q', 0x01: 'k'};
var pieces = new Uint32Array([wp, wn, wb, wr, wq, wk, bp, bn, bb, br, bq, bk]);
var sliderMask = 0x38|0, colorMask = 0x3|0;
// bitfields for moves (4 bytes/move): (msb) ep(1) promotion(7) capture(8) ooo(1) to(7) oo(1) from(7)
var promotionMask = 0x7F000000|0,
      captureMask = 0x00FF0000|0,
           toMask = 0x00007F00|0,
         fromMask = 0x0000007F|0,
           epMask = 0x80000000|0,
       castleMask = 0x00008080|0,
           ooMask = 0x00000080|0,
          oooMask = 0x00008000|0;
var castleMasks = new Uint32Array([ // masks away castle flags during make()
  0xD, 0xF, 0xF, 0xF, 0xC, 0xF, 0xF, 0xE, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0x7, 0xF, 0xF, 0xF, 0x3, 0xF, 0xF, 0xB, 0,0,0,0,0,0,0,0
]);

console.log('- board');
var board = new Uint32Array([
  wr, wn, wb, wq, wk, wb, wn, wr, 0,0,0,0,0,0,0,0,
  wp, wp, wp, wp, wp, wp, wp, wp, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  bp, bp, bp, bp, bp, bp, bp, bp, 0,0,0,0,0,0,0,0,
  br, bn, bb, bq, bk, bb, bn, br, 0,0,0,0,0,0,0,0
]);
var initialBoard = [
  wr, wn, wb, wq, wk, wb, wn, wr, 0,0,0,0,0,0,0,0,
  wp, wp, wp, wp, wp, wp, wp, wp, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
  bp, bp, bp, bp, bp, bp, bp, bp, 0,0,0,0,0,0,0,0,
  br, bn, bb, bq, bk, bb, bn, br, 0,0,0,0,0,0,0,0
];
var kings = new Uint32Array([sqIDs['e1'], sqIDs['e8']]);
var turn = 0|0; // (0,1) = (w,b)
var moves = 0|0;
var maxLen = 512|0; // please don't play extra long games
var castling = 0xF|0; // (msb) bq bk wq wk (lsb)
var castlings = new Uint32Array(maxLen);
var ep = -1|0;
var eps = new Uint32Array(maxLen);

var maxMoveShift = 8|0; // arbitrary max branching factor
var moveList = new Uint32Array(maxLen * (1 << maxMoveShift));
var moveListMax = new Uint32Array(1 << maxMoveShift);

console.log('- movegen constants');
// piece deltas (used in move generation and attack checking)
var deltas = new Int32Array(16 * 256);
// white pieces
deltas.set([15, 17], 16*wp);
deltas.set([-33, -31, -14, 18, 33, 31, 14, -18], 16*wn);
deltas.set([-17, -15, 17, 15], 16*wb);
deltas.set([-1, -16, 1, 16], 16*wr);
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*wq);
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*wk);
// black pieces
deltas.set([-15, -17], 16*bp);
deltas.set([-33, -31, -14, 18, 33, 31, 14, -18], 16*bn);
deltas.set([-17, -15, 17, 15], 16*bb);
deltas.set([-1, -16, 1, 16], 16*br);
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*bq);
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*bk);
//this.pieceTypes = Object.keys(this.pieceDeltas);

console.log('- evaluation tables');
var materials = new Int32Array(256);
materials[wp] = 100;
materials[wn] = 320;
materials[wb] = 330;
materials[wr] = 500;
materials[wq] = 900;
materials[wk] = 20000;
materials[bp] = -100;
materials[bn] = -320;
materials[bb] = -330;
materials[br] = -500;
materials[bq] = -900;
materials[bk] = -20000;
// piece-square tables (used in evaluation)
evalTable = new Int32Array(2 * 256 * 128); // 256 KB
evalTable.set([
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0,
   5, 10, 10,-20,-20, 10, 10,  5, 0,0,0,0,0,0,0,0,
   5, -5,-10,  0,  0,-10, -5,  5, 0,0,0,0,0,0,0,0,
   0,  0,  0, 20, 20,  0,  0,  0, 0,0,0,0,0,0,0,0,
   5,  5, 10, 25, 25, 10,  5,  5, 0,0,0,0,0,0,0,0,
  10, 10, 20, 30, 30, 20, 10, 10, 0,0,0,0,0,0,0,0,
  50, 50, 50, 50, 50, 50, 50, 50, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0
], 128*wp);
evalTable.set([
  -50,-40,-30,-30,-30,-30,-40,-50, 0,0,0,0,0,0,0,0,
  -40,-20,  0,  0,  0,  0,-20,-40, 0,0,0,0,0,0,0,0,
  -30,  5, 10, 15, 15, 10,  5,-30, 0,0,0,0,0,0,0,0,
  -30,  0, 15, 20, 20, 15,  0,-30, 0,0,0,0,0,0,0,0,
  -30,  5, 15, 20, 20, 15,  5,-30, 0,0,0,0,0,0,0,0,
  -30,  0, 10, 15, 15, 10,  0,-30, 0,0,0,0,0,0,0,0,
  -40,-20,  0,  5,  5,  0,-20,-40, 0,0,0,0,0,0,0,0,
  -50,-40,-30,-30,-30,-30,-40,-50, 0,0,0,0,0,0,0,0
], 128*wn);
evalTable.set([
  -20,-10,-10,-10,-10,-10,-10,-20, 0,0,0,0,0,0,0,0,
  -10,  0,  0,  0,  0,  0,  0,-10, 0,0,0,0,0,0,0,0,
  -10, 10, 10, 10, 10, 10, 10,-10, 0,0,0,0,0,0,0,0,
  -10,  0, 10, 10, 10, 10,  0,-10, 0,0,0,0,0,0,0,0,
  -10,  5,  5, 10, 10,  5,  5,-10, 0,0,0,0,0,0,0,0,
  -10,  5,  0,  0,  0,  0,  5,-10, 0,0,0,0,0,0,0,0,
  -10,  0,  5, 10, 10,  5,  0,-10, 0,0,0,0,0,0,0,0,
  -20,-10,-10,-10,-10,-10,-10,-20, 0,0,0,0,0,0,0,0
], 128*wb);
evalTable.set([
   0,  0,  0,  5,  5,  0,  0,  0, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
   5, 10, 10, 10, 10, 10, 10,  5, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0
], 128*wr);
evalTable.set([
  -20,-10,-10, -5, -5,-10,-10,-20, 0,0,0,0,0,0,0,0,
  -10,  0,  0,  0,  0,  0,  0,-10, 0,0,0,0,0,0,0,0,
  -10,  0,  5,  5,  5,  5,  0,-10, 0,0,0,0,0,0,0,0,
   -5,  0,  5,  5,  5,  5,  0, -5, 0,0,0,0,0,0,0,0,
   -5,  0,  5,  5,  5,  5,  0, -5, 0,0,0,0,0,0,0,0,
  -10,  0,  5,  5,  5,  5,  0,-10, 0,0,0,0,0,0,0,0,
  -10,  0,  0,  0,  0,  0,  0,-10, 0,0,0,0,0,0,0,0,
  -20,-10,-10, -5, -5,-10,-10,-20, 0,0,0,0,0,0,0,0
], 128*wq);
evalTable.set([
   20, 30, 10,  0,  0, 10, 30, 20, 0,0,0,0,0,0,0,0,
   20, 20,  0,  0,  0,  0, 20, 20, 0,0,0,0,0,0,0,0,
  -10,-20,-20,-20,-20,-20,-20,-10, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0,
  -20,-30,-30,-40,-40,-30,-30,-20, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0
], 128*wk);
for (var i = 0; i < 6; ++i) // set up endgame piece-square tables for white
  for (var j = 0; j < 128; ++j)
    evalTable[128*(pieces[i]+256) + j] = evalTable[128*pieces[i] + j];
// king endgame-tables are different
evalTable.set([
  -50,-40,-30,-20,-20,-30,-40,-50, 0,0,0,0,0,0,0,0,
  -30,-20,-10,  0,  0,-10,-20,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 20, 30, 30, 20,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 30, 40, 40, 30,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 30, 40, 40, 30,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 20, 30, 30, 20,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-30,  0,  0,  0,  0,-30,-30, 0,0,0,0,0,0,0,0,
  -50,-30,-30,-30,-30,-30,-30,-50, 0,0,0,0,0,0,0,0
], 128*(wk + 256));
// make negated & mirrored copy of tables for black
for (var i = 6; i < 12; ++i) {
  for (var r = 0; r < 8; ++r) {
    for (var f = 0; f < 8; ++f) {
      evalTable[128*pieces[i] + 16*r + f] = -evalTable[128*pieces[i-6] + 16*(7-r) + f];
      evalTable[128*(pieces[i]+256) + 16*r + f] = -evalTable[128*(pieces[i-6]+256) + 16*(7-r) + f];
    }
  }
}

console.log('- engine functions');
function print() {
  var pieces = {
    0x00: "ee",
    0x81: "wp", 0x41: "wn", 0x21: "wb", 0x11: "wr", 0x09: "wq", 0x05: "wk",
    0x82: "bp", 0x42: "bn", 0x22: "bb", 0x12: "br", 0x0A: "bq", 0x06: "bk"
  }
  for (var r = 7; r >= 0; --r) {
    var line = '';
    for (var f = 0; f < 8; ++f) {
      var k = board[(r << 4)|f];
      if (k in pieces)
        line += pieces[k];
      else
        line += k.toString(16).toUpperCase();
    }
    console.log(line);
  }
  console.log('castling:',castling,'ep:',ep,'->',squares[ep],'moves:',moves);
}

function resetBoard() {
  for (var i = 0; i < 128; ++i)
    board[i] = initialBoard[i]|0;
  turn = 0|0;
  moves = 0|0;
  castling = 0xF|0;
  ep = -1|0;
  kings = new Uint32Array([sqIDs['e1'], sqIDs['e8']]);
}

function evaluate() {
  var result = 0|0;
  var i = 64|0; do {
    i = (i - 1)|0;
    var sq = (i + (i & ~7))|0;
    var p = board[sq]|0;
    if ((p|0) != (0|0)) {
      result = (result + (evalTable[(p << 7) + sq]|0))|0;
      result = (result + (materials[p]|0))|0;
    }
  } while (i != (0|0));
  return (turn|0) ? -result|0 : result|0;
}

function isAttacked(sq, side) {
  sq = sq|0;
  side = side|0;
  var offset = (side|0) ? 6|0 : 0|0;
  var i = 6|0; do {
    i = (i - 1)|0;
    var p = pieces[offset + i]|0;
    if (((p & sliderMask)|0) != (0|0)) {
      for (var j = (p << 4)|0; (deltas[j]|0) != 0; j = (j + 1)|0) {
        var d = deltas[j]|0;
        for (var to = (sq + d)|0; (((to & 0x88)|0) == (0|0)); to = (to + d)|0)
          if ((board[to]|0) != (0|0)) {
            if ((board[to]|0) == (p|0)) {
              //console.log('caught', p, 'at', to, '(sliding)', board[to]);
              return 1|0;
            }
            break;
          }
      }
    } else {
      for (var j = (p << 4)|0; (deltas[j]|0) != 0; j = (j + 1)|0) {
        var to = (sq - (deltas[j]|0))|0; // pawns captures are 'reversed'
        if (((to & 0x88)|0) != 0) continue; // off board
        if ((board[to]|0) == (p|0)) {
          //console.log('caught', p, 'at', to, board[to]);
          return 1|0;
        }
      }
    }
  } while (i != (0|0));
  return 0|0;
}

function make(move) {
  move = move|0;
  castlings[moves] = castling|0;
  eps[moves] = ep|0;
  moves = (moves + 1)|0;
  
  // decompose bitfields
  var fr = (move & fromMask)|0;
  var to = ((move & toMask) >> 8)|0;
  var p = board[fr]|0;
  //console.log('move', move, 'fr', fr, 'to', to, 'p', p);
  
  // move piece & update castling rights & track king locations & ep
  board[to] = p; board[fr] = 0|0;
  if (((p >> 2)|0) == (king|0))
    kings[turn] = to|0;
  castling &= castleMasks[fr]|0;
  castling &= castleMasks[to]|0;
  var sign = (turn|0) ? 1|0 : -1|0;
  ep = ((((p >> 2)|0) == (pawn|0)) && ((((to - fr)|0) == (32|0)) || (((to - fr)|0) == (-32|0)))) ? (to + (sign<<4))|0 : -1|0;
  //console.log('updated board', board);
  
  if (((move & castleMask)|0) != (0|0)) { // handle castling
    //console.log('is a castling move');
    var rank = (turn|0) ? (7<<4)|0 : 0|0;
    var rfr, rto;
    if (((move & ooMask)|0) != (0|0)) {
      rfr = (7 + rank)|0, rto = (5 + rank)|0;
    } else {
      rfr = (0 + rank)|0, rto = (3 + rank)|0;
    }
    board[rto] = board[rfr]|0; board[rfr] = 0|0;
  } else { // handle ep & promotions
    if (((move & promotionMask)|0) != (0|0)) {// if promotion
      //console.log('is promotion');
      board[to] = (((move & promotionMask)|0) >> 24)|0; // place promotion piece
    } else if (((move & epMask)|0) != (0|0)) { // else if ep
      //console.log('is ep',epMask,move&epMask,move);
      board[to + sign*16] = 0|0; // capture ep pawn
    }
    //console.log('new ep',ep);
  }
  turn ^= 1|0;
}

function unmake(move) {
  move = move|0;
  moves = (moves - 1)|0;
  castling = castlings[moves]|0;
  ep = eps[moves]|0;
  turn ^= 1|0;
  
  // decompose bitfields
  var fr = (move & fromMask)|0;
  var to = (((move & toMask)|0) >> 8)|0;
  var c = (((move & captureMask)|0) >> 16)|0;
  var p = board[to]|0;
  
  // move piece, track king locations
  board[fr] = p; board[to] = c;
  if (((p >> 2)|0) == king)
    kings[turn] = fr|0;
  
  if (((move & castleMask)|0) != (0|0)) { // handle castling
    var rank = (turn|0) ? (7<<4)|0 : 0|0;
    var rfr, rto;
    if (((move & ooMask)|0) != (0|0)) {
      rfr = (7 + rank)|0, rto = (5 + rank)|0;
    } else {
      rfr = (0 + rank)|0, rto = (3 + rank)|0;
    }
    board[rfr] = board[rto]|0; board[rto] = 0|0;
  } else { // handle promotions & ep
    var sign = (turn) ? 1|0 : -1|0;
    if (((move & promotionMask)|0) != (0|0)) // if promotion
      board[fr] = ((pawn << 2) | (1 << turn))|0; // place unpromoted pawn
    else if (((move & epMask)|0) != (0|0)) { // else if ep
      board[to + sign*16] = (p ^ 3)|0; // place enemy pawn
    }
  }
}

// Used in movegen()
var sqcheck = new Uint32Array([ // 1st in each list of 4 = k's dest sq.
// Lists (null-terminated) give squares to check for attackers/occupiers before castling.
  sqIDs['g1'], sqIDs['f1'], 0, 0,
  sqIDs['c1'], sqIDs['b1'], sqIDs['d1'], 0,
  sqIDs['g8'], sqIDs['f8'], 0, 0,
  sqIDs['c8'], sqIDs['b8'], sqIDs['d8'], 0
]);
var checkKing = new Uint32Array([ // 1 if need check if attacked, 0 if only check occupancy
  1, 1, 0, 0,
  1, 0, 1, 0,
  1, 1, 0, 0,
  1, 0, 1, 0
]);
var castleBits = new Uint32Array([ooMask, oooMask, ooMask, oooMask]); // one for each entry in sqcheck
function movegen() {
  ////console.log('started movegen');
  var newMax = 0|0;
  var offset = (moves << maxMoveShift)|0;
  var turnBit = (1 << turn)|0;
  var i = 64|0; do {
    var i = (i - 1)|0;
    var sq = (i + (i & ~7))|0;
    //console.log('Considering sq',squares[sq]); print();
    if (((board[sq] & turnBit)|0) != (0|0)) { // if current piece can move
      //console.log('Piece can move!');
      var p = board[sq]|0;
      if (((p >> 2)|0) != (pawn|0)) { // if not pawn
        //console.log('Piece is not a pawn');
        if (((p & sliderMask)|0) != (0|0)) { // if sliding
          //console.log('Piece slides');
          var j = (p << 4)|0; while ((deltas[j]|0) != (0|0)) { // for all deltas
            var d = deltas[j]|0;
            //console.log('Considering delta',d)
            for (var to = (sq + d)|0; (((to & 0x88)|0) == (0|0)); to = (to + d)|0) { // while tosq is on board, generate sliding attacks
              var c = board[to]|0;
              //console.log('Considering sq',squares[to]);
              if (c != (0|0)) { // if obstructed
                //console.log('Ran into obstruction');
                if (((c & turnBit)|0) == (0|0)) { // if obstructed piece is enemy
                  //console.log('Added a capture',moveToStr((sq | (to << 8) | (c << 16))|0));
                  moveList[offset+newMax] = (sq | (to << 8) | (c << 16))|0; // add capture
                  newMax = (newMax + 1)|0;
                }
                break; // stop generating sliding attacks
              } else {
                //console.log('Added sliding attack',moveToStr((sq | (to << 8))|0));
                moveList[offset+newMax] = (sq | (to << 8))|0; // add sliding attack and continue
                newMax = (newMax + 1)|0;
              }
            }
            j = (j + 1)|0;
          }
        } else { // not sliding
          //console.log('Piece doesnt slide');
          var j = (p << 4)|0; while ((deltas[j]|0) != (0|0)) { // for all deltas
            //console.log('Considering delta',deltas[j],'j',j,'deltas[j]',deltas[j]);
            var to = (sq + (deltas[j]|0))|0;
            var c = board[to]|0;
            j = (j + 1)|0;
            if ((((to & 0x88)|0) != (0|0)) || (((c & turnBit)|0) != (0|0)))
              continue; // off board or friendly obstruction
            moveList[offset+newMax] = (sq | (to << 8) | (c << 16))|0;
            newMax = (newMax + 1)|0;
          }
          if (((p >> 2)|0) == king) { // if king, generate castlings
            //console.log('Piece is a king');
            var enemy = (turn ^ 1)|0;
            var j = 4|0; do {
              j = (j - 1)|0;
              if ((castling & (1 << j)) != (0|0)) {
                var ok = 1|0;
                var k = (j << 2)|0; while ((sqcheck[k]|0) != (0|0)) {
                  var chk = sqcheck[k]|0;
                  if ((board[chk]|0) != (0|0) || ((checkKing[k]|0 != (0|0)) && (isAttacked(chk, enemy) != (0|0)))) {
                    ok = 0|0;
                    break;
                  }
                  k = (k + 1)|0;
                }
                if ((ok|0) != (0|0)) {
                  moveList[offset+newMax] = (sq | ((sqcheck[j << 2]|0) << 8) | (castleBits[j]|0))|0;
                  newMax = (newMax + 1)|0;
                }
              }
            } while ((j|0) != (0|0));
          }
        }
      } else { // pawn moves
        //console.log('Piece is a pawn');
        var sign = (turn|0) ? -1|0 : 1|0;
        var doubleRank = (turn|0) ? 6|0 : 1|0;
        var promRank = (turn|0) ? 0|0 : 7|0;
        
        var first = (sq + (sign<<4))|0;
        if ((board[first]|0) == (0|0)) { // single step if empty
          //console.log('adding single step');
          if (((first >> 4)|0) == (promRank|0)) {
            //console.log('Adding as promotions',moveToStr((sq | (first << 8) | (turnBit << 24))|0));
            var template = (sq | (first << 8) | (turnBit << 24))|0;
            moveList[offset+newMax] = (template | (queen << 26))|0;
            moveList[offset+newMax+1] = (template | (rook << 26))|0;
            moveList[offset+newMax+2] = (template | (bishop << 26))|0;
            moveList[offset+newMax+3] = (template | (knight << 26))|0;
            newMax = (newMax + 4)|0;
          } else {
            //console.log('adding normal step',moveToStr((sq | (first << 8))|0));
            moveList[offset+newMax] = (sq | (first << 8))|0;
            newMax = (newMax + 1)|0;
          }
          var second = (sq + (sign<<5))|0;
          if (((sq >> 4) == doubleRank) && ((board[second]|0) == (0|0))) { // double step if empty
            moveList[offset+newMax] = (sq | (second << 8))|0;
            newMax = (newMax + 1)|0;
          }
        }
        var j = (p << 4)|0; while ((deltas[j]|0) != (0|0)) { // for all captures
          var capt = (sq + (deltas[j]|0))|0;
          //console.log('considering captures to',squares[capt]);
          if ((((capt & 0x88)|0) == (0|0)) && ((board[capt]|0) != (0|0))) {
            if ((((board[capt]|0) & turnBit)|0) == (0|0)) { // found enemy piece
              if (((capt >> 4)|0) == (promRank|0)) {
                //console.log('adding as promotion:','capt>>4',capt>>4,'promRank',promRank,moveToStr((capt | (first << 8) | (turnBit << 24))|0));
                var template = (sq | (capt << 8) | ((board[capt]|0) << 16) | (turnBit << 24))|0;
                moveList[offset+newMax] = (template | (queen << 26))|0;
                moveList[offset+newMax+1] = (template | (rook << 26))|0;
                moveList[offset+newMax+2] = (template | (bishop << 26))|0;
                moveList[offset+newMax+3] = (template | (knight << 26))|0;
                newMax = (newMax + 4)|0;
              } else {
                //console.log('adding as normal capture',moveToStr((sq | (capt << 8) | ((board[capt]|0) << 16))|0));
                moveList[offset+newMax] = (sq | (capt << 8) | ((board[capt]|0) << 16))|0;
                newMax = (newMax + 1)|0;
              }
            }
          } else if ((capt|0) == (ep|0)) {
            //console.log('adding en passant',moveToStr((sq | (capt << 8) | epMask)|0));
            moveList[offset+newMax] = (sq | (capt << 8) | epMask)|0;
            newMax = (newMax + 1)|0;
          }
          j = (j + 1)|0;
        }
      }
    }
  } while (i != (0|0));
  moveListMax[moves] = newMax;
}

function moveToStr(m) {
  return squares[m & fromMask] + squares[(m & toMask) >> 8]
    + ', ' + (m & 0xFF) + ' ' + ((m >> 8) & 0xFF)
    + ' ' + ((m >> 16) & 0xFF) + ' ' + ((m >> 24) & 0xFF);
}

function legalize() {
  //console.log('legalize: moves',moves,'moveListMax',moveListMax[moves]); print();
  var offset = (moves << maxMoveShift)|0, newMax = 0|0;
  for (var i = 0|0; (i|0) < (moveListMax[moves]|0); i = (i + 1)|0) {
    //console.log('checking move',i,'offset',offset,'j',j,'m[j]'); print();
    var j = (offset + i)|0;
    if (((((moveList[j]|0) & castleMask)|0) != (0|0))
      && ((isAttacked(kings[turn]|0, (turn ^ 1)|0)|0) != (0|0))) {
      //console.log('is a castle out of check, failed');
      continue; // can't castle out of check
    }
    make(moveList[j]|0);
    //console.log('after legalize make',moveToStr(moveList[j]),board[70],board[100]); print();
    if ((isAttacked(kings[turn ^ 1]|0, turn|0)|0) == (0|0)) { // can't move into check
      moveList[offset+newMax] = moveList[j]|0;
      newMax = (newMax + 1)|0;
      //console.log('succeeded, added move', moveToStr(moveList[j]),board[70],board[100]);
    } else {
      //console.log('moves into check', moveToStr(moveList[j]),board[70],board[100]);
    }
    unmake(moveList[j]|0);
    //console.log('after legalize unmake',moveToStr(moveList[j]),board[70],board[100]); print();
  }
  moveListMax[moves] = newMax|0;
  //console.log('done legalize'); print();
}

// convert into heap operations
function sort() {
  var copied = [];
  var offset = (moves << maxMoveShift)|0;
  for (var i = 0|0; (i|0) < (moveListMax[moves]|0); i = (i + 1)|0) {
    var score = ((((moveList[offset+i]|0) & captureMask))|0) ? 1|0 : 0|0;
    copied.push({ m: moves[offset+i]|0, s: score|0 });
  }
  copied.sort(function(a, b) { return +(b.s - a.s); });
  for (var i = 0|0; (i|0) < (copied.length|0); i = (i + 1)|0)
    moveList[offset+i] = copied[i].m|0;
}

function sanList() {
  movegen(); //console.log('after first movegen:'); print();
  legalize(); //console.log('after first legalize:'); print();
  
  var result = {};
  var offset = (moves << maxMoveShift)|0;
  for (var i = 0; i < moveListMax[moves]; ++i) {
    var j = offset + i;
    make(moveList[j]);
    
    //console.log('after make',moveList[j],moveToStr(moveList[j]),i); print();
    movegen();    
    //console.log('after movegen',moveList[j],moveToStr(moveList[j]),i); print();
    legalize();
    //console.log('after legalize',moveList[j],moveToStr(moveList[j]),i); print();
    
    var check = (isAttacked(kings[turn], turn ^ 1)) ?
      ((moveListMax[moves] == 0) ? '#' : '+') :
      '';
    //console.log('before unmake',moveList[j],moveToStr(moveList[j]),i); print();
    unmake(moveList[j]);
    //console.log('after  unmake',moveList[j],moveToStr(moveList[j]),i); print();
    
    if (moveList[j] & castleMask) {
      if (moveList[j] & ooMask)
        result['O-O' + check] = moveList[j];
      else
        result['O-O-O' + check] = moveList[j];
    } else {
      var fr = squares[moveList[j] & fromMask];
      var to = squares[(moveList[j] & toMask) >> 8];
      //console.log(fr, to, moves[j], toMask, moves[j] & toMask, (moves[j] & toMask) >>> 8);
      var isCapt = (moveList[j] & captureMask) || (moveList[j] & epMask);
      //if (i => 17 && i <= 19)
      //console.log(j, moveToStr(moveList[j]),moveList[j] & fromMask, board[moveList[j] & fromMask] >> 2, pieceNames[board[moveList[j] & fromMask] >> 2]);
      var p = pieceNames[board[moveList[j] & fromMask] >> 2];
      var piece = (p != 'p') ? p.toUpperCase() : (isCapt ? fr[0] : '');
      var capt = isCapt ? 'x' : '';
      var prom = (moveList[j] & promotionMask) ?
        '='+pieceNames[(moveList[j] & promotionMask) >> 26].toUpperCase() : '';
      var dis = '';
      for (var k = 0; k < moveListMax[moves]; ++k) {
        if ((p != 'p') && (i != k)) {
          var l = offset + k;
          var otherP = pieceNames[board[moveList[l] & fromMask] >> 2];
          var otherTo = squares[(moveList[l] & toMask) >> 8];
          if ((otherP == p) && (otherTo == to)) {
            var otherFr = squares[moveList[l] & fromMask];
            for (var m = otherFr.length-1; m >= 0; --m) {
              if (fr[m] != otherFr[m])
                dis = fr[m];
            }
            break;
          }
        }
      }
      result[piece + dis + capt + to + prom + check] = moveList[j];
    }
  }
  return result;
}

function apply(sans) {
  //console.log('start:',turn);
  for (var i = 0; i < sans.length; ++i) {
    var legal = sanList();
    if (!(sans[i] in legal)) {
      //console.log(turn);
      console.log(sans[i] + ' is illegal: legal moves are ' + Object.keys(legal).join(', '));
      //console.log(this.castling, this.turn);
    } else {
      make(legal[sans[i]]|0);
      //console.log(turn);
      console.log('Made move: ' + sans[i] + ' => ' + legal[sans[i]] + '. Current eval: ' + evaluate());
      //console.log(this.castling, this.turn);
    }
  }
}

function perft(depth) {
  if (depth == 0) return 1;
  result = 0;
  movegen(); legalize();
  var offset = (moves << maxMoveShift)|0;
  for (var i = 0; i < moveListMax[moves]; ++i) {
    make(moveList[offset+i]|0);
    result += perft(depth-1);
    unmake(moveList[offset+i]|0);
  }
  return result;
}

function divide(depth) {
  var list = sanList();
  var result = [];
  for (var san in list) {
    make(list[san]);
    result.push({ san: san, move: list[san], movestr: moveToStr(list[san]), count: perft(depth-1) });
    unmake(list[san]);
  }
  return result;
}

function alphabeta(alpha, beta, depth) {
  alpha = alpha|0, beta = beta|0, depth = depth|0;
  if ((depth|0) == (0|0))
    return evaluate()|0; //quiesce(alpha, beta);
  movegen(); legalize(); //sort();
  if (moveListMax[moves] == 0) {// checkmate or stalemate
    return (isAttacked(kings[turn], turn^1)|0)
      ? -((1 << 29) + depth)|0
      : 0|0;
  }
  
  var offset = (moves << maxMoveShift)|0;
  for (var i = 0|0; (i|0) < (moveListMax[moves]|0); i = (i + 1)|0)  {
    make(moveList[offset+i]|0); //console.log('Making', this.moveToStr(moves[i]));
    var score = -alphabeta(-beta|0, -alpha|0, (depth - 1)|0)|0;
    unmake(moveList[offset+i]|0);// console.log('Unmaking', this.moveToStr(moves[i]));
    if ((score|0) >= (beta|0))
      return beta; // fail hard beta-cutoff
    if ((score|0) > (alpha|0))
      alpha = score|0; // alpha acts like max in MiniMax
  }
  return alpha|0;
}

function go(depth) {
  depth = depth|0;
  if ((depth|0) == (0|0))
    return evaluate()|0; //quiesce(alpha, beta);
  var alpha = -(1 << 30)|0, beta = (1 << 30)|0;
  movegen(); legalize(); //sort();
  var offset = (moves << maxMoveShift)|0;
  var best = -1;
  for (var i = 0|0; (i|0) < (moveListMax[moves]|0); i = (i + 1)|0)  {
    make(moveList[offset+i]|0); //console.log('Making', moveToStr(moveList[offset+i]|0));
    var score = -alphabeta(-beta|0, -alpha|0, (depth - 1)|0)|0;
    unmake(moveList[offset+i]|0); //console.log('Unmaking', moveToStr(moveList[offset+i]|0));
    //console.log('got a score of', score, 'alpha', alpha, 'beta', beta, 'i', i,'best',best,moveList[offset+i], moveToStr(moveList[offset+i]));

    if (score >= beta) {
      return { score: beta, best: moveList[offset+i] };
    }
    if (score > alpha) {
      alpha = score;
      best = i;
    }
  }
  var m = moveToStr(moveList[offset+best]);
  return { score: alpha, best: m };
}
//fns

function perftCheck(name, pos, toMove, castlingRights, epSquare, expected, maxdepth) {
  for (var i = 0; i < 128; ++i)
    board[i] = pos[i]|0;
  turn = toMove|0;
  moves = 0|0;
  castling = castlingRights|0;
  ep = epSquare|0;
  console.log('Perft (' + name + '):');
  for (var i = 1; i <= maxdepth; ++i) {
    var startTime = Date.now();
    var n = perft(i);
    var duration = (Date.now() - startTime);
    console.log('- perft(' + i + ') = ' + n + ' (expected ' + expected[i] + '). Duration: '
      + duration + ' ms (' + (Math.round(100*n/(duration))/100) + ' kNodes/s).');
  }
}

// perft positions taken from https://chessprogramming.wikispaces.com/Perft+Results
perftCheck('initial', initialBoard, 0, 0xF, -1, [1, 20, 400, 8902, 197281, 4865609, 119060324], 4);

if (false) {
  perftCheck('kiwipete', [
    wr, ee, ee, ee, wk, ee, ee, wr, 0,0,0,0,0,0,0,0,
    wp, wp, wp, wb, wb, wp, wp, wp, 0,0,0,0,0,0,0,0,
    ee, ee, wn, ee, ee, wq, ee, bp, 0,0,0,0,0,0,0,0,
    ee, bp, ee, ee, wp, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, ee, wp, wn, ee, ee, ee, 0,0,0,0,0,0,0,0,
    bb, bn, ee, ee, bp, bn, bp, ee, 0,0,0,0,0,0,0,0,
    bp, ee, bp, bp, bq, bp, bb, ee, 0,0,0,0,0,0,0,0,
    br, ee, ee, ee, bk, ee, ee, br, 0,0,0,0,0,0,0,0
  ], 0, 0xF, -1, [1, 48, 2039, 97862, 4085603, 193690690], 4);
  
  perftCheck('rook endgame', [
    ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, ee, ee, wp, ee, wp, ee, 0,0,0,0,0,0,0,0,
    ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, wr, ee, ee, ee, bp, ee, bk, 0,0,0,0,0,0,0,0,
    wk, wp, ee, ee, ee, ee, ee, br, 0,0,0,0,0,0,0,0,
    ee, ee, ee, bp, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, bp, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0
  ], 0, 0x0, -1, [1, 14, 191, 2812, 43238, 674624, 11030083], 6);
  
  perftCheck('complicated', [
    wr, ee, ee, wq, ee, wr, wk, ee, 0,0,0,0,0,0,0,0,
    wp, bp, ee, wp, ee, ee, wp, wp, 0,0,0,0,0,0,0,0,
    bq, ee, ee, ee, ee, wn, ee, ee, 0,0,0,0,0,0,0,0,
    wb, wb, wp, ee, wp, ee, ee, ee, 0,0,0,0,0,0,0,0,
    bn, wp, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, bb, ee, ee, ee, bn, bb, wn, 0,0,0,0,0,0,0,0,
    wp, bp, bp, bp, ee, bp, bp, bp, 0,0,0,0,0,0,0,0,
    br, ee, ee, ee, bk, ee, ee, br, 0,0,0,0,0,0,0,0
  ], 0, 0xC, -1, [1, 2, 264, 9467, 422333, 15833292], 5);
  
  perftCheck('tricky', [
    wr, wn, wb, wq, wk, ee, ee, wr, 0,0,0,0,0,0,0,0,
    wp, wp, wp, ee, wn, bn, wp, wp, 0,0,0,0,0,0,0,0,
    ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, wb, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, ee, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, bp, ee, ee, ee, ee, ee, 0,0,0,0,0,0,0,0,
    bp, bp, ee, wp, bb, bp, bp, bp, 0,0,0,0,0,0,0,0,
    br, bn, bb, bq, ee, bk, ee, br, 0,0,0,0,0,0,0,0
  ], 0, 0x3, -1, [1, 44, 1486, 62379, 2103487], 4);
  
  perftCheck('symmetric', [
    wr, ee, ee, ee, ee, wr, wk, ee, 0,0,0,0,0,0,0,0,
    ee, wp, wp, ee, wq, wp, wp, wp, 0,0,0,0,0,0,0,0,
    wp, ee, wn, wp, ee, wn, ee, ee, 0,0,0,0,0,0,0,0,
    ee, ee, wb, ee, wp, ee, bb, ee, 0,0,0,0,0,0,0,0,
    ee, ee, bb, ee, bp, ee, wb, ee, 0,0,0,0,0,0,0,0,
    bp, ee, bn, bp, ee, bn, ee, ee, 0,0,0,0,0,0,0,0,
    ee, bp, bp, ee, bq, bp, bp, bp, 0,0,0,0,0,0,0,0,
    br, ee, ee, ee, ee, br, bk, ee, 0,0,0,0,0,0,0,0
  ], 0, 0x0, -1, [1, 46, 2079, 89890, 3894594], 4);
}

console.log('Done. Total time:', (Date.now()-start)/1000 + 's');
//ret

var cumulativeOffset = function(element) { // thanks SO
    var top = 0, left = 0;
    do {
        top += element.offsetTop  || 0;
        left += element.offsetLeft || 0;
        element = element.offsetParent;
    } while(element);

    return {
        top: top,
        left: left
    };
};

var moveRecord = [];
var lastNewGame = Date.now();
var flip = 0;
if (typeof overlay == 'undefined') {
  var overlay = document.createElement('div');
  var boardDOM = document.getElementsByClassName('chessboard')[0];
  overlay.style.opacity = 1;
  overlay.style.zIndex = 1;
  overlay.style.position = 'fixed';
  overlay.style.left = cumulativeOffset(boardDOM).left + 'px';
  overlay.style.top = cumulativeOffset(boardDOM).top + 'px';
  overlay.style.width = boardDOM.style.width;
  overlay.style.height = boardDOM.style.width;
  document.body.appendChild(overlay);
  initDisplay();
}
function getMoves() {
  var movelist = document.getElementsByClassName('chessboard_moveList')[0].children[0];
  var moveRecord = [];
  for (var i = 0; i < 2 * movelist.children.length; ++i) {
    var move = movelist.children[i >> 1].children[(i & 1) + 1].children[0].innerText;
    if (move.trim() != '') moveRecord.push(move);
  };
  return moveRecord;
};
if (typeof tickInterval != 'undefined') clearInterval(tickInterval);
tickInterval = setInterval(function(){
  var m = getMoves();
  if (m.join(" ") != moveRecord.join(" ")) {
    if (m.length == 0) newGame();
    moveRecord = m;
    moveChange();
  }
}, 100);

function initDisplay() {
  for (var i = 0; i < 64; ++i) {
    overlay.appendChild(document.createElement('div'));
    overlay.children[i].style.float = 'left';
    overlay.children[i].style.left = ((100*(i%8)/8).toString()) + '%';
    overlay.children[i].style.top = ((100*(i>>3)/8).toString()) + '%';
    overlay.children[i].style.width = (100/8).toString() + '%';
    overlay.children[i].style.height = (100/8).toString() + '%';
  }
}

function updateDisplay(heatmap) {
  var scheme = { // matlab imagesc scheme
    '-6': 'transparent',
    '-5': 'rgb(53, 42, 134)',
    '-4': 'rgb(31, 82, 211)',
    '-3': 'rgb(12, 116, 220)',
    '-2': 'rgb(12, 147, 209)',
    '-1': 'rgb(6, 169, 192)',
     '0': 'rgb(55, 184, 157)',
     '1': 'rgb(124, 191, 123)',
     '2': 'rgb(183, 188, 99)',
     '3': 'rgb(240, 185, 73)',
     '4': 'rgb(249, 210, 41)',
     '5': 'rgb(248, 250, 13)'
  };
  for (var i = 0; i < 64; ++i) {
    overlay.children[i].style.backgroundColor = scheme[heatmap[i]];
    //overlay.children[i].innerText = heatmap[i];
  }
}

function newGame() {
  flip = parseInt(prompt('New game! Side (0 = white, 1 = black)?', 0));
}
function moveChange() {
  var start = Date.now();
  resetBoard();
  apply(moveRecord);
  
  var heatmap = Array(64);
  for (var i = 0; i < 64; ++i) heatmap[i] = -6;
  console.log('No. of legal moves:', Object.keys(sanList()).length);
  var searchresult = go(4);
  console.log('Final eval: ' + (searchresult.score/100) + ', best move: ' + searchresult.best.substring(0, 4), searchresult);
  var fr = sqIDs[searchresult.best.substring(0, 2)];
  var to = sqIDs[searchresult.best.substring(2, 4)];
  fr = (fr + (fr & 7)) >> 1;
  to = (to + (to & 7)) >> 1;
  heatmap[fr] = heatmap[to] = -5;
  
  var translated = Array(64);
  for (var i = 0; i < 8; ++i) {
    for (var j = 0; j < 8; ++j) {
      translated[i*8 + j] = flip ? heatmap[8*i + (7-j)] : heatmap[8*(7-i) + j];
    }
  }
  updateDisplay(translated);
  console.log('Total time: ' + (Date.now() - start) + ' ms');
}