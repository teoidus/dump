function msToTime(duration, showMs) {
    var milliseconds = parseInt((duration%1000)/100)
        , seconds = parseInt((duration/1000)%60)
        , minutes = parseInt((duration/(1000*60))%60)
        , hours = parseInt((duration/(1000*60*60))%24);

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    var result = hours + ":" + minutes + ":" + seconds;
    return (showMs) ? result+"."+milliseconds : result;
}
// from https://coderwall.com/p/wkdefg/converting-milliseconds-to-hh-mm-ss-mmm

function timeToMs(s) { // takes HH:MM:SS.mmm
  var tokens = s.split(":");
  var result = 0;
  for (var i = tokens.length-1, k = 1000; i >= 0; i--, k *= 60) {
    result += parseFloat(tokens[i])*k;
  }
  return result;
}

function Chronos(agenda, dt, canvas, onComplete) {
  var events = agenda.split("\n");
  this.events = [];
  this.totalTime = 0;
  for (var i = 0; i < events.length; i++) {
    var tokens = events[i].split(" ");
    var t = timeToMs(tokens[0]);
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
  
  this.onComplete = onComplete;
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
      this.current.index += 1;
      clearInterval(this.interval);
      this.onComplete();
    } else {
      this.current.index += 1;
      this.current.duration = this.events[this.current.index].duration;
      this.current.desc = this.events[this.current.index].desc;
    }
  }
}

Chronos.prototype.resize = function(w, h) {
  this.canvas.width = w;
  this.canvas.height = h;
}

Chronos.prototype.render = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
  
  var timelineY = this.canvas.height * 7/8;
  var tickY = timelineY - this.canvas.height/16;
  var timeFont = this.canvas.height/16;
  
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
      if (i < this.current.index) { // completion times
        this.ctx.fillStyle = "white";
        this.ctx.textAlign = "center";
        this.ctx.font = timeFont/2 + "px Arial";
        var s = this.events[i].desc + " (" + msToTime(this.events[i].duration) + ")";
        this.ctx.fillText(s, x + w/2, timelineY + h*5/8, w);
        console.log(s, x + w/2, timelineY, w);
      }
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
  this.ctx.font = timeFont + "px Arial";
  var s = msToTime(this.t, this.current.duration < 60*1000);
  var textWidth = this.ctx.measureText(s).width;
  if (textWidth > x) {
    this.ctx.textAlign = "left";
    var sign = 1;
  } else {
    this.ctx.textAlign = "right";
    var sign = -1;
  }
  this.ctx.fillText(s, x + sign*this.canvas.width/256, timelineY - this.canvas.height/96);
}