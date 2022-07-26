// Localizando alunos
const alunos = ['João','Juliana','Caio','Ana']; // [0]
const mediaAlunos = [10,7,9,6]; // [1]
let listaDeNotasEAlunos = [alunos, mediaAlunos];

// Includes -> retorna V ou F, neste caso se existe 'João' na variável ALUNOS
// IndexOf - > retorna número, ou seja, vai retornar o

const exibeNomeNota = (nomeDoAluno) => {
    if(listaDeNotasEAlunos[0].includes(nomeDoAluno)) { // Include retorna bool
        let indice = listaDeNotasEAlunos[0].indexOf(nomeDoAluno) // IndexOf retorna a posição do nome
                               // [0][1]                                [1][0]
        return listaDeNotasEAlunos[0][indice] + ', sua média é: ' + listaDeNotasEAlunos[1][indice];
    } else {
        return "Aluno não encontrado"
    }
}
console.log(exibeNomeNota("Juliana"));