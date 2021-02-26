const n = 2;
ast = '*';

if (n > 1) {
  for (let index = 1; index < n; index++) {
    ast += '*';
  }
  for (let index = 0; index < n; index++) {
    console.log(ast);
  }
} else {
  console.log('Número inválido. Digite um número maior que 1.');
}

