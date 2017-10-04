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

// scrap, used by low-level functions as temporaries
let r8 = new Uint32Array(2)
let r9 = new Uint32Array(2)
let rA = new Uint32Array(2)
let rB = new Uint32Array(2)
let rC = new Uint32Array(2)
let rD = new Uint32Array(2)
let rE = new Uint32Array(2)
let rF = new Uint32Array(2)

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
  return (x & 0xFFFF0000) ? 16 | d_bsr_lookup[x & 0xFFFF0000 >>> 16] : d_bsr_lookup[x & 0xFFFF]
}

// ---------- qword functions (pure) ----------

function bit(n, x) { return (n & 32) ? d_bit(n ^ 32, x[HI]) : d_bit(n, x[LO]) } // nth bit of x
function bool(x) { return x[LO] | x[HI] } // cast x to bool

// cast to binary string
function q_str(x, radix = 2) {
  const digits = Math.round(Math.log(Math.pow(2, 32)) / Math.log(radix))
  const padding = '0000000000000000000000000000000000000000000000000000000000000000'.substring(0, digits)
  return (padding + x[HI].toString(radix)).slice(-digits) + (padding + x[LO].toString(radix)).slice(-digits)
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
    x[HI] <<= n
    x[HI] |= (x[LO] >>> (32 - n)) & ((1 << n) - 1)
    x[LO] <<= n
  }
}

// shift x right by 32-bit n 0..63
function shr(x, n) {
  if (n & 32) { // if n >= 32
    x[LO] = x[HI] >>> (n ^ 32) // n ^ 32 = n - 32
    x[HI] = 0
  } else {
    x[LO] >>>= n
    x[LO] |= (x[HI] & ((1 << n) - 1)) << (32 - n)
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

// bit scans
function bsf(x, y) { set(x, y[LO] ?      d_bsf(y[LO]) : 32 | d_bsf(y[HI]), 0) } // set x to bit position of y's lsb
function bsr(x, y) { set(x, y[HI] ? 32 | d_bsr(y[HI]) :      d_bsr(y[LO]), 0) } // set x to bit position of y's msb

// #####################################
//            chess functions
// #####################################

// ---------- constants ----------

// colors
const w = 0, b = 1

// pieces
const ee = 0 // empty
const wp = 0b0001
const wq = 0b0110, wr = 0b0100, wb = 0b0010

// ##################################
//            main program 
// ##################################

set(rax, 0, 1)
set(rbx, 1, 0)
let start = Date.now()
let n = 1000000000
for (let i = 0; i < n; ++i) {
  set(rax, 0xFFFFFFFF, 0)
  shl(rax, 20)
}
console.log((Date.now() - start) / n)
dump()