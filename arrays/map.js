const notas = [10, 9.5, 8, 7, 6];

// Adiciona 1 a cada nota

// const notasAtualizadas = notas.map(function (nota) {
//   return nota + 1;
// });
/// ? se for true e : se for false
const notasAtualizadas = notas.map( (nota) => nota + 1 >= 10 ? 10 : nota + 1 >= 9 ? 9 : nota);

// Mostra as notas atualizadas
console.log(notasAtualizadas);