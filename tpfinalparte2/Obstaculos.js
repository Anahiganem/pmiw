class Obstaculos {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorper = color(0, 190, 0);
    //no sé si deberia tener vida
  }

  dibujar() {
    fill(this.colorper); 
    rect(this.posX, this.posY, 40, 80);
  }

  colision() {
  }
}
