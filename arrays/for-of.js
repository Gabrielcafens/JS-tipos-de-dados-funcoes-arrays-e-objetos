const notas = [10, 6.5, 8, 7.5];
let somaDasNotas = 0;
//let nota armazena o elemento do array
//aqui a variável nota é declarada e inicializada com o valor do primeiro elemento do array
//o bloco de código é executado para cada elemento do array
//a variável nota recebe o valor do próximo elemento do array
for (let nota of notas) {
  somaDasNotas += nota;
}

const media = somaDasNotas / notas.length;

console.log(`A média das notas é: ${media.toFixed(2)}`);