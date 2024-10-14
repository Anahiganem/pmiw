let imagen = [];
let orden;
function preload() {

  for (let i=0; i<7; i++) {
    imagen [i] = loadImage("data/casa" + i + ".jpg");
  }
}

function setup() {
  createCanvas(640, 480);
  for (let i=0; i<7; i++) {
    imagen[i].resize (640, 480);
  }

  orden = 0;
}
function draw() {
  background(0);
image(imagen[orden], 0, 0);
}



 function  mousePressed(){
    orden++;
      if (orden === 7) {
        orden =0;
      }
  
}
