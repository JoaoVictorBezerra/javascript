// Arrow function
const apresentarArrow = nome => `Meu nome é: ${nome}`;

// Arrow function com mais de uma linha de instrução
const somaNum = (num1, num2) => {
    if(num1 || num2 > 10) {
        return "somente numeros de 1 a 9"
    } else {
        return num1 + num2;
    }
}

// É um jeito rapido e curto de escrever uma função 