function IdeaManager(div)
{
  this.ideas = [];
  this.div = div;
}

IdeaManager.prototype.add = function(desc)
{
  var n = (0x10000 + (this.ideas.length)).toString(16).substring(1);
  
  var divElement = document.createElement("div");
  divElement.id = this.ideas.length;
  divElement.innerHTML = n + ": " + desc;
  divElement.style.wordWrap = "break-word";
  if (this.ideas.length > 0)
    this.div.insertBefore(divElement, document.getElementById(this.ideas.length-1));
  else
    this.div.appendChild(divElement);
  
  this.ideas.push(desc);
}

IdeaManager.prototype.remove = function(name)
{
  var n = parseInt(name, 16);
  this.ideas.splice(n, 1);
  this.div.removeChild(document.getElementById(n));
}

IdeaManager.prototype.tick = function(dt)
{
  
}

IdeaManager.prototype.save = function()
{
  return JSON.stringify(this.ideas);
}

IdeaManager.prototype.load = function(s)
{
  var data = JSON.parse(s);
  for (var i = 0; i < data.length; ++i)
  {
    this.add(data[i]);
  }
}