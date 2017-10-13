'use strict'

//TODO:
// 'flip overlay' button
// only think on 'your' turn 
// when in check, only generate king moves or captures or moves that intersect king (make 'bitmap' of just byte * 128 * 128, 16 KB lookup table)
// quiescence
// better move ordering algorithm and data structure
// keep track of sides that are in check
// use Arraybuffer/view tricks to decompose things into fields?
// use fancy chess piece symbols in print()? \u2659\u265F\u2658\u265E\u2657\u265D\u2656\u265C\u2655\u265B\u2654\u265A
// piece list (18 bit integer) to keep track of nonking pieces
// rethink board and move representation
//   mailbox maps sq -> piece list id
//   piece list maps piece list id -> sq
//   id map maps piece list id -> piece type
//   move representation: fr piece list id(4) capt piece list id(4) to sq(8)
// automatically detect time control
// tapered evaluation
// make perft check work
// fix make/unmake (update population)
// make movegen use the new piece lists

// abandoned. it's faster to simply scan the whole board...

var DEBUG = false
var INTERFACE = true
var SEARCH_DEPTH = 4

var start = Date.now()
console.log('Initializing:')

console.log('- bitwise tricks')
var BSF = new Uint8Array(1 << 16).map(function (e, i) {
  for (var j = 0; j < 16; ++j)
    if ((i >>> j) & 1)
      return j
  return 16 // miss
}) // 64 KB
var POPCNT = new Uint8Array(1 << 16).map(function (e, i) {
  var n = 0
  for (var j = 0; j < 16; ++j)
    if ((i >>> j) & 1)
      ++n
  return n
}) // 64 KB

console.log('- board constants')
var SQUARES = [
  'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1', '', '', '', '', '', '', '', '',
  'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2', '', '', '', '', '', '', '', '',
  'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3', '', '', '', '', '', '', '', '',
  'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4', '', '', '', '', '', '', '', '',
  'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5', '', '', '', '', '', '', '', '',
  'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6', '', '', '', '', '', '', '', '',
  'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7', '', '', '', '', '', '', '', '',
  'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8', '', '', '', '', '', '', '', ''
]
var SQ_IDS = {'a1':0|0,'b1':1|0,'c1':2|0,'d1':3|0,'e1':4|0,'f1':5|0,'g1':6|0,'h1':7|0,'a2':16|0,'b2':17|0,'c2':18|0,'d2':19|0,'e2':20|0,'f2':21|0,'g2':22|0,'h2':23|0,'a3':32|0,'b3':33|0,'c3':34|0,'d3':35|0,'e3':36|0,'f3':37|0,'g3':38|0,'h3':39|0,'a4':48|0,'b4':49|0,'c4':50|0,'d4':51|0,'e4':52|0,'f4':53|0,'g4':54|0,'h4':55|0,'a5':64|0,'b5':65|0,'c5':66|0,'d5':67|0,'e5':68|0,'f5':69|0,'g5':70|0,'h5':71|0,'a6':80|0,'b6':81|0,'c6':82|0,'d6':83|0,'e6':84|0,'f6':85|0,'g6':86|0,'h6':87|0,'a7':96|0,'b7':97|0,'c7':98|0,'d7':99|0,'e7':100|0,'f7':101|0,'g7':102|0,'h7':103|0,'a8':112|0,'b8':113|0,'c8':114|0,'d8':115|0,'e8':116|0,'f8':117|0,'g8':118|0,'h8':119}

console.log('- piece & move constants')
// bitfields for pieces (1 byte/piece): (msb) pawn knight bishop rook queen king black white (lsb)
var EE = 0x00|0,
  WP = 0x81|0, WN = 0x41|0, WB = 0x21|0, WR = 0x11|0, WQ = 0x09|0, WK = 0x05|0,
  BP = 0x82|0, BN = 0x42|0, BB = 0x22|0, BR = 0x12|0, BQ = 0x0A|0, BK = 0x06|0,
  PAWN = 0x20|0, KNIGHT = 0x10|0, BISHOP = 0x08|0, ROOK = 0x04|0, QUEEN = 0x02|0, KING = 0x01|0
var PIECE_NAMES = {0x20: 'p', 0x10: 'n', 0x08: 'b', 0x04: 'r', 0x02: 'q', 0x01: 'k'}
var PIECES = new Uint32Array([WP, WN, WB, WR, WQ, WK, BP, BN, BB, BR, BQ, BK])
var SLIDER_MASK = 0x38|0, COLOR_MASK = 0x3|0
// bitfields for moves (4 bytes/move): (msb) ep(1) promotion(7) capture(8) ooo(1) to(7) oo(1) from(7)
var PROMOTION_MASK = 0x7F000000|0,
      CAPTURE_MASK = 0x00FF0000|0,
           TO_MASK = 0x00007F00|0,
         FROM_MASK = 0x0000007F|0,
           EP_MASK = 0x80000000|0,
       CASTLE_MASK = 0x00008080|0,
           OO_MASK = 0x00000080|0,
          OOO_MASK = 0x00008000|0
var CASTLE_MASKS_SINGLE = new Uint32Array([ // masks away castle flags during make()
  0xD, 0xF, 0xF, 0xF, 0xC, 0xF, 0xF, 0xE, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0xF, 0,0,0,0,0,0,0,0,
  0x7, 0xF, 0xF, 0xF, 0x3, 0xF, 0xF, 0xB, 0,0,0,0,0,0,0,0
])
var CASTLE_MASKS = new Uint32Array(Math.pow(CASTLE_MASKS_SINGLE.length, 2)).map( // masks away castle flags during make()
  (e, i) => CASTLE_MASKS_SINGLE[i >> 7] & CASTLE_MASKS_SINGLE[i & 0b1111111]
)

console.log('- board')
var MAX_LEN = 512|0 // please don't play extra long games
var MAX_MOVE_SHIFT = 8|0 // log2(arbitrary max branching factor
var map0x88 = new Uint32Array(64).map((e, i) => i + (i & ~7))
var initial_population = [0xFFFF, 0xFFFF]
var initial_piece_squares = [
  0x88,
  // white pieces
  SQ_IDS['a1'], SQ_IDS['b1'], SQ_IDS['c1'], SQ_IDS['d1'], SQ_IDS['e1'], SQ_IDS['f1'], SQ_IDS['g1'], SQ_IDS['h1'],
  SQ_IDS['a2'], SQ_IDS['b2'], SQ_IDS['c2'], SQ_IDS['d2'], SQ_IDS['e2'], SQ_IDS['f2'], SQ_IDS['g2'], SQ_IDS['h2'],
  // black pieces
  SQ_IDS['a8'], SQ_IDS['b8'], SQ_IDS['c8'], SQ_IDS['d8'], SQ_IDS['e8'], SQ_IDS['f8'], SQ_IDS['g8'], SQ_IDS['h8'],
  SQ_IDS['a7'], SQ_IDS['b7'], SQ_IDS['c7'], SQ_IDS['d7'], SQ_IDS['e7'], SQ_IDS['f7'], SQ_IDS['g7'], SQ_IDS['h7']
]
var initial_piece_types = [
  // empty space
  EE,
  // white pieces
  WR, WN, WB, WQ, WK, WB, WN, WR,
  WP, WP, WP, WP, WP, WP, WP, WP,
  // black pieces
  BR, BN, BB, BQ, BK, BB, BN, BR,
  BP, BP, BP, BP, BP, BP, BP, BP
]
var initial_mailbox = [
   1,  2,  3,  4,  5,  6,  7,  8, 0,0,0,0,0,0,0,0,
   9, 10, 11, 12, 13, 14, 15, 16, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0,
  25, 26, 27, 28, 29, 30, 31, 32, 0,0,0,0,0,0,0,0,
  17, 18, 19, 20, 21, 22, 23, 24, 0,0,0,0,0,0,0,0
]
var mailbox = Uint8Array.from(initial_mailbox) // an array of piece list indices
var population = Uint16Array.from(initial_population) // a record of pieces list indices still on the board (each bit is a piece)
var piece_squares = Uint8Array.from(initial_piece_squares) // a list of squares for each bit in population
var piece_types = Uint8Array.from(initial_piece_types) // a list of piece types for each bit in population
var kings = new Uint32Array([SQ_IDS['e1'], SQ_IDS['e8']]) // squares of the kings //TODO: remove, since redundant
var turn = 0|0 // (0,1) = (w,b)
var moves = 0|0
var castling = 0xF|0 // (msb) BQ BK WQ WK (lsb)
var castlings = new Uint32Array(MAX_LEN)
var ep = -1|0
var eps = new Uint32Array(MAX_LEN)
var score = 0|0
var scores = new Uint32Array(MAX_LEN)
var enemy_populations = new Uint16Array(MAX_LEN)
var make_pieces = new Uint8Array(MAX_LEN * 4) // pieces in old mailbox state before make
var make_squares = new Uint8Array(MAX_LEN * 4) // indices of those pieces

var move_list = new Uint32Array(MAX_LEN * (1 << MAX_MOVE_SHIFT)) // candidate moves for each ply
var move_list_max = new Uint32Array(MAX_LEN) // number of candidate moves for each ply

console.log('- movegen constants')
// piece deltas (used in move generation and attack checKING)
var deltas = new Int32Array(16 * 256)
// white PIECES
deltas.set([15, 17], 16*WP)
deltas.set([-33, -31, -14, 18, 33, 31, 14, -18], 16*WN)
deltas.set([-17, -15, 17, 15], 16*WB)
deltas.set([-1, -16, 1, 16], 16*WR)
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*WQ)
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*WK)
// black PIECES
deltas.set([-15, -17], 16*BP)
deltas.set([-33, -31, -14, 18, 33, 31, 14, -18], 16*BN)
deltas.set([-17, -15, 17, 15], 16*BB)
deltas.set([-1, -16, 1, 16], 16*BR)
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*BQ)
deltas.set([-17, -15, 17, 15, -1, -16, 1, 16], 16*BK)

console.log('- evaluation tables')
var materials = new Int32Array(256)
materials[WP] = 100
materials[WN] = 320
materials[WB] = 330
materials[WR] = 500
materials[WQ] = 900
materials[WK] = 20000
materials[BP] = -100
materials[BN] = -320
materials[BB] = -330
materials[BR] = -500
materials[BQ] = -900
materials[BK] = -20000
// piece-square tables (used in evaluation)
var eval_table = new Int32Array(2 * 256 * 128) // 256 KB
eval_table.set([
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0,
   5, 10, 10,-20,-20, 10, 10,  5, 0,0,0,0,0,0,0,0,
   5, -5,-10,  0,  0,-10, -5,  5, 0,0,0,0,0,0,0,0,
   0,  0,  0, 20, 20,  0,  0,  0, 0,0,0,0,0,0,0,0,
   5,  5, 10, 25, 25, 10,  5,  5, 0,0,0,0,0,0,0,0,
  10, 10, 20, 30, 30, 20, 10, 10, 0,0,0,0,0,0,0,0,
  50, 50, 50, 50, 50, 50, 50, 50, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0
], 128*WP)
eval_table.set([
  -50,-40,-30,-30,-30,-30,-40,-50, 0,0,0,0,0,0,0,0,
  -40,-20,  0,  0,  0,  0,-20,-40, 0,0,0,0,0,0,0,0,
  -30,  5, 10, 15, 15, 10,  5,-30, 0,0,0,0,0,0,0,0,
  -30,  0, 15, 20, 20, 15,  0,-30, 0,0,0,0,0,0,0,0,
  -30,  5, 15, 20, 20, 15,  5,-30, 0,0,0,0,0,0,0,0,
  -30,  0, 10, 15, 15, 10,  0,-30, 0,0,0,0,0,0,0,0,
  -40,-20,  0,  5,  5,  0,-20,-40, 0,0,0,0,0,0,0,0,
  -50,-40,-30,-30,-30,-30,-40,-50, 0,0,0,0,0,0,0,0
], 128*WN)
eval_table.set([
  -20,-10,-10,-10,-10,-10,-10,-20, 0,0,0,0,0,0,0,0,
  -10,  0,  0,  0,  0,  0,  0,-10, 0,0,0,0,0,0,0,0,
  -10, 10, 10, 10, 10, 10, 10,-10, 0,0,0,0,0,0,0,0,
  -10,  0, 10, 10, 10, 10,  0,-10, 0,0,0,0,0,0,0,0,
  -10,  5,  5, 10, 10,  5,  5,-10, 0,0,0,0,0,0,0,0,
  -10,  5,  0,  0,  0,  0,  5,-10, 0,0,0,0,0,0,0,0,
  -10,  0,  5, 10, 10,  5,  0,-10, 0,0,0,0,0,0,0,0,
  -20,-10,-10,-10,-10,-10,-10,-20, 0,0,0,0,0,0,0,0
], 128*WB)
eval_table.set([
   0,  0,  0,  5,  5,  0,  0,  0, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
  -5,  0,  0,  0,  0,  0,  0, -5, 0,0,0,0,0,0,0,0,
   5, 10, 10, 10, 10, 10, 10,  5, 0,0,0,0,0,0,0,0,
   0,  0,  0,  0,  0,  0,  0,  0, 0,0,0,0,0,0,0,0
], 128*WR)
eval_table.set([
  -20,-10,-10, -5, -5,-10,-10,-20, 0,0,0,0,0,0,0,0,
  -10,  0,  0,  0,  0,  0,  0,-10, 0,0,0,0,0,0,0,0,
  -10,  0,  5,  5,  5,  5,  0,-10, 0,0,0,0,0,0,0,0,
   -5,  0,  5,  5,  5,  5,  0, -5, 0,0,0,0,0,0,0,0,
   -5,  0,  5,  5,  5,  5,  0, -5, 0,0,0,0,0,0,0,0,
  -10,  0,  5,  5,  5,  5,  0,-10, 0,0,0,0,0,0,0,0,
  -10,  0,  0,  0,  0,  0,  0,-10, 0,0,0,0,0,0,0,0,
  -20,-10,-10, -5, -5,-10,-10,-20, 0,0,0,0,0,0,0,0
], 128*WQ)
eval_table.set([
   20, 30, 10,  0,  0, 10, 30, 20, 0,0,0,0,0,0,0,0,
   20, 20,  0,  0,  0,  0, 20, 20, 0,0,0,0,0,0,0,0,
  -10,-20,-20,-20,-20,-20,-20,-10, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0,
  -20,-30,-30,-40,-40,-30,-30,-20, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0,
  -30,-40,-40,-50,-50,-40,-40,-30, 0,0,0,0,0,0,0,0
], 128*WK)
for (var i = 0; i < 6; ++i) // set up endgame piece-square tables for white
  for (var j = 0; j < 128; ++j)
    eval_table[128*(PIECES[i]+256) + j] = eval_table[128*PIECES[i] + j]
// KING endgame-tables are different
eval_table.set([
  -50,-40,-30,-20,-20,-30,-40,-50, 0,0,0,0,0,0,0,0,
  -30,-20,-10,  0,  0,-10,-20,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 20, 30, 30, 20,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 30, 40, 40, 30,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 30, 40, 40, 30,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-10, 20, 30, 30, 20,-10,-30, 0,0,0,0,0,0,0,0,
  -30,-30,  0,  0,  0,  0,-30,-30, 0,0,0,0,0,0,0,0,
  -50,-30,-30,-30,-30,-30,-30,-50, 0,0,0,0,0,0,0,0
], 128*(WK + 256))
// make negated & mirrored copy of tables for black
for (var i = 6; i < 12; ++i) {
  for (var r = 0; r < 8; ++r) {
    for (var f = 0; f < 8; ++f) {
      eval_table[128*PIECES[i] + 16*r + f] = -eval_table[128*PIECES[i-6] + 16*(7-r) + f]
      eval_table[128*(PIECES[i]+256) + 16*r + f] = -eval_table[128*(PIECES[i-6]+256) + 16*(7-r) + f]
    }
  }
}
// add piece values to piece-square tables
for (var i = 0; i < 12; ++i) {
  for (var r = 0; r < 8; ++r) {
    for (var f = 0; f < 8; ++f) {
      eval_table[128*PIECES[i] + 16*r + f] += materials[PIECES[i]]
      eval_table[128*(PIECES[i]+256) + 16*r + f] += materials[PIECES[i]]
    }
  }
}

console.log('- engine functions')
function print() {
  var PIECES = {
    0x00: 'EE',
    0x81: 'WP', 0x41: 'WN', 0x21: 'WB', 0x11: 'WR', 0x09: 'WQ', 0x05: 'WK',
    0x82: 'BP', 0x42: 'BN', 0x22: 'BB', 0x12: 'BR', 0x0A: 'BQ', 0x06: 'BK'
  }
  for (var r = 7; r >= 0; --r) {
    var line = ''
    for (var f = 0; f < 8; ++f) {
      var k = piece_types[mailbox[(r << 4)|f]]
      if (k in PIECES)
        line += PIECES[k]
      else
        line += k.toString(16).toUpperCase()
    }
    console.log(line)
  }
  console.log('castling:',castling,'ep:',ep,'->',SQUARES[ep],'moves:',moves,'score:',score,'population (w):',population[0].toString(2),'population (b):',population[1].toString(2))
}

function reset_board() {
  mailbox = Uint8Array.from(initial_mailbox)
  population = Uint16Array.from(initial_population)
  piece_squares = Uint8Array.from(initial_piece_squares)
  piece_types = Uint8Array.from(initial_piece_types)
  kings = new Uint32Array([SQ_IDS['e1'], SQ_IDS['e8']])
  turn = 0|0
  moves = 0|0
  castling = 0xF|0
  ep = -1|0
  score = 0|0
}

function slow_evaluate() {
  var result = 0|0
  var i = 64|0; do {
    i = (i - 1)|0
    var sq = map0x88[i]
    var p = piece_types[mailbox[sq]] << 7|0
    result = (result + (eval_table[p + sq]|0))|0
  } while (i !== (0|0))
  return (turn|0) ? -result|0 : result|0
}

function evaluate() {
  return (turn|0) ? -score|0 : score|0
}

function is_attacked(sq, side) {
  sq = sq|0
  side = side|0
  var offset = (side|0) ? 6|0 : 0|0
  var i = 6|0; do {
    i = (i - 1)|0
    var p = PIECES[offset + i]|0
    if (((p & SLIDER_MASK)|0) !== (0|0)) {
      for (var j = (p << 4)|0; (deltas[j]|0) !== (0|0); j = (j + 1)|0) {
        var d = deltas[j]|0
        for (var to = (sq + d)|0; (((to & 0x88)|0) === (0|0)); to = (to + d)|0)
          if ((mailbox[to]|0) !== (0|0)) {
            if ((piece_types[mailbox[to]]|0) === (p|0)) {
              return 1|0
            }
            break
          }
      }
    } else {
      for (var j = (p << 4)|0; (deltas[j]|0) !== (0|0); j = (j + 1)|0) {
        var to = (sq - (deltas[j]|0))|0 // pawn captures are 'reversed'
        if (((to & 0x88)|0) !== (0|0)) continue // off mailbox
        if ((piece_types[mailbox[to]]|0) === (p|0)) return 1|0
      }
    }
  } while (i !== (0|0))
  return 0|0
}

function make(move) {
  move = move|0

  // push castling, ep, score, enemy population
  castlings[moves] = castling|0
  eps[moves] = ep|0
  scores[moves] = score|0
  enemy_populations[moves] = population[turn^1]

  var ptr = moves << 2 // ptr to make_pieces & make_squares
  
  // decompose bitfields of move
  var fr = (move & FROM_MASK)|0 // from square
  var to = ((move & TO_MASK) >> 8)|0 // to square
  var c = mailbox[to]|0 // captured piece list id
  var p = mailbox[fr]|0 // moving piece list id
  var c_type = piece_types[c] // captured piece type 
  var p_type = piece_types[p] // moving piece type
  
  // move piece and make capture (non-ep)
  make_pieces[ptr] = mailbox[fr] // vacate from sq
  make_squares[ptr] = fr
  ptr = (ptr + 1)|0
  mailbox[fr] = 0|0
  make_pieces[ptr] = mailbox[to]|0 // place piece on to sq
  make_squares[ptr] = to|0
  ptr = (ptr + 1)|0
  mailbox[to] = p|0
  piece_squares[p] = to
  score = (score - eval_table[c_type << 7 | to])|0 // subtract captured score (non ep)
  score = (score - eval_table[p_type << 7 | fr])|0 // subtract fr sq score

  var enemy_turn = turn^1
  if ((c|0) !== (0|0)) // if capture,
    population[enemy_turn] = population[enemy_turn] ^ (1 << (c - (enemy_turn<<4) - 1)) // clear the captured piece's flag in population

  if ((p_type >> 2) === KING) // if king move,
    kings[turn] = to|0 // update king location
  castling &= CASTLE_MASKS[to << 7 | fr]|0 // update castling rights

  // update ep
  var sign = turn ? 1|0 : -1|0
  ep = (p_type >> 2 === PAWN && (to ^ fr) === 32) ? (to + (sign << 4))|0 : -1|0 // lookup table?

  // handle promotions
  var prom = (move & PROMOTION_MASK)|0
  if (prom !== (0|0)) { // if promotion
    prom >>= 24
    piece_types[p] = prom // place promotion piece
    score = (score + eval_table[prom << 7 | to])|0 // add promotion piece score    
  } else { // if not promotion
    score = (score + eval_table[p_type << 7 | to])|0 // add to sq score
  }
  // handle castling
  if (((move & CASTLE_MASK)|0) !== (0|0)) { 
    var rank = (turn|0) ? (7<<4)|0 : 0|0
    var rfr, rto
    if (((move & OO_MASK)|0) !== (0|0)) {
      rfr = (7 + rank)|0, rto = (5 + rank)|0
    } else {
      rfr = (0 + rank)|0, rto = (3 + rank)|0
    }
    var rook = mailbox[rfr]|0
    score = (score - eval_table[piece_types[rook] << 7 | rfr])|0 // subtract rook fr score
    score = (score + eval_table[piece_types[rook] << 7 | rto])|0 // add rook to score
    make_pieces[ptr] = mailbox[rto]|0 // add rook to rto
    make_squares[ptr] = rto|0
    ptr = (ptr + 1)|0 
    mailbox[rto] = rook|0
    make_pieces[ptr] = mailbox[rfr]|0 // vacate rfr
    make_squares[ptr] = rfr|0
    ptr = (ptr + 1)|0 
    mailbox[rfr] = 0|0
    piece_squares[rook] = rto
  }
  // handle ep
  else if (((move & EP_MASK)|0) !== (0|0)) {
    var ep_square = (to + (sign<<4))|0
    make_pieces[ptr] = mailbox[ep_square]|0 // capture ep pawn
    make_squares[ptr] = ep_square|0
    ptr = (ptr + 1)|0 // final add
    make_squares[ptr] = 9|0 // set last value to junk value
    mailbox[ep_square] = 0
    score = (score - eval_table[(p_type^3) << 7 | ep_square])|0 // subtract enemy pawn score
  } else {
    // not castling or ep: set rest to junk values
    make_squares[ptr] = 9|0
    ptr = (ptr + 1)|0 
    make_squares[ptr] = 9|0
  }

  // flip turn and increment movecount
  turn ^= 1|0
  moves = (moves + 1)|0
}

function unmake(move) {
  move = move|0

  // restore turn
  turn ^= 1|0

  // pop castling, ep, score, enemy population
  moves = (moves - 1)|0
  castling = castlings[moves]|0
  ep = eps[moves]|0
  score = scores[moves]|0
  population[turn^1] = enemy_populations[moves]
  
  // decompose bitfields of move
  var fr = (move & FROM_MASK)|0 // from square
  var to = ((move & TO_MASK) >> 8)|0 // to square
  var p = mailbox[to]|0 // piece index
  var p_type = piece_types[p]|0 // piece type
  
  if (((p_type >> 2)|0) === KING) // if king move,
    kings[turn] = fr|0 // update king location

  if (((move & PROMOTION_MASK)|0) !== (0|0)) // if promotion,
    piece_types[p] = WP ^ (turn*3) // replace promoted piece with friendly pawn

  piece_squares[p] = fr // reset piece list square

  if (((move & OO_MASK)|0) !== (0|0)) // if kingside castle,
    piece_squares[8 + (turn<<4)] = 7 + 7 * (turn<<4) // set rook back to original position
  if (((move & OOO_MASK)|0) !== (0|0)) // if queen castle,
    piece_squares[1 + (turn<<4)] = 7 * (turn<<4) // set rook back to original position
  
  // modify other squares using make_pieces and make_squares
  var ptr = moves << 2
  mailbox[make_squares[ptr]] = make_pieces[ptr]
  ptr = (ptr + 1)|0
  mailbox[make_squares[ptr]] = make_pieces[ptr]
  ptr = (ptr + 1)|0
  mailbox[make_squares[ptr]] = make_pieces[ptr]
  ptr = (ptr + 1)|0
  mailbox[make_squares[ptr]] = make_pieces[ptr]
  ptr = (ptr + 1)|0
}

// Used in movegen()
var sqcheck = new Uint32Array([ // 1st in each list of 4 = k's dest sq.
// Lists (null-terminated) give SQUARES to check for attackers/occupiers before castling.
  SQ_IDS['g1'], SQ_IDS['f1'], 0, 0,
  SQ_IDS['c1'], SQ_IDS['b1'], SQ_IDS['d1'], 0,
  SQ_IDS['g8'], SQ_IDS['f8'], 0, 0,
  SQ_IDS['c8'], SQ_IDS['b8'], SQ_IDS['d8'], 0
])
var check_king = new Uint32Array([ // 1 if nEEd check if attacked, 0 if only check occupancy
  1, 1, 0, 0,
  1, 0, 1, 0,
  1, 1, 0, 0,
  1, 0, 1, 0
])
var castle_bits = new Uint32Array([OO_MASK, OOO_MASK, OO_MASK, OOO_MASK]) // one for each entry in sqcheck
function movegen() {
  var new_max = 0|0
  var offset = (moves << MAX_MOVE_SHIFT)|0
  var turn_bit = (1 << turn)|0
  //var turn_offset = 1 + (turn << 4)
  //var pieces = population[turn]|0
  var i = 64; do {
  //while ((pieces|0) !== (0|0)) { // for each piece
    i = (i - 1)|0
    var sq = i + (i & ~7)
    //var sq = piece_squares[turn_offset + BSF[pieces]] // extract the square the piece is on
    //pieces = (pieces & (pieces - 1))|0 // drop the lsb of pieces
    if (((piece_types[mailbox[sq]] & turn_bit)|0) !== (0|0)) { // if current piece can move
      var p = piece_types[mailbox[sq]]|0
      if (((p >> 2)|0) !== (PAWN|0)) { // if not pawn
        if (((p & SLIDER_MASK)|0) !== (0|0)) { // if sliding
          var j = (p << 4)|0; while ((deltas[j]|0) !== (0|0)) { // for all deltas
            var d = deltas[j]|0
            for (var to = (sq + d)|0; (((to & 0x88)|0) === (0|0)); to = (to + d)|0) { // while tosq is on mailbox, generate sliding attacks
              var c = piece_types[mailbox[to]]|0
              if (c !== (0|0)) { // if obstructed
                if (((c & turn_bit)|0) === (0|0)) { // if obstructed piece is enemy
                  move_list[offset+new_max] = (sq | (to << 8) | (c << 16))|0 // add capture
                  new_max = (new_max + 1)|0
                }
                break // stop generating sliding attacks
              } else { // if not obstructed
                move_list[offset+new_max] = (sq | (to << 8))|0 // add sliding attack and continue
                new_max = (new_max + 1)|0
              }
            }
            j = (j + 1)|0 // next delta
          }
        } else { // not sliding
          var j = (p << 4)|0; while ((deltas[j]|0) !== (0|0)) { // for all deltas
            var to = (sq + (deltas[j]|0))|0
            var c = piece_types[mailbox[to]]|0
            j = (j + 1)|0 // must be done before continue statement
            if ((((to & 0x88)|0) !== (0|0)) || (((c & turn_bit)|0) !== (0|0)))
              continue // if off mailbox or friendly obstruction, skip this delta
            move_list[offset+new_max] = (sq | (to << 8) | (c << 16))|0 // add move
            new_max = (new_max + 1)|0
          }
          if (((p >> 2)|0) === KING) { // if king, generate castlings
            var enemy = (turn ^ 1)|0
            var j = 4|0; do { // for each possible castling
              j = (j - 1)|0
              if ((castling & (1 << j)) !== (0|0)) {
                var ok = 1|0
                var k = (j << 2)|0; while ((sqcheck[k]|0) !== (0|0)) {
                  var chk = sqcheck[k]|0
                  if ((mailbox[chk]|0) !== (0|0) || ((check_king[k]|0 !== (0|0)) && (is_attacked(chk, enemy) !== (0|0)))) {
                    ok = 0|0
                    break
                  }
                  k = (k + 1)|0
                }
                if ((ok|0) !== (0|0)) {
                  move_list[offset+new_max] = (sq | ((sqcheck[j << 2]|0) << 8) | (castle_bits[j]|0))|0
                  new_max = (new_max + 1)|0
                }
              }
            } while ((j|0) !== (0|0))
          }
        }
      } else { // pawn moves
        var sign = (turn|0) ? -1|0 : 1|0
        var double_rank = (turn|0) ? 6|0 : 1|0
        var prom_rank = (turn|0) ? 0|0 : 7|0
        
        var first = (sq + (sign<<4))|0
        if ((mailbox[first]|0) === (0|0)) { // single step if empty
          if (((first >> 4)|0) === (prom_rank|0)) { // if rank 7 or 2, add promotions
            var template = (sq | (first << 8) | (turn_bit << 24))|0
            move_list[offset+new_max] = (template | (QUEEN << 26))|0
            move_list[offset+new_max+1] = (template | (ROOK << 26))|0
            move_list[offset+new_max+2] = (template | (BISHOP << 26))|0
            move_list[offset+new_max+3] = (template | (KNIGHT << 26))|0
            new_max = (new_max + 4)|0
          } else { // otherwise, add normal moves
            move_list[offset+new_max] = (sq | (first << 8))|0
            new_max = (new_max + 1)|0
          }
          var second = (sq + (sign<<5))|0
          if (((sq >> 4) === double_rank) && ((mailbox[second]|0) === (0|0))) { // double step if empty
            move_list[offset+new_max] = (sq | (second << 8))|0
            new_max = (new_max + 1)|0
          }
        }
        var j = (p << 4)|0; while ((deltas[j]|0) !== (0|0)) { // for all capture deltas
          var capt = (sq + (deltas[j]|0))|0
          if ((((capt & 0x88)|0) === (0|0)) && ((mailbox[capt]|0) !== (0|0))) {
            if ((((piece_types[mailbox[capt]]|0) & turn_bit)|0) === (0|0)) { // found enemy piece
              if (((capt >> 4)|0) === (prom_rank|0)) { // if rank 7 or 2, add as capture with promotion
                var template = (sq | (capt << 8) | ((mailbox[capt]|0) << 16) | (turn_bit << 24))|0
                move_list[offset+new_max] = (template | (QUEEN << 26))|0
                move_list[offset+new_max+1] = (template | (ROOK << 26))|0
                move_list[offset+new_max+2] = (template | (BISHOP << 26))|0
                move_list[offset+new_max+3] = (template | (KNIGHT << 26))|0
                new_max = (new_max + 4)|0
              } else { // otherwise, add normal capture
                move_list[offset+new_max] = (sq | (capt << 8) | ((mailbox[capt]|0) << 16))|0
                new_max = (new_max + 1)|0
              }
            }
          } else if ((capt|0) === (ep|0)) { // if capture sq is en passant square
            move_list[offset+new_max] = (sq | (capt << 8) | EP_MASK)|0 // add en passant
            new_max = (new_max + 1)|0
          }
          j = (j + 1)|0 // next capture delta
        }
      }
    }
  //} // while (pieces !== 0)
  } while ((i|0) !== (0|0))
  move_list_max[moves] = new_max
}

function move_to_str(m) {
  return SQUARES[m & FROM_MASK] + SQUARES[(m & TO_MASK) >> 8]
    + ', ' + (m & 0xFF) + ' ' + ((m >> 8) & 0xFF)
    + ' ' + ((m >> 16) & 0xFF) + ' ' + ((m >> 24) & 0xFF)
}

function legalize() {
  var offset = (moves << MAX_MOVE_SHIFT)|0, new_max = 0|0
  for (var i = 0|0; (i|0) < (move_list_max[moves]|0); i = (i + 1)|0) {
    var j = (offset + i)|0
    if (((((move_list[j]|0) & CASTLE_MASK)|0) !== (0|0))
      && ((is_attacked(kings[turn]|0, (turn ^ 1)|0)|0) !== (0|0))) {
      continue // can't castle out of check
    }
    make(move_list[j]|0)
    if ((is_attacked(kings[turn ^ 1]|0, turn|0)|0) === (0|0)) { // can't move into check
      move_list[offset+new_max] = move_list[j]|0
      new_max = (new_max + 1)|0
    }
    unmake(move_list[j]|0)
  }
  move_list_max[moves] = new_max|0
}

// convert into heap operations
function sort() {
  var copied = []
  var offset = (moves << MAX_MOVE_SHIFT)|0
  for (var i = 0|0; (i|0) < (move_list_max[moves]|0); i = (i + 1)|0) {
    var score = ((((move_list[offset+i]|0) & CAPTURE_MASK))|0) ? 1|0 : 0|0
    copied.push({ m: move_list[offset+i]|0, s: score|0 })
  }
  copied.sort(function(a, b) { return +(b.s - a.s) })
  for (var i = 0|0; (i|0) < (copied.length|0); i = (i + 1)|0)
    move_list[offset+i] = copied[i].m|0
}

function san_list() {
  movegen()
  legalize()
  
  var result = {}
  var offset = (moves << MAX_MOVE_SHIFT)|0
  for (var i = 0; i < move_list_max[moves]; ++i) {
    var j = offset + i
    make(move_list[j])
    
    movegen()    
    legalize()
    
    var check = (is_attacked(kings[turn], turn ^ 1)) ? ((move_list_max[moves] === (0|0)) ? '#' : '+') : ''
    unmake(move_list[j])
    
    if (move_list[j] & CASTLE_MASK) {
      if (move_list[j] & OO_MASK)
        result['O-O' + check] = move_list[j]
      else
        result['O-O-O' + check] = move_list[j]
    } else {
      var fr = SQUARES[move_list[j] & FROM_MASK]
      var to = SQUARES[(move_list[j] & TO_MASK) >> 8]
      var isCapt = (move_list[j] & CAPTURE_MASK) || (move_list[j] & EP_MASK)
      var p = PIECE_NAMES[piece_types[mailbox[move_list[j] & FROM_MASK]] >> 2]
      var piece = (p !== 'p') ? p.toUpperCase() : (isCapt ? fr[0] : '')
      var capt = isCapt ? 'x' : ''
      var prom = (move_list[j] & PROMOTION_MASK) ?
        '='+PIECE_NAMES[(move_list[j] & PROMOTION_MASK) >> 26].toUpperCase() : ''
      var dis = ''
      for (var k = 0; k < move_list_max[moves]; ++k) {
        if ((p !== 'p') && (i !== k)) {
          var l = offset + k
          var otherP = PIECE_NAMES[piece_types[mailbox[move_list[l] & FROM_MASK]] >> 2]
          var other_to = SQUARES[(move_list[l] & TO_MASK) >> 8]
          if ((otherP === p) && (other_to === to)) {
            var other_fr = SQUARES[move_list[l] & FROM_MASK]
            for (var m = other_fr.length-1; m >= 0; --m) {
              if (fr[m] !== other_fr[m])
                dis = fr[m]
            }
            break
          }
        }
      }
      result[piece + dis + capt + to + prom + check] = move_list[j]
    }
  }
  return result
}

function apply(sans) {
  for (var i = 0; i < sans.length; ++i) {
    var legal = san_list()
    var san = sans[i].replace(new RegExp(String.fromCharCode(1093), 'g'), 'x')
    if (!(san in legal)) {
      console.log(san === 'dxc5', san.length, san[1].charCodeAt(0), san[1] === 'x')
      console.log(san + ' is illegal: legal moves are ' + Object.keys(legal).join(', '))
    } else {
      make(legal[san]|0)
      console.log('Made move: ' + san + ' => ' + legal[san] + '. Current eval: ' + evaluate())
    }
  }
}

function perft(depth) {
  if (depth === (0|0)) return 1
  var result = 0
  movegen(); legalize(); sort()
  var offset = (moves << MAX_MOVE_SHIFT)|0
  for (var i = 0; i < move_list_max[moves]; ++i) {
    make(move_list[offset+i]|0)
    result += perft(depth-1)
    evaluate()
    unmake(move_list[offset+i]|0)
  }
  return result
}

function divide(depth) {
  var list = san_list()
  var result = []
  for (var san in list) {
    make(list[san])
    result.push({ san: san, move: list[san], movestr: move_to_str(list[san]), count: perft(depth-1) })
    unmake(list[san])
  }
  return result
}

function alphabeta(alpha, beta, depth, nodes = [0]) {
  alpha = alpha|0, beta = beta|0, depth = depth|0
  if ((depth|0) === (0|0)) {
    nodes[0] = (nodes[0] + 1)|0
    return evaluate()|0 //quiesce(alpha, beta)
  }
  movegen(); legalize(); sort()
  if (move_list_max[moves] === (0|0)) { // checkmate or stalemate
    return (is_attacked(kings[turn], turn^1)|0)
      ? -((1 << 29) + depth)|0
      : 0|0
  }
  
  var offset = (moves << MAX_MOVE_SHIFT)|0
  for (var i = 0|0; (i|0) < (move_list_max[moves]|0); i = (i + 1)|0)  {
    make(move_list[offset+i]|0)
    var score = -alphabeta(-beta|0, -alpha|0, (depth - 1)|0, nodes)|0
    unmake(move_list[offset+i]|0)
    if ((score|0) >= (beta|0))
      return beta // fail hard beta-cutoff
    if ((score|0) > (alpha|0))
      alpha = score|0 // alpha acts like max in MiniMax
  }
  return alpha|0
}

function go(depth, nodes = [0]) {
  depth = depth|0
  if ((depth|0) === (0|0)) {
    nodes[0] = (nodes[0] + 1)|0
    return evaluate()|0 //quiesce(alpha, beta)
  }
  var alpha = -(1 << 30)|0, beta = (1 << 30)|0
  movegen(); legalize() //sort()
  var offset = (moves << MAX_MOVE_SHIFT)|0
  var best = -1
  for (var i = 0|0; (i|0) < (move_list_max[moves]|0); i = (i + 1)|0)  {
    make(move_list[offset+i]|0)
    var score = -alphabeta(-beta|0, -alpha|0, (depth - 1)|0, nodes)|0
    unmake(move_list[offset+i]|0)
    
    if (score >= beta) {
      return { score: beta, best: move_list[offset+i] }
    }
    if (score > alpha) {
      alpha = score
      best = i
    }
  }
  var m = move_to_str(move_list[offset+best])
  return { score: alpha, best: m }
}
//fns

function perft_check(name, pos, toMove, castlingRights, epSquare, expected, maxdepth) {
  for (var i = 0; i < 128; ++i)
    mailbox[i] = pos[i]|0 // TODO: fix
  turn = toMove|0
  moves = 0|0
  castling = castlingRights|0
  ep = epSquare|0
  score = slow_evaluate()|0
  console.log('Perft (' + name + '):')
  for (var i = 1; i <= maxdepth; ++i) {
    var startTime = Date.now()
    var n = perft(i)
    var duration = (Date.now() - startTime)
    console.log('- perft(' + i + ') = ' + n + ' (expected ' + expected[i] + '). Duration: '
      + duration + ' ms (' + (Math.round(100*n/(duration))/100) + ' knps). Score: ' + score)
  }
}

// perft positions taken from https://chessprogramming.wikispaces.com/Perft+Results
perft_check('initial', initial_mailbox, 0, 0xF, -1, [1, 20, 400, 8902, 197281, 4865609, 119060324], 4)

if (DEBUG) {
  perft_check('kiwipete', [
    WR, EE, EE, EE, WK, EE, EE, WR, 0,0,0,0,0,0,0,0,
    WP, WP, WP, WB, WB, WP, WP, WP, 0,0,0,0,0,0,0,0,
    EE, EE, WN, EE, EE, WQ, EE, BP, 0,0,0,0,0,0,0,0,
    EE, BP, EE, EE, WP, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, EE, WP, WN, EE, EE, EE, 0,0,0,0,0,0,0,0,
    BB, BN, EE, EE, BP, BN, BP, EE, 0,0,0,0,0,0,0,0,
    BP, EE, BP, BP, BQ, BP, BB, EE, 0,0,0,0,0,0,0,0,
    BR, EE, EE, EE, BK, EE, EE, BR, 0,0,0,0,0,0,0,0
  ], 0, 0xF, -1, [1, 48, 2039, 97862, 4085603, 193690690], 4)
  
  perft_check('rook endgame', [
    EE, EE, EE, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, EE, EE, WP, EE, WP, EE, 0,0,0,0,0,0,0,0,
    EE, EE, EE, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, WR, EE, EE, EE, BP, EE, BK, 0,0,0,0,0,0,0,0,
    WK, WP, EE, EE, EE, EE, EE, BR, 0,0,0,0,0,0,0,0,
    EE, EE, EE, BP, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, BP, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, EE, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0
  ], 0, 0x0, -1, [1, 14, 191, 2812, 43238, 674624, 11030083], 6)
  
  perft_check('complicated', [
    WR, EE, EE, WQ, EE, WR, WK, EE, 0,0,0,0,0,0,0,0,
    WP, BP, EE, WP, EE, EE, WP, WP, 0,0,0,0,0,0,0,0,
    BQ, EE, EE, EE, EE, WN, EE, EE, 0,0,0,0,0,0,0,0,
    WB, WB, WP, EE, WP, EE, EE, EE, 0,0,0,0,0,0,0,0,
    BN, WP, EE, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, BB, EE, EE, EE, BN, BB, WN, 0,0,0,0,0,0,0,0,
    WP, BP, BP, BP, EE, BP, BP, BP, 0,0,0,0,0,0,0,0,
    BR, EE, EE, EE, BK, EE, EE, BR, 0,0,0,0,0,0,0,0
  ], 0, 0xC, -1, [1, 2, 264, 9467, 422333, 15833292], 5)
  
  perft_check('tricky', [
    WR, WN, WB, WQ, WK, EE, EE, WR, 0,0,0,0,0,0,0,0,
    WP, WP, WP, EE, WN, BN, WP, WP, 0,0,0,0,0,0,0,0,
    EE, EE, EE, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, WB, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, EE, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, BP, EE, EE, EE, EE, EE, 0,0,0,0,0,0,0,0,
    BP, BP, EE, WP, BB, BP, BP, BP, 0,0,0,0,0,0,0,0,
    BR, BN, BB, BQ, EE, BK, EE, BR, 0,0,0,0,0,0,0,0
  ], 0, 0x3, -1, [1, 44, 1486, 62379, 2103487], 4)
  
  perft_check('symmetric', [
    WR, EE, EE, EE, EE, WR, WK, EE, 0,0,0,0,0,0,0,0,
    EE, WP, WP, EE, WQ, WP, WP, WP, 0,0,0,0,0,0,0,0,
    WP, EE, WN, WP, EE, WN, EE, EE, 0,0,0,0,0,0,0,0,
    EE, EE, WB, EE, WP, EE, BB, EE, 0,0,0,0,0,0,0,0,
    EE, EE, BB, EE, BP, EE, WB, EE, 0,0,0,0,0,0,0,0,
    BP, EE, BN, BP, EE, BN, EE, EE, 0,0,0,0,0,0,0,0,
    EE, BP, BP, EE, BQ, BP, BP, BP, 0,0,0,0,0,0,0,0,
    BR, EE, EE, EE, EE, BR, BK, EE, 0,0,0,0,0,0,0,0
  ], 0, 0x0, -1, [1, 46, 2079, 89890, 3894594], 4)
}

console.log('Done. Total time:', (Date.now()-start)/1000 + 's')
//engine

if (INTERFACE) {

var move_record = []
var last_new_game = Date.now()
var flip = 0
if (typeof overlay === 'undefined') {
  var overlay = document.createElement('div')
  overlay.onmousedown = function() { overlay.style.zIndex = -1; }
  overlay.onmouseup = function() { overlay.style.zIndex = 1; }
  init_display()
  resize_display()
  document.body.appendChild(overlay)
}
function get_moves() {
  var raw = document.getElementsByClassName('moves')[0].children // document.getElementsByClassName('areplay')[0].children[1]; 
  var accu = []
  for (var i = 0; i < raw.length; ++i) {
    if (raw[i].tagName === 'MOVE' && raw[i].className !== 'empty') {
      var text = raw[i].innerText.trim()
      if (text)
        accu.push(text)
    }
  }
  return accu
}
if (typeof tickInterval !== 'undefined') clearInterval(tickInterval)
tickInterval = setInterval(function(){
  var m = get_moves()
  if (m.join(' ') !== move_record.join(' ')) {
    //if (m.length === (0|0)) new_game()
    move_record = m
    move_change()
  }
}, 100)

function init_display() {
  for (var i = 0; i < 64; ++i) {
    overlay.appendChild(document.createElement('div'))
    overlay.children[i].style.float = 'left'
    overlay.children[i].style.left = ((100*(i%8)/8).toString()) + '%'
    overlay.children[i].style.top = ((100*(i>>3)/8).toString()) + '%'
    overlay.children[i].style.width = (100/8).toString() + '%'
    overlay.children[i].style.height = (100/8).toString() + '%'
  }
  new_game()
}

function resize_display() {
  var boardDOM = document.getElementsByClassName('lichess_game')[0].children[0]
  var rect = boardDOM.getBoundingClientRect()
  overlay.style.opacity = 1
  overlay.style.zIndex = 1
  overlay.style.position = 'fixed'
  overlay.style.left = rect.left + 'px'
  overlay.style.top = rect.top + 'px'
  overlay.style.width = rect.width + 'px'
  overlay.style.height = rect.width + 'px'
}

function update_display(heatmap) {
  resize_display()
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
  }
  for (var i = 0; i < 64; ++i) {
    overlay.children[i].style.backgroundColor = scheme[heatmap[i]]
    //overlay.children[i].innerText = heatmap[i]
  }
}

function new_game() {
  flip = parseInt(prompt('New game! Side (0 = white, 1 = black)?', 0))
}
function move_change(searchdepth = SEARCH_DEPTH) {
  var start = Date.now()
  reset_board()
  apply(move_record)
  
  var heatmap = Array(64)
  for (var i = 0; i < 64; ++i) heatmap[i] = -6
  console.log('No. of legal moves:', Object.keys(san_list()).length)
  var nodes = [0]
  var searchresult = go(searchdepth, nodes)
  console.log('Final eval: ' + (searchresult.score/100) + ', best move: ' + searchresult.best.substring(0, 4), searchresult)
  var fr = SQ_IDS[searchresult.best.substring(0, 2)]
  var to = SQ_IDS[searchresult.best.substring(2, 4)]
  fr = (fr + (fr & 7)) >> 1
  to = (to + (to & 7)) >> 1
  heatmap[fr] = heatmap[to] = -5
  
  var translated = Array(64)
  for (var i = 0; i < 8; ++i) {
    for (var j = 0; j < 8; ++j) {
      translated[i*8 + j] = flip ? heatmap[8*i + (7-j)] : heatmap[8*(7-i) + j]
    }
  }
  update_display(translated)
  var duration = Date.now() - start
  console.log('Total time: ' + duration + ' ms (' + nodes[0] + ' nodes @ ' + (Math.round(100*nodes[0]/duration)/100) + ' knps)')
}

} // if (INTERFACE)