const n = 8;
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

ast = '*';
for (let index = 0; index < n; index += 1) {
  console.log(ast);
  ast += '*';
}

//* Agora inverta o lado do triângulo. */

for (let index = 1; index <= n; index += 1) {  
  let space = ' ';
  let ast2 = '*';
    const asteriscos = ast2.repeat(index);
    const result = space.repeat(n - index).concat(asteriscos);
    console.log(result);
}

/* Depois, faça uma pirâmide com n asteriscos de base: */

let positionCount;

if (n % 2 === 1) {
  positionCount = 1;
} else {
  positionCount = 2;
}

for (let index = 1; index <= Math.ceil(n / 2); index += 1) {  
  let spaceBlank = (n - positionCount) / 2;

  let space = ' ';
  let ast2 = '*';

  const asteriscos = ast2.repeat(positionCount);
  const result = space.repeat(spaceBlank).concat(asteriscos);

  positionCount += 2;
  console.log(result);
}

/* Faça uma pirâmide com n asteriscos de base que seja vazia no meio. 
Assuma que o valor de n será sempre ímpar: */

/* Por último, façamos com que a variável seja incrementada com o valor correspondente a cada loop;
n = 7 */

if (n % 2 === 1) {
  positionCount = 1;
} else {
  positionCount = 2;
}

for (let index = 1; index <= Math.ceil(n / 2); index += 1) {  
  let spaceBlank = (n - positionCount) / 2;
  let spaceBlankMid, result;
  let space = ' ';
  let ast2 = '*';

  const asteriscos = ast2.repeat(positionCount);

  if (positionCount === n) {
    result = space.repeat(spaceBlank).concat(asteriscos);
    
  } else if (positionCount > 1) {
    spaceBlankMid = space.repeat(positionCount - 2)
    result = space.repeat(spaceBlank)
                        .concat(ast2)
                        .concat(spaceBlankMid)
                        .concat(ast2)
                        .concat(space.repeat(spaceBlank));
  } else {
    spaceBlankMid = space.repeat(positionCount);
    result = space.repeat(spaceBlank)
                        .concat(ast2)
                        .concat(space.repeat(spaceBlank));
  }
  
  
  positionCount += 2;
  console.log(result);
}