function TaskManager(div)
{
  this.tasks = [];
  this.taskNames = {};
  this.div = div;
}

TaskManager.prototype.add = function(name, desc, estimatedTime, deadline, sudo)
{
  var n = name;
  while (n in this.taskNames && typeof sudo == "undefined") // prevent overwrite
  {
    var rename = prompt(n + " already exists. Rename (press enter to overwrite)?", n);
    if (n == rename) { // forced overwrite
      n = rename;
      break;
    }
    n = rename;
  }
  
  var t = parseTime(estimatedTime);
  
  var d = parseDate(deadline);
  
  // keep list sorted by most urgent tasks
  var i = 0;
  while (i < this.tasks.length)
  {
    if (this.tasks[i].d > d)
      break;
    i += 1;
  }
  this.tasks.splice(i, 0, { name: n, desc: desc, t: t, d: d });
  this.taskNames[n] = true;
  
  //?? deadline/urgency info
  var divElement = document.createElement("div");
  divElement.id = n;
  divElement.innerHTML = n;
  if (++i < this.tasks.length)
    this.div.insertBefore(divElement, document.getElementById(this.tasks[i].name));
  else
    this.div.appendChild(divElement);
}

TaskManager.prototype.remove = function(name)
{
  this.tasks = this.tasks.filter(a => a.name != name)
  delete this.taskNames[name];
  this.div.removeChild(document.getElementById(name));
}

TaskManager.prototype.tick = function(dt)
{
  
}

TaskManager.prototype.save = function()
{
  return JSON.stringify(this.tasks);
}

IdeaManager.prototype.load = function(s)
{
  var data = JSON.parse(s);
  for (var i = 0; i < data.length; ++i)
  {
    this.add(data[i].name, data[i].desc, data[i].t, data[i].d, "sudo");
  }
}