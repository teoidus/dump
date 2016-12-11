function Reviewer(div)
{
  this.items = []; // [{ q, a, prev, l, lifespan }]
  this.div = div;
}

Reviewer.prototype.hp = function(item)
{
  return item.l - (Date.now() - item.prev);
}

Reviewer.prototype.add = function(q, a, lifespan)
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
  this.items.splice(i, 0, { q: q, a: a, prev: Date.now(), l: l, lifespan: l });
  
  var divElement = document.createElement("div");
  divElement.id = q;
  divElement.innerHTML = "<div style='color: #00ff00; display: inline'>●</div> " + q;
  this.div.appendChild(divElement);
}
  
Reviewer.prototype.remove = function(q)
{
  this.items = this.items.filter(a => a.q != q);
  this.div.removeChild(document.getElementById(q));
}

Reviewer.prototype.tick = function(dt)
{
  // track deaths
  for (var i = 0; i < this.items.length; ++i)
  {
    var hp = this.hp(this.items[i]);
    if (hp < 0)
    {
      //this.items[i].prev = Date.now();
      //this.items[i].l = Math.max(this.items[i].l - 1000, 0);
    }
    
    var k = Math.max(hp/this.items[i].l, 0);
    var c = colorTween([255, 0, 0], [100, 255, 100], k);
    document.getElementById(this.items[i].q).innerHTML = "<div style='color: "
      + c + "; display: inline'>\u25CF</div> " + this.items[i].q;
  }
}

Reviewer.prototype.revive = function(q)
{
  for (var i = 0; i < this.items.length; ++i)
  {
    if (this.items[i].q == q)
    {
      this.items[i].prev = Date.now();
      this.items[i].l = (this.items[i].l != 0) ?
        this.items[i].l * 2 : this.items[i].lifespan;
    }
  }
}

Reviewer.prototype.save = function()
{
  return JSON.stringify(this.items);
}

Reviewer.prototype.load = function(s)
{
  this.items = JSON.parse(s);
}