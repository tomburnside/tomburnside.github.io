//Set global variable that would contain the position, velocity and the html element "ball"
var positionX = 0;
var positionY = 0;
var velocity = 3;
var reverseX = false;
var reverseY = false;
var ball = document.getElementById("ball");

//write a function that can change the position of the html element "ball"
function moveBall() {
  // two x-axis coordinates
  var Xmin = 0;
  var Xmax = 900;

  // two y-axis coordinates
  var Ymin = 0;
  var Ymax = 600;

  if (reverseX) {
    positionX = positionX - velocity;
    ball.style.left = positionX + "px";
  } else {
    positionX = positionX + velocity;
    ball.style.left = positionX + "px";
  }

  if (reverseY) {
    positionY = positionY - (velocity);
    ball.style.top = positionY + "px";
  } else {
    positionY = positionY + (velocity);
    ball.style.top = positionY + "px";
  }

  if (
    positionX > Xmax ||
    positionX === Xmin
  ) {
    reverseX = !reverseX;
  }

  if(positionY > Ymax ||
    positionY === Ymin){
      reverseY = !reverseY;
    }
}

setInterval(moveBall, 10);
