
let imagen = [];
let orden;
let textos= ["casa tomada - Julio cortazar", "Irene y su hermano viven juntos en una antigua casa familar"];
let river= [];
let desarrollo;

function preload() {

  for (let i=0; i< 12; i++) {
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

  for (let i=0; i<12; i++) {
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
    botond(100, 420, 150, 60);
  } else if (desarrollo === "octava") {
    cambiaimagen(imagen[8], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "novena") {
    cambiaimagen(imagen[9], 0, 0, 480, 480);
    botond(540, 420, 150, 60);
  } else if (desarrollo === "decima") {
    cambiaimagen(imagen[10], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
  } else if (desarrollo === "undecima") {
    cambiaimagen(imagen[11], 0, 0, 480, 480);
    botond(100, 420, 150, 60);
    botond (540, 420, 150, 60);
  } else if (desarrollo === "duodecima") {
    cambiaimagen(imagen[12], 0, 0, 480, 480);
    botond (540, 420, 150, 60);
  }

  fill(255);
  text(textos[river[orden% textos.length]], width/2, height/2);
}


function  mousePressed() {
  if (desarrollo === "comienzo") {
    if (mousesobre(320, 420, 150, 60)) {
      desarrollo = "primera";
      orden = (orden + 1) % textos.length;
    }
  } else if (desarrollo === "primera") {
    if (mousesobre (320, 420, 150, 60)) {
      desarrollo = "segunda";
      orden = (orden + 1) % textos.length;
    }
  } else if (desarrollo === "segunda") {
    if (mousesobre (0, 420, 150, 60)) {
      desarrollo = "tercera";
      orden = (orden + 1) % textos.length;
    } else if (mousesobre (540, 420, 150, 60)) {
      desarrollo = "cuarta";
      orden = (orden + 1) % textos.length;
    }
  } else if (desarrollo === "tercera") {
    if (mousesobre (540, 420, 150, 60)) {
      desarrollo = "sexta";
      orden = (orden + 1) % textos.length;
    }
  } else if (desarrollo === "cuarta") {
    if (mousesobre (540, 420, 150, 60)) {
      desarrollo = "quinta";
      orden = (orden + 1) % textos.length;
    }
  } else if (desarrollo === "sexta") {
    if (mousesobre (540, 420, 150, 60)) {
      desarrollo = "octava";
      orden = (orden + 1) % textos.length;
    }
  } else if (desarrollo === "octava") {
    if (mousesobre (540, 420, 150, 60)) {
      desarrollo = "novena";
      orden = (orden + 1) % textos.length;
    } else if (mousesobre (0, 420, 150, 60)) {
      desarrollo = "decima";
      orden = (orden + 1) % textos.length;
  } 
  else if (desarrollo === 
}
function botond(px, py, anch, alt) {
  if (mousesobre(px, py, anch, alt)) {
    fill (81, 87, 242);
  } else {
    fill (81, 255, 242);
  }
  ellipse (px, py, anch, alt);
}

function mousesobre(x, y, anch, alt) {
  return mouseX > x && mouseX < x+anch && mouseY > y && mouseY < y+alt;
}

function cambiaimagen (img, x, y, anch, alt) {
  imageMode(CENTER);
  image(img, width/2, height/2, anch, alt);
}
