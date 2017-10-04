let rax = new Uint32Array(2)
let rbx = new Uint32Array(2)
let rcx = new Uint32Array(2)
let rdx = new Uint32Array(2)

function f() {
  rax[0] = 1
  rax[1] = 5
}

function g() {
  f()
  rax[0] = 2
  rax[1] = 3
}

function h() {
  rax[0] = 1
  rax[1] = 5
  rax[0] = 2
  rax[1] = 3
}

for (let i = 0; i < 100000; ++i)
  // f() // simple assignment
  g() // calling a simple function (inlined automatically)
  h() // manually inlining a simple function
console.log(rax)