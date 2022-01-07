

class Div{
 constructor(h, w, bg, fs, ta, text) {
   this.h = h;
   this.w = w;
   this.bg = bg;
   this.fs = fs;
   this.ta =ta;
   this.text = text;
 }

 createDiv () {
  let block = document.createElement('div');
  block.style.height = this.h +'px';
  block.style.width = this.w +'px';
  block.style.backgroundColor = this.bg;
  block.style.fontSize = this.fs +'px';
  block.style.textAlign = this.ta;
  block.textContent = this.text;
  document.body.append(block);
 }
}

let newDiv = new Div(200, 1000, '#ffad22', 50, 'center', 'gffdjgjdf00');

newDiv.createDiv();