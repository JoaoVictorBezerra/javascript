const salaJS = [7,8,6,4,2,1,10];
const salaJava = [10,3,3.5,4,9];
const salaC = [5,4,9,8,2,7];

function mediaSala(notasSala) {
    const somaNotas = notasSala.reduce((acumulador, atual) =>
    atual + acumulador, 0)
    return somaNotas / notasSala.length;
}
console.log(`Média da sala de JS ${mediaSala(salaJS)}`);
console.log(`Média da sala de JS ${mediaSala(salaJava)}`);
console.log(`Média da sala de JS ${mediaSala(salaC)}`);