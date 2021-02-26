//let numbers = [2, 4, 6, 22, 70, 8, 100, 2, 34, 28];
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];


/* Nesse primeiro exercício, percorra o array imprimindo todos os 
valores nele contidos com a função console.log() ; */
for (let i = 0; i < numbers.length; i++) {
  console.log('for simples', numbers[i]);
}

numbers.forEach(i => {
  console.log('forEach', i);
});

for (const i in numbers) {
  if (Object.hasOwnProperty.call(numbers, i)) {
    console.log('for in', numbers[i]);
  }
}

/* Para o segundo exercício, você deve somar todos os valores 
contidos no array e imprimir o resultado; */
let somaNumbers = numbers.reduce((a, b) => a + b);
console.log(somaNumbers);

/* Para o terceiro exercício, calcule e imprima a média aritmética 
dos valores contidos no array; */

let mediaNumbers = somaNumbers / numbers.length;
console.log(mediaNumbers);


/* Com o mesmo código do exercício anterior, caso valor final seja maior que 20, 
imprima a mensagem: "valor maior que 20". Caso não seja, imprima a 
mensagem: "valor menor ou igual a 20"; */

if (mediaNumbers) {
  console.log('valor maior que 20');
} else {
  console.log('valor menor ou igual a 20');
}

/* Utilizando for , descubra qual o maior valor contido no array e imprima-o; */
let maiorNumbersArray = 0;
for (let index = 0; index < numbers.length; index += 1) {
  if (numbers[index] > maiorNumbersArray) {
    maiorNumbersArray = numbers[index];
  }
}
console.log(maiorNumbersArray);

/* Descubra quantos valores ímpares existem no array e imprima o resultado. 
Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado"; */

let qtdNumbersImpares = numbers.filter(num => num % 2 == 1).length;
console.log(qtdNumbersImpares ? qtdNumbersImpares : 'nenhum valor ímpar encontrado');

/* Utilizando for , descubra qual o menor valor contido no array e imprima-o; */
let menorNumbers;
for (let index = 0; index < numbers.length; index += 1) {
  if (index == 0) {
    menorNumbers = numbers[index];
  } else if (menorNumbers > numbers[index]) {
    menorNumbers = numbers[index];
  }
}
console.log(menorNumbers);

/* Utilizando for , crie uma array que vá de 1 até 25 e imprima o resultado; */
let array = [];
for (let index = 0; index <= 24; index += 1) {
  array[index] = index + 1;
}
console.log(array);

/* Utilizando o array criado no exercício anterior imprima o resultado da 
divisão de cada um dos elementos por 2 . */

array.forEach(num => console.log(num / 2));

/* BONUS */

/* Estudado e compreendido - referência: 
http://devfuria.com.br/logica-de-programacao/exemplos-na-linguagem-c-do-algoritmo-bubble-sort/ */

let aux = numbers.length - 1;
for (let i = 1; i < aux; i++) {
  console.log("\n[%d] ", i);
  for (let j = 0; j < aux - i; j++) {
    console.log(j);
    if (numbers[i] < numbers[j]) {
      let position = numbers[i];

      numbers[i] = numbers[j];
      numbers[j] = position;
    }
  }
}
console.log(`Numbers Ordenado: ${numbers}`);
