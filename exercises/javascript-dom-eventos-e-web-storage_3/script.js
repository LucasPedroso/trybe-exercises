function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

/* O array dezDaysList contém os dois últimos dias de novembro e os dias do mês de dezembro. 
Desenvolva uma função que crie dinamicamente cada dia do calendário e os adicione como filhos/filhas 
da tag <ul> com ID "days" . Note que os dias 29 e 30 de novembro estão no array pois representam 
respectivamente Segunda-feira e Terça-feira.

Os dias devem estar contidos em uma tag <li> , e todos devem ter a classe day . 
Ex: <li class="day">3</li>
Os dias 24, 25 e 31 são feriados e, além da classe day , devem conter também a classe holiday . 
Ex: <li class="day holiday">24</li>
Os dias 4, 11, 18 e 25 são Sexta-feira. Eles devem conter a classe day e a classe friday . 
Ex: <li class="day friday">4</li> */

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
  17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
let holidays = [24, 25, 31];
let fridays = [4, 11, 18, 25];

const createDays = (day, holidays, friday) => {
  let days = document.querySelector('#days');
  let tagLi = document.createElement('li');
  tagLi.innerText = day;
  tagLi.classList.add('day');
  if (holidays.length > 0) {
    for (const h of holidays) {
      if (day === h) addClass(tagLi, 'holiday');
    }
  }
  if (friday.length > 0) {
    for (const f of fridays) {
      if (day === f) addClass(tagLi, 'friday');
    }
  }
  days.appendChild(tagLi);
}

const addClass = (element, className) => element.classList.add(className);

for (const day of dezDaysList) {
  createDays(day, holidays, fridays);
}

/* Implemente uma função que receba como parâmetro a string "Feriados" e crie dinamicamente um 
botão com o nome "Feriados".
Adicione a este botão a ID "btn-holiday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

const createBtn = (text, elParent, cssTag) => {
  let btn = document.createElement('button');
  btn.innerText = text;
  if (cssTag && cssTag[0] === '.') btn.classList.add(cssTag.substring(1));
  if (cssTag && cssTag[0] === '#') btn.id = cssTag.substring(1);
  document.querySelector(elParent).appendChild(btn);
}

createBtn('Feriados', '.buttons-container', '.btn-holiday');

/* Implemente uma função que adicione ao botão "Feriados" um evento de "click" que muda a 
cor de fundo dos dias que possuem a classe "holiday" .
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente ele 
retorna à configuração inicial com a cor "rgb(238,238,238)" . */

const addEvListener = (elementNode, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  let node = document.querySelector(elementNode);
  node.addEventListener(event, fn);
}

const changeColor = (newColor, oldColor) => {
  let elements = document.querySelectorAll('.holiday');
  for (let index = 0; index < elements.length; index += 1) {
    let el = elements[index];

    if (el.style.backgroundColor === newColor) {
      el.style.backgroundColor = oldColor;
    } else {
      el.style.backgroundColor = newColor;
    }
  }
}

addEvListener('.btn-holiday', 'click', function (e) { changeColor('black', 'rgb(238, 238, 238)') })

/* Implemente uma função que receba como parâmetro a string "Sexta-feira" e crie dinamicamente 
um botão com o nome "Sexta-feira".
Adicione a este botão o ID "btn-friday" .
Adicione este botão como filho/filha da tag <div> com classe "buttons-container" . */

createBtn('Sexta-Feira', '.buttons-container', '#btn-friday')

/* Implemente uma função que adicione ao botão "Sexta-feira" um evento de "click" que modifica o texto 
exibido nos dias que são Sexta-feira.
É interessante que este botão possua também a lógica inversa. Ao ser clicado novamente 
ele retorna à configuração inicial exibindo os dias. */

const toggleTextDays = (days, text, elCSS) => {
  let daysElements = document.querySelectorAll(elCSS);

  for (let index = 0; index < daysElements.length; index += 1) {
    if (daysElements[index].innerText === text) {
      daysElements[index].innerText = days[index];
    } else {
      daysElements[index].innerText = text;
    }
  }
}
addEvListener('#btn-friday', 'click', function (e) { toggleTextDays(fridays, 'Sexta-Feira', '.friday') })
