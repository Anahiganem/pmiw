class Juego {
  constructor(cantidadObstaculos) {
    this.cantidadObstaculos = cantidadObstaculos;
    this.estado = 0;
    this.crearPersonaje();
    this.crearObstaculos();
    this.textos = [];
    this.textos = loadStrings("data/textos.txt");
    //this.linternasRecolectadas = new linternasRecolectadas();
  }

  dibujar() {
    let valorVolumen = map(mouseX, 0, width, 0.1, 1);
    sonidoFondo.amp(valorVolumen);
    
    if (this.estado === 0) {
      // Pantalla de inicio
      fondo.dibujar();
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255);
      text(this.textos[0], width / 2, height / 2 - 100);
      fill(200, 0, 0);// Botón "instrucciones
      this.boton (width / 2 - 70, height /2);
      fill(255);
      textSize(20);
      text(this.textos[1], width / 2, height / 2 + 20);
    } else if (this.estado === 1) {
      // instrucciones y reglas
      fondo.dibujar();
      textSize(16);
      fill(255);
      let y = height / 2 - 130;
      for (let i = 2; i < this.textos.length -11; i++) { //funcion para crear parrfo
        text(this.textos[i], width / 2, y);
        y += 18; // interlineado
      }
      fill(200, 0, 0);
      fill(255);
      textSize(20);
      text(this.textos[14], width / 2, height / 2 + 120);
      // Pantalla del jueg
    } else if (this.estado === 2) {
      this.personaje.dibujar();

      for (let i=0; i< this.cantidadObstaculos; i++) {
        this.obstaculos[i].dibujar();
      }
      // si el jugador gana o pierde
      if (this.personajeGana()) {
        this.estado = 3;
      } else if (this.personajePierde()) {
        this.estado = 4;
      }
    } else if (this.estado === 3) {
      // Pantalla gana
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(0, 255, 0);
      text("¡Ganaste!", width / 2, height / 2);
    } else if (this.estado === 4) {
      // Pantalla pierde
      textAlign(CENTER, CENTER);
      textSize(32);
      fill(255, 0, 0);
      text("Perdiste", width / 2, height / 2);
    }
  }

  manejosonido() {
    if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop();
    }
  }
  boton(x, y) {
    rect (x, y, 140, 40)
  }
  comenzarjuego(tecla) {
    if (tecla == ENTER && this.estado == 1) {
      this.estado = 2;
    }
  }
  mouseclic() {
    if (this.estado === 0) {
      let x = width / 2 - 70;
      let y = height / 2;
      let an = 140;
      let al = 40;
      if (mouseX > x && mouseX < x+an && mouseY > y && mouseY < y+al) {
        this.estado = 1; // Cambia al estado de juego
        fondo.cambiaimagen();
        this.manejosonido();
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
function ordenTexto (linea) {
  fill(255); // color del texto
  if (orden < textos.length)
  {
    text(textos [linea], width/2, height/2); //centrar
  }
}
