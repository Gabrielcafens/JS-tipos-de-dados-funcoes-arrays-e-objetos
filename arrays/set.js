const nomes = ["Ana", "Clara", "Maria", "Maria", "João", "João", "João"];
//o set parece um array mas não é um array
//precisa transformar o set em um array
const listaNomesAtualizados = [...new Set(nomes)]
// Remove todos os nomes repetidos
//O objeto Set permite que você armazene valores únicos de qualquer tipo, desde valores primitivos a referências a objetos.
console.log(listaNomesAtualizados);
