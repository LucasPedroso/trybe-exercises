const n = 5;
ast = '*';

/* Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, 
seja n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . */
if (n > 1) {
  for (let index = 1; index < n; index += 1) {
    ast += '*';
  }
  for (let index = 0; index < n; index += 1) {
    console.log(ast);
  }
} else {
  console.log('Número inválido. Digite um número maior que 1.');
}

/* Para o segundo exercício, faça o mesmo que antes, mas que imprima um triângulo retângulo 
com 5 asteriscos de base. */
console.log('===================================');
ast = '*';
for (let index = 0; index < n; index += 1) {
  console.log(ast);
  ast += '*';
}

/* Agora inverta o lado do triângulo. */
console.log('===================================');

ast = '*';
let position = n;
for (let index = 1; index < n; index += 1) {  
  let space = ' ';

  for (let j = 1; j < position; j++) {
    space += ' ';
    console.log(j);
  }
  position--;
  space += ast;
  console.log(space);
}
