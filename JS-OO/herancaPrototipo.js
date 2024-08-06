const user = {
  nome: 'Juliana',
  email: 'j@j.com',
  nascimento: '2024-01-01',
  role: 'estudante',
  ativo: true,
  exibirInfos: function() {
      console.log(this.nome, this.email)
  }
}

  const admin = {
    nome: 'Juliana',
    email: 'j@j.com',
    nascimento: '2024-01-01',
    role: 'estudante',
    ativo: true,
    
    criarCurso: function() {
      console.log('curso criado')
    }
  }
  //admin vai usar como modelo o user para herdar as propriedades
  Object.setPrototypeOf(admin, user)
  admin.criarCurso()
  admin.exibirInfos()
