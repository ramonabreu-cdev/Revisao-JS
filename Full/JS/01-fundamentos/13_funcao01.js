//função é uma ação,executando uma sequência de códigos

//fun sem retorno
function imprimeSoma(a, b) {
    console.log(a + b)
}
imprimeSoma(20, 5)

//fun com retorno
function soma(a, b = 2) {
    return a + b
}
console.log(soma(2, 3))
console.log(soma(2))