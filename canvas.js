console.log("Hello World");
var canvas = document.getElementById('example');
var ctx = canvas.getContext('2d');

function draw() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');

  ctx.fillRect(25, 25, 100, 100);
  ctx.clearRect(45, 45, 60, 60);
  ctx.strokeRect(50, 50, 50, 50);
}

draw();




function draw() {
  var canvas = document.getElementById('example');
  var ctx = canvas.getContext('2d');
  ctx.beginPath();
  ctx.moveTo(0, 75);
  ctx.lineTo(150, 150);
  ctx.lineTo(100, 0);
  ctx.fill();
}

draw();