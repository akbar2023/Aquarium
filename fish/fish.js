
class Fish {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.direction();
    this.id = myFishes.length;
    Math.random() > .5 ? this.increment = 1 : this.increment = -1;
  }


  // y=ax et y=ax+b
  pointSuivant() {
    this.xTarget = this.x + this.increment;
    this.yTarget = this.coefficient * this.xTarget + this.inconnue;
    if (Math.abs(this.yTarget - this.y) > Math.abs(this.increment) && Math.abs(this.coefficient) > 0) {
      this.yTarget = this.y + this.increment;
      this.xTarget = (this.yTarget - this.inconnue) / this.coefficient;
    }
  }


  direction() {
    this.yB = Fish.randomNum();
    this.xB = Fish.randomNum();
    this.coefficient = (this.yB - this.y) / (this.xB - this.x);
    this.inconnue = this.y - this.coefficient * this.x;
  }

  move() {

    this.pointSuivant();

    if (true) {
      this.x = this.xTarget;
      this.y = this.yTarget;
    }
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  static randomNum() {
    let num = Math.random() * 10000;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    return num;
  }

}
