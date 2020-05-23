//var = escopos: global, função
var numero = 1


//let = escopos:global, função e blocos
{
    //let ficará visível apenas dentro do bloco
    let numero = 2
    console.log('dentro = ', numero)

}

console.log('fora = ', numero)