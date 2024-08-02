const alunos = ['João', 'Juliana', 'Caio', 'Ana'];
const medias = [10, 8, 7.5, 9];

// Lista Multidimensional
const lista = [alunos, medias];

function exibeNomeENota(aluno) {
  if (lista[0].includes(aluno)) {
    // Desestruturação dos arrays 'alunos' e 'medias' a partir do array 'lista'
    const [alunos, medias] = lista; // Aqui, estamos "desempacotando" os arrays 'alunos' e 'medias' do array 'lista'
    
    // Obtemos o índice do aluno no array 'alunos'
    const indice = alunos.indexOf(aluno);
    
    // Usamos o índice para obter a média correspondente no array 'medias'
    const mediaAluno = medias[indice];
    
    // Exibimos o nome do aluno e sua média
    console.log(`${aluno} tem a média ${mediaAluno}`); // Corrigido para usar template literals corretamente
  } else {
    // Caso o aluno não esteja na lista, exibimos uma mensagem de erro
    console.log('Estudante não existe na lista');
  }
}

// Chamadas de teste da função
exibeNomeENota('Juliana'); // Deve exibir: "Juliana tem a média 8"
exibeNomeENota('Vini'); // Deve exibir: "Estudante não existe na lista"
