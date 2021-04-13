/* 
1 - Crie uma função de primeira classe que retorna um objeto { nomeCompleto, email } de uma nova pessoa contratada. 
2 - Passe sua função como parâmetro da HOF newEmployees para criar cada pessoa contratada em seu respctivo id .
3 - A sua função deve receber como parâmetro o nome completo da pessoa funcionária e a partir dele gerar automaticamente um email no formato nome_da_pessoa@trybe.com .
 */

const employees = {};
employees['id2']
let id = 1;
// const addEmployee = (id, fullName) => employees[`id${id}`] = fnCallback(fullName);

const newEmployees = (fullName, fnCallback) => {
  employees[`id${id++}`] = fnCallback(fullName);
  return employees;
};

const getEmployess = (id) => {
  return employees[`id${id}`]
}

/**
 * 
 * @param {string} name 
 * @returns 
 */
const setEmail = (name) => `${name.replace(' ', '_').toLowerCase()}@trybe.com`;

const FUNCAOCALLBACK = (nameCompleto) => ({ 
  nameCompleto,
  email: setEmail(nameCompleto),
});

console.log(newEmployees('Pedro Guerra', FUNCAOCALLBACK)); // Lembra do addEventListener('click', funcao-Que-Voce-Quer-Chamar)
console.log(newEmployees('Lucas Lara', FUNCAOCALLBACK));
console.log(newEmployees('Lucas Pedroso', FUNCAOCALLBACK));
console.log(newEmployees('Thiago Souza', FUNCAOCALLBACK));
console.log(getEmployess(2));

/* 
4 - Desenvolva uma HOF que retorna o resultado de um sorteio. 
5 - Esta HOF irá gerar um número aleatório entre 1 e 5 recebendo como parâmetros o número apostado e uma função que checa se o número apostado é igual ao número sorteado. 
6 - O retorno da sua HOF deve ser uma string (Ex: "Tente novamente" ou "Parabéns você ganhou"). */

/**
 * Retorna um valor aleatório entre min e max.
 * Caso não informado o @param(min) ele será 0.
 *
 * @param {number} max Número máximo.
 * @param {number} min Número mínimo.
 * @returns Valor aleatório entre min e max.
 * @version 0.1.0
 */
 const randomNumber = (max, min = 0) =>  Math.floor(Math.random() * (Math.floor(max) - Math.floor(min)) + Math.floor(min));

//const getRandomNumber = () => Math.round(Math.random() * 5);

const hof = (number) => {
  const sorted = randomNumber(6, 1)
  console.log(number, sorted);
  return number === sorted ? "Parabéns você ganhou" : "Tente novamente" ;
}
console.log(hof(4));


// #####################################################################
/* Crie uma HOF utilizando o conceito de currying . 
Passe como parâmetros a resposta correta (Ex: Gabarito) para uma pergunta e uma resposta a ser validada (Ex: Resposta de uma pessoa). 
Sua HOF deve checar se a resposta enviada pela pessoa usuária é correta. Se for, a função retorna true , se não for, a função retorna false .
A validação da resposta não deve ser case sensitive.
Deve ser possível chamar a HOF criada de forma encadeada (Ex: checarResposta('Gabarito')('Teste'))
Copiar */
// Sugestão de respostas a serem validadas.
const correctAnswer = 'higher order function';
const userAnswer = 'HIGHER ORDER FUNCTION';

const checkAnswer = (gabarito) => (resposta) => gabarito.toLowerCase() === resposta.toLowerCase() ? true : false;

console.log(
  checkAnswer(correctAnswer)(userAnswer)
);

/* Crie uma HOF que receberá três parâmetros. O primeiro será um array de respostas corretas (Gabarito), o segundo será um array de respostas a serem checadas (Respostas da pessoa estudante) e o terceiro é uma função que checa se a resposta está correta e faz a contagem da pontuação final recebida pela pessoa estudante. Ao final a HOF deve retornar o total da contagem de respostas certas.
Quando a resposta for correta a contagem sobe 1 ponto, quando for incorreta desce 0.5 pontos, e quando não houver resposta ("N.A") não altera-se a contagem.
Copiar */
const rightAnswers = ['A', 'C', 'B', 'D', 'A', 'A', 'D', 'A', 'D', 'C'];
const studentAnswers = ['A', 'N.A', 'B', 'D', 'A', 'C', 'N.A', 'A', 'D', 'B'];