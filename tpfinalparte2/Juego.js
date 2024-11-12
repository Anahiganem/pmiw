class Juego {
  constructor(cantidadObstaculos) {
    this.cantidadObstaculos = cantidadObstaculos;
    this.estado = 0;
    this.crearPersonaje();
    this.crearObstaculos();

    //this.linternasRecolectadas = new linternasRecolectadas();
  }

  dibujar() {
    if (this.estado === 0) {
      // Pantalla de inicio
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(0);
      text("Nombre del Juego", width / 2, height / 2 - 40);

      // Botón "Comenzar"
      fill(200, 0, 0);
      rect(width / 2 - 50, height / 2, 100, 40);
      fill(255);
      textSize(20);
      text("Comenzar", width / 2, height / 2 + 20);
    } else if (this.estado === 1) {
      // Pantalla del juego
  
      this.personaje.dibujar();

      for (let i=0; i< this.cantidadObstaculos; i++) {
        this.obstaculos[i].dibujar();
      }
      // Aquí puedes verificar si el jugador gana o pierde
      if (objJuego.personajeGana()) {
        this.estado = 2;
      } else if (objJuego.personajePierde()) {
        this.estado = 3;
      }
    } else if (this.estado === 2) {
      // Pantalla de victoria
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(0, 255, 0);
      text("¡Ganaste!", width / 2, height / 2);
    } else if (this.estado === 3) {
      // Pantalla de derrota
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255, 0, 0);
      text("Perdiste", width / 2, height / 2);
    }
  }


  mouseclic() {
    if (this.estado === 0) {
      // Detectar clic en el botón "Comenzar" en la pantalla de inicio
      if (mouseX > width / 2 - 50 && mouseX < width / 2 + 50 &&
        mouseY > height / 2 && mouseY < height / 2 + 40) {
        this.estado = 1; // Cambia al estado de juego
      }
    }
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i=0; i< this.cantidadObstaculos; i++) {
      this.obstaculos[i] = new Obstaculos(i*70 +50, 100);
    }
  }
  crearPersonaje() {
    this.personaje = new Personaje(width/2, 380);
    this.personaje.dibujar();
  }
  teclasMovimiento(keyCode) {
    this.personaje.teclasMovimiento(keyCode);
  }

  finalJuego() {
  }

  personajeGana() {
     return false;
  }

  personajePierde() {
     return false;
  }
}
