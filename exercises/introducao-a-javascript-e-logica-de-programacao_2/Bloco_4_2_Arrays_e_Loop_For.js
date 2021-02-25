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

