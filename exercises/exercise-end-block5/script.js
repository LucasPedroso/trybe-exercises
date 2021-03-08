let basePyramid = 15;
let numberOfLines = Math.ceil(basePyramid / 2); // 5
let controlLeft = numberOfLines; // 5
let controlRight = numberOfLines; // 5


let lines = document.querySelectorAll(".line");

function setTriangle(baseTriangle = 15) {
  basePyramid = baseTriangle;
  numberOfLines = Math.ceil(basePyramid / 2);
  controlLeft = numberOfLines;
  controlRight = numberOfLines;
  
}

console.log(`numberOfLines: ${numberOfLines}`);

function createContainerPyramid() {
  let container = document.querySelector('.triangle');
  console.log(container);
  console.log(numberOfLines);
  for (let index = 0; index < numberOfLines; index += 1) {
    container.appendChild(createBox('line'));
    console.log(index);
  }
  lines = document.querySelectorAll(".line");
}

// Atualiza a quantidade de visitar no site, utilizando o LocalStorage
function updateVisit() {
  if (typeof (Storage) != "undefined") {
    if(localStorage.count !== undefined) {
      localStorage.count = parseInt(localStorage.count) + 1;
      document.getElementById("count").innerHTML = localStorage.count;
    } else {
      localStorage.count = 1;
      document.getElementById("count").innerHTML = 1;
    }
  } else {
    document.write("Sem suporte para Web Storage");
  }  
}

// Passa por todos as linhas (div com class line) e preenche o triangulo
function fillTriangle(lines) {
  console.log(lines);
  for(let index = 0; index < lines.length; index += 1) {
    fillLine(lines[index]);
    controlRight += 1;
    controlLeft -= 1;
  }
}

// Cria uma caixa com base nas diferentes classes
function createBox(className) {
  let box = document.createElement("div");
  box.className = className;
  return box;
}

// Preenche uma linha
function fillLine(divLine) {
  for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
    if(lineColumn >= controlLeft && lineColumn <= controlRight) {
      let box = createBox("box");
      divLine.appendChild(box);
    } else {
      divLine.appendChild(createBox("box-empty"));
    }
  }
}
window.onload = function() {
  setTriangle();
  createContainerPyramid();
  updateVisit();
  fillTriangle(lines);
  addEvListener();
}
function makeTriangle() {
  let newBaseTriangle = parseInt(document.getElementById('inputTriangle').value);
  document.querySelector('.triangle').innerHTML = '';
  setTriangle(newBaseTriangle);
  createContainerPyramid();
  updateVisit();
  fillTriangle(lines);
}
function addEvListener() {
  document.getElementById('btn-xablau').addEventListener('click', function (e) { makeTriangle()})
}
