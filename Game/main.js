

// global variables for canvas and context
var game, canvas, ctx;
var user, password; //user input user and password, send to server
window.onload = init;//  After the window has been loaded, go to init

function init(){
  canvas = document.createElement('canvas');
  canvas.style.border = 'solid black 2px';
  canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  canvas.width = 1096;  // 800 - 4 for the border
  canvas.height = 696; // 700 - 4 for the border
  ctx = canvas.getContext('2d'); // This is the context
  game = new Game();
  animate();
  const req = new XMLHttpRequest();
req.addEventListener("load", reqListener);
req.open("GET", url, async, user, password);
req.send();
//open(method, url, async)
}


function animate(){
  ctx.fillStyle = 'rgba(0,0,0,.05)'
  ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update()
  requestAnimationFrame(animate);
}

function reqListener() {
  console.log(this.responseText);
}

function draw() {
   
}



  
