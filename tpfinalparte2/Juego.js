class Juego {
  constructor() {
    this.crearPersonaje();
    this.crearObstaculos();

    //this.linternasRecolectadas = new linternasRecolectadas();
  }

  dibujar() {
    this.personaje.dibujar();

    for (let i=0; i<12; i++) {
      this.obstaculos[i].dibujar();
      this.personaje.dibujar();
    }
  }

  inicioJuego() {
  }

  crearObstaculos() {
    this.obstaculos = [];
    for (let i=0; i<12; i++) {
      this.obstaculos[i] = new Obstaculos();
    }
  }
  crearPersonaje() {
    this.personaje = new Personaje();
    this.personaje.dibujar();
  }

  finalJuego() {
  }

  personajeGana() {
  }

  personajePierde() {
  }
}
