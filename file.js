// const myCanvas = $("canvas")[0].getContext("2d");
var ctx = $("canvas")[0].getContext("2d");
ctx.beginPath();
ctx.roundRect(140, 150, 150, 30 , [20,20,20,20]);
ctx.fillStyle = "green";
ctx.fill();


$("canvas:eq(0)").css("background-color", "yellow");
