{ // force local scope
'use strict'

// #########################################
//            low-level functions
// #########################################

// ---------- constants ----------

const LO = 0
const HI = 1

// ---------- 'registers' ----------

// '64-bit', little endian
let rax = new Uint32Array(2)
let rbx = new Uint32Array(2)
let rcx = new Uint32Array(2)
let rdx = new Uint32Array(2)
let r8  = new Uint32Array(2)
let r9  = new Uint32Array(2)
let rA  = new Uint32Array(2)
let rB  = new Uint32Array(2)
let rC  = new Uint32Array(2)
let rD  = new Uint32Array(2)
let rE  = new Uint32Array(2)
let rF  = new Uint32Array(2)

// ---------- dword functions (pure) ----------

// simple bitwise
function d_bit(n, x) { return (x >>> n) & 1 } // nth bit of x
function d_lsb(x) { return x & ~(x - 1) } // lsb of x
function d_clsb(x) { return x & (x - 1) } // x without its lsb

// lookup table for d_bsf
const d_bsf_lookup = new Uint8Array(1 << 16).map(function (e, i) {
  let j = -1
  while (++j < 16)
    if ((i >>> j) & 1)
      return j
  return 16 // miss
}) // 64 KB

// lookup table for d_bsr
const d_bsr_lookup = new Uint8Array(1 << 16).map(function (e, i) {
  let j = 16
  while (j--)
    if ((i >>> j) & 1)
      return j
  return 16 // miss
}) // 64 KB

// bit position of x's lsb
function d_bsf(x) {
  return (x & 0xFFFF) ? d_bsf_lookup[x & 0xFFFF] : 16 | d_bsf_lookup[x >>> 16]
}

// bit position of x's msb
function d_bsr(x) {
  return (x >>> 16) ? 16 | d_bsr_lookup[x >>> 16] : d_bsr_lookup[x & 0xFFFF]
}

// lookup table for d_popcnt
const d_popcnt_lookup = new Uint8Array(1 << 16).map(function (e, i) {
  let j = 16, k = 0
  while (j--)
    if ((i >>> j) & 1)
      ++k
  return k
}) // 64 KB

// number of bits set in x
function d_popcnt(x) { return d_popcnt_lookup[x & 0xFFFF] + d_popcnt_lookup[x >>> 32] }

// ---------- qword functions (pure) ----------

function bit(n, x) { return (n & 32) ? d_bit(n ^ 32, x[HI]) : d_bit(n, x[LO]) } // nth bit of x
function bool(x) { return x[LO] | x[HI] } // convert x to bool
function popcnt(x) { return d_popcnt(x[LO]) + d_popcnt(x[HI]) } // number of bits set in x

// bit scans
function bsf(x) { return x[LO] ?      d_bsf(x[LO]) : 32 | d_bsf(x[HI]) }
function bsr(x) { return x[HI] ? 32 | d_bsr(x[HI]) :      d_bsr(x[LO]) }

// convert to binary string
function q_str(x, radix = 2) {
  const digits = Math.round(Math.log(Math.pow(2, 32)) / Math.log(radix))
  const padding = '0000000000000000000000000000000000000000000000000000000000000000'.substring(0, digits)
  return (padding + x[HI].toString(radix)).slice(-digits) + (padding + x[LO].toString(radix)).slice(-digits)
}

// convert to bitboard
function q_bitboard(x) {
  let s = ''
  for (let r = 7; r >= 0; --r) {
    for (let f = 0; f < 8; ++f)
      s += bit(8 * r + f, x) ? '1' : '0'
    s += '\n'
  }
  return s
}

// print contents of all registers
function dump(radix = 2) {
  let registers = { rax: rax, rbx: rbx, rcx: rcx, rdx: rdx, r8: r8, r9: r9, rA: rA, rB: rB, rC: rC, rD: rD, rE: rE, rF: rF }
  for (const name in registers)
    console.log(name + ': ' + q_str(registers[name], radix))
}

// ---------- qword instructions (mutating) ----------

// unary bitwise
function com(x) { x[LO] = ~x[LO]; x[HI] = ~x[HI] } // complement x

// assignment
function zero(x)        { x[LO] = x[HI] = 0 } // set x to 0
function mov(x, y)      { x[LO] = y[LO]; x[HI] = y[HI] } // move y to x
function set(x, lo, hi) { x[LO] = lo;    x[HI] = hi    } // set x to [lo, hi]

// binary bitwise
function and(x, y) { x[LO] &= y[LO]; x[HI] &= y[HI] } // and x by y
function  or(x, y) { x[LO] |= y[LO]; x[HI] |= y[HI] } //  or x by y
function xor(x, y) { x[LO] ^= y[LO]; x[HI] ^= y[HI] } // xor x by y

// shift x left by 32-bit n 0..63
function shl(x, n) { 
  if (n & 32) { // if n >= 32
    x[HI] = x[LO] << (n ^ 32) // n ^ 32 = n - 32
    x[LO] = 0
  } else {
    x[HI] = (x[HI] << n) | (x[LO] >>> (32 - n))
    x[LO] <<= n
  }
}

// shift x right by 32-bit n 0..63
function shr(x, n) {
  if (n & 32) { // if n >= 32
    x[LO] = x[HI] >>> (n ^ 32) // n ^ 32 = n - 32
    x[HI] = 0
  } else {
    x[LO] = (x[LO] >>> n) | (x[HI] << (32 - n))
    x[HI] >>>= n
  }
}

// set x to lsb of y
function lsb(x, y) {
  if (y[LO])
    set(x, d_lsb(y[LO]), 0)
  else
    set(x, 0, d_lsb(y[HI]))
}

// set x to y without its lsb
function clsb(x, y) {
  if (y[LO])
    set(x, d_clsb(y[LO]), y[HI])
  else
    set(x, 0, d_clsb(y[HI]))
}

// #####################################
//            magic bitboards
// #####################################

// compute a hash of masked occupancy register x, magic register m, and shifts s[LO], s[HI]
function hash(x, m, s) {
  x[LO] *= m[LO]
  x[HI] *= m[HI]
}

// #########################################
//            game representation
// #########################################

// ---------- constants ----------

//TODO: "\u2659\u265F\u2658\u265E\u2657\u265D\u2656\u265C\u2655\u265B\u2654\u265A"

// colors
const W = 0, B = 1

// pieces
const EE =  0 // empty
const WP =  1, WK =  2, WN =  3 // non-sliding pieces
const WQ =  4, WR =  5, WB =  6 // sliding pieces
const BP =  9, BK = 10, BN = 11 // black non-sliding
const BQ = 12, BR = 13, BB = 14 // black sliding

// squares
const A1 =  0, B1 =  1, C1 =  2, D1 =  3, E1 =  4, F1 =  5, G1 =  6, H1 =  7
const A2 =  8, B2 =  9, C2 = 10, D2 = 11, E2 = 12, F2 = 13, G2 = 14, H2 = 15
const A3 = 16, B3 = 17, C3 = 18, D3 = 19, E3 = 20, F3 = 21, G3 = 22, H3 = 23
const A4 = 24, B4 = 25, C4 = 26, D4 = 27, E4 = 28, F4 = 29, G4 = 30, H4 = 31
const A5 = 32, B5 = 33, C5 = 34, D5 = 35, E5 = 36, F5 = 37, G5 = 38, H5 = 39
const A6 = 40, B6 = 41, C6 = 42, D6 = 43, E6 = 44, F6 = 45, G6 = 46, H6 = 47
const A7 = 48, B7 = 49, C7 = 50, D7 = 51, E7 = 52, F7 = 53, G7 = 54, H7 = 55
const A8 = 56, B8 = 57, C8 = 58, D8 = 59, E8 = 60, F8 = 61, G8 = 62, H8 = 63

// miscellanous
const TURN = 0, MOVES = 1, CASTLING = 2, EP = 3, SCORE = 4
const MAX_LEN = 512 // max game length
const MAX_MOVE_SHIFT = 8 // log2(max branching factor)
const MAX_BRANCH = 1 << MAX_MOVE_SHIFT

// ---------- move list declarations ---------- //TODO: don't use this representation? use a bitbase instead to avoid having to sort? //TODO: flags? for castling/ep/promotion/etc

// candidate moves are represented with 3 'move maps' and 3 'move ids', effectively
// capturing each move as an array of 3 tuples (move board, id)
// the three tuples are: piece capture other
// the idea is then to make the bitboard part of applying a move simply:
//   board[ids[0]] ^= board[maps[0]]
//   board[ids[1]] ^= board[maps[1]]
//   board[ids[2]] ^= board[maps[2]]
// piece map contains two bits: fr and to (on promotions, to is not set)
// capture map contains 1 bit: sq (on non-captures, sq is not set)
// other map used for promotions (promotion sq is set) and castling (fr and to for the rook are set)
// (piece, capture, other) ids correspond to the bitboards that (piece, capture, other) maps must modify

const MAP_SHIFT   = MAX_MOVE_SHIFT + 1 + 2 // +1 for the 2* since move_maps uses qword values, +2 for the *4 since 3 move maps
const ID_SHIFT    = MAX_MOVE_SHIFT + 2     // +2 since 3 ids
let move_maps     = new Uint32Array(MAX_LEN * MAX_BRANCH * 4 * 2) // [MAX_LEN][MAX_BRANCH][4], holds a list of lists of move maps (*2 since 1 qword = 2 dword)
let move_ids      = new Uint8Array(MAX_LEN * MAX_BRANCH * 4) // [MAX_LEN][MAX_BRANCH], holds a list of lists of move ids
let move_list_len = new Uint32Array(MAX_LEN) // holds the length of each list in move_boards and move_ids

// ---------- board declarations ----------

// bitboard
let board = new Uint32Array(16 * 2)
let occ  = new Uint32Array(2)

// non-bitboard
let mail = new Uint8Array(64) // mailbox
let misc = new Uint32Array(5) // turn, ply count, castling rights, etc.

// ---------- square functions ----------

function s_str(sq) {
  return [
    'a1', 'b1', 'c1', 'd1', 'e1', 'f1', 'g1', 'h1',
    'a2', 'b2', 'c2', 'd2', 'e2', 'f2', 'g2', 'h2',
    'a3', 'b3', 'c3', 'd3', 'e3', 'f3', 'g3', 'h3',
    'a4', 'b4', 'c4', 'd4', 'e4', 'f4', 'g4', 'h4',
    'a5', 'b5', 'c5', 'd5', 'e5', 'f5', 'g5', 'h5',
    'a6', 'b6', 'c6', 'd6', 'e6', 'f6', 'g6', 'h6',
    'a7', 'b7', 'c7', 'd7', 'e7', 'f7', 'g7', 'h7',
    'a8', 'b8', 'c8', 'd8', 'e8', 'f8', 'g8', 'h8'
  ][sq]
}

// ---------- piece functions ----------

function color(p) { return p >>> 4 } // color of piece
function sliding(p) { return p & 4 } // 4 bit set for all sliding pieces
function enemy(p) { return p ^ 8 } // turns _ into enemy _
function p_str(p) { return ['.', 'P', 'K', 'N', 'Q', 'R', 'B', '.', '.', 'p', 'k', 'n', 'q', 'r', 'b'][p] }

// ---------- move functions (pure) ----------

// queries about the current candidate in (rax, ...)
function piece() { return r8[LO] & 0x7 } // piece being moved
function captures() { return r9[LO] } // piece being captured
function promotes() { return piece() == WP ? rA[LO] : EE } // piece being promoted to, if promotion
function castles() { return piece() == WK } // is O-O/O-O-O?
//function enpassant() { return piece() == WP &&  }

// ---------- move functions (mutating) ----------

// adds a new candidate move. maps are assumed to be in (rax, rbx, rcx) and ids in (r8[LO], r9[LO], rA[LO])
function push_move() {
  let l = move_list_len[misc[MOVES]]++ << 2 // get length of current candidate list * 4 and increment length of list
  let p = (misc[MOVES] << MAP_SHIFT) | l // ptr to end of current map list
  let q = (misc[MOVES] << ID_SHIFT) | l // ptr to end of current id list
  // copy maps into move_maps
  move_maps[p++] = rax[LO]
  move_maps[p++] = rax[HI]
  move_maps[p++] = rbx[LO]
  move_maps[p++] = rbx[HI]
  move_maps[p++] = rcx[LO]
  move_maps[p  ] = rcx[HI]
  // copy ids into move_ids
  move_ids[q++] = r8[LO]
  move_ids[q++] = r9[LO]
  move_ids[q  ] = rA[LO]
}

// loads the ith candidate move of the current candidate list into (rax, rbx, rcx, r8[LO], r9[LO], rA[LO])
function load_move(i) {
  let j = i << 2 // *4 since each entry in move_ids and move_maps contains 3 items
  let p = (misc[MOVES] << MAP_SHIFT) | j // ptr to entry in map list
  let q = (misc[MOVES] << ID_SHIFT) | j // ptr to entry in id list
  // copy maps into (rax, rbx, rcx)
  rax[LO] = move_maps[p++]
  rax[HI] = move_maps[p++]
  rbx[LO] = move_maps[p++]
  rbx[HI] = move_maps[p++]
  rcx[LO] = move_maps[p++]
  rcx[HI] = move_maps[p  ]
  // copy ids into (r8[LO], r9[LO], rA[LO])
  r8[LO] = move_ids[q++]
  r9[LO] = move_ids[q++]
  rA[LO] = move_ids[q  ]
}

// ---------- board functions (pure) ----------

// gets piece at square
function at(sq) { return mail[sq] }

// convert castling rights to string
function c_str(c) {
  if (c) {
    const rights = ['K', 'Q', 'k', 'q']
    let s = ''
    for (let i = 0; i < 4; ++i)
      if ((c >>> i) & 1)
        s += rights[i]
    return s
  }
  return '-'
}

// convert board to string
function str() {
  let s = ''
  for (let r = 7; r >= 0; --r) {
    for (let f = 0; f < 8; ++f)
      s += p_str(at(8 * r + f))
    s += '\n'
  }
  return s + `${['w', 'b'][misc[TURN]]} | ${misc[MOVES]} moves | ${misc[EP] ? s_str(misc[EP]) : '-'} ep | ${c_str(misc[CASTLING])} castling | ${misc[SCORE]} score`
}

// print bitboards and board
function dump_board(radix = 2) {
  let ids = { wp: WP, wk: WK, wn: WN, wq: WQ, wr: WR, wb: WB, bp: BP, bn: BN, bq: BQ, br: BR, bb: BB }
  for (const name in ids)
    console.log(name + ': \n' + q_bitboard(Uint32Array.from([board[ids[name] << 1], board[ids[name] << 1 | 1]]), radix))
  console.log('occ: \n' + q_bitboard(occ, radix))
  console.log(str())
}

// ---------- board functions (mutating) ----------

// places piece at square
function place(p, sq) {
  p = p|0 // this halves speed in Chrome
  sq = sq|0
  if (p) {
    mail[sq] = p
    let ptr = p << 1
    if (sq & 32)
      board[ptr | 1] |= 1 << (sq ^ 32)
    else
      board[ptr] |= 1 << sq
    occ[LO] |= board[ptr]
    occ[HI] |= board[ptr | 1]
  }
}

// places pieces according to b[]
function set_board(b) {
  b.map((e, i) => place(e, i))
}

// new board
function reset() {
  board.fill(0)
  occ.fill(0)
  set_board([
    WR, WN, WB, WQ, WK, WB, WN, WR,
    WP, WP, WP, WP, WP, WP, WP, WP,
    EE, EE, EE, EE, EE, EE, EE, EE,
    EE, EE, EE, EE, EE, EE, EE, EE,
    EE, EE, EE, EE, EE, EE, EE, EE,
    EE, EE, EE, EE, EE, EE, EE, EE,
    BP, BP, BP, BP, BP, BP, BP, BP,
    BR, BN, BB, BQ, BK, BB, BN, BR
  ])
  misc[TURN] = 0
  misc[EP] = 0
  misc[CASTLING] = 0xF
  misc[SCORE] = 0
  misc[MOVES] = 0
}

// ##################################
//            main program
// ##################################

// ---------- benchmarks ----------
set(rax, 0, 1)
set(rbx, 0, 1)
let start = Date.now()
let n = 100000000
for (let i = 0; i < n; ++i) {
  // 0.7 ns (loop overhead, same for while(n--))
  //let j = 3 // 0.7 ns
  //popcnt(rax) // 1.3 ns
  //bsf(rbx) // 3.4 ns
  //lsb(rax, rbx) // 4.6 ns
  //clsb(rax, rbx) // rbx[LO] ? 5.2 ns : 4.6 ns
  //set(rax, 1, 0)
  //shl(rax, 4) // shift >= 32 ? 3.7 ns : 5 ns
  //place(WP, E4) // 4.65 ns
  //move_list_len[0] = 0
  //load_move(0) // 12.5 ns
  //move_list_len[0] = 0
  //push_move() // 14.6 ns
}
console.log(((Date.now() - start) / n / 1000 * 1e9) + ' ns')
dump()

// ---------- initialize and print board ----------
reset()
dump_board()

} // force local scope