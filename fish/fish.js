
var canvas = document.getElementById('aquarium');
var ctx = canvas.getContext('2d');

// Contains instances of class Fish
var fishes = [];

function randomNum() {
  let num = Math.floor(Math.random() * 20) + 1;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  return num;
}


/*
  for(let i =0; randomNum() === -20; i++) {
    let result = randomNum();
    console.log(result);
  }
*/

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.id = fishes.length;

    const fish = this;
    this.move = function () {

      let movementY = randomNum();
      let movementX = randomNum();

      setInterval()

      if (movementY > 0) {
        while (movementY !== 0) {
          setInterval(function () {
            fish.y += .5;
            movementY -= .5;
          }, 10);
        }
      }
      if (movementX > 0) {
        while (movementX !== 0) {
          setInterval(function () {
            fish.x += .5;
            movementX -= .5;
          }, 10);
        }
      }

      if (movementY < 0) {
        while (movementY !== 0) {
          setInterval(function () {
            fish.y -= .5;
            movementY += .5;
          }, 10);
        }
      }

      if (movementX < 0) {
        while (movementX !== 0) {
          setInterval(function () {
            fish.x -= .5;
            movementX += .5;
          }, 10);
        }
      }


      // fish.y += randomNum();
      // fish.x += randomNum();
      ctx.fillRect(fish.x, fish.y, fish.w, fish.h);
    };

    // Push each new fish in the fishes array above.
    fishes.push(this);

  }
}

function animateFish() {

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < fishes.length; i++) {
    fishes[i].move();
  }
}
setInterval(animateFish, 100); //todo: adda a narray of 1 and -1 to define a good movement randomly

function createFish(event) {
  let fish = new Fish(event.offsetX, event.offsetY);
  console.log(fish.x);
}

document.getElementById('aquarium').addEventListener('click', createFish);
