const nome = 'Ramon'
const concat = 'olá' + nome + '!'
const template = `
    olá
    ${nome}!`
console.log(concat, template)

// expressões
console.log(`1 + 1 = ${1+ 1}`)

//Transformando pra maiúsculo
const up = texto => texto.toUpperCase()
console.log(`ei...${up("cuidado com o covid-19 !")}`)