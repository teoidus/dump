function TaskManager(div)
{
  this.tasks = [];
  this.taskNames = {};
  this.div = div;
}

TaskManager.prototype.add = function(name, estimatedTime, deadline, sudo)
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
  
  var t = (estimatedTime != "" && typeof estimatedTime != "undefined") ? parseTime(estimatedTime) : undefined;
  
  var d = (deadline != "" && typeof deadline != "undefined") ? parseDate(deadline) : undefined;
  
  // keep list sorted by most urgent tasks
  var i = 0;
  while (i < this.tasks.length)
  {
    if (this.tasks[i].d > d)
      break;
    i += 1;
  }
  this.tasks.splice(i, 0, { name: n, t: t, d: d });
  this.taskNames[n] = true;
  
  var divElement = document.createElement("div");
  divElement.id = n;
  divElement.innerHTML = ""; // expanded at next tick
  
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
  for (var i = 0; i < this.tasks.length; ++i)
  {
    var html = this.tasks[i].name;
    if (typeof this.tasks[i].t != "undefined")
      html += " (" + msToString(this.tasks[i].t) + ")";
    if (typeof this.tasks[i].d != "undefined")
      html += "<sub><sub>" + msToString(this.tasks[i].d - Date.now()) + "</sub></sub>";
    document.getElementById(this.tasks[i].name).innerHTML = html;
  }
}

TaskManager.prototype.save = function()
{
  return JSON.stringify(this.tasks);
}

TaskManager.prototype.load = function(s)
{
  var data = JSON.parse(s);
  for (var i = 0; i < data.length; ++i)
  {
    this.add(data[i].name, data[i].t, data[i].d, "sudo");
  }
}