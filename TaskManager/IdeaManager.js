function IdeaManager(div)
{
  this.ideas = {};
  this.ideaNames = [];
  this.div = div;
}

IdeaManager.prototype.add = function(name, desc, sudo)
{
  var n = name;
  while (n in this.ideas && typeof sudo == "undefined") // prevent overwrite
  {
    var rename = prompt(n + " already exists. Rename (press enter to overwrite)?", n);
    if (n == rename) { // forced overwrite
      n = rename;
      break;
    }
    n = rename;
  }
  
  this.ideas[n] = desc;
  this.ideaNames.unshift(n);
  
  var divElement = document.createElement("div");
  divElement.id = n;
  divElement.innerHTML = n;
  this.div.appendChild(divElement);
}

IdeaManager.prototype.remove = function(name)
{
  delete this.ideas[name];
  this.ideaNames = this.ideaNames.filter(a => a != name);
  this.div.removeChild(document.getElementById(name));
}

IdeaManager.prototype.tick = function(dt)
{
  
}

IdeaManager.prototype.save = function()
{
  return JSON.stringify({ i: this.ideas, n: this.ideaNames });
}

IdeaManager.prototype.load = function(s)
{
  var data = JSON.parse(s);
  for (var i = 0; i < data.n.length; ++i)
  {
    this.add(data.n[i], data.i[data.n[i]], "sudo");
  }
}