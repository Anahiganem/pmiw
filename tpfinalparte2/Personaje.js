class Personaje {
  constructor(posX, posY) {
    this.posX = posX;
    this.posY = posY;
    this.colorper = color(0, 190, 0);
    this.vidas = 3;
    //this.linternasRecolectadas = new linternasRecolectadas();
  }

  dibujar() {
    noStroke();
    fill(this.colorper);
    ellipse(this.posX, this.posY, 45, 45); //cabeza
    rect(this.posX-10, this.posY, 20, 50); // torso
    line(this.posX - 10, this.posY + 10, this.posX - 20, this.posY + 20); // Brazo izquierdo
    line(this.posX + 10, this.posY + 10, this.posX + 20, this.posY + 20); // Brazo derecho
  }

  movderecha() {
     this.posX += 10;
  }

  movizquierda() {
    this.posX -= 10;
  }
  
  teclasMovimiento(keyCode) {
    if (keyCode == LEFT_ARROW) {
      this.movizquierda();
    } else if (keyCode == RIGHT_ARROW) {
      this.movderecha();
    }
  }
  estaVivo() {
  }

  colision() {
  }

  recolectar() {
  }
}
