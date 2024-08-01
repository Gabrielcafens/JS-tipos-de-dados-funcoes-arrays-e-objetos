const listaEstudantes = ['João', 'Ana', 'Caio', 'Lara', 'Marjorie', 'Leo'];

listaEstudantes.splice(1, 2, 'Rodrigo');
//posição inicial-1, quantidade de elementos a serem removidos-2
//splice altera o proprio array de origem
//adiciona o elemento 'Rodrigo' na posição 1 e remove 2 elementos
console.log(listaEstudantes);
