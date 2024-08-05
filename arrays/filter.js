const alunos = ['Ana', 'Marcos', 'Maria', 'Mauro'];
const medias = [7, 4.5, 8, 7.5];

// Filtrar alunos que reprovaram com base na média
const reprovados = alunos.filter((_, indices) => {
  return medias[indices] < 7;
});

console.log(reprovados); // [ 'Ana' ]
