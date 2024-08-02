const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;
//aqui a variável i é declarada e inicializada com 0
//aqui a condição é avaliada, se for verdadeira o bloco de código é executado
//aqui a variável i é incrementada em 1
//o bloco de código é executado para cada elemento do array
//o índice é o número do elemento no array
for (let i = 0; i < notas.length; i++) {
  somaDasNotas += notas[i];
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media.toFixed(2)}`);