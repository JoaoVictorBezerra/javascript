const cliente = {
    nome: "João",
    idade: 21,
    cpf: "777",
    email: "dev.joaovictor@hotmail.com",
    fones: {
        telefone: "123",
        celular: "123"
    },
    dependentes: [{
        nome: "Giovanna",
        idade: "12"
    }]
}
// cliente.dependentes = {
//     nome: "Giovanna",
//     idade: "12"
// }
console.log(cliente)

cliente.dependentes.push({
    nome: "bene",
    idade: "1"
})
console.log(cliente)

// criando filtro

const depMaisNovo = cliente.dependentes.filter(dependente => dependente.idade==="1")
console.log(depMaisNovo)