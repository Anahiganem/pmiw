let objJuego;

function setup() {
  createCanvas(640, 480);
  objJuego = new Juego(10);
}


function draw() {
  background(0,0,255);
  objJuego.dibujar();
  
}
function keyPressed(){
  objJuego.teclasMovimiento(keyCode);
}
function mousePressed() {
  objJuego.mouseclic();
}
