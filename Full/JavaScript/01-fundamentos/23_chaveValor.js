const saudacao = 'salvee' //definição dentro dentro de um contexto llexico1
function exec() {
    const saudacao = 'iaew' //contexto lexico 2
    return saudacao
}

//Objetos  sãogrupos alinhados de chave/ valor
//observe!!!

const cliente = {
    nome: 'Ramon',
    idade: 25,
    peso: 63,

}

console.log(saudacao)
console.log(exec())
console.log(cliente)