function invert(alg)
{
  return alg.split(" ").map(s => s + "'").reverse().join(" ");
}

function loadExample(table, steps, moveStrings) // includes alg.cubing.net style comments
{
  table.innerHTML = "";
  var stepNames = table.insertRow(table.rows.length);
  var animations = table.insertRow(table.rows.length);
  var comments = table.insertRow(table.rows.length);
  
  var setup = "";
  for (var i = 0; i < steps.length; ++i) {
    var stepName = stepNames.insertCell(stepNames.cells.length);
    stepName.innerHTML = "<b>" + steps[i] + "</b>";
    
    var moves = moveStrings[i].split("//")[0].trim();
    var anim = document.createElement("iframe");
    var size = window.innerWidth * 0.95 * (1/steps.length);
    anim.width = size;
    anim.height = size;
    anim.setAttribute("scrolling", "no");
    console.log(setup);
    anim.src = "http://teoidus.github.io/dump/CSSCube/demo.html?size="
      + size + "&setup="
      + setup + "&moves=" + moves;
    setup += " " + moves;
    var m = document.createElement("span");
    m.innerHTML = "<br>" + moves;
    
    var animation = animations.insertCell(animations.cells.length);
    animation.appendChild(anim);
    animation.appendChild(m);
    
    var comment = comments.insertCell(comments.cells.length);
    comment.innerHTML = moveStrings[i].split("//").slice(1).join("//").trim();
  }
}

var examplesAdded = 0;
function addExample(list, table, steps, moveStrings)
{
  var b = document.createElement("button");
  b.setAttribute("class", "example-btn");
  b.innerHTML = ++examplesAdded;
  list.appendChild(b);
  
  b.onclick = function() {
    loadExample(table, steps, moveStrings);
  };
}