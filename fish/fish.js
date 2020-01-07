
class Fish {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.id = myFishes.length;
    this.yB = Fish.randomNum();
    this.xB = Fish.randomNum();
    this.coefficient = (this.yB - this.y) / (this.xB - this.x);
    this.inconnue = this.y - this.coefficient * this.x;
    if (Math.random() > .5) {
      this.increment = 1
    } else {
      this.increment = -1
    }
  }



  move() {
    
    this.xCible = this.x + this.increment;
    this.yCible = this.coefficient * this.xCible + this.inconnue;
    if(Math.abs(this.yCible - this.y) > Math.abs(this.increment) && Math.abs(this.coefficient) > 0){
      this.yCible = this.y + this.increment;
      this.xCible = (this.yCible - this.inconnue) / this.coefficient;
    }
    this.x = this.xCible;
    this.y = this.yCible; 
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }

  static randomNum() {
    // let num = Math.floor(Math.random() * 500) + 1;
    // num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
    let num = Math.random() * 10000;
    num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;

    return num;
  }

}
