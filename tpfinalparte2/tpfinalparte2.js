let objJuego;
let fondo; 
let sonidoFondo

function preload() {
   fondo = new ImagenesFondo();
   fondo.cargaimagenes();
   sonidoFondo = loadSound ('data/sonidof.mp3');
}

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(8);
}


function draw() {
  background(0);
  objJuego.dibujar();
  
}
function keyPressed(){
  objJuego.teclasMovimiento(keyCode);
  objJuego.comenzarjuego(keyCode);
}
function mousePressed() {
  objJuego.mouseclic();
  if (!sonidoFondo.isPlaying()) {
      sonidoFondo.loop();
  }
}
