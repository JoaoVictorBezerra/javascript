// Var
/* é uma variável solta, não é utilizada.... */

var altura;
var comprimento;

altura = 5;
comprimento = 7;

var area = altura * comprimento;
console.log(area);

// Let
/* let pode ser usado quando você não coloca valor inicial na variável */
let forma = 'retangulo';
let h = 5;
let b = 7;
let area1;
if (forma === 'retangulo') {
    area1 = h * b;
}
else {
    area1 = (h * b) / 2;
}
console.log(area1);

// Const
/* se usa o const quando já sabe o valor inicial da variável */

const form = 'quadrado';
const height = 5;
const base = 7;
const area2 = altura * comprimento;
if(forma === 'quadrado'){
    area2 = height * base;
} else {
    area2 = (height * base) / 2;
}