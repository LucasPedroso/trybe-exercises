let text = 'BISHOP';

result = text.toLowerCase();

if (result == 'bispo') {
  console.log('Diagonal');
} else if (result == 'cavalo') {
  console.log('Se move em forma de "L" (pode pular peças)');
} else if (result == 'torre') {
  console.log('Horizontal');
} else if (result == 'rainha') {
  console.log('Diagonal e horizontal');
} else if (result == 'rei') {
  console.log('Diagonal e horizontal(1 casa)');
} else if (result == 'peao') {
  console.log('Horizontal(1 casa), diagonal(1 casa) para captura.');
} else {
  console.log('Não é uma peça válida.')
} 