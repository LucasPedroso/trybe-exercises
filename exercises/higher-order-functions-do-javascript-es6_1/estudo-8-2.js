

// const imprimir = (a) => {
//   console.log('Cada elemento do array:', a);
// };

// /* arrayOfValues.forEach((el) => {  // Ex: el = arrayOfValues[index] que roda dentro de um for
//   console.log('Cada elemento do array:', el);
// }); */

// const arrayOfValues = ['josé', 50, 0.25, { comida: 'Chocolate' }];
// const imprimirElementos = (element, index, arrayOfValues) => console.log(`O ${element} é igual ao ${arrayOfValues[index]}`);
// /* 
// const imprimirElementosExplicandoADiferencaComReturnESemReturn = (element, index, arrayOfValues) => { 
//   return console.log(`O ${element} é igual ao ${arrayOfValues[index]}`); 
// }; */

// const imprimirComoObject = (element, index, arrayOfValues) => console.log({
//   element: element,
//   index,
//   arrayOfValues,
//   arrayOfValuesIndex: arrayOfValues[index]
// });

// const imprime = (element) => console.log(element)

// arrayOfValues.forEach((element, index, arrayOfValues) => console.table(
//   {
//     element: element,
//     index: index,
//     arrayOfValues: arrayOfValues,
//     arrayOfValuesIndex: arrayOfValues[index]
//   }
// ));

// ######################################################################
const numbers = [19, 21, 30, 3, 45, 22, 15];

const verifyEven = (number) => number % 2 === 0;

const isEven = numbers.find(verifyEven);

console.log(isEven); // 30

console.log(verifyEven(9)); // False
console.log(verifyEven(14)); // True

// Outra forma de ser realizada sem a necessidade de criar uma nova função.
const divisi = (number) => number % 2 === 0
const isEven2 = numbers.find(divisi);
console.log(numbers.sort((a, b)=> a - b));
