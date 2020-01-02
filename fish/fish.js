
var canvas = document.getElementById('aquarium');
var ctx = canvas.getContext('2d');

// Contains instances of class Fish
var fishes = [];

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.id = fishes.length;

    const fish = this;
    this.move = function () {
      let movementY = Math.random();
      let movementX = Math.random();
      fish.y += movementY;
      fish.x += movementX;
      ctx.fillRect(fish.x, fish.y, fish.w, fish.h);
    };
    
    // Push each new fish in the fishes array above.
    fishes.push(this);
    
  }
}

function animateFish() {
  
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for(let i = 0; i < fishes.length; i++) {
    fishes[i].move();
  }
}
setInterval(animateFish, 10); //todo: adda a narray of 1 and -1 to define a good movement randomly

  function createFish(event) {
    let fish = new Fish(event.offsetX, event.offsetY);
    console.log(fish.x);
  }

  document.getElementById('aquarium').addEventListener('click', createFish);
