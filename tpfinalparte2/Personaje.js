class Personaje {
  constructor() {
    this.posX = 300;
    this.posY = 300;
    this.colorper = color(0, 190, 0);
    this.vidas = 3;
    //this.linternasRecolectadas = new linternasRecolectadas();
  }

  dibujar() {
    fill(0);
    ellipse(this.posX, this.posY, 45, 45); //cabeza
    rect(this.posX-10, this.posY, 20, 50); // torso
    line(this.posX - 10, this.posY + 10, this.posX - 20, this.posY + 20); // Brazo izquierdo
    line(this.posX + 10, this.posY + 10, this.posX + 20, this.posY + 20); // Brazo derecho
  }

  movderecha() {
  }

  movizquierda() {
  }

  estaVivo() {
  }

  colision() {
  }

  recolectar() {
  }
}
