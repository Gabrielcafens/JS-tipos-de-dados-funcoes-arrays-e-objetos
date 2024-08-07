import { log } from 'console'
import User from './User.js'

class Admin extends User {
  constructor(nome, email, nascimento, role, ativo = true) {
    super(nome, email, nascimento, role, ativo)
  }
//super é de superclasse, ou seja, ele chama o construtor da classe pai(User)
  exibirInfos() {
    return `${this.nome}, ${this.email}, ${this.role}`
  }
}

const novoAdmin = new Admin('Constance', 'constance.com', '2024-01-01', 'admin')
log(novoAdmin.exibirInfos());
log(novoAdmin)