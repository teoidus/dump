function Graphics(w, h, canvas) {
  this.w = w;
  this.h = h;
  this.canvas = canvas;
  this.canvas.width = w;
  this.canvas.height = h;
  this.c = this.canvas.getContext('2d');
}

Graphics.prototype.drawRaytrace = function(raytrace) {
  var dx = this.w/raytrace.length;
  //console.log(raytrace);
  this.c.clearRect(0, 0, this.canvas.width, this.canvas.height);
  for (var i = 0; i < raytrace.length; i++) {
    var c = raytrace[i];
    for (var j = 0; j < c.length; j++) {
      this.c.fillStyle = 'rgba('+c[j].r+','+c[j].g+','+c[j].b+','+c[j].a+')';
      this.c.fillRect(i*dx, 0, dx, this.h);
    }
  }
}