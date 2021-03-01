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
  return array.indexOf( array.reduce((a, b) => Math.max(a, b)) );
}
console.log(highestValue(arrayTest));

/* Crie uma função que receba um array de inteiros e retorne o índice do menor valor.
Array de teste: [2, 4, 6, 7, 10, 0, -3]; .
Valor esperado no retorno da função: 6 . */
arrayTest = [2, 4, 6, 7, 10, 0, -3];
function lowerValue(array) {
  return array.indexOf( array.reduce((a, b) => Math.min(a, b)) );
}
console.log(lowerValue(arrayTest));

/* Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.
Array de teste: ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana']; .
Valor esperado no retorno da função: Fernanda . */
arrayTest = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];
function highestString(array) {
  return array.reduce((a, b) => {
                                  if (a.length > b.length) { //Evitando o operador ternário
                                    return a
                                  } else {
                                    return b;
                                  }        
                                });
}
console.log('highString ' + highestString(arrayTest));