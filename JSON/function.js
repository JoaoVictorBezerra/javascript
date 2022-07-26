const cliente = {
    nome: "João Victor",
    dataNasc: "01/02/2001",
    cpf: "123",
    fones: {
        tel: 147,
        cel: 741
    },
    dependentes: [{
        nome: "Giovanna Victória",
        parentesco: "Irmã",
        dataNasc: "20/11/2009"
    }, {
        nome: "Daiana Elen",
        parentesco: "Mãe",
        dataNasc: "30/03/1983"
    }, {
        nome: "Diogo Andrade",
        parentesco: "Pai",
        dataNasc: "16/08/1984"
    }],
    saldo: 1000000,
    depositar:function(valor){ // função é utilizada pra dar comportamento a um objeto
        this.saldo += valor
    }
}
console.log(cliente.saldo)
cliente.depositar(200)
console.log(cliente.saldo)