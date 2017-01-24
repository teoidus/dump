function invert(alg)
{
  return alg.split(" ").map(s => s + "'").reverse().join(" ");
}

function loadAlgs(table, algs)
{
  var r = table.insertRow(table.rows.length);
  var algCell = r.insertCell(r.cells.length);
  var recogCell = r.insertCell(r.cells.length);
  
  algCell.innerHTML = "<h3>Algorithm</h3>";
  recogCell.innerHTML = "<h3>Recognition</h3>";
    
  for (var i = 0; i < algs.length; ++i) {
    var r = table.insertRow(table.rows.length);
    var algCell = r.insertCell(r.cells.length);
    
    var anim = document.createElement("iframe");
    anim.setAttribute("class", "demo");
    anim.src = "http://teoidus.github.io/dump/CSSCube/demo.html?size=200&setup="
      + invert(algs[i][0]) + "&moves=" + algs[i][0];
    var alg = document.createElement("span");
    alg.innerHTML = " " + algs[i][0];
    
    algCell.appendChild(anim);
    algCell.appendChild(alg);
    
    var recogCell = r.insertCell(r.cells.length);
    recogCell.innerHTML = algs[i][1];
  }
}