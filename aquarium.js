var canvas = document.getElementById('aquarium');
var ctx = canvas.getContext('2d');

// Contains created fishes
var myFishes = [];


function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  for (let i = 0; i < myFishes.length; i++) {
    myFishes[i].move();
  }
}

function start(){
  setInterval(animate, 100);
}

document.getElementById('button').addEventListener('click', start);



function getMousePos(canvas, event) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: event.clientX - rect.left,
    y: event.clientY - rect.top
  };
}

/*
function create(event) {
  let fish = new Fish(event.offsetX, event.offsetY);
  return fish;
}
*/

function create(event) {
  let coordinates = getMousePos(canvas, event);
  console.log(coordinates);
  let fish = new Fish(coordinates.x, coordinates.y);
  return fish;
}


function pushFish(newFish) {
  myFishes.push(newFish);
}

document.getElementById('aquarium').addEventListener('click', (event) => {
  getMousePos(canvas, event)
  let createdFish = create(event);
  pushFish(createdFish);
});
