

const {Engine, World, Bodies, Mouse, MouseConstraint, Constraint} = Matter;
let world, engine, mConstraint;
//const boxes = [];
let bird
let ground
let birdimg;
var game, canvas, ctx;
var context;
var user, password; //user input user and password, send to server
window.onload = init;//  After the window has been loaded, go to init

var x = 0;
var y = 0;

function preload(){
  birdimg = loadImage('assets/redBird.png');
 
}
function init(){

  engine = Engine.create();
  world = engine.world;
  console.log(Matter);

   // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement
   canvas = document.getElementById("cnv");
   // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D
   context = canvas.getContext("2d");
   bird = new Bird(canvas.width/2, canvas.height/2, 25);
   ground = new Ground(canvas.width/2, canvas.height - 10, canvas.width, 20);
  game = new Game();
  drawBall();
  draw();
  animate();
  mouseMoveHandler();
 
 
// const req = new XMLHttpRequest();
// req.addEventListener("load", reqListener);
// req.open("GET", url, async, user, password); //insert ulr later
// req.send();\


function mouseMoveHandler(e) {
  document.addEventListener("mousemove", mouseMoveHandler, false);
  const relativeX = e.clientX - canvas.offsetLeft;
  const relativeY = e.clientY - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    x = relativeX;
  }
  if (relativeY > 0 && relativeY < canvas.width) {
    y = relativeY;
  }
}
}
function drawBall(){
  let radius = 15;
  context.beginPath();
  context.arc(x, y, radius, 0, 2 * Math.PI);
  context.strokeStyle = "black";
  context.fillStyle =  "blue";
  context.fill();
  context.stroke();
  context.closePath();
}

function animate() {
 game.update()
 
  draw();     // render
  requestAnimationFrame(animate);
 
}

function draw(event){
  Matter.Engine.update(engine);
  bird.show();
  ground.show();
  drawBall();
}


// function reqListener() {
//   console.log(this.responseText);
// }




  
