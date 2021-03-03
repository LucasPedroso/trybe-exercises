function add(num1, num2) {
  let numero1 = String(num1);
  let numero2 = String(num2);
  let result = 0;
  let output = [];
  let numLength;
  let maiorNumero;
  let menorNumero;

  if (numero1.length >= numero2.length) {
    maiorNumero = numero1;
    menorNumero = numero2;
    numLength = numero1.length;
  } else {
    maiorNumero = numero2;
    menorNumero = numero1;
    numLength = numero2.length;
  }
  
  let aux = maiorNumero.length - menorNumero.length;

  for (let index = numLength - 1; index >= 0; index--) {
    if(index >= aux) {
      result = Number(maiorNumero[index]) + Number(menorNumero[index - aux]);
    } else {
      result = Number(maiorNumero[index]);
    }
    output.push(result)
  }

  return output.reverse().join('');
}

console.log(add(16, 18));