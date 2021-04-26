const sum = (a, b) => {
  return a + b;
}

const subtraction = (a, b) => {
  return b - a;
}

//Corrigir está função
function isValidRomanNumeral(arrayNumbers ){
  let output = [...arrayNumbers];
 //console.log(output);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] == arrayNumbers[index + 1] &&
        arrayNumbers[index] == arrayNumbers[index + 2] &&
        arrayNumbers[index] == arrayNumbers[index + 3]){
      console.log('Digite um número romano válido.');
      console.log('Não pode repetir uma letra mais que 3 vezes seguidas.');
      return false;
    }
  }
  return true;
}

const romanNumerals = (romanNumerals) => {
  let result = 0;
  let count = 0
  let romanNumeralsObj = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  }

  let array = romanNumerals.split('');
  
  let arrayNum = array.map(letter => {
    for (let index = 0; index < romanNumerals.length; index += 1) {
      for (const i in romanNumeralsObj) {
        if (letter[index] === i) {
          return romanNumeralsObj[i];
        }
      }
    }
  });
  //console.log(isValidRomanNumeral(arrayNum));
  if (!isValidRomanNumeral(arrayNum)) {
    return console.log('Corrigir!');
  }

  for (let index = 0; index < arrayNum.length; index += 1) {
    if (arrayNum[index] >= arrayNum[index + 1] && arrayNum[index + 1] >= arrayNum[index + 2]) {
      result += sum(arrayNum[index], arrayNum[index + 1]);
      index += 1;
    } else if (arrayNum[index] < arrayNum[index + 1]){
      result += subtraction(arrayNum[index], arrayNum[index + 1]);
      index += 1;
    } else {
      result += arrayNum[index];
    }
  }
  console.log(result);
}

console.log();
romanNumerals('MCDLXXXIV'); //1484

const zeroTo999 = (overlineCount) => (acc, currentValue, index, array) => {

};

const makeTheMagic = () => (acc, currentValue, index, array) => { // [ '34', '456', '569' ]
  const result = [];
  const overlineXablau = array.length - 1 - index; // This variable name is Oliva's fault. Apply in CSS for N > 3999
  return acc + currentValue.reduce(zeroTo999(overline
    Xablau), '')
};
class RomanNumerals {
  
  romanNumeralsObselet = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
    'N': Infinity,
  }

  constructor(){
    this.found = false;
    return this;
  }

  /**
   * 
   * @param {String} numberInString 
   * @returns {boolean} Retorna verdadeiro caso seja últimas casas.
   */
  isCheckPoint(numberInString){
    console.log('CARALHO ', numberInString, numberInString % 3,  (numberInString % 3) + 1);
    return ((numberInString.length - 1) % 3) + 1 === 1 || numberInString.length === 1;
  }

  /**
   * 
   * @param {Number} index 
   * @param {Array<Array<String, Number>>} array 
   * @param {String} numberWithPadEnd 
   * @param {Number} numberWithPadEndLength parametro acima
   * @returns 
   */
  setLetters(index, array, numberWithPadEnd, numberWithPadEndLength) {
    const keys = [];
    let indexAnalitics = index;
    if(this.isCheckPoint(numberWithPadEndLength)) {
     // Object.entries(this.romanNumeralsObselet)
      // indexAnalitics -= numberWithPadEndLength + 1;
      console.log('index = ', index, 'indexAnalitics = ', indexAnalitics);
    }
    // console.log(array[index], index, numberWithPadEnd, numberWithPadEndLength);

    if (array[indexAnalitics - 2] ) {
      keys.push(array[indexAnalitics - 2][0]);
      keys.push(array[indexAnalitics - 1][0]);
      keys.push(array[indexAnalitics][0]);
    } else {
      if (array[indexAnalitics - 1]) {
        keys.push(array[indexAnalitics - 1][0]);
        keys.push(array[indexAnalitics - 1][0]);
        keys.push(array[indexAnalitics][0]);
      } else {
        keys.push(array[indexAnalitics][0]);
        keys.push(array[indexAnalitics][0]);
        keys.push(array[indexAnalitics][0]);
      }
    }
    return keys;
  }

  /**
   * 
   * @param {number} num 
   * @returns {String} Retorna o valor em números romanos.
   */ 
  maiorqueMil(num) { //3954
    const numToString = String(num);
    const arraydosDeuses = new Intl.NumberFormat().format(num).replace(',','.').split('.');
    arraydosDeuses.reduce(makeTheMagic, '');


    numToString.reduce((acc, curr, index, array)=> {

      const numActive = numToString.substr(index);
      const numActiveInit = numActive[0];
      const isCheckPoint = this.isCheckPoint(numActive);
      if (isCheckPoint && numActiveInit <= 3) {
        return 'M'.repeat(numActiveInit);
      }
      if (isCheckPoint && numActive.length === 1) {
        return 'I'.repeat(numActiveInit);
      }



    }, '');
    
   return Object.entries(this.romanNumeralsObselet)
          .reduce((acc2, ElKeyValue, index2, arrayFind) => {
            
            const currentValue = ElKeyValue[1];
            const firstNumberInNumberComplete = Number(numberWithPadEnd[0]);
            // console.log('kkkkkkkkkkkkkkkkkkk ', numberWithPadEnd.length);
            const [antecessorKey, previousKey, currentKey] = this.setLetters(index2, arrayFind, numberWithPadEnd, numberWithPadEnd.length - 1);
            // (Number(numberWithPadEnd) > 1000 && this.isCheckPoint(numberWithPadEnd.length - 1))
            if (this.isCheckPoint(numberWithPadEnd.length - 1)){

            }
            // console.log(currentValue,' >= ', Number(numberWithPadEnd), currentValue >= Number(numberWithPadEnd));
            console.log(antecessorKey, previousKey, currentKey);
            if ((currentValue >= Number(numberWithPadEnd) ) && !found) {
              found = true;
              if (currentValue === Number(numberWithPadEnd || this.isCheckPoint(numberWithPadEnd.length -1))) {
                console.log('                  IGUALZINHO = ', currentKey, antecessorKey, previousKey, currentKey);
                return acc2 + currentKey; // igual
              }

              if (firstNumberInNumberComplete === 4 || firstNumberInNumberComplete === 9) {
                console.log('                  IGUAL 4 ou 9 = ', antecessorKey.concat(currentKey), antecessorKey, previousKey, currentKey);
                console.log(numberWithPadEnd.length);
                return (index !== array.length -1)
                  ? acc2 + previousKey.concat(currentKey)
                  : acc2 + antecessorKey.concat(currentKey);

              } else if (firstNumberInNumberComplete > 5) {
                console.log('                  Maior que 5 =', previousKey.repeat(firstNumberInNumberComplete - 5), antecessorKey, previousKey, currentKey);
                return acc2 + previousKey.concat(String(antecessorKey).repeat(firstNumberInNumberComplete - 5));
              }
              console.log('                    DEPOIS DOS IF = ', previousKey.repeat(firstNumberInNumberComplete), antecessorKey, previousKey, currentKey);
              return acc2 + previousKey.repeat(firstNumberInNumberComplete);
            } // MCDLXXXIV

            return acc2;
          }, '');
  }
  
  encode(numbers) {
    return String(numbers) // '1484'  // MCDLXXXIV
      .split('') // [ '1', '4', '8', '4' ]
      .map((el, index, array) => { console.log(el.padEnd(array.length - index, '0')); return el.padEnd(array.length - index, '0')}) // [ '1000', '400', '80', '4' ]
      .reduce((acc, numberWithPadEnd, index, array) => {
        let found = false;
        return acc + Object.entries(this.romanNumeralsObselet)
          .reduce((acc2, ElKeyValue, index2, arrayFind) => {
            
            const currentValue = ElKeyValue[1];
            const firstNumberInNumberComplete = Number(numberWithPadEnd[0]);
            // console.log('kkkkkkkkkkkkkkkkkkk ', numberWithPadEnd.length);
            const [antecessorKey, previousKey, currentKey] = this.setLetters(index2, arrayFind, numberWithPadEnd, numberWithPadEnd.length - 1);
            // (Number(numberWithPadEnd) > 1000 && this.isCheckPoint(numberWithPadEnd.length - 1))
            const isCheckPoint = this.isCheckPoint(currentValue);
            // console.log(currentValue,' >= ', Number(numberWithPadEnd), currentValue >= Number(numberWithPadEnd));
            console.log(antecessorKey, previousKey, currentKey);
            if ((currentValue >= Number(numberWithPadEnd) || isCheckPoint) && !found) {
              found = true;
              if (isCheckPoint && firstNumberInNumberComplete <= 3) return 'M'.repeat(firstNumberInNumberComplete);
              
              if (isCheckPoint && currentValue.length === 1) return 'I'.repeat(firstNumberInNumberComplete);
              

              if (currentValue === Number(numberWithPadEnd || this.isCheckPoint(numberWithPadEnd))) {
                console.log('                  IGUALZINHO = ', currentKey, antecessorKey, previousKey, currentKey);
                return acc2 + currentKey; // igual
              }

              if (firstNumberInNumberComplete === 4 || firstNumberInNumberComplete === 9) {
                console.log('                  IGUAL 4 ou 9 = ', antecessorKey.concat(currentKey), antecessorKey, previousKey, currentKey);
                console.log(numberWithPadEnd.length);
                return (index !== array.length -1)
                  ? acc2 + previousKey.concat(currentKey)
                  : acc2 + antecessorKey.concat(currentKey);

              } else if (firstNumberInNumberComplete > 5) {
                console.log('                  Maior que 5 =', previousKey.repeat(firstNumberInNumberComplete - 5), antecessorKey, previousKey, currentKey);
                return acc2 + previousKey.concat(String(antecessorKey).repeat(firstNumberInNumberComplete - 5));
              }
              console.log('                    DEPOIS DOS IF = ', previousKey.repeat(firstNumberInNumberComplete), antecessorKey, previousKey, currentKey);
              return acc2 + previousKey.repeat(firstNumberInNumberComplete);
            } // MCDLXXXIV

            return acc2;
          }, '');
      }, '');
  }
}
console.log('###########');
const numeroTESTE = 4569
console.log(new RomanNumerals().encode(numeroTESTE)); //MMCMLXXXVI
console.log(new Intl.NumberFormat().format(numeroTESTE).replace(',','.'));
