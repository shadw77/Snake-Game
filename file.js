class Snake {
  #apple = 0;
  #score = 0;
  constructor(_apple, _score) {
    this.#apple = _apple;
    this.#score = _score;
  }
  moveSnake = move();
}

var ctx = $("canvas")[0].getContext("2d");
ctx.beginPath();
ctx.roundRect(140, 150, 150, 30, [20, 20, 20, 20]);
ctx.fillStyle = "green";
ctx.fill();

$("canvas:eq(0)").css("background-color", "yellow");

//
let flagUp = false,
  flagDown = false,
  flagLeft = false,
  flagRight = false;

document.onkeydown = (event) => {
  if (event.keyCode === 38) {
    console.log("up");
    flagUp = true;
  } else if (event.keyCode === 40) {
    console.log("down");
    flagDown = true;
  } else if (event.keyCode === 37) {
    console.log("left");
    flagLeft = true;
  } else if (event.keyCode === 39) {
    console.log("right");
    flagRight = true;
  }
  var mySnake = new Snake(0, 0);
  mySnake.moveSnake();
};
let obj1 = {
  left: "1400",
};
let obj2 = {
  left: "0",
};

//check
var boundary = $("canvas:eq(0)").width();
console.log(boundary);

function move() {
  if (flagRight == true) {
    moveRight();
  } else if (flagLeft == true) {
    moveLeft();
  } else if (flagDown == true) {
    moveDown();
  } else if (flagUp == true) {
    moveUp();
  }
}
var id;
function moveRight() {
  var v = 140;
  id = window.setInterval(() => {
    ctx.clearRect(v, 150, 150, 30);
    v += 50;
    ctx.beginPath();
    ctx.roundRect(v, 150, 150, 30, [20, 20, 20, 20]);
    ctx.fillStyle = "green";
    ctx.fill();
    if (v >= +$("canvas:eq(0)").width() - 120) {
      flagRight = false;
      stop();
      alert("GAME OVER!");
    }
  }, 100);
}
function stop() {
  clearInterval(id);
}
