const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];


//array de arrays (lista de alunos e medias) vai ser uma lista de 2 elementos [['João', 'Juliana', 'Caio', 'Ana' ], [ 10, 8, 7.5, 9 ]]
const lista = [alunos, medias];

console.log(
  `a aluna da posição 1 da lista é: ${lista[0][1]}.
  a nota dessa aluna é ${lista[1][1]}`
  );
  //acessando o primeiro elemento da lista (alunos) e o segundo elemento da lista (medias)
  console.log(lista[0]);