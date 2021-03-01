function verifyPalindrome(string){
  const output = string;
  return string == string.split('').reverse().join('');
}

console.log(verifyPalindrome('arara'));