function Philosopher(id, imgSrc, size, laconicity, dialogue) {
  this.div = document.createElement('div');
  this.div.style.position = 'fixed';
  this.div.style.wordWrap = 'break-word';
  this.padding = 5;
  this.div.style.fontSize = window.innerWidth / 80;
  this.div.style.width = size.x - this.padding*2;
  this.div.style.height = size.y - this.padding*2;
  this.div.style.border = 'solid black 1px';
  this.div.style.paddingTop = this.padding;
  this.div.style.paddingLeft = this.padding;
  this.div.style.paddingRight = this.padding;
  this.div.style.paddingBottom = this.padding;
  this.div.id = id;
  document.body.appendChild(this.div);
  
  this.caption = document.createElement('div');
  this.div.appendChild(this.caption);
  
  this.img = new Image();
  this.img.src = imgSrc;
  this.img.height = size.y/3;
  this.img.id = id + 'image';
  this.div.appendChild(this.img);

  this.name = document.createElement('div');
  this.name.innerHTML = '<b>' + this.div.id + '</b>';
  this.div.appendChild(this.name);
  
  this.laconicity = laconicity;
  
  this.dialogue = dialogue;
  this.finalDialogue = dialogue.splice(dialogue.length-1, 1)[0];
}

Philosopher.prototype.say = function(s) {
  this.caption.innerHTML = s + '<br>';
}

Philosopher.prototype.resize = function(size) {
  this.div.style.width = size.x - this.padding*2;
  this.div.style.height = size.y - this.padding*2;
  this.img.height = size.y/3;
}

Philosopher.prototype.position = function(position) {
  this.div.style.left = position.x;
  this.div.style.top = position.y;
}

Philosopher.prototype.doDialogue = function() {
  for (var i = 0; i < this.dialogue.length; i++) {
    if (this.dialogue[i].length != 0) {
      var j = Math.floor(Math.random() * this.dialogue[i].length);
      this.say(this.dialogue[i].splice(j,1));
      return;
    }
  }
  // if all elements of dialogue of length 0
  var j = Math.floor(Math.random() * this.finalDialogue.length);
  this.say(this.finalDialogue[j]);
}