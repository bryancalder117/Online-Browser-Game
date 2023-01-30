
// wait for the page to finish loading with init as the callback
//window.addEventListener("load", init);
// global variables for canvas and context
var game, canvas, ctx;
var context;
var user, password; //user input user and password, send to server
window.onload = init;//  After the window has been loaded, go to init
var ballX = 400;
var ballY = 400;
var mouseX = 0;
var mouseY = 0;

const box = document.querySelector(".box");
const pageX = document.getElementById("x");
const pageY = document.getElementById("y");

function init(){

  // canvas = document.createElement('canvas');
  // canvas.style.border = 'solid black 2px';
  // canvas.style.backgroundColor = 'rgba(0,0,0, .95)';
  // canvas.width = 1096;  // 800 - 4 for the border
  // canvas.height = 696; // 700 - 4 for the border
  // ctx = canvas.getContext('2d'); // This is the context

   // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
   canvas = document.getElementById("cnv");
   // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
   context = canvas.getContext("2d");
   document.getElementById("wrapperDiv").onmouseover = mouseMove;
  setInterval("moveBall()", 100);
  game = new Game();
  //updateDisplay();
  draw();
  animate();
  mouseMove();
  moveBall();
 //coordinate();

// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", url, async, user, password); //insert ulr later
// req.send();

}
function mouseMove(event) {
  mouseX = event.clientX;
  mouseY = event.clientY;
}

function moveBall() {
  if (ballX > mouseX) {
    ballX -= 5;
  } else {
    ballX += 5;
  }
  if (ballY > mouseY) {
    ballY -= 5;
  } else {
    ballY += 5;
  }
}

function animate() {

  //ctx.fillStyle = 'rgba(0,0,0,.05)'
  //ctx.fillRect(0,0,canvas.width,canvas.height); 
  game.update()
  draw();     // render
  requestAnimationFrame(animate);
 
}

function draw(event){
//  x = MouseEvent.pageX;
 // y = MouseEvent.pageY;
  let radius = 15;
  context.beginPath();
  context.arc(ballX, ballY, radius, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.fillStyle =  "blue";
  context.fill();
  context.stroke();
}


// function reqListener() {
//   console.log(this.responseText);
// }




  
