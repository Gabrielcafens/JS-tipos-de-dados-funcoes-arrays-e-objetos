const notaFinal = 7;
const faltas = 3;
const advertencias = 0;

if (notaFinal < 7 && faltas > 4 ) {
    console.log('reprovado, boas festas');
} else {
    console.log('não foi reprovado por falta');
}
//negando um valor falso se torna verdadeiro
if (faltas >= 2 && !advertencias) {
    console.log('recebeu bonificação');
} else {
    console.log('nao recebeu bonificação');
}