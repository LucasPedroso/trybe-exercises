const sum = (a, b) => {
  return a + b;
}

const subtraction = (a, b) => {
  return b - a;
}

//Corrigir está função
function checkRomanNumeral(arrayNumbers ){
  let output = [...arrayNumbers];
  console.log(output);
  for (let index = 0; index < arrayNumbers.length; index += 1) {
    if (arrayNumbers[index] == arrayNumbers[index + 1] &&
        arrayNumbers[index] == arrayNumbers[index + 2] &&
        arrayNumbers[index] == arrayNumbers[index + 3]){
      console.log('Digite um número romano válido.');
      console.log('Não pode repetir uma letra mais que 3 vezes seguidas.');
      return false;
    }
  }
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

  if (checkRomanNumeral(arrayNum)) {
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

romanNumerals('MCDLXXXIV'); //1484
