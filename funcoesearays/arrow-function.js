
const estudanteReprovou =  (notaFinal, faltas)  =>{
  if(notaFinal < 7 && faltas > 4) {
      return true;
  }else {
      return false;
  }
}
  //arrow function utilizada mais em callbacks para funções anônimas
const exibeNome = (nome) => nome;

console.log(estudanteReprovou(6, 5));
console.log(estudanteReprovou(8, 3));