//Hoisting é o "Jogar pra cima"

console.log('a = ', a)

var a = 2

console.log('a = ', a)

//testando em uma função

function teste() {

    console.log('b = ', b)

    var b = 2

    console.log('b = ', b)
}
teste()