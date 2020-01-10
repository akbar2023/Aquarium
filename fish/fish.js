
class Fish {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.direction();
    this.id = myFishes.length;
  }


  // y=ax et y=ax+b
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

    // if (!limitX && !limitY) {
    //   console.log('out');
    //   this.x = this.targetX;
    //   this.y = this.targetY;
    // } else {
    //   this.direction();
    // }

    while (limitX || limitY) {
      this.direction();
      this.nextPoint();
      limitX = this.targetX + this.w > 800 || this.targetX < 0;
      limitY = this.targetY + this.h > 400 || this.targetY < 0;
    }
  
    this.x = this.targetX;
    this.y = this.targetY;


    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  static randomNum() {
    let num = Math.random() * 10000;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  }

}
