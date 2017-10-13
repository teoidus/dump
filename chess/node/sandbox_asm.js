--- Raw source ---
(R,S){
if((%IS_VAR(this)===null)||(this===(void 0)))throw k(18,"String.prototype.slice");
var w=(%_ToString(this));
var ae=w.length;
var af=(%_ToInteger(R));
var ag=ae;
if(!(S===(void 0))){
ag=(%_ToInteger(S));
}
if(af<0){
af+=ae;
if(af<0){
af=0;
}
}else{
if(af>ae){
return'';
}
}
if(ag<0){
ag+=ae;
if(ag<0){
return'';
}
}else{
if(ag>ae){
ag=ae;
}
}
if(ag<=af){
return'';
}
return %_SubString(w,af,ag);
}


--- Optimized code ---
optimization_id = 0
source_position = 4831
kind = OPTIMIZED_FUNCTION
name = slice
stack_slots = 8
compiler = crankshaft
Instructions (size = 785)
0000022674CB0B80     0  55             push rbp
0000022674CB0B81     1  4889e5         REX.W movq rbp,rsp
0000022674CB0B84     4  56             push rsi
0000022674CB0B85     5  57             push rdi
0000022674CB0B86     6  4883ec20       REX.W subq rsp,0x20
0000022674CB0B8A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000022674CB0B8E    14  488945e8       REX.W movq [rbp-0x18],rax
0000022674CB0B92    18  488bf0         REX.W movq rsi,rax
0000022674CB0B95    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000022674CB0B9C    28  7305           jnc 35  (0000022674CB0BA3)
0000022674CB0B9E    30  e89d68f7ff     call StackCheck  (0000022674C27440)    ;; code: BUILTIN
0000022674CB0BA3    35  488b5d20       REX.W movq rbx,[rbp+0x20]    ;; debug: position 4855
0000022674CB0BA7    39  49ba114280f9f4030000 REX.W movq r10,000003F4F9804211    ;; object: 000003F4F9804211 <null>
0000022674CB0BB1    49  493bda         REX.W cmpq rbx,r10
0000022674CB0BB4    52  0f8442010000   jz 380  (0000022674CB0CFC)
0000022674CB0BBA    58  49ba414280f9f4030000 REX.W movq r10,000003F4F9804241    ;; debug: position 4870
                                                             ;; object: 000003F4F9804241 <undefined>
0000022674CB0BC4    68  493bda         REX.W cmpq rbx,r10
0000022674CB0BC7    71  0f842f010000   jz 380  (0000022674CB0CFC)
0000022674CB0BCD    77  488b75e8       REX.W movq rsi,[rbp-0x18]    ;; debug: position 4883
0000022674CB0BD1    81  488bc3         REX.W movq rax,rbx
0000022674CB0BD4    84  e88764f7ff     call 0000022674C27060    ;; code: STUB, ToStringStub, minor: 0
0000022674CB0BD9    89  488945e0       REX.W movq [rbp-0x20],rax
0000022674CB0BDD    93  488bd8         REX.W movq rbx,rax
0000022674CB0BE0    96  f6c301         testb rbx,0x1
0000022674CB0BE3    99  0f843a020000   jz 675  (0000022674CB0E23)
0000022674CB0BE9   105  4c8b53ff       REX.W movq r10,[rbx-0x1]
0000022674CB0BED   109  41f6420b80     testb [r10+0xb],0x80
0000022674CB0BF2   114  0f8530020000   jnz 680  (0000022674CB0E28)
0000022674CB0BF8   120  8b5313         movl rdx,[rbx+0x13]
0000022674CB0BFB   123  488955d8       REX.W movq [rbp-0x28],rdx
0000022674CB0BFF   127  488b75e8       REX.W movq rsi,[rbp-0x18]
0000022674CB0C03   131  488b4518       REX.W movq rax,[rbp+0x18]
0000022674CB0C07   135  e8345cfdff     call 0000022674C86840    ;; code: STUB, ToIntegerStub, minor: 0
0000022674CB0C0C   140  488945d0       REX.W movq [rbp-0x30],rax
0000022674CB0C10   144  488bd8         REX.W movq rbx,rax
0000022674CB0C13   147  488b5510       REX.W movq rdx,[rbp+0x10]    ;; debug: position 5006
0000022674CB0C17   151  49ba414280f9f4030000 REX.W movq r10,000003F4F9804241    ;; object: 000003F4F9804241 <undefined>
0000022674CB0C21   161  493bd2         REX.W cmpq rdx,r10
0000022674CB0C24   164  0f8418000000   jz 194  (0000022674CB0C42)
0000022674CB0C2A   170  488b75e8       REX.W movq rsi,[rbp-0x18]
0000022674CB0C2E   174  488bc2         REX.W movq rax,rdx
0000022674CB0C31   177  e80a5cfdff     call 0000022674C86840    ;; code: STUB, ToIntegerStub, minor: 0
0000022674CB0C36   182  488bd8         REX.W movq rbx,rax
0000022674CB0C39   185  488b45d8       REX.W movq rax,[rbp-0x28]
0000022674CB0C3D   189  e90a000000     jmp 204  (0000022674CB0C4C)
0000022674CB0C42   194  488b45d8       REX.W movq rax,[rbp-0x28]
0000022674CB0C46   198  8bd8           movl rbx,rax          ;; debug: position 5049
0000022674CB0C48   200  48c1e320       REX.W shlq rbx, 32
0000022674CB0C4C   204  488b55d0       REX.W movq rdx,[rbp-0x30]    ;; debug: position 5049
0000022674CB0C50   208  f6c201         testb rdx,0x1
0000022674CB0C53   211  0f8519010000   jnz 498  (0000022674CB0D72)
0000022674CB0C59   217  48c1ea20       REX.W shrq rdx, 32
0000022674CB0C5D   221  83fa00         cmpl rdx,0x0
0000022674CB0C60   224  0f8c19000000   jl 255  (0000022674CB0C7F)
0000022674CB0C66   230  3bd0           cmpl rdx,rax          ;; debug: position 5092
0000022674CB0C68   232  0f8e16000000   jle 260  (0000022674CB0C84)
0000022674CB0C6E   238  48b8914780f9f4030000 REX.W movq rax,000003F4F9804791    ;; object: 000003F4F9804791 <String[0]: >
0000022674CB0C78   248  488be5         REX.W movq rsp,rbp
0000022674CB0C7B   251  5d             pop rbp
0000022674CB0C7C   252  c21800         ret 0x18
0000022674CB0C7F   255  e8b853e5ff     call 0000022674B0603C    ;; debug: position 5057
                                                             ;; soft deoptimization bailout 6
0000022674CB0C84   260  488bcb         REX.W movq rcx,rbx    ;; debug: position 5117
0000022674CB0C87   263  f6c101         testb rcx,0x1
0000022674CB0C8A   266  0f852b010000   jnz 571  (0000022674CB0DBB)
0000022674CB0C90   272  48c1e920       REX.W shrq rcx, 32
0000022674CB0C94   276  83f900         cmpl rcx,0x0
0000022674CB0C97   279  0f8c16000000   jl 307  (0000022674CB0CB3)
0000022674CB0C9D   285  3bc8           cmpl rcx,rax          ;; debug: position 5164
0000022674CB0C9F   287  0f8e06000000   jle 299  (0000022674CB0CAB)
0000022674CB0CA5   293  8bd8           movl rbx,rax
0000022674CB0CA7   295  48c1e320       REX.W shlq rbx, 32
0000022674CB0CAB   299  488bcb         REX.W movq rcx,rbx
0000022674CB0CAE   302  e905000000     jmp 312  (0000022674CB0CB8)
0000022674CB0CB3   307  e88e53e5ff     call 0000022674B06046    ;; debug: position 5125
                                                             ;; soft deoptimization bailout 7
0000022674CB0CB8   312  488bd9         REX.W movq rbx,rcx    ;; debug: position 5186
0000022674CB0CBB   315  f6c301         testb rbx,0x1
0000022674CB0CBE   318  0f852b010000   jnz 623  (0000022674CB0DEF)
0000022674CB0CC4   324  48c1eb20       REX.W shrq rbx, 32
0000022674CB0CC8   328  3bda           cmpl rbx,rdx
0000022674CB0CCA   330  0f8e1b000000   jle 363  (0000022674CB0CEB)
0000022674CB0CD0   336  8bda           movl rbx,rdx
0000022674CB0CD2   338  48c1e320       REX.W shlq rbx, 32
0000022674CB0CD6   342  ff75e0         push [rbp-0x20]
0000022674CB0CD9   345  53             push rbx
0000022674CB0CDA   346  51             push rcx
0000022674CB0CDB   347  488b75e8       REX.W movq rsi,[rbp-0x18]
0000022674CB0CDF   351  e89c9dfaff     call 0000022674C5AA80    ;; code: STUB, SubStringStub, minor: 0
0000022674CB0CE4   356  488be5         REX.W movq rsp,rbp
0000022674CB0CE7   359  5d             pop rbp
0000022674CB0CE8   360  c21800         ret 0x18
0000022674CB0CEB   363  48b8914780f9f4030000 REX.W movq rax,000003F4F9804791    ;; object: 000003F4F9804791 <String[0]: >
0000022674CB0CF5   373  488be5         REX.W movq rsp,rbp
0000022674CB0CF8   376  5d             pop rbp
0000022674CB0CF9   377  c21800         ret 0x18
0000022674CB0CFC   380  488b45e8       REX.W movq rax,[rbp-0x18]    ;; debug: position 4889
0000022674CB0D00   384  488b7857       REX.W movq rdi,[rax+0x57]
0000022674CB0D04   388  49ba414280f9f4030000 REX.W movq r10,000003F4F9804241    ;; object: 000003F4F9804241 <undefined>
0000022674CB0D0E   398  4152           push r10
0000022674CB0D10   400  49ba0000000012000000 REX.W movq r10,0000001200000000
0000022674CB0D1A   410  4152           push r10
0000022674CB0D1C   412  49ba414786f9f4030000 REX.W movq r10,000003F4F9864741    ;; object: 000003F4F9864741 <String[22]: String.prototype.slice>
0000022674CB0D26   422  4152           push r10
0000022674CB0D28   424  48ba0000000001000000 REX.W movq rdx,0000000100000000
0000022674CB0D32   434  48bb8965502abd000000 REX.W movq rbx,000000BD2A506589    ;; object: 000000BD2A506589 <FixedArray[5]>
0000022674CB0D3C   444  488bf0         REX.W movq rsi,rax
0000022674CB0D3F   447  e87ce3fdff     call 0000022674C8F0C0    ;; code: CALL_IC, GENERIC
0000022674CB0D44   452  50             push rax              ;; debug: position 4883
0000022674CB0D45   453  488b75e8       REX.W movq rsi,[rbp-0x18]
0000022674CB0D49   457  0f1f840000000000 nop
0000022674CB0D51   465  b801000000     movl rax,0000000000000001
0000022674CB0D56   470  48bb70cf0717f67f0000 REX.W movq rbx,00007FF61707CF70
0000022674CB0D60   480  e8fb52f5ff     call 0000022674C06060    ;; code: STUB, CEntryStub, minor: 4
0000022674CB0D65   485  6666660f1f840000000000 nop
0000022674CB0D70   496  6690           nop
0000022674CB0D72   498  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 5049
0000022674CB0D76   502  4c3952ff       REX.W cmpq [rdx-0x1],r10
0000022674CB0D7A   506  0f85ad000000   jnz 685  (0000022674CB0E2D)
0000022674CB0D80   512  c5fb104207     vmovsd xmm0,[rdx+0x7]
0000022674CB0D85   517  c5fb2cd0       vcvttsd2si rdx,xmm0
0000022674CB0D89   521  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000022674CB0D8D   525  c5f32aca       vcvtlsi2sd xmm1,xmm1,rdx
0000022674CB0D91   529  c5f92ec1       vucomisd xmm0,xmm1
0000022674CB0D95   533  0f8592000000   jnz 685  (0000022674CB0E2D)
0000022674CB0D9B   539  0f8a8c000000   jpe 685  (0000022674CB0E2D)
0000022674CB0DA1   545  85d2           testl rdx,rdx
0000022674CB0DA3   547  0f85b4feffff   jnz 221  (0000022674CB0C5D)
0000022674CB0DA9   553  c5f950d0       vmovmskpd rdx,xmm0
0000022674CB0DAD   557  83e201         andl rdx,0x1
0000022674CB0DB0   560  0f8577000000   jnz 685  (0000022674CB0E2D)
0000022674CB0DB6   566  e9a2feffff     jmp 221  (0000022674CB0C5D)
0000022674CB0DBB   571  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 5117
0000022674CB0DBF   575  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000022674CB0DC3   579  0f8569000000   jnz 690  (0000022674CB0E32)
0000022674CB0DC9   585  c5fb104107     vmovsd xmm0,[rcx+0x7]
0000022674CB0DCE   590  c5fb2cc8       vcvttsd2si rcx,xmm0
0000022674CB0DD2   594  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000022674CB0DD6   598  c5f32ac9       vcvtlsi2sd xmm1,xmm1,rcx
0000022674CB0DDA   602  c5f92ec1       vucomisd xmm0,xmm1
0000022674CB0DDE   606  0f854e000000   jnz 690  (0000022674CB0E32)
0000022674CB0DE4   612  0f8a48000000   jpe 690  (0000022674CB0E32)
0000022674CB0DEA   618  e9a5feffff     jmp 276  (0000022674CB0C94)
0000022674CB0DEF   623  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 5186
0000022674CB0DF3   627  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000022674CB0DF7   631  0f853a000000   jnz 695  (0000022674CB0E37)
0000022674CB0DFD   637  c5fb104307     vmovsd xmm0,[rbx+0x7]
0000022674CB0E02   642  c5fb2cd8       vcvttsd2si rbx,xmm0
0000022674CB0E06   646  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000022674CB0E0A   650  c5f32acb       vcvtlsi2sd xmm1,xmm1,rbx
0000022674CB0E0E   654  c5f92ec1       vucomisd xmm0,xmm1
0000022674CB0E12   658  0f851f000000   jnz 695  (0000022674CB0E37)
0000022674CB0E18   664  0f8a19000000   jpe 695  (0000022674CB0E37)
0000022674CB0E1E   670  e9a5feffff     jmp 328  (0000022674CB0CC8)
0000022674CB0E23   675  e8ec51c5ff     call 0000022674906014    ;; deoptimization bailout 2
0000022674CB0E28   680  e8f151c5ff     call 000002267490601E    ;; deoptimization bailout 3
0000022674CB0E2D   685  e83c52c5ff     call 000002267490606E    ;; deoptimization bailout 11
0000022674CB0E32   690  e84152c5ff     call 0000022674906078    ;; deoptimization bailout 12
0000022674CB0E37   695  e84652c5ff     call 0000022674906082    ;; deoptimization bailout 13

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 14)
 index  ast id    argc     pc
     0       4       0     35
     1      73       0     96
     2      73       0     -1
     3      73       0     -1
     4     108       0    147
     5     157       0    182
     6     164       0     -1
     7     245       0     -1
     8     343       0    356
     9      48       0    452
    10      46       0    485
    11     127       0     -1
    12     163       0     -1
    13     244       0     -1

Safepoints (size = 85)
0000022674CB0BA3    35  00010000 (sp -> fp)       0
0000022674CB0BD9    89  00010000 (sp -> fp)       1
0000022674CB0C0C   140  00110000 (sp -> fp)       4
0000022674CB0C36   182  10110000 (sp -> fp)       5
0000022674CB0CE4   356  00010000 (sp -> fp)       8
0000022674CB0D44   452  00010000 (sp -> fp)       9
0000022674CB0D65   485  00010000 (sp -> fp)      10

RelocInfo (size = 117)
0000022674CB0B9F  code target (BUILTIN)  (0000022674C27440)
0000022674CB0BA3  position  (4855)
0000022674CB0BA9  embedded object  (000003F4F9804211 <null>)
0000022674CB0BBA  position  (4870)
0000022674CB0BBC  embedded object  (000003F4F9804241 <undefined>)
0000022674CB0BCD  position  (4883)
0000022674CB0BD5  code target (STUB)  (0000022674C27060)
0000022674CB0C08  code target (STUB)  (0000022674C86840)
0000022674CB0C13  position  (5006)
0000022674CB0C19  embedded object  (000003F4F9804241 <undefined>)
0000022674CB0C32  code target (STUB)  (0000022674C86840)
0000022674CB0C46  position  (5049)
0000022674CB0C4C  position  (5049)
0000022674CB0C66  position  (5092)
0000022674CB0C70  embedded object  (000003F4F9804791 <String[0]: >)
0000022674CB0C7F  position  (5057)
0000022674CB0C80  runtime entry
0000022674CB0C84  position  (5117)
0000022674CB0C9D  position  (5164)
0000022674CB0CB3  position  (5125)
0000022674CB0CB4  runtime entry
0000022674CB0CB8  position  (5186)
0000022674CB0CE0  code target (STUB)  (0000022674C5AA80)
0000022674CB0CED  embedded object  (000003F4F9804791 <String[0]: >)
0000022674CB0CFC  position  (4889)
0000022674CB0D06  embedded object  (000003F4F9804241 <undefined>)
0000022674CB0D1E  embedded object  (000003F4F9864741 <String[22]: String.prototype.slice>)
0000022674CB0D34  embedded object  (000000BD2A506589 <FixedArray[5]>)
0000022674CB0D40  code target (CALL_IC)  (0000022674C8F0C0)
0000022674CB0D44  position  (4883)
0000022674CB0D61  code target (STUB)  (0000022674C06060)
0000022674CB0D72  position  (5049)
0000022674CB0DBB  position  (5117)
0000022674CB0DEF  position  (5186)
0000022674CB0E24  runtime entry  (deoptimization bailout 2)
0000022674CB0E29  runtime entry  (deoptimization bailout 3)
0000022674CB0E2E  runtime entry  (deoptimization bailout 11)
0000022674CB0E33  runtime entry  (deoptimization bailout 12)
0000022674CB0E38  runtime entry  (deoptimization bailout 13)

--- End code ---
--- Raw source ---
() {
  f()
  rax[0] = 2
  rax[1] = 3
}

--- Optimized code ---
optimization_id = 1
source_position = 255
kind = OPTIMIZED_FUNCTION
name = g
stack_slots = 5
compiler = crankshaft
Instructions (size = 399)
0000022674CB9DE0     0  55             push rbp
0000022674CB9DE1     1  4889e5         REX.W movq rbp,rsp
0000022674CB9DE4     4  56             push rsi
0000022674CB9DE5     5  57             push rdi
0000022674CB9DE6     6  4883ec08       REX.W subq rsp,0x8
0000022674CB9DEA    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000022674CB9DEE    14  488945e8       REX.W movq [rbp-0x18],rax
0000022674CB9DF2    18  488bf0         REX.W movq rsi,rax
0000022674CB9DF5    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000022674CB9DFC    28  7305           jnc 35  (0000022674CB9E03)
0000022674CB9DFE    30  e83dd6f6ff     call StackCheck  (0000022674C27440)    ;; code: BUILTIN
0000022674CB9E03    35  488b45e8       REX.W movq rax,[rbp-0x18]
0000022674CB9E07    39  488b5837       REX.W movq rbx,[rax+0x37]    ;; debug: position 263
0000022674CB9E0B    43  49ba80c95c2abd000000 REX.W movq r10,000000BD2A5CC980    ;; property cell
0000022674CB9E15    53  4d8b12         REX.W movq r10,[r10]
0000022674CB9E18    56  493bda         REX.W cmpq rbx,r10
0000022674CB9E1B    59  0f85f8000000   jnz 313  (0000022674CB9F19)
0000022674CB9E21    65  48ba90c95c2abd000000 REX.W movq rdx,000000BD2A5CC990    ;; property cell
0000022674CB9E2B    75  488b12         REX.W movq rdx,[rdx]
0000022674CB9E2E    78  488b522f       REX.W movq rdx,[rdx+0x2f]    ;; debug: position 208
0000022674CB9E32    82  493b55d8       REX.W cmpq rdx,[r13-0x28]
0000022674CB9E36    86  0f84e2000000   jz 318  (0000022674CB9F1E)
0000022674CB9E3C    92  f6c201         testb rdx,0x1
0000022674CB9E3F    95  0f84de000000   jz 323  (0000022674CB9F23)
0000022674CB9E45   101  49ba51fc202e9b000000 REX.W movq r10,0000009B2E20FC51    ;; object: 0000009B2E20FC51 <Map(UINT32_ELEMENTS)>
0000022674CB9E4F   111  4c3952ff       REX.W cmpq [rdx-0x1],r10
0000022674CB9E53   115  0f85cf000000   jnz 328  (0000022674CB9F28)
0000022674CB9E59   121  488b4a0f       REX.W movq rcx,[rdx+0xf]
0000022674CB9E5D   125  8b710b         movl rsi,[rcx+0xb]
0000022674CB9E60   128  4c8b5217       REX.W movq r10,[rdx+0x17]
0000022674CB9E64   132  41f6422708     testb [r10+0x27],0x8
0000022674CB9E69   137  0f85be000000   jnz 333  (0000022674CB9F2D)
0000022674CB9E6F   143  488b7917       REX.W movq rdi,[rcx+0x17]
0000022674CB9E73   147  488b490f       REX.W movq rcx,[rcx+0xf]
0000022674CB9E77   151  4803f9         REX.W addq rdi,rcx
0000022674CB9E7A   154  83fe00         cmpl rsi,0x0
0000022674CB9E7D   157  0f86af000000   jna 338  (0000022674CB9F32)
0000022674CB9E83   163  83fe01         cmpl rsi,0x1
0000022674CB9E86   166  0f86ab000000   jna 343  (0000022674CB9F37)
0000022674CB9E8C   172  bb01000000     movl rbx,0000000000000001
0000022674CB9E91   177  891f           movl [rdi],rbx
0000022674CB9E93   179  bb05000000     movl rbx,0000000000000005
0000022674CB9E98   184  895f04         movl [rdi+0x4],rbx
0000022674CB9E9B   187  488b582f       REX.W movq rbx,[rax+0x2f]
0000022674CB9E9F   191  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000022674CB9EA3   195  0f8493000000   jz 348  (0000022674CB9F3C)
0000022674CB9EA9   201  f6c301         testb rbx,0x1
0000022674CB9EAC   204  0f848f000000   jz 353  (0000022674CB9F41)
0000022674CB9EB2   210  49ba51fc202e9b000000 REX.W movq r10,0000009B2E20FC51    ;; object: 0000009B2E20FC51 <Map(UINT32_ELEMENTS)>
0000022674CB9EBC   220  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000022674CB9EC0   224  0f8580000000   jnz 358  (0000022674CB9F46)
0000022674CB9EC6   230  488b530f       REX.W movq rdx,[rbx+0xf]
0000022674CB9ECA   234  8b4a0b         movl rcx,[rdx+0xb]
0000022674CB9ECD   237  4c8b5317       REX.W movq r10,[rbx+0x17]
0000022674CB9ED1   241  41f6422708     testb [r10+0x27],0x8
0000022674CB9ED6   246  0f856f000000   jnz 363  (0000022674CB9F4B)
0000022674CB9EDC   252  488b7217       REX.W movq rsi,[rdx+0x17]
0000022674CB9EE0   256  488b520f       REX.W movq rdx,[rdx+0xf]
0000022674CB9EE4   260  4803f2         REX.W addq rsi,rdx
0000022674CB9EE7   263  83f900         cmpl rcx,0x0
0000022674CB9EEA   266  0f8660000000   jna 368  (0000022674CB9F50)
0000022674CB9EF0   272  83f901         cmpl rcx,0x1
0000022674CB9EF3   275  0f865c000000   jna 373  (0000022674CB9F55)
0000022674CB9EF9   281  b802000000     movl rax,0000000000000002
0000022674CB9EFE   286  8906           movl [rsi],rax
0000022674CB9F00   288  b803000000     movl rax,0000000000000003
0000022674CB9F05   293  894604         movl [rsi+0x4],rax
0000022674CB9F08   296  48b8414280f9f4030000 REX.W movq rax,000003F4F9804241    ;; object: 000003F4F9804241 <undefined>
0000022674CB9F12   306  488be5         REX.W movq rsp,rbp
0000022674CB9F15   309  5d             pop rbp
0000022674CB9F16   310  c20800         ret 0x8
0000022674CB9F19   313  e8ecc0c4ff     call 000002267490600A    ;; deoptimization bailout 1
0000022674CB9F1E   318  e8f1c0c4ff     call 0000022674906014    ;; deoptimization bailout 2
0000022674CB9F23   323  e8f6c0c4ff     call 000002267490601E    ;; deoptimization bailout 3
0000022674CB9F28   328  e8fbc0c4ff     call 0000022674906028    ;; deoptimization bailout 4
0000022674CB9F2D   333  e800c1c4ff     call 0000022674906032    ;; deoptimization bailout 5
0000022674CB9F32   338  e805c1c4ff     call 000002267490603C    ;; deoptimization bailout 6
0000022674CB9F37   343  e80ac1c4ff     call 0000022674906046    ;; deoptimization bailout 7
0000022674CB9F3C   348  e80fc1c4ff     call 0000022674906050    ;; deoptimization bailout 8
0000022674CB9F41   353  e814c1c4ff     call 000002267490605A    ;; deoptimization bailout 9
0000022674CB9F46   358  e819c1c4ff     call 0000022674906064    ;; deoptimization bailout 10
0000022674CB9F4B   363  e81ec1c4ff     call 000002267490606E    ;; deoptimization bailout 11
0000022674CB9F50   368  e823c1c4ff     call 0000022674906078    ;; deoptimization bailout 12
0000022674CB9F55   373  e828c1c4ff     call 0000022674906082    ;; deoptimization bailout 13
0000022674CB9F5A   378  6690           nop

Inlined functions (count = 1)
 000000BD2A5CB829 <SharedFunctionInfo f>

Deoptimization Input Data (deopt points = 14)
 index  ast id    argc     pc
     0       4       0     35
     1       4       0     -1
     2       3       0     -1
     3       3       0     -1
     4       3       0     -1
     5       3       0     -1
     6       3       0     -1
     7       3       0     -1
     8       5       0     -1
     9       5       0     -1
    10       5       0     -1
    11       5       0     -1
    12       5       0     -1
    13       5       0     -1

Safepoints (size = 19)
0000022674CB9E03    35  10000 (sp -> fp)       0

RelocInfo (size = 50)
0000022674CB9DFF  code target (BUILTIN)  (0000022674C27440)
0000022674CB9E07  position  (263)
0000022674CB9E0D  property cell
0000022674CB9E23  property cell
0000022674CB9E2E  position  (208)
0000022674CB9E47  embedded object  (0000009B2E20FC51 <Map(UINT32_ELEMENTS)>)
0000022674CB9EB4  embedded object  (0000009B2E20FC51 <Map(UINT32_ELEMENTS)>)
0000022674CB9F0A  embedded object  (000003F4F9804241 <undefined>)
0000022674CB9F1A  runtime entry  (deoptimization bailout 1)
0000022674CB9F1F  runtime entry  (deoptimization bailout 2)
0000022674CB9F24  runtime entry  (deoptimization bailout 3)
0000022674CB9F29  runtime entry  (deoptimization bailout 4)
0000022674CB9F2E  runtime entry  (deoptimization bailout 5)
0000022674CB9F33  runtime entry  (deoptimization bailout 6)
0000022674CB9F38  runtime entry  (deoptimization bailout 7)
0000022674CB9F3D  runtime entry  (deoptimization bailout 8)
0000022674CB9F42  runtime entry  (deoptimization bailout 9)
0000022674CB9F47  runtime entry  (deoptimization bailout 10)
0000022674CB9F4C  runtime entry  (deoptimization bailout 11)
0000022674CB9F51  runtime entry  (deoptimization bailout 12)
0000022674CB9F56  runtime entry  (deoptimization bailout 13)

--- End code ---
--- Raw source ---
(n) {
  n = n|0
  rax[0] = 1
  rax[1] = 5
}

--- Optimized code ---
optimization_id = 2
source_position = 194
kind = OPTIMIZED_FUNCTION
name = f
stack_slots = 5
compiler = crankshaft
Instructions (size = 335)
0000022674CB9FE0     0  55             push rbp
0000022674CB9FE1     1  4889e5         REX.W movq rbp,rsp
0000022674CB9FE4     4  56             push rsi
0000022674CB9FE5     5  57             push rdi
0000022674CB9FE6     6  4883ec08       REX.W subq rsp,0x8
0000022674CB9FEA    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000022674CB9FEE    14  488945e8       REX.W movq [rbp-0x18],rax
0000022674CB9FF2    18  488bf0         REX.W movq rsi,rax
0000022674CB9FF5    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000022674CB9FFC    28  7305           jnc 35  (0000022674CBA003)
0000022674CB9FFE    30  e83dd4f6ff     call StackCheck  (0000022674C27440)    ;; code: BUILTIN
0000022674CBA003    35  488b4510       REX.W movq rax,[rbp+0x10]
0000022674CBA007    39  a801           test al,0x1           ;; debug: position 208
0000022674CBA009    41  0f8586000000   jnz 181  (0000022674CBA095)
0000022674CBA00F    47  48c1e820       REX.W shrq rax, 32
0000022674CBA013    51  488b45e8       REX.W movq rax,[rbp-0x18]
0000022674CBA017    55  488b582f       REX.W movq rbx,[rax+0x2f]
0000022674CBA01B    59  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000022674CBA01F    63  0f84d1000000   jz 278  (0000022674CBA0F6)
0000022674CBA025    69  f6c301         testb rbx,0x1
0000022674CBA028    72  0f84cd000000   jz 283  (0000022674CBA0FB)
0000022674CBA02E    78  49ba51fc202e9b000000 REX.W movq r10,0000009B2E20FC51    ;; object: 0000009B2E20FC51 <Map(UINT32_ELEMENTS)>
0000022674CBA038    88  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000022674CBA03C    92  0f85be000000   jnz 288  (0000022674CBA100)
0000022674CBA042    98  488b530f       REX.W movq rdx,[rbx+0xf]
0000022674CBA046   102  8b4a0b         movl rcx,[rdx+0xb]
0000022674CBA049   105  4c8b5317       REX.W movq r10,[rbx+0x17]
0000022674CBA04D   109  41f6422708     testb [r10+0x27],0x8
0000022674CBA052   114  0f85ad000000   jnz 293  (0000022674CBA105)
0000022674CBA058   120  488b7217       REX.W movq rsi,[rdx+0x17]
0000022674CBA05C   124  488b520f       REX.W movq rdx,[rdx+0xf]
0000022674CBA060   128  4803f2         REX.W addq rsi,rdx
0000022674CBA063   131  83f900         cmpl rcx,0x0
0000022674CBA066   134  0f869e000000   jna 298  (0000022674CBA10A)
0000022674CBA06C   140  83f901         cmpl rcx,0x1
0000022674CBA06F   143  0f869a000000   jna 303  (0000022674CBA10F)
0000022674CBA075   149  b801000000     movl rax,0000000000000001
0000022674CBA07A   154  8906           movl [rsi],rax
0000022674CBA07C   156  b805000000     movl rax,0000000000000005
0000022674CBA081   161  894604         movl [rsi+0x4],rax
0000022674CBA084   164  48b8414280f9f4030000 REX.W movq rax,000003F4F9804241    ;; object: 000003F4F9804241 <undefined>
0000022674CBA08E   174  488be5         REX.W movq rsp,rbp
0000022674CBA091   177  5d             pop rbp
0000022674CBA092   178  c21000         ret 0x10
0000022674CBA095   181  4d8b55f8       REX.W movq r10,[r13-0x8]
0000022674CBA099   185  4c3950ff       REX.W cmpq [rax-0x1],r10
0000022674CBA09D   189  7529           jnz 232  (0000022674CBA0C8)
0000022674CBA09F   191  c5fb104007     vmovsd xmm0,[rax+0x7]
0000022674CBA0A4   196  c4e1fb2cc0     vcvttsd2siq rax,xmm0
0000022674CBA0A9   201  4883f801       REX.W cmpq rax,0x1
0000022674CBA0AD   205  7112           jno 225  (0000022674CBA0C1)
0000022674CBA0AF   207  4883ec08       REX.W subq rsp,0x8
0000022674CBA0B3   211  c5fb110424     vmovsd [rsp],xmm0
0000022674CBA0B8   216  e803e1f6ff     call 0000022674C281C0    ;; code: STUB, DoubleToIStub, minor: 135172
0000022674CBA0BD   221  4883c408       REX.W addq rsp,0x8
0000022674CBA0C1   225  8bc0           movl rax,rax
0000022674CBA0C3   227  e94bffffff     jmp 51  (0000022674CBA013)
0000022674CBA0C8   232  493b45a8       REX.W cmpq rax,[r13-0x58]
0000022674CBA0CC   236  7507           jnz 245  (0000022674CBA0D5)
0000022674CBA0CE   238  33c0           xorl rax,rax
0000022674CBA0D0   240  e93effffff     jmp 51  (0000022674CBA013)
0000022674CBA0D5   245  493b45c0       REX.W cmpq rax,[r13-0x40]
0000022674CBA0D9   249  750a           jnz 261  (0000022674CBA0E5)
0000022674CBA0DB   251  b801000000     movl rax,0000000000000001
0000022674CBA0E0   256  e92effffff     jmp 51  (0000022674CBA013)
0000022674CBA0E5   261  493b45c8       REX.W cmpq rax,[r13-0x38]
0000022674CBA0E9   265  0f8525000000   jnz 308  (0000022674CBA114)
0000022674CBA0EF   271  33c0           xorl rax,rax
0000022674CBA0F1   273  e91dffffff     jmp 51  (0000022674CBA013)
0000022674CBA0F6   278  e80fbfc4ff     call 000002267490600A    ;; deoptimization bailout 1
0000022674CBA0FB   283  e814bfc4ff     call 0000022674906014    ;; deoptimization bailout 2
0000022674CBA100   288  e819bfc4ff     call 000002267490601E    ;; deoptimization bailout 3
0000022674CBA105   293  e81ebfc4ff     call 0000022674906028    ;; deoptimization bailout 4
0000022674CBA10A   298  e823bfc4ff     call 0000022674906032    ;; deoptimization bailout 5
0000022674CBA10F   303  e828bfc4ff     call 000002267490603C    ;; deoptimization bailout 6
0000022674CBA114   308  e82dbfc4ff     call 0000022674906046    ;; deoptimization bailout 7
0000022674CBA119   313  0f1f00         nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 8)
 index  ast id    argc     pc
     0       4       0     35
     1       4       0     -1
     2       4       0     -1
     3       4       0     -1
     4       4       0     -1
     5       4       0     -1
     6       4       0     -1
     7       4       0     -1

Safepoints (size = 19)
0000022674CBA003    35  10000 (sp -> fp)       0

RelocInfo (size = 26)
0000022674CB9FFF  code target (BUILTIN)  (0000022674C27440)
0000022674CBA007  position  (208)
0000022674CBA030  embedded object  (0000009B2E20FC51 <Map(UINT32_ELEMENTS)>)
0000022674CBA086  embedded object  (000003F4F9804241 <undefined>)
0000022674CBA0B9  code target (STUB)  (0000022674C281C0)
0000022674CBA0F7  runtime entry  (deoptimization bailout 1)
0000022674CBA0FC  runtime entry  (deoptimization bailout 2)
0000022674CBA101  runtime entry  (deoptimization bailout 3)
0000022674CBA106  runtime entry  (deoptimization bailout 4)
0000022674CBA10B  runtime entry  (deoptimization bailout 5)
0000022674CBA110  runtime entry  (deoptimization bailout 6)
0000022674CBA115  runtime entry  (deoptimization bailout 7)

--- End code ---
--- Raw source ---
(exports, require, module, __filename, __dirname) { let rax = new Uint32Array(2)
let rbx = new Uint32Array(2)
let rcx = new Uint32Array(2)
let rdx = new Uint32Array(2)

function f(n) {
  n = n|0
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
})

--- Optimized code ---
optimization_id = 3
source_position = 10
kind = OPTIMIZED_FUNCTION
stack_slots = 20
compiler = crankshaft
Instructions (size = 1639)
0000022674CBBDC0     0  55             push rbp
0000022674CBBDC1     1  4889e5         REX.W movq rbp,rsp
0000022674CBBDC4     4  56             push rsi
0000022674CBBDC5     5  57             push rdi
0000022674CBBDC6     6  4881ec80000000 REX.W subq rsp,0x80
0000022674CBBDCD    13  e8eea8f7ff     call 0000022674C366C0    ;; code: STUB, FastNewContextStub, minor: 2
0000022674CBBDD2    18  488bf0         REX.W movq rsi,rax
0000022674CBBDD5    21  488945f8       REX.W movq [rbp-0x8],rax
0000022674CBBDD9    25  488b45f8       REX.W movq rax,[rbp-0x8]
0000022674CBBDDD    29  48894598       REX.W movq [rbp-0x68],rax
0000022674CBBDE1    33  48bb194580f9f4030000 REX.W movq rbx,000003F4F9804519    ;; object: 000003F4F9804519 <the hole>
0000022674CBBDEB    43  4889582f       REX.W movq [rax+0x2f],rbx
0000022674CBBDEF    47  48bb29b85c2abd000000 REX.W movq rbx,000000BD2A5CB829    ;; object: 000000BD2A5CB829 <SharedFunctionInfo f>
0000022674CBBDF9    57  488bf0         REX.W movq rsi,rax
0000022674CBBDFC    60  e8bf14f7ff     call 0000022674C2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000022674CBBE01    65  488b5598       REX.W movq rdx,[rbp-0x68]
0000022674CBBE05    69  48894237       REX.W movq [rdx+0x37],rax
0000022674CBBE09    73  a801           test al,0x1
0000022674CBBE0B    75  0f8425000000   jz 118  (0000022674CBBE36)
0000022674CBBE11    81  488d5a37       REX.W leaq rbx,[rdx+0x37]
0000022674CBBE15    85  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000022674CBBE1B    91  f6400802       testb [rax+0x8],0x2
0000022674CBBE1F    95  7415           jz 118  (0000022674CBBE36)
0000022674CBBE21    97  48c7c00000f0ff REX.W movq rax,0xfff00000
0000022674CBBE28   104  4823c2         REX.W andq rax,rdx
0000022674CBBE2B   107  f6400804       testb [rax+0x8],0x4
0000022674CBBE2F   111  7405           jz 118  (0000022674CBBE36)
0000022674CBBE31   113  e86aebffff     call 0000022674CBA9A0    ;; code: STUB, RecordWriteStub, minor: 8962
0000022674CBBE36   118  48bbe9b85c2abd000000 REX.W movq rbx,000000BD2A5CB8E9    ;; object: 000000BD2A5CB8E9 <SharedFunctionInfo g>
0000022674CBBE40   128  488bf2         REX.W movq rsi,rdx
0000022674CBBE43   131  e87814f7ff     call 0000022674C2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000022674CBBE48   136  48894590       REX.W movq [rbp-0x70],rax
0000022674CBBE4C   140  48bba9b95c2abd000000 REX.W movq rbx,000000BD2A5CB9A9    ;; object: 000000BD2A5CB9A9 <SharedFunctionInfo h>
0000022674CBBE56   150  488b7598       REX.W movq rsi,[rbp-0x68]
0000022674CBBE5A   154  e86114f7ff     call 0000022674C2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000022674CBBE5F   159  48894588       REX.W movq [rbp-0x78],rax
0000022674CBBE63   163  488b7598       REX.W movq rsi,[rbp-0x68]
0000022674CBBE67   167  660f1f840000000000 nop
0000022674CBBE70   176  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000022674CBBE77   183  7305           jnc 190  (0000022674CBBE7E)
0000022674CBBE79   185  e8c2b5f6ff     call StackCheck  (0000022674C27440)    ;; code: BUILTIN
0000022674CBBE7E   190  49baf17a84f9f4030000 REX.W movq r10,000003F4F9847AF1    ;; debug: position 72
                                                             ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBE88   200  4152           push r10
0000022674CBBE8A   202  49ba0000000002000000 REX.W movq r10,0000000200000000
0000022674CBBE94   212  4152           push r10
0000022674CBBE96   214  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBEA0   224  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBEAA   234  b801000000     movl rax,0000000000000001
0000022674CBBEAF   239  488b7598       REX.W movq rsi,[rbp-0x68]
0000022674CBBEB3   243  488bfa         REX.W movq rdi,rdx
0000022674CBBEB6   246  e82524f6ff     call Construct  (0000022674C1E2E0)    ;; code: BUILTIN
0000022674CBBEBB   251  488b5d98       REX.W movq rbx,[rbp-0x68]
0000022674CBBEBF   255  4889432f       REX.W movq [rbx+0x2f],rax
0000022674CBBEC3   259  a801           test al,0x1
0000022674CBBEC5   261  0f8425000000   jz 304  (0000022674CBBEF0)
0000022674CBBECB   267  488d532f       REX.W leaq rdx,[rbx+0x2f]
0000022674CBBECF   271  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000022674CBBED5   277  f6400802       testb [rax+0x8],0x2
0000022674CBBED9   281  7415           jz 304  (0000022674CBBEF0)
0000022674CBBEDB   283  48c7c00000f0ff REX.W movq rax,0xfff00000
0000022674CBBEE2   290  4823c3         REX.W andq rax,rbx
0000022674CBBEE5   293  f6400804       testb [rax+0x8],0x4
0000022674CBBEE9   297  7405           jz 304  (0000022674CBBEF0)
0000022674CBBEEB   299  e8d0f3ffff     call 0000022674CBB2C0    ;; code: STUB, RecordWriteStub, minor: 8707
0000022674CBBEF0   304  49baf17a84f9f4030000 REX.W movq r10,000003F4F9847AF1    ;; debug: position 102
                                                             ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBEFA   314  4152           push r10
0000022674CBBEFC   316  49ba0000000002000000 REX.W movq r10,0000000200000000
0000022674CBBF06   326  4152           push r10
0000022674CBBF08   328  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; debug: position 72
                                                             ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF12   338  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF1C   348  b801000000     movl rax,0000000000000001
0000022674CBBF21   353  488bf3         REX.W movq rsi,rbx
0000022674CBBF24   356  488bfa         REX.W movq rdi,rdx
0000022674CBBF27   359  e8b423f6ff     call Construct  (0000022674C1E2E0)    ;; debug: position 102
                                                             ;; code: BUILTIN
0000022674CBBF2C   364  49baf17a84f9f4030000 REX.W movq r10,000003F4F9847AF1    ;; debug: position 132
                                                             ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF36   374  4152           push r10
0000022674CBBF38   376  49ba0000000002000000 REX.W movq r10,0000000200000000
0000022674CBBF42   386  4152           push r10
0000022674CBBF44   388  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; debug: position 72
                                                             ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF4E   398  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF58   408  b801000000     movl rax,0000000000000001
0000022674CBBF5D   413  488b7598       REX.W movq rsi,[rbp-0x68]
0000022674CBBF61   417  488bfa         REX.W movq rdi,rdx
0000022674CBBF64   420  e87723f6ff     call Construct  (0000022674C1E2E0)    ;; debug: position 132
                                                             ;; code: BUILTIN
0000022674CBBF69   425  49baf17a84f9f4030000 REX.W movq r10,000003F4F9847AF1    ;; debug: position 162
                                                             ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF73   435  4152           push r10
0000022674CBBF75   437  49ba0000000002000000 REX.W movq r10,0000000200000000
0000022674CBBF7F   447  4152           push r10
0000022674CBBF81   449  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; debug: position 72
                                                             ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF8B   459  48baf17a84f9f4030000 REX.W movq rdx,000003F4F9847AF1    ;; object: 000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>
0000022674CBBF95   469  b801000000     movl rax,0000000000000001
0000022674CBBF9A   474  488b7598       REX.W movq rsi,[rbp-0x68]
0000022674CBBF9E   478  488bfa         REX.W movq rdi,rdx
0000022674CBBFA1   481  e83a23f6ff     call Construct  (0000022674C1E2E0)    ;; debug: position 162
                                                             ;; code: BUILTIN
0000022674CBBFA6   486  e943000000     jmp 558  (0000022674CBBFEE)
0000022674CBBFAB   491  4883ec30       REX.W subq rsp,0x30
0000022674CBBFAF   495  488b75f8       REX.W movq rsi,[rbp-0x8]
0000022674CBBFB3   499  488b45d8       REX.W movq rax,[rbp-0x28]
0000022674CBBFB7   503  a801           test al,0x1
0000022674CBBFB9   505  0f8568020000   jnz 1127  (0000022674CBC227)
0000022674CBBFBF   511  48c1e820       REX.W shrq rax, 32
0000022674CBBFC3   515  488b5dd0       REX.W movq rbx,[rbp-0x30]
0000022674CBBFC7   519  f6c301         testb rbx,0x1
0000022674CBBFCA   522  0f858b020000   jnz 1179  (0000022674CBC25B)
0000022674CBBFD0   528  48c1eb20       REX.W shrq rbx, 32
0000022674CBBFD4   532  4c8b4d38       REX.W movq r9,[rbp+0x38]
0000022674CBBFD8   536  4c8bc6         REX.W movq r8,rsi
0000022674CBBFDB   539  488bc8         REX.W movq rcx,rax
0000022674CBBFDE   542  488bd3         REX.W movq rdx,rbx
0000022674CBBFE1   545  488b5da8       REX.W movq rbx,[rbp-0x58]
0000022674CBBFE5   549  488b45a0       REX.W movq rax,[rbp-0x60]
0000022674CBBFE9   553  e917000000     jmp 581  (0000022674CBC005)
0000022674CBBFEE   558  4c8b4d38       REX.W movq r9,[rbp+0x38]
0000022674CBBFF2   562  4c8b4598       REX.W movq r8,[rbp-0x68]
0000022674CBBFF6   566  488b5d90       REX.W movq rbx,[rbp-0x70]
0000022674CBBFFA   570  488b4588       REX.W movq rax,[rbp-0x78]
0000022674CBBFFE   574  33c9           xorl rcx,rcx
0000022674CBC000   576  ba01000000     movl rdx,0000000000000001
0000022674CBC005   581  4c898d78ffffff REX.W movq [rbp-0x88],r9
0000022674CBC00C   588  4c894580       REX.W movq [rbp-0x80],r8
0000022674CBC010   592  49ba58dd5c2abd000000 REX.W movq r10,000000BD2A5CDD58    ;; debug: position 445
                                                             ;; property cell
0000022674CBC01A   602  4d8b12         REX.W movq r10,[r10]
0000022674CBC01D   605  493bda         REX.W cmpq rbx,r10
0000022674CBC020   608  0f85f9020000   jnz 1375  (0000022674CBC31F)
0000022674CBC026   614  48be68dd5c2abd000000 REX.W movq rsi,000000BD2A5CDD68    ;; property cell
0000022674CBC030   624  488b36         REX.W movq rsi,[rsi]
0000022674CBC033   627  488b7637       REX.W movq rsi,[rsi+0x37]    ;; debug: position 263
0000022674CBC037   631  49ba78dd5c2abd000000 REX.W movq r10,000000BD2A5CDD78    ;; property cell
0000022674CBC041   641  4d8b12         REX.W movq r10,[r10]
0000022674CBC044   644  493bf2         REX.W cmpq rsi,r10
0000022674CBC047   647  0f85d7020000   jnz 1380  (0000022674CBC324)
0000022674CBC04D   653  48be88dd5c2abd000000 REX.W movq rsi,000000BD2A5CDD88    ;; debug: position 445
                                                             ;; property cell
0000022674CBC057   663  488b36         REX.W movq rsi,[rsi]
0000022674CBC05A   666  488b762f       REX.W movq rsi,[rsi+0x2f]    ;; debug: position 208
0000022674CBC05E   670  493b75d8       REX.W cmpq rsi,[r13-0x28]
0000022674CBC062   674  0f84c1020000   jz 1385  (0000022674CBC329)
0000022674CBC068   680  40f6c601       testb rsi,0x1
0000022674CBC06C   684  0f84bc020000   jz 1390  (0000022674CBC32E)
0000022674CBC072   690  49ba51fc202e9b000000 REX.W movq r10,0000009B2E20FC51    ;; object: 0000009B2E20FC51 <Map(UINT32_ELEMENTS)>
0000022674CBC07C   700  4c3956ff       REX.W cmpq [rsi-0x1],r10
0000022674CBC080   704  0f85ad020000   jnz 1395  (0000022674CBC333)
0000022674CBC086   710  488b7e0f       REX.W movq rdi,[rsi+0xf]
0000022674CBC08A   714  448b5f0b       movl r11,[rdi+0xb]
0000022674CBC08E   718  4c8b5617       REX.W movq r10,[rsi+0x17]
0000022674CBC092   722  41f6422708     testb [r10+0x27],0x8
0000022674CBC097   727  0f859b020000   jnz 1400  (0000022674CBC338)
0000022674CBC09D   733  4c8b6717       REX.W movq r12,[rdi+0x17]
0000022674CBC0A1   737  488b7f0f       REX.W movq rdi,[rdi+0xf]
0000022674CBC0A5   741  4183fb00       cmpl r11,0x0
0000022674CBC0A9   745  0f868e020000   jna 1405  (0000022674CBC33D)
0000022674CBC0AF   751  4183fb01       cmpl r11,0x1
0000022674CBC0B3   755  0f8689020000   jna 1410  (0000022674CBC342)
0000022674CBC0B9   761  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]    ;; debug: position 162
0000022674CBC0C0   768  0f82c9010000   jc 1231  (0000022674CBC28F)
0000022674CBC0C6   774  83fa01         cmpl rdx,0x1
0000022674CBC0C9   777  0f8412000000   jz 801  (0000022674CBC0E1)
0000022674CBC0CF   783  4c8bd9         REX.W movq r11,rcx    ;; debug: position 408
0000022674CBC0D2   786  4183c301       addl r11,0x1
0000022674CBC0D6   790  0f806b020000   jo 1415  (0000022674CBC347)
0000022674CBC0DC   796  e905000000     jmp 806  (0000022674CBC0E6)
0000022674CBC0E1   801  4c8bd9         REX.W movq r11,rcx    ;; debug: position 408
0000022674CBC0E4   804  33d2           xorl rdx,rdx
0000022674CBC0E6   806  4181fba0860100 cmpl r11,0x186a0      ;; debug: position 396
0000022674CBC0ED   813  0f8d62000000   jge 917  (0000022674CBC155)
0000022674CBC0F3   819  4c8bf1         REX.W movq r14,rcx
0000022674CBC0F6   822  b901000000     movl rcx,0000000000000001
0000022674CBC0FB   827  83f901         cmpl rcx,0x1
0000022674CBC0FE   830  0f8540000000   jnz 900  (0000022674CBC144)
0000022674CBC104   836  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000022674CBC10B   843  0f82c6010000   jc 1303  (0000022674CBC2D7)
0000022674CBC111   849  4c89e1         REX.W movq rcx,r12
0000022674CBC114   852  4803cf         REX.W addq rcx,rdi    ;; debug: position 208
0000022674CBC117   855  41be01000000   movl r14,0000000000000001    ;; debug: position 162
0000022674CBC11D   861  448931         movl [rcx],r14        ;; debug: position 208
0000022674CBC120   864  41be05000000   movl r14,0000000000000005
0000022674CBC126   870  44897104       movl [rcx+0x4],r14
0000022674CBC12A   874  41be02000000   movl r14,0000000000000002
0000022674CBC130   880  448931         movl [rcx],r14
0000022674CBC133   883  41be03000000   movl r14,0000000000000003
0000022674CBC139   889  44897104       movl [rcx+0x4],r14
0000022674CBC13D   893  4d8bf3         REX.W movq r14,r11
0000022674CBC140   896  33c9           xorl rcx,rcx
0000022674CBC142   898  ebb7           jmp 827  (0000022674CBC0FB)
0000022674CBC144   900  83f901         cmpl rcx,0x1
0000022674CBC147   903  0f8408000000   jz 917  (0000022674CBC155)
0000022674CBC14D   909  498bce         REX.W movq rcx,r14
0000022674CBC150   912  e964ffffff     jmp 761  (0000022674CBC0B9)
0000022674CBC155   917  49ba414280f9f4030000 REX.W movq r10,000003F4F9804241    ;; debug: position 505
                                                             ;; object: 000003F4F9804241 <undefined>
0000022674CBC15F   927  4152           push r10
0000022674CBC161   929  48ba0000000009000000 REX.W movq rdx,0000000900000000
0000022674CBC16B   939  48bb81b75c2abd000000 REX.W movq rbx,000000BD2A5CB781    ;; object: 000000BD2A5CB781 <FixedArray[17]>
0000022674CBC175   949  498bf0         REX.W movq rsi,r8
0000022674CBC178   952  488bf8         REX.W movq rdi,rax
0000022674CBC17B   955  e840e6ffff     call 0000022674CBA7C0    ;; code: CALL_IC, GENERIC
0000022674CBC180   960  488b4580       REX.W movq rax,[rbp-0x80]
0000022674CBC184   964  488b5827       REX.W movq rbx,[rax+0x27]    ;; debug: position 557
0000022674CBC188   968  488b531f       REX.W movq rdx,[rbx+0x1f]
0000022674CBC18C   972  488bf0         REX.W movq rsi,rax
0000022674CBC18F   975  48b991798bf9f4030000 REX.W movq rcx,000003F4F98B7991    ;; object: 000003F4F98B7991 <String[7]: console>
0000022674CBC199   985  48bb81b75c2abd000000 REX.W movq rbx,000000BD2A5CB781    ;; object: 000000BD2A5CB781 <FixedArray[17]>
0000022674CBC1A3   995  48b8000000000d000000 REX.W movq rax,0000000D00000000
0000022674CBC1AD  1005  e80efaffff     call 0000022674CBBBC0    ;; code: contextual, LOAD_IC, GENERIC
0000022674CBC1B2  1010  48898570ffffff REX.W movq [rbp-0x90],rax
0000022674CBC1B9  1017  488b7580       REX.W movq rsi,[rbp-0x80]
0000022674CBC1BD  1021  488bd0         REX.W movq rdx,rax
0000022674CBC1C0  1024  660f1f440000   nop
0000022674CBC1C6  1030  48b929b084f9f4030000 REX.W movq rcx,000003F4F984B029    ;; object: 000003F4F984B029 <String[3]: log>
0000022674CBC1D0  1040  48bb81b75c2abd000000 REX.W movq rbx,000000BD2A5CB781    ;; object: 000000BD2A5CB781 <FixedArray[17]>
0000022674CBC1DA  1050  48b8000000000f000000 REX.W movq rax,0000000F00000000
0000022674CBC1E4  1060  e8d7f9ffff     call 0000022674CBBBC0    ;; code: contextual, LOAD_IC, GENERIC
0000022674CBC1E9  1065  488b5d80       REX.W movq rbx,[rbp-0x80]
0000022674CBC1ED  1069  488b532f       REX.W movq rdx,[rbx+0x2f]
0000022674CBC1F1  1073  493b55d8       REX.W cmpq rdx,[r13-0x28]
0000022674CBC1F5  1077  0f8451010000   jz 1420  (0000022674CBC34C)
0000022674CBC1FB  1083  ffb570ffffff   push [rbp-0x90]
0000022674CBC201  1089  52             push rdx
0000022674CBC202  1090  41be01000000   movl r14,0000000000000001    ;; debug: position 162
0000022674CBC208  1096  488bf3         REX.W movq rsi,rbx
0000022674CBC20B  1099  488bf8         REX.W movq rdi,rax
0000022674CBC20E  1102  498bc6         REX.W movq rax,r14
0000022674CBC211  1105  e84a18f6ff     call Call_ReceiverIsNotNullOrUndefined  (0000022674C1DA60)    ;; debug: position 557
                                                             ;; code: BUILTIN
0000022674CBC216  1110  48b8414280f9f4030000 REX.W movq rax,000003F4F9804241    ;; object: 000003F4F9804241 <undefined>
0000022674CBC220  1120  488be5         REX.W movq rsp,rbp
0000022674CBC223  1123  5d             pop rbp
0000022674CBC224  1124  c23000         ret 0x30
0000022674CBC227  1127  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 162
0000022674CBC22B  1131  4c3950ff       REX.W cmpq [rax-0x1],r10
0000022674CBC22F  1135  0f851c010000   jnz 1425  (0000022674CBC351)
0000022674CBC235  1141  c5fb104007     vmovsd xmm0,[rax+0x7]
0000022674CBC23A  1146  c5fb2cc0       vcvttsd2si rax,xmm0
0000022674CBC23E  1150  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000022674CBC242  1154  c5f32ac8       vcvtlsi2sd xmm1,xmm1,rax
0000022674CBC246  1158  c5f92ec1       vucomisd xmm0,xmm1
0000022674CBC24A  1162  0f8501010000   jnz 1425  (0000022674CBC351)
0000022674CBC250  1168  0f8afb000000   jpe 1425  (0000022674CBC351)
0000022674CBC256  1174  e968fdffff     jmp 515  (0000022674CBBFC3)
0000022674CBC25B  1179  4d8b55f8       REX.W movq r10,[r13-0x8]
0000022674CBC25F  1183  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000022674CBC263  1187  0f85ed000000   jnz 1430  (0000022674CBC356)
0000022674CBC269  1193  c5fb104307     vmovsd xmm0,[rbx+0x7]
0000022674CBC26E  1198  c5fb2cd8       vcvttsd2si rbx,xmm0
0000022674CBC272  1202  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000022674CBC276  1206  c5f32acb       vcvtlsi2sd xmm1,xmm1,rbx
0000022674CBC27A  1210  c5f92ec1       vucomisd xmm0,xmm1
0000022674CBC27E  1214  0f85d2000000   jnz 1430  (0000022674CBC356)
0000022674CBC284  1220  0f8acc000000   jpe 1430  (0000022674CBC356)
0000022674CBC28A  1226  e945fdffff     jmp 532  (0000022674CBBFD4)
0000022674CBC28F  1231  50             push rax
0000022674CBC290  1232  51             push rcx
0000022674CBC291  1233  52             push rdx
0000022674CBC292  1234  53             push rbx
0000022674CBC293  1235  56             push rsi
0000022674CBC294  1236  57             push rdi
0000022674CBC295  1237  4150           push r8
0000022674CBC297  1239  4151           push r9
0000022674CBC299  1241  4153           push r11
0000022674CBC29B  1243  4154           push r12
0000022674CBC29D  1245  4156           push r14
0000022674CBC29F  1247  4157           push r15
0000022674CBC2A1  1249  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000022674CBC2A6  1254  488b75f8       REX.W movq rsi,[rbp-0x8]
0000022674CBC2AA  1258  33c0           xorl rax,rax
0000022674CBC2AC  1260  48bbe0fd0717f67f0000 REX.W movq rbx,00007FF61707FDE0
0000022674CBC2B6  1270  e8459ff4ff     call 0000022674C06200    ;; code: STUB, CEntryStub, minor: 5
0000022674CBC2BB  1275  488d642420     REX.W leaq rsp,[rsp+0x20]
0000022674CBC2C0  1280  415f           pop r15
0000022674CBC2C2  1282  415e           pop r14
0000022674CBC2C4  1284  415c           pop r12
0000022674CBC2C6  1286  415b           pop r11
0000022674CBC2C8  1288  4159           pop r9
0000022674CBC2CA  1290  4158           pop r8
0000022674CBC2CC  1292  5f             pop rdi
0000022674CBC2CD  1293  5e             pop rsi
0000022674CBC2CE  1294  5b             pop rbx
0000022674CBC2CF  1295  5a             pop rdx
0000022674CBC2D0  1296  59             pop rcx
0000022674CBC2D1  1297  58             pop rax
0000022674CBC2D2  1298  e9effdffff     jmp 774  (0000022674CBC0C6)
0000022674CBC2D7  1303  50             push rax              ;; debug: position 396
0000022674CBC2D8  1304  51             push rcx
0000022674CBC2D9  1305  52             push rdx
0000022674CBC2DA  1306  53             push rbx
0000022674CBC2DB  1307  56             push rsi
0000022674CBC2DC  1308  57             push rdi
0000022674CBC2DD  1309  4150           push r8
0000022674CBC2DF  1311  4151           push r9
0000022674CBC2E1  1313  4153           push r11
0000022674CBC2E3  1315  4154           push r12
0000022674CBC2E5  1317  4156           push r14
0000022674CBC2E7  1319  4157           push r15
0000022674CBC2E9  1321  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000022674CBC2EE  1326  488b75f8       REX.W movq rsi,[rbp-0x8]
0000022674CBC2F2  1330  33c0           xorl rax,rax
0000022674CBC2F4  1332  48bbe0fd0717f67f0000 REX.W movq rbx,00007FF61707FDE0
0000022674CBC2FE  1342  e8fd9ef4ff     call 0000022674C06200    ;; code: STUB, CEntryStub, minor: 5
0000022674CBC303  1347  488d642420     REX.W leaq rsp,[rsp+0x20]
0000022674CBC308  1352  415f           pop r15
0000022674CBC30A  1354  415e           pop r14
0000022674CBC30C  1356  415c           pop r12
0000022674CBC30E  1358  415b           pop r11
0000022674CBC310  1360  4159           pop r9
0000022674CBC312  1362  4158           pop r8
0000022674CBC314  1364  5f             pop rdi
0000022674CBC315  1365  5e             pop rsi
0000022674CBC316  1366  5b             pop rbx
0000022674CBC317  1367  5a             pop rdx
0000022674CBC318  1368  59             pop rcx
0000022674CBC319  1369  58             pop rax
0000022674CBC31A  1370  e9f2fdffff     jmp 849  (0000022674CBC111)
0000022674CBC31F  1375  e8409dc4ff     call 0000022674906064    ;; deoptimization bailout 10
0000022674CBC324  1380  e8459dc4ff     call 000002267490606E    ;; deoptimization bailout 11
0000022674CBC329  1385  e84a9dc4ff     call 0000022674906078    ;; deoptimization bailout 12
0000022674CBC32E  1390  e84f9dc4ff     call 0000022674906082    ;; deoptimization bailout 13
0000022674CBC333  1395  e8549dc4ff     call 000002267490608C    ;; deoptimization bailout 14
0000022674CBC338  1400  e8599dc4ff     call 0000022674906096    ;; deoptimization bailout 15
0000022674CBC33D  1405  e85e9dc4ff     call 00000226749060A0    ;; deoptimization bailout 16
0000022674CBC342  1410  e8639dc4ff     call 00000226749060AA    ;; deoptimization bailout 17
0000022674CBC347  1415  e8729dc4ff     call 00000226749060BE    ;; deoptimization bailout 19
0000022674CBC34C  1420  e89f9dc4ff     call 00000226749060F0    ;; deoptimization bailout 24
0000022674CBC351  1425  e8ae9dc4ff     call 0000022674906104    ;; deoptimization bailout 26
0000022674CBC356  1430  e8b39dc4ff     call 000002267490610E    ;; deoptimization bailout 27
0000022674CBC35B  1435  90             nop

Inlined functions (count = 2)
 000000BD2A5CB8E9 <SharedFunctionInfo g>
 000000BD2A5CB829 <SharedFunctionInfo f>

Deoptimization Input Data (deopt points = 28)
 index  ast id    argc     pc
     0       2       0     25
     1      20       0     65
     2      25       0    140
     3      30       0    163
     4       4       0    190
     5      42       0    251
     6      61       0    364
     7      80       0    425
     8     110       0    486
     9     152       0     -1
    10     150       0     -1
    11     150       0     -1
    12     150       0     -1
    13     150       0     -1
    14     150       0     -1
    15     150       0     -1
    16     150       0     -1
    17     150       0     -1
    18     154       0    774
    19     176       0     -1
    20     231       0    849
    21     289       0    960
    22     310       0   1017
    23     306       0   1065
    24     306       0     -1
    25     298       0   1110
    26     150       0     -1
    27     150       0     -1

Safepoints (size = 203)
0000022674CBBDD2    18  00000000000000000000 (sp -> fp)  <none>
0000022674CBBE01    65  00000100000000000000 (sp -> fp)       1
0000022674CBBE48   136  00000100000000000000 (sp -> fp)       2
0000022674CBBE5F   159  00001100000000000000 (sp -> fp)       3
0000022674CBBE7E   190  00011100000000000000 (sp -> fp)       4
0000022674CBBEBB   251  00011100000000000000 (sp -> fp)       5
0000022674CBBF2C   364  00011100000000000000 (sp -> fp)       6
0000022674CBBF69   425  00011100000000000000 (sp -> fp)       7
0000022674CBBFA6   486  00011100000000000000 (sp -> fp)       8
0000022674CBC180   960  01100000000000000000 (sp -> fp)      21
0000022674CBC1B2  1010  01100000000000000000 (sp -> fp)      22
0000022674CBC1E9  1065  11100000000000000000 (sp -> fp)      23
0000022674CBC216  1110  01100000000000000000 (sp -> fp)      25
0000022674CBC2BB  1275  01100000000000000000 | rax | rbx | rsi | rdi | r8 | r9 (sp -> fp)      18
0000022674CBC303  1347  01100000000000000000 | rax | rbx | rsi | rdi | r8 | r9 (sp -> fp)      20

RelocInfo (size = 213)
0000022674CBBDCE  code target (STUB)  (0000022674C366C0)
0000022674CBBDE3  embedded object  (000003F4F9804519 <the hole>)
0000022674CBBDF1  embedded object  (000000BD2A5CB829 <SharedFunctionInfo f>)
0000022674CBBDFD  code target (STUB)  (0000022674C2D2C0)
0000022674CBBE32  code target (STUB)  (0000022674CBA9A0)
0000022674CBBE38  embedded object  (000000BD2A5CB8E9 <SharedFunctionInfo g>)
0000022674CBBE44  code target (STUB)  (0000022674C2D2C0)
0000022674CBBE4E  embedded object  (000000BD2A5CB9A9 <SharedFunctionInfo h>)
0000022674CBBE5B  code target (STUB)  (0000022674C2D2C0)
0000022674CBBE7A  code target (BUILTIN)  (0000022674C27440)
0000022674CBBE7E  position  (72)
0000022674CBBE80  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBE98  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBEA2  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBEB7  code target (BUILTIN)  (0000022674C1E2E0)
0000022674CBBEEC  code target (STUB)  (0000022674CBB2C0)
0000022674CBBEF0  position  (102)
0000022674CBBEF2  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF08  position  (72)
0000022674CBBF0A  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF14  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF27  position  (102)
0000022674CBBF28  code target (BUILTIN)  (0000022674C1E2E0)
0000022674CBBF2C  position  (132)
0000022674CBBF2E  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF44  position  (72)
0000022674CBBF46  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF50  embeddedUint32Array [ 2, 3 ]
 object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF64  position  (132)
0000022674CBBF65  code target (BUILTIN)  (0000022674C1E2E0)
0000022674CBBF69  position  (162)
0000022674CBBF6B  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF81  position  (72)
0000022674CBBF83  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBF8D  embedded object  (000003F4F9847AF1 <JS Function Uint32Array (SharedFunctionInfo 000003F4F9847A49)>)
0000022674CBBFA1  position  (162)
0000022674CBBFA2  code target (BUILTIN)  (0000022674C1E2E0)
0000022674CBC010  position  (445)
0000022674CBC012  property cell
0000022674CBC028  property cell
0000022674CBC033  position  (263)
0000022674CBC039  property cell
0000022674CBC04D  position  (445)
0000022674CBC04F  property cell
0000022674CBC05A  position  (208)
0000022674CBC074  embedded object  (0000009B2E20FC51 <Map(UINT32_ELEMENTS)>)
0000022674CBC0B9  position  (162)
0000022674CBC0CF  position  (408)
0000022674CBC0E1  position  (408)
0000022674CBC0E6  position  (396)
0000022674CBC114  position  (208)
0000022674CBC117  position  (162)
0000022674CBC11D  position  (208)
0000022674CBC155  position  (505)
0000022674CBC157  embedded object  (000003F4F9804241 <undefined>)
0000022674CBC16D  embedded object  (000000BD2A5CB781 <FixedArray[17]>)
0000022674CBC17C  code target (CALL_IC)  (0000022674CBA7C0)
0000022674CBC184  position  (557)
0000022674CBC191  embedded object  (000003F4F98B7991 <String[7]: console>)
0000022674CBC19B  embedded object  (000000BD2A5CB781 <FixedArray[17]>)
0000022674CBC1AE  code target (LOAD_IC)  (0000022674CBBBC0)
0000022674CBC1C8  embedded object  (000003F4F984B029 <String[3]: log>)
0000022674CBC1D2  embedded object  (000000BD2A5CB781 <FixedArray[17]>)
0000022674CBC1E5  code target (LOAD_IC)  (0000022674CBBBC0)
0000022674CBC202  position  (162)
0000022674CBC211  position  (557)
0000022674CBC212  code target (BUILTIN)  (0000022674C1DA60)
0000022674CBC218  embedded object  (000003F4F9804241 <undefined>)
0000022674CBC227  position  (162)
0000022674CBC2B7  code target (STUB)  (0000022674C06200)
0000022674CBC2D7  position  (396)
0000022674CBC2FF  code target (STUB)  (0000022674C06200)
0000022674CBC320  runtime entry  (deoptimization bailout 10)
0000022674CBC325  runtime entry  (deoptimization bailout 11)
0000022674CBC32A  runtime entry  (deoptimization bailout 12)
0000022674CBC32F  runtime entry  (deoptimization bailout 13)
0000022674CBC334  runtime entry  (deoptimization bailout 14)
0000022674CBC339  runtime entry  (deoptimization bailout 15)
0000022674CBC33E  runtime entry  (deoptimization bailout 16)
0000022674CBC343  runtime entry  (deoptimization bailout 17)
0000022674CBC348  runtime entry  (deoptimization bailout 19)
0000022674CBC34D  runtime entry  (deoptimization bailout 24)
0000022674CBC352  runtime entry  (deoptimization bailout 26)
0000022674CBC357  runtime entry  (deoptimization bailout 27)

--- End code ---
