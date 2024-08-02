const notas = [10, 8.5, 5 , 6.5, 8, 7.5];
//primeira expressão executada apenas uma vez 'let indice = 0;'
//segunda expressão é a condição que vai ser avaliada a cada iteração 'indice < notas.length;'
//terceira expressão é executada após o bloco de código ser executado 'indice++'
//o bloco de código é executado enquanto a condição for verdadeira
//o bloco de código é executado para cada elemento do array
//o índice é o número do elemento no array

for (let indice = 0; indice < notas.length; indice++) {
  console.log(indice, notas[indice]);
  console.log(`nota ${indice + 1}: ${notas[indice]}`);
}