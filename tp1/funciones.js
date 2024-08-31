let a=12;
let h=19;
let negro=0;
let blanco=255;
let img;

function alternarcolor (bn) {
  return bn % 2 === 0;
}

function cuadrado(negro, blanco, h, a, x1, y1) {
  noStroke();
  let pasos=11;
  for (let i=0; i < pasos; i+=1) {
    for (let l=400; l<x1; l+=200) {
    for (let j=0; j<y1; j+=200) {


      if (alternarcolor (i)) {
        fill (blanco);
      } else {
        fill (negro);
      }

      rect(l+a*i, j+a*i, 200-h*i, 200-h*i);
    }
  }
}
}

function cambiodetamaño() {
  for (let i=0; i<600; i++) {
    for (let j=0; j<200; j++) {
      let distan = dist(mouseX, mouseY, i, j);
        let diagonal = dist(0, 0, width/2, height/2);
        let tam = map(distan, 0, diagonal, 10, 30);
        h=tam;
        a=6;
    }
  }
}
