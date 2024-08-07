//função construtora é uma função que cria um objeto com propriedades e métodos
function User (nome, email) {
  this.nome = nome;
  this.email = email;

  this.exibirInfos = function() {
    return `${this.nome}, ${this.email}`
  }
}
//new serve para criar instancia de um objeto numa função construtora
const novoUser = new User('Gabriel', 'j@j.com')
console.log(novoUser.exibirInfos());