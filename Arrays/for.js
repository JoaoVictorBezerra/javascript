// // Estrutura de repetição FOR

// const numeros = [100, 200, 300, 400, 500, 600];

// for (let i = 0; i < numeros.length; i++) {
//     console.log(i, numeros[i])
// }

// const notas = [10, 6.5, 8, 7.5];
// let somaNotas = 0;
// for (let i = 0; i < notas.length; i++)
// {
//     somaNotas += notas[i]
// }
// console.log(somaNotas / notas.length);


// For each (callback) - uma função que chama outra função

// notas.forEach(function(notas) 
// {
//     somaNotas += nota;
// })
// const notas = [10, 6.5, 8, 7.5];
// let somaNotas = 0;
// notas.forEach(notas => {
//     somaNotas += notas
// })
// let media = somaNotas / notas.length;
// console.log(media)

// const nomes = ["João", "Victor", "Bezerra"];
// nomes.forEach(imprimeNome)
// function imprimeNome(nomes) {
//     console.log(nomes)
// }

const notas = [10, 9, 8, 7, 6];
const notasAtualizadas = notas.map(nota => nota == 10 ? nota : ++nota)
console.log(notasAtualizadas)