// Usando o objeto abaixo, faça os exercícios a seguir:

/* 
Imprima no console uma mensagem de boas-vindas para a personagem acima, incluindo seu nome.
Valor esperado no console: Bem-vinda, Margarida */
let info = {
  personagem: "Margarida",
  origem: "Pato Donald",
  nota: "Namorada do personagem principal nos quadrinhos do Pato Donald",
};
console.log(`Bem-vinda, ${info.personagem}`);

/* Valor esperado no console:
Copiar
  {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    recorrente: 'Sim'
  }; */
info['recorrente'] = 'Sim';
console.log(info);