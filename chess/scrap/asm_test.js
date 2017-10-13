function AsmExample(stdlib, foreign, heap) {
    'use asm'
    function compute() {
        var x = 0
        for (var temp = 0; (temp|0) < 1000; temp = (temp + 1)|0) {
            i = 0
            for (var i = 0; (i|0) < 1000; i = (i + 1)|0) {
                x = 0
                i2 = 0
                for (var i2 = 0; (i2|0) < 1000; i2 = (i2 + 1)|0) {
                    x = (x + i + i2)|0
                }
            }
        }
        return x|0;
    }
    // Export function in object.
    return { compute: compute };
}

// The same function but with no asm.
function compute_no_asm() {
    var x = 0;
    for (var temp = 0; temp < 1000; temp++) {
        for (var i = 0; i < 1000; i++) {
            x = 0;
            for (var i2 = 0; i2 < 1000; i2++) {
                x += i + i2;
            }
        }
    }
    return x;
}

// Create asm module.
// ... Pass in foreign array.
var asm = AsmExample(window, null, null);

var t1 = performance.now();
var result = compute_no_asm(); // Call non-asm function.
var t2 = performance.now();
var result2 = asm.compute(); // Call asm function.
var t3 = performance.now();

// Results.
console.log("ASM: " + String(t3 - t2) + "; No ASM: " + String(t2 - t1));