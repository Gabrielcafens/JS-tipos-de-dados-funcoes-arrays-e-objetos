const estudantes = require('./estudantes.json');

function buscaInformacao(lista, chave, valor) {
//vai procurar em cada um dos estudantes do meu json com base na chave e valor que eu passar e vai me retornar o estudante que tiver essa chave e valor
return lista.find(estudante => estudante[chave].includes(valor));
}
//includes para verificar se o valor está contido na chave mesmo sendo um array ou uma string
const estudanteEncontrado = buscaInformacao(estudantes, 'nome', 'Juliet');
console.log(estudanteEncontrado);

const telefoneEstudante = buscaInformacao(estudantes, 'telefone', '1198123183');
console.log(telefoneEstudante);
