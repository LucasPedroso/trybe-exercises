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
//Referência MDN e StackOverflow
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

/* Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.
Array de teste: [2, 3, 2, 5, 8, 2, 3]; .
Valor esperado no retorno da função: 2 . */
//Referência https://www.codegrepper.com/code-examples/javascript/how+to+get+the+number+repetetions+in+an+array+javascript
arrayTest = [2, 3, 2, 5, 8, 2, 3];
function moreRepeatedNumber(array) {
  let output =  array.reduce((b,c)=>(
                              (b[b.findIndex(d => d.el === c)]
                              ||b[b.push({el:c,count:0})-1])
                              .count++,b
                              ),[]);

  return highestCountInArrayOfObject(output);
}
console.log(moreRepeatedNumber(arrayTest));

/* //Não apagado para estudos posteriores
uniqueCount = ["a","b","c","d","d","e","a","b","c","f","g","h","h","h","e","a"];
var count = [];
arrayTest.forEach(function(i) { count[i] = (count[i]||0) + 1;});
 */

// Referência ajuda de @Bernardo Salgueiro
function highestCountInArrayOfObject(output) {
  let result = output.reduce((a, b) => {
    if (b.count > a.count) {
      return b;
    }
    return a;
  });
  return result.el;
}