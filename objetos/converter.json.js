const estudante = require('./estudante.json');

//stringify transforma objetos em strings
const stringEstudante = JSON.stringify(estudante);
// console.log(stringEstudante);
// console.log(typeof stringEstudante);

const objEstudante = JSON.parse(stringEstudante);
//parse retransforma as strings para objetos
console.log(objEstudante);
console.log(typeof objEstudante);
console.log(objEstudante.nome);