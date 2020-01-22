
var fishColor = ['red', 'rgb(20, 50, 80)', 'white', 'black', 'skyblue', 'coral', 'yellow', 'lime', 'rgba(0, 0, 200, 0.5)', 'rebeccapurple'];

class Fish {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.direction();
    this.id = myFishes.length;
    this.color = fishColor[Fish.colorIndex()];
    this.id = myFishes.length;
  }


  // coefficient of the straith line: y = ax+b
  nextPoint() {
    this.targetX = this.x + this.increment;
    this.targetY = this.coefficient * this.targetX + this.inconnue;
    if (Math.abs(this.targetY - this.y) > Math.abs(this.increment) && Math.abs(this.coefficient) > 0) {
      this.targetY = this.y + this.increment;
      this.targetX = (this.targetY - this.inconnue) / this.coefficient;
    }
  }


  direction() {
    Math.random() > .5 ? this.increment = 1 : this.increment = -1;
    this.yB = Fish.randomNum();
    this.xB = Fish.randomNum();
    this.coefficient = (this.yB - this.y) / (this.xB - this.x);
    this.inconnue = this.y - this.coefficient * this.x;
  }

  move() {

    this.nextPoint();
    let limitX = this.targetX + this.w > 800 || this.targetX < 0;
    let limitY = this.targetY + this.h > 400 || this.targetY < 0;

    while (limitX || limitY) {
      this.direction();
      this.nextPoint();
      limitX = this.targetX + this.w > 800 || this.targetX < 0;
      limitY = this.targetY + this.h > 400 || this.targetY < 0;
    }

    this.x = this.targetX;
    this.y = this.targetY;

    ctx.fillStyle = this.color;

    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  // static method usable only via Fish.randoNum. Since non usable by instances.
  static randomNum() {
    let num = Math.random() * 800;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  }

  static colorIndex() {
    let i = Math.random()*10;
    return i = Math.floor(i);
  };

}
