const estudante = {
  nome: 'José Silva',
  idade: 32,
  cpf: '12312312312',
  turma: 'JavaScript',
  bolsista: true,
  telefones: ['551199999998', '551199999993'],
  endereco: [{
    rua: 'Rua Joseph Climber',
    numero: '45',
    complemento: 'apto 43'
  }]
}

estudante.endereco.push({rua: 'hebert craw',
  numero: '245',
  complemento: ''})



const listaEnderecosComComplemento = estudante.endereco.filter((endereco) => endereco.complemento)
console.log(listaEnderecosComComplemento)