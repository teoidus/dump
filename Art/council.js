function PhilosopherCouncil(philosophers, pos, size) {
  this.philosophers = philosophers;
  this.pos = pos;
  this.size = size;
  var philX = size.x/philosophers.length;
  for (var i = 0; i < philosophers.length; i++) {
    philosophers[i].resize({ x: philX, y: size.y });
    philosophers[i].position({ x: pos.x + philX * i, y: pos.y });
  }
}

PhilosopherCouncil.prototype.doDialogue = function(fps, tick) {
  for (var i = 0; i < this.philosophers.length; i++) {
    var r = (tick/fps) % this.philosophers[i].laconicity; //?? randomness
    if (r == 0)
      this.philosophers[i].doDialogue();
  } 
}