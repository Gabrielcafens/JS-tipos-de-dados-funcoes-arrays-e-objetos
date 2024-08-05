const estudantes = require('./estudantes.json');

function ordena(lista, propriedade) {
    return lista.sort((a, b) => {
    if (a[propriedade] < b[propriedade]) return -1;
    if (a[propriedade] > b[propriedade]) return 1;
    return 0;
    })
} 
//metodo sort tem duas formas de ser usado
//a primeira forma é possuir um array de strings 
//e a segunda é passar uma função de comparação
const listaOrdenada = ordena(estudantes, 'nome');
console.log(listaOrdenada);