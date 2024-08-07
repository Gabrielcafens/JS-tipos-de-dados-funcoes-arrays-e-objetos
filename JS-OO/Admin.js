import { log } from 'console'
import User from './User.js'
//super é de superclasse, ou seja, ele chama o construtor da classe pai(User)
export default class Admin extends User {
  constructor(nome, email, nascimento, role = "admin", ativo = "true") {
    super(nome, email, nascimento, role, ativo)
  }

  criarCurso(nomeCurso, qtdVagas) {
    return `curso ${nomeCurso} criado com ${qtdVagas} vagas.`
  }
}

const novoAdmin = new Admin("Rodrigo", "r@r.com", "2024-01-01")
console.log(novoAdmin);
console.log(novoAdmin.criarCurso('JavaScript', 20));