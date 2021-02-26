//Após descobrir que increment é uma má prática. =D
//Life Hack num[0] = valor inicial a ser incrementado.
function plusplus(n) {
  const result = [...n];
  let xablau = n;
  xablau[0] += 1;
  return result[0];
}
let array = [];
let num = [];
num[0] = 6;
array[plusplus(num)] = 2;
console.log(num);

array[plusplus(num)] = 3;
console.log(num);

array[plusplus(num)] = 4;
console.log(num);

console.log(array.length);
console.log(array);
