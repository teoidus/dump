var times = [];
var mean, std;

setInterval(doTick, 1000);

function doTick()
{
  extractNewTimes();
  updateStatistics();
}

function extractNewTimes()
{
  try {
     var newTime = parseFloat(document.getElementById("lcd").innerHTML.match(RegExp("([0-9]+)\\.<.+>([0-9]{2})")).slice(1).join("."));
  } catch (e) {}
  finally {
    if (typeof newTime == "number" && newTime != 0 && newTime != times[times.length - 1]) {
      times.push(newTime);
      if (typeof mean == "number" && typeof std == "number")
        var p = pValue(newTime, mean, std);
      console.log("p = " + p + " (\u03BC = " + mean + ", \u03C3 = " + std + ", n = " + Math.min(times.length, 100) + ")");
    }
  }
}

function computeMean(a) {
  var sum = 0;
  for (var i = 0; i < a.length; ++i) {
    sum += a[i];
  }
  return sum / a.length;
}

function computeVariance(a, m) {
  var sum = 0;
  for (var i = 0; i < a.length; ++i) {
    sum += Math.pow(a[i] - m, 2);
  }
  return sum / (a.length-1); // bessel's correction
}

function updateStatistics()
{
  var data = (times.length > 100) ? times.slice(times.length - 100) : times;
  mean = computeMean(data);
  std = Math.sqrt(computeVariance(data, mean));
}

function normalPDF(mu, sgm)
{
  return function(x) {
    return Math.exp(-Math.pow(x - mu, 2) / (2 * Math.pow(sgm, 2)))
         / Math.sqrt(2 * Math.pow(sgm, 2) * Math.PI);
  }
}

function integrate(f, x0, x1, n)
{
  if (typeof n == "undefined")
    var n = 1000000;
  var sum = 0;
  var dx = (x1 - x0) / n;
  for (var x = x0; x < x1; x += dx) {
    sum += f(x) + 4*f(x+dx/2) + f(x+dx);
  }
  sum *= dx/6;
  return sum;
}

function pValue(x, mean, std)
{
  return integrate(normalPDF(mean, std), x - std/4, x + std/4); // 1/2 std
}

/*
Interpretation of p-values
With half std width, ~0.197413 is max value
Slightly less down to ~0.15 -> feels like decent/good or meh/bad
< 0.15 -> very nice/very bad
< 0.1 -> very lucky+amazing/very unlucky+terrible
< 0.05 -> catastrophe
*/