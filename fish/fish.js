
var canvas = document.getElementById('aquarium');
var ctx = canvas.getContext('2d');

// Contains instances of class Fish
var fishes = [];
var fishColor = ['red', 'rgb(20, 50, 80)', 'white', 'black', 'skyblue', 'coral', 'yellow', 'lime', 'rgba(0, 0, 200, 0.5)', 'rebeccapurple'];

class Fish {
  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.color = function() {
      let i = Math.random()*10;
      return i = Math.floor(i);
    };
    this.id = fishes.length;
    this.colour = this.color();
    //ctx.fillStyle = fishColor[this.color()]; // if use this every fish change their color :/       *****COLOR*****

    const fish = this;
    this.move = function () {
      let movementY = Math.random();
      let movementX = Math.random();
      fish.y += movementY;
      fish.x += movementX;
      // ctx.beginPath();
      ctx.fillStyle = fishColor[fish.colour]; // It seems like working good but I don't think that is a good idea       *****COLOR*****
      // debugger;
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
