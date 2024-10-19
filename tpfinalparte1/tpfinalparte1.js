
let imagen = [];
let orden;
let textos= ["casa tomada - Julio cortazar", "Irene y su hermano viven juntos en una antigua casa familar"];
let river= [];
let desarrollo;

function preload() {

  for (let i=0; i<14; i++) {
    imagen [i] = loadImage("data/casa" + i + ".jpg");
  }
  for (let i=0; i< textos.length; i++) {
    river [i] = i;
  }
}

function setup() {
  createCanvas(640, 480);
  textSize(25);
  textAlign(CENTER, CENTER);

  for (let i=0; i<14; i++) {
    imagen[i].resize (640, 480);
  }

  orden = 0;
  desarrollo = "comienzo";
}
function draw() {

  background(0);

  if (desarrollo === "comienzo") {
    cambiaimagen(imagen[0], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
  } else if (desarrollo === "primera") {
    cambiaimagen(imagen[1], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
  } else if (desarrollo === "segunda") {
    cambiaimagen(imagen[2], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "tercera") {
    cambiaimagen(imagen[3], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "cuarta") {
    cambiaimagen(imagen[4], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "quinta") {
    cambiaimagen(imagen[5], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "sexta") {
    cambiaimagen(imagen[6], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "septima") {
    cambiaimagen(imagen[7], 0, 0, 480, 480);
    botond(100, 420, 150, 60);               // ACA LE PUSE UN BOTON PARA VOLVER. NO SÉ SI QUERES QUE LO DEJE O LO SACAMOS
    botond (540, 420, 150, 60);
  } else if (desarrollo === "octava") {
    cambiaimagen(imagen[8], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "novena") {
    cambiaimagen(imagen[9], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond(540, 420, 150, 60);
  } else if (desarrollo === "decima") {    // final
    cambiaimagen(imagen[10], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
  } else if (desarrollo === "undecima") {
    cambiaimagen(imagen[11], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "duodecima") {  //final
    cambiaimagen(imagen[12], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
  } else if (desarrollo === "decimotercera") { //imagen final alt
    cambiaimagen(imagen[13], 0, 0, 480, 480);
    botond (320, 420, 150, 60);
  }

  fill(255);
  text(textos[river[orden% textos.length]], width/2, height/2);
}


function  mousePressed() {
  if (botoniniciovolver("comienzo", "primera")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("primera", "segunda")) {
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda("segunda", "tercera")) { //continuar
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("segunda", "cuarta")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("tercera", "sexta")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("cuarta", "quinta")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("sexta", "septima")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("quinta", "octava")) {
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda("octava", "comienzo")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("octava", "decima")) {  //maletas
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda( "septima", "octava")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha( "septima", "novena")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("decima", "comienzo")) { //FINAL 1
    orden = (orden + 1) % textos.length;  //aca tengo dudas del texto
  } else if (botonizquierda("novena", "octava")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("novena", "undecima")) {
    orden = (orden + 1) % textos.length;
  } else if (botonizquierda("undecima", "duodecima")) {
    orden = (orden + 1) % textos.length;
  } else if (botonderecha("undecima", "decimotercera")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("duodecima", "comienzo")) {
    orden = (orden + 1) % textos.length;
  } else if (botoniniciovolver("decimotercera", "comienzo")) {
  orden = (orden + 1) % textos.length;
}
}



function botond(px, py, anch, alt) {
  if (mousesobre(px, py, anch, alt)) {
    fill (81, 87, 242);
  } else {
    fill (81, 255, 242);
  }
  ellipse (px, py, anch, alt);
}

function botoniniciovolver (x, y) {
  if (desarrollo === x && mousesobre (320, 420, 150, 60)) {
    desarrollo = y;
    return true;
  }
  return false;
}


function botonizquierda (x, y) {
  if (desarrollo === x && mousesobre (100, 420, 150, 60)) {
    desarrollo = y;
    return true;
  }
  return false;
}

function botonderecha (x, y) {
  if (desarrollo === x && mousesobre(540, 420, 150, 60)) {
    desarrollo = y;
    return true;
  }
  return false;
}

function mousesobre(x, y, anch, alt) {
  return mouseX > x && mouseX < x+anch && mouseY > y && mouseY < y+alt;
}

function cambiaimagen (img, x, y, anch, alt) {
  imageMode(CENTER);
  image(img, width/2, height/2, anch, alt);
}
