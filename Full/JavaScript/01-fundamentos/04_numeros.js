//definimos uma constate
const peso1 = 2.0

// outro método
const peso2 = Number('4.0')

//imprimindo
console.log(peso1, peso2)

//pra saer se é um valor inteiro

console.log(Number.isInteger(peso1))

//exemplificando
const aval1 = 9.37
const aval2 = 7.58

const final = aval1 * peso1 + aval2 * peso2
const media = final / (peso1 + peso2)
console.log(media)

//controlando as casas decimais:

console.log(media.toFixed(2))