function verifyPalindrome(string){
  const output = string;
  return string == string.split('').reverse().join('');
}

console.log(verifyPalindrome('arara'));

/* Crie uma função que receba um array de inteiros e retorne o índice do maior valor.
Array de teste: [2, 3, 6, 7, 10, 1]; .
Valor esperado no retorno da função: 4 . */

//Referência https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/max
let arrayTest = [2, 3, 6, 7, 10, 1];
function highestValue(array) {
  //let output = array;
  return array.indexOf( array.reduce((a, b) => Math.max(a, b)) );
}
console.log(highestValue(arrayTest));