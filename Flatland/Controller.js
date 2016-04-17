function Controller(camera, graphics, environment, dt) {
  this.c = camera;
  this.g = graphics;
  this.env = environment;
  this.dt = dt;
  with (this) {
    g.canvas.onclick = function() {
      if (document.pointerLockElement === g.canvas || document.mozPointerLockElement === g.canvas) {
        console.log('click sent');
      } else {
        g.canvas.requestPointerLock();
      }
    }
  }
  
  with (this) {
    document.addEventListener('pointerlockchange', function() { lockChange(onmousemove) }, false);
    document.addEventListener('mozpointerlockchange', function() { lockChange(onmousemove) }, false);
  }
}

Controller.prototype.lockChange = function(handler) {
  self = this; // bind all the events here
  with (this) {
    if (document.pointerLockElement === canvas ||
      document.mozPointerLockElement === canvas) {
      console.log('The pointer lock status is now locked');
      document.onmousemove = function(e) { onmousemove(e, self) };
      document.onkeydown = function(e) { onkeydown(e, self) };
    } else {
      console.log('The pointer lock status is now unlocked');  
      document.onmousemove = null;
      document.onkeydown = null;
    }
  }
}

Controller.prototype.onmousemove = function(e, self) {
  var dx = e.movementX ||
      e.mozMovementX ||
      0;
  var dy = e.movementY ||
      e.mozMovementY ||
      0;
  console.log('Mouse moved:', dx, dy);
  self.c.onmousemove(e, dx, dy);
}

Controller.prototype.onkeydown = function(e, self) {
  self.c.onkeydown(e, self.env, self.dt);
}

Controller.prototype.go = function() {
  var self = this;
  with (this) {
    setInterval(function() { doTick(self) }, this.dt * 1000);
  }
}

Controller.prototype.doTick = function(self) {
  document.getElementById('logdiv').innerHTML = JSON.stringify(self.c);
  var trace = self.env.getRaytrace(self.c, 1, self.c.fov/500);
  self.g.drawRaytrace(trace);
  document.getElementById('logdiv').innerHTML += '<br>' + JSON.stringify(trace);
}