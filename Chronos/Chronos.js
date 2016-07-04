function msToTime(duration) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
// from https://coderwall.com/p/wkdefg/converting-milliseconds-to-hh-mm-ss-mmm

function Chronos(agenda, dt, canvas) {
  this.parseDuration = function(hm) {
    var tokens = hm.split(":"); // h:m
    return parseInt(tokens[0])*60*1000 + parseInt(tokens[1])*1000;
  }
  
  var events = agenda.split("\n");
  this.events = [];
  this.totalTime = 0;
  for (var i = 0; i < events.length; i++) {
    var tokens = events[i].split(" ");
    var t = this.parseDuration(tokens[0]);
    this.events.push({
      duration: t,
      desc: tokens.slice(1).join(" "),
      color: '#' + Math.random().toString(16).slice(2, 8).toUpperCase()
    });
    this.totalTime += t;
  }
  
  this.current = { index: 0, duration: this.events[0].duration, desc: this.events[0].desc };
  
  this.t = 0;
  this.dt = dt;
  
  this.canvas = canvas;
  this.ctx = this.canvas.getContext("2d");
  
  this.interval = null;
}

Chronos.prototype.doTick = function() {
  this.t += this.dt;
  this.updateCurrentEvent();
  this.render();
}

Chronos.prototype.go = function() {
  with (this) {
    interval = setInterval(function() { doTick() }, dt); 
  }
}

Chronos.prototype.updateCurrentEvent = function() {
  this.current.duration -= this.dt;
  if (this.current.duration <= 0) {
    if (this.current.index >= this.events.length-1) {
      this.current.duration = 0;
      this.current.desc = "";
      clearInterval(this.interval);
    } else {
      this.current.index += 1;
      this.current.duration = this.events[this.current.index].duration;
      this.current.desc = this.events[this.current.index].desc;
    }
  }
}

Chronos.prototype.render = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
  var timelineY = this.canvas.height * 7/8;
  var tickY = timelineY - this.canvas.height/16;
  
  // Current event description
  var s = this.current.desc;
  var maxFont = Math.min(this.canvas.width, this.canvas.height)/5;
  this.ctx.font = Math.atan(this.canvas.width/s.length/75)*maxFont + "px Arial";
  this.ctx.textAlign = "center"; 
  this.ctx.fillText(s, this.canvas.width/2, timelineY/2, this.canvas.width);
  
  // Timeline
  for (var i = 0, x = 0, h = this.canvas.height - timelineY; i < this.events.length; i++, x += w) {
    // Timeline skeleton
    this.ctx.strokeStyle = this.events[i].color;
    this.ctx.beginPath();
    this.ctx.moveTo(x, timelineY);
    this.ctx.lineTo(x, this.canvas.height);
    this.ctx.stroke();
    
    var w = this.events[i].duration/this.totalTime * this.canvas.width;
    
    // Completion bars
    if (i <= this.current.index) {
      var rectW = Math.min(this.events[i].duration/this.totalTime*this.canvas.width, this.t/this.totalTime*this.canvas.width - x);
      this.ctx.fillStyle = this.events[i].color;
      this.ctx.fillRect(x, timelineY, rectW, h);
    }
  }
  
  // Current tick
  var x = this.t/this.totalTime * this.canvas.width;
  this.ctx.strokeStyle = this.events[this.current.index].color;
  this.ctx.beginPath();
  this.ctx.moveTo(x, tickY);
  this.ctx.lineTo(x, timelineY);
  this.ctx.stroke();
  // Timestamp
  this.ctx.textAlign = (this.t/this.totalTime > 0.5) ? "right" : "left"; 
  var sign = (this.t/this.totalTime > 0.5) ? -1 : 1; 
  this.ctx.font = this.canvas.height/16 + "px Arial";
  this.ctx.fillText(msToTime(this.t), x + sign*this.canvas.width/256, timelineY - this.canvas.height/128);
}