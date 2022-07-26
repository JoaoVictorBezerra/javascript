// SLICE

const nomes = ['João', 'Bernardo', 'Pedro', 'Juliana','Caio','Ana','Joaquim','Marcos','Julio','Mariana']

const sala1 = nomes.slice(0, nomes.length/2); // começa em 0 e vai até 2 (nomes.length / 2)
const sala2 = nomes.slice(nomes.length/2);

console.log(`Alunos da sala 1: ${sala1}`);
console.log(`Alunos da sala 2: ${sala2}`);

console.log(nomes.length);