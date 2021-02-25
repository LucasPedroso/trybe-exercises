let valorCusto = 33.0;;
let valorVenda = 100.0;

if (valorCusto < 0 || valorVenda < 0) {
  console.log('Valor não pode ser menor que 0.');
} else {
  let impostoSobreOCusto = valorCusto * 0.2;
  let valorCustoTotal = valorCusto + impostoSobreOCusto;
  let lucro = valorVenda - valorCustoTotal;
  let lucroSobreMilProdutos = lucro * 1000;
  console.log(lucroSobreMilProdutos);
}

