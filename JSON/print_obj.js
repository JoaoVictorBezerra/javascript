
// const listaCPF = ["123", "456", "789"]

const cliente = {
    nome: "João",
    idade: 21,
    cpf: "777",
    email: "dev.joaovictor@hotmail.com"
}

console.log(`Meu nome é ${cliente.nome}, e tenho ${cliente.idade} anos`)
console.log(cliente.cpf.substring(0, 3)+".***.***-**")