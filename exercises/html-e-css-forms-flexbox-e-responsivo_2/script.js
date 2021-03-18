const states = {
  AC: "Acre",
  AL: "Alagoas",
  AP: "Amapá",
  AM: "Amazonas",
  BA: "Bahia",
  CE: "Ceará",
  DF: "Distrito Federal",
  ES: "Espírito Santo",
  GO: "Goías",
  MA: "Maranhão",
  MT: "Mato Grosso",
  MS: "Mato Grosso do Sul",
  MG: "Minas Gerais",
  PA: "Pará",
  PB: "Paraíba",
  PR: "Paraná",
  PE: "Pernambuco",
  PI: "Piauí",
  RJ: "Rio de Janeiro",
  RN: "Rio Grande do Norte",
  RS: "Rio Grande do Sul",
  RO: "Rondônia",
  RR: "Roraíma",
  SC: "Santa Catarina",
  SP: "São Paulo",
  SE: "Sergipe",
  TO: "Tocantins",
};

const fullName = document.querySelector('#name');
const email = document.querySelector('#email');
const cpf = document.querySelector('#cpf');
const address = document.querySelector('#address');
const city = document.querySelector('#city');
const state = document.querySelector('#state');
const typeResidence = document.querySelector('#house');
const curriculum = document.querySelector('#curriculum');
const role = document.querySelector('#role');
const roleDescription = document.querySelector('#roleDescription');
const startDate = document.querySelector('#start-date');

const curriculumPainel = document.querySelector('#curriculum-painel');
const submitButton = document.querySelector('#submitBtn');
const resetButton = document.querySelector('#resetBtn');

/**
 * 
 * @param {Element|string} elementOrQueryCss 
 * @param {string} event 
 * @param {function} fn 
 */
const myAddEventListener = (elementOrQueryCss, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  if (typeof elementOrQueryCss === 'string') {
    const node = document.querySelector(elementNode);
    node.addEventListener(event, fn);
  } else {
    elementOrQueryCss.addEventListener(event, fn);
  }
};

const myAddEventListeners = (elementsNodes, event, fn) => {
  if (typeof fn !== 'function') {
    console.log('O parâmetro fn deve ser uma função.');
    return;
  }
  const nodes = document.querySelectorAll(elementsNodes);
  for (let index = 0; index < nodes.length; index += 1) {
    nodes[index].addEventListener(event, fn);
  }
};

const setStatesInputRadio = () => {
  for (const key in states) {
    if (Object.hasOwnProperty.call(states, key)) {
      const option = document.createElement('option');
      option.setAttribute('value', key);
      option.textContent = states[key];
      state.appendChild(option);
    }
  }
}

const getLabelForInputRadioChecked = (inputParamName) => {
  let radios = document.getElementsByName(inputParamName);
  for (var index = 0; index < radios.length; index += 1) {
      if (radios[index].checked) {
        return document.querySelector(`[for=${radios[index].value}`).textContent;
      }
  }
};

const getLabelforInput = (element) => {
  return document.querySelector(`[for=${element.name}`).textContent
};

const generatePainel = (ev) => {
  ev.preventDefault();

  const curriculumPainelInsert = {
    'Nome' : fullName.value,
    'Email:' : email.value,
    'CPF:' : cpf.value,
    'Endereço:' :address.value,
    'Cidade:' : city.value,
    'Estado:' : state.value,
    'Tipo:' : getLabelForInputRadioChecked('typeResidence'),
    'Currículo:' : curriculum.value,
    'Cargo:' : role.value,
    'Descrição do Cargo:' : roleDescription.value,
    'Data de Início:' : startDate.value,
  }

  for (const key in curriculumPainelInsert) {
    if (Object.hasOwnProperty.call(curriculumPainelInsert, key)) {
      const label = document.createElement('label');
      label.textContent = key;

      const element = document.createElement('div');
      element.classList.add('inline');
      element.textContent = curriculumPainelInsert[key];

      const br = document.createElement('br');
      
      curriculumPainel.appendChild(label);
      curriculumPainel.appendChild(element);
      curriculumPainel.appendChild(br);
    }
  }
}

const clearFormAndPainel = () => {
  curriculumPainel.innerHTML = '';
}

setStatesInputRadio();

myAddEventListener(submitButton, 'click', generatePainel);
myAddEventListener(resetButton, 'click', clearFormAndPainel);
