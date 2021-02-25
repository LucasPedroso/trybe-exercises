let aliquota = 'Alíquota Máxima';
let aliquotaValor;
let impostoDeRenda;
let impostoParcela;
let salarioLiquido;
let salarioBruto = 3000.00;

//INSS
if (salarioBruto <= 1556.94) {
  aliquota = 8;
  aliquotaValor = salarioBruto * 0.08;
} else if (salarioBruto <= 2594.92) {
  aliquota = 9;
  aliquotaValor = salarioBruto * 0.09;
} else if (salarioBruto <= 5189.82) {
  aliquota = 11;
  aliquotaValor = salarioBruto * 0.11;
} else {
  aliquotaValor = 570.88;
}
salarioLiquido = salarioBruto - aliquotaValor;

//IR
if (salarioLiquido <= 1903.98) {
  impostoDeRenda = 0;
} else if (salarioLiquido >= 1903.99 && salarioLiquido <= 2826.65) {
  impostoParcela = 142.80;
  salarioLiquido -= (salarioLiquido * 0.075) - impostoParcela;
} else if (salarioLiquido <= 2826.65 && salarioLiquido >= 3751.05) {
  impostoParcela = 354.80;
  salarioLiquido -= (salarioLiquido * 0.15) - impostoParcela;
} else if (salarioLiquido >= 3751.05 && salarioLiquido >= 4664.68) {
  impostoParcela = 636.13;
  salarioLiquido -= (salarioLiquido * 0.225) - impostoParcela;
} else {
  impostoParcela = 869.36;
  salarioLiquido -= (salarioLiquido * 0.275) - impostoParcela;
}

console.log(salarioLiquido);
/* 
Uma pessoa que trabalha de carteira assinada no Brasil tem descontados de seu salário 
bruto o INSS e o IR. Faça um programa que, dado um salário bruto, calcule o líquido a ser recebido.
A notação para um salário de R$1500,10, por exemplo, deve ser 1500.10. Para as faixas de impostos, 
use as seguintes referências:

IR
Até R$ 1.903,98: isento de imposto de renda
De R$ 1.903,99 a 2.826,65: alíquota de 7,5% e parcela de R$ 142,80 a deduzir do imposto
De R$ 2.826,66 a R$ 3.751,05: alíquota de 15% e parcela de R$ 354,80 a deduzir do imposto
De R$ 3.751,06 a R$ 4.664,68: alíquota de 22,5% e parcela de R$ 636,13 a deduzir do imposto
Acima de R$ 4.664,68: alíquota de 27,5% e parcela de R$ 869,36 a deduzir do imposto.

Exemplo : Uma pessoa possui o salário bruto de R$ 3.000,00. O cálculo será:

O salário bruto está entre R$ 2.594,93 e R$ 5.189,82, então sua alíquota para INSS é de 11%. O INSS será 11% de R$ 3.000, ou seja, R$ 330,00.
Para descobrir o salário-base, subtraia do salário bruto a alíquota do INSS: R$ 3.000,00 - R$ 330,00 = R$ 2.670,00.
Para pegar o valor do IR, temos um salário (já deduzido o INSS) entre R$ 1.903,99 e 2.826,65, sendo a alíquota, então, de 7.5%, com parcela de R$ 142,80 a deduzir do imposto. Assim, temos:
R$ 2.670,00: salário com INSS já deduzido;
7.5%: alíquota de imposto de renda;
R$ 142,00 parcela a se deduzir do imposto.

Fazendo a conta, temos: (7,5% de R$ 2.670,00) - R$ 142,80 = R$ 57,45

O último cálculo para conseguir o salário líquido é R$ 2.670,00 - R$ 57,45 (salário-base - valor IR) = R$ 2.612,55.
Resultado: R$ 2.612,55.

Dica: que tal identificar as alíquotas com variáveis de nomes explicativos? */