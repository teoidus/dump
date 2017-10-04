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
source_position = 1016
kind = OPTIMIZED_FUNCTION
stack_slots = 5
compiler = crankshaft
Instructions (size = 354)
000000D55DBBB040     0  55             push rbp
000000D55DBBB041     1  4889e5         REX.W movq rbp,rsp
000000D55DBBB044     4  56             push rsi
000000D55DBBB045     5  57             push rdi
000000D55DBBB046     6  4883ec08       REX.W subq rsp,0x8
000000D55DBBB04A    10  488b45f8       REX.W movq rax,[rbp-0x8]
000000D55DBBB04E    14  488945e8       REX.W movq [rbp-0x18],rax
000000D55DBBB052    18  488bf0         REX.W movq rsi,rax
000000D55DBBB055    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBB05C    28  7305           jnc 35  (000000D55DBBB063)
000000D55DBBB05E    30  e8ddc3f6ff     call StackCheck  (000000D55DB27440)    ;; code: BUILTIN
000000D55DBBB063    35  488b4510       REX.W movq rax,[rbp+0x10]
000000D55DBBB067    39  a801           test al,0x1           ;; debug: position 1071
000000D55DBBB069    41  0f8561000000   jnz 144  (000000D55DBBB0D0)
000000D55DBBB06F    47  48c1e820       REX.W shrq rax, 32
000000D55DBBB073    51  bbffffffff     movl rbx,00000000FFFFFFFF
000000D55DBBB078    56  488bd3         REX.W movq rdx,rbx    ;; debug: position 1051
000000D55DBBB07B    59  83c201         addl rdx,0x1
000000D55DBBB07E    62  0f80f5000000   jo 313  (000000D55DBBB179)
000000D55DBBB084    68  83fa10         cmpl rdx,0x10
000000D55DBBB087    71  0f8d32000000   jge 127  (000000D55DBBB0BF)
000000D55DBBB08D    77  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBB094    84  0f8297000000   jc 241  (000000D55DBBB131)
000000D55DBBB09A    90  488bca         REX.W movq rcx,rdx
000000D55DBBB09D    93  488bd8         REX.W movq rbx,rax
000000D55DBBB0A0    96  d3eb           shrl rbx, cl          ;; debug: position 1071
000000D55DBBB0A2    98  83e301         andl rbx,0x1          ;; debug: position 1078
000000D55DBBB0A5   101  85db           testl rbx,rbx
000000D55DBBB0A7   103  0f8505000000   jnz 114  (000000D55DBBB0B2)
000000D55DBBB0AD   109  488bda         REX.W movq rbx,rdx
000000D55DBBB0B0   112  ebc6           jmp 56  (000000D55DBBB078)
000000D55DBBB0B2   114  8bc2           movl rax,rdx
000000D55DBBB0B4   116  48c1e020       REX.W shlq rax, 32
000000D55DBBB0B8   120  488be5         REX.W movq rsp,rbp
000000D55DBBB0BB   123  5d             pop rbp
000000D55DBBB0BC   124  c21800         ret 0x18
000000D55DBBB0BF   127  48b80000000010000000 REX.W movq rax,0000001000000000
000000D55DBBB0C9   137  488be5         REX.W movq rsp,rbp
000000D55DBBB0CC   140  5d             pop rbp
000000D55DBBB0CD   141  c21800         ret 0x18
000000D55DBBB0D0   144  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 1071
000000D55DBBB0D4   148  4c3950ff       REX.W cmpq [rax-0x1],r10
000000D55DBBB0D8   152  7529           jnz 195  (000000D55DBBB103)
000000D55DBBB0DA   154  c5fb104007     vmovsd xmm0,[rax+0x7]
000000D55DBBB0DF   159  c4e1fb2cc0     vcvttsd2siq rax,xmm0
000000D55DBBB0E4   164  4883f801       REX.W cmpq rax,0x1
000000D55DBBB0E8   168  7112           jno 188  (000000D55DBBB0FC)
000000D55DBBB0EA   170  4883ec08       REX.W subq rsp,0x8
000000D55DBBB0EE   174  c5fb110424     vmovsd [rsp],xmm0
000000D55DBBB0F3   179  e8c8d0f6ff     call 000000D55DB281C0    ;; code: STUB, DoubleToIStub, minor: 135172
000000D55DBBB0F8   184  4883c408       REX.W addq rsp,0x8
000000D55DBBB0FC   188  8bc0           movl rax,rax
000000D55DBBB0FE   190  e970ffffff     jmp 51  (000000D55DBBB073)
000000D55DBBB103   195  493b45a8       REX.W cmpq rax,[r13-0x58]
000000D55DBBB107   199  7507           jnz 208  (000000D55DBBB110)
000000D55DBBB109   201  33c0           xorl rax,rax
000000D55DBBB10B   203  e963ffffff     jmp 51  (000000D55DBBB073)
000000D55DBBB110   208  493b45c0       REX.W cmpq rax,[r13-0x40]
000000D55DBBB114   212  750a           jnz 224  (000000D55DBBB120)
000000D55DBBB116   214  b801000000     movl rax,0000000000000001
000000D55DBBB11B   219  e953ffffff     jmp 51  (000000D55DBBB073)
000000D55DBBB120   224  493b45c8       REX.W cmpq rax,[r13-0x38]
000000D55DBBB124   228  0f8554000000   jnz 318  (000000D55DBBB17E)
000000D55DBBB12A   234  33c0           xorl rax,rax
000000D55DBBB12C   236  e942ffffff     jmp 51  (000000D55DBBB073)
000000D55DBBB131   241  50             push rax              ;; debug: position 1051
000000D55DBBB132   242  51             push rcx
000000D55DBBB133   243  52             push rdx
000000D55DBBB134   244  53             push rbx
000000D55DBBB135   245  56             push rsi
000000D55DBBB136   246  57             push rdi
000000D55DBBB137   247  4150           push r8
000000D55DBBB139   249  4151           push r9
000000D55DBBB13B   251  4153           push r11
000000D55DBBB13D   253  4154           push r12
000000D55DBBB13F   255  4156           push r14
000000D55DBBB141   257  4157           push r15
000000D55DBBB143   259  488d6424e0     REX.W leaq rsp,[rsp-0x20]
000000D55DBBB148   264  488b75f8       REX.W movq rsi,[rbp-0x8]
000000D55DBBB14C   268  33c0           xorl rax,rax
000000D55DBBB14E   270  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
000000D55DBBB158   280  e8a3b0f4ff     call 000000D55DB06200    ;; code: STUB, CEntryStub, minor: 5
000000D55DBBB15D   285  488d642420     REX.W leaq rsp,[rsp+0x20]
000000D55DBBB162   290  415f           pop r15
000000D55DBBB164   292  415e           pop r14
000000D55DBBB166   294  415c           pop r12
000000D55DBBB168   296  415b           pop r11
000000D55DBBB16A   298  4159           pop r9
000000D55DBBB16C   300  4158           pop r8
000000D55DBBB16E   302  5f             pop rdi
000000D55DBBB16F   303  5e             pop rsi
000000D55DBBB170   304  5b             pop rbx
000000D55DBBB171   305  5a             pop rdx
000000D55DBBB172   306  59             pop rcx
000000D55DBBB173   307  58             pop rax
000000D55DBBB174   308  e921ffffff     jmp 90  (000000D55DBBB09A)
000000D55DBBB179   313  e88caec4ff     call 000000D55D80600A    ;; deoptimization bailout 1
000000D55DBBB17E   318  e89baec4ff     call 000000D55D80601E    ;; deoptimization bailout 3
000000D55DBBB183   323  90             nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 4)
 index  ast id    argc     pc
     0       4       0     35
     1      21       0     -1
     2      24       0     90
     3      21       0     -1

Safepoints (size = 30)
000000D55DBBB063    35  10000 (sp -> fp)       0
000000D55DBBB15D   285  10000 (sp -> fp)       2

RelocInfo (size = 23)
000000D55DBBB05F  code target (BUILTIN)  (000000D55DB27440)
000000D55DBBB067  position  (1071)
000000D55DBBB078  position  (1051)
000000D55DBBB0A0  position  (1071)
000000D55DBBB0A2  position  (1078)
000000D55DBBB0D0  position  (1071)
000000D55DBBB0F4  code target (STUB)  (000000D55DB281C0)
000000D55DBBB131  position  (1051)
000000D55DBBB159  code target (STUB)  (000000D55DB06200)
000000D55DBBB17A  runtime entry  (deoptimization bailout 1)
000000D55DBBB17F  runtime entry  (deoptimization bailout 3)

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
000000D55DBBBB20     0  55             push rbp
000000D55DBBBB21     1  4889e5         REX.W movq rbp,rsp
000000D55DBBBB24     4  56             push rsi
000000D55DBBBB25     5  57             push rdi
000000D55DBBBB26     6  4883ec20       REX.W subq rsp,0x20
000000D55DBBBB2A    10  488b45f8       REX.W movq rax,[rbp-0x8]
000000D55DBBBB2E    14  488945e8       REX.W movq [rbp-0x18],rax
000000D55DBBBB32    18  488bf0         REX.W movq rsi,rax
000000D55DBBBB35    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBBB3C    28  7305           jnc 35  (000000D55DBBBB43)
000000D55DBBBB3E    30  e8fdb8f6ff     call StackCheck  (000000D55DB27440)    ;; code: BUILTIN
000000D55DBBBB43    35  488b4520       REX.W movq rax,[rbp+0x20]
000000D55DBBBB47    39  a801           test al,0x1
000000D55DBBBB49    41  0f840f000000   jz 62  (000000D55DBBBB5E)
000000D55DBBBB4F    47  4c8b50ff       REX.W movq r10,[rax-0x1]
000000D55DBBBB53    51  41807a0bbe     cmpb [r10+0xb],0xbe
000000D55DBBBB58    56  0f8460000000   jz 158  (000000D55DBBBBBE)
000000D55DBBBB5E    62  488b4de8       REX.W movq rcx,[rbp-0x18]    ;; debug: position 32733
000000D55DBBBB62    66  488bb9ff000000 REX.W movq rdi,[rcx+0xff]
000000D55DBBBB69    73  49ba414230457f020000 REX.W movq r10,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBBBB73    83  4152           push r10
000000D55DBBBB75    85  49ba0000000048000000 REX.W movq r10,0000004800000000
000000D55DBBBB7F    95  4152           push r10
000000D55DBBBB81    97  48ba0000000001000000 REX.W movq rdx,0000000100000000
000000D55DBBBB8B   107  48bb89c9fc6672020000 REX.W movq rbx,0000027266FCC989    ;; object: 0000027266FCC989 <FixedArray[11]>
000000D55DBBBB95   117  488bf1         REX.W movq rsi,rcx
000000D55DBBBB98   120  e8e3f8fbff     call 000000D55DB7B480    ;; code: CALL_IC, GENERIC
000000D55DBBBB9D   125  50             push rax              ;; debug: position 32727
000000D55DBBBB9E   126  488b75e8       REX.W movq rsi,[rbp-0x18]
000000D55DBBBBA2   130  0f1f840000000000 nop
000000D55DBBBBAA   138  b801000000     movl rax,0000000000000001
000000D55DBBBBAF   143  48bb70cfcde9f77f0000 REX.W movq rbx,00007FF7E9CDCF70
000000D55DBBBBB9   153  e8a2a4f4ff     call 000000D55DB06060    ;; code: STUB, CEntryStub, minor: 4
000000D55DBBBBBE   158  488b4520       REX.W movq rax,[rbp+0x20]
000000D55DBBBBC2   162  488b5817       REX.W movq rbx,[rax+0x17]
000000D55DBBBBC6   166  488b5037       REX.W movq rdx,[rax+0x37]
000000D55DBBBBCA   170  8b5b27         movl rbx,[rbx+0x27]
000000D55DBBBBCD   173  83e308         andl rbx,0x8
000000D55DBBBBD0   176  83fb00         cmpl rbx,0x0
000000D55DBBBBD3   179  0f8515000000   jnz 206  (000000D55DBBBBEE)
000000D55DBBBBD9   185  f6c201         testb rdx,0x1
000000D55DBBBBDC   188  0f85fc010000   jnz 702  (000000D55DBBBDDE)
000000D55DBBBBE2   194  48c1ea20       REX.W shrq rdx, 32
000000D55DBBBBE6   198  488bda         REX.W movq rbx,rdx
000000D55DBBBBE9   201  e902000000     jmp 208  (000000D55DBBBBF0)
000000D55DBBBBEE   206  33db           xorl rbx,rbx
000000D55DBBBBF0   208  48895de0       REX.W movq [rbp-0x20],rbx
000000D55DBBBBF4   212  488b55e8       REX.W movq rdx,[rbp-0x18]
000000D55DBBBBF8   216  488b8a8f010000 REX.W movq rcx,[rdx+0x18f]    ;; debug: position 32783
000000D55DBBBBFF   223  49ba29a1fa6672020000 REX.W movq r10,0000027266FAA129    ;; object: 0000027266FAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000027F45378689)>
000000D55DBBBC09   233  493bca         REX.W cmpq rcx,r10
000000D55DBBBC0C   236  0f85be020000   jnz 944  (000000D55DBBBED0)
000000D55DBBBC12   242  8bcb           movl rcx,rbx
000000D55DBBBC14   244  48c1e120       REX.W shlq rcx, 32
000000D55DBBBC18   248  49ba414230457f020000 REX.W movq r10,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBBBC22   258  4152           push r10
000000D55DBBBC24   260  50             push rax
000000D55DBBBC25   261  51             push rcx
000000D55DBBBC26   262  48bf29a1fa6672020000 REX.W movq rdi,0000027266FAA129    ;; object: 0000027266FAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000027F45378689)>
000000D55DBBBC30   272  488bf2         REX.W movq rsi,rdx
000000D55DBBBC33   275  488b7727       REX.W movq rsi,[rdi+0x27]
000000D55DBBBC37   279  498b55a8       REX.W movq rdx,[r13-0x58]
000000D55DBBBC3B   283  b802000000     movl rax,0000000000000002
000000D55DBBBC40   288  bb05000000     movl rbx,0000000000000005
000000D55DBBBC45   293  e8960cf6ff     call ArgumentsAdaptorTrampoline  (000000D55DB1C8E0)    ;; code: BUILTIN
000000D55DBBBC4A   298  488945d8       REX.W movq [rbp-0x28],rax
000000D55DBBBC4E   302  488bd8         REX.W movq rbx,rax
000000D55DBBBC51   305  488b4518       REX.W movq rax,[rbp+0x18]    ;; debug: position 32832
000000D55DBBBC55   309  a801           test al,0x1
000000D55DBBBC57   311  7414           jz 333  (000000D55DBBBC6D)
000000D55DBBBC59   313  488b40ff       REX.W movq rax,[rax-0x1]
000000D55DBBBC5D   317  0fb6400c       movzxbl rax,[rax+0xc]
000000D55DBBBC61   321  80e012         cmpb al,0x12
000000D55DBBBC64   324  80f802         cmpb al,0x2
000000D55DBBBC67   327  0f8465000000   jz 434  (000000D55DBBBCD2)
000000D55DBBBC6D   333  488b45e8       REX.W movq rax,[rbp-0x18]    ;; debug: position 32853
000000D55DBBBC71   337  488bb8ff000000 REX.W movq rdi,[rax+0xff]
000000D55DBBBC78   344  49ba414230457f020000 REX.W movq r10,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBBBC82   354  4152           push r10
000000D55DBBBC84   356  49ba000000000f000000 REX.W movq r10,0000000F00000000
000000D55DBBBC8E   366  4152           push r10
000000D55DBBBC90   368  488b4d18       REX.W movq rcx,[rbp+0x18]
000000D55DBBBC94   372  51             push rcx
000000D55DBBBC95   373  48ba0000000005000000 REX.W movq rdx,0000000500000000
000000D55DBBBC9F   383  48bb89c9fc6672020000 REX.W movq rbx,0000027266FCC989    ;; object: 0000027266FCC989 <FixedArray[11]>
000000D55DBBBCA9   393  488bf0         REX.W movq rsi,rax
000000D55DBBBCAC   396  e80f34fdff     call 000000D55DB8F0C0    ;; code: CALL_IC, GENERIC
000000D55DBBBCB1   401  50             push rax              ;; debug: position 32847
000000D55DBBBCB2   402  488b75e8       REX.W movq rsi,[rbp-0x18]
000000D55DBBBCB6   406  0f1f840000000000 nop
000000D55DBBBCBE   414  b801000000     movl rax,0000000000000001
000000D55DBBBCC3   419  48bb70cfcde9f77f0000 REX.W movq rbx,00007FF7E9CDCF70
000000D55DBBBCCD   429  e88ea3f4ff     call 000000D55DB06060    ;; code: STUB, CEntryStub, minor: 4
000000D55DBBBCD2   434  488b5520       REX.W movq rdx,[rbp+0x20]
000000D55DBBBCD6   438  f6c201         testb rdx,0x1         ;; debug: position 32878
000000D55DBBBCD9   441  0f84f6010000   jz 949  (000000D55DBBBED5)
000000D55DBBBCDF   447  f6c301         testb rbx,0x1
000000D55DBBBCE2   450  0f84f2010000   jz 954  (000000D55DBBBEDA)
000000D55DBBBCE8   456  4c8b4510       REX.W movq r8,[rbp+0x10]    ;; debug: position 32847
000000D55DBBBCEC   460  33c9           xorl rcx,rcx
000000D55DBBBCEE   462  48894dd0       REX.W movq [rbp-0x30],rcx    ;; debug: position 32878
000000D55DBBBCF2   466  3b4de0         cmpl rcx,[rbp-0x20]
000000D55DBBBCF5   469  0f8dd9000000   jge 692  (000000D55DBBBDD4)
000000D55DBBBCFB   475  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBBD02   482  0f821f010000   jc 775  (000000D55DBBBE27)
000000D55DBBBD08   488  49ba69f4b057e9000000 REX.W movq r10,000000E957B0F469    ;; object: 000000E957B0F469 <Map(UINT8_ELEMENTS)>
000000D55DBBBD12   498  4c3952ff       REX.W cmpq [rdx-0x1],r10
000000D55DBBBD16   502  0f85c3010000   jnz 959  (000000D55DBBBEDF)
000000D55DBBBD1C   508  488b420f       REX.W movq rax,[rdx+0xf]
000000D55DBBBD20   512  8b700b         movl rsi,[rax+0xb]
000000D55DBBBD23   515  4c8b5217       REX.W movq r10,[rdx+0x17]
000000D55DBBBD27   519  41f6422708     testb [r10+0x27],0x8
000000D55DBBBD2C   524  0f85b2010000   jnz 964  (000000D55DBBBEE4)
000000D55DBBBD32   530  488b7817       REX.W movq rdi,[rax+0x17]
000000D55DBBBD36   534  488b400f       REX.W movq rax,[rax+0xf]
000000D55DBBBD3A   538  4803f8         REX.W addq rdi,rax
000000D55DBBBD3D   541  3bf1           cmpl rsi,rcx
000000D55DBBBD3F   543  0f86a4010000   jna 969  (000000D55DBBBEE9)
000000D55DBBBD45   549  0fb6040f       movzxbl rax,[rdi+rcx*1]
000000D55DBBBD49   553  8bf1           movl rsi,rcx
000000D55DBBBD4B   555  48c1e620       REX.W shlq rsi, 32
000000D55DBBBD4F   559  8bf8           movl rdi,rax
000000D55DBBBD51   561  48c1e720       REX.W shlq rdi, 32
000000D55DBBBD55   565  4150           push r8
000000D55DBBBD57   567  57             push rdi
000000D55DBBBD58   568  56             push rsi
000000D55DBBBD59   569  52             push rdx
000000D55DBBBD5A   570  b803000000     movl rax,0000000000000003
000000D55DBBBD5F   575  488b75e8       REX.W movq rsi,[rbp-0x18]
000000D55DBBBD63   579  488b7d18       REX.W movq rdi,[rbp+0x18]
000000D55DBBBD67   583  e8f41df6ff     call Call_ReceiverIsAny  (000000D55DB1DB60)    ;; code: BUILTIN
000000D55DBBBD6C   588  488b5dd8       REX.W movq rbx,[rbp-0x28]
000000D55DBBBD70   592  49ba69f4b057e9000000 REX.W movq r10,000000E957B0F469    ;; object: 000000E957B0F469 <Map(UINT8_ELEMENTS)>
000000D55DBBBD7A   602  4c3953ff       REX.W cmpq [rbx-0x1],r10
000000D55DBBBD7E   606  0f856a010000   jnz 974  (000000D55DBBBEEE)
000000D55DBBBD84   612  488b530f       REX.W movq rdx,[rbx+0xf]
000000D55DBBBD88   616  8b4a0b         movl rcx,[rdx+0xb]
000000D55DBBBD8B   619  4c8b5317       REX.W movq r10,[rbx+0x17]
000000D55DBBBD8F   623  41f6422708     testb [r10+0x27],0x8
000000D55DBBBD94   628  0f8559010000   jnz 979  (000000D55DBBBEF3)
000000D55DBBBD9A   634  488b7217       REX.W movq rsi,[rdx+0x17]
000000D55DBBBD9E   638  488b520f       REX.W movq rdx,[rdx+0xf]
000000D55DBBBDA2   642  4803f2         REX.W addq rsi,rdx
000000D55DBBBDA5   645  488b55d0       REX.W movq rdx,[rbp-0x30]
000000D55DBBBDA9   649  3bca           cmpl rcx,rdx
000000D55DBBBDAB   651  0f8647010000   jna 984  (000000D55DBBBEF8)
000000D55DBBBDB1   657  488bc8         REX.W movq rcx,rax
000000D55DBBBDB4   660  f6c101         testb rcx,0x1
000000D55DBBBDB7   663  0f85b2000000   jnz 847  (000000D55DBBBE6F)
000000D55DBBBDBD   669  48c1e920       REX.W shrq rcx, 32
000000D55DBBBDC1   673  880c16         movb [rsi+rdx*1],cl
000000D55DBBBDC4   676  8d4a01         leal rcx,[rdx+0x1]    ;; debug: position 32884
000000D55DBBBDC7   679  488b5520       REX.W movq rdx,[rbp+0x20]
000000D55DBBBDCB   683  4c8b4510       REX.W movq r8,[rbp+0x10]
000000D55DBBBDCF   687  e91affffff     jmp 462  (000000D55DBBBCEE)
000000D55DBBBDD4   692  488bc3         REX.W movq rax,rbx
000000D55DBBBDD7   695  488be5         REX.W movq rsp,rbp
000000D55DBBBDDA   698  5d             pop rbp
000000D55DBBBDDB   699  c21800         ret 0x18
000000D55DBBBDDE   702  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 32727
000000D55DBBBDE2   706  4c3952ff       REX.W cmpq [rdx-0x1],r10
000000D55DBBBDE6   710  0f8511010000   jnz 989  (000000D55DBBBEFD)
000000D55DBBBDEC   716  c5fb104207     vmovsd xmm0,[rdx+0x7]
000000D55DBBBDF1   721  c5fb2cd0       vcvttsd2si rdx,xmm0
000000D55DBBBDF5   725  c5f157c9       vxorpd xmm1,xmm1,xmm1
000000D55DBBBDF9   729  c5f32aca       vcvtlsi2sd xmm1,xmm1,rdx
000000D55DBBBDFD   733  c5f92ec1       vucomisd xmm0,xmm1
000000D55DBBBE01   737  0f85f6000000   jnz 989  (000000D55DBBBEFD)
000000D55DBBBE07   743  0f8af0000000   jpe 989  (000000D55DBBBEFD)
000000D55DBBBE0D   749  85d2           testl rdx,rdx
000000D55DBBBE0F   751  0f85d1fdffff   jnz 198  (000000D55DBBBBE6)
000000D55DBBBE15   757  c5f950d0       vmovmskpd rdx,xmm0
000000D55DBBBE19   761  83e201         andl rdx,0x1
000000D55DBBBE1C   764  0f85db000000   jnz 989  (000000D55DBBBEFD)
000000D55DBBBE22   770  e9bffdffff     jmp 198  (000000D55DBBBBE6)
000000D55DBBBE27   775  50             push rax              ;; debug: position 32878
000000D55DBBBE28   776  51             push rcx
000000D55DBBBE29   777  52             push rdx
000000D55DBBBE2A   778  53             push rbx
000000D55DBBBE2B   779  56             push rsi
000000D55DBBBE2C   780  57             push rdi
000000D55DBBBE2D   781  4150           push r8
000000D55DBBBE2F   783  4151           push r9
000000D55DBBBE31   785  4153           push r11
000000D55DBBBE33   787  4154           push r12
000000D55DBBBE35   789  4156           push r14
000000D55DBBBE37   791  4157           push r15
000000D55DBBBE39   793  488d6424e0     REX.W leaq rsp,[rsp-0x20]
000000D55DBBBE3E   798  488b75f8       REX.W movq rsi,[rbp-0x8]
000000D55DBBBE42   802  33c0           xorl rax,rax
000000D55DBBBE44   804  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
000000D55DBBBE4E   814  e8ada3f4ff     call 000000D55DB06200    ;; code: STUB, CEntryStub, minor: 5
000000D55DBBBE53   819  488d642420     REX.W leaq rsp,[rsp+0x20]
000000D55DBBBE58   824  415f           pop r15
000000D55DBBBE5A   826  415e           pop r14
000000D55DBBBE5C   828  415c           pop r12
000000D55DBBBE5E   830  415b           pop r11
000000D55DBBBE60   832  4159           pop r9
000000D55DBBBE62   834  4158           pop r8
000000D55DBBBE64   836  5f             pop rdi
000000D55DBBBE65   837  5e             pop rsi
000000D55DBBBE66   838  5b             pop rbx
000000D55DBBBE67   839  5a             pop rdx
000000D55DBBBE68   840  59             pop rcx
000000D55DBBBE69   841  58             pop rax
000000D55DBBBE6A   842  e999feffff     jmp 488  (000000D55DBBBD08)
000000D55DBBBE6F   847  4d8b55f8       REX.W movq r10,[r13-0x8]
000000D55DBBBE73   851  4c3951ff       REX.W cmpq [rcx-0x1],r10
000000D55DBBBE77   855  7529           jnz 898  (000000D55DBBBEA2)
000000D55DBBBE79   857  c5fb104107     vmovsd xmm0,[rcx+0x7]
000000D55DBBBE7E   862  c4e1fb2cc8     vcvttsd2siq rcx,xmm0
000000D55DBBBE83   867  4883f901       REX.W cmpq rcx,0x1
000000D55DBBBE87   871  7112           jno 891  (000000D55DBBBE9B)
000000D55DBBBE89   873  4883ec08       REX.W subq rsp,0x8
000000D55DBBBE8D   877  c5fb110424     vmovsd [rsp],xmm0
000000D55DBBBE92   882  e8c935f5ff     call 000000D55DB0F460    ;; code: STUB, DoubleToIStub, minor: 135236
000000D55DBBBE97   887  4883c408       REX.W addq rsp,0x8
000000D55DBBBE9B   891  8bc9           movl rcx,rcx
000000D55DBBBE9D   893  e91fffffff     jmp 673  (000000D55DBBBDC1)
000000D55DBBBEA2   898  493b4da8       REX.W cmpq rcx,[r13-0x58]
000000D55DBBBEA6   902  7507           jnz 911  (000000D55DBBBEAF)
000000D55DBBBEA8   904  33c9           xorl rcx,rcx
000000D55DBBBEAA   906  e912ffffff     jmp 673  (000000D55DBBBDC1)
000000D55DBBBEAF   911  493b4dc0       REX.W cmpq rcx,[r13-0x40]
000000D55DBBBEB3   915  750a           jnz 927  (000000D55DBBBEBF)
000000D55DBBBEB5   917  b901000000     movl rcx,0000000000000001
000000D55DBBBEBA   922  e902ffffff     jmp 673  (000000D55DBBBDC1)
000000D55DBBBEBF   927  493b4dc8       REX.W cmpq rcx,[r13-0x38]
000000D55DBBBEC3   931  0f8539000000   jnz 994  (000000D55DBBBF02)
000000D55DBBBEC9   937  33c9           xorl rcx,rcx
000000D55DBBBECB   939  e9f1feffff     jmp 673  (000000D55DBBBDC1)
000000D55DBBBED0   944  e849a1c4ff     call 000000D55D80601E    ;; deoptimization bailout 3
000000D55DBBBED5   949  e86ca1c4ff     call 000000D55D806046    ;; deoptimization bailout 7
000000D55DBBBEDA   954  e871a1c4ff     call 000000D55D806050    ;; deoptimization bailout 8
000000D55DBBBEDF   959  e880a1c4ff     call 000000D55D806064    ;; deoptimization bailout 10
000000D55DBBBEE4   964  e885a1c4ff     call 000000D55D80606E    ;; deoptimization bailout 11
000000D55DBBBEE9   969  e88aa1c4ff     call 000000D55D806078    ;; deoptimization bailout 12
000000D55DBBBEEE   974  e899a1c4ff     call 000000D55D80608C    ;; deoptimization bailout 14
000000D55DBBBEF3   979  e89ea1c4ff     call 000000D55D806096    ;; deoptimization bailout 15
000000D55DBBBEF8   984  e8a3a1c4ff     call 000000D55D8060A0    ;; deoptimization bailout 16
000000D55DBBBEFD   989  e8a8a1c4ff     call 000000D55D8060AA    ;; deoptimization bailout 17
000000D55DBBBF02   994  e8ada1c4ff     call 000000D55D8060B4    ;; deoptimization bailout 18
000000D55DBBBF07   999  90             nop

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
000000D55DBBBB43    35  00010000 (sp -> fp)       0
000000D55DBBBB9D   125  00010000 (sp -> fp)       1
000000D55DBBBBBE   158  00010000 (sp -> fp)       2
000000D55DBBBC4A   298  00010000 (sp -> fp)       4
000000D55DBBBCB1   401  00010000 (sp -> fp)       5
000000D55DBBBCD2   434  00010000 (sp -> fp)       6
000000D55DBBBD6C   588  01010000 (sp -> fp)      13
000000D55DBBBE53   819  01010000 | rdx | rbx | r8 (sp -> fp)       9

RelocInfo (size = 92)
000000D55DBBBB3F  code target (BUILTIN)  (000000D55DB27440)
000000D55DBBBB5E  position  (32733)
000000D55DBBBB6B  embedded object  (0000027F45304241 <undefined>)
000000D55DBBBB8D  embedded object  (0000027266FCC989 <FixedArray[11]>)
000000D55DBBBB99  code target (CALL_IC)  (000000D55DB7B480)
000000D55DBBBB9D  position  (32727)
000000D55DBBBBBA  code target (STUB)  (000000D55DB06060)
000000D55DBBBBF8  position  (32783)
000000D55DBBBC01  embedded object  (0000027266FAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000027F45378689)>)
000000D55DBBBC1A  embedded object  (0000027F45304241 <undefined>)
000000D55DBBBC28  embedded object  (0000027266FAA129 <JS Function TypedArraySpeciesCreate (SharedFunctionInfo 0000027F45378689)>)
000000D55DBBBC46  code target (BUILTIN)  (000000D55DB1C8E0)
000000D55DBBBC51  position  (32832)
000000D55DBBBC6D  position  (32853)
000000D55DBBBC7A  embedded object  (0000027F45304241 <undefined>)
000000D55DBBBCA1  embedded object  (0000027266FCC989 <FixedArray[11]>)
000000D55DBBBCAD  code target (CALL_IC)  (000000D55DB8F0C0)
000000D55DBBBCB1  position  (32847)
000000D55DBBBCCE  code target (STUB)  (000000D55DB06060)
000000D55DBBBCD6  position  (32878)
000000D55DBBBCE8  position  (32847)
000000D55DBBBCEE  position  (32878)
000000D55DBBBD0A  embedded object  (000000E957B0F469 <Map(UINT8_ELEMENTS)>)
000000D55DBBBD68  code target (BUILTIN)  (000000D55DB1DB60)
000000D55DBBBD72  embedded object  (000000E957B0F469 <Map(UINT8_ELEMENTS)>)
000000D55DBBBDC4  position  (32884)
000000D55DBBBDDE  position  (32727)
000000D55DBBBE27  position  (32878)
000000D55DBBBE4F  code target (STUB)  (000000D55DB06200)
000000D55DBBBE93  code target (STUB)  (000000D55DB0F460)
000000D55DBBBED1  runtime entry  (deoptimization bailout 3)
000000D55DBBBED6  runtime entry  (deoptimization bailout 7)
000000D55DBBBEDB  runtime entry  (deoptimization bailout 8)
000000D55DBBBEE0  runtime entry  (deoptimization bailout 10)
000000D55DBBBEE5  runtime entry  (deoptimization bailout 11)
000000D55DBBBEEA  runtime entry  (deoptimization bailout 12)
000000D55DBBBEEF  runtime entry  (deoptimization bailout 14)
000000D55DBBBEF4  runtime entry  (deoptimization bailout 15)
000000D55DBBBEF9  runtime entry  (deoptimization bailout 16)
000000D55DBBBEFE  runtime entry  (deoptimization bailout 17)
000000D55DBBBF03  runtime entry  (deoptimization bailout 18)

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
source_position = 1221
kind = OPTIMIZED_FUNCTION
stack_slots = 5
compiler = crankshaft
Instructions (size = 354)
000000D55DBBBFE0     0  55             push rbp
000000D55DBBBFE1     1  4889e5         REX.W movq rbp,rsp
000000D55DBBBFE4     4  56             push rsi
000000D55DBBBFE5     5  57             push rdi
000000D55DBBBFE6     6  4883ec08       REX.W subq rsp,0x8
000000D55DBBBFEA    10  488b45f8       REX.W movq rax,[rbp-0x8]
000000D55DBBBFEE    14  488945e8       REX.W movq [rbp-0x18],rax
000000D55DBBBFF2    18  488bf0         REX.W movq rsi,rax
000000D55DBBBFF5    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBBFFC    28  7305           jnc 35  (000000D55DBBC003)
000000D55DBBBFFE    30  e83db4f6ff     call StackCheck  (000000D55DB27440)    ;; code: BUILTIN
000000D55DBBC003    35  488b4510       REX.W movq rax,[rbp+0x10]
000000D55DBBC007    39  a801           test al,0x1           ;; debug: position 1271
000000D55DBBC009    41  0f8560000000   jnz 143  (000000D55DBBC06F)
000000D55DBBC00F    47  48c1e820       REX.W shrq rax, 32
000000D55DBBC013    51  bb10000000     movl rbx,0000000000000010
000000D55DBBC018    56  488bd3         REX.W movq rdx,rbx    ;; debug: position 1255
000000D55DBBC01B    59  83c2ff         addl rdx,0xff
000000D55DBBC01E    62  0f80f4000000   jo 312  (000000D55DBBC118)
000000D55DBBC024    68  85db           testl rbx,rbx
000000D55DBBC026    70  0f8432000000   jz 126  (000000D55DBBC05E)
000000D55DBBC02C    76  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBC033    83  0f8297000000   jc 240  (000000D55DBBC0D0)
000000D55DBBC039    89  488bca         REX.W movq rcx,rdx
000000D55DBBC03C    92  488bd8         REX.W movq rbx,rax
000000D55DBBC03F    95  d3eb           shrl rbx, cl          ;; debug: position 1271
000000D55DBBC041    97  83e301         andl rbx,0x1          ;; debug: position 1278
000000D55DBBC044   100  85db           testl rbx,rbx
000000D55DBBC046   102  0f8505000000   jnz 113  (000000D55DBBC051)
000000D55DBBC04C   108  488bda         REX.W movq rbx,rdx
000000D55DBBC04F   111  ebc7           jmp 56  (000000D55DBBC018)
000000D55DBBC051   113  8bc2           movl rax,rdx
000000D55DBBC053   115  48c1e020       REX.W shlq rax, 32
000000D55DBBC057   119  488be5         REX.W movq rsp,rbp
000000D55DBBC05A   122  5d             pop rbp
000000D55DBBC05B   123  c21800         ret 0x18
000000D55DBBC05E   126  48b80000000010000000 REX.W movq rax,0000001000000000
000000D55DBBC068   136  488be5         REX.W movq rsp,rbp
000000D55DBBC06B   139  5d             pop rbp
000000D55DBBC06C   140  c21800         ret 0x18
000000D55DBBC06F   143  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 1271
000000D55DBBC073   147  4c3950ff       REX.W cmpq [rax-0x1],r10
000000D55DBBC077   151  7529           jnz 194  (000000D55DBBC0A2)
000000D55DBBC079   153  c5fb104007     vmovsd xmm0,[rax+0x7]
000000D55DBBC07E   158  c4e1fb2cc0     vcvttsd2siq rax,xmm0
000000D55DBBC083   163  4883f801       REX.W cmpq rax,0x1
000000D55DBBC087   167  7112           jno 187  (000000D55DBBC09B)
000000D55DBBC089   169  4883ec08       REX.W subq rsp,0x8
000000D55DBBC08D   173  c5fb110424     vmovsd [rsp],xmm0
000000D55DBBC092   178  e829c1f6ff     call 000000D55DB281C0    ;; code: STUB, DoubleToIStub, minor: 135172
000000D55DBBC097   183  4883c408       REX.W addq rsp,0x8
000000D55DBBC09B   187  8bc0           movl rax,rax
000000D55DBBC09D   189  e971ffffff     jmp 51  (000000D55DBBC013)
000000D55DBBC0A2   194  493b45a8       REX.W cmpq rax,[r13-0x58]
000000D55DBBC0A6   198  7507           jnz 207  (000000D55DBBC0AF)
000000D55DBBC0A8   200  33c0           xorl rax,rax
000000D55DBBC0AA   202  e964ffffff     jmp 51  (000000D55DBBC013)
000000D55DBBC0AF   207  493b45c0       REX.W cmpq rax,[r13-0x40]
000000D55DBBC0B3   211  750a           jnz 223  (000000D55DBBC0BF)
000000D55DBBC0B5   213  b801000000     movl rax,0000000000000001
000000D55DBBC0BA   218  e954ffffff     jmp 51  (000000D55DBBC013)
000000D55DBBC0BF   223  493b45c8       REX.W cmpq rax,[r13-0x38]
000000D55DBBC0C3   227  0f8554000000   jnz 317  (000000D55DBBC11D)
000000D55DBBC0C9   233  33c0           xorl rax,rax
000000D55DBBC0CB   235  e943ffffff     jmp 51  (000000D55DBBC013)
000000D55DBBC0D0   240  50             push rax              ;; debug: position 1255
000000D55DBBC0D1   241  51             push rcx
000000D55DBBC0D2   242  52             push rdx
000000D55DBBC0D3   243  53             push rbx
000000D55DBBC0D4   244  56             push rsi
000000D55DBBC0D5   245  57             push rdi
000000D55DBBC0D6   246  4150           push r8
000000D55DBBC0D8   248  4151           push r9
000000D55DBBC0DA   250  4153           push r11
000000D55DBBC0DC   252  4154           push r12
000000D55DBBC0DE   254  4156           push r14
000000D55DBBC0E0   256  4157           push r15
000000D55DBBC0E2   258  488d6424e0     REX.W leaq rsp,[rsp-0x20]
000000D55DBBC0E7   263  488b75f8       REX.W movq rsi,[rbp-0x8]
000000D55DBBC0EB   267  33c0           xorl rax,rax
000000D55DBBC0ED   269  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
000000D55DBBC0F7   279  e804a1f4ff     call 000000D55DB06200    ;; code: STUB, CEntryStub, minor: 5
000000D55DBBC0FC   284  488d642420     REX.W leaq rsp,[rsp+0x20]
000000D55DBBC101   289  415f           pop r15
000000D55DBBC103   291  415e           pop r14
000000D55DBBC105   293  415c           pop r12
000000D55DBBC107   295  415b           pop r11
000000D55DBBC109   297  4159           pop r9
000000D55DBBC10B   299  4158           pop r8
000000D55DBBC10D   301  5f             pop rdi
000000D55DBBC10E   302  5e             pop rsi
000000D55DBBC10F   303  5b             pop rbx
000000D55DBBC110   304  5a             pop rdx
000000D55DBBC111   305  59             pop rcx
000000D55DBBC112   306  58             pop rax
000000D55DBBC113   307  e921ffffff     jmp 89  (000000D55DBBC039)
000000D55DBBC118   312  e8ed9ec4ff     call 000000D55D80600A    ;; deoptimization bailout 1
000000D55DBBC11D   317  e8fc9ec4ff     call 000000D55D80601E    ;; deoptimization bailout 3
000000D55DBBC122   322  6690           nop

Inlined functions (count = 0)

Deoptimization Input Data (deopt points = 4)
 index  ast id    argc     pc
     0       4       0     35
     1      21       0     -1
     2      24       0     89
     3      21       0     -1

Safepoints (size = 30)
000000D55DBBC003    35  10000 (sp -> fp)       0
000000D55DBBC0FC   284  10000 (sp -> fp)       2

RelocInfo (size = 23)
000000D55DBBBFFF  code target (BUILTIN)  (000000D55DB27440)
000000D55DBBC007  position  (1271)
000000D55DBBC018  position  (1255)
000000D55DBBC03F  position  (1271)
000000D55DBBC041  position  (1278)
000000D55DBBC06F  position  (1271)
000000D55DBBC093  code target (STUB)  (000000D55DB281C0)
000000D55DBBC0D0  position  (1255)
000000D55DBBC0F8  code target (STUB)  (000000D55DB06200)
000000D55DBBC119  runtime entry  (deoptimization bailout 1)
000000D55DBBC11E  runtime entry  (deoptimization bailout 3)

--- End code ---
--- Raw source ---
(x, lo, hi) { x[0] = lo;   x[1] = hi   } 

--- Optimized code ---
optimization_id = 3
source_position = 2086
kind = OPTIMIZED_FUNCTION
name = set
stack_slots = 5
compiler = crankshaft
Instructions (size = 411)
000000D55DBBD0C0     0  55             push rbp
000000D55DBBD0C1     1  4889e5         REX.W movq rbp,rsp
000000D55DBBD0C4     4  56             push rsi
000000D55DBBD0C5     5  57             push rdi
000000D55DBBD0C6     6  4883ec08       REX.W subq rsp,0x8
000000D55DBBD0CA    10  488b45f8       REX.W movq rax,[rbp-0x8]
000000D55DBBD0CE    14  488945e8       REX.W movq [rbp-0x18],rax
000000D55DBBD0D2    18  488bf0         REX.W movq rsi,rax
000000D55DBBD0D5    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBD0DC    28  7305           jnc 35  (000000D55DBBD0E3)
000000D55DBBD0DE    30  e85da3f6ff     call StackCheck  (000000D55DB27440)    ;; code: BUILTIN
000000D55DBBD0E3    35  488b4520       REX.W movq rax,[rbp+0x20]
000000D55DBBD0E7    39  a801           test al,0x1
000000D55DBBD0E9    41  0f8435010000   jz 356  (000000D55DBBD224)
000000D55DBBD0EF    47  49ba51fcb057e9000000 REX.W movq r10,000000E957B0FC51    ;; object: 000000E957B0FC51 <Map(UINT32_ELEMENTS)>
000000D55DBBD0F9    57  4c3950ff       REX.W cmpq [rax-0x1],r10
000000D55DBBD0FD    61  0f8526010000   jnz 361  (000000D55DBBD229)
000000D55DBBD103    67  488b580f       REX.W movq rbx,[rax+0xf]
000000D55DBBD107    71  8b530b         movl rdx,[rbx+0xb]
000000D55DBBD10A    74  4c8b5017       REX.W movq r10,[rax+0x17]
000000D55DBBD10E    78  41f6422708     testb [r10+0x27],0x8
000000D55DBBD113    83  0f8515010000   jnz 366  (000000D55DBBD22E)
000000D55DBBD119    89  488b4b17       REX.W movq rcx,[rbx+0x17]
000000D55DBBD11D    93  488b5b0f       REX.W movq rbx,[rbx+0xf]
000000D55DBBD121    97  4803cb         REX.W addq rcx,rbx
000000D55DBBD124   100  83fa00         cmpl rdx,0x0
000000D55DBBD127   103  0f8606010000   jna 371  (000000D55DBBD233)
000000D55DBBD12D   109  83fa01         cmpl rdx,0x1
000000D55DBBD130   112  0f8602010000   jna 376  (000000D55DBBD238)
000000D55DBBD136   118  488b5d18       REX.W movq rbx,[rbp+0x18]
000000D55DBBD13A   122  f6c301         testb rbx,0x1
000000D55DBBD13D   125  0f852b000000   jnz 174  (000000D55DBBD16E)
000000D55DBBD143   131  48c1eb20       REX.W shrq rbx, 32
000000D55DBBD147   135  8919           movl [rcx],rbx
000000D55DBBD149   137  488b5d10       REX.W movq rbx,[rbp+0x10]
000000D55DBBD14D   141  f6c301         testb rbx,0x1
000000D55DBBD150   144  0f856d000000   jnz 259  (000000D55DBBD1C3)
000000D55DBBD156   150  48c1eb20       REX.W shrq rbx, 32
000000D55DBBD15A   154  895904         movl [rcx+0x4],rbx
000000D55DBBD15D   157  48b8414230457f020000 REX.W movq rax,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBBD167   167  488be5         REX.W movq rsp,rbp
000000D55DBBD16A   170  5d             pop rbp
000000D55DBBD16B   171  c22000         ret 0x20
000000D55DBBD16E   174  4d8b55f8       REX.W movq r10,[r13-0x8]
000000D55DBBD172   178  4c3953ff       REX.W cmpq [rbx-0x1],r10
000000D55DBBD176   182  7526           jnz 222  (000000D55DBBD19E)
000000D55DBBD178   184  c5fb104307     vmovsd xmm0,[rbx+0x7]
000000D55DBBD17D   189  c4e1fb2cd8     vcvttsd2siq rbx,xmm0
000000D55DBBD182   194  4883fb01       REX.W cmpq rbx,0x1
000000D55DBBD186   198  7112           jno 218  (000000D55DBBD19A)
000000D55DBBD188   200  4883ec08       REX.W subq rsp,0x8
000000D55DBBD18C   204  c5fb110424     vmovsd [rsp],xmm0
000000D55DBBD191   209  e86afeffff     call 000000D55DBBD000    ;; code: STUB, DoubleToIStub, minor: 135364
000000D55DBBD196   214  4883c408       REX.W addq rsp,0x8
000000D55DBBD19A   218  8bdb           movl rbx,rbx
000000D55DBBD19C   220  eba9           jmp 135  (000000D55DBBD147)
000000D55DBBD19E   222  493b5da8       REX.W cmpq rbx,[r13-0x58]
000000D55DBBD1A2   226  7504           jnz 232  (000000D55DBBD1A8)
000000D55DBBD1A4   228  33db           xorl rbx,rbx
000000D55DBBD1A6   230  eb9f           jmp 135  (000000D55DBBD147)
000000D55DBBD1A8   232  493b5dc0       REX.W cmpq rbx,[r13-0x40]
000000D55DBBD1AC   236  7507           jnz 245  (000000D55DBBD1B5)
000000D55DBBD1AE   238  bb01000000     movl rbx,0000000000000001
000000D55DBBD1B3   243  eb92           jmp 135  (000000D55DBBD147)
000000D55DBBD1B5   245  493b5dc8       REX.W cmpq rbx,[r13-0x38]
000000D55DBBD1B9   249  0f857e000000   jnz 381  (000000D55DBBD23D)
000000D55DBBD1BF   255  33db           xorl rbx,rbx
000000D55DBBD1C1   257  eb84           jmp 135  (000000D55DBBD147)
000000D55DBBD1C3   259  4d8b55f8       REX.W movq r10,[r13-0x8]
000000D55DBBD1C7   263  4c3953ff       REX.W cmpq [rbx-0x1],r10
000000D55DBBD1CB   267  7529           jnz 310  (000000D55DBBD1F6)
000000D55DBBD1CD   269  c5fb104307     vmovsd xmm0,[rbx+0x7]
000000D55DBBD1D2   274  c4e1fb2cd8     vcvttsd2siq rbx,xmm0
000000D55DBBD1D7   279  4883fb01       REX.W cmpq rbx,0x1
000000D55DBBD1DB   283  7112           jno 303  (000000D55DBBD1EF)
000000D55DBBD1DD   285  4883ec08       REX.W subq rsp,0x8
000000D55DBBD1E1   289  c5fb110424     vmovsd [rsp],xmm0
000000D55DBBD1E6   294  e815feffff     call 000000D55DBBD000    ;; code: STUB, DoubleToIStub, minor: 135364
000000D55DBBD1EB   299  4883c408       REX.W addq rsp,0x8
000000D55DBBD1EF   303  8bdb           movl rbx,rbx
000000D55DBBD1F1   305  e964ffffff     jmp 154  (000000D55DBBD15A)
000000D55DBBD1F6   310  493b5da8       REX.W cmpq rbx,[r13-0x58]
000000D55DBBD1FA   314  7507           jnz 323  (000000D55DBBD203)
000000D55DBBD1FC   316  33db           xorl rbx,rbx
000000D55DBBD1FE   318  e957ffffff     jmp 154  (000000D55DBBD15A)
000000D55DBBD203   323  493b5dc0       REX.W cmpq rbx,[r13-0x40]
000000D55DBBD207   327  750a           jnz 339  (000000D55DBBD213)
000000D55DBBD209   329  bb01000000     movl rbx,0000000000000001
000000D55DBBD20E   334  e947ffffff     jmp 154  (000000D55DBBD15A)
000000D55DBBD213   339  493b5dc8       REX.W cmpq rbx,[r13-0x38]
000000D55DBBD217   343  0f8525000000   jnz 386  (000000D55DBBD242)
000000D55DBBD21D   349  33db           xorl rbx,rbx
000000D55DBBD21F   351  e936ffffff     jmp 154  (000000D55DBBD15A)
000000D55DBBD224   356  e8e18dc4ff     call 000000D55D80600A    ;; deoptimization bailout 1
000000D55DBBD229   361  e8e68dc4ff     call 000000D55D806014    ;; deoptimization bailout 2
000000D55DBBD22E   366  e8eb8dc4ff     call 000000D55D80601E    ;; deoptimization bailout 3
000000D55DBBD233   371  e8f08dc4ff     call 000000D55D806028    ;; deoptimization bailout 4
000000D55DBBD238   376  e8f58dc4ff     call 000000D55D806032    ;; deoptimization bailout 5
000000D55DBBD23D   381  e8fa8dc4ff     call 000000D55D80603C    ;; deoptimization bailout 6
000000D55DBBD242   386  e8ff8dc4ff     call 000000D55D806046    ;; deoptimization bailout 7
000000D55DBBD247   391  90             nop

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
     7       5       0     -1

Safepoints (size = 19)
000000D55DBBD0E3    35  10000 (sp -> fp)       0

RelocInfo (size = 23)
000000D55DBBD0DF  code target (BUILTIN)  (000000D55DB27440)
000000D55DBBD0F1  embedded object  (000000E957B0FC51 <Map(UINT32_ELEMENTS)>)
000000D55DBBD15F  embedded object  (0000027F45304241 <undefined>)
000000D55DBBD192  code target (STUB)  (000000D55DBBD000)
000000D55DBBD1E7  code target (STUB)  (000000D55DBBD000)
000000D55DBBD225  runtime entry  (deoptimization bailout 1)
000000D55DBBD22A  runtime entry  (deoptimization bailout 2)
000000D55DBBD22F  runtime entry  (deoptimization bailout 3)
000000D55DBBD234  runtime entry  (deoptimization bailout 4)
000000D55DBBD239  runtime entry  (deoptimization bailout 5)
000000D55DBBD23E  runtime entry  (deoptimization bailout 6)
000000D55DBBD243  runtime entry  (deoptimization bailout 7)

--- End code ---
--- Raw source ---
(x, y) { set(x, hi(y) ? 32 | d_bsr(hi(y)) :      d_bsr(lo(y)), 0) } 

--- Optimized code ---
optimization_id = 4
source_position = 2804
kind = OPTIMIZED_FUNCTION
name = bsr
stack_slots = 7
compiler = crankshaft
Instructions (size = 921)
000000D55DBBD2C0     0  55             push rbp
000000D55DBBD2C1     1  4889e5         REX.W movq rbp,rsp
000000D55DBBD2C4     4  56             push rsi
000000D55DBBD2C5     5  57             push rdi
000000D55DBBD2C6     6  4883ec18       REX.W subq rsp,0x18
000000D55DBBD2CA    10  488b45f8       REX.W movq rax,[rbp-0x8]
000000D55DBBD2CE    14  488945e8       REX.W movq [rbp-0x18],rax
000000D55DBBD2D2    18  488bf0         REX.W movq rsi,rax
000000D55DBBD2D5    21  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBD2DC    28  7305           jnc 35  (000000D55DBBD2E3)
000000D55DBBD2DE    30  e85da1f6ff     call StackCheck  (000000D55DB27440)    ;; code: BUILTIN
000000D55DBBD2E3    35  488b45e8       REX.W movq rax,[rbp-0x18]
000000D55DBBD2E7    39  488b487f       REX.W movq rcx,[rax+0x7f]    ;; debug: position 2813
000000D55DBBD2EB    43  48894de0       REX.W movq [rbp-0x20],rcx
000000D55DBBD2EF    47  488b586f       REX.W movq rbx,[rax+0x6f]    ;; debug: position 2820
000000D55DBBD2F3    51  49ba7001fd6672020000 REX.W movq r10,0000027266FD0170    ;; property cell
000000D55DBBD2FD    61  4d8b12         REX.W movq r10,[r10]
000000D55DBBD300    64  493bda         REX.W cmpq rbx,r10
000000D55DBBD303    67  0f85b9020000   jnz 770  (000000D55DBBD5C2)
000000D55DBBD309    73  4c8b4510       REX.W movq r8,[rbp+0x10]
000000D55DBBD30D    77  41f6c001       testb r8,0x1
000000D55DBBD311    81  0f84b0020000   jz 775  (000000D55DBBD5C7)
000000D55DBBD317    87  49ba51fcb057e9000000 REX.W movq r10,000000E957B0FC51    ;; object: 000000E957B0FC51 <Map(UINT32_ELEMENTS)>
000000D55DBBD321    97  4d3950ff       REX.W cmpq [r8-0x1],r10
000000D55DBBD325   101  0f85a1020000   jnz 780  (000000D55DBBD5CC)
000000D55DBBD32B   107  498b500f       REX.W movq rdx,[r8+0xf]
000000D55DBBD32F   111  8b720b         movl rsi,[rdx+0xb]
000000D55DBBD332   114  4d8b5017       REX.W movq r10,[r8+0x17]
000000D55DBBD336   118  41f6422708     testb [r10+0x27],0x8
000000D55DBBD33B   123  0f8590020000   jnz 785  (000000D55DBBD5D1)
000000D55DBBD341   129  488b7a17       REX.W movq rdi,[rdx+0x17]
000000D55DBBD345   133  488b520f       REX.W movq rdx,[rdx+0xf]
000000D55DBBD349   137  4803fa         REX.W addq rdi,rdx
000000D55DBBD34C   140  83fe01         cmpl rsi,0x1
000000D55DBBD34F   143  0f8681020000   jna 790  (000000D55DBBD5D6)
000000D55DBBD355   149  8b5704         movl rdx,[rdi+0x4]
000000D55DBBD358   152  85d2           testl rdx,rdx
000000D55DBBD35A   154  0f887b020000   js 795  (000000D55DBBD5DB)
000000D55DBBD360   160  85d2           testl rdx,rdx
000000D55DBBD362   162  0f8580000000   jnz 296  (000000D55DBBD3E8)
000000D55DBBD368   168  4c8b4867       REX.W movq r9,[rax+0x67]    ;; debug: position 2853
000000D55DBBD36C   172  4c894dd8       REX.W movq [rbp-0x28],r9
000000D55DBBD370   176  488b7877       REX.W movq rdi,[rax+0x77]    ;; debug: position 2859
000000D55DBBD374   180  49ba414230457f020000 REX.W movq r10,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBBD37E   190  4152           push r10
000000D55DBBD380   192  4150           push r8
000000D55DBBD382   194  48ba000000000b000000 REX.W movq rdx,0000000B00000000
000000D55DBBD38C   204  48bb81f0fc6672020000 REX.W movq rbx,0000027266FCF081    ;; object: 0000027266FCF081 <FixedArray[13]>
000000D55DBBD396   214  488bf0         REX.W movq rsi,rax
000000D55DBBD399   217  e8e2e0fbff     call 000000D55DB7B480    ;; code: CALL_IC, GENERIC
000000D55DBBD39E   222  49ba414230457f020000 REX.W movq r10,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBBD3A8   232  4152           push r10
000000D55DBBD3AA   234  50             push rax
000000D55DBBD3AB   235  48ba0000000009000000 REX.W movq rdx,0000000900000000
000000D55DBBD3B5   245  48bb81f0fc6672020000 REX.W movq rbx,0000027266FCF081    ;; object: 0000027266FCF081 <FixedArray[13]>
000000D55DBBD3BF   255  488b75e8       REX.W movq rsi,[rbp-0x18]
000000D55DBBD3C3   259  488b7dd8       REX.W movq rdi,[rbp-0x28]
000000D55DBBD3C7   263  e8b4e0fbff     call 000000D55DB7B480    ;; code: CALL_IC, GENERIC
000000D55DBBD3CC   268  488bd8         REX.W movq rbx,rax
000000D55DBBD3CF   271  f6c301         testb rbx,0x1
000000D55DBBD3D2   274  0f85b6010000   jnz 718  (000000D55DBBD58E)
000000D55DBBD3D8   280  48c1eb20       REX.W shrq rbx, 32
000000D55DBBD3DC   284  488bd3         REX.W movq rdx,rbx
000000D55DBBD3DF   287  488b45e8       REX.W movq rax,[rbp-0x18]
000000D55DBBD3E3   291  e91e010000     jmp 582  (000000D55DBBD506)
000000D55DBBD3E8   296  488b45e8       REX.W movq rax,[rbp-0x18]    ;; debug: position 2820
000000D55DBBD3EC   300  488b5867       REX.W movq rbx,[rax+0x67]    ;; debug: position 2833
000000D55DBBD3F0   304  8b5704         movl rdx,[rdi+0x4]    ;; debug: position 2839
000000D55DBBD3F3   307  49ba8001fd6672020000 REX.W movq r10,0000027266FD0180    ;; property cell
000000D55DBBD3FD   317  4d8b12         REX.W movq r10,[r10]
000000D55DBBD400   320  493bda         REX.W cmpq rbx,r10
000000D55DBBD403   323  0f85d7010000   jnz 800  (000000D55DBBD5E0)
000000D55DBBD409   329  488bca         REX.W movq rcx,rdx
000000D55DBBD40C   332  81e10000ffff   andl rcx,0xffff0000    ;; debug: position 1535
000000D55DBBD412   338  8bf1           movl rsi,rcx
000000D55DBBD414   340  48c1e620       REX.W shlq rsi, 32
000000D55DBBD418   344  48bf9001fd6672020000 REX.W movq rdi,0000027266FD0190    ;; debug: position 2820
                                                             ;; property cell
000000D55DBBD422   354  488b3f         REX.W movq rdi,[rdi]
000000D55DBBD425   357  4d8b55d8       REX.W movq r10,[r13-0x28]    ;; debug: position 1535
000000D55DBBD429   361  4c39572f       REX.W cmpq [rdi+0x2f],r10
000000D55DBBD42D   365  0f84b2010000   jz 805  (000000D55DBBD5E5)
000000D55DBBD433   371  4889772f       REX.W movq [rdi+0x2f],rsi
000000D55DBBD437   375  48bfa001fd6672020000 REX.W movq rdi,0000027266FD01A0    ;; debug: position 2820
                                                             ;; property cell
000000D55DBBD441   385  488b3f         REX.W movq rdi,[rdi]
000000D55DBBD444   388  488b772f       REX.W movq rsi,[rdi+0x2f]    ;; debug: position 1535
000000D55DBBD448   392  493b75d8       REX.W cmpq rsi,[r13-0x28]
000000D55DBBD44C   396  0f8498010000   jz 810  (000000D55DBBD5EA)
000000D55DBBD452   402  4885f6         REX.W testq rsi,rsi
000000D55DBBD455   405  0f840f000000   jz 426  (000000D55DBBD46A)
000000D55DBBD45B   411  40f6c601       testb rsi,0x1
000000D55DBBD45F   415  0f847e000000   jz 547  (000000D55DBBD4E3)
000000D55DBBD465   421  e80e8cc4ff     call 000000D55D806078    ;; deoptimization bailout 12
000000D55DBBD46A   426  48bfb001fd6672020000 REX.W movq rdi,0000027266FD01B0    ;; debug: position 2820
                                                             ;; property cell
000000D55DBBD474   436  488b3f         REX.W movq rdi,[rdi]
000000D55DBBD477   439  488b4f57       REX.W movq rcx,[rdi+0x57]    ;; debug: position 1569
000000D55DBBD47B   443  493b4dd8       REX.W cmpq rcx,[r13-0x28]
000000D55DBBD47F   447  0f846a010000   jz 815  (000000D55DBBD5EF)
000000D55DBBD485   453  488bf2         REX.W movq rsi,rdx
000000D55DBBD488   456  81e6ffff0000   andl rsi,0xffff       ;; debug: position 1613
000000D55DBBD48E   462  f6c101         testb rcx,0x1
000000D55DBBD491   465  0f845d010000   jz 820  (000000D55DBBD5F4)
000000D55DBBD497   471  49ba69f4b057e9000000 REX.W movq r10,000000E957B0F469    ;; object: 000000E957B0F469 <Map(UINT8_ELEMENTS)>
000000D55DBBD4A1   481  4c3951ff       REX.W cmpq [rcx-0x1],r10
000000D55DBBD4A5   485  0f854e010000   jnz 825  (000000D55DBBD5F9)
000000D55DBBD4AB   491  488b790f       REX.W movq rdi,[rcx+0xf]
000000D55DBBD4AF   495  448b470b       movl r8,[rdi+0xb]
000000D55DBBD4B3   499  4c8b5117       REX.W movq r10,[rcx+0x17]
000000D55DBBD4B7   503  41f6422708     testb [r10+0x27],0x8
000000D55DBBD4BC   508  0f853c010000   jnz 830  (000000D55DBBD5FE)
000000D55DBBD4C2   514  4c8b4f17       REX.W movq r9,[rdi+0x17]
000000D55DBBD4C6   518  488b7f0f       REX.W movq rdi,[rdi+0xf]
000000D55DBBD4CA   522  4c03cf         REX.W addq r9,rdi
000000D55DBBD4CD   525  443bc6         cmpl r8,rsi
000000D55DBBD4D0   528  0f862d010000   jna 835  (000000D55DBBD603)
000000D55DBBD4D6   534  410fb61c31     movzxbl rbx,[r9+rsi*1]
000000D55DBBD4DB   539  488bd3         REX.W movq rdx,rbx
000000D55DBBD4DE   542  e920000000     jmp 579  (000000D55DBBD503)
000000D55DBBD4E3   547  48bfc001fd6672020000 REX.W movq rdi,0000027266FD01C0    ;; debug: position 2820
                                                             ;; property cell
000000D55DBBD4ED   557  488b3f         REX.W movq rdi,[rdi]
000000D55DBBD4F0   560  488b4f57       REX.W movq rcx,[rdi+0x57]    ;; debug: position 1535
000000D55DBBD4F4   564  493b4dd8       REX.W cmpq rcx,[r13-0x28]
000000D55DBBD4F8   568  0f840a010000   jz 840  (000000D55DBBD608)
000000D55DBBD4FE   574  e8bb8be4ff     call 000000D55DA060BE    ;; debug: position 1588
                                                             ;; soft deoptimization bailout 19
000000D55DBBD503   579  83ca20         orl rdx,0x20          ;; debug: position 2831
000000D55DBBD506   582  488b5de0       REX.W movq rbx,[rbp-0x20]    ;; debug: position 2859
000000D55DBBD50A   586  49bad001fd6672020000 REX.W movq r10,0000027266FD01D0    ;; property cell
000000D55DBBD514   596  4d8b12         REX.W movq r10,[r10]
000000D55DBBD517   599  493bda         REX.W cmpq rbx,r10
000000D55DBBD51A   602  0f85ed000000   jnz 845  (000000D55DBBD60D)
000000D55DBBD520   608  488b4d18       REX.W movq rcx,[rbp+0x18]
000000D55DBBD524   612  f6c101         testb rcx,0x1
000000D55DBBD527   615  0f84e5000000   jz 850  (000000D55DBBD612)
000000D55DBBD52D   621  49ba51fcb057e9000000 REX.W movq r10,000000E957B0FC51    ;; object: 000000E957B0FC51 <Map(UINT32_ELEMENTS)>
000000D55DBBD537   631  4c3951ff       REX.W cmpq [rcx-0x1],r10
000000D55DBBD53B   635  0f85d6000000   jnz 855  (000000D55DBBD617)
000000D55DBBD541   641  488b710f       REX.W movq rsi,[rcx+0xf]
000000D55DBBD545   645  8b7e0b         movl rdi,[rsi+0xb]
000000D55DBBD548   648  4c8b5117       REX.W movq r10,[rcx+0x17]
000000D55DBBD54C   652  41f6422708     testb [r10+0x27],0x8
000000D55DBBD551   657  0f85c5000000   jnz 860  (000000D55DBBD61C)
000000D55DBBD557   663  4c8b4617       REX.W movq r8,[rsi+0x17]
000000D55DBBD55B   667  488b760f       REX.W movq rsi,[rsi+0xf]
000000D55DBBD55F   671  4c03c6         REX.W addq r8,rsi
000000D55DBBD562   674  83ff00         cmpl rdi,0x0
000000D55DBBD565   677  0f86b6000000   jna 865  (000000D55DBBD621)
000000D55DBBD56B   683  83ff01         cmpl rdi,0x1
000000D55DBBD56E   686  0f86b2000000   jna 870  (000000D55DBBD626)
000000D55DBBD574   692  418910         movl [r8],rdx
000000D55DBBD577   695  33c0           xorl rax,rax
000000D55DBBD579   697  41894004       movl [r8+0x4],rax
000000D55DBBD57D   701  48b8414230457f020000 REX.W movq rax,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBBD587   711  488be5         REX.W movq rsp,rbp
000000D55DBBD58A   714  5d             pop rbp
000000D55DBBD58B   715  c21800         ret 0x18
000000D55DBBD58E   718  4d8b55f8       REX.W movq r10,[r13-0x8]
000000D55DBBD592   722  4c3953ff       REX.W cmpq [rbx-0x1],r10
000000D55DBBD596   726  0f858f000000   jnz 875  (000000D55DBBD62B)
000000D55DBBD59C   732  c5fb104307     vmovsd xmm0,[rbx+0x7]
000000D55DBBD5A1   737  c5fb2cd8       vcvttsd2si rbx,xmm0
000000D55DBBD5A5   741  c5f157c9       vxorpd xmm1,xmm1,xmm1
000000D55DBBD5A9   745  c5f32acb       vcvtlsi2sd xmm1,xmm1,rbx
000000D55DBBD5AD   749  c5f92ec1       vucomisd xmm0,xmm1
000000D55DBBD5B1   753  0f8574000000   jnz 875  (000000D55DBBD62B)
000000D55DBBD5B7   759  0f8a6e000000   jpe 875  (000000D55DBBD62B)
000000D55DBBD5BD   765  e91afeffff     jmp 284  (000000D55DBBD3DC)
000000D55DBBD5C2   770  e8438ac4ff     call 000000D55D80600A    ;; deoptimization bailout 1
000000D55DBBD5C7   775  e8488ac4ff     call 000000D55D806014    ;; deoptimization bailout 2
000000D55DBBD5CC   780  e84d8ac4ff     call 000000D55D80601E    ;; deoptimization bailout 3
000000D55DBBD5D1   785  e8528ac4ff     call 000000D55D806028    ;; deoptimization bailout 4
000000D55DBBD5D6   790  e8578ac4ff     call 000000D55D806032    ;; deoptimization bailout 5
000000D55DBBD5DB   795  e85c8ac4ff     call 000000D55D80603C    ;; deoptimization bailout 6
000000D55DBBD5E0   800  e8758ac4ff     call 000000D55D80605A    ;; deoptimization bailout 9
000000D55DBBD5E5   805  e87a8ac4ff     call 000000D55D806064    ;; deoptimization bailout 10
000000D55DBBD5EA   810  e87f8ac4ff     call 000000D55D80606E    ;; deoptimization bailout 11
000000D55DBBD5EF   815  e88e8ac4ff     call 000000D55D806082    ;; deoptimization bailout 13
000000D55DBBD5F4   820  e8938ac4ff     call 000000D55D80608C    ;; deoptimization bailout 14
000000D55DBBD5F9   825  e8988ac4ff     call 000000D55D806096    ;; deoptimization bailout 15
000000D55DBBD5FE   830  e89d8ac4ff     call 000000D55D8060A0    ;; deoptimization bailout 16
000000D55DBBD603   835  e8a28ac4ff     call 000000D55D8060AA    ;; deoptimization bailout 17
000000D55DBBD608   840  e8a78ac4ff     call 000000D55D8060B4    ;; deoptimization bailout 18
000000D55DBBD60D   845  e8b68ac4ff     call 000000D55D8060C8    ;; deoptimization bailout 20
000000D55DBBD612   850  e8bb8ac4ff     call 000000D55D8060D2    ;; deoptimization bailout 21
000000D55DBBD617   855  e8c08ac4ff     call 000000D55D8060DC    ;; deoptimization bailout 22
000000D55DBBD61C   860  e8c58ac4ff     call 000000D55D8060E6    ;; deoptimization bailout 23
000000D55DBBD621   865  e8ca8ac4ff     call 000000D55D8060F0    ;; deoptimization bailout 24
000000D55DBBD626   870  e8cf8ac4ff     call 000000D55D8060FA    ;; deoptimization bailout 25
000000D55DBBD62B   875  e8d48ac4ff     call 000000D55D806104    ;; deoptimization bailout 26

Inlined functions (count = 3)
 0000027266FCB121 <SharedFunctionInfo hi>
 0000027266FCB061 <SharedFunctionInfo d_bsr>
 0000027266FCB4E1 <SharedFunctionInfo set>

Deoptimization Input Data (deopt points = 27)
 index  ast id    argc     pc
     0       4       0     35
     1       4       0     -1
     2       3       0     -1
     3       3       0     -1
     4       3       0     -1
     5       3       0     -1
     6       3       0     -1
     7      70       0    222
     8      61       0    268
     9      49       0     -1
    10       3       0     -1
    11       7       0     -1
    12       7       0     -1
    13      25       0     -1
    14      55       0     -1
    15      55       0     -1
    16      55       0     -1
    17      55       0     -1
    18      24       0     -1
    19      24       0     -1
    20      17       0     -1
    21       3       0     -1
    22       3       0     -1
    23       3       0     -1
    24       3       0     -1
    25       3       0     -1
    26      17       0     -1

Safepoints (size = 41)
000000D55DBBD2E3    35  0010000 (sp -> fp)       0
000000D55DBBD39E   222  1110000 (sp -> fp)       7
000000D55DBBD3CC   268  0110000 (sp -> fp)       8

RelocInfo (size = 181)
000000D55DBBD2DF  code target (BUILTIN)  (000000D55DB27440)
000000D55DBBD2E7  position  (2813)
000000D55DBBD2EF  position  (2820)
000000D55DBBD2F5  property cell
000000D55DBBD319  embedded object  (000000E957B0FC51 <Map(UINT32_ELEMENTS)>)
000000D55DBBD368  position  (2853)
000000D55DBBD370  position  (2859)
000000D55DBBD376  embedded object  (0000027F45304241 <undefined>)
000000D55DBBD38E  embedded object  (0000027266FCF081 <FixedArray[13]>)
000000D55DBBD39A  code target (CALL_IC)  (000000D55DB7B480)
000000D55DBBD3A0  embedded object  (0000027F45304241 <undefined>)
000000D55DBBD3B7  embedded object  (0000027266FCF081 <FixedArray[13]>)
000000D55DBBD3C8  code target (CALL_IC)  (000000D55DB7B480)
000000D55DBBD3E8  position  (2820)
000000D55DBBD3EC  position  (2833)
000000D55DBBD3F0  position  (2839)
000000D55DBBD3F5  property cell
000000D55DBBD40C  position  (1535)
000000D55DBBD418  position  (2820)
000000D55DBBD41A  property cell
000000D55DBBD425  position  (1535)
000000D55DBBD437  position  (2820)
000000D55DBBD439  property cell
000000D55DBBD444  position  (1535)
000000D55DBBD466  runtime entry  (deoptimization bailout 12)
000000D55DBBD46A  position  (2820)
000000D55DBBD46C  property cell
000000D55DBBD477  position  (1569)
000000D55DBBD488  position  (1613)
000000D55DBBD499  embedded object  (000000E957B0F469 <Map(UINT8_ELEMENTS)>)
000000D55DBBD4E3  position  (2820)
000000D55DBBD4E5  property cell
000000D55DBBD4F0  position  (1535)
000000D55DBBD4FE  position  (1588)
000000D55DBBD4FF  runtime entry
000000D55DBBD503  position  (2831)
000000D55DBBD506  position  (2859)
000000D55DBBD50C  property cell
000000D55DBBD52F  embedded object  (000000E957B0FC51 <Map(UINT32_ELEMENTS)>)
000000D55DBBD57F  embedded object  (0000027F45304241 <undefined>)
000000D55DBBD5C3  runtime entry  (deoptimization bailout 1)
000000D55DBBD5C8  runtime entry  (deoptimization bailout 2)
000000D55DBBD5CD  runtime entry  (deoptimization bailout 3)
000000D55DBBD5D2  runtime entry  (deoptimization bailout 4)
000000D55DBBD5D7  runtime entry  (deoptimization bailout 5)
000000D55DBBD5DC  runtime entry  (deoptimization bailout 6)
000000D55DBBD5E1  runtime entry  (deoptimization bailout 9)
000000D55DBBD5E6  runtime entry  (deoptimization bailout 10)
000000D55DBBD5EB  runtime entry  (deoptimization bailout 11)
000000D55DBBD5F0  runtime entry  (deoptimization bailout 13)
000000D55DBBD5F5  runtime entry  (deoptimization bailout 14)
000000D55DBBD5FA  runtime entry  (deoptimization bailout 15)
000000D55DBBD5FF  runtime entry  (deoptimization bailout 16)
000000D55DBBD604  runtime entry  (deoptimization bailout 17)
000000D55DBBD609  runtime entry  (deoptimization bailout 18)
000000D55DBBD60E  runtime entry  (deoptimization bailout 20)
000000D55DBBD613  runtime entry  (deoptimization bailout 21)
000000D55DBBD618  runtime entry  (deoptimization bailout 22)
000000D55DBBD61D  runtime entry  (deoptimization bailout 23)
000000D55DBBD622  runtime entry  (deoptimization bailout 24)
000000D55DBBD627  runtime entry  (deoptimization bailout 25)
000000D55DBBD62C  runtime entry  (deoptimization bailout 26)

--- End code ---
--- Raw source ---
(exports, require, module, __filename, __dirname) { // #########################################
//            low-level functions
// #########################################

// ---------- 'registers' ----------

// '64-bit', little endian
let rax = new Uint32Array(2)
let rbx = new Uint32Array(2)
let rcx = new Uint32Array(2)
let rdx = new Uint32Array(2)

// scrap
let eax = 0
let ebx = 0
let ecx = 0
let edx = 0
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
  eax = x & 0xFFFF
  return (eax) ? d_bsf_lookup[eax] : 16 | d_bsf_lookup[x >>> 16]
}

// bit position of x's msb
function d_bsr(x) {
  eax = x & 0xFFFF0000
  return (eax) ? 16 | d_bsr_lookup[eax >>> 16] : d_bsr_lookup[x & 0xFFFF]
}

// ---------- qword procedures (mostly mutating) ----------

// pure
function hi(x) { return x[1] } // upper 32 bits
function lo(x) { return x[0] } // lower 32 bits
function bit(n, x) { return (n & 32) ? d_bit(n ^ 32, hi(x)) : d_bit(n, lo(x)) } // nth bit of x

// unary bitwise
function com(x) { x[0] = ~x[0]; x[1] = ~x[1] } // 1s complement

// setting registers
function mov(x, y)      { x[0] = y[0]; x[1] = y[1] } // move y to x
function set(x, lo, hi) { x[0] = lo;   x[1] = hi   } // set x to [lo, hi]

// simple arithmetic & binary bitwise
function and(x, y) { x[0] &= y[0]; x[1] &= y[1] } // and x by y
function  or(x, y) { x[0] |= y[0]; x[1] |= y[1] } //  or x by y
function xor(x, y) { x[0] ^= y[0]; x[1] ^= y[1] } // xor x by y

// set x to lsb of y
function lsb(x, y) {
  if (lo(y))
    set(x, d_lsb(lo(y)), 0)
  else
    set(x, 0, d_lsb(hi(y)))
}

// set x to y without its lsb
function clsb(x, y) {
  if (lo(y))
    set(x, d_clsb(lo(y)), hi(y))
  else
    set(x, 0, d_clsb(hi(y)))
}

// bit scans
function bsf(x, y) { set(x, lo(y) ?      d_bsf(lo(y)) : 32 | d_bsf(hi(y)), 0) } // set x to bit position of y's lsb
function bsr(x, y) { set(x, hi(y) ? 32 | d_bsr(hi(y)) :      d_bsr(lo(y)), 0) } // set x to bit position of y's msb

// add y to x
function add(x, y) {
  if (d_bit(31, lo(x) & lo(y))) // handle carry
    ++x[1]
  x[0] += y[0]
  x[1] += y[1]
}

// ##################################
//            main program 
// ##################################

set(rax, 0, 1)
set(rbx, 20, 1)
let start = Date.now()
for (let i = 0; i < 10000000; ++i)
  bsr(rax, rbx)
console.log(eax, Date.now() - start)
})

--- Optimized code ---
optimization_id = 5
source_position = 10
kind = OPTIMIZED_FUNCTION
stack_slots = 55
compiler = crankshaft
Instructions (size = 5289)
000000D55DBBFA20     0  55             push rbp
000000D55DBBFA21     1  4889e5         REX.W movq rbp,rsp
000000D55DBBFA24     4  56             push rsi
000000D55DBBFA25     5  57             push rdi
000000D55DBBFA26     6  4881ec98010000 REX.W subq rsp,0x198
000000D55DBBFA2D    13  e8eeb7fcff     call 000000D55DB8B220    ;; code: STUB, FastNewContextStub, minor: 11
000000D55DBBFA32    18  488bf0         REX.W movq rsi,rax
000000D55DBBFA35    21  488945f8       REX.W movq [rbp-0x8],rax
000000D55DBBFA39    25  488b45f8       REX.W movq rax,[rbp-0x8]
000000D55DBBFA3D    29  488985e8feffff REX.W movq [rbp-0x118],rax
000000D55DBBFA44    36  48bb194530457f020000 REX.W movq rbx,0000027F45304519    ;; object: 0000027F45304519 <the hole>
000000D55DBBFA4E    46  4889582f       REX.W movq [rax+0x2f],rbx
000000D55DBBFA52    50  48bb61adfc6672020000 REX.W movq rbx,0000027266FCAD61    ;; object: 0000027266FCAD61 <SharedFunctionInfo d_bit>
000000D55DBBFA5C    60  488bf0         REX.W movq rsi,rax
000000D55DBBFA5F    63  e85cd8f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFA64    68  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFA6B    75  48894237       REX.W movq [rdx+0x37],rax
000000D55DBBFA6F    79  a801           test al,0x1
000000D55DBBFA71    81  0f8425000000   jz 124  (000000D55DBBFA9C)
000000D55DBBFA77    87  488d5a37       REX.W leaq rbx,[rdx+0x37]
000000D55DBBFA7B    91  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFA81    97  f6400802       testb [rax+0x8],0x2
000000D55DBBFA85   101  7415           jz 124  (000000D55DBBFA9C)
000000D55DBBFA87   103  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFA8E   110  4823c2         REX.W andq rax,rdx
000000D55DBBFA91   113  f6400804       testb [rax+0x8],0x4
000000D55DBBFA95   117  7405           jz 124  (000000D55DBBFA9C)
000000D55DBBFA97   119  e864ebffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFA9C   124  48bb21aefc6672020000 REX.W movq rbx,0000027266FCAE21    ;; object: 0000027266FCAE21 <SharedFunctionInfo d_lsb>
000000D55DBBFAA6   134  488bf2         REX.W movq rsi,rdx
000000D55DBBFAA9   137  e812d8f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFAAE   142  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFAB5   149  4889423f       REX.W movq [rdx+0x3f],rax
000000D55DBBFAB9   153  a801           test al,0x1
000000D55DBBFABB   155  0f8425000000   jz 198  (000000D55DBBFAE6)
000000D55DBBFAC1   161  488d5a3f       REX.W leaq rbx,[rdx+0x3f]
000000D55DBBFAC5   165  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFACB   171  f6400802       testb [rax+0x8],0x2
000000D55DBBFACF   175  7415           jz 198  (000000D55DBBFAE6)
000000D55DBBFAD1   177  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFAD8   184  4823c2         REX.W andq rax,rdx
000000D55DBBFADB   187  f6400804       testb [rax+0x8],0x4
000000D55DBBFADF   191  7405           jz 198  (000000D55DBBFAE6)
000000D55DBBFAE1   193  e81aebffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFAE6   198  48bbe1aefc6672020000 REX.W movq rbx,0000027266FCAEE1    ;; object: 0000027266FCAEE1 <SharedFunctionInfo d_clsb>
000000D55DBBFAF0   208  488bf2         REX.W movq rsi,rdx
000000D55DBBFAF3   211  e8c8d7f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFAF8   216  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFAFF   223  48894247       REX.W movq [rdx+0x47],rax
000000D55DBBFB03   227  a801           test al,0x1
000000D55DBBFB05   229  0f8425000000   jz 272  (000000D55DBBFB30)
000000D55DBBFB0B   235  488d5a47       REX.W leaq rbx,[rdx+0x47]
000000D55DBBFB0F   239  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFB15   245  f6400802       testb [rax+0x8],0x2
000000D55DBBFB19   249  7415           jz 272  (000000D55DBBFB30)
000000D55DBBFB1B   251  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFB22   258  4823c2         REX.W andq rax,rdx
000000D55DBBFB25   261  f6400804       testb [rax+0x8],0x4
000000D55DBBFB29   265  7405           jz 272  (000000D55DBBFB30)
000000D55DBBFB2B   267  e8d0eaffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFB30   272  48bb194530457f020000 REX.W movq rbx,0000027F45304519    ;; object: 0000027F45304519 <the hole>
000000D55DBBFB3A   282  48895a4f       REX.W movq [rdx+0x4f],rbx
000000D55DBBFB3E   286  48bb194530457f020000 REX.W movq rbx,0000027F45304519    ;; object: 0000027F45304519 <the hole>
000000D55DBBFB48   296  48895a57       REX.W movq [rdx+0x57],rbx
000000D55DBBFB4C   300  48bba1affc6672020000 REX.W movq rbx,0000027266FCAFA1    ;; object: 0000027266FCAFA1 <SharedFunctionInfo d_bsf>
000000D55DBBFB56   310  488bf2         REX.W movq rsi,rdx
000000D55DBBFB59   313  e862d7f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFB5E   318  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFB65   325  4889425f       REX.W movq [rdx+0x5f],rax
000000D55DBBFB69   329  a801           test al,0x1
000000D55DBBFB6B   331  0f8425000000   jz 374  (000000D55DBBFB96)
000000D55DBBFB71   337  488d5a5f       REX.W leaq rbx,[rdx+0x5f]
000000D55DBBFB75   341  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFB7B   347  f6400802       testb [rax+0x8],0x2
000000D55DBBFB7F   351  7415           jz 374  (000000D55DBBFB96)
000000D55DBBFB81   353  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFB88   360  4823c2         REX.W andq rax,rdx
000000D55DBBFB8B   363  f6400804       testb [rax+0x8],0x4
000000D55DBBFB8F   367  7405           jz 374  (000000D55DBBFB96)
000000D55DBBFB91   369  e86aeaffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFB96   374  48bb61b0fc6672020000 REX.W movq rbx,0000027266FCB061    ;; object: 0000027266FCB061 <SharedFunctionInfo d_bsr>
000000D55DBBFBA0   384  488bf2         REX.W movq rsi,rdx
000000D55DBBFBA3   387  e818d7f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFBA8   392  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFBAF   399  48894267       REX.W movq [rdx+0x67],rax
000000D55DBBFBB3   403  a801           test al,0x1
000000D55DBBFBB5   405  0f8425000000   jz 448  (000000D55DBBFBE0)
000000D55DBBFBBB   411  488d5a67       REX.W leaq rbx,[rdx+0x67]
000000D55DBBFBBF   415  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFBC5   421  f6400802       testb [rax+0x8],0x2
000000D55DBBFBC9   425  7415           jz 448  (000000D55DBBFBE0)
000000D55DBBFBCB   427  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFBD2   434  4823c2         REX.W andq rax,rdx
000000D55DBBFBD5   437  f6400804       testb [rax+0x8],0x4
000000D55DBBFBD9   441  7405           jz 448  (000000D55DBBFBE0)
000000D55DBBFBDB   443  e820eaffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFBE0   448  48bb21b1fc6672020000 REX.W movq rbx,0000027266FCB121    ;; object: 0000027266FCB121 <SharedFunctionInfo hi>
000000D55DBBFBEA   458  488bf2         REX.W movq rsi,rdx
000000D55DBBFBED   461  e8ced6f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFBF2   466  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFBF9   473  4889426f       REX.W movq [rdx+0x6f],rax
000000D55DBBFBFD   477  a801           test al,0x1
000000D55DBBFBFF   479  0f8425000000   jz 522  (000000D55DBBFC2A)
000000D55DBBFC05   485  488d5a6f       REX.W leaq rbx,[rdx+0x6f]
000000D55DBBFC09   489  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFC0F   495  f6400802       testb [rax+0x8],0x2
000000D55DBBFC13   499  7415           jz 522  (000000D55DBBFC2A)
000000D55DBBFC15   501  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFC1C   508  4823c2         REX.W andq rax,rdx
000000D55DBBFC1F   511  f6400804       testb [rax+0x8],0x4
000000D55DBBFC23   515  7405           jz 522  (000000D55DBBFC2A)
000000D55DBBFC25   517  e8d6e9ffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFC2A   522  48bbe1b1fc6672020000 REX.W movq rbx,0000027266FCB1E1    ;; object: 0000027266FCB1E1 <SharedFunctionInfo lo>
000000D55DBBFC34   532  488bf2         REX.W movq rsi,rdx
000000D55DBBFC37   535  e884d6f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFC3C   540  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFC43   547  48894277       REX.W movq [rdx+0x77],rax
000000D55DBBFC47   551  a801           test al,0x1
000000D55DBBFC49   553  0f8425000000   jz 596  (000000D55DBBFC74)
000000D55DBBFC4F   559  488d5a77       REX.W leaq rbx,[rdx+0x77]
000000D55DBBFC53   563  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFC59   569  f6400802       testb [rax+0x8],0x2
000000D55DBBFC5D   573  7415           jz 596  (000000D55DBBFC74)
000000D55DBBFC5F   575  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFC66   582  4823c2         REX.W andq rax,rdx
000000D55DBBFC69   585  f6400804       testb [rax+0x8],0x4
000000D55DBBFC6D   589  7405           jz 596  (000000D55DBBFC74)
000000D55DBBFC6F   591  e88ce9ffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFC74   596  48bba1b2fc6672020000 REX.W movq rbx,0000027266FCB2A1    ;; object: 0000027266FCB2A1 <SharedFunctionInfo bit>
000000D55DBBFC7E   606  488bf2         REX.W movq rsi,rdx
000000D55DBBFC81   609  e83ad6f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFC86   614  48bb61b3fc6672020000 REX.W movq rbx,0000027266FCB361    ;; object: 0000027266FCB361 <SharedFunctionInfo com>
000000D55DBBFC90   624  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFC97   631  e824d6f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFC9C   636  48bb21b4fc6672020000 REX.W movq rbx,0000027266FCB421    ;; object: 0000027266FCB421 <SharedFunctionInfo mov>
000000D55DBBFCA6   646  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFCAD   653  e80ed6f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFCB2   658  48bbe1b4fc6672020000 REX.W movq rbx,0000027266FCB4E1    ;; object: 0000027266FCB4E1 <SharedFunctionInfo set>
000000D55DBBFCBC   668  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFCC3   675  e8f8d5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFCC8   680  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBBFCCF   687  4889427f       REX.W movq [rdx+0x7f],rax
000000D55DBBFCD3   691  a801           test al,0x1
000000D55DBBFCD5   693  0f8425000000   jz 736  (000000D55DBBFD00)
000000D55DBBFCDB   699  488d5a7f       REX.W leaq rbx,[rdx+0x7f]
000000D55DBBFCDF   703  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFCE5   709  f6400802       testb [rax+0x8],0x2
000000D55DBBFCE9   713  7415           jz 736  (000000D55DBBFD00)
000000D55DBBFCEB   715  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFCF2   722  4823c2         REX.W andq rax,rdx
000000D55DBBFCF5   725  f6400804       testb [rax+0x8],0x4
000000D55DBBFCF9   729  7405           jz 736  (000000D55DBBFD00)
000000D55DBBFCFB   731  e800e9ffff     call 000000D55DBBE600    ;; code: STUB, RecordWriteStub, minor: 8962
000000D55DBBFD00   736  48bba1b5fc6672020000 REX.W movq rbx,0000027266FCB5A1    ;; object: 0000027266FCB5A1 <SharedFunctionInfo and>
000000D55DBBFD0A   746  488bf2         REX.W movq rsi,rdx
000000D55DBBFD0D   749  e8aed5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFD12   754  48bb61b6fc6672020000 REX.W movq rbx,0000027266FCB661    ;; object: 0000027266FCB661 <SharedFunctionInfo or>
000000D55DBBFD1C   764  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFD23   771  e898d5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFD28   776  48bb21b7fc6672020000 REX.W movq rbx,0000027266FCB721    ;; object: 0000027266FCB721 <SharedFunctionInfo xor>
000000D55DBBFD32   786  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFD39   793  e882d5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFD3E   798  48bbe1b7fc6672020000 REX.W movq rbx,0000027266FCB7E1    ;; object: 0000027266FCB7E1 <SharedFunctionInfo lsb>
000000D55DBBFD48   808  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFD4F   815  e86cd5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFD54   820  48bba1b8fc6672020000 REX.W movq rbx,0000027266FCB8A1    ;; object: 0000027266FCB8A1 <SharedFunctionInfo clsb>
000000D55DBBFD5E   830  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFD65   837  e856d5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFD6A   842  48bb61b9fc6672020000 REX.W movq rbx,0000027266FCB961    ;; object: 0000027266FCB961 <SharedFunctionInfo bsf>
000000D55DBBFD74   852  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFD7B   859  e840d5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFD80   864  48bb21bafc6672020000 REX.W movq rbx,0000027266FCBA21    ;; object: 0000027266FCBA21 <SharedFunctionInfo bsr>
000000D55DBBFD8A   874  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFD91   881  e82ad5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFD96   886  488985e0feffff REX.W movq [rbp-0x120],rax
000000D55DBBFD9D   893  48bbe1bafc6672020000 REX.W movq rbx,0000027266FCBAE1    ;; object: 0000027266FCBAE1 <SharedFunctionInfo add>
000000D55DBBFDA7   903  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFDAE   910  e80dd5f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBBFDB3   915  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFDBA   922  660f1f440000   nop
000000D55DBBFDC0   928  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBBFDC7   935  7305           jnc 942  (000000D55DBBFDCE)
000000D55DBBFDC9   937  e87276f6ff     call StackCheck  (000000D55DB27440)    ;; code: BUILTIN
000000D55DBBFDCE   942  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFDD8   952  4152           push r10
000000D55DBBFDDA   954  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFDE4   964  4152           push r10
000000D55DBBFDE6   966  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFDF0   976  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFDFA   986  b801000000     movl rax,0000000000000001
000000D55DBBFDFF   991  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFE06   998  488bfa         REX.W movq rdi,rdx
000000D55DBBFE09  1001  e8d2e4f5ff     call Construct  (000000D55DB1E2E0)    ;; code: BUILTIN
000000D55DBBFE0E  1006  488985d8feffff REX.W movq [rbp-0x128],rax
000000D55DBBFE15  1013  488bd8         REX.W movq rbx,rax
000000D55DBBFE18  1016  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 299
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFE22  1026  4152           push r10
000000D55DBBFE24  1028  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFE2E  1038  4152           push r10
000000D55DBBFE30  1040  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFE3A  1050  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFE44  1060  b801000000     movl rax,0000000000000001
000000D55DBBFE49  1065  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFE50  1072  488bfa         REX.W movq rdi,rdx
000000D55DBBFE53  1075  e888e4f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 299
                                                             ;; code: BUILTIN
000000D55DBBFE58  1080  488985d0feffff REX.W movq [rbp-0x130],rax
000000D55DBBFE5F  1087  488bd8         REX.W movq rbx,rax
000000D55DBBFE62  1090  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 329
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFE6C  1100  4152           push r10
000000D55DBBFE6E  1102  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFE78  1112  4152           push r10
000000D55DBBFE7A  1114  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFE84  1124  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFE8E  1134  b801000000     movl rax,0000000000000001
000000D55DBBFE93  1139  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFE9A  1146  488bfa         REX.W movq rdi,rdx
000000D55DBBFE9D  1149  e83ee4f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 329
                                                             ;; code: BUILTIN
000000D55DBBFEA2  1154  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 359
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFEAC  1164  4152           push r10
000000D55DBBFEAE  1166  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFEB8  1176  4152           push r10
000000D55DBBFEBA  1178  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFEC4  1188  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFECE  1198  b801000000     movl rax,0000000000000001
000000D55DBBFED3  1203  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFEDA  1210  488bfa         REX.W movq rdi,rdx
000000D55DBBFEDD  1213  e8fee3f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 359
                                                             ;; code: BUILTIN
000000D55DBBFEE2  1218  33c0           xorl rax,rax
000000D55DBBFEE4  1220  488b9de8feffff REX.W movq rbx,[rbp-0x118]
000000D55DBBFEEB  1227  4889432f       REX.W movq [rbx+0x2f],rax
000000D55DBBFEEF  1231  a801           test al,0x1
000000D55DBBFEF1  1233  0f8425000000   jz 1276  (000000D55DBBFF1C)
000000D55DBBFEF7  1239  488d532f       REX.W leaq rdx,[rbx+0x2f]
000000D55DBBFEFB  1243  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBBFF01  1249  f6400802       testb [rax+0x8],0x2
000000D55DBBFF05  1253  7415           jz 1276  (000000D55DBBFF1C)
000000D55DBBFF07  1255  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBBFF0E  1262  4823c3         REX.W andq rax,rbx
000000D55DBBFF11  1265  f6400804       testb [rax+0x8],0x4
000000D55DBBFF15  1269  7405           jz 1276  (000000D55DBBFF1C)
000000D55DBBFF17  1271  e804f0ffff     call 000000D55DBBEF20    ;; code: STUB, RecordWriteStub, minor: 8707
000000D55DBBFF1C  1276  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 452
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFF26  1286  4152           push r10
000000D55DBBFF28  1288  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFF32  1298  4152           push r10
000000D55DBBFF34  1300  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFF3E  1310  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFF48  1320  b801000000     movl rax,0000000000000001
000000D55DBBFF4D  1325  488bf3         REX.W movq rsi,rbx
000000D55DBBFF50  1328  488bfa         REX.W movq rdi,rdx
000000D55DBBFF53  1331  e888e3f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 452
                                                             ;; code: BUILTIN
000000D55DBBFF58  1336  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 481
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFF62  1346  4152           push r10
000000D55DBBFF64  1348  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFF6E  1358  4152           push r10
000000D55DBBFF70  1360  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFF7A  1370  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFF84  1380  b801000000     movl rax,0000000000000001
000000D55DBBFF89  1385  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFF90  1392  488bfa         REX.W movq rdi,rdx
000000D55DBBFF93  1395  e848e3f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 481
                                                             ;; code: BUILTIN
000000D55DBBFF98  1400  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 510
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFFA2  1410  4152           push r10
000000D55DBBFFA4  1412  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFFAE  1422  4152           push r10
000000D55DBBFFB0  1424  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFFBA  1434  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFFC4  1444  b801000000     movl rax,0000000000000001
000000D55DBBFFC9  1449  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBBFFD0  1456  488bfa         REX.W movq rdi,rdx
000000D55DBBFFD3  1459  e808e3f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 510
                                                             ;; code: BUILTIN
000000D55DBBFFD8  1464  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 539
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFFE2  1474  4152           push r10
000000D55DBBFFE4  1476  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBBFFEE  1486  4152           push r10
000000D55DBBFFF0  1488  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBBFFFA  1498  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC0004  1508  b801000000     movl rax,0000000000000001
000000D55DBC0009  1513  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC0010  1520  488bfa         REX.W movq rdi,rdx
000000D55DBC0013  1523  e8c8e2f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 539
                                                             ;; code: BUILTIN
000000D55DBC0018  1528  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 568
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC0022  1538  4152           push r10
000000D55DBC0024  1540  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBC002E  1550  4152           push r10
000000D55DBC0030  1552  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC003A  1562  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC0044  1572  b801000000     movl rax,0000000000000001
000000D55DBC0049  1577  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC0050  1584  488bfa         REX.W movq rdi,rdx
000000D55DBC0053  1587  e888e2f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 568
                                                             ;; code: BUILTIN
000000D55DBC0058  1592  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 597
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC0062  1602  4152           push r10
000000D55DBC0064  1604  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBC006E  1614  4152           push r10
000000D55DBC0070  1616  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC007A  1626  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC0084  1636  b801000000     movl rax,0000000000000001
000000D55DBC0089  1641  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC0090  1648  488bfa         REX.W movq rdi,rdx
000000D55DBC0093  1651  e848e2f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 597
                                                             ;; code: BUILTIN
000000D55DBC0098  1656  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 626
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC00A2  1666  4152           push r10
000000D55DBC00A4  1668  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBC00AE  1678  4152           push r10
000000D55DBC00B0  1680  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC00BA  1690  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC00C4  1700  b801000000     movl rax,0000000000000001
000000D55DBC00C9  1705  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC00D0  1712  488bfa         REX.W movq rdi,rdx
000000D55DBC00D3  1715  e808e2f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 626
                                                             ;; code: BUILTIN
000000D55DBC00D8  1720  49baf17a34457f020000 REX.W movq r10,0000027F45347AF1    ;; debug: position 655
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC00E2  1730  4152           push r10
000000D55DBC00E4  1732  49ba0000000002000000 REX.W movq r10,0000000200000000
000000D55DBC00EE  1742  4152           push r10
000000D55DBC00F0  1744  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; debug: position 269
                                                             ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC00FA  1754  48baf17a34457f020000 REX.W movq rdx,0000027F45347AF1    ;; object: 0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>
000000D55DBC0104  1764  b801000000     movl rax,0000000000000001
000000D55DBC0109  1769  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC0110  1776  488bfa         REX.W movq rdi,rdx
000000D55DBC0113  1779  e8c8e1f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 655
                                                             ;; code: BUILTIN
000000D55DBC0118  1784  49ba917534457f020000 REX.W movq r10,0000027F45347591    ;; debug: position 979
                                                             ;; object: 0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>
000000D55DBC0122  1794  4152           push r10
000000D55DBC0124  1796  49ba0000000000000100 REX.W movq r10,0001000000000000
000000D55DBC012E  1806  4152           push r10
000000D55DBC0130  1808  48ba917534457f020000 REX.W movq rdx,0000027F45347591    ;; object: 0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>
000000D55DBC013A  1818  48ba917534457f020000 REX.W movq rdx,0000027F45347591    ;; object: 0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>
000000D55DBC0144  1828  b801000000     movl rax,0000000000000001
000000D55DBC0149  1833  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC0150  1840  488bfa         REX.W movq rdi,rdx
000000D55DBC0153  1843  e888e1f5ff     call Construct  (000000D55DB1E2E0)    ;; code: BUILTIN
000000D55DBC0158  1848  488985c8feffff REX.W movq [rbp-0x138],rax
000000D55DBC015F  1855  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC0166  1862  488bd0         REX.W movq rdx,rax
000000D55DBC0169  1865  0f1f00         nop
000000D55DBC016C  1868  48b961c735457f020000 REX.W movq rcx,0000027F4535C761    ;; object: 0000027F4535C761 <String[3]: map>
000000D55DBC0176  1878  48bbb9abfc6672020000 REX.W movq rbx,0000027266FCABB9    ;; object: 0000027266FCABB9 <FixedArray[49]>
000000D55DBC0180  1888  48b80000000014000000 REX.W movq rax,0000001400000000
000000D55DBC018A  1898  e891f6ffff     call 000000D55DBBF820    ;; code: contextual, LOAD_IC, GENERIC
000000D55DBC018F  1903  488985c0feffff REX.W movq [rbp-0x140],rax
000000D55DBC0196  1910  48bba1bbfc6672020000 REX.W movq rbx,0000027266FCBBA1    ;; object: 0000027266FCBBA1 <SharedFunctionInfo>
000000D55DBC01A0  1920  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC01A7  1927  e814d1f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBC01AC  1932  ffb5c8feffff   push [rbp-0x138]
000000D55DBC01B2  1938  50             push rax
000000D55DBC01B3  1939  b801000000     movl rax,0000000000000001
000000D55DBC01B8  1944  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC01BF  1951  488bbdc0feffff REX.W movq rdi,[rbp-0x140]
000000D55DBC01C6  1958  e895d8f5ff     call Call_ReceiverIsNotNullOrUndefined  (000000D55DB1DA60)    ;; code: BUILTIN
000000D55DBC01CB  1963  488b9de8feffff REX.W movq rbx,[rbp-0x118]
000000D55DBC01D2  1970  4889434f       REX.W movq [rbx+0x4f],rax
000000D55DBC01D6  1974  a801           test al,0x1
000000D55DBC01D8  1976  0f8425000000   jz 2019  (000000D55DBC0203)
000000D55DBC01DE  1982  488d534f       REX.W leaq rdx,[rbx+0x4f]
000000D55DBC01E2  1986  48250000f0ff   REX.W and rax,FFFFFFFFFFF00000
000000D55DBC01E8  1992  f6400802       testb [rax+0x8],0x2
000000D55DBC01EC  1996  7415           jz 2019  (000000D55DBC0203)
000000D55DBC01EE  1998  48c7c00000f0ff REX.W movq rax,0xfff00000
000000D55DBC01F5  2005  4823c3         REX.W andq rax,rbx
000000D55DBC01F8  2008  f6400804       testb [rax+0x8],0x4
000000D55DBC01FC  2012  7405           jz 2019  (000000D55DBC0203)
000000D55DBC01FE  2014  e81dedffff     call 000000D55DBBEF20    ;; code: STUB, RecordWriteStub, minor: 8707
000000D55DBC0203  2019  49ba917534457f020000 REX.W movq r10,0000027F45347591    ;; debug: position 1184
                                                             ;; object: 0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>
000000D55DBC020D  2029  4152           push r10
000000D55DBC020F  2031  49ba0000000000000100 REX.W movq r10,0001000000000000
000000D55DBC0219  2041  4152           push r10
000000D55DBC021B  2043  48ba917534457f020000 REX.W movq rdx,0000027F45347591    ;; debug: position 979
                                                             ;; object: 0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>
000000D55DBC0225  2053  48ba917534457f020000 REX.W movq rdx,0000027F45347591    ;; object: 0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>
000000D55DBC022F  2063  b801000000     movl rax,0000000000000001
000000D55DBC0234  2068  488bf3         REX.W movq rsi,rbx
000000D55DBC0237  2071  488bfa         REX.W movq rdi,rdx
000000D55DBC023A  2074  e8a1e0f5ff     call Construct  (000000D55DB1E2E0)    ;; debug: position 1184
                                                             ;; code: BUILTIN
000000D55DBC023F  2079  488985b8feffff REX.W movq [rbp-0x148],rax
000000D55DBC0246  2086  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC024D  2093  488bd0         REX.W movq rdx,rax
000000D55DBC0250  2096  0f1f00         nop
000000D55DBC0253  2099  48b961c735457f020000 REX.W movq rcx,0000027F4535C761    ;; object: 0000027F4535C761 <String[3]: map>
000000D55DBC025D  2109  48bbb9abfc6672020000 REX.W movq rbx,0000027266FCABB9    ;; object: 0000027266FCABB9 <FixedArray[49]>
000000D55DBC0267  2119  48b80000000019000000 REX.W movq rax,0000001900000000
000000D55DBC0271  2129  e8aaf5ffff     call 000000D55DBBF820    ;; code: contextual, LOAD_IC, GENERIC
000000D55DBC0276  2134  488985b0feffff REX.W movq [rbp-0x150],rax
000000D55DBC027D  2141  48bb61bcfc6672020000 REX.W movq rbx,0000027266FCBC61    ;; object: 0000027266FCBC61 <SharedFunctionInfo>
000000D55DBC0287  2151  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC028E  2158  e82dd0f6ff     call 000000D55DB2D2C0    ;; code: STUB, FastNewClosureStub, minor: 0
000000D55DBC0293  2163  ffb5b8feffff   push [rbp-0x148]
000000D55DBC0299  2169  50             push rax
000000D55DBC029A  2170  b801000000     movl rax,0000000000000001
000000D55DBC029F  2175  488bb5e8feffff REX.W movq rsi,[rbp-0x118]
000000D55DBC02A6  2182  488bbdb0feffff REX.W movq rdi,[rbp-0x150]
000000D55DBC02AD  2189  e8aed7f5ff     call Call_ReceiverIsNotNullOrUndefined  (000000D55DB1DA60)    ;; code: BUILTIN
000000D55DBC02B2  2194  488bd8         REX.W movq rbx,rax
000000D55DBC02B5  2197  488b95e8feffff REX.W movq rdx,[rbp-0x118]
000000D55DBC02BC  2204  48895a57       REX.W movq [rdx+0x57],rbx
000000D55DBC02C0  2208  f6c301         testb rbx,0x1
000000D55DBC02C3  2211  0f8426000000   jz 2255  (000000D55DBC02EF)
000000D55DBC02C9  2217  488d4a57       REX.W leaq rcx,[rdx+0x57]
000000D55DBC02CD  2221  4881e30000f0ff REX.W andq rbx,0xfffffffffff00000
000000D55DBC02D4  2228  f6430802       testb [rbx+0x8],0x2
000000D55DBC02D8  2232  7415           jz 2255  (000000D55DBC02EF)
000000D55DBC02DA  2234  48c7c30000f0ff REX.W movq rbx,0xfff00000
000000D55DBC02E1  2241  4823da         REX.W andq rbx,rdx
000000D55DBC02E4  2244  f6430804       testb [rbx+0x8],0x4
000000D55DBC02E8  2248  7405           jz 2255  (000000D55DBC02EF)
000000D55DBC02EA  2250  e83162f5ff     call 000000D55DB16520    ;; code: STUB, RecordWriteStub, minor: 8498
000000D55DBC02EF  2255  488b5a7f       REX.W movq rbx,[rdx+0x7f]    ;; debug: position 3155
000000D55DBC02F3  2259  49ba4025fd6672020000 REX.W movq r10,0000027266FD2540    ;; property cell
000000D55DBC02FD  2269  4d8b12         REX.W movq r10,[r10]
000000D55DBC0300  2272  493bda         REX.W cmpq rbx,r10
000000D55DBC0303  2275  0f85b8070000   jnz 4257  (000000D55DBC0AC1)
000000D55DBC0309  2281  488b8dd8feffff REX.W movq rcx,[rbp-0x128]
000000D55DBC0310  2288  f6c101         testb rcx,0x1
000000D55DBC0313  2291  0f84ad070000   jz 4262  (000000D55DBC0AC6)
000000D55DBC0319  2297  49ba51fcb057e9000000 REX.W movq r10,000000E957B0FC51    ;; object: 000000E957B0FC51 <Map(UINT32_ELEMENTS)>
000000D55DBC0323  2307  4c3951ff       REX.W cmpq [rcx-0x1],r10
000000D55DBC0327  2311  0f859e070000   jnz 4267  (000000D55DBC0ACB)
000000D55DBC032D  2317  488b410f       REX.W movq rax,[rcx+0xf]
000000D55DBC0331  2321  8b700b         movl rsi,[rax+0xb]
000000D55DBC0334  2324  4c8b5117       REX.W movq r10,[rcx+0x17]
000000D55DBC0338  2328  41f6422708     testb [r10+0x27],0x8
000000D55DBC033D  2333  0f858d070000   jnz 4272  (000000D55DBC0AD0)
000000D55DBC0343  2339  488b7817       REX.W movq rdi,[rax+0x17]
000000D55DBC0347  2343  488b400f       REX.W movq rax,[rax+0xf]
000000D55DBC034B  2347  4803f8         REX.W addq rdi,rax
000000D55DBC034E  2350  83fe00         cmpl rsi,0x0
000000D55DBC0351  2353  0f867e070000   jna 4277  (000000D55DBC0AD5)
000000D55DBC0357  2359  83fe01         cmpl rsi,0x1
000000D55DBC035A  2362  0f867a070000   jna 4282  (000000D55DBC0ADA)
000000D55DBC0360  2368  33c0           xorl rax,rax          ;; debug: position 359
000000D55DBC0362  2370  8907           movl [rdi],rax        ;; debug: position 3155
000000D55DBC0364  2372  b801000000     movl rax,0000000000000001
000000D55DBC0369  2377  894704         movl [rdi+0x4],rax
000000D55DBC036C  2380  4c8b85d0feffff REX.W movq r8,[rbp-0x130]    ;; debug: position 3171
000000D55DBC0373  2387  41f6c001       testb r8,0x1
000000D55DBC0377  2391  0f8462070000   jz 4287  (000000D55DBC0ADF)
000000D55DBC037D  2397  49ba51fcb057e9000000 REX.W movq r10,000000E957B0FC51    ;; object: 000000E957B0FC51 <Map(UINT32_ELEMENTS)>
000000D55DBC0387  2407  4d3950ff       REX.W cmpq [r8-0x1],r10
000000D55DBC038B  2411  0f8553070000   jnz 4292  (000000D55DBC0AE4)
000000D55DBC0391  2417  498b400f       REX.W movq rax,[r8+0xf]
000000D55DBC0395  2421  8b700b         movl rsi,[rax+0xb]
000000D55DBC0398  2424  4d8b5017       REX.W movq r10,[r8+0x17]
000000D55DBC039C  2428  41f6422708     testb [r10+0x27],0x8
000000D55DBC03A1  2433  0f8542070000   jnz 4297  (000000D55DBC0AE9)
000000D55DBC03A7  2439  488b7817       REX.W movq rdi,[rax+0x17]
000000D55DBC03AB  2443  488b400f       REX.W movq rax,[rax+0xf]
000000D55DBC03AF  2447  4803f8         REX.W addq rdi,rax
000000D55DBC03B2  2450  83fe00         cmpl rsi,0x0
000000D55DBC03B5  2453  0f8633070000   jna 4302  (000000D55DBC0AEE)
000000D55DBC03BB  2459  83fe01         cmpl rsi,0x1
000000D55DBC03BE  2462  0f862f070000   jna 4307  (000000D55DBC0AF3)
000000D55DBC03C4  2468  b814000000     movl rax,0000000000000014
000000D55DBC03C9  2473  8907           movl [rdi],rax
000000D55DBC03CB  2475  b801000000     movl rax,0000000000000001
000000D55DBC03D0  2480  894704         movl [rdi+0x4],rax
000000D55DBC03D3  2483  49bae11f34457f020000 REX.W movq r10,0000027F45341FE1    ;; debug: position 3205
                                                             ;; object: 0000027F45341FE1 <JS Function Date (SharedFunctionInfo 0000027F45341F39)>
000000D55DBC03DD  2493  4152           push r10
000000D55DBC03DF  2495  48bf312134457f020000 REX.W movq rdi,0000027F45342131    ;; object: 0000027F45342131 <JS Function now (SharedFunctionInfo 0000027F45342089)>
000000D55DBC03E9  2505  488bf2         REX.W movq rsi,rdx
000000D55DBC03EC  2508  488b7727       REX.W movq rsi,[rdi+0x27]
000000D55DBC03F0  2512  498b55a8       REX.W movq rdx,[r13-0x58]
000000D55DBC03F4  2516  33c0           xorl rax,rax
000000D55DBC03F6  2518  ff5737         call [rdi+0x37]
000000D55DBC03F9  2521  e951000000     jmp 2607  (000000D55DBC044F)
000000D55DBC03FE  2526  4881ec98000000 REX.W subq rsp,0x98
000000D55DBC0405  2533  488b75f8       REX.W movq rsi,[rbp-0x8]
000000D55DBC0409  2537  488b45d8       REX.W movq rax,[rbp-0x28]
000000D55DBC040D  2541  a801           test al,0x1
000000D55DBC040F  2543  0f8580050000   jnz 3957  (000000D55DBC0995)
000000D55DBC0415  2549  48c1e820       REX.W shrq rax, 32
000000D55DBC0419  2553  488b5dd0       REX.W movq rbx,[rbp-0x30]
000000D55DBC041D  2557  f6c301         testb rbx,0x1
000000D55DBC0420  2560  0f85a3050000   jnz 4009  (000000D55DBC09C9)
000000D55DBC0426  2566  48c1eb20       REX.W shrq rbx, 32
000000D55DBC042A  2570  4c8b6538       REX.W movq r12,[rbp+0x38]
000000D55DBC042E  2574  4c8bde         REX.W movq r11,rsi
000000D55DBC0431  2577  488bd0         REX.W movq rdx,rax
000000D55DBC0434  2580  4c8b4dc0       REX.W movq r9,[rbp-0x40]
000000D55DBC0438  2584  4c8b45b8       REX.W movq r8,[rbp-0x48]
000000D55DBC043C  2588  488b8d00ffffff REX.W movq rcx,[rbp-0x100]
000000D55DBC0443  2595  488b85f0feffff REX.W movq rax,[rbp-0x110]
000000D55DBC044A  2602  e927000000     jmp 2646  (000000D55DBC0476)
000000D55DBC044F  2607  4c8b6538       REX.W movq r12,[rbp+0x38]
000000D55DBC0453  2611  4c8b9de8feffff REX.W movq r11,[rbp-0x118]
000000D55DBC045A  2618  4c8b8dd8feffff REX.W movq r9,[rbp-0x128]
000000D55DBC0461  2625  4c8b85d0feffff REX.W movq r8,[rbp-0x130]
000000D55DBC0468  2632  488b8de0feffff REX.W movq rcx,[rbp-0x120]
000000D55DBC046F  2639  33d2           xorl rdx,rdx
000000D55DBC0471  2641  bb01000000     movl rbx,0000000000000001
000000D55DBC0476  2646  4c89a570feffff REX.W movq [rbp-0x190],r12
000000D55DBC047D  2653  4c899d78feffff REX.W movq [rbp-0x188],r11
000000D55DBC0484  2660  4c898d80feffff REX.W movq [rbp-0x180],r9
000000D55DBC048B  2667  4c898588feffff REX.W movq [rbp-0x178],r8
000000D55DBC0492  2674  48898d90feffff REX.W movq [rbp-0x170],rcx
000000D55DBC0499  2681  488985a8feffff REX.W movq [rbp-0x158],rax
000000D55DBC04A0  2688  49ba5025fd6672020000 REX.W movq r10,0000027266FD2550    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC04AA  2698  4d8b12         REX.W movq r10,[r10]
000000D55DBC04AD  2701  493bca         REX.W cmpq rcx,r10
000000D55DBC04B0  2704  0f8542060000   jnz 4312  (000000D55DBC0AF8)
000000D55DBC04B6  2710  41f6c001       testb r8,0x1          ;; debug: position 2820
000000D55DBC04BA  2714  0f843d060000   jz 4317  (000000D55DBC0AFD)
000000D55DBC04C0  2720  41f6c101       testb r9,0x1          ;; debug: position 2859
000000D55DBC04C4  2724  0f8438060000   jz 4322  (000000D55DBC0B02)
000000D55DBC04CA  2730  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]    ;; debug: position 3205
000000D55DBC04D1  2737  0f8226050000   jc 4061  (000000D55DBC09FD)
000000D55DBC04D7  2743  83fb01         cmpl rbx,0x1
000000D55DBC04DA  2746  0f8417000000   jz 2775  (000000D55DBC04F7)
000000D55DBC04E0  2752  488bf2         REX.W movq rsi,rdx    ;; debug: position 3244
000000D55DBC04E3  2755  83c601         addl rsi,0x1
000000D55DBC04E6  2758  0f801b060000   jo 4327  (000000D55DBC0B07)
000000D55DBC04EC  2764  4c8bfe         REX.W movq r15,rsi
000000D55DBC04EF  2767  4c8bf3         REX.W movq r14,rbx
000000D55DBC04F2  2770  e906000000     jmp 2781  (000000D55DBC04FD)
000000D55DBC04F7  2775  4c8bfa         REX.W movq r15,rdx    ;; debug: position 3244
000000D55DBC04FA  2778  4533f6         xorl r14,r14
000000D55DBC04FD  2781  4c89bd60feffff REX.W movq [rbp-0x1a0],r15
000000D55DBC0504  2788  4c89b568feffff REX.W movq [rbp-0x198],r14
000000D55DBC050B  2795  4181ff80969800 cmpl r15,0x989680     ;; debug: position 3230
000000D55DBC0512  2802  0f8dbb030000   jge 3763  (000000D55DBC08D3)
000000D55DBC0518  2808  bb01000000     movl rbx,0000000000000001
000000D55DBC051D  2813  83fb01         cmpl rbx,0x1
000000D55DBC0520  2816  0f8576030000   jnz 3708  (000000D55DBC089C)
000000D55DBC0526  2822  493ba5880a0000 REX.W cmpq rsp,[r13+0xa88]
000000D55DBC052D  2829  0f8212050000   jc 4133  (000000D55DBC0A45)
000000D55DBC0533  2835  48be6025fd6672020000 REX.W movq rsi,0000027266FD2560    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC053D  2845  488b36         REX.W movq rsi,[rsi]
000000D55DBC0540  2848  4889b5a0feffff REX.W movq [rbp-0x160],rsi
000000D55DBC0547  2855  488b5e7f       REX.W movq rbx,[rsi+0x7f]    ;; debug: position 2813
000000D55DBC054B  2859  48899d98feffff REX.W movq [rbp-0x168],rbx
000000D55DBC0552  2866  48be7025fd6672020000 REX.W movq rsi,0000027266FD2570    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC055C  2876  488b36         REX.W movq rsi,[rsi]
000000D55DBC055F  2879  4889b5a0feffff REX.W movq [rbp-0x160],rsi
000000D55DBC0566  2886  488b566f       REX.W movq rdx,[rsi+0x6f]    ;; debug: position 2820
000000D55DBC056A  2890  49ba8025fd6672020000 REX.W movq r10,0000027266FD2580    ;; property cell
000000D55DBC0574  2900  4d8b12         REX.W movq r10,[r10]
000000D55DBC0577  2903  493bd2         REX.W cmpq rdx,r10
000000D55DBC057A  2906  0f858c050000   jnz 4332  (000000D55DBC0B0C)
000000D55DBC0580  2912  49ba51fcb057e9000000 REX.W movq r10,000000E957B0FC51    ;; object: 000000E957B0FC51 <Map(UINT32_ELEMENTS)>
000000D55DBC058A  2922  4d3950ff       REX.W cmpq [r8-0x1],r10
000000D55DBC058E  2926  0f857d050000   jnz 4337  (000000D55DBC0B11)
000000D55DBC0594  2932  498b700f       REX.W movq rsi,[r8+0xf]
000000D55DBC0598  2936  8b7e0b         movl rdi,[rsi+0xb]
000000D55DBC059B  2939  4d8b5017       REX.W movq r10,[r8+0x17]
000000D55DBC059F  2943  41f6422708     testb [r10+0x27],0x8
000000D55DBC05A4  2948  0f856c050000   jnz 4342  (000000D55DBC0B16)
000000D55DBC05AA  2954  488b4617       REX.W movq rax,[rsi+0x17]
000000D55DBC05AE  2958  488b760f       REX.W movq rsi,[rsi+0xf]
000000D55DBC05B2  2962  4803c6         REX.W addq rax,rsi
000000D55DBC05B5  2965  83ff01         cmpl rdi,0x1
000000D55DBC05B8  2968  0f865d050000   jna 4347  (000000D55DBC0B1B)
000000D55DBC05BE  2974  8b7004         movl rsi,[rax+0x4]
000000D55DBC05C1  2977  85f6           testl rsi,rsi
000000D55DBC05C3  2979  0f8857050000   js 4352  (000000D55DBC0B20)
000000D55DBC05C9  2985  85f6           testl rsi,rsi
000000D55DBC05CB  2987  0f85db000000   jnz 3212  (000000D55DBC06AC)
000000D55DBC05D1  2993  48be9025fd6672020000 REX.W movq rsi,0000027266FD2590    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC05DB  3003  488b36         REX.W movq rsi,[rsi]
000000D55DBC05DE  3006  4889b5a0feffff REX.W movq [rbp-0x160],rsi
000000D55DBC05E5  3013  488b4667       REX.W movq rax,[rsi+0x67]    ;; debug: position 2853
000000D55DBC05E9  3017  48898558feffff REX.W movq [rbp-0x1a8],rax
000000D55DBC05F0  3024  48bea025fd6672020000 REX.W movq rsi,0000027266FD25A0    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC05FA  3034  488b36         REX.W movq rsi,[rsi]
000000D55DBC05FD  3037  4889b5a0feffff REX.W movq [rbp-0x160],rsi
000000D55DBC0604  3044  488b7e77       REX.W movq rdi,[rsi+0x77]    ;; debug: position 2859
000000D55DBC0608  3048  49ba414230457f020000 REX.W movq r10,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBC0612  3058  4152           push r10
000000D55DBC0614  3060  4150           push r8
000000D55DBC0616  3062  48beb025fd6672020000 REX.W movq rsi,0000027266FD25B0    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC0620  3072  488b36         REX.W movq rsi,[rsi]
000000D55DBC0623  3075  4889b5a0feffff REX.W movq [rbp-0x160],rsi
000000D55DBC062A  3082  48ba000000000b000000 REX.W movq rdx,0000000B00000000    ;; debug: position 2859
000000D55DBC0634  3092  48be81f0fc6672020000 REX.W movq rsi,0000027266FCF081    ;; object: 0000027266FCF081 <FixedArray[13]>
000000D55DBC063E  3102  488bde         REX.W movq rbx,rsi
000000D55DBC0641  3105  488bb5a0feffff REX.W movq rsi,[rbp-0x160]
000000D55DBC0648  3112  e833aefbff     call 000000D55DB7B480    ;; code: CALL_IC, GENERIC
000000D55DBC064D  3117  49ba414230457f020000 REX.W movq r10,0000027F45304241    ;; object: 0000027F45304241 <undefined>
000000D55DBC0657  3127  4152           push r10
000000D55DBC0659  3129  50             push rax
000000D55DBC065A  3130  48bbc025fd6672020000 REX.W movq rbx,0000027266FD25C0    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC0664  3140  488b1b         REX.W movq rbx,[rbx]
000000D55DBC0667  3143  48899da0feffff REX.W movq [rbp-0x160],rbx
000000D55DBC066E  3150  48ba0000000009000000 REX.W movq rdx,0000000900000000    ;; debug: position 2859
000000D55DBC0678  3160  48be81f0fc6672020000 REX.W movq rsi,0000027266FCF081    ;; object: 0000027266FCF081 <FixedArray[13]>
000000D55DBC0682  3170  4c8bd6         REX.W movq r10,rsi
000000D55DBC0685  3173  488bf3         REX.W movq rsi,rbx
000000D55DBC0688  3176  498bda         REX.W movq rbx,r10
000000D55DBC068B  3179  488bbd58feffff REX.W movq rdi,[rbp-0x1a8]
000000D55DBC0692  3186  e8e9adfbff     call 000000D55DB7B480    ;; code: CALL_IC, GENERIC
000000D55DBC0697  3191  488bd8         REX.W movq rbx,rax
000000D55DBC069A  3194  f6c301         testb rbx,0x1
000000D55DBC069D  3197  0f85ea030000   jnz 4205  (000000D55DBC0A8D)
000000D55DBC06A3  3203  48c1eb20       REX.W shrq rbx, 32
000000D55DBC06A7  3207  e943010000     jmp 3535  (000000D55DBC07EF)
000000D55DBC06AC  3212  48bbd025fd6672020000 REX.W movq rbx,0000027266FD25D0    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC06B6  3222  488b1b         REX.W movq rbx,[rbx]
000000D55DBC06B9  3225  48899da0feffff REX.W movq [rbp-0x160],rbx
000000D55DBC06C0  3232  488b5367       REX.W movq rdx,[rbx+0x67]    ;; debug: position 2833
000000D55DBC06C4  3236  8b4804         movl rcx,[rax+0x4]    ;; debug: position 2839
000000D55DBC06C7  3239  49bae025fd6672020000 REX.W movq r10,0000027266FD25E0    ;; property cell
000000D55DBC06D1  3249  4d8b12         REX.W movq r10,[r10]
000000D55DBC06D4  3252  493bd2         REX.W cmpq rdx,r10
000000D55DBC06D7  3255  0f8548040000   jnz 4357  (000000D55DBC0B25)
000000D55DBC06DD  3261  488bc1         REX.W movq rax,rcx
000000D55DBC06E0  3264  250000ffff     and rax,FFFFFFFFFFFF0000    ;; debug: position 1535
000000D55DBC06E5  3269  8bf0           movl rsi,rax
000000D55DBC06E7  3271  48c1e620       REX.W shlq rsi, 32
000000D55DBC06EB  3275  48bbf025fd6672020000 REX.W movq rbx,0000027266FD25F0    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC06F5  3285  488b1b         REX.W movq rbx,[rbx]
000000D55DBC06F8  3288  48899da0feffff REX.W movq [rbp-0x160],rbx
000000D55DBC06FF  3295  4d8b55d8       REX.W movq r10,[r13-0x28]    ;; debug: position 1535
000000D55DBC0703  3299  4c39532f       REX.W cmpq [rbx+0x2f],r10
000000D55DBC0707  3303  0f841d040000   jz 4362  (000000D55DBC0B2A)
000000D55DBC070D  3309  4889732f       REX.W movq [rbx+0x2f],rsi
000000D55DBC0711  3313  48bb0026fd6672020000 REX.W movq rbx,0000027266FD2600    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC071B  3323  488b1b         REX.W movq rbx,[rbx]
000000D55DBC071E  3326  48899da0feffff REX.W movq [rbp-0x160],rbx
000000D55DBC0725  3333  488b732f       REX.W movq rsi,[rbx+0x2f]    ;; debug: position 1535
000000D55DBC0729  3337  493b75d8       REX.W cmpq rsi,[r13-0x28]
000000D55DBC072D  3341  0f84fc030000   jz 4367  (000000D55DBC0B2F)
000000D55DBC0733  3347  4885f6         REX.W testq rsi,rsi
000000D55DBC0736  3350  0f840f000000   jz 3371  (000000D55DBC074B)
000000D55DBC073C  3356  40f6c601       testb rsi,0x1
000000D55DBC0740  3360  0f847f000000   jz 3493  (000000D55DBC07C5)
000000D55DBC0746  3366  e8715bc4ff     call 000000D55D8062BC    ;; deoptimization bailout 70
000000D55DBC074B  3371  48bb1026fd6672020000 REX.W movq rbx,0000027266FD2610    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC0755  3381  488b1b         REX.W movq rbx,[rbx]
000000D55DBC0758  3384  48899da0feffff REX.W movq [rbp-0x160],rbx
000000D55DBC075F  3391  488b4357       REX.W movq rax,[rbx+0x57]    ;; debug: position 1569
000000D55DBC0763  3395  493b45d8       REX.W cmpq rax,[r13-0x28]
000000D55DBC0767  3399  0f84c7030000   jz 4372  (000000D55DBC0B34)
000000D55DBC076D  3405  488bd9         REX.W movq rbx,rcx
000000D55DBC0770  3408  81e3ffff0000   andl rbx,0xffff       ;; debug: position 1613
000000D55DBC0776  3414  a801           test al,0x1
000000D55DBC0778  3416  0f84bb030000   jz 4377  (000000D55DBC0B39)
000000D55DBC077E  3422  49ba69f4b057e9000000 REX.W movq r10,000000E957B0F469    ;; object: 000000E957B0F469 <Map(UINT8_ELEMENTS)>
000000D55DBC0788  3432  4c3950ff       REX.W cmpq [rax-0x1],r10
000000D55DBC078C  3436  0f85ac030000   jnz 4382  (000000D55DBC0B3E)
000000D55DBC0792  3442  488b700f       REX.W movq rsi,[rax+0xf]
000000D55DBC0796  3446  8b7e0b         movl rdi,[rsi+0xb]
000000D55DBC0799  3449  4c8b5017       REX.W movq r10,[rax+0x17]
000000D55DBC079D  3453  41f6422708     testb [r10+0x27],0x8
000000D55DBC07A2  3458  0f859b030000   jnz 4387  (000000D55DBC0B43)
000000D55DBC07A8  3464  4c8b4617       REX.W movq r8,[rsi+0x17]
000000D55DBC07AC  3468  488b760f       REX.W movq rsi,[rsi+0xf]
000000D55DBC07B0  3472  4c03c6         REX.W addq r8,rsi
000000D55DBC07B3  3475  3bfb           cmpl rdi,rbx
000000D55DBC07B5  3477  0f868d030000   jna 4392  (000000D55DBC0B48)
000000D55DBC07BB  3483  410fb61c18     movzxbl rbx,[r8+rbx*1]
000000D55DBC07C0  3488  e927000000     jmp 3532  (000000D55DBC07EC)
000000D55DBC07C5  3493  48bb2026fd6672020000 REX.W movq rbx,0000027266FD2620    ;; debug: position 3250
                                                             ;; property cell
000000D55DBC07CF  3503  488b1b         REX.W movq rbx,[rbx]
000000D55DBC07D2  3506  48899da0feffff REX.W movq [rbp-0x160],rbx
000000D55DBC07D9  3513  488b4357       REX.W movq rax,[rbx+0x57]    ;; debug: position 1535
000000D55DBC07DD  3517  493b45d8       REX.W cmpq rax,[r13-0x28]
000000D55DBC07E1  3521  0f8466030000   jz 4397  (000000D55DBC0B4D)
000000D55DBC07E7  3527  e8165be4ff     call 000000D55DA06302    ;; debug: position 1588
                                                             ;; soft deoptimization bailout 77
000000D55DBC07EC  3532  83cb20         orl rbx,0x20          ;; debug: position 2831
000000D55DBC07EF  3535  488b8598feffff REX.W movq rax,[rbp-0x168]    ;; debug: position 2859
000000D55DBC07F6  3542  49ba3026fd6672020000 REX.W movq r10,0000027266FD2630    ;; property cell
000000D55DBC0800  3552  4d8b12         REX.W movq r10,[r10]
000000D55DBC0803  3555  493bc2         REX.W cmpq rax,r10
000000D55DBC0806  3558  0f8546030000   jnz 4402  (000000D55DBC0B52)
000000D55DBC080C  3564  488b8d80feffff REX.W movq rcx,[rbp-0x180]
000000D55DBC0813  3571  49ba51fcb057e9000000 REX.W movq r10,000000E957B0FC51    ;; object: 000000E957B0FC51 <Map(UINT32_ELEMENTS)>
000000D55DBC081D  3581  4c3951ff       REX.W cmpq [rcx-0x1],r10
000000D55DBC0821  3585  0f8530030000   jnz 4407  (000000D55DBC0B57)
000000D55DBC0827  3591  488b510f       REX.W movq rdx,[rcx+0xf]
000000D55DBC082B  3595  8b720b         movl rsi,[rdx+0xb]
000000D55DBC082E  3598  4c8b5117       REX.W movq r10,[rcx+0x17]
000000D55DBC0832  3602  41f6422708     testb [r10+0x27],0x8
000000D55DBC0837  3607  0f851f030000   jnz 4412  (000000D55DBC0B5C)
000000D55DBC083D  3613  488b7a17       REX.W movq rdi,[rdx+0x17]
000000D55DBC0841  3617  488b520f       REX.W movq rdx,[rdx+0xf]
000000D55DBC0845  3621  4803fa         REX.W addq rdi,rdx
000000D55DBC0848  3624  83fe00         cmpl rsi,0x0
000000D55DBC084B  3627  0f8610030000   jna 4417  (000000D55DBC0B61)
000000D55DBC0851  3633  83fe01         cmpl rsi,0x1
000000D55DBC0854  3636  0f860c030000   jna 4422  (000000D55DBC0B66)
000000D55DBC085A  3642  891f           movl [rdi],rbx
000000D55DBC085C  3644  33c0           xorl rax,rax          ;; debug: position 3205
000000D55DBC085E  3646  894704         movl [rdi+0x4],rax    ;; debug: position 2859
000000D55DBC0861  3649  488b9560feffff REX.W movq rdx,[rbp-0x1a0]
000000D55DBC0868  3656  4c8ba570feffff REX.W movq r12,[rbp-0x190]
000000D55DBC086F  3663  4c8b9d78feffff REX.W movq r11,[rbp-0x188]
000000D55DBC0876  3670  4c8bc9         REX.W movq r9,rcx
000000D55DBC0879  3673  4c8b8588feffff REX.W movq r8,[rbp-0x178]
000000D55DBC0880  3680  488b8d90feffff REX.W movq rcx,[rbp-0x170]
000000D55DBC0887  3687  4c8bbd60feffff REX.W movq r15,[rbp-0x1a0]
000000D55DBC088E  3694  4c8bb568feffff REX.W movq r14,[rbp-0x198]
000000D55DBC0895  3701  33db           xorl rbx,rbx
000000D55DBC0897  3703  e981fcffff     jmp 2813  (000000D55DBC051D)
000000D55DBC089C  3708  498bc9         REX.W movq rcx,r9     ;; debug: position 3230
000000D55DBC089F  3711  83fb01         cmpl rbx,0x1          ;; debug: position 2859
000000D55DBC08A2  3714  0f842b000000   jz 3763  (000000D55DBC08D3)
000000D55DBC08A8  3720  488b9d68feffff REX.W movq rbx,[rbp-0x198]
000000D55DBC08AF  3727  4c8ba570feffff REX.W movq r12,[rbp-0x190]
000000D55DBC08B6  3734  4c8b9d78feffff REX.W movq r11,[rbp-0x188]
000000D55DBC08BD  3741  4c8bc9         REX.W movq r9,rcx
000000D55DBC08C0  3744  4c8b8588feffff REX.W movq r8,[rbp-0x178]
000000D55DBC08C7  3751  488b8d90feffff REX.W movq rcx,[rbp-0x170]
000000D55DBC08CE  3758  e9f7fbffff     jmp 2730  (000000D55DBC04CA)
000000D55DBC08D3  3763  488b8578feffff REX.W movq rax,[rbp-0x188]    ;; debug: position 3273
000000D55DBC08DA  3770  488b5827       REX.W movq rbx,[rax+0x27]
000000D55DBC08DE  3774  488b531f       REX.W movq rdx,[rbx+0x1f]
000000D55DBC08E2  3778  488bf0         REX.W movq rsi,rax
000000D55DBC08E5  3781  48b991793b457f020000 REX.W movq rcx,0000027F453B7991    ;; object: 0000027F453B7991 <String[7]: console>
000000D55DBC08EF  3791  48bbb9abfc6672020000 REX.W movq rbx,0000027266FCABB9    ;; object: 0000027266FCABB9 <FixedArray[49]>
000000D55DBC08F9  3801  48b80000000029000000 REX.W movq rax,0000002900000000
000000D55DBC0903  3811  e818efffff     call 000000D55DBBF820    ;; code: contextual, LOAD_IC, GENERIC
000000D55DBC0908  3816  488985a0feffff REX.W movq [rbp-0x160],rax
000000D55DBC090F  3823  488bb578feffff REX.W movq rsi,[rbp-0x188]
000000D55DBC0916  3830  488bd0         REX.W movq rdx,rax
000000D55DBC0919  3833  0f1f00         nop
000000D55DBC091C  3836  48b929b034457f020000 REX.W movq rcx,0000027F4534B029    ;; object: 0000027F4534B029 <String[3]: log>
000000D55DBC0926  3846  48bbb9abfc6672020000 REX.W movq rbx,0000027266FCABB9    ;; object: 0000027266FCABB9 <FixedArray[49]>
000000D55DBC0930  3856  48b8000000002b000000 REX.W movq rax,0000002B00000000
000000D55DBC093A  3866  e8e1eeffff     call 000000D55DBBF820    ;; code: contextual, LOAD_IC, GENERIC
000000D55DBC093F  3871  48898598feffff REX.W movq [rbp-0x168],rax
000000D55DBC0946  3878  488b9d78feffff REX.W movq rbx,[rbp-0x188]
000000D55DBC094D  3885  488b532f       REX.W movq rdx,[rbx+0x2f]
000000D55DBC0951  3889  493b55d8       REX.W cmpq rdx,[r13-0x28]
000000D55DBC0955  3893  0f8410020000   jz 4427  (000000D55DBC0B6B)
000000D55DBC095B  3899  48899580feffff REX.W movq [rbp-0x180],rdx
000000D55DBC0962  3906  49bae11f34457f020000 REX.W movq r10,0000027F45341FE1    ;; debug: position 3287
                                                             ;; object: 0000027F45341FE1 <JS Function Date (SharedFunctionInfo 0000027F45341F39)>
000000D55DBC096C  3916  4152           push r10
000000D55DBC096E  3918  48bf312134457f020000 REX.W movq rdi,0000027F45342131    ;; object: 0000027F45342131 <JS Function now (SharedFunctionInfo 0000027F45342089)>
000000D55DBC0978  3928  488bf3         REX.W movq rsi,rbx
000000D55DBC097B  3931  488b7727       REX.W movq rsi,[rdi+0x27]
000000D55DBC097F  3935  498b55a8       REX.W movq rdx,[r13-0x58]
000000D55DBC0983  3939  33c0           xorl rax,rax
000000D55DBC0985  3941  ff5737         call [rdi+0x37]
000000D55DBC0988  3944  e8d959e4ff     call 000000D55DA06366    ;; debug: position 3293
                                                             ;; soft deoptimization bailout 87
000000D55DBC098D  3949  0f1f840000000000 nop
000000D55DBC0995  3957  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 3205
000000D55DBC0999  3961  4c3950ff       REX.W cmpq [rax-0x1],r10
000000D55DBC099D  3965  0f85cd010000   jnz 4432  (000000D55DBC0B70)
000000D55DBC09A3  3971  c5fb104007     vmovsd xmm0,[rax+0x7]
000000D55DBC09A8  3976  c5fb2cc0       vcvttsd2si rax,xmm0
000000D55DBC09AC  3980  c5f157c9       vxorpd xmm1,xmm1,xmm1
000000D55DBC09B0  3984  c5f32ac8       vcvtlsi2sd xmm1,xmm1,rax
000000D55DBC09B4  3988  c5f92ec1       vucomisd xmm0,xmm1
000000D55DBC09B8  3992  0f85b2010000   jnz 4432  (000000D55DBC0B70)
000000D55DBC09BE  3998  0f8aac010000   jpe 4432  (000000D55DBC0B70)
000000D55DBC09C4  4004  e950faffff     jmp 2553  (000000D55DBC0419)
000000D55DBC09C9  4009  4d8b55f8       REX.W movq r10,[r13-0x8]
000000D55DBC09CD  4013  4c3953ff       REX.W cmpq [rbx-0x1],r10
000000D55DBC09D1  4017  0f859e010000   jnz 4437  (000000D55DBC0B75)
000000D55DBC09D7  4023  c5fb104307     vmovsd xmm0,[rbx+0x7]
000000D55DBC09DC  4028  c5fb2cd8       vcvttsd2si rbx,xmm0
000000D55DBC09E0  4032  c5f157c9       vxorpd xmm1,xmm1,xmm1
000000D55DBC09E4  4036  c5f32acb       vcvtlsi2sd xmm1,xmm1,rbx
000000D55DBC09E8  4040  c5f92ec1       vucomisd xmm0,xmm1
000000D55DBC09EC  4044  0f8583010000   jnz 4437  (000000D55DBC0B75)
000000D55DBC09F2  4050  0f8a7d010000   jpe 4437  (000000D55DBC0B75)
000000D55DBC09F8  4056  e92dfaffff     jmp 2570  (000000D55DBC042A)
000000D55DBC09FD  4061  50             push rax
000000D55DBC09FE  4062  51             push rcx
000000D55DBC09FF  4063  52             push rdx
000000D55DBC0A00  4064  53             push rbx
000000D55DBC0A01  4065  56             push rsi
000000D55DBC0A02  4066  57             push rdi
000000D55DBC0A03  4067  4150           push r8
000000D55DBC0A05  4069  4151           push r9
000000D55DBC0A07  4071  4153           push r11
000000D55DBC0A09  4073  4154           push r12
000000D55DBC0A0B  4075  4156           push r14
000000D55DBC0A0D  4077  4157           push r15
000000D55DBC0A0F  4079  488d6424e0     REX.W leaq rsp,[rsp-0x20]
000000D55DBC0A14  4084  488b75f8       REX.W movq rsi,[rbp-0x8]
000000D55DBC0A18  4088  33c0           xorl rax,rax
000000D55DBC0A1A  4090  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
000000D55DBC0A24  4100  e8d757f4ff     call 000000D55DB06200    ;; code: STUB, CEntryStub, minor: 5
000000D55DBC0A29  4105  488d642420     REX.W leaq rsp,[rsp+0x20]
000000D55DBC0A2E  4110  415f           pop r15
000000D55DBC0A30  4112  415e           pop r14
000000D55DBC0A32  4114  415c           pop r12
000000D55DBC0A34  4116  415b           pop r11
000000D55DBC0A36  4118  4159           pop r9
000000D55DBC0A38  4120  4158           pop r8
000000D55DBC0A3A  4122  5f             pop rdi
000000D55DBC0A3B  4123  5e             pop rsi
000000D55DBC0A3C  4124  5b             pop rbx
000000D55DBC0A3D  4125  5a             pop rdx
000000D55DBC0A3E  4126  59             pop rcx
000000D55DBC0A3F  4127  58             pop rax
000000D55DBC0A40  4128  e992faffff     jmp 2743  (000000D55DBC04D7)
000000D55DBC0A45  4133  50             push rax              ;; debug: position 3230
000000D55DBC0A46  4134  51             push rcx
000000D55DBC0A47  4135  52             push rdx
000000D55DBC0A48  4136  53             push rbx
000000D55DBC0A49  4137  56             push rsi
000000D55DBC0A4A  4138  57             push rdi
000000D55DBC0A4B  4139  4150           push r8
000000D55DBC0A4D  4141  4151           push r9
000000D55DBC0A4F  4143  4153           push r11
000000D55DBC0A51  4145  4154           push r12
000000D55DBC0A53  4147  4156           push r14
000000D55DBC0A55  4149  4157           push r15
000000D55DBC0A57  4151  488d6424e0     REX.W leaq rsp,[rsp-0x20]
000000D55DBC0A5C  4156  488b75f8       REX.W movq rsi,[rbp-0x8]
000000D55DBC0A60  4160  33c0           xorl rax,rax
000000D55DBC0A62  4162  48bbe0fdcde9f77f0000 REX.W movq rbx,00007FF7E9CDFDE0
000000D55DBC0A6C  4172  e88f57f4ff     call 000000D55DB06200    ;; code: STUB, CEntryStub, minor: 5
000000D55DBC0A71  4177  488d642420     REX.W leaq rsp,[rsp+0x20]
000000D55DBC0A76  4182  415f           pop r15
000000D55DBC0A78  4184  415e           pop r14
000000D55DBC0A7A  4186  415c           pop r12
000000D55DBC0A7C  4188  415b           pop r11
000000D55DBC0A7E  4190  4159           pop r9
000000D55DBC0A80  4192  4158           pop r8
000000D55DBC0A82  4194  5f             pop rdi
000000D55DBC0A83  4195  5e             pop rsi
000000D55DBC0A84  4196  5b             pop rbx
000000D55DBC0A85  4197  5a             pop rdx
000000D55DBC0A86  4198  59             pop rcx
000000D55DBC0A87  4199  58             pop rax
000000D55DBC0A88  4200  e9a6faffff     jmp 2835  (000000D55DBC0533)
000000D55DBC0A8D  4205  4d8b55f8       REX.W movq r10,[r13-0x8]    ;; debug: position 2859
000000D55DBC0A91  4209  4c3953ff       REX.W cmpq [rbx-0x1],r10
000000D55DBC0A95  4213  0f85df000000   jnz 4442  (000000D55DBC0B7A)
000000D55DBC0A9B  4219  c5fb104307     vmovsd xmm0,[rbx+0x7]
000000D55DBC0AA0  4224  c5fb2cd8       vcvttsd2si rbx,xmm0
000000D55DBC0AA4  4228  c5f157c9       vxorpd xmm1,xmm1,xmm1
000000D55DBC0AA8  4232  c5f32acb       vcvtlsi2sd xmm1,xmm1,rbx
000000D55DBC0AAC  4236  c5f92ec1       vucomisd xmm0,xmm1
000000D55DBC0AB0  4240  0f85c4000000   jnz 4442  (000000D55DBC0B7A)
000000D55DBC0AB6  4246  0f8abe000000   jpe 4442  (000000D55DBC0B7A)
000000D55DBC0ABC  4252  e9e6fbffff     jmp 3207  (000000D55DBC06A7)
000000D55DBC0AC1  4257  e8d456c4ff     call 000000D55D80619A    ;; deoptimization bailout 41
000000D55DBC0AC6  4262  e8d956c4ff     call 000000D55D8061A4    ;; deoptimization bailout 42
000000D55DBC0ACB  4267  e8de56c4ff     call 000000D55D8061AE    ;; deoptimization bailout 43
000000D55DBC0AD0  4272  e8e356c4ff     call 000000D55D8061B8    ;; deoptimization bailout 44
000000D55DBC0AD5  4277  e8e856c4ff     call 000000D55D8061C2    ;; deoptimization bailout 45
000000D55DBC0ADA  4282  e8ed56c4ff     call 000000D55D8061CC    ;; deoptimization bailout 46
000000D55DBC0ADF  4287  e8f256c4ff     call 000000D55D8061D6    ;; deoptimization bailout 47
000000D55DBC0AE4  4292  e8f756c4ff     call 000000D55D8061E0    ;; deoptimization bailout 48
000000D55DBC0AE9  4297  e8fc56c4ff     call 000000D55D8061EA    ;; deoptimization bailout 49
000000D55DBC0AEE  4302  e80157c4ff     call 000000D55D8061F4    ;; deoptimization bailout 50
000000D55DBC0AF3  4307  e80657c4ff     call 000000D55D8061FE    ;; deoptimization bailout 51
000000D55DBC0AF8  4312  e81f57c4ff     call 000000D55D80621C    ;; deoptimization bailout 54
000000D55DBC0AFD  4317  e82457c4ff     call 000000D55D806226    ;; deoptimization bailout 55
000000D55DBC0B02  4322  e82957c4ff     call 000000D55D806230    ;; deoptimization bailout 56
000000D55DBC0B07  4327  e83857c4ff     call 000000D55D806244    ;; deoptimization bailout 58
000000D55DBC0B0C  4332  e84757c4ff     call 000000D55D806258    ;; deoptimization bailout 60
000000D55DBC0B11  4337  e84c57c4ff     call 000000D55D806262    ;; deoptimization bailout 61
000000D55DBC0B16  4342  e85157c4ff     call 000000D55D80626C    ;; deoptimization bailout 62
000000D55DBC0B1B  4347  e85657c4ff     call 000000D55D806276    ;; deoptimization bailout 63
000000D55DBC0B20  4352  e85b57c4ff     call 000000D55D806280    ;; deoptimization bailout 64
000000D55DBC0B25  4357  e87457c4ff     call 000000D55D80629E    ;; deoptimization bailout 67
000000D55DBC0B2A  4362  e87957c4ff     call 000000D55D8062A8    ;; deoptimization bailout 68
000000D55DBC0B2F  4367  e87e57c4ff     call 000000D55D8062B2    ;; deoptimization bailout 69
000000D55DBC0B34  4372  e88d57c4ff     call 000000D55D8062C6    ;; deoptimization bailout 71
000000D55DBC0B39  4377  e89257c4ff     call 000000D55D8062D0    ;; deoptimization bailout 72
000000D55DBC0B3E  4382  e89757c4ff     call 000000D55D8062DA    ;; deoptimization bailout 73
000000D55DBC0B43  4387  e89c57c4ff     call 000000D55D8062E4    ;; deoptimization bailout 74
000000D55DBC0B48  4392  e8a157c4ff     call 000000D55D8062EE    ;; deoptimization bailout 75
000000D55DBC0B4D  4397  e8a657c4ff     call 000000D55D8062F8    ;; deoptimization bailout 76
000000D55DBC0B52  4402  e8b557c4ff     call 000000D55D80630C    ;; deoptimization bailout 78
000000D55DBC0B57  4407  e8ba57c4ff     call 000000D55D806316    ;; deoptimization bailout 79
000000D55DBC0B5C  4412  e8bf57c4ff     call 000000D55D806320    ;; deoptimization bailout 80
000000D55DBC0B61  4417  e8c457c4ff     call 000000D55D80632A    ;; deoptimization bailout 81
000000D55DBC0B66  4422  e8c957c4ff     call 000000D55D806334    ;; deoptimization bailout 82
000000D55DBC0B6B  4427  e8e257c4ff     call 000000D55D806352    ;; deoptimization bailout 85
000000D55DBC0B70  4432  e8fb57c4ff     call 000000D55D806370    ;; deoptimization bailout 88
000000D55DBC0B75  4437  e80058c4ff     call 000000D55D80637A    ;; deoptimization bailout 89
000000D55DBC0B7A  4442  e80558c4ff     call 000000D55D806384    ;; deoptimization bailout 90
000000D55DBC0B7F  4447  90             nop

Inlined functions (count = 4)
 0000027266FCB4E1 <SharedFunctionInfo set>
 0000027266FCBA21 <SharedFunctionInfo bsr>
 0000027266FCB121 <SharedFunctionInfo hi>
 0000027266FCB061 <SharedFunctionInfo d_bsr>

Deoptimization Input Data (deopt points = 91)
 index  ast id    argc     pc
     0       2       0     25
     1      56       0     68
     2      61       0    142
     3      66       0    216
     4      77       0    318
     5      82       0    392
     6      87       0    466
     7      92       0    540
     8      97       0    614
     9     102       0    636
    10     107       0    658
    11     112       0    680
    12     117       0    754
    13     122       0    776
    14     127       0    798
    15     132       0    820
    16     137       0    842
    17     142       0    864
    18     147       0    893
    19     152       0    915
    20       4       0    942
    21     167       0   1016
    22     186       0   1090
    23     205       0   1154
    24     224       0   1218
    25     295       0   1336
    26     314       0   1400
    27     333       0   1464
    28     352       0   1528
    29     371       0   1592
    30     390       0   1656
    31     409       0   1720
    32     428       0   1784
    33     459       0   1855
    34     455       0   1910
    35     468       0   1932
    36     447       0   1963
    37     492       0   2086
    38     488       0   2141
    39     501       0   2163
    40     480       0   2194
    41     475       0     -1
    42       3       0     -1
    43       3       0     -1
    44       3       0     -1
    45       3       0     -1
    46       3       0     -1
    47       3       0     -1
    48       3       0     -1
    49       3       0     -1
    50       3       0     -1
    51       3       0     -1
    52     549       0   2521
    53     608       0     -1
    54     606       0     -1
    55     606       0     -1
    56     606       0     -1
    57     610       0   2743
    58     632       0     -1
    59     687       0   2835
    60       3       0     -1
    61       3       0     -1
    62       3       0     -1
    63       3       0     -1
    64       3       0     -1
    65      70       0   3117
    66      61       0   3191
    67      49       0     -1
    68       3       0     -1
    69       7       0     -1
    70       7       0     -1
    71      25       0     -1
    72      55       0     -1
    73      55       0     -1
    74      55       0     -1
    75      55       0     -1
    76      24       0     -1
    77      24       0     -1
    78      17       0     -1
    79       3       0     -1
    80       3       0     -1
    81       3       0     -1
    82       3       0     -1
    83     763       0   3823
    84     759       0   3878
    85     759       0     -1
    86     773       0   3944
    87     773       0     -1
    88     606       0     -1
    89     606       0     -1
    90      17       0     -1

Safepoints (size = 841)
000000D55DBBFA32    18  0000000000000000000000000000000000000000000000000000000 (sp -> fp)  <none>
000000D55DBBFA64    68  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       1
000000D55DBBFAAE   142  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       2
000000D55DBBFAF8   216  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       3
000000D55DBBFB5E   318  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       4
000000D55DBBFBA8   392  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       5
000000D55DBBFBF2   466  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       6
000000D55DBBFC3C   540  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       7
000000D55DBBFC86   614  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       8
000000D55DBBFC9C   636  0000000000000000001000000000000000000000000000000000000 (sp -> fp)       9
000000D55DBBFCB2   658  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      10
000000D55DBBFCC8   680  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      11
000000D55DBBFD12   754  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      12
000000D55DBBFD28   776  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      13
000000D55DBBFD3E   798  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      14
000000D55DBBFD54   820  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      15
000000D55DBBFD6A   842  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      16
000000D55DBBFD80   864  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      17
000000D55DBBFD96   886  0000000000000000001000000000000000000000000000000000000 (sp -> fp)      18
000000D55DBBFDB3   915  0000000000000000011000000000000000000000000000000000000 (sp -> fp)      19
000000D55DBBFDCE   942  0000000000000000011000000000000000000000000000000000000 (sp -> fp)      20
000000D55DBBFE0E  1006  0000000000000000011000000000000000000000000000000000000 (sp -> fp)      21
000000D55DBBFE58  1080  0000000000000000111000000000000000000000000000000000000 (sp -> fp)      22
000000D55DBBFEA2  1154  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      23
000000D55DBBFEE2  1218  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      24
000000D55DBBFF58  1336  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      25
000000D55DBBFF98  1400  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      26
000000D55DBBFFD8  1464  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      27
000000D55DBC0018  1528  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      28
000000D55DBC0058  1592  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      29
000000D55DBC0098  1656  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      30
000000D55DBC00D8  1720  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      31
000000D55DBC0118  1784  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      32
000000D55DBC0158  1848  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      33
000000D55DBC018F  1903  0000000000000011111000000000000000000000000000000000000 (sp -> fp)      34
000000D55DBC01AC  1932  0000000000000111111000000000000000000000000000000000000 (sp -> fp)      35
000000D55DBC01CB  1963  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      36
000000D55DBC023F  2079  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      37
000000D55DBC0276  2134  0000000000001001111000000000000000000000000000000000000 (sp -> fp)      38
000000D55DBC0293  2163  0000000000011001111000000000000000000000000000000000000 (sp -> fp)      39
000000D55DBC02B2  2194  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      40
000000D55DBC03F9  2521  0000000000000001111000000000000000000000000000000000000 (sp -> fp)      52
000000D55DBC064D  3117  1001111110100000000000000000000000000000000000000000000 (sp -> fp)      65
000000D55DBC0697  3191  0001111110100000000000000000000000000000000000000000000 (sp -> fp)      66
000000D55DBC0908  3816  0001100000100000000000000000000000000000000000000000000 (sp -> fp)      83
000000D55DBC093F  3871  0001100001100000000000000000000000000000000000000000000 (sp -> fp)      84
000000D55DBC0988  3944  0001110011100000000000000000000000000000000000000000000 (sp -> fp)      86
000000D55DBC0A29  4105  0001111100100000000000000000000000000000000000000000000 | rcx | r8 | r9 | r11 | r12 (sp -> fp)      57
000000D55DBC0A71  4177  0001111100100000000000000000000000000000000000000000000 | rcx | r8 | r9 | r11 | r12 (sp -> fp)      59

RelocInfo (size = 717)
000000D55DBBFA2E  code target (STUB)  (000000D55DB8B220)
000000D55DBBFA46  embedded object  (0000027F45304519 <the hole>)
000000D55DBBFA54  embedded object  (0000027266FCAD61 <SharedFunctionInfo d_bit>)
000000D55DBBFA60  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFA98  code target (STUB)  (000000D55DBBE600)
000000D55DBBFA9E  embedded object  (0000027266FCAE21 <SharedFunctionInfo d_lsb>)
000000D55DBBFAAA  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFAE2  code target (STUB)  (000000D55DBBE600)
000000D55DBBFAE8  embedded object  (0000027266FCAEE1 <SharedFunctionInfo d_clsb>)
000000D55DBBFAF4  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFB2C  code target (STUB)  (000000D55DBBE600)
000000D55DBBFB32  embedded object  (0000027F45304519 <the hole>)
000000D55DBBFB40  embedded object  (0000027F45304519 <the hole>)
000000D55DBBFB4E  embedded object  (0000027266FCAFA1 <SharedFunctionInfo d_bsf>)
000000D55DBBFB5A  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFB92  code target (STUB)  (000000D55DBBE600)
000000D55DBBFB98  embedded object  (0000027266FCB061 <SharedFunctionInfo d_bsr>)
000000D55DBBFBA4  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFBDC  code target (STUB)  (000000D55DBBE600)
000000D55DBBFBE2  embedded object  (0000027266FCB121 <SharedFunctionInfo hi>)
000000D55DBBFBEE  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFC26  code target (STUB)  (000000D55DBBE600)
000000D55DBBFC2C  embedded object  (0000027266FCB1E1 <SharedFunctionInfo lo>)
000000D55DBBFC38  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFC70  code target (STUB)  (000000D55DBBE600)
000000D55DBBFC76  embedded object  (0000027266FCB2A1 <SharedFunctionInfo bit>)
000000D55DBBFC82  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFC88  embedded object  (0000027266FCB361 <SharedFunctionInfo com>)
000000D55DBBFC98  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFC9E  embedded object  (0000027266FCB421 <SharedFunctionInfo mov>)
000000D55DBBFCAE  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFCB4  embedded object  (0000027266FCB4E1 <SharedFunctionInfo set>)
000000D55DBBFCC4  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFCFC  code target (STUB)  (000000D55DBBE600)
000000D55DBBFD02  embedded object  (0000027266FCB5A1 <SharedFunctionInfo and>)
000000D55DBBFD0E  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFD14  embedded object  (0000027266FCB661 <SharedFunctionInfo or>)
000000D55DBBFD24  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFD2A  embedded object  (0000027266FCB721 <SharedFunctionInfo xor>)
000000D55DBBFD3A  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFD40  embedded object  (0000027266FCB7E1 <SharedFunctionInfo lsb>)
000000D55DBBFD50  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFD56  embedded object  (0000027266FCB8A1 <SharedFunctionInfo clsb>)
000000D55DBBFD66  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFD6C  embedded object  (0000027266FCB961 <SharedFunctionInfo bsf>)
000000D55DBBFD7C  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFD82  embedded object  (0000027266FCBA21 <SharedFunctionInfo bsr>)
000000D55DBBFD92  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFD9F  embedded object  (0000027266FCBAE1 <SharedFunctionInfo add>)
000000D55DBBFDAF  code target (STUB)  (000000D55DB2D2C0)
000000D55DBBFDCA  code target (BUILTIN)  (000000D55DB27440)
000000D55DBBFDCE  position  (269)
000000D55DBBFDD0  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFDE8  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFDF2  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFE0A  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBBFE18  position  (299)
000000D55DBBFE1A  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFE30  position  (269)
000000D55DBBFE32  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFE3C  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFE53  position  (299)
000000D55DBBFE54  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBBFE62  position  (329)
000000D55DBBFE64  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFE7A  position  (269)
000000D55DBBFE7C  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFE86  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFE9D  position  (329)
000000D55DBBFE9E  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBBFEA2  position  (359)
000000D55DBBFEA4  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFEBA  position  (269)
000000D55DBBFEBC  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFEC6  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFEDD  position  (359)
000000D55DBBFEDE  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBBFF18  code target (STUB)  (000000D55DBBEF20)
000000D55DBBFF1C  position  (452)
000000D55DBBFF1E  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFF34  position  (269)
000000D55DBBFF36  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFF40  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFF53  position  (452)
000000D55DBBFF54  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBBFF58  position  (481)
000000D55DBBFF5A  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFF70  position  (269)
000000D55DBBFF72  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFF7C  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFF93  position  (481)
000000D55DBBFF94  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBBFF98  position  (510)
000000D55DBBFF9A  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFFB0  position  (269)
000000D55DBBFFB2  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFFBC  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFFD3  position  (510)
000000D55DBBFFD4  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBBFFD8  position  (539)
000000D55DBBFFDA  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFFF0  position  (269)
000000D55DBBFFF2  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBBFFFC  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC0013  position  (539)
000000D55DBC0014  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBC0018  position  (568)
000000D55DBC001A  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC0030  position  (269)
000000D55DBC0032  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC003C  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC0053  position  (568)
000000D55DBC0054  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBC0058  position  (597)
000000D55DBC005A  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC0070  position  (269)
000000D55DBC0072  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC007C  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC0093  position  (597)
000000D55DBC0094  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBC0098  position  (626)
000000D55DBC009A  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC00B0  position  (269)
000000D55DBC00B2  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC00BC  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC00D3  position  (626)
000000D55DBC00D4  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBC00D8  position  (655)
000000D55DBC00DA  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC00F0  position  (269)
000000D55DBC00F2  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC00FC  embedded object  (0000027F45347AF1 <JS Function Uint32Array (SharedFunctionInfo 0000027F45347A49)>)
000000D55DBC0113  position  (655)
000000D55DBC0114  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBC0118  position  (979)
000000D55DBC011A  embedded object  (0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>)
000000D55DBC0132  embedded object  (0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>)
000000D55DBC013C  embedded object  (0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>)
000000D55DBC0154  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBC016E  embedded object  (0000027F4535C761 <String[3]: map>)
000000D55DBC0178  embedded object  (0000027266FCABB9 <FixedArray[49]>)
000000D55DBC018B  code target (LOAD_IC)  (000000D55DBBF820)
000000D55DBC0198  embedded object  (0000027266FCBBA1 <SharedFunctionInfo>)
000000D55DBC01A8  code target (STUB)  (000000D55DB2D2C0)
000000D55DBC01C7  code target (BUILTIN)  (000000D55DB1DA60)
000000D55DBC01FF  code target (STUB)  (000000D55DBBEF20)
000000D55DBC0203  position  (1184)
000000D55DBC0205  embedded object  (0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>)
000000D55DBC021B  position  (979)
000000D55DBC021D  embedded object  (0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>)
000000D55DBC0227  embedded object  (0000027F45347591 <JS Function Uint8Array (SharedFunctionInfo 0000027F453474E9)>)
000000D55DBC023A  position  (1184)
000000D55DBC023B  code target (BUILTIN)  (000000D55DB1E2E0)
000000D55DBC0255  embedded object  (0000027F4535C761 <String[3]: map>)
000000D55DBC025F  embedded object  (0000027266FCABB9 <FixedArray[49]>)
000000D55DBC0272  code target (LOAD_IC)  (000000D55DBBF820)
000000D55DBC027F  embedded object  (0000027266FCBC61 <SharedFunctionInfo>)
000000D55DBC028F  code target (STUB)  (000000D55DB2D2C0)
000000D55DBC02AE  code target (BUILTIN)  (000000D55DB1DA60)
000000D55DBC02EB  code target (STUB)  (000000D55DB16520)
000000D55DBC02EF  position  (3155)
000000D55DBC02F5  property cell
000000D55DBC031B  embedded object  (000000E957B0FC51 <Map(UINT32_ELEMENTS)>)
000000D55DBC0360  position  (359)
000000D55DBC0362  position  (3155)
000000D55DBC036C  position  (3171)
000000D55DBC037F  embedded object  (000000E957B0FC51 <Map(UINT32_ELEMENTS)>)
000000D55DBC03D3  position  (3205)
000000D55DBC03D5  embedded object  (0000027F45341FE1 <JS Function Date (SharedFunctionInfo 0000027F45341F39)>)
000000D55DBC03E1  embedded object  (0000027F45342131 <JS Function now (SharedFunctionInfo 0000027F45342089)>)
000000D55DBC04A0  position  (3250)
000000D55DBC04A2  property cell
000000D55DBC04B6  position  (2820)
000000D55DBC04C0  position  (2859)
000000D55DBC04CA  position  (3205)
000000D55DBC04E0  position  (3244)
000000D55DBC04F7  position  (3244)
000000D55DBC050B  position  (3230)
000000D55DBC0533  position  (3250)
000000D55DBC0535  property cell
000000D55DBC0547  position  (2813)
000000D55DBC0552  position  (3250)
000000D55DBC0554  property cell
000000D55DBC0566  position  (2820)
000000D55DBC056C  property cell
000000D55DBC0582  embedded object  (000000E957B0FC51 <Map(UINT32_ELEMENTS)>)
000000D55DBC05D1  position  (3250)
000000D55DBC05D3  property cell
000000D55DBC05E5  position  (2853)
000000D55DBC05F0  position  (3250)
000000D55DBC05F2  property cell
000000D55DBC0604  position  (2859)
000000D55DBC060A  embedded object  (0000027F45304241 <undefined>)
000000D55DBC0616  position  (3250)
000000D55DBC0618  property cell
000000D55DBC062A  position  (2859)
000000D55DBC0636  embedded object  (0000027266FCF081 <FixedArray[13]>)
000000D55DBC0649  code target (CALL_IC)  (000000D55DB7B480)
000000D55DBC064F  embedded object  (0000027F45304241 <undefined>)
000000D55DBC065A  position  (3250)
000000D55DBC065C  property cell
000000D55DBC066E  position  (2859)
000000D55DBC067A  embedded object  (0000027266FCF081 <FixedArray[13]>)
000000D55DBC0693  code target (CALL_IC)  (000000D55DB7B480)
000000D55DBC06AC  position  (3250)
000000D55DBC06AE  property cell
000000D55DBC06C0  position  (2833)
000000D55DBC06C4  position  (2839)
000000D55DBC06C9  property cell
000000D55DBC06E0  position  (1535)
000000D55DBC06EB  position  (3250)
000000D55DBC06ED  property cell
000000D55DBC06FF  position  (1535)
000000D55DBC0711  position  (3250)
000000D55DBC0713  property cell
000000D55DBC0725  position  (1535)
000000D55DBC0747  runtime entry  (deoptimization bailout 70)
000000D55DBC074B  position  (3250)
000000D55DBC074D  property cell
000000D55DBC075F  position  (1569)
000000D55DBC0770  position  (1613)
000000D55DBC0780  embedded object  (000000E957B0F469 <Map(UINT8_ELEMENTS)>)
000000D55DBC07C5  position  (3250)
000000D55DBC07C7  property cell
000000D55DBC07D9  position  (1535)
000000D55DBC07E7  position  (1588)
000000D55DBC07E8  runtime entry
000000D55DBC07EC  position  (2831)
000000D55DBC07EF  position  (2859)
000000D55DBC07F8  property cell
000000D55DBC0815  embedded object  (000000E957B0FC51 <Map(UINT32_ELEMENTS)>)
000000D55DBC085C  position  (3205)
000000D55DBC085E  position  (2859)
000000D55DBC089C  position  (3230)
000000D55DBC089F  position  (2859)
000000D55DBC08D3  position  (3273)
000000D55DBC08E7  embedded object  (0000027F453B7991 <String[7]: console>)
000000D55DBC08F1  embedded object  (0000027266FCABB9 <FixedArray[49]>)
000000D55DBC0904  code target (LOAD_IC)  (000000D55DBBF820)
000000D55DBC091E  embedded object  (0000027F4534B029 <String[3]: log>)
000000D55DBC0928  embedded object  (0000027266FCABB9 <FixedArray[49]>)
000000D55DBC093B  code target (LOAD_IC)  (000000D55DBBF820)
000000D55DBC0962  position  (3287)
000000D55DBC0964  embedded object  (0000027F45341FE1 <JS Function Date (SharedFunctionInfo 0000027F45341F39)>)
000000D55DBC0970  embedded object  (0000027F45342131 <JS Function now (SharedFunctionInfo 0000027F45342089)>)
000000D55DBC0988  position  (3293)
000000D55DBC0989  runtime entry
000000D55DBC0995  position  (3205)
000000D55DBC0A25  code target (STUB)  (000000D55DB06200)
000000D55DBC0A45  position  (3230)
000000D55DBC0A6D  code target (STUB)  (000000D55DB06200)
000000D55DBC0A8D  position  (2859)
000000D55DBC0AC2  runtime entry  (deoptimization bailout 41)
000000D55DBC0AC7  runtime entry  (deoptimization bailout 42)
000000D55DBC0ACC  runtime entry  (deoptimization bailout 43)
000000D55DBC0AD1  runtime entry  (deoptimization bailout 44)
000000D55DBC0AD6  runtime entry  (deoptimization bailout 45)
000000D55DBC0ADB  runtime entry  (deoptimization bailout 46)
000000D55DBC0AE0  runtime entry  (deoptimization bailout 47)
000000D55DBC0AE5  runtime entry  (deoptimization bailout 48)
000000D55DBC0AEA  runtime entry  (deoptimization bailout 49)
000000D55DBC0AEF  runtime entry  (deoptimization bailout 50)
000000D55DBC0AF4  runtime entry  (deoptimization bailout 51)
000000D55DBC0AF9  runtime entry  (deoptimization bailout 54)
000000D55DBC0AFE  runtime entry  (deoptimization bailout 55)
000000D55DBC0B03  runtime entry  (deoptimization bailout 56)
000000D55DBC0B08  runtime entry  (deoptimization bailout 58)
000000D55DBC0B0D  runtime entry  (deoptimization bailout 60)
000000D55DBC0B12  runtime entry  (deoptimization bailout 61)
000000D55DBC0B17  runtime entry  (deopti0 194
mization bailout 62)
000000D55DBC0B1C  runtime entry  (deoptimization bailout 63)
000000D55DBC0B21  runtime entry  (deoptimization bailout 64)
000000D55DBC0B26  runtime entry  (deoptimization bailout 67)
000000D55DBC0B2B  runtime entry  (deoptimization bailout 68)
000000D55DBC0B30  runtime entry  (deoptimization bailout 69)
000000D55DBC0B35  runtime entry  (deoptimization bailout 71)
000000D55DBC0B3A  runtime entry  (deoptimization bailout 72)
000000D55DBC0B3F  runtime entry  (deoptimization bailout 73)
000000D55DBC0B44  runtime entry  (deoptimization bailout 74)
000000D55DBC0B49  runtime entry  (deoptimization bailout 75)
000000D55DBC0B4E  runtime entry  (deoptimization bailout 76)
000000D55DBC0B53  runtime entry  (deoptimization bailout 78)
000000D55DBC0B58  runtime entry  (deoptimization bailout 79)
000000D55DBC0B5D  runtime entry  (deoptimization bailout 80)
000000D55DBC0B62  runtime entry  (deoptimization bailout 81)
000000D55DBC0B67  runtime entry  (deoptimization bailout 82)
000000D55DBC0B6C  runtime entry  (deoptimization bailout 85)
000000D55DBC0B71  runtime entry  (deoptimization bailout 88)
000000D55DBC0B76  runtime entry  (deoptimization bailout 89)
000000D55DBC0B7B  runtime entry  (deoptimization bailout 90)

--- End code ---
