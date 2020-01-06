function randomNum() {
  let num = Math.floor(Math.random() * 20) + 1;
  num *= Math.floor(Math.random() * 2) == 1 ? 1 : -1;
  return num;
}

class Fish {

  constructor(x, y) {
    this.x = x;
    this.y = y;
    this.w = 20;
    this.h = 10;
    this.id = myFishes.length;
  }

  move() {
    this.y += randomNum();
    this.x += randomNum();
    ctx.fillRect(this.x, this.y, this.w, this.h);
  }


}
