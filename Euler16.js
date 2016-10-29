/*// converts a^x to b^y
function baseChange(a, x, b)
{
  var y = x * Math.ln(a) / Math.ln(b);
}
// digits in base b given a^x
function euler16(a, x, b)
{
  var digits = [];
  var y = baseChange(a, x, b);
  do {
    var fractionalFloorThing = Math.floor(Math.pow(10, y % 1));
    digits.push(fractionalFloorThing);
    y = y - Math.floor(y) - Math.ln(fractionalFloorThing) / Math.ln(b);
  } while ();
}*/


function reverse(s) {
  var o = '';
  for (var i = s.length - 1; i >= 0; i--)
    o += s[i];
  return o;
}

function shittyBignum(n) {
  var digits = [];
  
  for (var i = 0; i < 500; ++i) {
    digits.push(0);
  }
  
  digits[0] = 1;
  for (var i = 0; i < n; ++i) {
    for (var j = 0; j < 500; ++j) {
      digits[j] *= 2;
      if (j > 0) {
        if (digits[j-1] > 9) {
          digits[j-1] %= 10;
          digits[j] += 1;
        }
      }
    }
  }
  return digits;
}
console.log(reverse(shittyBignum(10).join("")));