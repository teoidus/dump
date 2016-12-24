var dhms = { d: 24 * 60 * 60 * 1000, h: 60 * 60 * 1000, m: 60 * 1000, s: 1000 };
var dhmsKeys = ["d", "h", "m", "s"]; // preserve order
function parseTime(time)
{
  var t = [0]; // ms
  var dfa = function(c) {
    if ("0123456789".indexOf(c) != -1)
      return function(t) { t[0] = t[0].toString() + c; };
    if (c in dhms)
      return function(t) { t[0] *= dhms[c]; t.unshift(0); };
    return function(t) { return t };
  }
  for (var i = 0; i < time.toString().length; ++i)
    dfa(time[i])(t);
  return t.reduce(function(a, b) { return a + b });
}

function msToString(ms)
{
  var s = "";
  var t = ms;
  var n = 0;
  for (var i = 0; i < dhmsKeys.length; ++i)
  {
    while (dhms[dhmsKeys[i]] <= t) {
      n += 1;
      t -= dhms[dhmsKeys[i]];
    }
    if (n != 0) {
      s += n + dhmsKeys[i];
    }
    n = 0;
  }
  return s;
}

function parseDate(date)
{
  // parse absolute
  var d = Date.parse(date);
  // parse relative
  if (isNaN(d))
    return Date.now() + parseTime(date);
  return d;
}

function rgbToHex(r, g, b) {
  return "#" + ((1 << 24) + (Math.floor(r) * 256 * 256) + (Math.floor(g) * 256) + Math.floor(b)).toString(16).substring(1, 7);
}

function tween(a, b, k) {
  return a + k*(b-a)
}

function colorTween(a, b, k)
{
  return rgbToHex(tween(a[0], b[0], k),
                  tween(a[1], b[1], k),
                  tween(a[2], b[2], k));
}

/*
    var d = new Date();
    var ymd = {"y": d.getFullYear(), "m": d.getMonth(), "d": d.getDate() };
    var days = "SMTWtFs";
    var increment = 0;
    for (var i = 0; i < date.length; ++i)
    {
      switch (date[i])
      {
        case "+":
          increment += 1;
          break;
        case "y": case "m": case "d":
          ymd[date[i]] += increment;
          increment = 0;
          break;
        case "S": case "M": case "T": case "W": case "t": case "F": case "s":
          ymd.d += 7 * increment;
          increment = 0;
          while (new Date(ymd.y, ymd.m, ymd.d).getDay() != days.indexOf(date[i])) {
            ymd.d++;
          }
          break;
      }
    }
    d = new Date(ymd.y, ymd.m, ymd.d).getTime(); // deadline to be stored
    */