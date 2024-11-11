let objJuego;

function setup() {
  createCanvas(640, 480);
  background(0,0,255);
  objJuego = new Juego();
}


function draw() {
  objJuego.dibujar();
  
}
