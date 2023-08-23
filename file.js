class Snake {
  #apple = 0;
  #score = 0;
  constructor(_apple, _score) {
    this.#apple = _apple;
    this.#score = _score;
  }
  flagUp = false;
  flagDown = false;
  flagLeft = false;
  flagRight = false;
  x = 140;
  // moveSnakeUp = moveUp();
  // moveSnakeDown = moveDown();
  moveSnakeRight() {
    moveRight(this.x);
  }
  moveSnakeLeft() {
    moveLeft(this.x);
  }
  // moveSnakeLeft = moveLeft();
}

var ctx = $("canvas")[0].getContext("2d");
ctx.beginPath();
ctx.roundRect(140, 150, 150, 30, [20, 20, 20, 20]);
ctx.fillStyle = "green";
ctx.fill();

$("canvas:eq(0)").css("background-color", "yellow");

//
var mySnake = new Snake(0, 0);

document.onkeydown = (event) => {
  if (event.keyCode === 38) {
    console.log("up");
    mySnake.flagUp = true;
    mySnake.moveSnakeUp;
  } else if (event.keyCode === 40) {
    console.log("down");
    mySnake.flagDown = true;
    moveDown();
  } else if (event.keyCode === 37) {
    console.log("left");
    mySnake.flagLeft = true;
    mySnake.moveSnakeLeft();
  } else if (event.keyCode === 39) {
    console.log("right");
    mySnake.flagRight = true;
    mySnake.moveSnakeRight();
  }
};
let obj1 = {
  left: "1400",
};
let obj2 = {
  left: "0",
};

//check
var boundary = $("canvas:eq(0)").width();

// function move() {
//   if (flagRight == true) {
//     moveRight();
//   } else if (flagLeft == true) {
//     moveLeft();
//   } else if (flagDown == true) {
//     moveDown();
//   } else if (flagUp == true) {
//     moveUp();
//   }
// }
var id;

function moveRight(v) {
  v = mySnake.x;
  // var v = 140;
  ctx.clearRect(mySnake.x, 150, 150, 30);
  id = window.setInterval(() => {
    ctx.clearRect(v, 150, 150, 30);
    mySnake.x += 50;
    v += 50;

    ctx.beginPath();
    ctx.roundRect(v, 150, 150, 30, [20, 20, 20, 20]);
    ctx.fillStyle = "green";
    ctx.fill();
    if (v >= +$("canvas:eq(0)").width() - 120) {
      mySnake.flagRight = false;
      stop(id);
      alert("GAME OVER!");
    }
    if (mySnake.flagLeft == true) {
      ctx.clearRect(v, 150, 150, 30);

      stop(id);
      mySnake.flagRight = false;
    }
  }, 100);
}
var id2;
function moveLeft(v) {
  ctx.clearRect(v, 150, 150, 30);

  id2 = window.setInterval(() => {
    ctx.clearRect(v, 150, 150, 30);

    v -= 50;
    mySnake.x -= 50;

    ctx.beginPath();
    ctx.roundRect(v, 150, 150, 30, [20, 20, 20, 20]);
    ctx.fillStyle = "green";
    ctx.fill();
    if (v <= -10) {
      mySnake.flagLeft = false;
      stop(id2);
      alert("GAME OVER!");
    }
    if (mySnake.flagRight == true) {
      mySnake.flagLeft = false;
      ctx.clearRect(v, 150, 150, 30);
      stop(id2);
    }
  }, 100);
}

function stop(my_id) {
  clearInterval(my_id);
}

/*

function move() {
  if (flagRight == true) {
    var v = 140;
    window.setInterval(() => {
      // ctx.clip();
      // ctx.clearRect(v, 150, 150, 30);

      v += 50; //50

      ctx.beginPath();
      ctx.roundRect(v, 150, 150, 30, [20, 20, 20, 20]);
      ctx.fillStyle = "red";
      ctx.fill();

      console.log(v);
    }, 150);
  }
}




*/
