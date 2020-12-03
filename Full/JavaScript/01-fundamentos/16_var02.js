//esqueça o escopo global!!!!!

//definida a primeira
var numero = 1

{
    //var assume 2
    var numero = 2
    console.log('dentro=', numero)
}
console.log('fora=', numero)