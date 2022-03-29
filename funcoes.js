let x = "";
console.log(x)
x = "Olá";
// Declarar a função
function imprimeTexto (texto) {
    console.log(texto)
}
// Executar a função
imprimeTexto(soma());

function soma() {
    return 2 + 6;
}

console.log(soma());