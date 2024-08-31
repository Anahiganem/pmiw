//ganem anahi
//tp3 comision 1
//https://youtu.be/3E4yosIYPFo
function preload () {
  img=loadImage('data/imagentp3.png');
}

function setup() {
  createCanvas(800, 400);
}

function draw() {
  background(255);
  image(img, 0, 0);
  cuadrado (negro, blanco, h, a, 800, 400);

  //Cambio de tamaño presionando la tecla "C"
  if (keyIsPressed) {
    if (key == 'c' || key == 'C') {
      cambiodetamaño();
    }
  } else {
    a=12;
    h=19;
  }
}

function mousePressed() {
  let dX = mouseX-600;
  let dY = mouseY-200;
  if (dX<0 && dY<0) { // Cambio de blanco por negro haciendo clic en el cuadrado superior izquierdo
    negro=(255);
    blanco=(0);
  } else if (dX>0 && dY<0) { // Cambio a color y ubicacion del centro haciendo clic en el cuadrado superior derecho
    negro= color (0, 255, 0);
    blanco= color (0, 0, 255);
  } else if (dY>0 ) { // Reinicio de la imagen haciendo clic en los cuadrados inferiores
    negro=0;
    blanco=255;
  }
}
