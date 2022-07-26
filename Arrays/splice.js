// SPLICE

const listaChamada = ['João', 'Bernardo', 'Pedro', 'Juliana','Caio','Ana','Joaquim','Marcos','Julio','Mariana']

listaChamada.splice(1, 2, 'Rodrigo'); // removendo Bernardo(1), Pedro(2) e adicionando o Rodrigo
listaChamada.splice(2, 0, 'Bernardo') // adicionando Rodrigo entre Pedro(2) e Juliana(3)
console.log(`Lista de chamada: ${listaChamada}`);