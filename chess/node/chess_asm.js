--- Raw source ---
(e, i) {
  let j = -1
  while (++j < 16)
    if ((i >>> j) & 1)
      return j
  return 16 // miss
})

--- Optimized code ---
optimization_id = 0
source_position = 1025
kind = OPTIMIZED_FUNCTION
stack_slots = 5
compiler = crankshaft
Instructions (size = 354)
0000025B1A6BBCA0     0  55             push rbp
0000025B1A6BBCA1     1  4889e5         REX.W movq rbp,rsp
0000025B1A6BBCA4     4  56             push rsi
0000025B1A6BBCA5     5  57             push rdi
0000025B1A6BBCA6     6  4883ec08       REX.W subq rsp,0x8
0000025B1A6BBCAA    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6BBCAE    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6BBCB2    18  488bf0         REX.W movq rsi,rax
0000025B1A6BBCB5    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BBCBC    28  7305           jnc 35  (0000025B1A6BBCC3)
0000025B1A6BBCBE    30  e87db7f6ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6BBCC3    35  488b4510       REX.W movq rax,[rbp+0x10]
0000025B1A6BBCC7    39  a801           test al,0x1           ;; debug: position 1080
0000025B1A6BBCC9    41  0f8561000000   jnz 144  (0000025B1A6BBD30)
0000025B1A6BBCCF    47  48c1e820       REX.W shrq rax, 32
0000025B1A6BBCD3    51  bbffffffff     movl rbx,00000000FFFFFFFF
0000025B1A6BBCD8    56  488bd3         REX.W movq rdx,rbx    ;; debug: position 1060
0000025B1A6BBCDB    59  83c201         addl rdx,0x1
0000025B1A6BBCDE    62  0f80f5000000   jo 313  (0000025B1A6BBDD9)
0000025B1A6BBCE4    68  83fa10         cmpl rdx,0x10
0000025B1A6BBCE7    71  0f8d32000000   jge 127  (0000025B1A6BBD1F)
0000025B1A6BBCED    77  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BBCF4    84  0f8297000000   jc 241  (0000025B1A6BBD91)
0000025B1A6BBCFA    90  488bca         REX.W movq rcx,rdx
0000025B1A6BBCFD    93  488bd8         REX.W movq rbx,rax
0000025B1A6BBD00    96  d3eb           shrl rbx, cl          ;; debug: position 1080
0000025B1A6BBD02    98  83e301         andl rbx,0x1          ;; debug: position 1087
0000025B1A6BBD05   101  85db           testl rbx,rbx
0000025B1A6BBD07   103  0f8505000000   jnz 114  (0000025B1A6BBD12)
0000025B1A6BBD0D   109  488bda         REX.W movq rbx,rdx
0000025B1A6BBD10   112  ebc6           jmp 56  (0000025B1A6BBCD8)
0000025B1A6BBD12   114  8bc2           movl rax,rdx
0000025B1A6BBD14   116  48c1e020       REX.W shlq rax, 32
0000025B1A6BBD18   120  488be5         REX.W movq rsp,rbp
0000025B1A6BBD1B   123  5d             pop rbp
0000025B1A6BBD1C   124  c21800         ret 0x18
0000025B1A6BBD1F   127  48b80000000010000000 REX.W movq rax,0000001000000000
0000025B1A6BBD29   137  488be5         REX.W movq rsp,rbp
0000025B1A6BBD2C   140  5d             pop rbp
0000025B1A6BBD2D   141  c21800         ret 0x18
0000025B1A6BBD30   144  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 1080
0000025B1A6BBD34   148  4c3950ff       REX.W cmpq [rax-0x1],r10
0000025B1A6BBD38   152  7529           jnz 195  (0000025B1A6BBD63)
0000025B1A6BBD3A   154  c5fb104007     vmovsd xmm0,[rax+0x7]
0000025B1A6BBD3F   159  c4e1fb2cc0     vcvttsd2siq rax,xmm0
0000025B1A6BBD44   164  4883f801       REX.W cmpq rax,0x1
0000025B1A6BBD48   168  7112           jno 188  (0000025B1A6BBD5C)
0000025B1A6BBD4A   170  4883ec08       REX.W subq rsp,0x8
0000025B1A6BBD4E   174  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6BBD53   179  e868c4f6ff     call 0000025B1A6281C0    ;; code: STUB, DoubleToIStub, minor: 135172
0000025B1A6BBD58   184  4883c408       REX.W addq rsp,0x8
0000025B1A6BBD5C   188  8bc0           movl rax,rax
0000025B1A6BBD5E   190  e970ffffff     jmp 51  (0000025B1A6BBCD3)
0000025B1A6BBD63   195  493b45a8       REX.W cmpq rax,[r13-0x58]
0000025B1A6BBD67   199  7507           jnz 208  (0000025B1A6BBD70)
0000025B1A6BBD69   201  33c0           xorl rax,rax
0000025B1A6BBD6B   203  e963ffffff     jmp 51  (0000025B1A6BBCD3)
0000025B1A6BBD70   208  493b45c0       REX.W cmpq rax,[r13-0x40]
0000025B1A6BBD74   212  750a           jnz 224  (0000025B1A6BBD80)
0000025B1A6BBD76   214  b801000000     movl rax,0000000000000001
0000025B1A6BBD7B   219  e953ffffff     jmp 51  (0000025B1A6BBCD3)
0000025B1A6BBD80   224  493b45c8       REX.W cmpq rax,[r13-0x38]
0000025B1A6BBD84   228  0f8554000000   jnz 318  (0000025B1A6BBDDE)
0000025B1A6BBD8A   234  33c0           xorl rax,rax
0000025B1A6BBD8C   236  e942ffffff     jmp 51  (0000025B1A6BBCD3)
0000025B1A6BBD91   241  50             push rax              ;; debug: position 1060
0000025B1A6BBD92   242  51             push rcx
0000025B1A6BBD93   243  52             push rdx
0000025B1A6BBD94   244  53             push rbx
0000025B1A6BBD95   245  56             push rsi
0000025B1A6BBD96   246  57             push rdi
0000025B1A6BBD97   247  4150           push r8
0000025B1A6BBD99   249  4151           push r9
0000025B1A6BBD9B   251  4153           push r11
0000025B1A6BBD9D   253  4154           push r12
0000025B1A6BBD9F   255  4156           push r14
0000025B1A6BBDA1   257  4157           push r15
0000025B1A6BBDA3   259  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000025B1A6BBDA8   264  488b75f8       REX.W movq rsi,[rbp-0x8]
0000025B1A6BBDAC   268  33c0           xorl rax,rax
0000025B1A6BBDAE   270  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
0000025B1A6BBDB8   280  e843a4f4ff     call 0000025B1A606200    ;; code: STUB, CEntryStub, minor: 5
0000025B1A6BBDBD   285  488d642420     REX.W leaq rsp,[rsp+0x20]
0000025B1A6BBDC2   290  415f           pop r15
0000025B1A6BBDC4   292  415e           pop r14
0000025B1A6BBDC6   294  415c           pop r12
0000025B1A6BBDC8   296  415b           pop r11
0000025B1A6BBDCA   298  4159           pop r9
0000025B1A6BBDCC   300  4158           pop r8
0000025B1A6BBDCE   302  5f             pop rdi
0000025B1A6BBDCF   303  5e             pop rsi
0000025B1A6BBDD0   304  5b             pop rbx
0000025B1A6BBDD1   305  5a             pop rdx
0000025B1A6BBDD2   306  59             pop rcx
0000025B1A6BBDD3   307  58             pop rax
0000025B1A6BBDD4   308  e921ffffff     jmp 90  (0000025B1A6BBCFA)
0000025B1A6BBDD9   313  e82ca2c4ff     call 0000025B1A30600A    ;; deoptimization bailout 1
0000025B1A6BBDDE   318  e83ba2c4ff     call 0000025B1A30601E    ;; deoptimization bailout 3
0000025B1A6BBDE3   323  90             nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 4)
 index  ast id    argc     pc
     0       4       0     35
     1      21       0     -1
     2      24       0     90
     3      21       0     -1

Safepoints (size = 30)
0000025B1A6BBCC3    35  10000 (sp -> fp)       0
0000025B1A6BBDBD   285  10000 (sp -> fp)       2

RelocInfo (size = 23)
0000025B1A6BBCBF  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6BBCC7  position  (1080)
0000025B1A6BBCD8  position  (1060)
0000025B1A6BBD00  position  (1080)
0000025B1A6BBD02  position  (1087)
0000025B1A6BBD30  position  (1080)
0000025B1A6BBD54  code target (STUB)  (0000025B1A6281C0)
0000025B1A6BBD91  position  (1060)
0000025B1A6BBDB9  code target (STUB)  (0000025B1A606200)
0000025B1A6BBDDA  runtime entry  (deoptimization bailout 1)
0000025B1A6BBDDF  runtime entry  (deoptimization bailout 3)

--- End code ---
--- Raw source ---
(aW,aY){
if(!(%_IsTypedArray(this)))throw F(72);
var aj=%_TypedArrayGetLength(this);
var aZ=TypedArraySpeciesCreate(this,aj);
if(!(typeof(aW)==='function'))throw F(15,aW);
for(var as=0;as<aj;as++){
var bg=this[as];
aZ[as]=%_Call(aW,aY,bg,as,this);
}
return aZ;
}


--- Optimized code ---
optimization_id = 1
source_position = 32691
kind = OPTIMIZED_FUNCTION
name = map
stack_slots = 8
compiler = crankshaft
Instructions (size = 1096)
0000025B1A6BC780     0  55             push rbp
0000025B1A6BC781     1  4889e5         REX.W movq rbp,rsp
0000025B1A6BC784     4  56             push rsi
0000025B1A6BC785     5  57             push rdi
0000025B1A6BC786     6  4883ec20       REX.W subq rsp,0x20
0000025B1A6BC78A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6BC78E    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6BC792    18  488bf0         REX.W movq rsi,rax
0000025B1A6BC795    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BC79C    28  7305           jnc 35  (0000025B1A6BC7A3)
0000025B1A6BC79E    30  e89dacf6ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6BC7A3    35  488b4520       REX.W movq rax,[rbp+0x20]
0000025B1A6BC7A7    39  a801           test al,0x1
0000025B1A6BC7A9    41  0f840f000000   jz 62  (0000025B1A6BC7BE)
0000025B1A6BC7AF    47  4c8b50ff       REX.W movq r10,[rax-0x1]
0000025B1A6BC7B3    51  41807a0bbe     cmpb [r10+0xb],0xbe
0000025B1A6BC7B8    56  0f8460000000   jz 158  (0000025B1A6BC81E)
0000025B1A6BC7BE    62  488b4de8       REX.W movq rcx,[rbp-0x18]    ;; debug: position 32733
0000025B1A6BC7C2    66  488bb9ff000000 REX.W movq rdi,[rcx+0xff]
0000025B1A6BC7C9    73  49ba414200ee9d030000 REX.W movq r10,0000039DEE004241    ;; object: 0000039DEE004241 <undefined>
0000025B1A6BC7D3    83  4152           push r10
0000025B1A6BC7D5    85  49ba0000000048000000 REX.W movq r10,0000004800000000
0000025B1A6BC7DF    95  4152           push r10
0000025B1A6BC7E1    97  48ba0000000001000000 REX.W movq rdx,0000000100000000
0000025B1A6BC7EB   107  48bb5102adccac010000 REX.W movq rbx,000001ACCCAD0251    ;; object: 000001ACCCAD0251 <FixedArray[11]>
0000025B1A6BC7F5   117  488bf1         REX.W movq rsi,rcx
0000025B1A6BC7F8   120  e883ecfbff     call 0000025B1A67B480    ;; code: CALL_IC, GENERIC
0000025B1A6BC7FD   125  50             push rax              ;; debug: position 32727
0000025B1A6BC7FE   126  488b75e8       REX.W movq rsi,[rbp-0x18]
0000025B1A6BC802   130  0f1f840000000000 nop
0000025B1A6BC80A   138  b801000000     movl rax,0000000000000001
0000025B1A6BC80F   143  48bb70cfcde9f77f0000 REX.W movq rbx,00007FF7E9CDCF70
0000025B1A6BC819   153  e84298f4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6BC81E   158  488b4520       REX.W movq rax,[rbp+0x20]
0000025B1A6BC822   162  488b5817       REX.W movq rbx,[rax+0x17]
0000025B1A6BC826   166  488b5037       REX.W movq rdx,[rax+0x37]
0000025B1A6BC82A   170  8b5b27         movl rbx,[rbx+0x27]
0000025B1A6BC82D   173  83e308         andl rbx,0x8
0000025B1A6BC830   176  83fb00         cmpl rbx,0x0
0000025B1A6BC833   179  0f8515000000   jnz 206  (0000025B1A6BC84E)
0000025B1A6BC839   185  f6c201         testb rdx,0x1
0000025B1A6BC83C   188  0f85fc010000   jnz 702  (0000025B1A6BCA3E)
0000025B1A6BC842   194  48c1ea20       REX.W shrq rdx, 32
0000025B1A6BC846   198  488bda         REX.W movq rbx,rdx
0000025B1A6BC849   201  e902000000     jmp 208  (0000025B1A6BC850)
0000025B1A6BC84E   206  33db           xorl rbx,rbx
0000025B1A6BC850   208  48895de0       REX.W movq [rbp-0x20],rbx
0000025B1A6BC854   212  488b55e8       REX.W movq rdx,[rbp-0x18]
0000025B1A6BC858   216  488b8a8f010000 REX.W movq rcx,[rdx+0x18f]    ;; debug: position 32783
0000025B1A6BC85F   223  49ba29a1aaccac010000 REX.W movq r10,000001ACCCAAA129    ;; object: 000001ACCCAAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000039DEE078689)>
0000025B1A6BC869   233  493bca         REX.W cmpq rcx,r10
0000025B1A6BC86C   236  0f85be020000   jnz 944  (0000025B1A6BCB30)
0000025B1A6BC872   242  8bcb           movl rcx,rbx
0000025B1A6BC874   244  48c1e120       REX.W shlq rcx, 32
0000025B1A6BC878   248  49ba414200ee9d030000 REX.W movq r10,0000039DEE004241    ;; object: 0000039DEE004241 <undefined>
0000025B1A6BC882   258  4152           push r10
0000025B1A6BC884   260  50             push rax
0000025B1A6BC885   261  51             push rcx
0000025B1A6BC886   262  48bf29a1aaccac010000 REX.W movq rdi,000001ACCCAAA129    ;; object: 000001ACCCAAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000039DEE078689)>
0000025B1A6BC890   272  488bf2         REX.W movq rsi,rdx
0000025B1A6BC893   275  488b7727       REX.W movq rsi,[rdi+0x27]
0000025B1A6BC897   279  498b55a8       REX.W movq rdx,[r13-0x58]
0000025B1A6BC89B   283  b802000000     movl rax,0000000000000002
0000025B1A6BC8A0   288  bb05000000     movl rbx,0000000000000005
0000025B1A6BC8A5   293  e83600f6ff     call ArgumentsAdaptorTrampoline  (0000025B1A61C8E0)    ;; code: BUILTIN
0000025B1A6BC8AA   298  488945d8       REX.W movq [rbp-0x28],rax
0000025B1A6BC8AE   302  488bd8         REX.W movq rbx,rax
0000025B1A6BC8B1   305  488b4518       REX.W movq rax,[rbp+0x18]    ;; debug: position 32832
0000025B1A6BC8B5   309  a801           test al,0x1
0000025B1A6BC8B7   311  7414           jz 333  (0000025B1A6BC8CD)
0000025B1A6BC8B9   313  488b40ff       REX.W movq rax,[rax-0x1]
0000025B1A6BC8BD   317  0fb6400c       movzxbl rax,[rax+0xc]
0000025B1A6BC8C1   321  80e012         cmpb al,0x12
0000025B1A6BC8C4   324  80f802         cmpb al,0x2
0000025B1A6BC8C7   327  0f8465000000   jz 434  (0000025B1A6BC932)
0000025B1A6BC8CD   333  488b45e8       REX.W movq rax,[rbp-0x18]    ;; debug: position 32853
0000025B1A6BC8D1   337  488bb8ff000000 REX.W movq rdi,[rax+0xff]
0000025B1A6BC8D8   344  49ba414200ee9d030000 REX.W movq r10,0000039DEE004241    ;; object: 0000039DEE004241 <undefined>
0000025B1A6BC8E2   354  4152           push r10
0000025B1A6BC8E4   356  49ba000000000f000000 REX.W movq r10,0000000F00000000
0000025B1A6BC8EE   366  4152           push r10
0000025B1A6BC8F0   368  488b4d18       REX.W movq rcx,[rbp+0x18]
0000025B1A6BC8F4   372  51             push rcx
0000025B1A6BC8F5   373  48ba0000000005000000 REX.W movq rdx,0000000500000000
0000025B1A6BC8FF   383  48bb5102adccac010000 REX.W movq rbx,000001ACCCAD0251    ;; object: 000001ACCCAD0251 <FixedArray[11]>
0000025B1A6BC909   393  488bf0         REX.W movq rsi,rax
0000025B1A6BC90C   396  e8af27fdff     call 0000025B1A68F0C0    ;; code: CALL_IC, GENERIC
0000025B1A6BC911   401  50             push rax              ;; debug: position 32847
0000025B1A6BC912   402  488b75e8       REX.W movq rsi,[rbp-0x18]
0000025B1A6BC916   406  0f1f840000000000 nop
0000025B1A6BC91E   414  b801000000     movl rax,0000000000000001
0000025B1A6BC923   419  48bb70cfcde9f77f0000 REX.W movq rbx,00007FF7E9CDCF70
0000025B1A6BC92D   429  e82e97f4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6BC932   434  488b5520       REX.W movq rdx,[rbp+0x20]
0000025B1A6BC936   438  f6c201         testb rdx,0x1         ;; debug: position 32878
0000025B1A6BC939   441  0f84f6010000   jz 949  (0000025B1A6BCB35)
0000025B1A6BC93F   447  f6c301         testb rbx,0x1
0000025B1A6BC942   450  0f84f2010000   jz 954  (0000025B1A6BCB3A)
0000025B1A6BC948   456  4c8b4510       REX.W movq r8,[rbp+0x10]    ;; debug: position 32847
0000025B1A6BC94C   460  33c9           xorl rcx,rcx
0000025B1A6BC94E   462  48894dd0       REX.W movq [rbp-0x30],rcx    ;; debug: position 32878
0000025B1A6BC952   466  3b4de0         cmpl rcx,[rbp-0x20]
0000025B1A6BC955   469  0f8dd9000000   jge 692  (0000025B1A6BCA34)
0000025B1A6BC95B   475  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BC962   482  0f821f010000   jc 775  (0000025B1A6BCA87)
0000025B1A6BC968   488  49ba69f4a09591000000 REX.W movq r10,0000009195A0F469    ;; object: 0000009195A0F469 <Map(UINT8_ELEMENTS)>
0000025B1A6BC972   498  4c3952ff       REX.W cmpq [rdx-0x1],r10
0000025B1A6BC976   502  0f85c3010000   jnz 959  (0000025B1A6BCB3F)
0000025B1A6BC97C   508  488b420f       REX.W movq rax,[rdx+0xf]
0000025B1A6BC980   512  8b700b         movl rsi,[rax+0xb]
0000025B1A6BC983   515  4c8b5217       REX.W movq r10,[rdx+0x17]
0000025B1A6BC987   519  41f6422708     testb [r10+0x27],0x8
0000025B1A6BC98C   524  0f85b2010000   jnz 964  (0000025B1A6BCB44)
0000025B1A6BC992   530  488b7817       REX.W movq rdi,[rax+0x17]
0000025B1A6BC996   534  488b400f       REX.W movq rax,[rax+0xf]
0000025B1A6BC99A   538  4803f8         REX.W addq rdi,rax
0000025B1A6BC99D   541  3bf1           cmpl rsi,rcx
0000025B1A6BC99F   543  0f86a4010000   jna 969  (0000025B1A6BCB49)
0000025B1A6BC9A5   549  0fb6040f       movzxbl rax,[rdi+rcx*1]
0000025B1A6BC9A9   553  8bf1           movl rsi,rcx
0000025B1A6BC9AB   555  48c1e620       REX.W shlq rsi, 32
0000025B1A6BC9AF   559  8bf8           movl rdi,rax
0000025B1A6BC9B1   561  48c1e720       REX.W shlq rdi, 32
0000025B1A6BC9B5   565  4150           push r8
0000025B1A6BC9B7   567  57             push rdi
0000025B1A6BC9B8   568  56             push rsi
0000025B1A6BC9B9   569  52             push rdx
0000025B1A6BC9BA   570  b803000000     movl rax,0000000000000003
0000025B1A6BC9BF   575  488b75e8       REX.W movq rsi,[rbp-0x18]
0000025B1A6BC9C3   579  488b7d18       REX.W movq rdi,[rbp+0x18]
0000025B1A6BC9C7   583  e89411f6ff     call Call_ReceiverIsAny  (0000025B1A61DB60)    ;; code: BUILTIN
0000025B1A6BC9CC   588  488b5dd8       REX.W movq rbx,[rbp-0x28]
0000025B1A6BC9D0   592  49ba69f4a09591000000 REX.W movq r10,0000009195A0F469    ;; object: 0000009195A0F469 <Map(UINT8_ELEMENTS)>
0000025B1A6BC9DA   602  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000025B1A6BC9DE   606  0f856a010000   jnz 974  (0000025B1A6BCB4E)
0000025B1A6BC9E4   612  488b530f       REX.W movq rdx,[rbx+0xf]
0000025B1A6BC9E8   616  8b4a0b         movl rcx,[rdx+0xb]
0000025B1A6BC9EB   619  4c8b5317       REX.W movq r10,[rbx+0x17]
0000025B1A6BC9EF   623  41f6422708     testb [r10+0x27],0x8
0000025B1A6BC9F4   628  0f8559010000   jnz 979  (0000025B1A6BCB53)
0000025B1A6BC9FA   634  488b7217       REX.W movq rsi,[rdx+0x17]
0000025B1A6BC9FE   638  488b520f       REX.W movq rdx,[rdx+0xf]
0000025B1A6BCA02   642  4803f2         REX.W addq rsi,rdx
0000025B1A6BCA05   645  488b55d0       REX.W movq rdx,[rbp-0x30]
0000025B1A6BCA09   649  3bca           cmpl rcx,rdx
0000025B1A6BCA0B   651  0f8647010000   jna 984  (0000025B1A6BCB58)
0000025B1A6BCA11   657  488bc8         REX.W movq rcx,rax
0000025B1A6BCA14   660  f6c101         testb rcx,0x1
0000025B1A6BCA17   663  0f85b2000000   jnz 847  (0000025B1A6BCACF)
0000025B1A6BCA1D   669  48c1e920       REX.W shrq rcx, 32
0000025B1A6BCA21   673  880c16         movb [rsi+rdx*1],cl
0000025B1A6BCA24   676  8d4a01         leal rcx,[rdx+0x1]    ;; debug: position 32884
0000025B1A6BCA27   679  488b5520       REX.W movq rdx,[rbp+0x20]
0000025B1A6BCA2B   683  4c8b4510       REX.W movq r8,[rbp+0x10]
0000025B1A6BCA2F   687  e91affffff     jmp 462  (0000025B1A6BC94E)
0000025B1A6BCA34   692  488bc3         REX.W movq rax,rbx
0000025B1A6BCA37   695  488be5         REX.W movq rsp,rbp
0000025B1A6BCA3A   698  5d             pop rbp
0000025B1A6BCA3B   699  c21800         ret 0x18
0000025B1A6BCA3E   702  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 32727
0000025B1A6BCA42   706  4c3952ff       REX.W cmpq [rdx-0x1],r10
0000025B1A6BCA46   710  0f8511010000   jnz 989  (0000025B1A6BCB5D)
0000025B1A6BCA4C   716  c5fb104207     vmovsd xmm0,[rdx+0x7]
0000025B1A6BCA51   721  c5fb2cd0       vcvttsd2si rdx,xmm0
0000025B1A6BCA55   725  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6BCA59   729  c5f32aca       vcvtlsi2sd xmm1,xmm1,rdx
0000025B1A6BCA5D   733  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6BCA61   737  0f85f6000000   jnz 989  (0000025B1A6BCB5D)
0000025B1A6BCA67   743  0f8af0000000   jpe 989  (0000025B1A6BCB5D)
0000025B1A6BCA6D   749  85d2           testl rdx,rdx
0000025B1A6BCA6F   751  0f85d1fdffff   jnz 198  (0000025B1A6BC846)
0000025B1A6BCA75   757  c5f950d0       vmovmskpd rdx,xmm0
0000025B1A6BCA79   761  83e201         andl rdx,0x1
0000025B1A6BCA7C   764  0f85db000000   jnz 989  (0000025B1A6BCB5D)
0000025B1A6BCA82   770  e9bffdffff     jmp 198  (0000025B1A6BC846)
0000025B1A6BCA87   775  50             push rax              ;; debug: position 32878
0000025B1A6BCA88   776  51             push rcx
0000025B1A6BCA89   777  52             push rdx
0000025B1A6BCA8A   778  53             push rbx
0000025B1A6BCA8B   779  56             push rsi
0000025B1A6BCA8C   780  57             push rdi
0000025B1A6BCA8D   781  4150           push r8
0000025B1A6BCA8F   783  4151           push r9
0000025B1A6BCA91   785  4153           push r11
0000025B1A6BCA93   787  4154           push r12
0000025B1A6BCA95   789  4156           push r14
0000025B1A6BCA97   791  4157           push r15
0000025B1A6BCA99   793  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000025B1A6BCA9E   798  488b75f8       REX.W movq rsi,[rbp-0x8]
0000025B1A6BCAA2   802  33c0           xorl rax,rax
0000025B1A6BCAA4   804  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
0000025B1A6BCAAE   814  e84d97f4ff     call 0000025B1A606200    ;; code: STUB, CEntryStub, minor: 5
0000025B1A6BCAB3   819  488d642420     REX.W leaq rsp,[rsp+0x20]
0000025B1A6BCAB8   824  415f           pop r15
0000025B1A6BCABA   826  415e           pop r14
0000025B1A6BCABC   828  415c           pop r12
0000025B1A6BCABE   830  415b           pop r11
0000025B1A6BCAC0   832  4159           pop r9
0000025B1A6BCAC2   834  4158           pop r8
0000025B1A6BCAC4   836  5f             pop rdi
0000025B1A6BCAC5   837  5e             pop rsi
0000025B1A6BCAC6   838  5b             pop rbx
0000025B1A6BCAC7   839  5a             pop rdx
0000025B1A6BCAC8   840  59             pop rcx
0000025B1A6BCAC9   841  58             pop rax
0000025B1A6BCACA   842  e999feffff     jmp 488  (0000025B1A6BC968)
0000025B1A6BCACF   847  4d8b55f8       REX.W movq r10,[r13-0x8]
0000025B1A6BCAD3   851  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6BCAD7   855  7529           jnz 898  (0000025B1A6BCB02)
0000025B1A6BCAD9   857  c5fb104107     vmovsd xmm0,[rcx+0x7]
0000025B1A6BCADE   862  c4e1fb2cc8     vcvttsd2siq rcx,xmm0
0000025B1A6BCAE3   867  4883f901       REX.W cmpq rcx,0x1
0000025B1A6BCAE7   871  7112           jno 891  (0000025B1A6BCAFB)
0000025B1A6BCAE9   873  4883ec08       REX.W subq rsp,0x8
0000025B1A6BCAED   877  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6BCAF2   882  e86929f5ff     call 0000025B1A60F460    ;; code: STUB, DoubleToIStub, minor: 135236
0000025B1A6BCAF7   887  4883c408       REX.W addq rsp,0x8
0000025B1A6BCAFB   891  8bc9           movl rcx,rcx
0000025B1A6BCAFD   893  e91fffffff     jmp 673  (0000025B1A6BCA21)
0000025B1A6BCB02   898  493b4da8       REX.W cmpq rcx,[r13-0x58]
0000025B1A6BCB06   902  7507           jnz 911  (0000025B1A6BCB0F)
0000025B1A6BCB08   904  33c9           xorl rcx,rcx
0000025B1A6BCB0A   906  e912ffffff     jmp 673  (0000025B1A6BCA21)
0000025B1A6BCB0F   911  493b4dc0       REX.W cmpq rcx,[r13-0x40]
0000025B1A6BCB13   915  750a           jnz 927  (0000025B1A6BCB1F)
0000025B1A6BCB15   917  b901000000     movl rcx,0000000000000001
0000025B1A6BCB1A   922  e902ffffff     jmp 673  (0000025B1A6BCA21)
0000025B1A6BCB1F   927  493b4dc8       REX.W cmpq rcx,[r13-0x38]
0000025B1A6BCB23   931  0f8539000000   jnz 994  (0000025B1A6BCB62)
0000025B1A6BCB29   937  33c9           xorl rcx,rcx
0000025B1A6BCB2B   939  e9f1feffff     jmp 673  (0000025B1A6BCA21)
0000025B1A6BCB30   944  e8e994c4ff     call 0000025B1A30601E    ;; deoptimization bailout 3
0000025B1A6BCB35   949  e80c95c4ff     call 0000025B1A306046    ;; deoptimization bailout 7
0000025B1A6BCB3A   954  e81195c4ff     call 0000025B1A306050    ;; deoptimization bailout 8
0000025B1A6BCB3F   959  e82095c4ff     call 0000025B1A306064    ;; deoptimization bailout 10
0000025B1A6BCB44   964  e82595c4ff     call 0000025B1A30606E    ;; deoptimization bailout 11
0000025B1A6BCB49   969  e82a95c4ff     call 0000025B1A306078    ;; deoptimization bailout 12
0000025B1A6BCB4E   974  e83995c4ff     call 0000025B1A30608C    ;; deoptimization bailout 14
0000025B1A6BCB53   979  e83e95c4ff     call 0000025B1A306096    ;; deoptimization bailout 15
0000025B1A6BCB58   984  e84395c4ff     call 0000025B1A3060A0    ;; deoptimization bailout 16
0000025B1A6BCB5D   989  e84895c4ff     call 0000025B1A3060AA    ;; deoptimization bailout 17
0000025B1A6BCB62   994  e84d95c4ff     call 0000025B1A3060B4    ;; deoptimization bailout 18
0000025B1A6BCB67   999  90             nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 19)
 index  ast id    argc     pc
     0       4       0     35
     1      32       0    125
     2      30       0    158
     3      19       0     -1
     4      70       0    305
     5     107       0    401
     6     105       0    434
     7     122       0     -1
     8     122       0     -1
     9     126       0    488
    10     126       0     -1
    11     126       0     -1
    12     126       0     -1
    13     193       0    588
    14     193       0     -1
    15     193       0     -1
    16     193       0     -1
    17      19       0     -1
    18     193       0     -1

Safepoints (size = 96)
0000025B1A6BC7A3    35  00010000 (sp -> fp)       0
0000025B1A6BC7FD   125  00010000 (sp -> fp)       1
0000025B1A6BC81E   158  00010000 (sp -> fp)       2
0000025B1A6BC8AA   298  00010000 (sp -> fp)       4
0000025B1A6BC911   401  00010000 (sp -> fp)       5
0000025B1A6BC932   434  00010000 (sp -> fp)       6
0000025B1A6BC9CC   588  01010000 (sp -> fp)      13
0000025B1A6BCAB3   819  01010000 | rdx | rbx | r8 (sp -> fp)       9

RelocInfo (size = 92)
0000025B1A6BC79F  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6BC7BE  position  (32733)
0000025B1A6BC7CB  embedded object  (0000039DEE004241 <undefined>)
0000025B1A6BC7ED  embedded object  (000001ACCCAD0251 <FixedArray[11]>)
0000025B1A6BC7F9  code target (CALL_IC)  (0000025B1A67B480)
0000025B1A6BC7FD  position  (32727)
0000025B1A6BC81A  code target (STUB)  (0000025B1A606060)
0000025B1A6BC858  position  (32783)
0000025B1A6BC861  embedded object  (000001ACCCAAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000039DEE078689)>)
0000025B1A6BC87A  embedded object  (0000039DEE004241 <undefined>)
0000025B1A6BC888  embedded object  (000001ACCCAAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000039DEE078689)>)
0000025B1A6BC8A6  code target (BUILTIN)  (0000025B1A61C8E0)
0000025B1A6BC8B1  position  (32832)
0000025B1A6BC8CD  position  (32853)
0000025B1A6BC8DA  embedded object  (0000039DEE004241 <undefined>)
0000025B1A6BC901  embedded object  (000001ACCCAD0251 <FixedArray[11]>)
0000025B1A6BC90D  code target (CALL_IC)  (0000025B1A68F0C0)
0000025B1A6BC911  position  (32847)
0000025B1A6BC92E  code target (STUB)  (0000025B1A606060)
0000025B1A6BC936  position  (32878)
0000025B1A6BC948  position  (32847)
0000025B1A6BC94E  position  (32878)
0000025B1A6BC96A  embedded object  (0000009195A0F469 <Map(UINT8_ELEMENTS)>)
0000025B1A6BC9C8  code target (BUILTIN)  (0000025B1A61DB60)
0000025B1A6BC9D2  embedded object  (0000009195A0F469 <Map(UINT8_ELEMENTS)>)
0000025B1A6BCA24  position  (32884)
0000025B1A6BCA3E  position  (32727)
0000025B1A6BCA87  position  (32878)
0000025B1A6BCAAF  code target (STUB)  (0000025B1A606200)
0000025B1A6BCAF3  code target (STUB)  (0000025B1A60F460)
0000025B1A6BCB31  runtime entry  (deoptimization bailout 3)
0000025B1A6BCB36  runtime entry  (deoptimization bailout 7)
0000025B1A6BCB3B  runtime entry  (deoptimization bailout 8)
0000025B1A6BCB40  runtime entry  (deoptimization bailout 10)
0000025B1A6BCB45  runtime entry  (deoptimization bailout 11)
0000025B1A6BCB4A  runtime entry  (deoptimization bailout 12)
0000025B1A6BCB4F  runtime entry  (deoptimization bailout 14)
0000025B1A6BCB54  runtime entry  (deoptimization bailout 15)
0000025B1A6BCB59  runtime entry  (deoptimization bailout 16)
0000025B1A6BCB5E  runtime entry  (deoptimization bailout 17)
0000025B1A6BCB63  runtime entry  (deoptimization bailout 18)

--- End code ---
--- Raw source ---
(e, i) {
  let j = 16
  while (j--)
    if ((i >>> j) & 1)
      return j
  return 16 // miss
})

--- Optimized code ---
optimization_id = 2
source_position = 1230
kind = OPTIMIZED_FUNCTION
stack_slots = 5
compiler = crankshaft
Instructions (size = 354)
0000025B1A6BCC40     0  55             push rbp
0000025B1A6BCC41     1  4889e5         REX.W movq rbp,rsp
0000025B1A6BCC44     4  56             push rsi
0000025B1A6BCC45     5  57             push rdi
0000025B1A6BCC46     6  4883ec08       REX.W subq rsp,0x8
0000025B1A6BCC4A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6BCC4E    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6BCC52    18  488bf0         REX.W movq rsi,rax
0000025B1A6BCC55    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BCC5C    28  7305           jnc 35  (0000025B1A6BCC63)
0000025B1A6BCC5E    30  e8dda7f6ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6BCC63    35  488b4510       REX.W movq rax,[rbp+0x10]
0000025B1A6BCC67    39  a801           test al,0x1           ;; debug: position 1280
0000025B1A6BCC69    41  0f8560000000   jnz 143  (0000025B1A6BCCCF)
0000025B1A6BCC6F    47  48c1e820       REX.W shrq rax, 32
0000025B1A6BCC73    51  bb10000000     movl rbx,0000000000000010
0000025B1A6BCC78    56  488bd3         REX.W movq rdx,rbx    ;; debug: position 1264
0000025B1A6BCC7B    59  83c2ff         addl rdx,0xff
0000025B1A6BCC7E    62  0f80f4000000   jo 312  (0000025B1A6BCD78)
0000025B1A6BCC84    68  85db           testl rbx,rbx
0000025B1A6BCC86    70  0f8432000000   jz 126  (0000025B1A6BCCBE)
0000025B1A6BCC8C    76  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BCC93    83  0f8297000000   jc 240  (0000025B1A6BCD30)
0000025B1A6BCC99    89  488bca         REX.W movq rcx,rdx
0000025B1A6BCC9C    92  488bd8         REX.W movq rbx,rax
0000025B1A6BCC9F    95  d3eb           shrl rbx, cl          ;; debug: position 1280
0000025B1A6BCCA1    97  83e301         andl rbx,0x1          ;; debug: position 1287
0000025B1A6BCCA4   100  85db           testl rbx,rbx
0000025B1A6BCCA6   102  0f8505000000   jnz 113  (0000025B1A6BCCB1)
0000025B1A6BCCAC   108  488bda         REX.W movq rbx,rdx
0000025B1A6BCCAF   111  ebc7           jmp 56  (0000025B1A6BCC78)
0000025B1A6BCCB1   113  8bc2           movl rax,rdx
0000025B1A6BCCB3   115  48c1e020       REX.W shlq rax, 32
0000025B1A6BCCB7   119  488be5         REX.W movq rsp,rbp
0000025B1A6BCCBA   122  5d             pop rbp
0000025B1A6BCCBB   123  c21800         ret 0x18
0000025B1A6BCCBE   126  48b80000000010000000 REX.W movq rax,0000001000000000
0000025B1A6BCCC8   136  488be5         REX.W movq rsp,rbp
0000025B1A6BCCCB   139  5d             pop rbp
0000025B1A6BCCCC   140  c21800         ret 0x18
0000025B1A6BCCCF   143  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 1280
0000025B1A6BCCD3   147  4c3950ff       REX.W cmpq [rax-0x1],r10
0000025B1A6BCCD7   151  7529           jnz 194  (0000025B1A6BCD02)
0000025B1A6BCCD9   153  c5fb104007     vmovsd xmm0,[rax+0x7]
0000025B1A6BCCDE   158  c4e1fb2cc0     vcvttsd2siq rax,xmm0
0000025B1A6BCCE3   163  4883f801       REX.W cmpq rax,0x1
0000025B1A6BCCE7   167  7112           jno 187  (0000025B1A6BCCFB)
0000025B1A6BCCE9   169  4883ec08       REX.W subq rsp,0x8
0000025B1A6BCCED   173  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6BCCF2   178  e8c9b4f6ff     call 0000025B1A6281C0    ;; code: STUB, DoubleToIStub, minor: 135172
0000025B1A6BCCF7   183  4883c408       REX.W addq rsp,0x8
0000025B1A6BCCFB   187  8bc0           movl rax,rax
0000025B1A6BCCFD   189  e971ffffff     jmp 51  (0000025B1A6BCC73)
0000025B1A6BCD02   194  493b45a8       REX.W cmpq rax,[r13-0x58]
0000025B1A6BCD06   198  7507           jnz 207  (0000025B1A6BCD0F)
0000025B1A6BCD08   200  33c0           xorl rax,rax
0000025B1A6BCD0A   202  e964ffffff     jmp 51  (0000025B1A6BCC73)
0000025B1A6BCD0F   207  493b45c0       REX.W cmpq rax,[r13-0x40]
0000025B1A6BCD13   211  750a           jnz 223  (0000025B1A6BCD1F)
0000025B1A6BCD15   213  b801000000     movl rax,0000000000000001
0000025B1A6BCD1A   218  e954ffffff     jmp 51  (0000025B1A6BCC73)
0000025B1A6BCD1F   223  493b45c8       REX.W cmpq rax,[r13-0x38]
0000025B1A6BCD23   227  0f8554000000   jnz 317  (0000025B1A6BCD7D)
0000025B1A6BCD29   233  33c0           xorl rax,rax
0000025B1A6BCD2B   235  e943ffffff     jmp 51  (0000025B1A6BCC73)
0000025B1A6BCD30   240  50             push rax              ;; debug: position 1264
0000025B1A6BCD31   241  51             push rcx
0000025B1A6BCD32   242  52             push rdx
0000025B1A6BCD33   243  53             push rbx
0000025B1A6BCD34   244  56             push rsi
0000025B1A6BCD35   245  57             push rdi
0000025B1A6BCD36   246  4150           push r8
0000025B1A6BCD38   248  4151           push r9
0000025B1A6BCD3A   250  4153           push r11
0000025B1A6BCD3C   252  4154           push r12
0000025B1A6BCD3E   254  4156           push r14
0000025B1A6BCD40   256  4157           push r15
0000025B1A6BCD42   258  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000025B1A6BCD47   263  488b75f8       REX.W movq rsi,[rbp-0x8]
0000025B1A6BCD4B   267  33c0           xorl rax,rax
0000025B1A6BCD4D   269  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
0000025B1A6BCD57   279  e8a494f4ff     call 0000025B1A606200    ;; code: STUB, CEntryStub, minor: 5
0000025B1A6BCD5C   284  488d642420     REX.W leaq rsp,[rsp+0x20]
0000025B1A6BCD61   289  415f           pop r15
0000025B1A6BCD63   291  415e           pop r14
0000025B1A6BCD65   293  415c           pop r12
0000025B1A6BCD67   295  415b           pop r11
0000025B1A6BCD69   297  4159           pop r9
0000025B1A6BCD6B   299  4158           pop r8
0000025B1A6BCD6D   301  5f             pop rdi
0000025B1A6BCD6E   302  5e             pop rsi
0000025B1A6BCD6F   303  5b             pop rbx
0000025B1A6BCD70   304  5a             pop rdx
0000025B1A6BCD71   305  59             pop rcx
0000025B1A6BCD72   306  58             pop rax
0000025B1A6BCD73   307  e921ffffff     jmp 89  (0000025B1A6BCC99)
0000025B1A6BCD78   312  e88d92c4ff     call 0000025B1A30600A    ;; deoptimization bailout 1
0000025B1A6BCD7D   317  e89c92c4ff     call 0000025B1A30601E    ;; deoptimization bailout 3
0000025B1A6BCD82   322  6690           nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 4)
 index  ast id    argc     pc
     0       4       0     35
     1      21       0     -1
     2      24       0     89
     3      21       0     -1

Safepoints (size = 30)
0000025B1A6BCC63    35  10000 (sp -> fp)       0
0000025B1A6BCD5C   284  10000 (sp -> fp)       2

RelocInfo (size = 23)
0000025B1A6BCC5F  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6BCC67  position  (1280)
0000025B1A6BCC78  position  (1264)
0000025B1A6BCC9F  position  (1280)
0000025B1A6BCCA1  position  (1287)
0000025B1A6BCCCF  position  (1280)
0000025B1A6BCCF3  code target (STUB)  (0000025B1A6281C0)
0000025B1A6BCD30  position  (1264)
0000025B1A6BCD58  code target (STUB)  (0000025B1A606200)
0000025B1A6BCD79  runtime entry  (deoptimization bailout 1)
0000025B1A6BCD7E  runtime entry  (deoptimization bailout 3)

--- End code ---
--- Raw source ---
(e, i) {
  let j = 16, k = 0
  while (j--)
    if ((i >>> j) & 1)
      ++k
  return k
})

--- Optimized code ---
optimization_id = 3
source_position = 1721
kind = OPTIMIZED_FUNCTION
stack_slots = 5
compiler = crankshaft
Instructions (size = 366)
0000025B1A6BD320     0  55             push rbp
0000025B1A6BD321     1  4889e5         REX.W movq rbp,rsp
0000025B1A6BD324     4  56             push rsi
0000025B1A6BD325     5  57             push rdi
0000025B1A6BD326     6  4883ec08       REX.W subq rsp,0x8
0000025B1A6BD32A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6BD32E    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6BD332    18  488bf0         REX.W movq rsi,rax
0000025B1A6BD335    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BD33C    28  7305           jnc 35  (0000025B1A6BD343)
0000025B1A6BD33E    30  e8fda0f6ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6BD343    35  488b4510       REX.W movq rax,[rbp+0x10]
0000025B1A6BD347    39  a801           test al,0x1           ;; debug: position 1778
0000025B1A6BD349    41  0f8568000000   jnz 151  (0000025B1A6BD3B7)
0000025B1A6BD34F    47  48c1e820       REX.W shrq rax, 32
0000025B1A6BD353    51  ba10000000     movl rdx,0000000000000010
0000025B1A6BD358    56  33db           xorl rbx,rbx
0000025B1A6BD35A    58  488bf2         REX.W movq rsi,rdx    ;; debug: position 1762
0000025B1A6BD35D    61  83c6ff         addl rsi,0xff
0000025B1A6BD360    64  0f80fa000000   jo 320  (0000025B1A6BD460)
0000025B1A6BD366    70  85d2           testl rdx,rdx
0000025B1A6BD368    72  0f843c000000   jz 138  (0000025B1A6BD3AA)
0000025B1A6BD36E    78  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BD375    85  0f829d000000   jc 248  (0000025B1A6BD418)
0000025B1A6BD37B    91  488bce         REX.W movq rcx,rsi
0000025B1A6BD37E    94  488bd0         REX.W movq rdx,rax
0000025B1A6BD381    97  d3ea           shrl rdx, cl          ;; debug: position 1778
0000025B1A6BD383    99  83e201         andl rdx,0x1          ;; debug: position 1785
0000025B1A6BD386   102  85d2           testl rdx,rdx
0000025B1A6BD388   104  0f8508000000   jnz 118  (0000025B1A6BD396)
0000025B1A6BD38E   110  488bd3         REX.W movq rdx,rbx    ;; debug: position 1799
0000025B1A6BD391   113  e90c000000     jmp 130  (0000025B1A6BD3A2)
0000025B1A6BD396   118  488bd3         REX.W movq rdx,rbx
0000025B1A6BD399   121  83c201         addl rdx,0x1
0000025B1A6BD39C   124  0f80c3000000   jo 325  (0000025B1A6BD465)
0000025B1A6BD3A2   130  488bda         REX.W movq rbx,rdx
0000025B1A6BD3A5   133  488bd6         REX.W movq rdx,rsi
0000025B1A6BD3A8   136  ebb0           jmp 58  (0000025B1A6BD35A)
0000025B1A6BD3AA   138  8bc3           movl rax,rbx
0000025B1A6BD3AC   140  48c1e020       REX.W shlq rax, 32
0000025B1A6BD3B0   144  488be5         REX.W movq rsp,rbp
0000025B1A6BD3B3   147  5d             pop rbp
0000025B1A6BD3B4   148  c21800         ret 0x18
0000025B1A6BD3B7   151  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 1778
0000025B1A6BD3BB   155  4c3950ff       REX.W cmpq [rax-0x1],r10
0000025B1A6BD3BF   159  7529           jnz 202  (0000025B1A6BD3EA)
0000025B1A6BD3C1   161  c5fb104007     vmovsd xmm0,[rax+0x7]
0000025B1A6BD3C6   166  c4e1fb2cc0     vcvttsd2siq rax,xmm0
0000025B1A6BD3CB   171  4883f801       REX.W cmpq rax,0x1
0000025B1A6BD3CF   175  7112           jno 195  (0000025B1A6BD3E3)
0000025B1A6BD3D1   177  4883ec08       REX.W subq rsp,0x8
0000025B1A6BD3D5   181  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6BD3DA   186  e8e1adf6ff     call 0000025B1A6281C0    ;; code: STUB, DoubleToIStub, minor: 135172
0000025B1A6BD3DF   191  4883c408       REX.W addq rsp,0x8
0000025B1A6BD3E3   195  8bc0           movl rax,rax
0000025B1A6BD3E5   197  e969ffffff     jmp 51  (0000025B1A6BD353)
0000025B1A6BD3EA   202  493b45a8       REX.W cmpq rax,[r13-0x58]
0000025B1A6BD3EE   206  7507           jnz 215  (0000025B1A6BD3F7)
0000025B1A6BD3F0   208  33c0           xorl rax,rax
0000025B1A6BD3F2   210  e95cffffff     jmp 51  (0000025B1A6BD353)
0000025B1A6BD3F7   215  493b45c0       REX.W cmpq rax,[r13-0x40]
0000025B1A6BD3FB   219  750a           jnz 231  (0000025B1A6BD407)
0000025B1A6BD3FD   221  b801000000     movl rax,0000000000000001
0000025B1A6BD402   226  e94cffffff     jmp 51  (0000025B1A6BD353)
0000025B1A6BD407   231  493b45c8       REX.W cmpq rax,[r13-0x38]
0000025B1A6BD40B   235  0f8559000000   jnz 330  (0000025B1A6BD46A)
0000025B1A6BD411   241  33c0           xorl rax,rax
0000025B1A6BD413   243  e93bffffff     jmp 51  (0000025B1A6BD353)
0000025B1A6BD418   248  50             push rax              ;; debug: position 1762
0000025B1A6BD419   249  51             push rcx
0000025B1A6BD41A   250  52             push rdx
0000025B1A6BD41B   251  53             push rbx
0000025B1A6BD41C   252  56             push rsi
0000025B1A6BD41D   253  57             push rdi
0000025B1A6BD41E   254  4150           push r8
0000025B1A6BD420   256  4151           push r9
0000025B1A6BD422   258  4153           push r11
0000025B1A6BD424   260  4154           push r12
0000025B1A6BD426   262  4156           push r14
0000025B1A6BD428   264  4157           push r15
0000025B1A6BD42A   266  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000025B1A6BD42F   271  488b75f8       REX.W movq rsi,[rbp-0x8]
0000025B1A6BD433   275  33c0           xorl rax,rax
0000025B1A6BD435   277  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
0000025B1A6BD43F   287  e8bc8df4ff     call 0000025B1A606200    ;; code: STUB, CEntryStub, minor: 5
0000025B1A6BD444   292  488d642420     REX.W leaq rsp,[rsp+0x20]
0000025B1A6BD449   297  415f           pop r15
0000025B1A6BD44B   299  415e           pop r14
0000025B1A6BD44D   301  415c           pop r12
0000025B1A6BD44F   303  415b           pop r11
0000025B1A6BD451   305  4159           pop r9
0000025B1A6BD453   307  4158           pop r8
0000025B1A6BD455   309  5f             pop rdi
0000025B1A6BD456   310  5e             pop rsi
0000025B1A6BD457   311  5b             pop rbx
0000025B1A6BD458   312  5a             pop rdx
0000025B1A6BD459   313  59             pop rcx
0000025B1A6BD45A   314  58             pop rax
0000025B1A6BD45B   315  e91bffffff     jmp 91  (0000025B1A6BD37B)
0000025B1A6BD460   320  e8a58bc4ff     call 0000025B1A30600A    ;; deoptimization bailout 1
0000025B1A6BD465   325  e8b48bc4ff     call 0000025B1A30601E    ;; deoptimization bailout 3
0000025B1A6BD46A   330  e8b98bc4ff     call 0000025B1A306028    ;; deoptimization bailout 4
0000025B1A6BD46F   335  90             nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 5)
 index  ast id    argc     pc
     0       4       0     35
     1      34       0     -1
     2      37       0     91
     3      48       0     -1
     4      34       0     -1

Safepoints (size = 30)
0000025B1A6BD343    35  10000 (sp -> fp)       0
0000025B1A6BD444   292  10000 (sp -> fp)       2

RelocInfo (size = 27)
0000025B1A6BD33F  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6BD347  position  (1778)
0000025B1A6BD35A  position  (1762)
0000025B1A6BD381  position  (1778)
0000025B1A6BD383  position  (1785)
0000025B1A6BD38E  position  (1799)
0000025B1A6BD3B7  position  (1778)
0000025B1A6BD3DB  code target (STUB)  (0000025B1A6281C0)
0000025B1A6BD418  position  (1762)
0000025B1A6BD440  code target (STUB)  (0000025B1A606200)
0000025B1A6BD461  runtime entry  (deoptimization bailout 1)
0000025B1A6BD466  runtime entry  (deoptimization bailout 3)
0000025B1A6BD46B  runtime entry  (deoptimization bailout 4)

--- End code ---
--- Raw source ---
(x) { return d_popcnt_lookup[x & 0xFFFF] + d_popcnt_lookup[x >>> 32] }

--- Optimized code ---
optimization_id = 5
source_position = 1874
kind = OPTIMIZED_FUNCTION
name = d_popcnt
stack_slots = 5
compiler = crankshaft
Instructions (size = 355)
0000025B1A6BDF40     0  55             push rbp
0000025B1A6BDF41     1  4889e5         REX.W movq rbp,rsp
0000025B1A6BDF44     4  56             push rsi
0000025B1A6BDF45     5  57             push rdi
0000025B1A6BDF46     6  4883ec08       REX.W subq rsp,0x8
0000025B1A6BDF4A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6BDF4E    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6BDF52    18  488bf0         REX.W movq rsi,rax
0000025B1A6BDF55    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BDF5C    28  7305           jnc 35  (0000025B1A6BDF63)
0000025B1A6BDF5E    30  e8dd94f6ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6BDF63    35  488b45e8       REX.W movq rax,[rbp-0x18]
0000025B1A6BDF67    39  488b98d7000000 REX.W movq rbx,[rax+0xd7]
0000025B1A6BDF6E    46  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6BDF72    50  0f84ed000000   jz 293  (0000025B1A6BE065)
0000025B1A6BDF78    56  488b5510       REX.W movq rdx,[rbp+0x10]
0000025B1A6BDF7C    60  f6c201         testb rdx,0x1         ;; debug: position 1905
0000025B1A6BDF7F    63  0f857f000000   jnz 196  (0000025B1A6BE004)
0000025B1A6BDF85    69  48c1ea20       REX.W shrq rdx, 32
0000025B1A6BDF89    73  488bca         REX.W movq rcx,rdx
0000025B1A6BDF8C    76  81e1ffff0000   andl rcx,0xffff
0000025B1A6BDF92    82  f6c301         testb rbx,0x1
0000025B1A6BDF95    85  0f84cf000000   jz 298  (0000025B1A6BE06A)
0000025B1A6BDF9B    91  49ba69f4a09591000000 REX.W movq r10,0000009195A0F469    ;; object: 0000009195A0F469 <Map(UINT8_ELEMENTS)>
0000025B1A6BDFA5   101  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000025B1A6BDFA9   105  0f85c0000000   jnz 303  (0000025B1A6BE06F)
0000025B1A6BDFAF   111  488b730f       REX.W movq rsi,[rbx+0xf]
0000025B1A6BDFB3   115  8b7e0b         movl rdi,[rsi+0xb]
0000025B1A6BDFB6   118  4c8b5317       REX.W movq r10,[rbx+0x17]
0000025B1A6BDFBA   122  41f6422708     testb [r10+0x27],0x8
0000025B1A6BDFBF   127  0f85af000000   jnz 308  (0000025B1A6BE074)
0000025B1A6BDFC5   133  4c8b4617       REX.W movq r8,[rsi+0x17]
0000025B1A6BDFC9   137  488b760f       REX.W movq rsi,[rsi+0xf]
0000025B1A6BDFCD   141  4c03c6         REX.W addq r8,rsi
0000025B1A6BDFD0   144  3bf9           cmpl rdi,rcx
0000025B1A6BDFD2   146  0f86a1000000   jna 313  (0000025B1A6BE079)
0000025B1A6BDFD8   152  410fb60c08     movzxbl rcx,[r8+rcx*1]
0000025B1A6BDFDD   157  85d2           testl rdx,rdx         ;; debug: position 1935
0000025B1A6BDFDF   159  0f8899000000   js 318  (0000025B1A6BE07E)
0000025B1A6BDFE5   165  3bfa           cmpl rdi,rdx
0000025B1A6BDFE7   167  0f8696000000   jna 323  (0000025B1A6BE083)
0000025B1A6BDFED   173  410fb60410     movzxbl rax,[r8+rdx*1]
0000025B1A6BDFF2   178  03c1           addl rax,rcx          ;; debug: position 1915
0000025B1A6BDFF4   180  8bd8           movl rbx,rax
0000025B1A6BDFF6   182  48c1e320       REX.W shlq rbx, 32
0000025B1A6BDFFA   186  488bc3         REX.W movq rax,rbx
0000025B1A6BDFFD   189  488be5         REX.W movq rsp,rbp
0000025B1A6BE000   192  5d             pop rbp
0000025B1A6BE001   193  c21000         ret 0x10
0000025B1A6BE004   196  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 1905
0000025B1A6BE008   200  4c3952ff       REX.W cmpq [rdx-0x1],r10
0000025B1A6BE00C   204  7529           jnz 247  (0000025B1A6BE037)
0000025B1A6BE00E   206  c5fb104207     vmovsd xmm0,[rdx+0x7]
0000025B1A6BE013   211  c4e1fb2cd0     vcvttsd2siq rdx,xmm0
0000025B1A6BE018   216  4883fa01       REX.W cmpq rdx,0x1
0000025B1A6BE01C   220  7112           jno 240  (0000025B1A6BE030)
0000025B1A6BE01E   222  4883ec08       REX.W subq rsp,0x8
0000025B1A6BE022   226  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6BE027   231  e854feffff     call 0000025B1A6BDE80    ;; code: STUB, DoubleToIStub, minor: 135300
0000025B1A6BE02C   236  4883c408       REX.W addq rsp,0x8
0000025B1A6BE030   240  8bd2           movl rdx,rdx
0000025B1A6BE032   242  e952ffffff     jmp 73  (0000025B1A6BDF89)
0000025B1A6BE037   247  493b55a8       REX.W cmpq rdx,[r13-0x58]
0000025B1A6BE03B   251  7507           jnz 260  (0000025B1A6BE044)
0000025B1A6BE03D   253  33d2           xorl rdx,rdx
0000025B1A6BE03F   255  e945ffffff     jmp 73  (0000025B1A6BDF89)
0000025B1A6BE044   260  493b55c0       REX.W cmpq rdx,[r13-0x40]
0000025B1A6BE048   264  750a           jnz 276  (0000025B1A6BE054)
0000025B1A6BE04A   266  ba01000000     movl rdx,0000000000000001
0000025B1A6BE04F   271  e935ffffff     jmp 73  (0000025B1A6BDF89)
0000025B1A6BE054   276  493b55c8       REX.W cmpq rdx,[r13-0x38]
0000025B1A6BE058   280  0f852a000000   jnz 328  (0000025B1A6BE088)
0000025B1A6BE05E   286  33d2           xorl rdx,rdx
0000025B1A6BE060   288  e924ffffff     jmp 73  (0000025B1A6BDF89)
0000025B1A6BE065   293  e8a07fc4ff     call 0000025B1A30600A    ;; deoptimization bailout 1
0000025B1A6BE06A   298  e8a57fc4ff     call 0000025B1A306014    ;; deoptimization bailout 2
0000025B1A6BE06F   303  e8aa7fc4ff     call 0000025B1A30601E    ;; deoptimization bailout 3
0000025B1A6BE074   308  e8af7fc4ff     call 0000025B1A306028    ;; deoptimization bailout 4
0000025B1A6BE079   313  e8b47fc4ff     call 0000025B1A306032    ;; deoptimization bailout 5
0000025B1A6BE07E   318  e8b97fc4ff     call 0000025B1A30603C    ;; deoptimization bailout 6
0000025B1A6BE083   323  e8be7fc4ff     call 0000025B1A306046    ;; deoptimization bailout 7
0000025B1A6BE088   328  e8c37fc4ff     call 0000025B1A306050    ;; deoptimization bailout 8
0000025B1A6BE08D   333  0f1f00         nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 9)
 index  ast id    argc     pc
     0       4       0     35
     1       4       0     -1
     2       4       0     -1
     3       4       0     -1
     4       4       0     -1
     5       4       0     -1
     6       4       0     -1
     7       4       0     -1
     8       4       0     -1

Safepoints (size = 19)
0000025B1A6BDF63    35  10000 (sp -> fp)       0

RelocInfo (size = 33)
0000025B1A6BDF5F  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6BDF7C  position  (1905)
0000025B1A6BDF9D  embedded object  (0000009195A0F469 <Map(UINT8_ELEMENTS)>)
0000025B1A6BDFDD  position  (1935)
0000025B1A6BDFF2  position  (1915)
0000025B1A6BE004  position  (1905)
0000025B1A6BE028  code target (STUB)  (0000025B1A6BDE80)
0000025B1A6BE066  runtime entry  (deoptimization bailout 1)
0000025B1A6BE06B  runtime entry  (deoptimization bailout 2)
0000025B1A6BE070  runtime entry  (deoptimization bailout 3)
0000025B1A6BE075  runtime entry  (deoptimization bailout 4)
0000025B1A6BE07A  runtime entry  (deoptimization bailout 5)
0000025B1A6BE07F  runtime entry  (deoptimization bailout 6)
0000025B1A6BE084  runtime entry  (deoptimization bailout 7)
0000025B1A6BE089  runtime entry  (deoptimization bailout 8)

--- End code ---
--- Raw source ---
(x) { return d_popcnt(x[LO]) + d_popcnt(x[HI]) } 

--- Optimized code ---
optimization_id = 4
source_position = 2175
kind = OPTIMIZED_FUNCTION
name = popcnt
stack_slots = 5
compiler = crankshaft
Instructions (size = 675)
0000025B1A6BE120     0  55             push rbp
0000025B1A6BE121     1  4889e5         REX.W movq rbp,rsp
0000025B1A6BE124     4  56             push rsi
0000025B1A6BE125     5  57             push rdi
0000025B1A6BE126     6  4883ec08       REX.W subq rsp,0x8
0000025B1A6BE12A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6BE12E    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6BE132    18  488bf0         REX.W movq rsi,rax
0000025B1A6BE135    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6BE13C    28  7305           jnc 35  (0000025B1A6BE143)
0000025B1A6BE13E    30  e8fd92f6ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6BE143    35  488b45e8       REX.W movq rax,[rbp-0x18]
0000025B1A6BE147    39  488b98df000000 REX.W movq rbx,[rax+0xdf]    ;; debug: position 2188
0000025B1A6BE14E    46  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6BE152    50  0f84ed010000   jz 549  (0000025B1A6BE345)
0000025B1A6BE158    56  488b502f       REX.W movq rdx,[rax+0x2f]
0000025B1A6BE15C    60  493b55d8       REX.W cmpq rdx,[r13-0x28]
0000025B1A6BE160    64  0f84e4010000   jz 554  (0000025B1A6BE34A)
0000025B1A6BE166    70  488b4d10       REX.W movq rcx,[rbp+0x10]
0000025B1A6BE16A    74  f6c101         testb rcx,0x1
0000025B1A6BE16D    77  0f84dc010000   jz 559  (0000025B1A6BE34F)
0000025B1A6BE173    83  49ba51fca09591000000 REX.W movq r10,0000009195A0FC51    ;; object: 0000009195A0FC51 <Map(UINT32_ELEMENTS)>
0000025B1A6BE17D    93  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6BE181    97  0f85cd010000   jnz 564  (0000025B1A6BE354)
0000025B1A6BE187   103  488b710f       REX.W movq rsi,[rcx+0xf]
0000025B1A6BE18B   107  8b7e0b         movl rdi,[rsi+0xb]
0000025B1A6BE18E   110  4c8b5117       REX.W movq r10,[rcx+0x17]
0000025B1A6BE192   114  41f6422708     testb [r10+0x27],0x8
0000025B1A6BE197   119  0f85bc010000   jnz 569  (0000025B1A6BE359)
0000025B1A6BE19D   125  4c8b4617       REX.W movq r8,[rsi+0x17]
0000025B1A6BE1A1   129  488b760f       REX.W movq rsi,[rsi+0xf]
0000025B1A6BE1A5   133  4c03c6         REX.W addq r8,rsi
0000025B1A6BE1A8   136  f6c201         testb rdx,0x1
0000025B1A6BE1AB   139  0f852a010000   jnz 443  (0000025B1A6BE2DB)
0000025B1A6BE1B1   145  48c1ea20       REX.W shrq rdx, 32
0000025B1A6BE1B5   149  3bfa           cmpl rdi,rdx
0000025B1A6BE1B7   151  0f86a1010000   jna 574  (0000025B1A6BE35E)
0000025B1A6BE1BD   157  418b1490       movl rdx,[r8+rdx*4]
0000025B1A6BE1C1   161  49ba403aadccac010000 REX.W movq r10,000001ACCCAD3A40    ;; property cell
0000025B1A6BE1CB   171  4d8b12         REX.W movq r10,[r10]
0000025B1A6BE1CE   174  493bda         REX.W cmpq rbx,r10
0000025B1A6BE1D1   177  0f858c010000   jnz 579  (0000025B1A6BE363)
0000025B1A6BE1D7   183  48be503aadccac010000 REX.W movq rsi,000001ACCCAD3A50    ;; property cell
0000025B1A6BE1E1   193  488b36         REX.W movq rsi,[rsi]
0000025B1A6BE1E4   196  488bb6d7000000 REX.W movq rsi,[rsi+0xd7]
0000025B1A6BE1EB   203  493b75d8       REX.W cmpq rsi,[r13-0x28]
0000025B1A6BE1EF   207  0f8473010000   jz 584  (0000025B1A6BE368)
0000025B1A6BE1F5   213  4c8bca         REX.W movq r9,rdx
0000025B1A6BE1F8   216  4181e1ffff0000 andl r9,0xffff        ;; debug: position 1905
0000025B1A6BE1FF   223  40f6c601       testb rsi,0x1
0000025B1A6BE203   227  0f8464010000   jz 589  (0000025B1A6BE36D)
0000025B1A6BE209   233  49ba69f4a09591000000 REX.W movq r10,0000009195A0F469    ;; object: 0000009195A0F469 <Map(UINT8_ELEMENTS)>
0000025B1A6BE213   243  4c3956ff       REX.W cmpq [rsi-0x1],r10
0000025B1A6BE217   247  0f8555010000   jnz 594  (0000025B1A6BE372)
0000025B1A6BE21D   253  4c8b5e0f       REX.W movq r11,[rsi+0xf]
0000025B1A6BE221   257  458b630b       movl r12,[r11+0xb]
0000025B1A6BE225   261  4c8b5617       REX.W movq r10,[rsi+0x17]
0000025B1A6BE229   265  41f6422708     testb [r10+0x27],0x8
0000025B1A6BE22E   270  0f8543010000   jnz 599  (0000025B1A6BE377)
0000025B1A6BE234   276  4d8b7317       REX.W movq r14,[r11+0x17]
0000025B1A6BE238   280  4d8b5b0f       REX.W movq r11,[r11+0xf]
0000025B1A6BE23C   284  4d03f3         REX.W addq r14,r11
0000025B1A6BE23F   287  453be1         cmpl r12,r9
0000025B1A6BE242   290  0f8634010000   jna 604  (0000025B1A6BE37C)
0000025B1A6BE248   296  470fb60c0e     movzxbl r9,[r14+r9*1]
0000025B1A6BE24D   301  4c8bda         REX.W movq r11,rdx
0000025B1A6BE250   304  4585db         testl r11,r11         ;; debug: position 1935
0000025B1A6BE253   307  0f8828010000   js 609  (0000025B1A6BE381)
0000025B1A6BE259   313  453be3         cmpl r12,r11
0000025B1A6BE25C   316  0f8624010000   jna 614  (0000025B1A6BE386)
0000025B1A6BE262   322  430fb6141e     movzxbl rdx,[r14+r11*1]
0000025B1A6BE267   327  4103d1         addl rdx,r9           ;; debug: position 1915
0000025B1A6BE26A   330  4c8b4837       REX.W movq r9,[rax+0x37]    ;; debug: position 2206
0000025B1A6BE26E   334  4d3b4dd8       REX.W cmpq r9,[r13-0x28]
0000025B1A6BE272   338  0f8413010000   jz 619  (0000025B1A6BE38B)
0000025B1A6BE278   344  41f6c101       testb r9,0x1
0000025B1A6BE27C   348  0f858d000000   jnz 495  (0000025B1A6BE30F)
0000025B1A6BE282   354  49c1e920       REX.W shrq r9, 32
0000025B1A6BE286   358  413bf9         cmpl rdi,r9
0000025B1A6BE289   361  0f8601010000   jna 624  (0000025B1A6BE390)
0000025B1A6BE28F   367  438b3c88       movl rdi,[r8+r9*4]
0000025B1A6BE293   371  4c8bc7         REX.W movq r8,rdi
0000025B1A6BE296   374  4181e0ffff0000 andl r8,0xffff        ;; debug: position 1905
0000025B1A6BE29D   381  453be0         cmpl r12,r8
0000025B1A6BE2A0   384  0f86ef000000   jna 629  (0000025B1A6BE395)
0000025B1A6BE2A6   390  470fb60406     movzxbl r8,[r14+r8*1]
0000025B1A6BE2AB   395  4c8bcf         REX.W movq r9,rdi
0000025B1A6BE2AE   398  4585c9         testl r9,r9           ;; debug: position 1935
0000025B1A6BE2B1   401  0f88e3000000   js 634  (0000025B1A6BE39A)
0000025B1A6BE2B7   407  453be1         cmpl r12,r9
0000025B1A6BE2BA   410  0f86df000000   jna 639  (0000025B1A6BE39F)
0000025B1A6BE2C0   416  430fb6040e     movzxbl rax,[r14+r9*1]
0000025B1A6BE2C5   421  4103c0         addl rax,r8           ;; debug: position 1915
0000025B1A6BE2C8   424  8d0402         leal rax,[rdx+rax*1]    ;; debug: position 2204
0000025B1A6BE2CB   427  8bd8           movl rbx,rax
0000025B1A6BE2CD   429  48c1e320       REX.W shlq rbx, 32
0000025B1A6BE2D1   433  488bc3         REX.W movq rax,rbx
0000025B1A6BE2D4   436  488be5         REX.W movq rsp,rbp
0000025B1A6BE2D7   439  5d             pop rbp
0000025B1A6BE2D8   440  c21000         ret 0x10
0000025B1A6BE2DB   443  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2188
0000025B1A6BE2DF   447  4c3952ff       REX.W cmpq [rdx-0x1],r10
0000025B1A6BE2E3   451  0f85bb000000   jnz 644  (0000025B1A6BE3A4)
0000025B1A6BE2E9   457  c5fb104207     vmovsd xmm0,[rdx+0x7]
0000025B1A6BE2EE   462  c5fb2cd0       vcvttsd2si rdx,xmm0
0000025B1A6BE2F2   466  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6BE2F6   470  c5f32aca       vcvtlsi2sd xmm1,xmm1,rdx
0000025B1A6BE2FA   474  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6BE2FE   478  0f85a0000000   jnz 644  (0000025B1A6BE3A4)
0000025B1A6BE304   484  0f8a9a000000   jpe 644  (0000025B1A6BE3A4)
0000025B1A6BE30A   490  e9a6feffff     jmp 149  (0000025B1A6BE1B5)
0000025B1A6BE30F   495  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2206
0000025B1A6BE313   499  4d3951ff       REX.W cmpq [r9-0x1],r10
0000025B1A6BE317   503  0f858c000000   jnz 649  (0000025B1A6BE3A9)
0000025B1A6BE31D   509  c4c17b104107   vmovsd xmm0,[r9+0x7]
0000025B1A6BE323   515  c57b2cc8       vcvttsd2si r9,xmm0
0000025B1A6BE327   519  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6BE32B   523  c4c1732ac9     vcvtlsi2sd xmm1,xmm1,r9
0000025B1A6BE330   528  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6BE334   532  0f856f000000   jnz 649  (0000025B1A6BE3A9)
0000025B1A6BE33A   538  0f8a69000000   jpe 649  (0000025B1A6BE3A9)
0000025B1A6BE340   544  e941ffffff     jmp 358  (0000025B1A6BE286)
0000025B1A6BE345   549  e8c07cc4ff     call 0000025B1A30600A    ;; deoptimization bailout 1
0000025B1A6BE34A   554  e8c57cc4ff     call 0000025B1A306014    ;; deoptimization bailout 2
0000025B1A6BE34F   559  e8ca7cc4ff     call 0000025B1A30601E    ;; deoptimization bailout 3
0000025B1A6BE354   564  e8cf7cc4ff     call 0000025B1A306028    ;; deoptimization bailout 4
0000025B1A6BE359   569  e8d47cc4ff     call 0000025B1A306032    ;; deoptimization bailout 5
0000025B1A6BE35E   574  e8d97cc4ff     call 0000025B1A30603C    ;; deoptimization bailout 6
0000025B1A6BE363   579  e8de7cc4ff     call 0000025B1A306046    ;; deoptimization bailout 7
0000025B1A6BE368   584  e8e37cc4ff     call 0000025B1A306050    ;; deoptimization bailout 8
0000025B1A6BE36D   589  e8e87cc4ff     call 0000025B1A30605A    ;; deoptimization bailout 9
0000025B1A6BE372   594  e8ed7cc4ff     call 0000025B1A306064    ;; deoptimization bailout 10
0000025B1A6BE377   599  e8f27cc4ff     call 0000025B1A30606E    ;; deoptimization bailout 11
0000025B1A6BE37C   604  e8f77cc4ff     call 0000025B1A306078    ;; deoptimization bailout 12
0000025B1A6BE381   609  e8fc7cc4ff     call 0000025B1A306082    ;; deoptimization bailout 13
0000025B1A6BE386   614  e8017dc4ff     call 0000025B1A30608C    ;; deoptimization bailout 14
0000025B1A6BE38B   619  e8067dc4ff     call 0000025B1A306096    ;; deoptimization bailout 15
0000025B1A6BE390   624  e80b7dc4ff     call 0000025B1A3060A0    ;; deoptimization bailout 16
0000025B1A6BE395   629  e8107dc4ff     call 0000025B1A3060AA    ;; deoptimization bailout 17
0000025B1A6BE39A   634  e8157dc4ff     call 0000025B1A3060B4    ;; deoptimization bailout 18
0000025B1A6BE39F   639  e81a7dc4ff     call 0000025B1A3060BE    ;; deoptimization bailout 19
0000025B1A6BE3A4   644  e81f7dc4ff     call 0000025B1A3060C8    ;; deoptimization bailout 20
0000025B1A6BE3A9   649  e8247dc4ff     call 0000025B1A3060D2    ;; deoptimization bailout 21
0000025B1A6BE3AE   654  6690           nop

Inlined functions (count = 1)
 000001ACCCACC759 <SharedFunctionInfo d_popcnt>

Deoptimization Input Data (deopt points = 22)
 index  ast id    argc     pc
     0       4       0     35
     1       4       0     -1
     2       4       0     -1
     3       4       0     -1
     4       4       0     -1
     5       4       0     -1
     6       4       0     -1
     7       4       0     -1
     8       3       0     -1
     9       3       0     -1
    10       3       0     -1
    11       3       0     -1
    12       3       0     -1
    13       3       0     -1
    14       3       0     -1
    15       9       0     -1
    16       9       0     -1
    17       3       0     -1
    18       3       0     -1
    19       3       0     -1
    20       4       0     -1
    21       9       0     -1

Safepoints (size = 19)
0000025B1A6BE143    35  10000 (sp -> fp)       0

RelocInfo (size = 95)
0000025B1A6BE13F  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6BE147  position  (2188)
0000025B1A6BE175  embedded object  (0000009195A0FC51 <Map(UINT32_ELEMENTS)>)
0000025B1A6BE1C3  property cell
0000025B1A6BE1D9  property cell
0000025B1A6BE1F8  position  (1905)
0000025B1A6BE20B  embedded object  (0000009195A0F469 <Map(UINT8_ELEMENTS)>)
0000025B1A6BE250  position  (1935)
0000025B1A6BE267  position  (1915)
0000025B1A6BE26A  position  (2206)
0000025B1A6BE296  position  (1905)
0000025B1A6BE2AE  position  (1935)
0000025B1A6BE2C5  position  (1915)
0000025B1A6BE2C8  position  (2204)
0000025B1A6BE2DB  position  (2188)
0000025B1A6BE30F  position  (2206)
0000025B1A6BE346  runtime entry  (deoptimization bailout 1)
0000025B1A6BE34B  runtime entry  (deoptimization bailout 2)
0000025B1A6BE350  runtime entry  (deoptimization bailout 3)
0000025B1A6BE355  runtime entry  (deoptimization bailout 4)
0000025B1A6BE35A  runtime entry  (deoptimization bailout 5)
0000025B1A6BE35F  runtime entry  (deoptimization bailout 6)
0000025B1A6BE364  runtime entry  (deoptimization bailout 7)
0000025B1A6BE369  runtime entry  (deoptimization bailout 8)
0000025B1A6BE36E  runtime entry  (deoptimization bailout 9)
0000025B1A6BE373  runtime entry  (deoptimization bailout 10)
0000025B1A6BE378  runtime entry  (deoptimization bailout 11)
0000025B1A6BE37D  runtime entry  (deoptimization bailout 12)
0000025B1A6BE382  runtime entry  (deoptimization bailout 13)
0000025B1A6BE387  runtime entry  (deoptimization bailout 14)
0000025B1A6BE38C  runtime entry  (deoptimization bailout 15)
0000025B1A6BE391  runtime entry  (deoptimization bailout 16)
0000025B1A6BE396  runtime entry  (deoptimization bailout 17)
0000025B1A6BE39B  runtime entry  (deoptimization bailout 18)
0000025B1A6BE3A0  runtime entry  (deoptimization bailout 19)
0000025B1A6BE3A5  runtime entry  (deoptimization bailout 20)
0000025B1A6BE3AA  runtime entry  (deoptimization bailout 21)

--- End code ---
--- Raw source ---
(exports, require, module, __filename, __dirname) { {

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
    s += '\x5cn'
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

// #########################################
//            game representation
// #########################################

// ---------- constants ----------

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
let move_maps     = new Uint32Array(2 * 4 * MAX_LEN * MAX_BRANCH) // qword[MAX_LEN][MAX_BRANCH], holds a list of lists of move maps
let move_ids      = new Uint8Array(4 * MAX_LEN * MAX_BRANCH) // byte[MAX_LEN][MAX_BRANCH], holds a list of lists of move ids
let move_list_len = new Uint32Array(MAX_LEN) // holds the length of each list in move_boards and move_ids

// ---------- board declarations ----------

// bitboard
let board = new Uint32Array(16 * 2)
let occ  = new Uint32Array(2)

// non-bitboard
let arr  = new Uint8Array(64) // mailbox
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
function at(sq) { return arr[sq] }

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
    s += '\x5cn'
  }
  return s + `${['w', 'b'][misc[TURN]]} | ${misc[MOVES]} moves | ${misc[EP] ? s_str(misc[EP]) : '-'} ep | ${c_str(misc[CASTLING])} castling | ${misc[SCORE]} score`
}

// print bitboards and board
function dump_board(radix = 2) {
  let ids = { wp: WP, wk: WK, wn: WN, wq: WQ, wr: WR, wb: WB, bp: BP, bn: BN, bq: BQ, br: BR, bb: BB }
  for (const name in ids)
    console.log(name + ': \x5cn' + q_bitboard(Uint32Array.from([board[ids[name] << 1], board[ids[name] << 1 | 1]]), radix))
  console.log('occ: \x5cn' + q_bitboard(occ, radix))
  console.log(str())
}

// ---------- board functions (mutating) ----------

// places piece at square
function place(p, sq) {
  if (p) {
    arr[sq] = p
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
set(rbx, 1, 0)
let start = Date.now()
let n = 100000000
for (let i = 0; i < n; ++i) {
  //place(WP, E4)
  //set(rax, 1, 0)
  //shl(rax, 1)
  //move_list_len[0] = 0
  //load_move(0)
  //bsf(rbx)
  popcnt(rax)
}
console.log((Date.now() - start) / n)
dump()

// ---------- initialize and print board ----------
reset()
dump_board()

}
})

--- Optimized code ---
optimization_id = 6
source_position = 10
kind = OPTIMIZED_FUNCTION
stack_slots = 198
compiler = crankshaft
Instructions (size = 12862)
0000025B1A6C4740     0  55             push rbp
0000025B1A6C4741     1  4889e5         REX.W movq rbp,rsp
0000025B1A6C4744     4  56             push rsi
0000025B1A6C4745     5  57             push rdi
0000025B1A6C4746     6  4881ec10060000 REX.W subq rsp,0x610
0000025B1A6C474D    13  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6C4751    17  48898568fbffff REX.W movq [rbp-0x498],rax
0000025B1A6C4758    24  488bf0         REX.W movq rsi,rax
0000025B1A6C475B    27  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6C4762    34  7305           jnc 41  (0000025B1A6C4769)
0000025B1A6C4764    36  e8d72cf6ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6C4769    41  488b45f0       REX.W movq rax,[rbp-0x10]
0000025B1A6C476D    45  49ba6941adccac010000 REX.W movq r10,000001ACCCAD4169    ;; object: 000001ACCCAD4169 <FixedArray[226]>
0000025B1A6C4777    55  4152           push r10
0000025B1A6C4779    57  50             push rax
0000025B1A6C477A    58  488bb568fbffff REX.W movq rsi,[rbp-0x498]
0000025B1A6C4781    65  b802000000     movl rax,0000000000000002
0000025B1A6C4786    70  48bb0035cfe9f77f0000 REX.W movq rbx,00007FF7E9CF3500
0000025B1A6C4790    80  e8cb18f4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C4795    85  48898560fbffff REX.W movq [rbp-0x4a0],rax
0000025B1A6C479C    92  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C47A6   102  4889582f       REX.W movq [rax+0x2f],rbx
0000025B1A6C47AA   106  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C47B4   116  48895837       REX.W movq [rax+0x37],rbx
0000025B1A6C47B8   120  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C47C2   130  4889583f       REX.W movq [rax+0x3f],rbx
0000025B1A6C47C6   134  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C47D0   144  48895847       REX.W movq [rax+0x47],rbx
0000025B1A6C47D4   148  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C47DE   158  4889584f       REX.W movq [rax+0x4f],rbx
0000025B1A6C47E2   162  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C47EC   172  48895857       REX.W movq [rax+0x57],rbx
0000025B1A6C47F0   176  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C47FA   186  4889585f       REX.W movq [rax+0x5f],rbx
0000025B1A6C47FE   190  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4808   200  48895867       REX.W movq [rax+0x67],rbx
0000025B1A6C480C   204  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4816   214  4889586f       REX.W movq [rax+0x6f],rbx
0000025B1A6C481A   218  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4824   228  48895877       REX.W movq [rax+0x77],rbx
0000025B1A6C4828   232  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4832   242  4889587f       REX.W movq [rax+0x7f],rbx
0000025B1A6C4836   246  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4840   256  48899887000000 REX.W movq [rax+0x87],rbx
0000025B1A6C4847   263  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4851   273  4889988f000000 REX.W movq [rax+0x8f],rbx
0000025B1A6C4858   280  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4862   290  48899897000000 REX.W movq [rax+0x97],rbx
0000025B1A6C4869   297  48bb99c3acccac010000 REX.W movq rbx,000001ACCCACC399    ;; object: 000001ACCCACC399 <SharedFunctionInfo d_bit>
0000025B1A6C4873   307  488bf0         REX.W movq rsi,rax
0000025B1A6C4876   310  e8458af6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C487B   315  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4882   322  4889829f000000 REX.W movq [rdx+0x9f],rax
0000025B1A6C4889   329  a801           test al,0x1
0000025B1A6C488B   331  0f8428000000   jz 377  (0000025B1A6C48B9)
0000025B1A6C4891   337  488d9a9f000000 REX.W leaq rbx,[rdx+0x9f]
0000025B1A6C4898   344  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C489E   350  f6400802       testb [rax+0x8],0x2
0000025B1A6C48A2   354  7415           jz 377  (0000025B1A6C48B9)
0000025B1A6C48A4   356  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C48AB   363  4823c2         REX.W andq rax,rdx
0000025B1A6C48AE   366  f6400804       testb [rax+0x8],0x4
0000025B1A6C48B2   370  7405           jz 377  (0000025B1A6C48B9)
0000025B1A6C48B4   372  e8a7ceffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C48B9   377  48bb59c4acccac010000 REX.W movq rbx,000001ACCCACC459    ;; object: 000001ACCCACC459 <SharedFunctionInfo d_lsb>
0000025B1A6C48C3   387  488bf2         REX.W movq rsi,rdx
0000025B1A6C48C6   390  e8f589f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C48CB   395  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C48D2   402  488982a7000000 REX.W movq [rdx+0xa7],rax
0000025B1A6C48D9   409  a801           test al,0x1
0000025B1A6C48DB   411  0f8428000000   jz 457  (0000025B1A6C4909)
0000025B1A6C48E1   417  488d9aa7000000 REX.W leaq rbx,[rdx+0xa7]
0000025B1A6C48E8   424  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C48EE   430  f6400802       testb [rax+0x8],0x2
0000025B1A6C48F2   434  7415           jz 457  (0000025B1A6C4909)
0000025B1A6C48F4   436  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C48FB   443  4823c2         REX.W andq rax,rdx
0000025B1A6C48FE   446  f6400804       testb [rax+0x8],0x4
0000025B1A6C4902   450  7405           jz 457  (0000025B1A6C4909)
0000025B1A6C4904   452  e857ceffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4909   457  48bb19c5acccac010000 REX.W movq rbx,000001ACCCACC519    ;; object: 000001ACCCACC519 <SharedFunctionInfo d_clsb>
0000025B1A6C4913   467  488bf2         REX.W movq rsi,rdx
0000025B1A6C4916   470  e8a589f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C491B   475  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4922   482  488982af000000 REX.W movq [rdx+0xaf],rax
0000025B1A6C4929   489  a801           test al,0x1
0000025B1A6C492B   491  0f8428000000   jz 537  (0000025B1A6C4959)
0000025B1A6C4931   497  488d9aaf000000 REX.W leaq rbx,[rdx+0xaf]
0000025B1A6C4938   504  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C493E   510  f6400802       testb [rax+0x8],0x2
0000025B1A6C4942   514  7415           jz 537  (0000025B1A6C4959)
0000025B1A6C4944   516  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C494B   523  4823c2         REX.W andq rax,rdx
0000025B1A6C494E   526  f6400804       testb [rax+0x8],0x4
0000025B1A6C4952   530  7405           jz 537  (0000025B1A6C4959)
0000025B1A6C4954   532  e807ceffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4959   537  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4963   547  48899ab7000000 REX.W movq [rdx+0xb7],rbx
0000025B1A6C496A   554  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4974   564  48899abf000000 REX.W movq [rdx+0xbf],rbx
0000025B1A6C497B   571  48bbd9c5acccac010000 REX.W movq rbx,000001ACCCACC5D9    ;; object: 000001ACCCACC5D9 <SharedFunctionInfo d_bsf>
0000025B1A6C4985   581  488bf2         REX.W movq rsi,rdx
0000025B1A6C4988   584  e83389f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C498D   589  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4994   596  488982c7000000 REX.W movq [rdx+0xc7],rax
0000025B1A6C499B   603  a801           test al,0x1
0000025B1A6C499D   605  0f8428000000   jz 651  (0000025B1A6C49CB)
0000025B1A6C49A3   611  488d9ac7000000 REX.W leaq rbx,[rdx+0xc7]
0000025B1A6C49AA   618  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C49B0   624  f6400802       testb [rax+0x8],0x2
0000025B1A6C49B4   628  7415           jz 651  (0000025B1A6C49CB)
0000025B1A6C49B6   630  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C49BD   637  4823c2         REX.W andq rax,rdx
0000025B1A6C49C0   640  f6400804       testb [rax+0x8],0x4
0000025B1A6C49C4   644  7405           jz 651  (0000025B1A6C49CB)
0000025B1A6C49C6   646  e895cdffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C49CB   651  48bb99c6acccac010000 REX.W movq rbx,000001ACCCACC699    ;; object: 000001ACCCACC699 <SharedFunctionInfo d_bsr>
0000025B1A6C49D5   661  488bf2         REX.W movq rsi,rdx
0000025B1A6C49D8   664  e8e388f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C49DD   669  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C49E4   676  488982cf000000 REX.W movq [rdx+0xcf],rax
0000025B1A6C49EB   683  a801           test al,0x1
0000025B1A6C49ED   685  0f8428000000   jz 731  (0000025B1A6C4A1B)
0000025B1A6C49F3   691  488d9acf000000 REX.W leaq rbx,[rdx+0xcf]
0000025B1A6C49FA   698  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C4A00   704  f6400802       testb [rax+0x8],0x2
0000025B1A6C4A04   708  7415           jz 731  (0000025B1A6C4A1B)
0000025B1A6C4A06   710  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C4A0D   717  4823c2         REX.W andq rax,rdx
0000025B1A6C4A10   720  f6400804       testb [rax+0x8],0x4
0000025B1A6C4A14   724  7405           jz 731  (0000025B1A6C4A1B)
0000025B1A6C4A16   726  e845cdffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4A1B   731  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4A25   741  48899ad7000000 REX.W movq [rdx+0xd7],rbx
0000025B1A6C4A2C   748  48bb59c7acccac010000 REX.W movq rbx,000001ACCCACC759    ;; object: 000001ACCCACC759 <SharedFunctionInfo d_popcnt>
0000025B1A6C4A36   758  488bf2         REX.W movq rsi,rdx
0000025B1A6C4A39   761  e88288f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4A3E   766  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4A45   773  488982df000000 REX.W movq [rdx+0xdf],rax
0000025B1A6C4A4C   780  a801           test al,0x1
0000025B1A6C4A4E   782  0f8428000000   jz 828  (0000025B1A6C4A7C)
0000025B1A6C4A54   788  488d9adf000000 REX.W leaq rbx,[rdx+0xdf]
0000025B1A6C4A5B   795  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C4A61   801  f6400802       testb [rax+0x8],0x2
0000025B1A6C4A65   805  7415           jz 828  (0000025B1A6C4A7C)
0000025B1A6C4A67   807  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C4A6E   814  4823c2         REX.W andq rax,rdx
0000025B1A6C4A71   817  f6400804       testb [rax+0x8],0x4
0000025B1A6C4A75   821  7405           jz 828  (0000025B1A6C4A7C)
0000025B1A6C4A77   823  e8e4ccffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4A7C   828  48bb19c8acccac010000 REX.W movq rbx,000001ACCCACC819    ;; object: 000001ACCCACC819 <SharedFunctionInfo bit>
0000025B1A6C4A86   838  488bf2         REX.W movq rsi,rdx
0000025B1A6C4A89   841  e83288f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4A8E   846  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4A95   853  488982e7000000 REX.W movq [rdx+0xe7],rax
0000025B1A6C4A9C   860  a801           test al,0x1
0000025B1A6C4A9E   862  0f8428000000   jz 908  (0000025B1A6C4ACC)
0000025B1A6C4AA4   868  488d9ae7000000 REX.W leaq rbx,[rdx+0xe7]
0000025B1A6C4AAB   875  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C4AB1   881  f6400802       testb [rax+0x8],0x2
0000025B1A6C4AB5   885  7415           jz 908  (0000025B1A6C4ACC)
0000025B1A6C4AB7   887  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C4ABE   894  4823c2         REX.W andq rax,rdx
0000025B1A6C4AC1   897  f6400804       testb [rax+0x8],0x4
0000025B1A6C4AC5   901  7405           jz 908  (0000025B1A6C4ACC)
0000025B1A6C4AC7   903  e894ccffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4ACC   908  48bbd9c8acccac010000 REX.W movq rbx,000001ACCCACC8D9    ;; object: 000001ACCCACC8D9 <SharedFunctionInfo bool>
0000025B1A6C4AD6   918  488bf2         REX.W movq rsi,rdx
0000025B1A6C4AD9   921  e8e287f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4ADE   926  48898558fbffff REX.W movq [rbp-0x4a8],rax
0000025B1A6C4AE5   933  48bb99c9acccac010000 REX.W movq rbx,000001ACCCACC999    ;; object: 000001ACCCACC999 <SharedFunctionInfo popcnt>
0000025B1A6C4AEF   943  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4AF6   950  e8c587f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4AFB   955  48898550fbffff REX.W movq [rbp-0x4b0],rax
0000025B1A6C4B02   962  48bb59caacccac010000 REX.W movq rbx,000001ACCCACCA59    ;; object: 000001ACCCACCA59 <SharedFunctionInfo bsf>
0000025B1A6C4B0C   972  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4B13   979  e8a887f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4B18   984  48898548fbffff REX.W movq [rbp-0x4b8],rax
0000025B1A6C4B1F   991  48bb19cbacccac010000 REX.W movq rbx,000001ACCCACCB19    ;; object: 000001ACCCACCB19 <SharedFunctionInfo bsr>
0000025B1A6C4B29  1001  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4B30  1008  e88b87f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4B35  1013  48898540fbffff REX.W movq [rbp-0x4c0],rax
0000025B1A6C4B3C  1020  48bbd9cbacccac010000 REX.W movq rbx,000001ACCCACCBD9    ;; object: 000001ACCCACCBD9 <SharedFunctionInfo q_str>
0000025B1A6C4B46  1030  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4B4D  1037  e86e87f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4B52  1042  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4B59  1049  488982ef000000 REX.W movq [rdx+0xef],rax
0000025B1A6C4B60  1056  a801           test al,0x1
0000025B1A6C4B62  1058  0f8428000000   jz 1104  (0000025B1A6C4B90)
0000025B1A6C4B68  1064  488d9aef000000 REX.W leaq rbx,[rdx+0xef]
0000025B1A6C4B6F  1071  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C4B75  1077  f6400802       testb [rax+0x8],0x2
0000025B1A6C4B79  1081  7415           jz 1104  (0000025B1A6C4B90)
0000025B1A6C4B7B  1083  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C4B82  1090  4823c2         REX.W andq rax,rdx
0000025B1A6C4B85  1093  f6400804       testb [rax+0x8],0x4
0000025B1A6C4B89  1097  7405           jz 1104  (0000025B1A6C4B90)
0000025B1A6C4B8B  1099  e8d0cbffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4B90  1104  48bb99ccacccac010000 REX.W movq rbx,000001ACCCACCC99    ;; object: 000001ACCCACCC99 <SharedFunctionInfo q_bitboard>
0000025B1A6C4B9A  1114  488bf2         REX.W movq rsi,rdx
0000025B1A6C4B9D  1117  e81e87f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4BA2  1122  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C4BA9  1129  488983f7000000 REX.W movq [rbx+0xf7],rax
0000025B1A6C4BB0  1136  a801           test al,0x1
0000025B1A6C4BB2  1138  0f8428000000   jz 1184  (0000025B1A6C4BE0)
0000025B1A6C4BB8  1144  488d93f7000000 REX.W leaq rdx,[rbx+0xf7]
0000025B1A6C4BBF  1151  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C4BC5  1157  f6400802       testb [rax+0x8],0x2
0000025B1A6C4BC9  1161  7415           jz 1184  (0000025B1A6C4BE0)
0000025B1A6C4BCB  1163  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C4BD2  1170  4823c3         REX.W andq rax,rbx
0000025B1A6C4BD5  1173  f6400804       testb [rax+0x8],0x4
0000025B1A6C4BD9  1177  7405           jz 1184  (0000025B1A6C4BE0)
0000025B1A6C4BDB  1179  e8a0d4ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C4BE0  1184  49ba59cdacccac010000 REX.W movq r10,000001ACCCACCD59    ;; object: 000001ACCCACCD59 <SharedFunctionInfo dump>
0000025B1A6C4BEA  1194  4152           push r10
0000025B1A6C4BEC  1196  488bf3         REX.W movq rsi,rbx
0000025B1A6C4BEF  1199  b801000000     movl rax,0000000000000001
0000025B1A6C4BF4  1204  48bbd015cfe9f77f0000 REX.W movq rbx,00007FF7E9CF15D0
0000025B1A6C4BFE  1214  e85d14f4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C4C03  1219  48898538fbffff REX.W movq [rbp-0x4c8],rax
0000025B1A6C4C0A  1226  48bb19ceacccac010000 REX.W movq rbx,000001ACCCACCE19    ;; object: 000001ACCCACCE19 <SharedFunctionInfo com>
0000025B1A6C4C14  1236  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4C1B  1243  e8a086f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4C20  1248  48898530fbffff REX.W movq [rbp-0x4d0],rax
0000025B1A6C4C27  1255  48bbd9ceacccac010000 REX.W movq rbx,000001ACCCACCED9    ;; object: 000001ACCCACCED9 <SharedFunctionInfo zero>
0000025B1A6C4C31  1265  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4C38  1272  e88386f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4C3D  1277  48898528fbffff REX.W movq [rbp-0x4d8],rax
0000025B1A6C4C44  1284  48bb99cfacccac010000 REX.W movq rbx,000001ACCCACCF99    ;; object: 000001ACCCACCF99 <SharedFunctionInfo mov>
0000025B1A6C4C4E  1294  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4C55  1301  e86686f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4C5A  1306  48898520fbffff REX.W movq [rbp-0x4e0],rax
0000025B1A6C4C61  1313  48bb59d0acccac010000 REX.W movq rbx,000001ACCCACD059    ;; object: 000001ACCCACD059 <SharedFunctionInfo set>
0000025B1A6C4C6B  1323  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4C72  1330  e84986f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4C77  1335  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4C7E  1342  488982ff000000 REX.W movq [rdx+0xff],rax
0000025B1A6C4C85  1349  a801           test al,0x1
0000025B1A6C4C87  1351  0f8428000000   jz 1397  (0000025B1A6C4CB5)
0000025B1A6C4C8D  1357  488d9aff000000 REX.W leaq rbx,[rdx+0xff]
0000025B1A6C4C94  1364  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C4C9A  1370  f6400802       testb [rax+0x8],0x2
0000025B1A6C4C9E  1374  7415           jz 1397  (0000025B1A6C4CB5)
0000025B1A6C4CA0  1376  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C4CA7  1383  4823c2         REX.W andq rax,rdx
0000025B1A6C4CAA  1386  f6400804       testb [rax+0x8],0x4
0000025B1A6C4CAE  1390  7405           jz 1397  (0000025B1A6C4CB5)
0000025B1A6C4CB0  1392  e8abcaffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4CB5  1397  48bb19d1acccac010000 REX.W movq rbx,000001ACCCACD119    ;; object: 000001ACCCACD119 <SharedFunctionInfo and>
0000025B1A6C4CBF  1407  488bf2         REX.W movq rsi,rdx
0000025B1A6C4CC2  1410  e8f985f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4CC7  1415  48898518fbffff REX.W movq [rbp-0x4e8],rax
0000025B1A6C4CCE  1422  48bbd9d1acccac010000 REX.W movq rbx,000001ACCCACD1D9    ;; object: 000001ACCCACD1D9 <SharedFunctionInfo or>
0000025B1A6C4CD8  1432  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4CDF  1439  e8dc85f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4CE4  1444  48898510fbffff REX.W movq [rbp-0x4f0],rax
0000025B1A6C4CEB  1451  48bb99d2acccac010000 REX.W movq rbx,000001ACCCACD299    ;; object: 000001ACCCACD299 <SharedFunctionInfo xor>
0000025B1A6C4CF5  1461  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4CFC  1468  e8bf85f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4D01  1473  48898508fbffff REX.W movq [rbp-0x4f8],rax
0000025B1A6C4D08  1480  48bb59d3acccac010000 REX.W movq rbx,000001ACCCACD359    ;; object: 000001ACCCACD359 <SharedFunctionInfo shl>
0000025B1A6C4D12  1490  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4D19  1497  e8a285f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4D1E  1502  48898500fbffff REX.W movq [rbp-0x500],rax
0000025B1A6C4D25  1509  48bb19d4acccac010000 REX.W movq rbx,000001ACCCACD419    ;; object: 000001ACCCACD419 <SharedFunctionInfo shr>
0000025B1A6C4D2F  1519  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4D36  1526  e88585f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4D3B  1531  488985f8faffff REX.W movq [rbp-0x508],rax
0000025B1A6C4D42  1538  48bbd9d4acccac010000 REX.W movq rbx,000001ACCCACD4D9    ;; object: 000001ACCCACD4D9 <SharedFunctionInfo lsb>
0000025B1A6C4D4C  1548  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4D53  1555  e86885f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4D58  1560  488985f0faffff REX.W movq [rbp-0x510],rax
0000025B1A6C4D5F  1567  48bb99d5acccac010000 REX.W movq rbx,000001ACCCACD599    ;; object: 000001ACCCACD599 <SharedFunctionInfo clsb>
0000025B1A6C4D69  1577  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4D70  1584  e84b85f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4D75  1589  488985e8faffff REX.W movq [rbp-0x518],rax
0000025B1A6C4D7C  1596  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4D86  1606  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4D8D  1613  48899a07010000 REX.W movq [rdx+0x107],rbx
0000025B1A6C4D94  1620  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4D9E  1630  48899a0f010000 REX.W movq [rdx+0x10f],rbx
0000025B1A6C4DA5  1637  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4DAF  1647  48899a17010000 REX.W movq [rdx+0x117],rbx
0000025B1A6C4DB6  1654  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4DC0  1664  48899a1f010000 REX.W movq [rdx+0x11f],rbx
0000025B1A6C4DC7  1671  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4DD1  1681  48899a27010000 REX.W movq [rdx+0x127],rbx
0000025B1A6C4DD8  1688  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4DE2  1698  48899a2f010000 REX.W movq [rdx+0x12f],rbx
0000025B1A6C4DE9  1705  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4DF3  1715  48899a37010000 REX.W movq [rdx+0x137],rbx
0000025B1A6C4DFA  1722  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E04  1732  48899a3f010000 REX.W movq [rdx+0x13f],rbx
0000025B1A6C4E0B  1739  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E15  1749  48899a47010000 REX.W movq [rdx+0x147],rbx
0000025B1A6C4E1C  1756  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E26  1766  48899a4f010000 REX.W movq [rdx+0x14f],rbx
0000025B1A6C4E2D  1773  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E37  1783  48899a57010000 REX.W movq [rdx+0x157],rbx
0000025B1A6C4E3E  1790  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E48  1800  48899a5f010000 REX.W movq [rdx+0x15f],rbx
0000025B1A6C4E4F  1807  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E59  1817  48899a67010000 REX.W movq [rdx+0x167],rbx
0000025B1A6C4E60  1824  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E6A  1834  48899a6f010000 REX.W movq [rdx+0x16f],rbx
0000025B1A6C4E71  1841  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E7B  1851  48899a77010000 REX.W movq [rdx+0x177],rbx
0000025B1A6C4E82  1858  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E8C  1868  48899a7f010000 REX.W movq [rdx+0x17f],rbx
0000025B1A6C4E93  1875  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4E9D  1885  48899a87010000 REX.W movq [rdx+0x187],rbx
0000025B1A6C4EA4  1892  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4EAE  1902  48899a8f010000 REX.W movq [rdx+0x18f],rbx
0000025B1A6C4EB5  1909  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4EBF  1919  48899a97010000 REX.W movq [rdx+0x197],rbx
0000025B1A6C4EC6  1926  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4ED0  1936  48899a9f010000 REX.W movq [rdx+0x19f],rbx
0000025B1A6C4ED7  1943  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4EE1  1953  48899aa7010000 REX.W movq [rdx+0x1a7],rbx
0000025B1A6C4EE8  1960  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4EF2  1970  48899aaf010000 REX.W movq [rdx+0x1af],rbx
0000025B1A6C4EF9  1977  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4F03  1987  48899ab7010000 REX.W movq [rdx+0x1b7],rbx
0000025B1A6C4F0A  1994  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4F14  2004  48899abf010000 REX.W movq [rdx+0x1bf],rbx
0000025B1A6C4F1B  2011  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4F25  2021  48899ac7010000 REX.W movq [rdx+0x1c7],rbx
0000025B1A6C4F2C  2028  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4F36  2038  48899acf010000 REX.W movq [rdx+0x1cf],rbx
0000025B1A6C4F3D  2045  48bb194500ee9d030000 REX.W movq rbx,0000039DEE004519    ;; object: 0000039DEE004519 <the hole>
0000025B1A6C4F47  2055  48899ad7010000 REX.W movq [rdx+0x1d7],rbx
0000025B1A6C4F4E  2062  49ba59d6acccac010000 REX.W movq r10,000001ACCCACD659    ;; object: 000001ACCCACD659 <SharedFunctionInfo s_str>
0000025B1A6C4F58  2072  4152           push r10
0000025B1A6C4F5A  2074  488bf2         REX.W movq rsi,rdx
0000025B1A6C4F5D  2077  b801000000     movl rax,0000000000000001
0000025B1A6C4F62  2082  48bbd015cfe9f77f0000 REX.W movq rbx,00007FF7E9CF15D0
0000025B1A6C4F6C  2092  e8ef10f4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C4F71  2097  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C4F78  2104  488982df010000 REX.W movq [rdx+0x1df],rax
0000025B1A6C4F7F  2111  a801           test al,0x1
0000025B1A6C4F81  2113  0f8428000000   jz 2159  (0000025B1A6C4FAF)
0000025B1A6C4F87  2119  488d9adf010000 REX.W leaq rbx,[rdx+0x1df]
0000025B1A6C4F8E  2126  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C4F94  2132  f6400802       testb [rax+0x8],0x2
0000025B1A6C4F98  2136  7415           jz 2159  (0000025B1A6C4FAF)
0000025B1A6C4F9A  2138  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C4FA1  2145  4823c2         REX.W andq rax,rdx
0000025B1A6C4FA4  2148  f6400804       testb [rax+0x8],0x4
0000025B1A6C4FA8  2152  7405           jz 2159  (0000025B1A6C4FAF)
0000025B1A6C4FAA  2154  e8b1c7ffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C4FAF  2159  48bb19d7acccac010000 REX.W movq rbx,000001ACCCACD719    ;; object: 000001ACCCACD719 <SharedFunctionInfo color>
0000025B1A6C4FB9  2169  488bf2         REX.W movq rsi,rdx
0000025B1A6C4FBC  2172  e8ff82f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4FC1  2177  488985e0faffff REX.W movq [rbp-0x520],rax
0000025B1A6C4FC8  2184  48bbd9d7acccac010000 REX.W movq rbx,000001ACCCACD7D9    ;; object: 000001ACCCACD7D9 <SharedFunctionInfo sliding>
0000025B1A6C4FD2  2194  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4FD9  2201  e8e282f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4FDE  2206  488985d8faffff REX.W movq [rbp-0x528],rax
0000025B1A6C4FE5  2213  48bb99d8acccac010000 REX.W movq rbx,000001ACCCACD899    ;; object: 000001ACCCACD899 <SharedFunctionInfo enemy>
0000025B1A6C4FEF  2223  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C4FF6  2230  e8c582f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C4FFB  2235  488985d0faffff REX.W movq [rbp-0x530],rax
0000025B1A6C5002  2242  49ba59d9acccac010000 REX.W movq r10,000001ACCCACD959    ;; object: 000001ACCCACD959 <SharedFunctionInfo p_str>
0000025B1A6C500C  2252  4152           push r10
0000025B1A6C500E  2254  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5015  2261  b801000000     movl rax,0000000000000001
0000025B1A6C501A  2266  48bbd015cfe9f77f0000 REX.W movq rbx,00007FF7E9CF15D0
0000025B1A6C5024  2276  e83710f4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C5029  2281  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C5030  2288  488982e7010000 REX.W movq [rdx+0x1e7],rax
0000025B1A6C5037  2295  a801           test al,0x1
0000025B1A6C5039  2297  0f8428000000   jz 2343  (0000025B1A6C5067)
0000025B1A6C503F  2303  488d9ae7010000 REX.W leaq rbx,[rdx+0x1e7]
0000025B1A6C5046  2310  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C504C  2316  f6400802       testb [rax+0x8],0x2
0000025B1A6C5050  2320  7415           jz 2343  (0000025B1A6C5067)
0000025B1A6C5052  2322  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5059  2329  4823c2         REX.W andq rax,rdx
0000025B1A6C505C  2332  f6400804       testb [rax+0x8],0x4
0000025B1A6C5060  2336  7405           jz 2343  (0000025B1A6C5067)
0000025B1A6C5062  2338  e8f9c6ffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C5067  2343  48bb19daacccac010000 REX.W movq rbx,000001ACCCACDA19    ;; object: 000001ACCCACDA19 <SharedFunctionInfo piece>
0000025B1A6C5071  2353  488bf2         REX.W movq rsi,rdx
0000025B1A6C5074  2356  e84782f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C5079  2361  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C5080  2368  488982ef010000 REX.W movq [rdx+0x1ef],rax
0000025B1A6C5087  2375  a801           test al,0x1
0000025B1A6C5089  2377  0f8428000000   jz 2423  (0000025B1A6C50B7)
0000025B1A6C508F  2383  488d9aef010000 REX.W leaq rbx,[rdx+0x1ef]
0000025B1A6C5096  2390  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C509C  2396  f6400802       testb [rax+0x8],0x2
0000025B1A6C50A0  2400  7415           jz 2423  (0000025B1A6C50B7)
0000025B1A6C50A2  2402  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C50A9  2409  4823c2         REX.W andq rax,rdx
0000025B1A6C50AC  2412  f6400804       testb [rax+0x8],0x4
0000025B1A6C50B0  2416  7405           jz 2423  (0000025B1A6C50B7)
0000025B1A6C50B2  2418  e8a9c6ffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C50B7  2423  48bbd9daacccac010000 REX.W movq rbx,000001ACCCACDAD9    ;; object: 000001ACCCACDAD9 <SharedFunctionInfo captures>
0000025B1A6C50C1  2433  488bf2         REX.W movq rsi,rdx
0000025B1A6C50C4  2436  e8f781f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C50C9  2441  488985c8faffff REX.W movq [rbp-0x538],rax
0000025B1A6C50D0  2448  48bb99dbacccac010000 REX.W movq rbx,000001ACCCACDB99    ;; object: 000001ACCCACDB99 <SharedFunctionInfo promotes>
0000025B1A6C50DA  2458  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C50E1  2465  e8da81f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C50E6  2470  488985c0faffff REX.W movq [rbp-0x540],rax
0000025B1A6C50ED  2477  48bb59dcacccac010000 REX.W movq rbx,000001ACCCACDC59    ;; object: 000001ACCCACDC59 <SharedFunctionInfo castles>
0000025B1A6C50F7  2487  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C50FE  2494  e8bd81f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C5103  2499  488985b8faffff REX.W movq [rbp-0x548],rax
0000025B1A6C510A  2506  48bb19ddacccac010000 REX.W movq rbx,000001ACCCACDD19    ;; object: 000001ACCCACDD19 <SharedFunctionInfo push_move>
0000025B1A6C5114  2516  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C511B  2523  e8a081f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C5120  2528  488985b0faffff REX.W movq [rbp-0x550],rax
0000025B1A6C5127  2535  48bbd9ddacccac010000 REX.W movq rbx,000001ACCCACDDD9    ;; object: 000001ACCCACDDD9 <SharedFunctionInfo load_move>
0000025B1A6C5131  2545  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5138  2552  e88381f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C513D  2557  488985a8faffff REX.W movq [rbp-0x558],rax
0000025B1A6C5144  2564  48bb99deacccac010000 REX.W movq rbx,000001ACCCACDE99    ;; object: 000001ACCCACDE99 <SharedFunctionInfo at>
0000025B1A6C514E  2574  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5155  2581  e86681f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C515A  2586  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5161  2593  488983f7010000 REX.W movq [rbx+0x1f7],rax
0000025B1A6C5168  2600  a801           test al,0x1
0000025B1A6C516A  2602  0f8428000000   jz 2648  (0000025B1A6C5198)
0000025B1A6C5170  2608  488d93f7010000 REX.W leaq rdx,[rbx+0x1f7]
0000025B1A6C5177  2615  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C517D  2621  f6400802       testb [rax+0x8],0x2
0000025B1A6C5181  2625  7415           jz 2648  (0000025B1A6C5198)
0000025B1A6C5183  2627  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C518A  2634  4823c3         REX.W andq rax,rbx
0000025B1A6C518D  2637  f6400804       testb [rax+0x8],0x4
0000025B1A6C5191  2641  7405           jz 2648  (0000025B1A6C5198)
0000025B1A6C5193  2643  e8e8ceffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C5198  2648  49ba59dfacccac010000 REX.W movq r10,000001ACCCACDF59    ;; object: 000001ACCCACDF59 <SharedFunctionInfo c_str>
0000025B1A6C51A2  2658  4152           push r10
0000025B1A6C51A4  2660  488bf3         REX.W movq rsi,rbx
0000025B1A6C51A7  2663  b801000000     movl rax,0000000000000001
0000025B1A6C51AC  2668  48bbd015cfe9f77f0000 REX.W movq rbx,00007FF7E9CF15D0
0000025B1A6C51B6  2678  e8a50ef4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C51BB  2683  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C51C2  2690  488983ff010000 REX.W movq [rbx+0x1ff],rax
0000025B1A6C51C9  2697  a801           test al,0x1
0000025B1A6C51CB  2699  0f8428000000   jz 2745  (0000025B1A6C51F9)
0000025B1A6C51D1  2705  488d93ff010000 REX.W leaq rdx,[rbx+0x1ff]
0000025B1A6C51D8  2712  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C51DE  2718  f6400802       testb [rax+0x8],0x2
0000025B1A6C51E2  2722  7415           jz 2745  (0000025B1A6C51F9)
0000025B1A6C51E4  2724  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C51EB  2731  4823c3         REX.W andq rax,rbx
0000025B1A6C51EE  2734  f6400804       testb [rax+0x8],0x4
0000025B1A6C51F2  2738  7405           jz 2745  (0000025B1A6C51F9)
0000025B1A6C51F4  2740  e887ceffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C51F9  2745  49ba19e0acccac010000 REX.W movq r10,000001ACCCACE019    ;; object: 000001ACCCACE019 <SharedFunctionInfo str>
0000025B1A6C5203  2755  4152           push r10
0000025B1A6C5205  2757  488bf3         REX.W movq rsi,rbx
0000025B1A6C5208  2760  b801000000     movl rax,0000000000000001
0000025B1A6C520D  2765  48bbd015cfe9f77f0000 REX.W movq rbx,00007FF7E9CF15D0
0000025B1A6C5217  2775  e8440ef4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C521C  2780  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5223  2787  48898307020000 REX.W movq [rbx+0x207],rax
0000025B1A6C522A  2794  a801           test al,0x1
0000025B1A6C522C  2796  0f8428000000   jz 2842  (0000025B1A6C525A)
0000025B1A6C5232  2802  488d9307020000 REX.W leaq rdx,[rbx+0x207]
0000025B1A6C5239  2809  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C523F  2815  f6400802       testb [rax+0x8],0x2
0000025B1A6C5243  2819  7415           jz 2842  (0000025B1A6C525A)
0000025B1A6C5245  2821  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C524C  2828  4823c3         REX.W andq rax,rbx
0000025B1A6C524F  2831  f6400804       testb [rax+0x8],0x4
0000025B1A6C5253  2835  7405           jz 2842  (0000025B1A6C525A)
0000025B1A6C5255  2837  e826ceffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C525A  2842  49bad9e0acccac010000 REX.W movq r10,000001ACCCACE0D9    ;; object: 000001ACCCACE0D9 <SharedFunctionInfo dump_board>
0000025B1A6C5264  2852  4152           push r10
0000025B1A6C5266  2854  488bf3         REX.W movq rsi,rbx
0000025B1A6C5269  2857  b801000000     movl rax,0000000000000001
0000025B1A6C526E  2862  48bbd015cfe9f77f0000 REX.W movq rbx,00007FF7E9CF15D0
0000025B1A6C5278  2872  e8e30df4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C527D  2877  488985a0faffff REX.W movq [rbp-0x560],rax
0000025B1A6C5284  2884  48bb99e1acccac010000 REX.W movq rbx,000001ACCCACE199    ;; object: 000001ACCCACE199 <SharedFunctionInfo place>
0000025B1A6C528E  2894  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5295  2901  e82680f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C529A  2906  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C52A1  2913  4889820f020000 REX.W movq [rdx+0x20f],rax
0000025B1A6C52A8  2920  a801           test al,0x1
0000025B1A6C52AA  2922  0f8428000000   jz 2968  (0000025B1A6C52D8)
0000025B1A6C52B0  2928  488d9a0f020000 REX.W leaq rbx,[rdx+0x20f]
0000025B1A6C52B7  2935  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C52BD  2941  f6400802       testb [rax+0x8],0x2
0000025B1A6C52C1  2945  7415           jz 2968  (0000025B1A6C52D8)
0000025B1A6C52C3  2947  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C52CA  2954  4823c2         REX.W andq rax,rdx
0000025B1A6C52CD  2957  f6400804       testb [rax+0x8],0x4
0000025B1A6C52D1  2961  7405           jz 2968  (0000025B1A6C52D8)
0000025B1A6C52D3  2963  e888c4ffff     call 0000025B1A6C1760    ;; code: STUB, RecordWriteStub, minor: 8962
0000025B1A6C52D8  2968  48bb59e2acccac010000 REX.W movq rbx,000001ACCCACE259    ;; object: 000001ACCCACE259 <SharedFunctionInfo set_board>
0000025B1A6C52E2  2978  488bf2         REX.W movq rsi,rdx
0000025B1A6C52E5  2981  e8d67ff6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C52EA  2986  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C52F1  2993  48898317020000 REX.W movq [rbx+0x217],rax
0000025B1A6C52F8  3000  a801           test al,0x1
0000025B1A6C52FA  3002  0f8428000000   jz 3048  (0000025B1A6C5328)
0000025B1A6C5300  3008  488d9317020000 REX.W leaq rdx,[rbx+0x217]
0000025B1A6C5307  3015  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C530D  3021  f6400802       testb [rax+0x8],0x2
0000025B1A6C5311  3025  7415           jz 3048  (0000025B1A6C5328)
0000025B1A6C5313  3027  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C531A  3034  4823c3         REX.W andq rax,rbx
0000025B1A6C531D  3037  f6400804       testb [rax+0x8],0x4
0000025B1A6C5321  3041  7405           jz 3048  (0000025B1A6C5328)
0000025B1A6C5323  3043  e858cdffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C5328  3048  49ba19e3acccac010000 REX.W movq r10,000001ACCCACE319    ;; object: 000001ACCCACE319 <SharedFunctionInfo reset>
0000025B1A6C5332  3058  4152           push r10
0000025B1A6C5334  3060  488bf3         REX.W movq rsi,rbx
0000025B1A6C5337  3063  b801000000     movl rax,0000000000000001
0000025B1A6C533C  3068  48bbd015cfe9f77f0000 REX.W movq rbx,00007FF7E9CF15D0
0000025B1A6C5346  3078  e8150df4ff     call 0000025B1A606060    ;; code: STUB, CEntryStub, minor: 4
0000025B1A6C534B  3083  48898598faffff REX.W movq [rbp-0x568],rax
0000025B1A6C5352  3090  488bd8         REX.W movq rbx,rax
0000025B1A6C5355  3093  33c0           xorl rax,rax
0000025B1A6C5357  3095  488b8d60fbffff REX.W movq rcx,[rbp-0x4a0]
0000025B1A6C535E  3102  4889412f       REX.W movq [rcx+0x2f],rax
0000025B1A6C5362  3106  a801           test al,0x1
0000025B1A6C5364  3108  0f8425000000   jz 3151  (0000025B1A6C538F)
0000025B1A6C536A  3114  488d512f       REX.W leaq rdx,[rcx+0x2f]
0000025B1A6C536E  3118  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5374  3124  f6400802       testb [rax+0x8],0x2
0000025B1A6C5378  3128  7415           jz 3151  (0000025B1A6C538F)
0000025B1A6C537A  3130  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5381  3137  4823c1         REX.W andq rax,rcx
0000025B1A6C5384  3140  f6400804       testb [rax+0x8],0x4
0000025B1A6C5388  3144  7405           jz 3151  (0000025B1A6C538F)
0000025B1A6C538A  3146  e8f1d5ffff     call 0000025B1A6C2980    ;; code: STUB, RecordWriteStub, minor: 8705
0000025B1A6C538F  3151  48b80000000001000000 REX.W movq rax,0000000100000000
0000025B1A6C5399  3161  48894137       REX.W movq [rcx+0x37],rax
0000025B1A6C539D  3165  a801           test al,0x1
0000025B1A6C539F  3167  0f8425000000   jz 3210  (0000025B1A6C53CA)
0000025B1A6C53A5  3173  488d5137       REX.W leaq rdx,[rcx+0x37]
0000025B1A6C53A9  3177  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C53AF  3183  f6400802       testb [rax+0x8],0x2
0000025B1A6C53B3  3187  7415           jz 3210  (0000025B1A6C53CA)
0000025B1A6C53B5  3189  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C53BC  3196  4823c1         REX.W andq rax,rcx
0000025B1A6C53BF  3199  f6400804       testb [rax+0x8],0x4
0000025B1A6C53C3  3203  7405           jz 3210  (0000025B1A6C53CA)
0000025B1A6C53C5  3205  e8b6d5ffff     call 0000025B1A6C2980    ;; code: STUB, RecordWriteStub, minor: 8705
0000025B1A6C53CA  3210  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C53D4  3220  4152           push r10
0000025B1A6C53D6  3222  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C53E0  3232  4152           push r10
0000025B1A6C53E2  3234  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C53EC  3244  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C53F6  3254  b801000000     movl rax,0000000000000001
0000025B1A6C53FB  3259  488bf1         REX.W movq rsi,rcx
0000025B1A6C53FE  3262  488bfa         REX.W movq rdi,rdx
0000025B1A6C5401  3265  e8da8ef5ff     call Construct  (0000025B1A61E2E0)    ;; code: BUILTIN
0000025B1A6C5406  3270  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C540D  3277  4889433f       REX.W movq [rbx+0x3f],rax
0000025B1A6C5411  3281  a801           test al,0x1
0000025B1A6C5413  3283  0f8425000000   jz 3326  (0000025B1A6C543E)
0000025B1A6C5419  3289  488d533f       REX.W leaq rdx,[rbx+0x3f]
0000025B1A6C541D  3293  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5423  3299  f6400802       testb [rax+0x8],0x2
0000025B1A6C5427  3303  7415           jz 3326  (0000025B1A6C543E)
0000025B1A6C5429  3305  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5430  3312  4823c3         REX.W andq rax,rbx
0000025B1A6C5433  3315  f6400804       testb [rax+0x8],0x4
0000025B1A6C5437  3319  7405           jz 3326  (0000025B1A6C543E)
0000025B1A6C5439  3321  e842ccffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C543E  3326  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 372
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5448  3336  4152           push r10
0000025B1A6C544A  3338  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C5454  3348  4152           push r10
0000025B1A6C5456  3350  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5460  3360  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C546A  3370  b801000000     movl rax,0000000000000001
0000025B1A6C546F  3375  488bf3         REX.W movq rsi,rbx
0000025B1A6C5472  3378  488bfa         REX.W movq rdi,rdx
0000025B1A6C5475  3381  e8668ef5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 372
                                                             ;; code: BUILTIN
0000025B1A6C547A  3386  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5481  3393  48894347       REX.W movq [rbx+0x47],rax
0000025B1A6C5485  3397  a801           test al,0x1
0000025B1A6C5487  3399  0f8425000000   jz 3442  (0000025B1A6C54B2)
0000025B1A6C548D  3405  488d5347       REX.W leaq rdx,[rbx+0x47]
0000025B1A6C5491  3409  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5497  3415  f6400802       testb [rax+0x8],0x2
0000025B1A6C549B  3419  7415           jz 3442  (0000025B1A6C54B2)
0000025B1A6C549D  3421  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C54A4  3428  4823c3         REX.W andq rax,rbx
0000025B1A6C54A7  3431  f6400804       testb [rax+0x8],0x4
0000025B1A6C54AB  3435  7405           jz 3442  (0000025B1A6C54B2)
0000025B1A6C54AD  3437  e8cecbffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C54B2  3442  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 402
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C54BC  3452  4152           push r10
0000025B1A6C54BE  3454  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C54C8  3464  4152           push r10
0000025B1A6C54CA  3466  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C54D4  3476  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C54DE  3486  b801000000     movl rax,0000000000000001
0000025B1A6C54E3  3491  488bf3         REX.W movq rsi,rbx
0000025B1A6C54E6  3494  488bfa         REX.W movq rdi,rdx
0000025B1A6C54E9  3497  e8f28df5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 402
                                                             ;; code: BUILTIN
0000025B1A6C54EE  3502  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C54F5  3509  4889434f       REX.W movq [rbx+0x4f],rax
0000025B1A6C54F9  3513  a801           test al,0x1
0000025B1A6C54FB  3515  0f8425000000   jz 3558  (0000025B1A6C5526)
0000025B1A6C5501  3521  488d534f       REX.W leaq rdx,[rbx+0x4f]
0000025B1A6C5505  3525  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C550B  3531  f6400802       testb [rax+0x8],0x2
0000025B1A6C550F  3535  7415           jz 3558  (0000025B1A6C5526)
0000025B1A6C5511  3537  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5518  3544  4823c3         REX.W andq rax,rbx
0000025B1A6C551B  3547  f6400804       testb [rax+0x8],0x4
0000025B1A6C551F  3551  7405           jz 3558  (0000025B1A6C5526)
0000025B1A6C5521  3553  e85acbffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C5526  3558  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 432
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5530  3568  4152           push r10
0000025B1A6C5532  3570  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C553C  3580  4152           push r10
0000025B1A6C553E  3582  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5548  3592  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5552  3602  b801000000     movl rax,0000000000000001
0000025B1A6C5557  3607  488bf3         REX.W movq rsi,rbx
0000025B1A6C555A  3610  488bfa         REX.W movq rdi,rdx
0000025B1A6C555D  3613  e87e8df5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 432
                                                             ;; code: BUILTIN
0000025B1A6C5562  3618  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5569  3625  48894357       REX.W movq [rbx+0x57],rax
0000025B1A6C556D  3629  a801           test al,0x1
0000025B1A6C556F  3631  0f8425000000   jz 3674  (0000025B1A6C559A)
0000025B1A6C5575  3637  488d5357       REX.W leaq rdx,[rbx+0x57]
0000025B1A6C5579  3641  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C557F  3647  f6400802       testb [rax+0x8],0x2
0000025B1A6C5583  3651  7415           jz 3674  (0000025B1A6C559A)
0000025B1A6C5585  3653  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C558C  3660  4823c3         REX.W andq rax,rbx
0000025B1A6C558F  3663  f6400804       testb [rax+0x8],0x4
0000025B1A6C5593  3667  7405           jz 3674  (0000025B1A6C559A)
0000025B1A6C5595  3669  e8e6caffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C559A  3674  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 461
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C55A4  3684  4152           push r10
0000025B1A6C55A6  3686  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C55B0  3696  4152           push r10
0000025B1A6C55B2  3698  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C55BC  3708  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C55C6  3718  b801000000     movl rax,0000000000000001
0000025B1A6C55CB  3723  488bf3         REX.W movq rsi,rbx
0000025B1A6C55CE  3726  488bfa         REX.W movq rdi,rdx
0000025B1A6C55D1  3729  e80a8df5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 461
                                                             ;; code: BUILTIN
0000025B1A6C55D6  3734  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C55DD  3741  4889435f       REX.W movq [rbx+0x5f],rax
0000025B1A6C55E1  3745  a801           test al,0x1
0000025B1A6C55E3  3747  0f8425000000   jz 3790  (0000025B1A6C560E)
0000025B1A6C55E9  3753  488d535f       REX.W leaq rdx,[rbx+0x5f]
0000025B1A6C55ED  3757  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C55F3  3763  f6400802       testb [rax+0x8],0x2
0000025B1A6C55F7  3767  7415           jz 3790  (0000025B1A6C560E)
0000025B1A6C55F9  3769  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5600  3776  4823c3         REX.W andq rax,rbx
0000025B1A6C5603  3779  f6400804       testb [rax+0x8],0x4
0000025B1A6C5607  3783  7405           jz 3790  (0000025B1A6C560E)
0000025B1A6C5609  3785  e872caffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C560E  3790  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 490
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5618  3800  4152           push r10
0000025B1A6C561A  3802  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C5624  3812  4152           push r10
0000025B1A6C5626  3814  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5630  3824  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C563A  3834  b801000000     movl rax,0000000000000001
0000025B1A6C563F  3839  488bf3         REX.W movq rsi,rbx
0000025B1A6C5642  3842  488bfa         REX.W movq rdi,rdx
0000025B1A6C5645  3845  e8968cf5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 490
                                                             ;; code: BUILTIN
0000025B1A6C564A  3850  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5651  3857  48894367       REX.W movq [rbx+0x67],rax
0000025B1A6C5655  3861  a801           test al,0x1
0000025B1A6C5657  3863  0f8425000000   jz 3906  (0000025B1A6C5682)
0000025B1A6C565D  3869  488d5367       REX.W leaq rdx,[rbx+0x67]
0000025B1A6C5661  3873  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5667  3879  f6400802       testb [rax+0x8],0x2
0000025B1A6C566B  3883  7415           jz 3906  (0000025B1A6C5682)
0000025B1A6C566D  3885  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5674  3892  4823c3         REX.W andq rax,rbx
0000025B1A6C5677  3895  f6400804       testb [rax+0x8],0x4
0000025B1A6C567B  3899  7405           jz 3906  (0000025B1A6C5682)
0000025B1A6C567D  3901  e8fec9ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C5682  3906  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 519
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C568C  3916  4152           push r10
0000025B1A6C568E  3918  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C5698  3928  4152           push r10
0000025B1A6C569A  3930  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C56A4  3940  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C56AE  3950  b801000000     movl rax,0000000000000001
0000025B1A6C56B3  3955  488bf3         REX.W movq rsi,rbx
0000025B1A6C56B6  3958  488bfa         REX.W movq rdi,rdx
0000025B1A6C56B9  3961  e8228cf5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 519
                                                             ;; code: BUILTIN
0000025B1A6C56BE  3966  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C56C5  3973  4889436f       REX.W movq [rbx+0x6f],rax
0000025B1A6C56C9  3977  a801           test al,0x1
0000025B1A6C56CB  3979  0f8425000000   jz 4022  (0000025B1A6C56F6)
0000025B1A6C56D1  3985  488d536f       REX.W leaq rdx,[rbx+0x6f]
0000025B1A6C56D5  3989  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C56DB  3995  f6400802       testb [rax+0x8],0x2
0000025B1A6C56DF  3999  7415           jz 4022  (0000025B1A6C56F6)
0000025B1A6C56E1  4001  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C56E8  4008  4823c3         REX.W andq rax,rbx
0000025B1A6C56EB  4011  f6400804       testb [rax+0x8],0x4
0000025B1A6C56EF  4015  7405           jz 4022  (0000025B1A6C56F6)
0000025B1A6C56F1  4017  e88ac9ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C56F6  4022  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 548
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5700  4032  4152           push r10
0000025B1A6C5702  4034  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C570C  4044  4152           push r10
0000025B1A6C570E  4046  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5718  4056  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5722  4066  b801000000     movl rax,0000000000000001
0000025B1A6C5727  4071  488bf3         REX.W movq rsi,rbx
0000025B1A6C572A  4074  488bfa         REX.W movq rdi,rdx
0000025B1A6C572D  4077  e8ae8bf5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 548
                                                             ;; code: BUILTIN
0000025B1A6C5732  4082  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5739  4089  48894377       REX.W movq [rbx+0x77],rax
0000025B1A6C573D  4093  a801           test al,0x1
0000025B1A6C573F  4095  0f8425000000   jz 4138  (0000025B1A6C576A)
0000025B1A6C5745  4101  488d5377       REX.W leaq rdx,[rbx+0x77]
0000025B1A6C5749  4105  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C574F  4111  f6400802       testb [rax+0x8],0x2
0000025B1A6C5753  4115  7415           jz 4138  (0000025B1A6C576A)
0000025B1A6C5755  4117  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C575C  4124  4823c3         REX.W andq rax,rbx
0000025B1A6C575F  4127  f6400804       testb [rax+0x8],0x4
0000025B1A6C5763  4131  7405           jz 4138  (0000025B1A6C576A)
0000025B1A6C5765  4133  e816c9ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C576A  4138  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 577
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5774  4148  4152           push r10
0000025B1A6C5776  4150  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C5780  4160  4152           push r10
0000025B1A6C5782  4162  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C578C  4172  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5796  4182  b801000000     movl rax,0000000000000001
0000025B1A6C579B  4187  488bf3         REX.W movq rsi,rbx
0000025B1A6C579E  4190  488bfa         REX.W movq rdi,rdx
0000025B1A6C57A1  4193  e83a8bf5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 577
                                                             ;; code: BUILTIN
0000025B1A6C57A6  4198  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C57AD  4205  4889437f       REX.W movq [rbx+0x7f],rax
0000025B1A6C57B1  4209  a801           test al,0x1
0000025B1A6C57B3  4211  0f8425000000   jz 4254  (0000025B1A6C57DE)
0000025B1A6C57B9  4217  488d537f       REX.W leaq rdx,[rbx+0x7f]
0000025B1A6C57BD  4221  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C57C3  4227  f6400802       testb [rax+0x8],0x2
0000025B1A6C57C7  4231  7415           jz 4254  (0000025B1A6C57DE)
0000025B1A6C57C9  4233  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C57D0  4240  4823c3         REX.W andq rax,rbx
0000025B1A6C57D3  4243  f6400804       testb [rax+0x8],0x4
0000025B1A6C57D7  4247  7405           jz 4254  (0000025B1A6C57DE)
0000025B1A6C57D9  4249  e8a2c8ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C57DE  4254  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 606
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C57E8  4264  4152           push r10
0000025B1A6C57EA  4266  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C57F4  4276  4152           push r10
0000025B1A6C57F6  4278  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5800  4288  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C580A  4298  b801000000     movl rax,0000000000000001
0000025B1A6C580F  4303  488bf3         REX.W movq rsi,rbx
0000025B1A6C5812  4306  488bfa         REX.W movq rdi,rdx
0000025B1A6C5815  4309  e8c68af5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 606
                                                             ;; code: BUILTIN
0000025B1A6C581A  4314  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5821  4321  48898387000000 REX.W movq [rbx+0x87],rax
0000025B1A6C5828  4328  a801           test al,0x1
0000025B1A6C582A  4330  0f8428000000   jz 4376  (0000025B1A6C5858)
0000025B1A6C5830  4336  488d9387000000 REX.W leaq rdx,[rbx+0x87]
0000025B1A6C5837  4343  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C583D  4349  f6400802       testb [rax+0x8],0x2
0000025B1A6C5841  4353  7415           jz 4376  (0000025B1A6C5858)
0000025B1A6C5843  4355  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C584A  4362  4823c3         REX.W andq rax,rbx
0000025B1A6C584D  4365  f6400804       testb [rax+0x8],0x4
0000025B1A6C5851  4369  7405           jz 4376  (0000025B1A6C5858)
0000025B1A6C5853  4371  e828c8ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C5858  4376  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 635
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5862  4386  4152           push r10
0000025B1A6C5864  4388  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C586E  4398  4152           push r10
0000025B1A6C5870  4400  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C587A  4410  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C5884  4420  b801000000     movl rax,0000000000000001
0000025B1A6C5889  4425  488bf3         REX.W movq rsi,rbx
0000025B1A6C588C  4428  488bfa         REX.W movq rdi,rdx
0000025B1A6C588F  4431  e84c8af5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 635
                                                             ;; code: BUILTIN
0000025B1A6C5894  4436  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C589B  4443  4889838f000000 REX.W movq [rbx+0x8f],rax
0000025B1A6C58A2  4450  a801           test al,0x1
0000025B1A6C58A4  4452  0f8428000000   jz 4498  (0000025B1A6C58D2)
0000025B1A6C58AA  4458  488d938f000000 REX.W leaq rdx,[rbx+0x8f]
0000025B1A6C58B1  4465  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C58B7  4471  f6400802       testb [rax+0x8],0x2
0000025B1A6C58BB  4475  7415           jz 4498  (0000025B1A6C58D2)
0000025B1A6C58BD  4477  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C58C4  4484  4823c3         REX.W andq rax,rbx
0000025B1A6C58C7  4487  f6400804       testb [rax+0x8],0x4
0000025B1A6C58CB  4491  7405           jz 4498  (0000025B1A6C58D2)
0000025B1A6C58CD  4493  e8aec7ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C58D2  4498  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 664
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C58DC  4508  4152           push r10
0000025B1A6C58DE  4510  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C58E8  4520  4152           push r10
0000025B1A6C58EA  4522  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C58F4  4532  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C58FE  4542  b801000000     movl rax,0000000000000001
0000025B1A6C5903  4547  488bf3         REX.W movq rsi,rbx
0000025B1A6C5906  4550  488bfa         REX.W movq rdi,rdx
0000025B1A6C5909  4553  e8d289f5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 664
                                                             ;; code: BUILTIN
0000025B1A6C590E  4558  488bd8         REX.W movq rbx,rax
0000025B1A6C5911  4561  488b8d60fbffff REX.W movq rcx,[rbp-0x4a0]
0000025B1A6C5918  4568  48899997000000 REX.W movq [rcx+0x97],rbx
0000025B1A6C591F  4575  f6c301         testb rbx,0x1
0000025B1A6C5922  4578  0f8429000000   jz 4625  (0000025B1A6C5951)
0000025B1A6C5928  4584  488d9197000000 REX.W leaq rdx,[rcx+0x97]
0000025B1A6C592F  4591  4881e30000f0ff REX.W andq rbx,0xfffffffffff00000
0000025B1A6C5936  4598  f6430802       testb [rbx+0x8],0x2
0000025B1A6C593A  4602  7415           jz 4625  (0000025B1A6C5951)
0000025B1A6C593C  4604  48c7c30000f0ff REX.W movq rbx,0xfff00000
0000025B1A6C5943  4611  4823d9         REX.W andq rbx,rcx
0000025B1A6C5946  4614  f6430804       testb [rbx+0x8],0x4
0000025B1A6C594A  4618  7405           jz 4625  (0000025B1A6C5951)
0000025B1A6C594C  4620  e86fd9ffff     call 0000025B1A6C32C0    ;; code: STUB, RecordWriteStub, minor: 8753
0000025B1A6C5951  4625  488b999f000000 REX.W movq rbx,[rcx+0x9f]
0000025B1A6C5958  4632  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C595C  4636  0f84a1130000   jz 9667  (0000025B1A6C6D03)
0000025B1A6C5962  4642  488b99a7000000 REX.W movq rbx,[rcx+0xa7]
0000025B1A6C5969  4649  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C596D  4653  0f8495130000   jz 9672  (0000025B1A6C6D08)
0000025B1A6C5973  4659  488b99af000000 REX.W movq rbx,[rcx+0xaf]
0000025B1A6C597A  4666  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C597E  4670  0f8489130000   jz 9677  (0000025B1A6C6D0D)
0000025B1A6C5984  4676  49ba917504ee9d030000 REX.W movq r10,0000039DEE047591    ;; debug: position 988
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C598E  4686  4152           push r10
0000025B1A6C5990  4688  49ba0000000000000100 REX.W movq r10,0001000000000000
0000025B1A6C599A  4698  4152           push r10
0000025B1A6C599C  4700  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C59A6  4710  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C59B0  4720  b801000000     movl rax,0000000000000001
0000025B1A6C59B5  4725  488bf1         REX.W movq rsi,rcx
0000025B1A6C59B8  4728  488bfa         REX.W movq rdi,rdx
0000025B1A6C59BB  4731  e82089f5ff     call Construct  (0000025B1A61E2E0)    ;; code: BUILTIN
0000025B1A6C59C0  4736  48898590faffff REX.W movq [rbp-0x570],rax
0000025B1A6C59C7  4743  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C59CE  4750  488bd0         REX.W movq rdx,rax
0000025B1A6C59D1  4753  0f1f00         nop
0000025B1A6C59D4  4756  48b961c705ee9d030000 REX.W movq rcx,0000039DEE05C761    ;; object: 0000039DEE05C761 <String[3]: map>
0000025B1A6C59DE  4766  48bb41baacccac010000 REX.W movq rbx,000001ACCCACBA41    ;; object: 000001ACCCACBA41 <FixedArray[67]>
0000025B1A6C59E8  4776  48b80000000014000000 REX.W movq rax,0000001400000000
0000025B1A6C59F2  4786  e809e2ffff     call 0000025B1A6C3C00    ;; code: contextual, LOAD_IC, GENERIC
0000025B1A6C59F7  4791  48898588faffff REX.W movq [rbp-0x578],rax
0000025B1A6C59FE  4798  48bbd9e3acccac010000 REX.W movq rbx,000001ACCCACE3D9    ;; object: 000001ACCCACE3D9 <SharedFunctionInfo>
0000025B1A6C5A08  4808  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5A0F  4815  e8ac78f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C5A14  4820  ffb590faffff   push [rbp-0x570]
0000025B1A6C5A1A  4826  50             push rax
0000025B1A6C5A1B  4827  b801000000     movl rax,0000000000000001
0000025B1A6C5A20  4832  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5A27  4839  488bbd88faffff REX.W movq rdi,[rbp-0x578]
0000025B1A6C5A2E  4846  e82d80f5ff     call Call_ReceiverIsNotNullOrUndefined  (0000025B1A61DA60)    ;; code: BUILTIN
0000025B1A6C5A33  4851  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C5A3A  4858  488983b7000000 REX.W movq [rbx+0xb7],rax
0000025B1A6C5A41  4865  a801           test al,0x1
0000025B1A6C5A43  4867  0f8428000000   jz 4913  (0000025B1A6C5A71)
0000025B1A6C5A49  4873  488d93b7000000 REX.W leaq rdx,[rbx+0xb7]
0000025B1A6C5A50  4880  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5A56  4886  f6400802       testb [rax+0x8],0x2
0000025B1A6C5A5A  4890  7415           jz 4913  (0000025B1A6C5A71)
0000025B1A6C5A5C  4892  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5A63  4899  4823c3         REX.W andq rax,rbx
0000025B1A6C5A66  4902  f6400804       testb [rax+0x8],0x4
0000025B1A6C5A6A  4906  7405           jz 4913  (0000025B1A6C5A71)
0000025B1A6C5A6C  4908  e80fc6ffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C5A71  4913  49ba917504ee9d030000 REX.W movq r10,0000039DEE047591    ;; debug: position 1193
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C5A7B  4923  4152           push r10
0000025B1A6C5A7D  4925  49ba0000000000000100 REX.W movq r10,0001000000000000
0000025B1A6C5A87  4935  4152           push r10
0000025B1A6C5A89  4937  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; debug: position 988
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C5A93  4947  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C5A9D  4957  b801000000     movl rax,0000000000000001
0000025B1A6C5AA2  4962  488bf3         REX.W movq rsi,rbx
0000025B1A6C5AA5  4965  488bfa         REX.W movq rdi,rdx
0000025B1A6C5AA8  4968  e83388f5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 1193
                                                             ;; code: BUILTIN
0000025B1A6C5AAD  4973  48898580faffff REX.W movq [rbp-0x580],rax
0000025B1A6C5AB4  4980  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5ABB  4987  488bd0         REX.W movq rdx,rax
0000025B1A6C5ABE  4990  0f1f00         nop
0000025B1A6C5AC1  4993  48b961c705ee9d030000 REX.W movq rcx,0000039DEE05C761    ;; object: 0000039DEE05C761 <String[3]: map>
0000025B1A6C5ACB  5003  48bb41baacccac010000 REX.W movq rbx,000001ACCCACBA41    ;; object: 000001ACCCACBA41 <FixedArray[67]>
0000025B1A6C5AD5  5013  48b80000000019000000 REX.W movq rax,0000001900000000
0000025B1A6C5ADF  5023  e81ce1ffff     call 0000025B1A6C3C00    ;; code: contextual, LOAD_IC, GENERIC
0000025B1A6C5AE4  5028  48898578faffff REX.W movq [rbp-0x588],rax
0000025B1A6C5AEB  5035  48bb99e4acccac010000 REX.W movq rbx,000001ACCCACE499    ;; object: 000001ACCCACE499 <SharedFunctionInfo>
0000025B1A6C5AF5  5045  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5AFC  5052  e8bf77f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C5B01  5057  ffb580faffff   push [rbp-0x580]
0000025B1A6C5B07  5063  50             push rax
0000025B1A6C5B08  5064  b801000000     movl rax,0000000000000001
0000025B1A6C5B0D  5069  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5B14  5076  488bbd78faffff REX.W movq rdi,[rbp-0x588]
0000025B1A6C5B1B  5083  e8407ff5ff     call Call_ReceiverIsNotNullOrUndefined  (0000025B1A61DA60)    ;; code: BUILTIN
0000025B1A6C5B20  5088  488bd8         REX.W movq rbx,rax
0000025B1A6C5B23  5091  488b8d60fbffff REX.W movq rcx,[rbp-0x4a0]
0000025B1A6C5B2A  5098  488999bf000000 REX.W movq [rcx+0xbf],rbx
0000025B1A6C5B31  5105  f6c301         testb rbx,0x1
0000025B1A6C5B34  5108  0f8429000000   jz 5155  (0000025B1A6C5B63)
0000025B1A6C5B3A  5114  488d91bf000000 REX.W leaq rdx,[rcx+0xbf]
0000025B1A6C5B41  5121  4881e30000f0ff REX.W andq rbx,0xfffffffffff00000
0000025B1A6C5B48  5128  f6430802       testb [rbx+0x8],0x2
0000025B1A6C5B4C  5132  7415           jz 5155  (0000025B1A6C5B63)
0000025B1A6C5B4E  5134  48c7c30000f0ff REX.W movq rbx,0xfff00000
0000025B1A6C5B55  5141  4823d9         REX.W andq rbx,rcx
0000025B1A6C5B58  5144  f6430804       testb [rbx+0x8],0x4
0000025B1A6C5B5C  5148  7405           jz 5155  (0000025B1A6C5B63)
0000025B1A6C5B5E  5150  e85dd7ffff     call 0000025B1A6C32C0    ;; code: STUB, RecordWriteStub, minor: 8753
0000025B1A6C5B63  5155  488b99c7000000 REX.W movq rbx,[rcx+0xc7]
0000025B1A6C5B6A  5162  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C5B6E  5166  0f849e110000   jz 9682  (0000025B1A6C6D12)
0000025B1A6C5B74  5172  488b99cf000000 REX.W movq rbx,[rcx+0xcf]
0000025B1A6C5B7B  5179  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C5B7F  5183  0f8492110000   jz 9687  (0000025B1A6C6D17)
0000025B1A6C5B85  5189  49ba917504ee9d030000 REX.W movq r10,0000039DEE047591    ;; debug: position 1684
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C5B8F  5199  4152           push r10
0000025B1A6C5B91  5201  49ba0000000000000100 REX.W movq r10,0001000000000000
0000025B1A6C5B9B  5211  4152           push r10
0000025B1A6C5B9D  5213  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; debug: position 988
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C5BA7  5223  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C5BB1  5233  b801000000     movl rax,0000000000000001
0000025B1A6C5BB6  5238  488bf1         REX.W movq rsi,rcx
0000025B1A6C5BB9  5241  488bfa         REX.W movq rdi,rdx
0000025B1A6C5BBC  5244  e81f87f5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 1684
                                                             ;; code: BUILTIN
0000025B1A6C5BC1  5249  48898570faffff REX.W movq [rbp-0x590],rax
0000025B1A6C5BC8  5256  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5BCF  5263  488bd0         REX.W movq rdx,rax
0000025B1A6C5BD2  5266  0f1f00         nop
0000025B1A6C5BD5  5269  48b961c705ee9d030000 REX.W movq rcx,0000039DEE05C761    ;; object: 0000039DEE05C761 <String[3]: map>
0000025B1A6C5BDF  5279  48bb41baacccac010000 REX.W movq rbx,000001ACCCACBA41    ;; object: 000001ACCCACBA41 <FixedArray[67]>
0000025B1A6C5BE9  5289  48b8000000001e000000 REX.W movq rax,0000001E00000000
0000025B1A6C5BF3  5299  e808e0ffff     call 0000025B1A6C3C00    ;; code: contextual, LOAD_IC, GENERIC
0000025B1A6C5BF8  5304  48898568faffff REX.W movq [rbp-0x598],rax
0000025B1A6C5BFF  5311  48bb59e5acccac010000 REX.W movq rbx,000001ACCCACE559    ;; object: 000001ACCCACE559 <SharedFunctionInfo>
0000025B1A6C5C09  5321  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5C10  5328  e8ab76f6ff     call 0000025B1A62D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
0000025B1A6C5C15  5333  ffb570faffff   push [rbp-0x590]
0000025B1A6C5C1B  5339  50             push rax
0000025B1A6C5C1C  5340  b801000000     movl rax,0000000000000001
0000025B1A6C5C21  5345  488bb560fbffff REX.W movq rsi,[rbp-0x4a0]
0000025B1A6C5C28  5352  488bbd68faffff REX.W movq rdi,[rbp-0x598]
0000025B1A6C5C2F  5359  e82c7ef5ff     call Call_ReceiverIsNotNullOrUndefined  (0000025B1A61DA60)    ;; code: BUILTIN
0000025B1A6C5C34  5364  488bd8         REX.W movq rbx,rax
0000025B1A6C5C37  5367  488b8d60fbffff REX.W movq rcx,[rbp-0x4a0]
0000025B1A6C5C3E  5374  488999d7000000 REX.W movq [rcx+0xd7],rbx
0000025B1A6C5C45  5381  f6c301         testb rbx,0x1
0000025B1A6C5C48  5384  0f8429000000   jz 5431  (0000025B1A6C5C77)
0000025B1A6C5C4E  5390  488d91d7000000 REX.W leaq rdx,[rcx+0xd7]
0000025B1A6C5C55  5397  4881e30000f0ff REX.W andq rbx,0xfffffffffff00000
0000025B1A6C5C5C  5404  f6430802       testb [rbx+0x8],0x2
0000025B1A6C5C60  5408  7415           jz 5431  (0000025B1A6C5C77)
0000025B1A6C5C62  5410  48c7c30000f0ff REX.W movq rbx,0xfff00000
0000025B1A6C5C69  5417  4823d9         REX.W andq rbx,rcx
0000025B1A6C5C6C  5420  f6430804       testb [rbx+0x8],0x4
0000025B1A6C5C70  5424  7405           jz 5431  (0000025B1A6C5C77)
0000025B1A6C5C72  5426  e849d6ffff     call 0000025B1A6C32C0    ;; code: STUB, RecordWriteStub, minor: 8753
0000025B1A6C5C77  5431  488b99df000000 REX.W movq rbx,[rcx+0xdf]
0000025B1A6C5C7E  5438  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C5C82  5442  0f8494100000   jz 9692  (0000025B1A6C6D1C)
0000025B1A6C5C88  5448  488b99e7000000 REX.W movq rbx,[rcx+0xe7]
0000025B1A6C5C8F  5455  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C5C93  5459  0f8488100000   jz 9697  (0000025B1A6C6D21)
0000025B1A6C5C99  5465  488b99ef000000 REX.W movq rbx,[rcx+0xef]
0000025B1A6C5CA0  5472  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C5CA4  5476  0f847c100000   jz 9702  (0000025B1A6C6D26)
0000025B1A6C5CAA  5482  488b99f7000000 REX.W movq rbx,[rcx+0xf7]
0000025B1A6C5CB1  5489  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C5CB5  5493  0f8470100000   jz 9707  (0000025B1A6C6D2B)
0000025B1A6C5CBB  5499  488b99ff000000 REX.W movq rbx,[rcx+0xff]
0000025B1A6C5CC2  5506  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C5CC6  5510  0f8464100000   jz 9712  (0000025B1A6C6D30)
0000025B1A6C5CCC  5516  33c0           xorl rax,rax
0000025B1A6C5CCE  5518  48898107010000 REX.W movq [rcx+0x107],rax
0000025B1A6C5CD5  5525  a801           test al,0x1
0000025B1A6C5CD7  5527  0f8428000000   jz 5573  (0000025B1A6C5D05)
0000025B1A6C5CDD  5533  488d9907010000 REX.W leaq rbx,[rcx+0x107]
0000025B1A6C5CE4  5540  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5CEA  5546  f6400802       testb [rax+0x8],0x2
0000025B1A6C5CEE  5550  7415           jz 5573  (0000025B1A6C5D05)
0000025B1A6C5CF0  5552  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5CF7  5559  4823c1         REX.W andq rax,rcx
0000025B1A6C5CFA  5562  f6400804       testb [rax+0x8],0x4
0000025B1A6C5CFE  5566  7405           jz 5573  (0000025B1A6C5D05)
0000025B1A6C5D00  5568  e8fbe0ffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5D05  5573  48b80000000001000000 REX.W movq rax,0000000100000000
0000025B1A6C5D0F  5583  4889810f010000 REX.W movq [rcx+0x10f],rax
0000025B1A6C5D16  5590  a801           test al,0x1
0000025B1A6C5D18  5592  0f8428000000   jz 5638  (0000025B1A6C5D46)
0000025B1A6C5D1E  5598  488d990f010000 REX.W leaq rbx,[rcx+0x10f]
0000025B1A6C5D25  5605  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5D2B  5611  f6400802       testb [rax+0x8],0x2
0000025B1A6C5D2F  5615  7415           jz 5638  (0000025B1A6C5D46)
0000025B1A6C5D31  5617  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5D38  5624  4823c1         REX.W andq rax,rcx
0000025B1A6C5D3B  5627  f6400804       testb [rax+0x8],0x4
0000025B1A6C5D3F  5631  7405           jz 5638  (0000025B1A6C5D46)
0000025B1A6C5D41  5633  e8bae0ffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5D46  5638  48b80000000002000000 REX.W movq rax,0000000200000000    ;; debug: position 342
0000025B1A6C5D50  5648  48898117010000 REX.W movq [rcx+0x117],rax    ;; debug: position 1684
0000025B1A6C5D57  5655  a801           test al,0x1
0000025B1A6C5D59  5657  0f8428000000   jz 5703  (0000025B1A6C5D87)
0000025B1A6C5D5F  5663  488d9917010000 REX.W leaq rbx,[rcx+0x117]
0000025B1A6C5D66  5670  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5D6C  5676  f6400802       testb [rax+0x8],0x2
0000025B1A6C5D70  5680  7415           jz 5703  (0000025B1A6C5D87)
0000025B1A6C5D72  5682  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5D79  5689  4823c1         REX.W andq rax,rcx
0000025B1A6C5D7C  5692  f6400804       testb [rax+0x8],0x4
0000025B1A6C5D80  5696  7405           jz 5703  (0000025B1A6C5D87)
0000025B1A6C5D82  5698  e879e0ffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5D87  5703  48b80000000003000000 REX.W movq rax,0000000300000000
0000025B1A6C5D91  5713  4889811f010000 REX.W movq [rcx+0x11f],rax
0000025B1A6C5D98  5720  a801           test al,0x1
0000025B1A6C5D9A  5722  0f8428000000   jz 5768  (0000025B1A6C5DC8)
0000025B1A6C5DA0  5728  488d991f010000 REX.W leaq rbx,[rcx+0x11f]
0000025B1A6C5DA7  5735  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5DAD  5741  f6400802       testb [rax+0x8],0x2
0000025B1A6C5DB1  5745  7415           jz 5768  (0000025B1A6C5DC8)
0000025B1A6C5DB3  5747  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5DBA  5754  4823c1         REX.W andq rax,rcx
0000025B1A6C5DBD  5757  f6400804       testb [rax+0x8],0x4
0000025B1A6C5DC1  5761  7405           jz 5768  (0000025B1A6C5DC8)
0000025B1A6C5DC3  5763  e838e0ffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5DC8  5768  48b80000000004000000 REX.W movq rax,0000000400000000
0000025B1A6C5DD2  5778  48898127010000 REX.W movq [rcx+0x127],rax
0000025B1A6C5DD9  5785  a801           test al,0x1
0000025B1A6C5DDB  5787  0f8428000000   jz 5833  (0000025B1A6C5E09)
0000025B1A6C5DE1  5793  488d9927010000 REX.W leaq rbx,[rcx+0x127]
0000025B1A6C5DE8  5800  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5DEE  5806  f6400802       testb [rax+0x8],0x2
0000025B1A6C5DF2  5810  7415           jz 5833  (0000025B1A6C5E09)
0000025B1A6C5DF4  5812  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5DFB  5819  4823c1         REX.W andq rax,rcx
0000025B1A6C5DFE  5822  f6400804       testb [rax+0x8],0x4
0000025B1A6C5E02  5826  7405           jz 5833  (0000025B1A6C5E09)
0000025B1A6C5E04  5828  e8f7dfffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5E09  5833  48b80000000005000000 REX.W movq rax,0000000500000000
0000025B1A6C5E13  5843  4889812f010000 REX.W movq [rcx+0x12f],rax
0000025B1A6C5E1A  5850  a801           test al,0x1
0000025B1A6C5E1C  5852  0f8428000000   jz 5898  (0000025B1A6C5E4A)
0000025B1A6C5E22  5858  488d992f010000 REX.W leaq rbx,[rcx+0x12f]
0000025B1A6C5E29  5865  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5E2F  5871  f6400802       testb [rax+0x8],0x2
0000025B1A6C5E33  5875  7415           jz 5898  (0000025B1A6C5E4A)
0000025B1A6C5E35  5877  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5E3C  5884  4823c1         REX.W andq rax,rcx
0000025B1A6C5E3F  5887  f6400804       testb [rax+0x8],0x4
0000025B1A6C5E43  5891  7405           jz 5898  (0000025B1A6C5E4A)
0000025B1A6C5E45  5893  e8b6dfffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5E4A  5898  48b80000000006000000 REX.W movq rax,0000000600000000
0000025B1A6C5E54  5908  48898137010000 REX.W movq [rcx+0x137],rax
0000025B1A6C5E5B  5915  a801           test al,0x1
0000025B1A6C5E5D  5917  0f8428000000   jz 5963  (0000025B1A6C5E8B)
0000025B1A6C5E63  5923  488d9937010000 REX.W leaq rbx,[rcx+0x137]
0000025B1A6C5E6A  5930  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5E70  5936  f6400802       testb [rax+0x8],0x2
0000025B1A6C5E74  5940  7415           jz 5963  (0000025B1A6C5E8B)
0000025B1A6C5E76  5942  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5E7D  5949  4823c1         REX.W andq rax,rcx
0000025B1A6C5E80  5952  f6400804       testb [rax+0x8],0x4
0000025B1A6C5E84  5956  7405           jz 5963  (0000025B1A6C5E8B)
0000025B1A6C5E86  5958  e875dfffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5E8B  5963  48b80000000009000000 REX.W movq rax,0000000900000000
0000025B1A6C5E95  5973  4889813f010000 REX.W movq [rcx+0x13f],rax
0000025B1A6C5E9C  5980  a801           test al,0x1
0000025B1A6C5E9E  5982  0f8428000000   jz 6028  (0000025B1A6C5ECC)
0000025B1A6C5EA4  5988  488d993f010000 REX.W leaq rbx,[rcx+0x13f]
0000025B1A6C5EAB  5995  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5EB1  6001  f6400802       testb [rax+0x8],0x2
0000025B1A6C5EB5  6005  7415           jz 6028  (0000025B1A6C5ECC)
0000025B1A6C5EB7  6007  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5EBE  6014  4823c1         REX.W andq rax,rcx
0000025B1A6C5EC1  6017  f6400804       testb [rax+0x8],0x4
0000025B1A6C5EC5  6021  7405           jz 6028  (0000025B1A6C5ECC)
0000025B1A6C5EC7  6023  e834dfffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5ECC  6028  48b8000000000a000000 REX.W movq rax,0000000A00000000
0000025B1A6C5ED6  6038  48898147010000 REX.W movq [rcx+0x147],rax
0000025B1A6C5EDD  6045  a801           test al,0x1
0000025B1A6C5EDF  6047  0f8428000000   jz 6093  (0000025B1A6C5F0D)
0000025B1A6C5EE5  6053  488d9947010000 REX.W leaq rbx,[rcx+0x147]
0000025B1A6C5EEC  6060  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5EF2  6066  f6400802       testb [rax+0x8],0x2
0000025B1A6C5EF6  6070  7415           jz 6093  (0000025B1A6C5F0D)
0000025B1A6C5EF8  6072  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5EFF  6079  4823c1         REX.W andq rax,rcx
0000025B1A6C5F02  6082  f6400804       testb [rax+0x8],0x4
0000025B1A6C5F06  6086  7405           jz 6093  (0000025B1A6C5F0D)
0000025B1A6C5F08  6088  e8f3deffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5F0D  6093  48b8000000000b000000 REX.W movq rax,0000000B00000000
0000025B1A6C5F17  6103  4889814f010000 REX.W movq [rcx+0x14f],rax
0000025B1A6C5F1E  6110  a801           test al,0x1
0000025B1A6C5F20  6112  0f8428000000   jz 6158  (0000025B1A6C5F4E)
0000025B1A6C5F26  6118  488d994f010000 REX.W leaq rbx,[rcx+0x14f]
0000025B1A6C5F2D  6125  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5F33  6131  f6400802       testb [rax+0x8],0x2
0000025B1A6C5F37  6135  7415           jz 6158  (0000025B1A6C5F4E)
0000025B1A6C5F39  6137  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5F40  6144  4823c1         REX.W andq rax,rcx
0000025B1A6C5F43  6147  f6400804       testb [rax+0x8],0x4
0000025B1A6C5F47  6151  7405           jz 6158  (0000025B1A6C5F4E)
0000025B1A6C5F49  6153  e8b2deffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5F4E  6158  48b8000000000c000000 REX.W movq rax,0000000C00000000
0000025B1A6C5F58  6168  48898157010000 REX.W movq [rcx+0x157],rax
0000025B1A6C5F5F  6175  a801           test al,0x1
0000025B1A6C5F61  6177  0f8428000000   jz 6223  (0000025B1A6C5F8F)
0000025B1A6C5F67  6183  488d9957010000 REX.W leaq rbx,[rcx+0x157]
0000025B1A6C5F6E  6190  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5F74  6196  f6400802       testb [rax+0x8],0x2
0000025B1A6C5F78  6200  7415           jz 6223  (0000025B1A6C5F8F)
0000025B1A6C5F7A  6202  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5F81  6209  4823c1         REX.W andq rax,rcx
0000025B1A6C5F84  6212  f6400804       testb [rax+0x8],0x4
0000025B1A6C5F88  6216  7405           jz 6223  (0000025B1A6C5F8F)
0000025B1A6C5F8A  6218  e871deffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5F8F  6223  48b8000000000d000000 REX.W movq rax,0000000D00000000
0000025B1A6C5F99  6233  4889815f010000 REX.W movq [rcx+0x15f],rax
0000025B1A6C5FA0  6240  a801           test al,0x1
0000025B1A6C5FA2  6242  0f8428000000   jz 6288  (0000025B1A6C5FD0)
0000025B1A6C5FA8  6248  488d995f010000 REX.W leaq rbx,[rcx+0x15f]
0000025B1A6C5FAF  6255  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5FB5  6261  f6400802       testb [rax+0x8],0x2
0000025B1A6C5FB9  6265  7415           jz 6288  (0000025B1A6C5FD0)
0000025B1A6C5FBB  6267  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C5FC2  6274  4823c1         REX.W andq rax,rcx
0000025B1A6C5FC5  6277  f6400804       testb [rax+0x8],0x4
0000025B1A6C5FC9  6281  7405           jz 6288  (0000025B1A6C5FD0)
0000025B1A6C5FCB  6283  e830deffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C5FD0  6288  48b8000000000e000000 REX.W movq rax,0000000E00000000
0000025B1A6C5FDA  6298  48898167010000 REX.W movq [rcx+0x167],rax
0000025B1A6C5FE1  6305  a801           test al,0x1
0000025B1A6C5FE3  6307  0f8428000000   jz 6353  (0000025B1A6C6011)
0000025B1A6C5FE9  6313  488d9967010000 REX.W leaq rbx,[rcx+0x167]
0000025B1A6C5FF0  6320  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C5FF6  6326  f6400802       testb [rax+0x8],0x2
0000025B1A6C5FFA  6330  7415           jz 6353  (0000025B1A6C6011)
0000025B1A6C5FFC  6332  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C6003  6339  4823c1         REX.W andq rax,rcx
0000025B1A6C6006  6342  f6400804       testb [rax+0x8],0x4
0000025B1A6C600A  6346  7405           jz 6353  (0000025B1A6C6011)
0000025B1A6C600C  6348  e8efddffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C6011  6353  33c0           xorl rax,rax
0000025B1A6C6013  6355  4889816f010000 REX.W movq [rcx+0x16f],rax
0000025B1A6C601A  6362  a801           test al,0x1
0000025B1A6C601C  6364  0f8428000000   jz 6410  (0000025B1A6C604A)
0000025B1A6C6022  6370  488d996f010000 REX.W leaq rbx,[rcx+0x16f]
0000025B1A6C6029  6377  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C602F  6383  f6400802       testb [rax+0x8],0x2
0000025B1A6C6033  6387  7415           jz 6410  (0000025B1A6C604A)
0000025B1A6C6035  6389  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C603C  6396  4823c1         REX.W andq rax,rcx
0000025B1A6C603F  6399  f6400804       testb [rax+0x8],0x4
0000025B1A6C6043  6403  7405           jz 6410  (0000025B1A6C604A)
0000025B1A6C6045  6405  e8b6ddffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C604A  6410  48b80000000001000000 REX.W movq rax,0000000100000000
0000025B1A6C6054  6420  48898177010000 REX.W movq [rcx+0x177],rax
0000025B1A6C605B  6427  a801           test al,0x1
0000025B1A6C605D  6429  0f8428000000   jz 6475  (0000025B1A6C608B)
0000025B1A6C6063  6435  488d9977010000 REX.W leaq rbx,[rcx+0x177]
0000025B1A6C606A  6442  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C6070  6448  f6400802       testb [rax+0x8],0x2
0000025B1A6C6074  6452  7415           jz 6475  (0000025B1A6C608B)
0000025B1A6C6076  6454  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C607D  6461  4823c1         REX.W andq rax,rcx
0000025B1A6C6080  6464  f6400804       testb [rax+0x8],0x4
0000025B1A6C6084  6468  7405           jz 6475  (0000025B1A6C608B)
0000025B1A6C6086  6470  e875ddffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C608B  6475  48b80000000002000000 REX.W movq rax,0000000200000000    ;; debug: position 342
0000025B1A6C6095  6485  4889817f010000 REX.W movq [rcx+0x17f],rax    ;; debug: position 1684
0000025B1A6C609C  6492  a801           test al,0x1
0000025B1A6C609E  6494  0f8428000000   jz 6540  (0000025B1A6C60CC)
0000025B1A6C60A4  6500  488d997f010000 REX.W leaq rbx,[rcx+0x17f]
0000025B1A6C60AB  6507  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C60B1  6513  f6400802       testb [rax+0x8],0x2
0000025B1A6C60B5  6517  7415           jz 6540  (0000025B1A6C60CC)
0000025B1A6C60B7  6519  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C60BE  6526  4823c1         REX.W andq rax,rcx
0000025B1A6C60C1  6529  f6400804       testb [rax+0x8],0x4
0000025B1A6C60C5  6533  7405           jz 6540  (0000025B1A6C60CC)
0000025B1A6C60C7  6535  e834ddffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C60CC  6540  48b80000000003000000 REX.W movq rax,0000000300000000
0000025B1A6C60D6  6550  48898187010000 REX.W movq [rcx+0x187],rax
0000025B1A6C60DD  6557  a801           test al,0x1
0000025B1A6C60DF  6559  0f8428000000   jz 6605  (0000025B1A6C610D)
0000025B1A6C60E5  6565  488d9987010000 REX.W leaq rbx,[rcx+0x187]
0000025B1A6C60EC  6572  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C60F2  6578  f6400802       testb [rax+0x8],0x2
0000025B1A6C60F6  6582  7415           jz 6605  (0000025B1A6C610D)
0000025B1A6C60F8  6584  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C60FF  6591  4823c1         REX.W andq rax,rcx
0000025B1A6C6102  6594  f6400804       testb [rax+0x8],0x4
0000025B1A6C6106  6598  7405           jz 6605  (0000025B1A6C610D)
0000025B1A6C6108  6600  e8f3dcffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C610D  6605  48b80000000004000000 REX.W movq rax,0000000400000000
0000025B1A6C6117  6615  4889818f010000 REX.W movq [rcx+0x18f],rax
0000025B1A6C611E  6622  a801           test al,0x1
0000025B1A6C6120  6624  0f8428000000   jz 6670  (0000025B1A6C614E)
0000025B1A6C6126  6630  488d998f010000 REX.W leaq rbx,[rcx+0x18f]
0000025B1A6C612D  6637  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C6133  6643  f6400802       testb [rax+0x8],0x2
0000025B1A6C6137  6647  7415           jz 6670  (0000025B1A6C614E)
0000025B1A6C6139  6649  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C6140  6656  4823c1         REX.W andq rax,rcx
0000025B1A6C6143  6659  f6400804       testb [rax+0x8],0x4
0000025B1A6C6147  6663  7405           jz 6670  (0000025B1A6C614E)
0000025B1A6C6149  6665  e8b2dcffff     call 0000025B1A6C3E00    ;; code: STUB, RecordWriteStub, minor: 8961
0000025B1A6C614E  6670  48b8000000000b000000 REX.W movq rax,0000000B00000000    ;; debug: position 6936
0000025B1A6C6158  6680  48898197010000 REX.W movq [rcx+0x197],rax
0000025B1A6C615F  6687  48b8000000000a000000 REX.W movq rax,0000000A00000000    ;; debug: position 7060
0000025B1A6C6169  6697  4889819f010000 REX.W movq [rcx+0x19f],rax
0000025B1A6C6170  6704  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 7139
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C617A  6714  4152           push r10
0000025B1A6C617C  6716  49ba0000000000001000 REX.W movq r10,0010000000000000
0000025B1A6C6186  6726  4152           push r10
0000025B1A6C6188  6728  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6192  6738  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C619C  6748  b801000000     movl rax,0000000000000001
0000025B1A6C61A1  6753  488bf1         REX.W movq rsi,rcx
0000025B1A6C61A4  6756  488bfa         REX.W movq rdi,rdx
0000025B1A6C61A7  6759  e83481f5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 7139
                                                             ;; code: BUILTIN
0000025B1A6C61AC  6764  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C61B3  6771  488983a7010000 REX.W movq [rbx+0x1a7],rax
0000025B1A6C61BA  6778  a801           test al,0x1
0000025B1A6C61BC  6780  0f8428000000   jz 6826  (0000025B1A6C61EA)
0000025B1A6C61C2  6786  488d93a7010000 REX.W leaq rdx,[rbx+0x1a7]
0000025B1A6C61C9  6793  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C61CF  6799  f6400802       testb [rax+0x8],0x2
0000025B1A6C61D3  6803  7415           jz 6826  (0000025B1A6C61EA)
0000025B1A6C61D5  6805  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C61DC  6812  4823c3         REX.W andq rax,rbx
0000025B1A6C61DF  6815  f6400804       testb [rax+0x8],0x4
0000025B1A6C61E3  6819  7405           jz 6826  (0000025B1A6C61EA)
0000025B1A6C61E5  6821  e896beffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C61EA  6826  49ba917504ee9d030000 REX.W movq r10,0000039DEE047591    ;; debug: position 7267
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C61F4  6836  4152           push r10
0000025B1A6C61F6  6838  49ba0000000000000800 REX.W movq r10,0008000000000000
0000025B1A6C6200  6848  4152           push r10
0000025B1A6C6202  6850  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; debug: position 988
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C620C  6860  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C6216  6870  b801000000     movl rax,0000000000000001
0000025B1A6C621B  6875  488bf3         REX.W movq rsi,rbx
0000025B1A6C621E  6878  488bfa         REX.W movq rdi,rdx
0000025B1A6C6221  6881  e8ba80f5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 7267
                                                             ;; code: BUILTIN
0000025B1A6C6226  6886  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C622D  6893  488983af010000 REX.W movq [rbx+0x1af],rax
0000025B1A6C6234  6900  a801           test al,0x1
0000025B1A6C6236  6902  0f8428000000   jz 6948  (0000025B1A6C6264)
0000025B1A6C623C  6908  488d93af010000 REX.W leaq rdx,[rbx+0x1af]
0000025B1A6C6243  6915  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C6249  6921  f6400802       testb [rax+0x8],0x2
0000025B1A6C624D  6925  7415           jz 6948  (0000025B1A6C6264)
0000025B1A6C624F  6927  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C6256  6934  4823c3         REX.W andq rax,rbx
0000025B1A6C6259  6937  f6400804       testb [rax+0x8],0x4
0000025B1A6C625D  6941  7405           jz 6948  (0000025B1A6C6264)
0000025B1A6C625F  6943  e81cbeffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C6264  6948  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 7366
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C626E  6958  4152           push r10
0000025B1A6C6270  6960  49ba0000000000020000 REX.W movq r10,0000020000000000
0000025B1A6C627A  6970  4152           push r10
0000025B1A6C627C  6972  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6286  6982  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6290  6992  b801000000     movl rax,0000000000000001
0000025B1A6C6295  6997  488bf3         REX.W movq rsi,rbx
0000025B1A6C6298  7000  488bfa         REX.W movq rdi,rdx
0000025B1A6C629B  7003  e84080f5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 7366
                                                             ;; code: BUILTIN
0000025B1A6C62A0  7008  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C62A7  7015  488983b7010000 REX.W movq [rbx+0x1b7],rax
0000025B1A6C62AE  7022  a801           test al,0x1
0000025B1A6C62B0  7024  0f8428000000   jz 7070  (0000025B1A6C62DE)
0000025B1A6C62B6  7030  488d93b7010000 REX.W leaq rdx,[rbx+0x1b7]
0000025B1A6C62BD  7037  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C62C3  7043  f6400802       testb [rax+0x8],0x2
0000025B1A6C62C7  7047  7415           jz 7070  (0000025B1A6C62DE)
0000025B1A6C62C9  7049  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C62D0  7056  4823c3         REX.W andq rax,rbx
0000025B1A6C62D3  7059  f6400804       testb [rax+0x8],0x4
0000025B1A6C62D7  7063  7405           jz 7070  (0000025B1A6C62DE)
0000025B1A6C62D9  7065  e8a2bdffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C62DE  7070  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 7527
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C62E8  7080  4152           push r10
0000025B1A6C62EA  7082  49ba0000000020000000 REX.W movq r10,0000002000000000
0000025B1A6C62F4  7092  4152           push r10
0000025B1A6C62F6  7094  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6300  7104  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C630A  7114  b801000000     movl rax,0000000000000001
0000025B1A6C630F  7119  488bf3         REX.W movq rsi,rbx
0000025B1A6C6312  7122  488bfa         REX.W movq rdi,rdx
0000025B1A6C6315  7125  e8c67ff5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 7527
                                                             ;; code: BUILTIN
0000025B1A6C631A  7130  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C6321  7137  488983bf010000 REX.W movq [rbx+0x1bf],rax
0000025B1A6C6328  7144  a801           test al,0x1
0000025B1A6C632A  7146  0f8428000000   jz 7192  (0000025B1A6C6358)
0000025B1A6C6330  7152  488d93bf010000 REX.W leaq rdx,[rbx+0x1bf]
0000025B1A6C6337  7159  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C633D  7165  f6400802       testb [rax+0x8],0x2
0000025B1A6C6341  7169  7415           jz 7192  (0000025B1A6C6358)
0000025B1A6C6343  7171  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C634A  7178  4823c3         REX.W andq rax,rbx
0000025B1A6C634D  7181  f6400804       testb [rax+0x8],0x4
0000025B1A6C6351  7185  7405           jz 7192  (0000025B1A6C6358)
0000025B1A6C6353  7187  e828bdffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C6358  7192  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 7563
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6362  7202  4152           push r10
0000025B1A6C6364  7204  49ba0000000002000000 REX.W movq r10,0000000200000000
0000025B1A6C636E  7214  4152           push r10
0000025B1A6C6370  7216  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C637A  7226  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6384  7236  b801000000     movl rax,0000000000000001
0000025B1A6C6389  7241  488bf3         REX.W movq rsi,rbx
0000025B1A6C638C  7244  488bfa         REX.W movq rdi,rdx
0000025B1A6C638F  7247  e84c7ff5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 7563
                                                             ;; code: BUILTIN
0000025B1A6C6394  7252  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C639B  7259  488983c7010000 REX.W movq [rbx+0x1c7],rax
0000025B1A6C63A2  7266  a801           test al,0x1
0000025B1A6C63A4  7268  0f8428000000   jz 7314  (0000025B1A6C63D2)
0000025B1A6C63AA  7274  488d93c7010000 REX.W leaq rdx,[rbx+0x1c7]
0000025B1A6C63B1  7281  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C63B7  7287  f6400802       testb [rax+0x8],0x2
0000025B1A6C63BB  7291  7415           jz 7314  (0000025B1A6C63D2)
0000025B1A6C63BD  7293  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C63C4  7300  4823c3         REX.W andq rax,rbx
0000025B1A6C63C7  7303  f6400804       testb [rax+0x8],0x4
0000025B1A6C63CB  7307  7405           jz 7314  (0000025B1A6C63D2)
0000025B1A6C63CD  7309  e8aebcffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C63D2  7314  49ba917504ee9d030000 REX.W movq r10,0000039DEE047591    ;; debug: position 7613
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C63DC  7324  4152           push r10
0000025B1A6C63DE  7326  49ba0000000040000000 REX.W movq r10,0000004000000000
0000025B1A6C63E8  7336  4152           push r10
0000025B1A6C63EA  7338  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; debug: position 988
                                                             ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C63F4  7348  48ba917504ee9d030000 REX.W movq rdx,0000039DEE047591    ;; object: 0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>
0000025B1A6C63FE  7358  b801000000     movl rax,0000000000000001
0000025B1A6C6403  7363  488bf3         REX.W movq rsi,rbx
0000025B1A6C6406  7366  488bfa         REX.W movq rdi,rdx
0000025B1A6C6409  7369  e8d27ef5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 7613
                                                             ;; code: BUILTIN
0000025B1A6C640E  7374  488b9d60fbffff REX.W movq rbx,[rbp-0x4a0]
0000025B1A6C6415  7381  488983cf010000 REX.W movq [rbx+0x1cf],rax
0000025B1A6C641C  7388  a801           test al,0x1
0000025B1A6C641E  7390  0f8428000000   jz 7436  (0000025B1A6C644C)
0000025B1A6C6424  7396  488d93cf010000 REX.W leaq rdx,[rbx+0x1cf]
0000025B1A6C642B  7403  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
0000025B1A6C6431  7409  f6400802       testb [rax+0x8],0x2
0000025B1A6C6435  7413  7415           jz 7436  (0000025B1A6C644C)
0000025B1A6C6437  7415  48c7c00000f0ff REX.W movq rax,0xfff00000
0000025B1A6C643E  7422  4823c3         REX.W andq rax,rbx
0000025B1A6C6441  7425  f6400804       testb [rax+0x8],0x4
0000025B1A6C6445  7429  7405           jz 7436  (0000025B1A6C644C)
0000025B1A6C6447  7431  e834bcffff     call 0000025B1A6C2080    ;; code: STUB, RecordWriteStub, minor: 8707
0000025B1A6C644C  7436  49baf17a04ee9d030000 REX.W movq r10,0000039DEE047AF1    ;; debug: position 7655
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6456  7446  4152           push r10
0000025B1A6C6458  7448  49ba0000000005000000 REX.W movq r10,0000000500000000
0000025B1A6C6462  7458  4152           push r10
0000025B1A6C6464  7460  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; debug: position 342
                                                             ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C646E  7470  48baf17a04ee9d030000 REX.W movq rdx,0000039DEE047AF1    ;; object: 0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>
0000025B1A6C6478  7480  b801000000     movl rax,0000000000000001
0000025B1A6C647D  7485  488bf3         REX.W movq rsi,rbx
0000025B1A6C6480  7488  488bfa         REX.W movq rdi,rdx
0000025B1A6C6483  7491  e8587ef5ff     call Construct  (0000025B1A61E2E0)    ;; debug: position 7655
                                                             ;; code: BUILTIN
0000025B1A6C6488  7496  488bd8         REX.W movq rbx,rax
0000025B1A6C648B  7499  488b9560fbffff REX.W movq rdx,[rbp-0x4a0]
0000025B1A6C6492  7506  48899ad7010000 REX.W movq [rdx+0x1d7],rbx
0000025B1A6C6499  7513  f6c301         testb rbx,0x1
0000025B1A6C649C  7516  0f8429000000   jz 7563  (0000025B1A6C64CB)
0000025B1A6C64A2  7522  488d8ad7010000 REX.W leaq rcx,[rdx+0x1d7]
0000025B1A6C64A9  7529  4881e30000f0ff REX.W andq rbx,0xfffffffffff00000
0000025B1A6C64B0  7536  f6430802       testb [rbx+0x8],0x2
0000025B1A6C64B4  7540  7415           jz 7563  (0000025B1A6C64CB)
0000025B1A6C64B6  7542  48c7c30000f0ff REX.W movq rbx,0xfff00000
0000025B1A6C64BD  7549  4823da         REX.W andq rbx,rdx
0000025B1A6C64C0  7552  f6430804       testb [rbx+0x8],0x4
0000025B1A6C64C4  7556  7405           jz 7563  (0000025B1A6C64CB)
0000025B1A6C64C6  7558  e85500f5ff     call 0000025B1A616520    ;; code: STUB, RecordWriteStub, minor: 8498
0000025B1A6C64CB  7563  488b9adf010000 REX.W movq rbx,[rdx+0x1df]
0000025B1A6C64D2  7570  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C64D6  7574  0f8459080000   jz 9717  (0000025B1A6C6D35)
0000025B1A6C64DC  7580  488b9ae7010000 REX.W movq rbx,[rdx+0x1e7]
0000025B1A6C64E3  7587  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C64E7  7591  0f844d080000   jz 9722  (0000025B1A6C6D3A)
0000025B1A6C64ED  7597  488b9aef010000 REX.W movq rbx,[rdx+0x1ef]
0000025B1A6C64F4  7604  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C64F8  7608  0f8441080000   jz 9727  (0000025B1A6C6D3F)
0000025B1A6C64FE  7614  488b9af7010000 REX.W movq rbx,[rdx+0x1f7]
0000025B1A6C6505  7621  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C6509  7625  0f8435080000   jz 9732  (0000025B1A6C6D44)
0000025B1A6C650F  7631  488b9aff010000 REX.W movq rbx,[rdx+0x1ff]
0000025B1A6C6516  7638  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C651A  7642  0f8429080000   jz 9737  (0000025B1A6C6D49)
0000025B1A6C6520  7648  488b9a07020000 REX.W movq rbx,[rdx+0x207]
0000025B1A6C6527  7655  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C652B  7659  0f841d080000   jz 9742  (0000025B1A6C6D4E)
0000025B1A6C6531  7665  488b9a0f020000 REX.W movq rbx,[rdx+0x20f]
0000025B1A6C6538  7672  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C653C  7676  0f8411080000   jz 9747  (0000025B1A6C6D53)
0000025B1A6C6542  7682  488b9a17020000 REX.W movq rbx,[rdx+0x217]
0000025B1A6C6549  7689  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C654D  7693  0f8405080000   jz 9752  (0000025B1A6C6D58)
0000025B1A6C6553  7699  488b9aff000000 REX.W movq rbx,[rdx+0xff]    ;; debug: position 12585
0000025B1A6C655A  7706  493b5dd8       REX.W cmpq rbx,[r13-0x28]
0000025B1A6C655E  7710  0f84f9070000   jz 9757  (0000025B1A6C6D5D)
0000025B1A6C6564  7716  488b4a3f       REX.W movq rcx,[rdx+0x3f]
0000025B1A6C6568  7720  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6C656C  7724  0f84f0070000   jz 9762  (0000025B1A6C6D62)
0000025B1A6C6572  7730  49bab08eadccac010000 REX.W movq r10,000001ACCCAD8EB0    ;; property cell
0000025B1A6C657C  7740  4d8b12         REX.W movq r10,[r10]
0000025B1A6C657F  7743  493bda         REX.W cmpq rbx,r10
0000025B1A6C6582  7746  0f85df070000   jnz 9767  (0000025B1A6C6D67)
0000025B1A6C6588  7752  48b8c08eadccac010000 REX.W movq rax,000001ACCCAD8EC0    ;; property cell
0000025B1A6C6592  7762  488b00         REX.W movq rax,[rax]
0000025B1A6C6595  7765  488b402f       REX.W movq rax,[rax+0x2f]
0000025B1A6C6599  7769  493b45d8       REX.W cmpq rax,[r13-0x28]
0000025B1A6C659D  7773  0f84c9070000   jz 9772  (0000025B1A6C6D6C)
0000025B1A6C65A3  7779  f6c101         testb rcx,0x1
0000025B1A6C65A6  7782  0f84c5070000   jz 9777  (0000025B1A6C6D71)
0000025B1A6C65AC  7788  49ba51fca09591000000 REX.W movq r10,0000009195A0FC51    ;; object: 0000009195A0FC51 <Map(UINT32_ELEMENTS)>
0000025B1A6C65B6  7798  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6C65BA  7802  0f85b6070000   jnz 9782  (0000025B1A6C6D76)
0000025B1A6C65C0  7808  488b710f       REX.W movq rsi,[rcx+0xf]
0000025B1A6C65C4  7812  8b7e0b         movl rdi,[rsi+0xb]
0000025B1A6C65C7  7815  4c8b5117       REX.W movq r10,[rcx+0x17]
0000025B1A6C65CB  7819  41f6422708     testb [r10+0x27],0x8
0000025B1A6C65D0  7824  0f85a5070000   jnz 9787  (0000025B1A6C6D7B)
0000025B1A6C65D6  7830  4c8b4617       REX.W movq r8,[rsi+0x17]
0000025B1A6C65DA  7834  488b760f       REX.W movq rsi,[rsi+0xf]
0000025B1A6C65DE  7838  4c03c6         REX.W addq r8,rsi
0000025B1A6C65E1  7841  488bf0         REX.W movq rsi,rax
0000025B1A6C65E4  7844  40f6c601       testb rsi,0x1
0000025B1A6C65E8  7848  0f8517050000   jnz 9157  (0000025B1A6C6B05)
0000025B1A6C65EE  7854  48c1ee20       REX.W shrq rsi, 32
0000025B1A6C65F2  7858  3bfe           cmpl rdi,rsi
0000025B1A6C65F4  7860  0f8686070000   jna 9792  (0000025B1A6C6D80)
0000025B1A6C65FA  7866  33c0           xorl rax,rax
0000025B1A6C65FC  7868  418904b0       movl [r8+rsi*4],rax
0000025B1A6C6600  7872  48b8d08eadccac010000 REX.W movq rax,000001ACCCAD8ED0    ;; property cell
0000025B1A6C660A  7882  488b00         REX.W movq rax,[rax]
0000025B1A6C660D  7885  488b4037       REX.W movq rax,[rax+0x37]
0000025B1A6C6611  7889  493b45d8       REX.W cmpq rax,[r13-0x28]
0000025B1A6C6615  7893  0f846a070000   jz 9797  (0000025B1A6C6D85)
0000025B1A6C661B  7899  4c8bc8         REX.W movq r9,rax
0000025B1A6C661E  7902  41f6c101       testb r9,0x1
0000025B1A6C6622  7906  0f8511050000   jnz 9209  (0000025B1A6C6B39)
0000025B1A6C6628  7912  49c1e920       REX.W shrq r9, 32
0000025B1A6C662C  7916  413bf9         cmpl rdi,r9
0000025B1A6C662F  7919  0f8655070000   jna 9802  (0000025B1A6C6D8A)
0000025B1A6C6635  7925  b801000000     movl rax,0000000000000001
0000025B1A6C663A  7930  43890488       movl [r8+r9*4],rax
0000025B1A6C663E  7934  488b4a47       REX.W movq rcx,[rdx+0x47]    ;; debug: position 12601
0000025B1A6C6642  7938  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6C6646  7942  0f8443070000   jz 9807  (0000025B1A6C6D8F)
0000025B1A6C664C  7948  f6c101         testb rcx,0x1
0000025B1A6C664F  7951  0f843f070000   jz 9812  (0000025B1A6C6D94)
0000025B1A6C6655  7957  49ba51fca09591000000 REX.W movq r10,0000009195A0FC51    ;; object: 0000009195A0FC51 <Map(UINT32_ELEMENTS)>
0000025B1A6C665F  7967  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6C6663  7971  0f8530070000   jnz 9817  (0000025B1A6C6D99)
0000025B1A6C6669  7977  488b410f       REX.W movq rax,[rcx+0xf]
0000025B1A6C666D  7981  8b780b         movl rdi,[rax+0xb]
0000025B1A6C6670  7984  4c8b5117       REX.W movq r10,[rcx+0x17]
0000025B1A6C6674  7988  41f6422708     testb [r10+0x27],0x8
0000025B1A6C6679  7993  0f851f070000   jnz 9822  (0000025B1A6C6D9E)
0000025B1A6C667F  7999  4c8b4017       REX.W movq r8,[rax+0x17]
0000025B1A6C6683  8003  488b400f       REX.W movq rax,[rax+0xf]
0000025B1A6C6687  8007  4c03c0         REX.W addq r8,rax
0000025B1A6C668A  8010  3bfe           cmpl rdi,rsi
0000025B1A6C668C  8012  0f8611070000   jna 9827  (0000025B1A6C6DA3)
0000025B1A6C6692  8018  b801000000     movl rax,0000000000000001
0000025B1A6C6697  8023  418904b0       movl [r8+rsi*4],rax
0000025B1A6C669B  8027  413bf9         cmpl rdi,r9
0000025B1A6C669E  8030  0f8604070000   jna 9832  (0000025B1A6C6DA8)
0000025B1A6C66A4  8036  33c0           xorl rax,rax
0000025B1A6C66A6  8038  43890488       movl [r8+r9*4],rax
0000025B1A6C66AA  8042  49bae11f04ee9d030000 REX.W movq r10,0000039DEE041FE1    ;; debug: position 12634
                                                             ;; object: 0000039DEE041FE1 <JS Function Date (SharedFunctionInfo 0000039DEE041F39)>
0000025B1A6C66B4  8052  4152           push r10
0000025B1A6C66B6  8054  48bf312104ee9d030000 REX.W movq rdi,0000039DEE042131    ;; object: 0000039DEE042131 <JS Function now (SharedFunctionInfo 0000039DEE042089)>
0000025B1A6C66C0  8064  488bf2         REX.W movq rsi,rdx
0000025B1A6C66C3  8067  488b7727       REX.W movq rsi,[rdi+0x27]
0000025B1A6C66C7  8071  498b55a8       REX.W movq rdx,[r13-0x58]
0000025B1A6C66CB  8075  33c0           xorl rax,rax
0000025B1A6C66CD  8077  ff5737         call [rdi+0x37]
0000025B1A6C66D0  8080  e96b000000     jmp 8192  (0000025B1A6C6740)
0000025B1A6C66D5  8085  4881ec90010000 REX.W subq rsp,0x190
0000025B1A6C66DC  8092  488b75f8       REX.W movq rsi,[rbp-0x8]
0000025B1A6C66E0  8096  488b85d8fcffff REX.W movq rax,[rbp-0x328]
0000025B1A6C66E7  8103  a801           test al,0x1
0000025B1A6C66E9  8105  0f8580040000   jnz 9263  (0000025B1A6C6B6F)
0000025B1A6C66EF  8111  48c1e820       REX.W shrq rax, 32
0000025B1A6C66F3  8115  488b9dd0fcffff REX.W movq rbx,[rbp-0x330]
0000025B1A6C66FA  8122  f6c301         testb rbx,0x1
0000025B1A6C66FD  8125  0f85a0040000   jnz 9315  (0000025B1A6C6BA3)
0000025B1A6C6703  8131  48c1eb20       REX.W shrq rbx, 32
0000025B1A6C6707  8135  4c8b7538       REX.W movq r14,[rbp+0x38]
0000025B1A6C670B  8139  4c8be6         REX.W movq r12,rsi
0000025B1A6C670E  8142  488b55d0       REX.W movq rdx,[rbp-0x30]
0000025B1A6C6712  8146  4c8b5db8       REX.W movq r11,[rbp-0x48]
0000025B1A6C6716  8150  4c8b8df8fcffff REX.W movq r9,[rbp-0x308]
0000025B1A6C671D  8157  4c8b85f0fcffff REX.W movq r8,[rbp-0x310]
0000025B1A6C6724  8164  488bbde8fcffff REX.W movq rdi,[rbp-0x318]
0000025B1A6C672B  8171  488b8de0fcffff REX.W movq rcx,[rbp-0x320]
0000025B1A6C6732  8178  4c8bd3         REX.W movq r10,rbx
0000025B1A6C6735  8181  488bd8         REX.W movq rbx,rax
0000025B1A6C6738  8184  498bc2         REX.W movq rax,r10
0000025B1A6C673B  8187  e93b000000     jmp 8251  (0000025B1A6C677B)
0000025B1A6C6740  8192  4c8b7538       REX.W movq r14,[rbp+0x38]
0000025B1A6C6744  8196  4c8ba560fbffff REX.W movq r12,[rbp-0x4a0]
0000025B1A6C674B  8203  488b9550fbffff REX.W movq rdx,[rbp-0x4b0]
0000025B1A6C6752  8210  4c8b9d38fbffff REX.W movq r11,[rbp-0x4c8]
0000025B1A6C6759  8217  4c8b8da0faffff REX.W movq r9,[rbp-0x560]
0000025B1A6C6760  8224  4c8b8598faffff REX.W movq r8,[rbp-0x568]
0000025B1A6C6767  8231  488bf8         REX.W movq rdi,rax
0000025B1A6C676A  8234  48b90000000000e1f505 REX.W movq rcx,05F5E10000000000
0000025B1A6C6774  8244  33db           xorl rbx,rbx
0000025B1A6C6776  8246  b801000000     movl rax,0000000000000001
0000025B1A6C677B  8251  4c89b538faffff REX.W movq [rbp-0x5c8],r14
0000025B1A6C6782  8258  4c89a530faffff REX.W movq [rbp-0x5d0],r12
0000025B1A6C6789  8265  48899528faffff REX.W movq [rbp-0x5d8],rdx
0000025B1A6C6790  8272  4c899d40faffff REX.W movq [rbp-0x5c0],r11
0000025B1A6C6797  8279  4c898d48faffff REX.W movq [rbp-0x5b8],r9
0000025B1A6C679E  8286  4c898550faffff REX.W movq [rbp-0x5b0],r8
0000025B1A6C67A5  8293  4889bd58faffff REX.W movq [rbp-0x5a8],rdi
0000025B1A6C67AC  8300  48898d60faffff REX.W movq [rbp-0x5a0],rcx
0000025B1A6C67B3  8307  488bf1         REX.W movq rsi,rcx
0000025B1A6C67B6  8310  40f6c601       testb rsi,0x1         ;; debug: position 12678
0000025B1A6C67BA  8314  0f8517040000   jnz 9367  (0000025B1A6C6BD7)
0000025B1A6C67C0  8320  48c1ee20       REX.W shrq rsi, 32
0000025B1A6C67C4  8324  4889b500faffff REX.W movq [rbp-0x600],rsi
0000025B1A6C67CB  8331  4d8b7c243f     REX.W movq r15,[r12+0x3f]    ;; debug: position 12807
0000025B1A6C67D0  8336  4d3b7dd8       REX.W cmpq r15,[r13-0x28]
0000025B1A6C67D4  8340  0f84d3050000   jz 9837  (0000025B1A6C6DAD)
0000025B1A6C67DA  8346  49bae08eadccac010000 REX.W movq r10,000001ACCCAD8EE0    ;; property cell
0000025B1A6C67E4  8356  4d8b12         REX.W movq r10,[r10]
0000025B1A6C67E7  8359  493bd2         REX.W cmpq rdx,r10
0000025B1A6C67EA  8362  0f85c2050000   jnz 9842  (0000025B1A6C6DB2)
0000025B1A6C67F0  8368  48b9f08eadccac010000 REX.W movq rcx,000001ACCCAD8EF0    ;; property cell
0000025B1A6C67FA  8378  488b09         REX.W movq rcx,[rcx]
0000025B1A6C67FD  8381  488b89df000000 REX.W movq rcx,[rcx+0xdf]    ;; debug: position 2188
0000025B1A6C6804  8388  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6C6808  8392  0f84a9050000   jz 9847  (0000025B1A6C6DB7)
0000025B1A6C680E  8398  48898d20faffff REX.W movq [rbp-0x5e0],rcx
0000025B1A6C6815  8405  488bf9         REX.W movq rdi,rcx
0000025B1A6C6818  8408  48b9008fadccac010000 REX.W movq rcx,000001ACCCAD8F00    ;; debug: position 12807
                                                             ;; property cell
0000025B1A6C6822  8418  488b09         REX.W movq rcx,[rcx]
0000025B1A6C6825  8421  488b492f       REX.W movq rcx,[rcx+0x2f]    ;; debug: position 2188
0000025B1A6C6829  8425  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6C682D  8429  0f8489050000   jz 9852  (0000025B1A6C6DBC)
0000025B1A6C6833  8435  41f6c701       testb r15,0x1
0000025B1A6C6837  8439  0f8484050000   jz 9857  (0000025B1A6C6DC1)
0000025B1A6C683D  8445  49ba51fca09591000000 REX.W movq r10,0000009195A0FC51    ;; object: 0000009195A0FC51 <Map(UINT32_ELEMENTS)>
0000025B1A6C6847  8455  4d3957ff       REX.W cmpq [r15-0x1],r10
0000025B1A6C684B  8459  0f8575050000   jnz 9862  (0000025B1A6C6DC6)
0000025B1A6C6851  8465  4d8b470f       REX.W movq r8,[r15+0xf]
0000025B1A6C6855  8469  458b480b       movl r9,[r8+0xb]
0000025B1A6C6859  8473  4d8b5717       REX.W movq r10,[r15+0x17]
0000025B1A6C685D  8477  41f6422708     testb [r10+0x27],0x8
0000025B1A6C6862  8482  0f8563050000   jnz 9867  (0000025B1A6C6DCB)
0000025B1A6C6868  8488  4d8b5817       REX.W movq r11,[r8+0x17]
0000025B1A6C686C  8492  4d8b400f       REX.W movq r8,[r8+0xf]
0000025B1A6C6870  8496  4c8985f0f9ffff REX.W movq [rbp-0x610],r8
0000025B1A6C6877  8503  f6c101         testb rcx,0x1
0000025B1A6C687A  8506  0f858b030000   jnz 9419  (0000025B1A6C6C0B)
0000025B1A6C6880  8512  48c1e920       REX.W shrq rcx, 32
0000025B1A6C6884  8516  443bc9         cmpl r9,rcx
0000025B1A6C6887  8519  0f8643050000   jna 9872  (0000025B1A6C6DD0)
0000025B1A6C688D  8525  49ba108fadccac010000 REX.W movq r10,000001ACCCAD8F10    ;; property cell
0000025B1A6C6897  8535  4d8b12         REX.W movq r10,[r10]
0000025B1A6C689A  8538  493bfa         REX.W cmpq rdi,r10
0000025B1A6C689D  8541  0f8532050000   jnz 9877  (0000025B1A6C6DD5)
0000025B1A6C68A3  8547  4c8bf1         REX.W movq r14,rcx
0000025B1A6C68A6  8550  48b9208fadccac010000 REX.W movq rcx,000001ACCCAD8F20    ;; debug: position 12807
                                                             ;; property cell
0000025B1A6C68B0  8560  488b09         REX.W movq rcx,[rcx]
0000025B1A6C68B3  8563  488b89d7000000 REX.W movq rcx,[rcx+0xd7]    ;; debug: position 2188
0000025B1A6C68BA  8570  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6C68BE  8574  0f8416050000   jz 9882  (0000025B1A6C6DDA)
0000025B1A6C68C4  8580  48898d18faffff REX.W movq [rbp-0x5e8],rcx
0000025B1A6C68CB  8587  f6c101         testb rcx,0x1         ;; debug: position 1905
0000025B1A6C68CE  8590  0f840b050000   jz 9887  (0000025B1A6C6DDF)
0000025B1A6C68D4  8596  49ba69f4a09591000000 REX.W movq r10,0000009195A0F469    ;; object: 0000009195A0F469 <Map(UINT8_ELEMENTS)>
0000025B1A6C68DE  8606  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6C68E2  8610  0f85fc040000   jnz 9892  (0000025B1A6C6DE4)
0000025B1A6C68E8  8616  4c8b610f       REX.W movq r12,[rcx+0xf]
0000025B1A6C68EC  8620  418b54240b     movl rdx,[r12+0xb]
0000025B1A6C68F1  8625  4c8b5117       REX.W movq r10,[rcx+0x17]
0000025B1A6C68F5  8629  41f6422708     testb [r10+0x27],0x8
0000025B1A6C68FA  8634  0f85e9040000   jnz 9897  (0000025B1A6C6DE9)
0000025B1A6C6900  8640  498b7c2417     REX.W movq rdi,[r12+0x17]
0000025B1A6C6905  8645  4889bdf8f9ffff REX.W movq [rbp-0x608],rdi
0000025B1A6C690C  8652  4d8b64240f     REX.W movq r12,[r12+0xf]
0000025B1A6C6911  8657  48b9308fadccac010000 REX.W movq rcx,000001ACCCAD8F30    ;; debug: position 12807
                                                             ;; property cell
0000025B1A6C691B  8667  488b09         REX.W movq rcx,[rcx]
0000025B1A6C691E  8670  488b4937       REX.W movq rcx,[rcx+0x37]    ;; debug: position 2206
0000025B1A6C6922  8674  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6C6926  8678  0f84c2040000   jz 9902  (0000025B1A6C6DEE)
0000025B1A6C692C  8684  f6c101         testb rcx,0x1
0000025B1A6C692F  8687  0f850a030000   jnz 9471  (0000025B1A6C6C3F)
0000025B1A6C6935  8693  48c1e920       REX.W shrq rcx, 32
0000025B1A6C6939  8697  443bc9         cmpl r9,rcx
0000025B1A6C693C  8700  0f86b1040000   jna 9907  (0000025B1A6C6DF3)
0000025B1A6C6942  8706  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]    ;; debug: position 12634
0000025B1A6C6949  8713  0f8224030000   jc 9523  (0000025B1A6C6C73)
0000025B1A6C694F  8719  83f801         cmpl rax,0x1
0000025B1A6C6952  8722  0f8412000000   jz 8746  (0000025B1A6C696A)
0000025B1A6C6958  8728  4c8bcb         REX.W movq r9,rbx     ;; debug: position 12685
0000025B1A6C695B  8731  4183c101       addl r9,0x1
0000025B1A6C695F  8735  0f8093040000   jo 9912  (0000025B1A6C6DF8)
0000025B1A6C6965  8741  e905000000     jmp 8751  (0000025B1A6C696F)
0000025B1A6C696A  8746  4c8bcb         REX.W movq r9,rbx     ;; debug: position 12685
0000025B1A6C696D  8749  33c0           xorl rax,rax
0000025B1A6C696F  8751  48898508faffff REX.W movq [rbp-0x5f8],rax
0000025B1A6C6976  8758  443bce         cmpl r9,rsi           ;; debug: position 12678
0000025B1A6C6979  8761  0f8ddc000000   jge 8987  (0000025B1A6C6A5B)
0000025B1A6C697F  8767  48899d10faffff REX.W movq [rbp-0x5f0],rbx
0000025B1A6C6986  8774  bb01000000     movl rbx,0000000000000001
0000025B1A6C698B  8779  83fb01         cmpl rbx,0x1
0000025B1A6C698E  8782  0f859d000000   jnz 8945  (0000025B1A6C6A31)
0000025B1A6C6994  8788  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6C699B  8795  0f821a030000   jc 9595  (0000025B1A6C6CBB)
0000025B1A6C69A1  8801  498bdb         REX.W movq rbx,r11
0000025B1A6C69A4  8804  4903d8         REX.W addq rbx,r8     ;; debug: position 2188
0000025B1A6C69A7  8807  428b04b3       movl rax,[rbx+r14*4]
0000025B1A6C69AB  8811  488bf0         REX.W movq rsi,rax
0000025B1A6C69AE  8814  81e6ffff0000   andl rsi,0xffff       ;; debug: position 1905
0000025B1A6C69B4  8820  488bbdf8f9ffff REX.W movq rdi,[rbp-0x608]
0000025B1A6C69BB  8827  4c01e7         REX.W addq rdi,r12
0000025B1A6C69BE  8830  3bd6           cmpl rdx,rsi
0000025B1A6C69C0  8832  0f8637040000   jna 9917  (0000025B1A6C6DFD)
0000025B1A6C69C6  8838  0fb63437       movzxbl rsi,[rdi+rsi*1]
0000025B1A6C69CA  8842  4c8bc0         REX.W movq r8,rax
0000025B1A6C69CD  8845  4585c0         testl r8,r8           ;; debug: position 1935
0000025B1A6C69D0  8848  0f882c040000   js 9922  (0000025B1A6C6E02)
0000025B1A6C69D6  8854  413bd0         cmpl rdx,r8
0000025B1A6C69D9  8857  0f8628040000   jna 9927  (0000025B1A6C6E07)
0000025B1A6C69DF  8863  420fb60407     movzxbl rax,[rdi+r8*1]
0000025B1A6C69E4  8868  03c6           addl rax,rsi          ;; debug: position 1915
0000025B1A6C69E6  8870  8b348b         movl rsi,[rbx+rcx*4]    ;; debug: position 2206
0000025B1A6C69E9  8873  488bde         REX.W movq rbx,rsi
0000025B1A6C69EC  8876  81e3ffff0000   andl rbx,0xffff       ;; debug: position 1905
0000025B1A6C69F2  8882  3bd3           cmpl rdx,rbx
0000025B1A6C69F4  8884  0f8612040000   jna 9932  (0000025B1A6C6E0C)
0000025B1A6C69FA  8890  0fb61c1f       movzxbl rbx,[rdi+rbx*1]
0000025B1A6C69FE  8894  4c8bc6         REX.W movq r8,rsi
0000025B1A6C6A01  8897  4585c0         testl r8,r8           ;; debug: position 1935
0000025B1A6C6A04  8900  0f8807040000   js 9937  (0000025B1A6C6E11)
0000025B1A6C6A0A  8906  413bd0         cmpl rdx,r8
0000025B1A6C6A0D  8909  0f8603040000   jna 9942  (0000025B1A6C6E16)
0000025B1A6C6A13  8915  420fb63407     movzxbl rsi,[rdi+r8*1]
0000025B1A6C6A18  8920  03f3           addl rsi,rbx          ;; debug: position 1915
0000025B1A6C6A1A  8922  03c6           addl rax,rsi          ;; debug: position 2204
0000025B1A6C6A1C  8924  4c898d10faffff REX.W movq [rbp-0x5f0],r9
0000025B1A6C6A23  8931  4c8b85f0f9ffff REX.W movq r8,[rbp-0x610]
0000025B1A6C6A2A  8938  33db           xorl rbx,rbx
0000025B1A6C6A2C  8940  e95affffff     jmp 8779  (0000025B1A6C698B)
0000025B1A6C6A31  8945  83fb01         cmpl rbx,0x1
0000025B1A6C6A34  8948  0f8421000000   jz 8987  (0000025B1A6C6A5B)
0000025B1A6C6A3A  8954  488b9d10faffff REX.W movq rbx,[rbp-0x5f0]
0000025B1A6C6A41  8961  488b8508faffff REX.W movq rax,[rbp-0x5f8]
0000025B1A6C6A48  8968  4c8b85f0f9ffff REX.W movq r8,[rbp-0x610]
0000025B1A6C6A4F  8975  488bb500faffff REX.W movq rsi,[rbp-0x600]
0000025B1A6C6A56  8982  e9e7feffff     jmp 8706  (0000025B1A6C6942)
0000025B1A6C6A5B  8987  488b8530faffff REX.W movq rax,[rbp-0x5d0]    ;; debug: position 12831
0000025B1A6C6A62  8994  488b5827       REX.W movq rbx,[rax+0x27]
0000025B1A6C6A66  8998  488b531f       REX.W movq rdx,[rbx+0x1f]
0000025B1A6C6A6A  9002  488bf0         REX.W movq rsi,rax
0000025B1A6C6A6D  9005  48b991790bee9d030000 REX.W movq rcx,0000039DEE0B7991    ;; object: 0000039DEE0B7991 <String[7]: console>
0000025B1A6C6A77  9015  48bb41baacccac010000 REX.W movq rbx,000001ACCCACBA41    ;; object: 000001ACCCACBA41 <FixedArray[67]>
0000025B1A6C6A81  9025  48b80000000035000000 REX.W movq rax,0000003500000000
0000025B1A6C6A8B  9035  e870d1ffff     call 0000025B1A6C3C00    ;; code: contextual, LOAD_IC, GENERIC
0000025B1A6C6A90  9040  488985e8f9ffff REX.W movq [rbp-0x618],rax
0000025B1A6C6A97  9047  488bb530faffff REX.W movq rsi,[rbp-0x5d0]
0000025B1A6C6A9E  9054  488bd0         REX.W movq rdx,rax
0000025B1A6C6AA1  9057  0f1f00         nop
0000025B1A6C6AA4  9060  48b929b004ee9d030000 REX.W movq rcx,0000039DEE04B029    ;; object: 0000039DEE04B029 <String[3]: log>
0000025B1A6C6AAE  9070  48bb41baacccac010000 REX.W movq rbx,000001ACCCACBA41    ;; object: 000001ACCCACBA41 <FixedArray[67]>
0000025B1A6C6AB8  9080  48b80000000037000000 REX.W movq rax,0000003700000000
0000025B1A6C6AC2  9090  e839d1ffff     call 0000025B1A6C3C00    ;; code: contextual, LOAD_IC, GENERIC
0000025B1A6C6AC7  9095  488985e0f9ffff REX.W movq [rbp-0x620],rax
0000025B1A6C6ACE  9102  49bae11f04ee9d030000 REX.W movq r10,0000039DEE041FE1    ;; debug: position 12841
                                                             ;; object: 0000039DEE041FE1 <JS Function Date (SharedFunctionInfo 0000039DEE041F39)>
0000025B1A6C6AD8  9112  4152           push r10
0000025B1A6C6ADA  9114  48bf312104ee9d030000 REX.W movq rdi,0000039DEE042131    ;; object: 0000039DEE042131 <JS Function now (SharedFunctionInfo 0000039DEE042089)>
0000025B1A6C6AE4  9124  488bb530faffff REX.W movq rsi,[rbp-0x5d0]
0000025B1A6C6AEB  9131  488b7727       REX.W movq rsi,[rdi+0x27]
0000025B1A6C6AEF  9135  498b55a8       REX.W movq rdx,[r13-0x58]
0000025B1A6C6AF3  9139  33c0           xorl rax,rax
0000025B1A6C6AF5  9141  ff5737         call [rdi+0x37]
0000025B1A6C6AF8  9144  e871fae3ff     call 0000025B1A50656E    ;; debug: position 12847
                                                             ;; soft deoptimization bailout 139
0000025B1A6C6AFD  9149  0f1f840000000000 nop
0000025B1A6C6B05  9157  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 12585
0000025B1A6C6B09  9161  4c3956ff       REX.W cmpq [rsi-0x1],r10
0000025B1A6C6B0D  9165  0f8508030000   jnz 9947  (0000025B1A6C6E1B)
0000025B1A6C6B13  9171  c5fb104607     vmovsd xmm0,[rsi+0x7]
0000025B1A6C6B18  9176  c5fb2cf0       vcvttsd2si rsi,xmm0
0000025B1A6C6B1C  9180  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6C6B20  9184  c5f32ace       vcvtlsi2sd xmm1,xmm1,rsi
0000025B1A6C6B24  9188  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6C6B28  9192  0f85ed020000   jnz 9947  (0000025B1A6C6E1B)
0000025B1A6C6B2E  9198  0f8ae7020000   jpe 9947  (0000025B1A6C6E1B)
0000025B1A6C6B34  9204  e9b9faffff     jmp 7858  (0000025B1A6C65F2)
0000025B1A6C6B39  9209  4d8b55f8       REX.W movq r10,[r13-0x8]
0000025B1A6C6B3D  9213  4d3951ff       REX.W cmpq [r9-0x1],r10
0000025B1A6C6B41  9217  0f85d9020000   jnz 9952  (0000025B1A6C6E20)
0000025B1A6C6B47  9223  c4c17b104107   vmovsd xmm0,[r9+0x7]
0000025B1A6C6B4D  9229  c57b2cc8       vcvttsd2si r9,xmm0
0000025B1A6C6B51  9233  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6C6B55  9237  c4c1732ac9     vcvtlsi2sd xmm1,xmm1,r9
0000025B1A6C6B5A  9242  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6C6B5E  9246  0f85bc020000   jnz 9952  (0000025B1A6C6E20)
0000025B1A6C6B64  9252  0f8ab6020000   jpe 9952  (0000025B1A6C6E20)
0000025B1A6C6B6A  9258  e9bdfaffff     jmp 7916  (0000025B1A6C662C)
0000025B1A6C6B6F  9263  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 12634
0000025B1A6C6B73  9267  4c3950ff       REX.W cmpq [rax-0x1],r10
0000025B1A6C6B77  9271  0f85a8020000   jnz 9957  (0000025B1A6C6E25)
0000025B1A6C6B7D  9277  c5fb104007     vmovsd xmm0,[rax+0x7]
0000025B1A6C6B82  9282  c5fb2cc0       vcvttsd2si rax,xmm0
0000025B1A6C6B86  9286  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6C6B8A  9290  c5f32ac8       vcvtlsi2sd xmm1,xmm1,rax
0000025B1A6C6B8E  9294  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6C6B92  9298  0f858d020000   jnz 9957  (0000025B1A6C6E25)
0000025B1A6C6B98  9304  0f8a87020000   jpe 9957  (0000025B1A6C6E25)
0000025B1A6C6B9E  9310  e950fbffff     jmp 8115  (0000025B1A6C66F3)
0000025B1A6C6BA3  9315  4d8b55f8       REX.W movq r10,[r13-0x8]
0000025B1A6C6BA7  9319  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000025B1A6C6BAB  9323  0f8579020000   jnz 9962  (0000025B1A6C6E2A)
0000025B1A6C6BB1  9329  c5fb104307     vmovsd xmm0,[rbx+0x7]
0000025B1A6C6BB6  9334  c5fb2cd8       vcvttsd2si rbx,xmm0
0000025B1A6C6BBA  9338  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6C6BBE  9342  c5f32acb       vcvtlsi2sd xmm1,xmm1,rbx
0000025B1A6C6BC2  9346  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6C6BC6  9350  0f855e020000   jnz 9962  (0000025B1A6C6E2A)
0000025B1A6C6BCC  9356  0f8a58020000   jpe 9962  (0000025B1A6C6E2A)
0000025B1A6C6BD2  9362  e930fbffff     jmp 8135  (0000025B1A6C6707)
0000025B1A6C6BD7  9367  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 12678
0000025B1A6C6BDB  9371  4c3956ff       REX.W cmpq [rsi-0x1],r10
0000025B1A6C6BDF  9375  0f854a020000   jnz 9967  (0000025B1A6C6E2F)
0000025B1A6C6BE5  9381  c5fb104607     vmovsd xmm0,[rsi+0x7]
0000025B1A6C6BEA  9386  c5fb2cf0       vcvttsd2si rsi,xmm0
0000025B1A6C6BEE  9390  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6C6BF2  9394  c5f32ace       vcvtlsi2sd xmm1,xmm1,rsi
0000025B1A6C6BF6  9398  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6C6BFA  9402  0f852f020000   jnz 9967  (0000025B1A6C6E2F)
0000025B1A6C6C00  9408  0f8a29020000   jpe 9967  (0000025B1A6C6E2F)
0000025B1A6C6C06  9414  e9b9fbffff     jmp 8324  (0000025B1A6C67C4)
0000025B1A6C6C0B  9419  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2188
0000025B1A6C6C0F  9423  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6C6C13  9427  0f851b020000   jnz 9972  (0000025B1A6C6E34)
0000025B1A6C6C19  9433  c5fb104107     vmovsd xmm0,[rcx+0x7]
0000025B1A6C6C1E  9438  c5fb2cc8       vcvttsd2si rcx,xmm0
0000025B1A6C6C22  9442  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6C6C26  9446  c5f32ac9       vcvtlsi2sd xmm1,xmm1,rcx
0000025B1A6C6C2A  9450  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6C6C2E  9454  0f8500020000   jnz 9972  (0000025B1A6C6E34)
0000025B1A6C6C34  9460  0f8afa010000   jpe 9972  (0000025B1A6C6E34)
0000025B1A6C6C3A  9466  e945fcffff     jmp 8516  (0000025B1A6C6884)
0000025B1A6C6C3F  9471  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2206
0000025B1A6C6C43  9475  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6C6C47  9479  0f85ec010000   jnz 9977  (0000025B1A6C6E39)
0000025B1A6C6C4D  9485  c5fb104107     vmovsd xmm0,[rcx+0x7]
0000025B1A6C6C52  9490  c5fb2cc8       vcvttsd2si rcx,xmm0
0000025B1A6C6C56  9494  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6C6C5A  9498  c5f32ac9       vcvtlsi2sd xmm1,xmm1,rcx
0000025B1A6C6C5E  9502  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6C6C62  9506  0f85d1010000   jnz 9977  (0000025B1A6C6E39)
0000025B1A6C6C68  9512  0f8acb010000   jpe 9977  (0000025B1A6C6E39)
0000025B1A6C6C6E  9518  e9c6fcffff     jmp 8697  (0000025B1A6C6939)
0000025B1A6C6C73  9523  50             push rax              ;; debug: position 12634
0000025B1A6C6C74  9524  51             push rcx
0000025B1A6C6C75  9525  52             push rdx
0000025B1A6C6C76  9526  53             push rbx
0000025B1A6C6C77  9527  56             push rsi
0000025B1A6C6C78  9528  57             push rdi
0000025B1A6C6C79  9529  4150           push r8
0000025B1A6C6C7B  9531  4151           push r9
0000025B1A6C6C7D  9533  4153           push r11
0000025B1A6C6C7F  9535  4154           push r12
0000025B1A6C6C81  9537  4156           push r14
0000025B1A6C6C83  9539  4157           push r15
0000025B1A6C6C85  9541  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000025B1A6C6C8A  9546  488b75f8       REX.W movq rsi,[rbp-0x8]
0000025B1A6C6C8E  9550  33c0           xorl rax,rax
0000025B1A6C6C90  9552  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
0000025B1A6C6C9A  9562  e861f5f3ff     call 0000025B1A606200    ;; code: STUB, CEntryStub, minor: 5
0000025B1A6C6C9F  9567  488d642420     REX.W leaq rsp,[rsp+0x20]
0000025B1A6C6CA4  9572  415f           pop r15
0000025B1A6C6CA6  9574  415e           pop r14
0000025B1A6C6CA8  9576  415c           pop r12
0000025B1A6C6CAA  9578  415b           pop r11
0000025B1A6C6CAC  9580  4159           pop r9
0000025B1A6C6CAE  9582  4158           pop r8
0000025B1A6C6CB0  9584  5f             pop rdi
0000025B1A6C6CB1  9585  5e             pop rsi
0000025B1A6C6CB2  9586  5b             pop rbx
0000025B1A6C6CB3  9587  5a             pop rdx
0000025B1A6C6CB4  9588  59             pop rcx
0000025B1A6C6CB5  9589  58             pop rax
0000025B1A6C6CB6  9590  e994fcffff     jmp 8719  (0000025B1A6C694F)
0000025B1A6C6CBB  9595  50             push rax              ;; debug: position 12678
0000025B1A6C6CBC  9596  51             push rcx
0000025B1A6C6CBD  9597  52             push rdx
0000025B1A6C6CBE  9598  53             push rbx
0000025B1A6C6CBF  9599  56             push rsi
0000025B1A6C6CC0  9600  57             push rdi
0000025B1A6C6CC1  9601  4150           push r8
0000025B1A6C6CC3  9603  4151           push r9
0000025B1A6C6CC5  9605  4153           push r11
0000025B1A6C6CC7  9607  4154           push r12
0000025B1A6C6CC9  9609  4156           push r14
0000025B1A6C6CCB  9611  4157           push r15
0000025B1A6C6CCD  9613  488d6424e0     REX.W leaq rsp,[rsp-0x20]
0000025B1A6C6CD2  9618  488b75f8       REX.W movq rsi,[rbp-0x8]
0000025B1A6C6CD6  9622  33c0           xorl rax,rax
0000025B1A6C6CD8  9624  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
0000025B1A6C6CE2  9634  e819f5f3ff     call 0000025B1A606200    ;; code: STUB, CEntryStub, minor: 5
0000025B1A6C6CE7  9639  488d642420     REX.W leaq rsp,[rsp+0x20]
0000025B1A6C6CEC  9644  415f           pop r15
0000025B1A6C6CEE  9646  415e           pop r14
0000025B1A6C6CF0  9648  415c           pop r12
0000025B1A6C6CF2  9650  415b           pop r11
0000025B1A6C6CF4  9652  4159           pop r9
0000025B1A6C6CF6  9654  4158           pop r8
0000025B1A6C6CF8  9656  5f             pop rdi
0000025B1A6C6CF9  9657  5e             pop rsi
0000025B1A6C6CFA  9658  5b             pop rbx
0000025B1A6C6CFB  9659  5a             pop rdx
0000025B1A6C6CFC  9660  59             pop rcx
0000025B1A6C6CFD  9661  58             pop rax
0000025B1A6C6CFE  9662  e99efcffff     jmp 8801  (0000025B1A6C69A1)
0000025B1A6C6D03  9667  e832f5c3ff     call 0000025B1A30623A    ;; deoptimization bailout 57
0000025B1A6C6D08  9672  e837f5c3ff     call 0000025B1A306244    ;; deoptimization bailout 58
0000025B1A6C6D0D  9677  e83cf5c3ff     call 0000025B1A30624E    ;; deoptimization bailout 59
0000025B1A6C6D12  9682  e891f5c3ff     call 0000025B1A3062A8    ;; deoptimization bailout 68
0000025B1A6C6D17  9687  e896f5c3ff     call 0000025B1A3062B2    ;; deoptimization bailout 69
0000025B1A6C6D1C  9692  e8c3f5c3ff     call 0000025B1A3062E4    ;; deoptimization bailout 74
0000025B1A6C6D21  9697  e8c8f5c3ff     call 0000025B1A3062EE    ;; deoptimization bailout 75
0000025B1A6C6D26  9702  e8cdf5c3ff     call 0000025B1A3062F8    ;; deoptimization bailout 76
0000025B1A6C6D2B  9707  e8d2f5c3ff     call 0000025B1A306302    ;; deoptimization bailout 77
0000025B1A6C6D30  9712  e8d7f5c3ff     call 0000025B1A30630C    ;; deoptimization bailout 78
0000025B1A6C6D35  9717  e822f6c3ff     call 0000025B1A30635C    ;; deoptimization bailout 86
0000025B1A6C6D3A  9722  e827f6c3ff     call 0000025B1A306366    ;; deoptimization bailout 87
0000025B1A6C6D3F  9727  e82cf6c3ff     call 0000025B1A306370    ;; deoptimization bailout 88
0000025B1A6C6D44  9732  e831f6c3ff     call 0000025B1A30637A    ;; deoptimization bailout 89
0000025B1A6C6D49  9737  e836f6c3ff     call 0000025B1A306384    ;; deoptimization bailout 90
0000025B1A6C6D4E  9742  e83bf6c3ff     call 0000025B1A30638E    ;; deoptimization bailout 91
0000025B1A6C6D53  9747  e840f6c3ff     call 0000025B1A306398    ;; deoptimization bailout 92
0000025B1A6C6D58  9752  e845f6c3ff     call 0000025B1A3063A2    ;; deoptimization bailout 93
0000025B1A6C6D5D  9757  e84af6c3ff     call 0000025B1A3063AC    ;; deoptimization bailout 94
0000025B1A6C6D62  9762  e84ff6c3ff     call 0000025B1A3063B6    ;; deoptimization bailout 95
0000025B1A6C6D67  9767  e854f6c3ff     call 0000025B1A3063C0    ;; deoptimization bailout 96
0000025B1A6C6D6C  9772  e859f6c3ff     call 0000025B1A3063CA    ;; deoptimization bailout 97
0000025B1A6C6D71  9777  e85ef6c3ff     call 0000025B1A3063D4    ;; deoptimization bailout 98
0000025B1A6C6D76  9782  e863f6c3ff     call 0000025B1A3063DE    ;; deoptimization bailout 99
0000025B1A6C6D7B  9787  e868f6c3ff     call 0000025B1A3063E8    ;; deoptimization bailout 100
0000025B1A6C6D80  9792  e86df6c3ff     call 0000025B1A3063F2    ;; deoptimization bailout 101
0000025B1A6C6D85  9797  e872f6c3ff     call 0000025B1A3063FC    ;; deoptimization bailout 102
0000025B1A6C6D8A  9802  e877f6c3ff     call 0000025B1A306406    ;; deoptimization bailout 103
0000025B1A6C6D8F  9807  e87cf6c3ff     call 0000025B1A306410    ;; deoptimization bailout 104
0000025B1A6C6D94  9812  e881f6c3ff     call 0000025B1A30641A    ;; deoptimization bailout 105
0000025B1A6C6D99  9817  e886f6c3ff     call 0000025B1A306424    ;; deoptimization bailout 106
0000025B1A6C6D9E  9822  e88bf6c3ff     call 0000025B1A30642E    ;; deoptimization bailout 107
0000025B1A6C6DA3  9827  e890f6c3ff     call 0000025B1A306438    ;; deoptimization bailout 108
0000025B1A6C6DA8  9832  e895f6c3ff     call 0000025B1A306442    ;; deoptimization bailout 109
0000025B1A6C6DAD  9837  e8aef6c3ff     call 0000025B1A306460    ;; deoptimization bailout 112
0000025B1A6C6DB2  9842  e8b3f6c3ff     call 0000025B1A30646A    ;; deoptimization bailout 113
0000025B1A6C6DB7  9847  e8b8f6c3ff     call 0000025B1A306474    ;; deoptimization bailout 114
0000025B1A6C6DBC  9852  e8bdf6c3ff     call 0000025B1A30647E    ;; deoptimization bailout 115
0000025B1A6C6DC1  9857  e8c2f6c3ff     call 0000025B1A306488    ;; deoptimization bailout 116
0000025B1A6C6DC6  9862  e8c7f6c3ff     call 0000025B1A306492    ;; deoptimization bailout 117
0000025B1A6C6DCB  9867  e8ccf6c3ff     call 0000025B1A30649C    ;; deoptimization bailout 118
0000025B1A6C6DD0  9872  e8d1f6c3ff     call 0000025B1A3064A6    ;; deoptimization bailout 119
0000025B1A6C6DD5  9877  e8d6f6c3ff     call 0000025B1A3064B0    ;; deoptimization bailout 120
0000025B1A6C6DDA  9882  e8dbf6c3ff     call 0000025B1A3064BA    ;; deoptimization bailout 121
0000025B1A6C6DDF  9887  e8e0f6c3ff     call 0000025B1A3064C4    ;; deoptimization bailout 122
0000025B1A6C6DE4  9892  e8e5f6c3ff     call 0000025B1A3064CE    ;; deoptimization bailout 123
0000025B1A6C6DE9  9897  e8eaf6c3ff     call 0000025B1A3064D8    ;; deoptimization bailout 124
0000025B1A6C6DEE  9902  e8eff6c3ff     call 0000025B1A3064E2    ;; deoptimization bailout 125
0000025B1A6C6DF3  9907  e8f4f6c3ff     call 0000025B1A3064EC    ;; deoptimization bailout 126
0000025B1A6C6DF8  9912  e803f7c3ff     call 0000025B1A306500    ;; deoptimization bailout 128
0000025B1A6C6DFD  9917  e812f7c3ff     call 0000025B1A306514    ;; deoptimization bailout 130
0000025B1A6C6E02  9922  e817f7c3ff     call 0000025B1A30651E    ;; deoptimization bailout 131
0000025B1A6C6E07  9927  e81cf7c3ff     call 0000025B1A306528    ;; deoptimization bailout 132
0000025B1A6C6E0C  9932  e821f7c3ff     call 0000025B1A306532    ;; deoptimization bailout 133
0000025B1A6C6E11  9937  e826f7c3ff     call 0000025B1A30653C    ;; deoptimization bailout 134
0000025B1A6C6E16  9942  e82bf7c3ff     call 0000025B1A306546    ;; deoptimization bailout 135
0000025B1A6C6E1B  9947  e858f7c3ff     call 0000025B1A306578    ;; deoptimization bailout 140
0000025B1A6C6E20  9952  e85df7c3ff     call 0000025B1A306582    ;; deoptimization bailout 141
0000025B1A6C6E25  9957  e862f7c3ff     call 0000025B1A30658C    ;; deoptimization bailout 142
0000025B1A6C6E2A  9962  e867f7c3ff     call 0000025B1A306596    ;; deoptimization bailout 143
0000025B1A6C6E2F  9967  e86cf7c3ff     call 0000025B1A3065A0    ;; deoptimization bailout 144
0000025B1A6C6E34  9972  e871f7c3ff     call 0000025B1A3065AA    ;; deoptimization bailout 145
0000025B1A6C6E39  9977  e876f7c3ff     call 0000025B1A3065B4    ;; deoptimization bailout 146
0000025B1A6C6E3E  9982  6690           nop

Inlined functions (count = 3)
 000001ACCCACD059 <SharedFunctionInfo set>
 000001ACCCACC999 <SharedFunctionInfo popcnt>
 000001ACCCACC759 <SharedFunctionInfo d_popcnt>

Deoptimization Input Data (deopt points = 147)
 index  ast id    argc     pc
     0       4       0     41
     1       4       0     92
     2     182       0    315
     3     187       0    395
     4     192       0    475
     5     203       0    589
     6     208       0    669
     7     216       0    766
     8     221       0    846
     9     226       0    933
    10     231       0    962
    11     236       0    991
    12     241       0   1020
    13     246       0   1042
    14     251       0   1122
    15     256       0   1226
    16     261       0   1255
    17     266       0   1284
    18     271       0   1313
    19     276       0   1335
    20     281       0   1422
    21     286       0   1451
    22     291       0   1480
    23     296       0   1509
    24     301       0   1538
    25     306       0   1567
    26     311       0   1596
    27     604       0   2097
    28     609       0   2184
    29     614       0   2213
    30     619       0   2242
    31     624       0   2281
    32     629       0   2361
    33     634       0   2448
    34     639       0   2477
    35     644       0   2506
    36     649       0   2535
    37     654       0   2564
    38     659       0   2586
    39     664       0   2683
    40     669       0   2780
    41     674       0   2884
    42     679       0   2906
    43     684       0   2986
    44     136       0   3093
    45     733       0   3270
    46     752       0   3386
    47     771       0   3502
    48     790       0   3618
    49     809       0   3734
    50     828       0   3850
    51     847       0   3966
    52     866       0   4082
    53     885       0   4198
    54     904       0   4314
    55     923       0   4436
    56     942       0   4558
    57     937       0     -1
    58     937       0     -1
    59     937       0     -1
    60    1003       0   4743
    61     999       0   4798
    62    1012       0   4820
    63     991       0   4851
    64    1036       0   4980
    65    1032       0   5035
    66    1045       0   5057
    67    1024       0   5088
    68    1019       0     -1
    69    1019       0     -1
    70    1089       0   5256
    71    1085       0   5311
    72    1098       0   5333
    73    1077       0   5364
    74    1072       0     -1
    75    1072       0     -1
    76    1072       0     -1
    77    1072       0     -1
    78    1072       0     -1
    79    2288       0   6764
    80    2321       0   6886
    81    2354       0   7008
    82    2373       0   7130
    83    2392       0   7252
    84    2411       0   7374
    85    2430       0   7496
    86    2425       0     -1
    87    2425       0     -1
    88    2425       0     -1
    89    2425       0     -1
    90    2425       0     -1
    91    2425       0     -1
    92    2425       0     -1
    93    2425       0     -1
    94    2425       0     -1
    95    2425       0     -1
    96    2425       0     -1
    97       3       0     -1
    98       3       0     -1
    99       3       0     -1
   100       3       0     -1
   101       3       0     -1
   102       5       0     -1
   103       5       0     -1
   104    2619       0     -1
   105       3       0     -1
   106       3       0     -1
   107       3       0     -1
   108       3       0     -1
   109       5       0     -1
   110    2665       0   8080
   111    2737       0     -1
   112    2735       0     -1
   113    2735       0     -1
   114    2735       0     -1
   115    2735       0     -1
   116    2735       0     -1
   117    2735       0     -1
   118    2735       0     -1
   119    2735       0     -1
   120    2735       0     -1
   121    2735       0     -1
   122    2735       0     -1
   123    2735       0     -1
   124    2735       0     -1
   125    2735       0     -1
   126    2735       0     -1
   127    2739       0   8719
   128    2761       0     -1
   129    2816       0   8801
   130       3       0     -1
   131       3       0     -1
   132       3       0     -1
   133       3       0     -1
   134       3       0     -1
   135       3       0     -1
   136    2892       0   9047
   137    2888       0   9102
   138    2903       0   9144
   139    2903       0     -1
   140       3       0     -1
   141       5       0     -1
   142    2735       0     -1
   143    2735       0     -1
   144    2735       0     -1
   145    2735       0     -1
   146    2735       0     -1

Safepoints (size = 2878)
0000025B1A6C4769    41  000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       0
0000025B1A6C4795    85  000000000000000000000000000000000000000000000000010000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       1
0000025B1A6C487B   315  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       2
0000025B1A6C48CB   395  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       3
0000025B1A6C491B   475  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       4
0000025B1A6C498D   589  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       5
0000025B1A6C49DD   669  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       6
0000025B1A6C4A3E   766  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       7
0000025B1A6C4A8E   846  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       8
0000025B1A6C4ADE   926  000000000000000000000000000000000000000000000000100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)       9
0000025B1A6C4AFB   955  000000000000000000000000000000000000000000000001100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      10
0000025B1A6C4B18   984  000000000000000000000000000000000000000000000011100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      11
0000025B1A6C4B35  1013  000000000000000000000000000000000000000000000111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      12
0000025B1A6C4B52  1042  000000000000000000000000000000000000000000001111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      13
0000025B1A6C4BA2  1122  000000000000000000000000000000000000000000001111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      14
0000025B1A6C4C03  1219  000000000000000000000000000000000000000000001111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      15
0000025B1A6C4C20  1248  000000000000000000000000000000000000000000011111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      16
0000025B1A6C4C3D  1277  000000000000000000000000000000000000000000111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      17
0000025B1A6C4C5A  1306  000000000000000000000000000000000000000001111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      18
0000025B1A6C4C77  1335  000000000000000000000000000000000000000011111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      19
0000025B1A6C4CC7  1415  000000000000000000000000000000000000000011111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      20
0000025B1A6C4CE4  1444  000000000000000000000000000000000000000111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      21
0000025B1A6C4D01  1473  000000000000000000000000000000000000001111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      22
0000025B1A6C4D1E  1502  000000000000000000000000000000000000011111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      23
0000025B1A6C4D3B  1531  000000000000000000000000000000000000111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      24
0000025B1A6C4D58  1560  000000000000000000000000000000000001111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      25
0000025B1A6C4D75  1589  000000000000000000000000000000000011111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      26
0000025B1A6C4F71  2097  000000000000000000000000000000000111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      27
0000025B1A6C4FC1  2177  000000000000000000000000000000000111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      28
0000025B1A6C4FDE  2206  000000000000000000000000000000001111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      29
0000025B1A6C4FFB  2235  000000000000000000000000000000011111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      30
0000025B1A6C5029  2281  000000000000000000000000000000111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      31
0000025B1A6C5079  2361  000000000000000000000000000000111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      32
0000025B1A6C50C9  2441  000000000000000000000000000000111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      33
0000025B1A6C50E6  2470  000000000000000000000000000001111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      34
0000025B1A6C5103  2499  000000000000000000000000000011111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      35
0000025B1A6C5120  2528  000000000000000000000000000111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      36
0000025B1A6C513D  2557  000000000000000000000000001111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      37
0000025B1A6C515A  2586  000000000000000000000000011111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      38
0000025B1A6C51BB  2683  000000000000000000000000011111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      39
0000025B1A6C521C  2780  000000000000000000000000011111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      40
0000025B1A6C527D  2877  000000000000000000000000011111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      41
0000025B1A6C529A  2906  000000000000000000000000111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      42
0000025B1A6C52EA  2986  000000000000000000000000111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      43
0000025B1A6C534B  3083  000000000000000000000000111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      44
0000025B1A6C5406  3270  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      45
0000025B1A6C547A  3386  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      46
0000025B1A6C54EE  3502  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      47
0000025B1A6C5562  3618  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      48
0000025B1A6C55D6  3734  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      49
0000025B1A6C564A  3850  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      50
0000025B1A6C56BE  3966  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      51
0000025B1A6C5732  4082  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      52
0000025B1A6C57A6  4198  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      53
0000025B1A6C581A  4314  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      54
0000025B1A6C5894  4436  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      55
0000025B1A6C590E  4558  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      56
0000025B1A6C59C0  4736  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      60
0000025B1A6C59F7  4791  000000000000000000000011111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      61
0000025B1A6C5A14  4820  000000000000000000000111111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      62
0000025B1A6C5A33  4851  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      63
0000025B1A6C5AAD  4973  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      64
0000025B1A6C5AE4  5028  000000000000000000001001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      65
0000025B1A6C5B01  5057  000000000000000000011001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      66
0000025B1A6C5B20  5088  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      67
0000025B1A6C5BC1  5249  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      70
0000025B1A6C5BF8  5304  000000000000000000100001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      71
0000025B1A6C5C15  5333  000000000000000001100001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      72
0000025B1A6C5C34  5364  000000000000000000000001111111111111111111111111100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      73
0000025B1A6C61AC  6764  000000000000000000000001111111111000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      79
0000025B1A6C6226  6886  000000000000000000000001111111111000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      80
0000025B1A6C62A0  7008  000000000000000000000001111111111000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      81
0000025B1A6C631A  7130  000000000000000000000001111111111000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      82
0000025B1A6C6394  7252  000000000000000000000001111111111000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      83
0000025B1A6C640E  7374  000000000000000000000001111111111000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      84
0000025B1A6C6488  7496  000000000000000000000001111111111000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)      85
0000025B1A6C66D0  8080  000000000000000000000001100000000000000000010010100000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)     110
0000025B1A6C6A90  9040  000000000011111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)     136
0000025B1A6C6AC7  9095  010000000011111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)     137
0000025B1A6C6AF8  9144  110000000011111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 (sp -> fp)     138
0000025B1A6C6C9F  9567  001000011111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 | r8 | r12 | r15 (sp -> fp)     127
0000025B1A6C6CE7  9639  001000011111111110000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000 | r8 | r12 | r15 (sp -> fp)     129

RelocInfo (size = 1049)
0000025B1A6C4765  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6C476F  embedded object  (000001ACCCAD4169 <FixedArray[226]>)
0000025B1A6C4791  code target (STUB)  (0000025B1A606060)
0000025B1A6C479E  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C47AC  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C47BA  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C47C8  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C47D6  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C47E4  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C47F2  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4800  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C480E  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C481C  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C482A  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4838  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4849  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C485A  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C486B  embedded object  (000001ACCCACC399 <SharedFunctionInfo d_bit>)
0000025B1A6C4877  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C48B5  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C48BB  embedded object  (000001ACCCACC459 <SharedFunctionInfo d_lsb>)
0000025B1A6C48C7  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4905  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C490B  embedded object  (000001ACCCACC519 <SharedFunctionInfo d_clsb>)
0000025B1A6C4917  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4955  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C495B  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C496C  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C497D  embedded object  (000001ACCCACC5D9 <SharedFunctionInfo d_bsf>)
0000025B1A6C4989  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C49C7  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C49CD  embedded object  (000001ACCCACC699 <SharedFunctionInfo d_bsr>)
0000025B1A6C49D9  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4A17  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C4A1D  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4A2E  embedded object  (000001ACCCACC759 <SharedFunctionInfo d_popcnt>)
0000025B1A6C4A3A  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4A78  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C4A7E  embedded object  (000001ACCCACC819 <SharedFunctionInfo bit>)
0000025B1A6C4A8A  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4AC8  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C4ACE  embedded object  (000001ACCCACC8D9 <SharedFunctionInfo bool>)
0000025B1A6C4ADA  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4AE7  embedded object  (000001ACCCACC999 <SharedFunctionInfo popcnt>)
0000025B1A6C4AF7  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4B04  embedded object  (000001ACCCACCA59 <SharedFunctionInfo bsf>)
0000025B1A6C4B14  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4B21  embedded object  (000001ACCCACCB19 <SharedFunctionInfo bsr>)
0000025B1A6C4B31  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4B3E  embedded object  (000001ACCCACCBD9 <SharedFunctionInfo q_str>)
0000025B1A6C4B4E  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4B8C  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C4B92  embedded object  (000001ACCCACCC99 <SharedFunctionInfo q_bitboard>)
0000025B1A6C4B9E  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4BDC  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C4BE2  embedded object  (000001ACCCACCD59 <SharedFunctionInfo dump>)
0000025B1A6C4BFF  code target (STUB)  (0000025B1A606060)
0000025B1A6C4C0C  embedded object  (000001ACCCACCE19 <SharedFunctionInfo com>)
0000025B1A6C4C1C  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4C29  embedded object  (000001ACCCACCED9 <SharedFunctionInfo zero>)
0000025B1A6C4C39  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4C46  embedded object  (000001ACCCACCF99 <SharedFunctionInfo mov>)
0000025B1A6C4C56  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4C63  embedded object  (000001ACCCACD059 <SharedFunctionInfo set>)
0000025B1A6C4C73  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4CB1  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C4CB7  embedded object  (000001ACCCACD119 <SharedFunctionInfo and>)
0000025B1A6C4CC3  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4CD0  embedded object  (000001ACCCACD1D9 <SharedFunctionInfo or>)
0000025B1A6C4CE0  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4CED  embedded object  (000001ACCCACD299 <SharedFunctionInfo xor>)
0000025B1A6C4CFD  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4D0A  embedded object  (000001ACCCACD359 <SharedFunctionInfo shl>)
0000025B1A6C4D1A  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4D27  embedded object  (000001ACCCACD419 <SharedFunctionInfo shr>)
0000025B1A6C4D37  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4D44  embedded object  (000001ACCCACD4D9 <SharedFunctionInfo lsb>)
0000025B1A6C4D54  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4D61  embedded object  (000001ACCCACD599 <SharedFunctionInfo clsb>)
0000025B1A6C4D71  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4D7E  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4D96  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4DA7  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4DB8  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4DC9  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4DDA  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4DEB  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4DFC  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E0D  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E1E  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E2F  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E40  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E51  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E62  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E73  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E84  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4E95  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4EA6  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4EB7  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4EC8  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4ED9  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4EEA  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4EFB  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4F0C  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4F1D  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4F2E  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4F3F  embedded object  (0000039DEE004519 <the hole>)
0000025B1A6C4F50  embedded object  (000001ACCCACD659 <SharedFunctionInfo s_str>)
0000025B1A6C4F6D  code target (STUB)  (0000025B1A606060)
0000025B1A6C4FAB  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C4FB1  embedded object  (000001ACCCACD719 <SharedFunctionInfo color>)
0000025B1A6C4FBD  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4FCA  embedded object  (000001ACCCACD7D9 <SharedFunctionInfo sliding>)
0000025B1A6C4FDA  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C4FE7  embedded object  (000001ACCCACD899 <SharedFunctionInfo enemy>)
0000025B1A6C4FF7  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5004  embedded object  (000001ACCCACD959 <SharedFunctionInfo p_str>)
0000025B1A6C5025  code target (STUB)  (0000025B1A606060)
0000025B1A6C5063  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C5069  embedded object  (000001ACCCACDA19 <SharedFunctionInfo piece>)
0000025B1A6C5075  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C50B3  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C50B9  embedded object  (000001ACCCACDAD9 <SharedFunctionInfo captures>)
0000025B1A6C50C5  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C50D2  embedded object  (000001ACCCACDB99 <SharedFunctionInfo promotes>)
0000025B1A6C50E2  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C50EF  embedded object  (000001ACCCACDC59 <SharedFunctionInfo castles>)
0000025B1A6C50FF  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C510C  embedded object  (000001ACCCACDD19 <SharedFunctionInfo push_move>)
0000025B1A6C511C  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5129  embedded object  (000001ACCCACDDD9 <SharedFunctionInfo load_move>)
0000025B1A6C5139  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5146  embedded object  (000001ACCCACDE99 <SharedFunctionInfo at>)
0000025B1A6C5156  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5194  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C519A  embedded object  (000001ACCCACDF59 <SharedFunctionInfo c_str>)
0000025B1A6C51B7  code target (STUB)  (0000025B1A606060)
0000025B1A6C51F5  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C51FB  embedded object  (000001ACCCACE019 <SharedFunctionInfo str>)
0000025B1A6C5218  code target (STUB)  (0000025B1A606060)
0000025B1A6C5256  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C525C  embedded object  (000001ACCCACE0D9 <SharedFunctionInfo dump_board>)
0000025B1A6C5279  code target (STUB)  (0000025B1A606060)
0000025B1A6C5286  embedded object  (000001ACCCACE199 <SharedFunctionInfo place>)
0000025B1A6C5296  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C52D4  code target (STUB)  (0000025B1A6C1760)
0000025B1A6C52DA  embedded object  (000001ACCCACE259 <SharedFunctionInfo set_board>)
0000025B1A6C52E6  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5324  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C532A  embedded object  (000001ACCCACE319 <SharedFunctionInfo reset>)
0000025B1A6C5347  code target (STUB)  (0000025B1A606060)
0000025B1A6C538B  code target (STUB)  (0000025B1A6C2980)
0000025B1A6C53C6  code target (STUB)  (0000025B1A6C2980)
0000025B1A6C53CA  position  (342)
0000025B1A6C53CC  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C53E4  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C53EE  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5402  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C543A  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C543E  position  (372)
0000025B1A6C5440  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5456  position  (342)
0000025B1A6C5458  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5462  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5475  position  (372)
0000025B1A6C5476  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C54AE  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C54B2  position  (402)
0000025B1A6C54B4  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C54CA  position  (342)
0000025B1A6C54CC  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C54D6  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C54E9  position  (402)
0000025B1A6C54EA  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C5522  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C5526  position  (432)
0000025B1A6C5528  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C553E  position  (342)
0000025B1A6C5540  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C554A  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C555D  position  (432)
0000025B1A6C555E  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C5596  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C559A  position  (461)
0000025B1A6C559C  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C55B2  position  (342)
0000025B1A6C55B4  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C55BE  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C55D1  position  (461)
0000025B1A6C55D2  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C560A  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C560E  position  (490)
0000025B1A6C5610  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5626  position  (342)
0000025B1A6C5628  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5632  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5645  position  (490)
0000025B1A6C5646  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C567E  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C5682  position  (519)
0000025B1A6C5684  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C569A  position  (342)
0000025B1A6C569C  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C56A6  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C56B9  position  (519)
0000025B1A6C56BA  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C56F2  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C56F6  position  (548)
0000025B1A6C56F8  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C570E  position  (342)
0000025B1A6C5710  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C571A  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C572D  position  (548)
0000025B1A6C572E  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C5766  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C576A  position  (577)
0000025B1A6C576C  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5782  position  (342)
0000025B1A6C5784  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C578E  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C57A1  position  (577)
0000025B1A6C57A2  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C57DA  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C57DE  position  (606)
0000025B1A6C57E0  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C57F6  position  (342)
0000025B1A6C57F8  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5802  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5815  position  (606)
0000025B1A6C5816  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C5854  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C5858  position  (635)
0000025B1A6C585A  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5870  position  (342)
0000025B1A6C5872  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C587C  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C588F  position  (635)
0000025B1A6C5890  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C58CE  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C58D2  position  (664)
0000025B1A6C58D4  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C58EA  position  (342)
0000025B1A6C58EC  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C58F6  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C5909  position  (664)
0000025B1A6C590A  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C594D  code target (STUB)  (0000025B1A6C32C0)
0000025B1A6C5984  position  (988)
0000025B1A6C5986  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C599E  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C59A8  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C59BC  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C59D6  embedded object  (0000039DEE05C761 <String[3]: map>)
0000025B1A6C59E0  embedded object  (000001ACCCACBA41 <FixedArray[67]>)
0000025B1A6C59F3  code target (LOAD_IC)  (0000025B1A6C3C00)
0000025B1A6C5A00  embedded object  (000001ACCCACE3D9 <SharedFunctionInfo>)
0000025B1A6C5A10  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5A2F  code target (BUILTIN)  (0000025B1A61DA60)
0000025B1A6C5A6D  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C5A71  position  (1193)
0000025B1A6C5A73  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C5A89  position  (988)
0000025B1A6C5A8B  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C5A95  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C5AA8  position  (1193)
0000025B1A6C5AA9  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C5AC3  embedded object  (0000039DEE05C761 <String[3]: map>)
0000025B1A6C5ACD  embedded object  (000001ACCCACBA41 <FixedArray[67]>)
0000025B1A6C5AE0  code target (LOAD_IC)  (0000025B1A6C3C00)
0000025B1A6C5AED  embedded object  (000001ACCCACE499 <SharedFunctionInfo>)
0000025B1A6C5AFD  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5B1C  code target (BUILTIN)  (0000025B1A61DA60)
0000025B1A6C5B5F  code target (STUB)  (0000025B1A6C32C0)
0000025B1A6C5B85  position  (1684)
0000025B1A6C5B87  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C5B9D  position  (988)
0000025B1A6C5B9F  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C5BA9  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C5BBC  position  (1684)
0000025B1A6C5BBD  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C5BD7  embedded object  (0000039DEE05C761 <String[3]: map>)
0000025B1A6C5BE1  embedded object  (000001ACCCACBA41 <FixedArray[67]>)
0000025B1A6C5BF4  code target (LOAD_IC)  (0000025B1A6C3C00)
0000025B1A6C5C01  embedded object  (000001ACCCACE559 <SharedFunctionInfo>)
0000025B1A6C5C11  code target (STUB)  (0000025B1A62D2C0)
0000025B1A6C5C30  code target (BUILTIN)  (0000025B1A61DA60)
0000025B1A6C5C73  code target (STUB)  (0000025B1A6C32C0)
0000025B1A6C5D01  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5D42  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5D46  position  (342)
0000025B1A6C5D50  position  (1684)
0000025B1A6C5D83  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5DC4  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5E05  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5E46  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5E87  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5EC8  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5F09  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5F4A  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5F8B  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C5FCC  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C600D  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C6046  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C6087  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C608B  position  (342)
0000025B1A6C6095  position  (1684)
0000025B1A6C60C8  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C6109  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C614A  code target (STUB)  (0000025B1A6C3E00)
0000025B1A6C614E  position  (6936)
0000025B1A6C615F  position  (7060)
0000025B1A6C6170  position  (7139)
0000025B1A6C6172  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6188  position  (342)
0000025B1A6C618A  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6194  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C61A7  position  (7139)
0000025B1A6C61A8  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C61E6  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C61EA  position  (7267)
0000025B1A6C61EC  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C6202  position  (988)
0000025B1A6C6204  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C620E  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C6221  position  (7267)
0000025B1A6C6222  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C6260  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C6264  position  (7366)
0000025B1A6C6266  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C627C  position  (342)
0000025B1A6C627E  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6288  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C629B  position  (7366)
0000025B1A6C629C  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C62DA  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C62DE  position  (7527)
0000025B1A6C62E0  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C62F6  position  (342)
0000025B1A6C62F8  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6302  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6315  position  (7527)
0000025B1A6C6316  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C6354  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C6358  position  (7563)
0000025B1A6C635A  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6370  position  (342)
0000025B1A6C6372  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C637C  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C638F  position  (7563)
0000025B1A6C6390  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C63CE  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C63D2  position  (7613)
0000025B1A6C63D4  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C63EA  position  (988)
0000025B1A6C63EC  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C63F6  embedded object  (0000039DEE047591 <JS Function Uint8Array (SharedFunctionInfo 0000039DEE0474E9)>)
0000025B1A6C6409  position  (7613)
0000025B1A6C640A  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C6448  code target (STUB)  (0000025B1A6C2080)
0000025B1A6C644C  position  (7655)
0000025B1A6C644E  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6464  position  (342)
0000025B1A6C6466  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6470  embedded object  (0000039DEE047AF1 <JS Function Uint32Array (SharedFunctionInfo 0000039DEE047A49)>)
0000025B1A6C6483  position  (7655)
0000025B1A6C6484  code target (BUILTIN)  (0000025B1A61E2E0)
0000025B1A6C64C7  code target (STUB)  (0000025B1A616520)
0000025B1A6C6553  position  (12585)
0000025B1A6C6574  property cell
0000025B1A6C658A  property cell
0000025B1A6C65AE  embedded object  (0000009195A0FC51 <Map(UINT32_ELEMENTS)>)
0000025B1A6C6602  property cell
0000025B1A6C663E  position  (12601)
0000025B1A6C6657  embedded object  (0000009195A0FC51 <Map(UINT32_ELEMENTS)>)
0000025B1A6C66AA  position  (12634)
0000025B1A6C66AC  embedded object  (0000039DEE041FE1 <JS Function Date (SharedFunctionInfo 0000039DEE041F39)>)
0000025B1A6C66B8  embedded object  (0000039DEE042131 <JS Function now (SharedFunctionInfo 0000039DEE042089)>)
0000025B1A6C67B6  position  (12678)
0000025B1A6C67CB  position  (12807)
0000025B1A6C67DC  property cell
0000025B1A6C67F2  property cell
0000025B1A6C67FD  position  (2188)
0000025B1A6C6818  position  (12807)
0000025B1A6C681A  property cell
0000025B1A6C6825  position  (2188)
0000025B1A6C683F  embedded object  (0000009195A0FC51 <Map(UINT32_ELEMENTS)>)
0000025B1A6C688F  property cell
0000025B1A6C68A6  position  (12807)
0000025B1A6C68A8  property cell
0000025B1A6C68B3  position  (2188)
0000025B1A6C68CB  position  (1905)
0000025B1A6C68D6  embedded object  (0000009195A0F469 <Map(UINT8_ELEMENTS)>)
0000025B1A6C6911  position  (12807)
0000025B1A6C6913  property cell
0000025B1A6C691E  position  (2206)
0000025B1A6C6942  position  (12634)
0000025B1A6C6958  position  (12685)
0000025B1A6C696A  position  (12685)
0000025B1A6C6976  position  (12678)
0000025B1A6C69A4  position  (2188)
0000025B1A6C69AE  position  (1905)
0000025B1A6C69CD  position  (1935)
0000025B1A6C69E4  position  (1915)
0000025B1A6C69E6  position  (2206)
0000025B1A6C69EC  position  (1905)
0000025B1A6C6A01  position  (1935)
0000025B1A6C6A18  position  (1915)
0000025B1A6C6A1A  position  (2204)
0000025B1A6C6A5B  position  (12831)
0000025B1A6C6A6F  embedded object  (0000039DEE0B7991 <String[7]: console>)
0000025B1A6C6A79  embedded object  (000001ACCCACBA41 <FixedArray[67]>)
0000025B1A6C6A8C  code target (LOAD_IC)  (0000025B1A6C3C00)
0000025B1A6C6AA6  embedded object  (0000039DEE04B029 <String[3]: log>)
0000025B1A6C6AB0  embedded object  (000001ACCCACBA41 <FixedArray[67]>)
0000025B1A6C6AC3  code target (LOAD_IC)  (0000025B1A6C3C00)
0000025B1A6C6ACE  position  (12841)
0000025B1A6C6AD0  embedded object  (0000039DEE041FE1 <JS Function Date (SharedFunctionInfo 0000039DEE041F39)>)
0000025B1A6C6ADC  embedded object  (0000039DEE042131 <JS Function now (SharedFunctionInfo 0000039DEE042089)>)
0000025B1A6C6AF8  position  (12847)
0000025B1A6C6AF9  runtime entry
0000025B1A6C6B05  position  (12585)
0000025B1A6C6B6F  position  (12634)
0000025B1A6C6BD7  position  (12678)
0000025B1A6C6C0B  position  (2188)
0000025B1A6C6C3F  position  (2206)
0000025B1A6C6C73  position  (12634)
0000025B1A6C6C9B  code target (STUB)  (0000025B1A606200)
0000025B1A6C6CBB  position  (12678)
0000025B1A6C6CE3  code target (STUB)  (0000025B1A606200)
0000025B1A6C6D04  runtime entry  (deoptimization bailout 57)
0000025B1A6C6D09  runtime entry  (deoptimization bailout 58)
0000025B1A6C6D0E  runtime entry  (deoptimization bailout 59)
0000025B1A6C6D13  runtime entry  (deoptimization bailout 68)
0000025B1A6C6D18  runtime entry  (deoptimization bailout 69)
0000025B1A6C6D1D  runtime entry  (deoptimization bailout 74)
0000025B1A6C6D22  runtime entry  (deoptimization bailout 75)
0000025B1A6C6D27  runtime entry  (deoptimization bailout 76)
0000025B1A6C6D2C  runtime entry  (deoptimization bailout 77)
0000025B1A6C6D31  runtime entry  (deoptimization bailout 78)
0000025B1A6C6D36  runtime entry  (deoptimization bailout 86)
0000025B1A6C6D3B  runtime entry  (deoptimization bailout 87)
0000025B1A6C6D40  runtime entry  (deoptimizat0.00000489
rax: 0000000000000000000000000000000100000000000000000000000000000000
rbx: 0000000000000000000000000000000000000000000000000000000000000001
rcx: 0000000000000000000000000000000000000000000000000000000000000000
rdx: 0000000000000000000000000000000000000000000000000000000000000000
r8: 0000000000000000000000000000000000000000000000000000000000000000
r9: 0000000000000000000000000000000000000000000000000000000000000000
rA: 0000000000000000000000000000000000000000000000000000000000000000
rB: 0000000000000000000000000000000000000000000000000000000000000000
rC: 0000000000000000000000000000000000000000000000000000000000000000
rD: 0000000000000000000000000000000000000000000000000000000000000000
rE: 0000000000000000000000000000000000000000000000000000000000000000
rF: 0000000000000000000000000000000000000000000000000000000000000000
wp: 
00000000
00000000
00000000
00000000
00000000
00000000
11111111
00000000

wk: 
00000000
00000000
00000000
00000000
00000000
00000000
00000000
00001000

wn: 
00000000
00000000
00000000
00000000
00000000
00000000
00000000
01000010

wq: 
00000000
00000000
00000000
00000000
00000000
00000000
00000000
00010000

wr: 
00000000
00000000
00000000
00000000
00000000
00000000
00000000
10000001

ion bailout 88)
0000025B1A6C6D45  runtime entry  (deoptimization bailout 89)
0000025B1A6C6D4A  runtime entry  (deoptimization bailout 90)
0000025B1A6C6D4F  runtime entry  (deoptimization bailout 91)
0000025B1A6C6D54  runtime entry  (deoptimization bailout 92)
0000025B1A6C6D59  runtime entry  (deoptimization bailout 93)
0000025B1A6C6D5E  runtime entry  (deoptimization bailout 94)
0000025B1A6C6D63  runtime entry  (deoptimization bailout 95)
0000025B1A6C6D68  runtime entry  (deoptimization bailout 96)
0000025B1A6C6D6D  runtime entry  (deoptimization bailout 97)
0000025B1A6C6D72  runtime entry  (deoptimization bailout 98)
0000025B1A6C6D77  runtime entry  (deoptimization bailout 99)
0000025B1A6C6D7C  runtime entry  (deoptimization bailout 100)
0000025B1A6C6D81  runtime entry  (deoptimization bailout 101)
0000025B1A6C6D86  runtime entry  (deoptimization bailout 102)
0000025B1A6C6D8B  runtime entry  (deoptimization bailout 103)
0000025B1A6C6D90  runtime entry  (deoptimization bailout 104)
0000025B1A6C6D95  runtime entry  (deoptimization bailout 105)
0000025B1A6C6D9A  runtime entry  (deoptimization bailout 106)
0000025B1A6C6D9F  runtime entry  (deoptimization bailout 107)
0000025B1A6C6DA4  runtime entry  (deoptimization bailout 108)
0000025B1A6C6DA9  runtime entry  (deoptimization bailout 109)
0000025B1A6C6DAE  runtime entry  (deoptimization bailout 112)
0000025B1A6C6DB3  runtime entry  (deoptimization bailout 113)
0000025B1A6C6DB8  runtime entry  (deoptimization bailout 114)
0000025B1A6C6DBD  runtime entry  (deoptimization bailout 115)
0000025B1A6C6DC2  runtime entry  (deoptimization bailout 116)
0000025B1A6C6DC7  runtime entry  (deoptimization bailout 117)
0000025B1A6C6DCC  runtime entry  (deoptimization bailout 118)
0000025B1A6C6DD1  runtime entry  (deoptimization bailout 119)
0000025B1A6C6DD6  runtime entry  (deoptimization bailout 120)
0000025B1A6C6DDB  runtime entry  (deoptimization bailout 121)
0000025B1A6C6DE0  runtime entry  (deoptimization bailout 122)
0000025B1A6C6DE5  runtime entry  (deoptimization bailout 123)
0000025B1A6C6DEA  runtime entry  (deoptimization bailout 124)
0000025B1A6C6DEF  runtime entry  (deoptimization bailout 125)
0000025B1A6C6DF4  runtime entry  (deoptimization bailout 126)
0000025B1A6C6DF9  runtime entry  (deoptimization bailout 128)
0000025B1A6C6DFE  runtime entry  (deoptimization bailout 130)
0000025B1A6C6E03  runtime entry  (deoptimization bailout 131)
0000025B1A6C6E08  runtime entry  (deoptimization bailout 132)
0000025B1A6C6E0D  runtime entry  (deoptimization bailout 133)
0000025B1A6C6E12  runtime entry  (deoptimization bailout 134)
0000025B1A6C6E17  runtime entry  (deoptimization bailout 135)
0000025B1A6C6E1C  runtime entry  (deoptimization bailout 140)
0000025B1A6C6E21  runtime entry  (deoptimization bailout 141)
0000025B1A6C6E26  runtime entry  (deoptimization bailout 142)
0000025B1A6C6E2B  runtime entry  (deoptimization bailout 143)
0000025B1A6C6E30  runtime entry  (deoptimization bailout 144)
0000025B1A6C6E35  runtime entry  (deoptimization bailout 145)
0000025B1A6C6E3A  runtime entry  (deoptimization bailout 146)

--- End code ---
--- Raw source ---
(n, x) { return (n & 32) ? d_bit(n ^ 32, x[HI]) : d_bit(n, x[LO]) } 

--- Optimized code ---
optimization_id = 7
source_position = 2011
kind = OPTIMIZED_FUNCTION
name = bit
stack_slots = 5
compiler = crankshaft
Instructions (size = 731)
0000025B1A6EE160     0  55             push rbp
0000025B1A6EE161     1  4889e5         REX.W movq rbp,rsp
0000025B1A6EE164     4  56             push rsi
0000025B1A6EE165     5  57             push rdi
0000025B1A6EE166     6  4883ec08       REX.W subq rsp,0x8
0000025B1A6EE16A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6EE16E    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6EE172    18  488bf0         REX.W movq rsi,rax
0000025B1A6EE175    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6EE17C    28  7305           jnc 35  (0000025B1A6EE183)
0000025B1A6EE17E    30  e8bd92f3ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6EE183    35  488b4518       REX.W movq rax,[rbp+0x18]
0000025B1A6EE187    39  a801           test al,0x1           ;; debug: position 2030
0000025B1A6EE189    41  0f857a010000   jnz 425  (0000025B1A6EE309)
0000025B1A6EE18F    47  48c1e820       REX.W shrq rax, 32
0000025B1A6EE193    51  488bd8         REX.W movq rbx,rax
0000025B1A6EE196    54  83e320         andl rbx,0x20
0000025B1A6EE199    57  85db           testl rbx,rbx
0000025B1A6EE19B    59  0f85b0000000   jnz 241  (0000025B1A6EE251)
0000025B1A6EE1A1    65  488b5de8       REX.W movq rbx,[rbp-0x18]    ;; debug: position 2061
0000025B1A6EE1A5    69  488b939f000000 REX.W movq rdx,[rbx+0x9f]
0000025B1A6EE1AC    76  493b55d8       REX.W cmpq rdx,[r13-0x28]
0000025B1A6EE1B0    80  0f841c020000   jz 626  (0000025B1A6EE3D2)
0000025B1A6EE1B6    86  488b4b2f       REX.W movq rcx,[rbx+0x2f]
0000025B1A6EE1BA    90  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6EE1BE    94  0f8413020000   jz 631  (0000025B1A6EE3D7)
0000025B1A6EE1C4   100  488b7510       REX.W movq rsi,[rbp+0x10]
0000025B1A6EE1C8   104  40f6c601       testb rsi,0x1
0000025B1A6EE1CC   108  0f840a020000   jz 636  (0000025B1A6EE3DC)
0000025B1A6EE1D2   114  49ba51fca09591000000 REX.W movq r10,0000009195A0FC51    ;; object: 0000009195A0FC51 <Map(UINT32_ELEMENTS)>
0000025B1A6EE1DC   124  4c3956ff       REX.W cmpq [rsi-0x1],r10
0000025B1A6EE1E0   128  0f85fb010000   jnz 641  (0000025B1A6EE3E1)
0000025B1A6EE1E6   134  488b7e0f       REX.W movq rdi,[rsi+0xf]
0000025B1A6EE1EA   138  448b470b       movl r8,[rdi+0xb]
0000025B1A6EE1EE   142  4c8b5617       REX.W movq r10,[rsi+0x17]
0000025B1A6EE1F2   146  41f6422708     testb [r10+0x27],0x8
0000025B1A6EE1F7   151  0f85e9010000   jnz 646  (0000025B1A6EE3E6)
0000025B1A6EE1FD   157  4c8b4f17       REX.W movq r9,[rdi+0x17]
0000025B1A6EE201   161  488b7f0f       REX.W movq rdi,[rdi+0xf]
0000025B1A6EE205   165  4c03cf         REX.W addq r9,rdi
0000025B1A6EE208   168  f6c101         testb rcx,0x1
0000025B1A6EE20B   171  0f8559010000   jnz 522  (0000025B1A6EE36A)
0000025B1A6EE211   177  48c1e920       REX.W shrq rcx, 32
0000025B1A6EE215   181  443bc1         cmpl r8,rcx
0000025B1A6EE218   184  0f86cd010000   jna 651  (0000025B1A6EE3EB)
0000025B1A6EE21E   190  418b0c89       movl rcx,[r9+rcx*4]
0000025B1A6EE222   194  49ba708151198e030000 REX.W movq r10,0000038E19518170    ;; property cell
0000025B1A6EE22C   204  4d8b12         REX.W movq r10,[r10]
0000025B1A6EE22F   207  493bd2         REX.W cmpq rdx,r10
0000025B1A6EE232   210  0f85b8010000   jnz 656  (0000025B1A6EE3F0)
0000025B1A6EE238   216  4c8bd1         REX.W movq r10,rcx
0000025B1A6EE23B   219  488bc8         REX.W movq rcx,rax
0000025B1A6EE23E   222  498bc2         REX.W movq rax,r10
0000025B1A6EE241   225  d3e8           shrl rax, cl          ;; debug: position 789
0000025B1A6EE243   227  83e001         andl rax,0x1          ;; debug: position 796
0000025B1A6EE246   230  8bd8           movl rbx,rax
0000025B1A6EE248   232  48c1e320       REX.W shlq rbx, 32
0000025B1A6EE24C   236  e9ae000000     jmp 415  (0000025B1A6EE2FF)
0000025B1A6EE251   241  488b7510       REX.W movq rsi,[rbp+0x10]    ;; debug: position 2030
0000025B1A6EE255   245  488b5de8       REX.W movq rbx,[rbp-0x18]
0000025B1A6EE259   249  488b939f000000 REX.W movq rdx,[rbx+0x9f]    ;; debug: position 2038
0000025B1A6EE260   256  493b55d8       REX.W cmpq rdx,[r13-0x28]
0000025B1A6EE264   260  0f848b010000   jz 661  (0000025B1A6EE3F5)
0000025B1A6EE26A   266  83f020         xorl rax,0x20         ;; debug: position 2046
0000025B1A6EE26D   269  488b4b37       REX.W movq rcx,[rbx+0x37]
0000025B1A6EE271   273  493b4dd8       REX.W cmpq rcx,[r13-0x28]
0000025B1A6EE275   277  0f847f010000   jz 666  (0000025B1A6EE3FA)
0000025B1A6EE27B   283  40f6c601       testb rsi,0x1
0000025B1A6EE27F   287  0f847a010000   jz 671  (0000025B1A6EE3FF)
0000025B1A6EE285   293  49ba51fca09591000000 REX.W movq r10,0000009195A0FC51    ;; object: 0000009195A0FC51 <Map(UINT32_ELEMENTS)>
0000025B1A6EE28F   303  4c3956ff       REX.W cmpq [rsi-0x1],r10
0000025B1A6EE293   307  0f856b010000   jnz 676  (0000025B1A6EE404)
0000025B1A6EE299   313  488b7e0f       REX.W movq rdi,[rsi+0xf]
0000025B1A6EE29D   317  448b470b       movl r8,[rdi+0xb]
0000025B1A6EE2A1   321  4c8b5617       REX.W movq r10,[rsi+0x17]
0000025B1A6EE2A5   325  41f6422708     testb [r10+0x27],0x8
0000025B1A6EE2AA   330  0f8559010000   jnz 681  (0000025B1A6EE409)
0000025B1A6EE2B0   336  4c8b4f17       REX.W movq r9,[rdi+0x17]
0000025B1A6EE2B4   340  488b7f0f       REX.W movq rdi,[rdi+0xf]
0000025B1A6EE2B8   344  4c03cf         REX.W addq r9,rdi
0000025B1A6EE2BB   347  f6c101         testb rcx,0x1
0000025B1A6EE2BE   350  0f85da000000   jnz 574  (0000025B1A6EE39E)
0000025B1A6EE2C4   356  48c1e920       REX.W shrq rcx, 32
0000025B1A6EE2C8   360  443bc1         cmpl r8,rcx
0000025B1A6EE2CB   363  0f863d010000   jna 686  (0000025B1A6EE40E)
0000025B1A6EE2D1   369  418b0c89       movl rcx,[r9+rcx*4]
0000025B1A6EE2D5   373  49ba808151198e030000 REX.W movq r10,0000038E19518180    ;; property cell
0000025B1A6EE2DF   383  4d8b12         REX.W movq r10,[r10]
0000025B1A6EE2E2   386  493bd2         REX.W cmpq rdx,r10
0000025B1A6EE2E5   389  0f8528010000   jnz 691  (0000025B1A6EE413)
0000025B1A6EE2EB   395  4c8bd1         REX.W movq r10,rcx
0000025B1A6EE2EE   398  488bc8         REX.W movq rcx,rax
0000025B1A6EE2F1   401  498bc2         REX.W movq rax,r10
0000025B1A6EE2F4   404  d3e8           shrl rax, cl          ;; debug: position 789
0000025B1A6EE2F6   406  83e001         andl rax,0x1          ;; debug: position 796
0000025B1A6EE2F9   409  8bd8           movl rbx,rax
0000025B1A6EE2FB   411  48c1e320       REX.W shlq rbx, 32
0000025B1A6EE2FF   415  488bc3         REX.W movq rax,rbx
0000025B1A6EE302   418  488be5         REX.W movq rsp,rbp
0000025B1A6EE305   421  5d             pop rbp
0000025B1A6EE306   422  c21800         ret 0x18
0000025B1A6EE309   425  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2030
0000025B1A6EE30D   429  4c3950ff       REX.W cmpq [rax-0x1],r10
0000025B1A6EE311   433  7529           jnz 476  (0000025B1A6EE33C)
0000025B1A6EE313   435  c5fb104007     vmovsd xmm0,[rax+0x7]
0000025B1A6EE318   440  c4e1fb2cc0     vcvttsd2siq rax,xmm0
0000025B1A6EE31D   445  4883f801       REX.W cmpq rax,0x1
0000025B1A6EE321   449  7112           jno 469  (0000025B1A6EE335)
0000025B1A6EE323   451  4883ec08       REX.W subq rsp,0x8
0000025B1A6EE327   455  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6EE32C   460  e88f9ef3ff     call 0000025B1A6281C0    ;; code: STUB, DoubleToIStub, minor: 135172
0000025B1A6EE331   465  4883c408       REX.W addq rsp,0x8
0000025B1A6EE335   469  8bc0           movl rax,rax
0000025B1A6EE337   471  e957feffff     jmp 51  (0000025B1A6EE193)
0000025B1A6EE33C   476  493b45a8       REX.W cmpq rax,[r13-0x58]
0000025B1A6EE340   480  7507           jnz 489  (0000025B1A6EE349)
0000025B1A6EE342   482  33c0           xorl rax,rax
0000025B1A6EE344   484  e94afeffff     jmp 51  (0000025B1A6EE193)
0000025B1A6EE349   489  493b45c0       REX.W cmpq rax,[r13-0x40]
0000025B1A6EE34D   493  750a           jnz 505  (0000025B1A6EE359)
0000025B1A6EE34F   495  b801000000     movl rax,0000000000000001
0000025B1A6EE354   500  e93afeffff     jmp 51  (0000025B1A6EE193)
0000025B1A6EE359   505  493b45c8       REX.W cmpq rax,[r13-0x38]
0000025B1A6EE35D   509  0f85b5000000   jnz 696  (0000025B1A6EE418)
0000025B1A6EE363   515  33c0           xorl rax,rax
0000025B1A6EE365   517  e929feffff     jmp 51  (0000025B1A6EE193)
0000025B1A6EE36A   522  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2061
0000025B1A6EE36E   526  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6EE372   530  0f85a5000000   jnz 701  (0000025B1A6EE41D)
0000025B1A6EE378   536  c5fb104107     vmovsd xmm0,[rcx+0x7]
0000025B1A6EE37D   541  c5fb2cc8       vcvttsd2si rcx,xmm0
0000025B1A6EE381   545  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6EE385   549  c5f32ac9       vcvtlsi2sd xmm1,xmm1,rcx
0000025B1A6EE389   553  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6EE38D   557  0f858a000000   jnz 701  (0000025B1A6EE41D)
0000025B1A6EE393   563  0f8a84000000   jpe 701  (0000025B1A6EE41D)
0000025B1A6EE399   569  e977feffff     jmp 181  (0000025B1A6EE215)
0000025B1A6EE39E   574  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2046
0000025B1A6EE3A2   578  4c3951ff       REX.W cmpq [rcx-0x1],r10
0000025B1A6EE3A6   582  0f8576000000   jnz 706  (0000025B1A6EE422)
0000025B1A6EE3AC   588  c5fb104107     vmovsd xmm0,[rcx+0x7]
0000025B1A6EE3B1   593  c5fb2cc8       vcvttsd2si rcx,xmm0
0000025B1A6EE3B5   597  c5f157c9       vxorpd xmm1,xmm1,xmm1
0000025B1A6EE3B9   601  c5f32ac9       vcvtlsi2sd xmm1,xmm1,rcx
0000025B1A6EE3BD   605  c5f92ec1       vucomisd xmm0,xmm1
0000025B1A6EE3C1   609  0f855b000000   jnz 706  (0000025B1A6EE422)
0000025B1A6EE3C7   615  0f8a55000000   jpe 706  (0000025B1A6EE422)
0000025B1A6EE3CD   621  e9f6feffff     jmp 360  (0000025B1A6EE2C8)
0000025B1A6EE3D2   626  e8337cc1ff     call 0000025B1A30600A    ;; deoptimization bailout 1
0000025B1A6EE3D7   631  e8387cc1ff     call 0000025B1A306014    ;; deoptimization bailout 2
0000025B1A6EE3DC   636  e83d7cc1ff     call 0000025B1A30601E    ;; deoptimization bailout 3
0000025B1A6EE3E1   641  e8427cc1ff     call 0000025B1A306028    ;; deoptimization bailout 4
0000025B1A6EE3E6   646  e8477cc1ff     call 0000025B1A306032    ;; deoptimization bailout 5
0000025B1A6EE3EB   651  e84c7cc1ff     call 0000025B1A30603C    ;; deoptimization bailout 6
0000025B1A6EE3F0   656  e8517cc1ff     call 0000025B1A306046    ;; deoptimization bailout 7
0000025B1A6EE3F5   661  e8567cc1ff     call 0000025B1A306050    ;; deoptimization bailout 8
0000025B1A6EE3FA   666  e85b7cc1ff     call 0000025B1A30605A    ;; deoptimization bailout 9
0000025B1A6EE3FF   671  e8607cc1ff     call 0000025B1A306064    ;; deoptimization bailout 10
0000025B1A6EE404   676  e8657cc1ff     call 0000025B1A30606E    ;; deoptimization bailout 11
0000025B1A6EE409   681  e86a7cc1ff     call 0000025B1A306078    ;; deoptimization bailout 12
0000025B1A6EE40E   686  e86f7cc1ff     call 0000025B1A306082    ;; deoptimization bailout 13
0000025B1A6EE413   691  e8747cc1ff     call 0000025B1A30608C    ;; deoptimization bailout 14
0000025B1A6EE418   696  e8797cc1ff     call 0000025B1A306096    ;; deoptimization bailout 15
0000025B1A6EE41D   701  e87e7cc1ff     call 0000025B1A3060A0    ;; deoptimization bailout 16
0000025B1A6EE422   706  e8837cc1ff     call 0000025B1A3060AA    ;; deoptimization bailout 17
0000025B1A6EE427   711  90             nop

Inlined functions (count = 1)
 000001ACCCACC399 <SharedFunctionInfo d_bit>

Deoptimization Input Data (deopt points = 18)
 index  ast id    argc     pc
     0       4       0     35
     1       8       0     -1
     2       8       0     -1
     3       8       0     -1
     4       8       0     -1
     5       8       0     -1
     6       8       0     -1
     7       8       0     -1
     8       7       0     -1
     9      28       0     -1
    10      28       0     -1
    11      28       0     -1
    12      28       0     -1
    13      28       0     -1
    14      28       0     -1
    15       4       0     -1
    16       8       0     -1
    17      28       0     -1

Safepoints (size = 19)
0000025B1A6EE183    35  10000 (sp -> fp)       0

RelocInfo (size = 90)
0000025B1A6EE17F  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6EE187  position  (2030)
0000025B1A6EE1A1  position  (2061)
0000025B1A6EE1D4  embedded object  (0000009195A0FC51 <Map(UINT32_ELEMENTS)>)
0000025B1A6EE224  property cell
0000025B1A6EE241  position  (789)
0000025B1A6EE243  position  (796)
0000025B1A6EE251  position  (2030)
0000025B1A6EE259  position  (2038)
0000025B1A6EE26A  position  (2046)
0000025B1A6EE287  embedded object  (0000009195A0FC51 <Map(UINT32_ELEMENTS)>)
0000025B1A6EE2D7  property cell
0000025B1A6EE2F4  position  (789)
0000025B1A6EE2F6  position  (796)
0000025B1A6EE309  position  (2030)
0000025B1A6EE32D  code target (STUB)  (0000025B1A6281C0)
0000025B1A6EE36A  position  (2061)
0000025B1A6EE39E  position  (2046)
0000025B1A6EE3D3  runtime entry  (deoptimization bailout 1)
0000025B1A6EE3D8  runtime entry  (deoptimization bailout 2)
0000025B1A6EE3DD  runtime entry  (deoptimization bailout 3)
0000025B1A6EE3E2  runtime entry  (deoptimization bailout 4)
0000025B1A6EE3E7  runtime entry  (deoptimization bailout 5)
0000025B1A6EE3EC  runtime entry  (deoptimization bailout 6)
0000025B1A6EE3F1  runtime entry  (deoptimization bailout 7)
0000025B1A6EE3F6  runtime entry  (deoptimization bailout 8)
0000025B1A6EE3FB  runtime entry  (deoptimization bailout 9)
0000025B1A6EE400  runtime entry  (deoptimization bailout 10)
0000025B1A6EE405  runtime entry  (deoptimization bailout 11)
0000025B1A6EE40A  runtime entry  (deoptimization bailout 12)
0000025B1A6EE40F  runtime entry  (deoptimization bailout 13)
0000025B1A6EE414  runtime entry  (deoptimization bailout 14)
0000025B1A6EE419  runtime entry  (deoptimization bailout 15)
0000025B1A6EE41E  runtime entry  (deoptimization bailout 16)
0000025B1A6EE423  runtime entry  (deoptimization bailout 17)

--- End code ---
--- Raw source ---
(n, x) { return (x >>> n) & 1 } 

--- Optimized code ---
optimization_id = 8
source_position = 770
kind = OPTIMIZED_FUNCTION
name = d_bit
stack_slots = 5
compiler = crankshaft
Instructions (size = 303)
0000025B1A6EE560     0  55             push rbp
0000025B1A6EE561     1  4889e5         REX.W movq rbp,rsp
0000025B1A6EE564     4  56             push rsi
0000025B1A6EE565     5  57             push rdi
0000025B1A6EE566     6  4883ec08       REX.W subq rsp,0x8
0000025B1A6EE56A    10  488b45f8       REX.W movq rax,[rbp-0x8]
0000025B1A6EE56E    14  488945e8       REX.W movq [rbp-0x18],rax
0000025B1A6EE572    18  488bf0         REX.W movq rsi,rax
0000025B1A6EE575    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
0000025B1A6EE57C    28  7305           jnc 35  (0000025B1A6EE583)
0000025B1A6EE57E    30  e8bd8ef3ff     call StackCheck  (0000025B1A627440)    ;; code: BUILTIN
0000025B1A6EE583    35  488b4518       REX.W movq rax,[rbp+0x18]
0000025B1A6EE587    39  a801           test al,0x1           ;; debug: position 789
0000025B1A6EE589    41  0f852a000000   jnz 89  (0000025B1A6EE5B9)
0000025B1A6EE58F    47  48c1e820       REX.W shrq rax, 32
0000025B1A6EE593    51  488b5d10       REX.W movq rbx,[rbp+0x10]
0000025B1A6EE597    55  f6c301         testb rbx,0x1
0000025B1A6EE59A    58  0f856e000000   jnz 174  (0000025B1A6EE60E)
0000025B1A6EE5A0    64  48c1eb20       REX.W shrq rbx, 32
0000025B1A6EE5A4    68  488bc8         REX.W movq rcx,rax
0000025B1A6EE5A7    71  d3eb           shrl rbx, cl
0000025B1A6EE5A9    73  83e301         andl rbx,0x1          ;; debug: position 796
0000025B1A6EE5AC    76  8bc3           movl rax,rbx
0000025B1A6EE5AE    78  48c1e020       REX.W shlq rax, 32
0000025B1A6EE5B2    82  488be5         REX.W movq rsp,rbp
0000025B1A6EE5B5    85  5d             pop rbp
0000025B1A6EE5B6    86  c21800         ret 0x18
0000025B1A6EE5B9    89  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 789
0000025B1A6EE5BD    93  4c3950ff       REX.W cmpq [rax-0x1],r10
0000025B1A6EE5C1    97  7526           jnz 137  (0000025B1A6EE5E9)
0000025B1A6EE5C3    99  c5fb104007     vmovsd xmm0,[rax+0x7]
0000025B1A6EE5C8   104  c4e1fb2cc0     vcvttsd2siq rax,xmm0
0000025B1A6EE5CD   109  4883f801       REX.W cmpq rax,0x1
0000025B1A6EE5D1   113  7112           jno 133  (0000025B1A6EE5E5)
0000025B1A6EE5D3   115  4883ec08       REX.W subq rsp,0x8
0000025B1A6EE5D7   119  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6EE5DC   124  e8df9bf3ff     call 0000025B1A6281C0    ;; code: STUB, DoubleToIStub, minor: 135172
0000025B1A6EE5E1   129  4883c408       REX.W addq rsp,0x8
0000025B1A6EE5E5   133  8bc0           movl rax,rax
0000025B1A6EE5E7   135  ebaa           jmp 51  (0000025B1A6EE593)
0000025B1A6EE5E9   137  493b45a8       REX.W cmpq rax,[r13-0x58]
0000025B1A6EE5ED   141  7504           jnz 147  (0000025B1A6EE5F3)
0000025B1A6EE5EF   143  33c0           xorl rax,rax
0000025B1A6EE5F1   145  eba0           jmp 51  (0000025B1A6EE593)
0000025B1A6EE5F3   147  493b45c0       REX.W cmpq rax,[r13-0x40]
0000025B1A6EE5F7   151  7507           jnz 160  (0000025B1A6EE600)
0000025B1A6EE5F9   153  b801000000     movl rax,0000000000000001
0000025B1A6EE5FE   158  eb93           jmp 51  (0000025B1A6EE593)
0000025B1A6EE600   160  493b45c8       REX.W cmpq rax,[r13-0x38]
0000025B1A6EE604   164  0f8565000000   jnz 271  (0000025B1A6EE66F)
0000025B1A6EE60A   170  33c0           xorl rax,rax
0000025B1A6EE60C   172  eb85           jmp 51  (0000025B1A6EE593)
0000025B1A6EE60E   174  4d8b55f8       REX.W movq r10,[r13-0x8]
0000025B1A6EE612   178  4c3953ff       REX.W cmpq [rbx-0x1],r10
0000025B1A6EE616   182  7529           jnz 225  (0000025B1A6EE641)
0000025B1A6EE618   184  c5fb104307     vmovsd xmm0,[rbx+0x7]
0000025B1A6EE61D   189  c4e1fb2cd8     vcvttsd2siq rbx,xmm0
0000025B1A6EE622   194  4883fb01       REX.W cmpq rbx,0x1
0000025B1A6EE626   198  7112           jno 218  (0000025B1A6EE63A)
0000025B1A6EE628   200  4883ec08       REX.W subq rsp,0x8
0000025B1A6EE62C   204  c5fb110424     vmovsd [rsp],xmm0
0000025B1A6EE631   209  e86afeffff     call 0000025B1A6EE4A0    ;; code: STUB, DoubleToIStub, minor: 135364
0000025B1A6EE636   214  4883c408       REX.W addq rsp,0x8
0000025B1A6EE63A   218  8bdb           movl rbx,rbx
0000025B1A6EE63C   220  e963ffffff     jmp 68  (0000025B1A6EE5A4)
0000025B1A6EE641   225  493b5da8       REX.W cmpq rbx,[r13-0x58]
0000025B1A6EE645   229  7507           jnz 238  (0000025B1A6EE64E)
0000025B1A6EE647   231  33db           xorl rbx,rbx
0000025B1A6EE649   233  e956ffffff     jmp 68  (0000025B1A6EE5A4)
0000025B1A6EE64E   238  493b5dc0       REX.W cmpq rbx,[r13-0x40]
0000025B1A6EE652   242  750a           jnz 254  (0000025B1A6EE65E)
0000025B1A6EE654   244  bb01000000     movl rbx,0000000000000001
0000025B1A6EE659   249  e946ffffff     jmp 68  (0000025B1A6EE5A4)
0000025B1A6EE65E   254  493b5dc8       REX.W cmpq rbx,[r13-0x38]
0000025B1A6EE662   258  0f850c000000   jnz 276  (0000025B1A6EE674)
0000025B1A6EE668   264  33db           xorl rbx,rbx
0000025B1A6EE66A   266  e935ffffff     jmp 68  (0000025B1A6EE5A4)
0000025B1A6EE66F   271  e89679c1ff     call 0000025B1A30600A    ;; deoptimization bailout 1
0000025B1A6EE674   276  e89b79c1ff     call 0000025B1A306014    ;; deoptimization bailout 2
0000025B1A6EE679   281  0f1f00         nop
wb: 
00000000
00000000
00000000
00000000
00000000
00000000
00000000
00100100

bp: 
00000000
11111111
00000000
00000000
00000000
00000000
00000000
00000000

bn: 
01000010
00000000
00000000
00000000
00000000
00000000
00000000
00000000

bq: 
00010000
00000000
00000000
00000000
00000000
00000000
00000000
00000000

br: 
10000001
00000000
00000000
00000000
00000000
00000000
00000000
00000000

bb: 
00100100
00000000
00000000
00000000
00000000
00000000
00000000
00000000

occ: 
11111111
11111111
00000000
00000000
00000000
00000000
11111111
11111111

rnbqkbnr
pppppppp
........
........
........
........
PPPPPPPP
RNBQKBNR
w | 0 moves | - ep | KQkq castling | 0 score

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 3)
 index  ast id    argc     pc
     0       4       0     35
     1       4       0     -1
     2       4       0     -1

Safepoints (size = 19)
0000025B1A6EE583    35  10000 (sp -> fp)       0

RelocInfo (size = 19)
0000025B1A6EE57F  code target (BUILTIN)  (0000025B1A627440)
0000025B1A6EE587  position  (789)
0000025B1A6EE5A9  position  (796)
0000025B1A6EE5B9  position  (789)
0000025B1A6EE5DD  code target (STUB)  (0000025B1A6281C0)
0000025B1A6EE632  code target (STUB)  (0000025B1A6EE4A0)
0000025B1A6EE670  runtime entry  (deoptimization bailout 1)
0000025B1A6EE675  runtime entry  (deoptimization bailout 2)

--- End code ---
