function Reviewer(div)
{
  this.items = []; // [{ q, a, prev, l, lifespan }]
  this.div = div;
}

Reviewer.prototype.hp = function(item)
{
  return item.l - (Date.now() - item.prev);
}

Reviewer.prototype.add = function(q, a, lifespan, newL, level, prev)
{
  var l = parseTime(lifespan);
  var i = 0;
  while (i < this.items.length)
  {
    if (l < this.hp(this.items[i]))
      break;
    i += 1;
  }
  // lifespan = initial lifespan, l = current lifespan (changes after review)
  if (typeof newL == "undefined") var newL = l;
  if (typeof level == "undefined") level = 0;
  var prev = (typeof prev != "undefined") ? prev : Date.now();
  this.items.splice(i, 0, { q: q, a: a, prev: prev, l: newL, lifespan: l, level: level });
  
  var divElement = document.createElement("div");
  divElement.id = q;
  divElement.innerHTML = ""; // expanded at next tick
  this.div.appendChild(divElement);
}
  
Reviewer.prototype.remove = function(q)
{
  this.items = this.items.filter(a => a.q != q);
  this.div.removeChild(document.getElementById(q));
}

Reviewer.prototype.triggerPrompt = function(item)
{
  if (typeof item.a == "undefined" || item.a == "")
    return;
  if (prompt(item.q) == item.a) {
    item.l *= 2;
    item.level += 1;
  } else {
    alert("Incorrect: expected '" + item.a + "'");
    if (item.level > 0) item.l /= 2;
    item.level = Math.max(item.level-1, 0);
  }
  item.prev = Date.now();
}

Reviewer.prototype.tick = function(dt)
{
  // track deaths
  for (var i = 0; i < this.items.length; ++i)
  {
    var hp = this.hp(this.items[i]);
    if (hp < 0) // prompt if answer exists
    {
      this.triggerPrompt(this.items[i]);
    }
    
    // draw hp bar
    var bad = [255, 0, 0];
    var good = [0, 255, 0];
    var k = Math.max(hp/this.items[i].l, 0);
    var c = colorTween(bad, good, k);
    
    var html = "<div style='border: solid 1px; color: " + c + "; display: inline'>";
    
    var hpUnits = 8;
    k *= hpUnits;
    for (var j = 0; j < Math.floor(k); ++j)
      html += "\u2588";
    
    if (k != 0)
      html += "<div style='opacity: " + (k % 1) + "; display: inline'>\u2588</div>";
    html += "<div style='opacity: 0; display: inline'>";
    for (var j = 0; j < Math.floor(hpUnits - k); ++j)
      html += "\u2588";
    
    html += "</div></div> " + this.items[i].q + "<sub><sub>" + this.items[i].level + "</sub></sub>";
    document.getElementById(this.items[i].q).innerHTML = html;
  }
}

Reviewer.prototype.revive = function(q)
{
  for (var i = 0; i < this.items.length; ++i)
  {
    if (this.items[i].q == q)
    {
      if (typeof this.items[i].a != "undefined" && this.items[i].a != "") {
        this.triggerPrompt(this.items[i]);
        return;
      }
      this.items[i].prev = Date.now();
      this.items[i].l = (this.items[i].l != 0) ?
        this.items[i].l * 2 : this.items[i].lifespan;
      this.items[i].level += 1;
    }
  }
}

Reviewer.prototype.save = function()
{
  return JSON.stringify(this.items);
}

Reviewer.prototype.load = function(s)
{
  var items = JSON.parse(s);
  for (var i = 0; i < items.length; ++i)
  {
    this.add(items[i].q, items[i].a, msToString(items[i].lifespan), items[i].l, items[i].level, items[i].prev);
  }
}