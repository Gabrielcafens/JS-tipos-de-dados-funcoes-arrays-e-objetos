const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript'
}
//notação de ponto para acessar o objeto para estudante.nome
//objeto é sempre composto de dupla de chave e valor(string, numero, booleano)
console.log(estudante.nome); // José Silva
console.log(`o nome de estudante é ${estudante.nome}`);
console.log(`os tres primeiros numeros do cpf são ${estudante.cpf.substring(0,3)}`);
//0 e 3 pq exclui o ultimo numero


