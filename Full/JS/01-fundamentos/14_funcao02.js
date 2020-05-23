//Armazenamento de uma função

const imprimirSoma = function(a, b) {
    console.log(a + b)
}
imprimirSoma(5, 2)

//Armazenando uma fun arrow em uma variável
const soma = (a, b) => {
    return a + b
}
console.log(soma(5, 2))

//Retorno implícito
const subtra = (a, b) => a - b
console.log(subtra(5, 2))