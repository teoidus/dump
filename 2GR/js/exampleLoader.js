function invert(alg)
{
  return alg.split(" ").map(s => s + "'").reverse().join(" ");
}

function loadExample(table, maxWidth, steps, moveStrings, stickers, hideMoves, hideButtons)
{
  console.log(maxWidth);
  table.innerHTML = "";
  var stepNames = table.insertRow(table.rows.length);
  var animations = table.insertRow(table.rows.length);
  var comments = table.insertRow(table.rows.length);
  
  var cellWidth = maxWidth / steps.length;
  
  var setup = "";
  for (var i = 0; i < steps.length; ++i) {
    var stepName = stepNames.insertCell(stepNames.cells.length);
    stepName.innerHTML = "<b>" + steps[i] + "</b>";
    stepName.width = cellWidth;
    
    var moves = moveStrings[i].split("//")[0].trim(); // includes alg.cubing.net style comments
    var anim = document.createElement("iframe");
    var size = cellWidth * 0.9;
    anim.width = size;
    anim.height = size;
    anim.setAttribute("scrolling", "no");
    console.log(setup);
    //anim.src = "http://teoidus.github.io/dump/CSSCube/demo.html?size="
    anim.src = "../../CSSCube/demo.html?size="
      + size + "&setup="
      + setup + "&moves=" + moves;
    if (typeof stickers != "undefined" || stickers == "") anim.src += "&stickers=" + stickers;
    if (typeof hideButtons != "undefined" || hideButtons == "") anim.src += "&hideButtons=true";
      setup += " " + moves;
    
    var animation = animations.insertCell(animations.cells.length);
    animation.width = cellWidth;
    animation.appendChild(anim);
    
    if (typeof hideMoves == "undefined") {
      var m = document.createElement("span");
      m.innerHTML = "<br>" + moves;
      animation.appendChild(m);
    }
    
    var comment = comments.insertCell(comments.cells.length);
    comment.innerHTML = moveStrings[i].split("//").slice(1).join("//").trim();
    comment.width = cellWidth;
  }
}

function addExample(list, table, maxWidth, steps, moveStrings, stickers, hideMoves, hideButtons)
{
  if (typeof list.examplesAdded == "undefined") {
    //list.style.textAlign = "center";
    
    var b = document.createElement("button");
    b.setAttribute("class", "example-btn");
    b.innerHTML = "collapse";
    b.onclick = function() {
      table.innerHTML = "";
    }
    list.appendChild(b);
    
    list.examplesAdded = 0;
  }
  
  var b = document.createElement("button");
  b.setAttribute("class", "example-btn");
  b.innerHTML = ++list.examplesAdded;
  list.appendChild(b);
  
  b.onclick = function() {
    loadExample(table, maxWidth, steps, moveStrings, stickers, hideMoves, hideButtons);
  };
}

function insertTable(table, maxWidth, titles, setups, captions)
{
  table.innerHTML = "";
  var t = table.insertRow(table.rows.length); // titles
  var animations = table.insertRow(table.rows.length);
  var c = table.insertRow(table.rows.length); // captions
  
  var cellWidth = maxWidth / setups.length;
  
  for (var i = 0; i < setups.length; ++i) {
    var title = t.insertCell(t.cells.length);
    title.innerHTML = "<b>" + titles[i] + "<b>";
    title.width = cellWidth;
    
    var anim = document.createElement("iframe");
    var size = maxWidth / setups.length * 0.9;
    anim.width = size;
    anim.height = size;
    anim.setAttribute("scrolling", "no");
    //anim.src = "http://teoidus.github.io/dump/CSSCube/demo.html?size="
    anim.src = "../../CSSCube/demo.html?size="
      + size + setups[i];
    var animation = animations.insertCell(animations.cells.length);
    animation.appendChild(anim);
    animation.width = cellWidth;
    
    var caption = c.insertCell(c.cells.length);
    caption.innerHTML = captions[i];
    caption.width = cellWidth;
  }
}
