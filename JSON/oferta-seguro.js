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


// let relatorio = "";

// for(let info in cliente){
//     relatorio += ` ${cliente[info]} -`
// }
// console.log(relatorio)


let relatorio = "";

for(let info in cliente){
    if(typeof cliente[info] === 'object' || typeof cliente[info] === "function") {
        continue
    }
    else { // aceita quebra de linha
        relatorio += ` 
        ${info} = ${cliente[info]}
        `
    }
}
// console.log(relatorio)


function ofertaSeguro(obj) {
    const propsClientes = Object.keys(obj) // descobrindo o conteúdo do objeto
    if(propsClientes.includes("dependentes")){
        console.log(`Oferta de seguro de vida para ${obj.nome}`)
    }
    else {
        console.log("N/I")
    }
}
console.log(Object.values(cliente)) // saber o valor dos conteúdos do objetos
console.log(Object.entries(cliente)) // descobrir o conteúdo e valores
ofertaSeguro(cliente)