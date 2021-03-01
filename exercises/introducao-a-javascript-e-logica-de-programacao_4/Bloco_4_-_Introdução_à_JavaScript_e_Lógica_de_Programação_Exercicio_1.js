// Usando o objeto abaixo, faça os exercícios a seguir:

/* 
Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem-vinda, Margarida */
let info = {
  personagem: 'Margarida',
  origem: 'Pato Donald',
  nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
};
console.log(`Bem-vinda, ${info.personagem}`);

/* Valor esperado no console:

  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }; */
info['recorrente'] = 'Sim';
console.log(info);

/* 
Faça um for/in que mostre todas as chaves do objeto.
Valor esperado no console:

  personagem
  origem
  nota
  recorrente */
for (const key in info) {
  console.log(key);
}

/* Faça um novo for/in , mas agora mostre todos os valores das chaves do objeto.
Valor esperado no console:

  Margarida
  Pato Donald
  Namorada do personagem principal nos quadrinhos do Pato Donald
  Sim */
for (const key in info) {
  console.log(info[key]);
}

/* Agora, defina um segundo objeto com a mesma estrutura (as mesmas chaves) do primeiro e os seguintes valores: "Tio Patinhas", "Christmas on Bear Mountain, Dell's Four Color Comics #178", "O último MacPatinhas", "Sim".
Valor esperado no console:
Copiar
Margarida e Tio Patinhas
Pato Donald e Christmas on Bear Mountain, Dell's Four Color Comics #178
Namorada do personagem principal nos quadrinhos do Pato Donald e O último MacPatinhas
Ambos recorrentes // Atenção para essa última linha! */
let info2 = {
  personagem: 'Tio Patinhas',
  origem: "Christmas on Bear Mountain, Dell's Four Color Comics #178",
  nota: 'O último MacPatinhas',
  recorrente: 'Sim'
};

for (const key in info, info2) {
  if (info[key] === info2[key]) {
    console.log('Ambos recorrentes');
    continue;
  }
  console.log(`${info[key]} e ${info2[key]}`);
}