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

console.log(somaNumbers / numbers.length);
