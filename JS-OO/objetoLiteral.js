const user = {
  nome: 'Gabriel',
  email: 'j@j.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,
  exibirInfos: function() {
      console.log(this.nome, this.email)
  }
}

const exibir = function() {
  console.log(this.nome, this.email)
}

const exibirNome = user.exibirInfos.bind(user)
exibirNome();