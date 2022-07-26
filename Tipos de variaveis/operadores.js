/* Operadores de comparação; 
   == (comparação implicita) - Compara valor */
// const numero = 5;
// const texto = "5";
// console.log(numero == texto);

/* Operadores de comparação;
   === (comparação explicita) - Compara valor e tipo de dado */
const numero = 5;
const texto = "5";
console.log(numero === texto);

/* TYPEOF - saber o tipo da variavel */
console.log(typeof numero);
console.log(typeof texto);

/* Operador ternário */
const idadeMinima = 18;
const idadeCliente = 16;
// IF
if (idadeCliente >= idadeMinima) {
    console.log("Cerveja")
} else {
    console.log("Suco de Laranja")
}
//                    condição             true             false
console.log(idadeCliente >= idadeMinima ? "Cerveja" : "Suco de Laranja");

/* Template literal */
const nome = "João";
const idade = 21;
const cidade = "Santos";
// const apresentacao = "Meu nome é: " + nome + ", nasci na cidade de " + cidade + ", e a minha idade é: " + idade;
// console.log(apresentacao);

const apresentacao = `Meu nome é: ${nome}, minha idade é ${idade}, nasci na cidade de: ${cidade}`;
console.log(apresentacao);