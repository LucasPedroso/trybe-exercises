// Agora, um passo para trás: vamos fazer, passo a passo, uma Promise
// Primeiramente, instancie uma Promise
// Dentro dela, você deve produzir um array com dez números aleatórios de 1 a 50 e elevá-los todos ao quadrado.
// Se a soma de todos esses elementos for inferior a 8000, a promise deve ser resolvida. Caso contrário, ela deve ser rejeitada. Acresça um then , com um console.log('Promise resolvida') e um catch , com um console.log('Promise rejeitada') à Promise , só para que o código funcione e possamos ver o resultado.
// Tente usar Higher Order Functions! Lembre-se de que tanto uma quanto a outra recebem, como parâmetro, funções!
const randomNumber = (max, min=0) => Math.floor(Math.random() * (max - min)) + min;
const numberPow = (number, pow) => number ** pow;
const sum = (num1, num2) => num1 + num2;
const divForTwoThreeFiveTen = (num) => Array.from([2, 3, 5, 10], (numDiv) => num / numDiv );

const geral = () => new Promise((resolve, reject) => {
  const sumOfPowTenRandomNumbers = Array.from({length: 10}, (_k, _v) => randomNumber(50, 1) ** 2).reduce(sum);

  if (sumOfPowTenRandomNumbers >= 8000) {
    reject(sumOfPowTenRandomNumbers);
  }
  resolve(sumOfPowTenRandomNumbers);
});


const myPromise = async () => {
  try {
    const sumOfPowTenRandomNumbers = await geral(); // Array.from({length: 10}, (_k, _v) => randomNumber(50, 1) ** 2).reduce(sum);
    // console.log('Promise resolvida', sumOfPowTenRandomNumbers);
    const arrayDiv = divForTwoThreeFiveTen(sumOfPowTenRandomNumbers);

    console.log(arrayDiv.reduce(sum));
    return arrayDiv.reduce(sum);
  } catch (error) {
    console.log('Promise rejeitada', error);
    console.log('É mais de oito mil! Essa promise deve estar quebrada!');
  }
}

( async () => console.log(await myPromise())
)();

