
const cliente = {
    nome: "João",
    idade: 21,
    cpf: "777",
    email: "dev.joaovictor@hotmail.com",
}
cliente.fone = "123456"
const campos = ["nome", "idade", "cpf", "email", "fone"]
campos.forEach(index => console.log(cliente[index]))