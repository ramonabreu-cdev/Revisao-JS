// 
const pessoa = {
    nome: 'Rubia',
    idade: 17,
    endereco: {
        rua :15,
        numero : 1042,
        bairro : 'Parque Alvorada',
        cidade : 'Timon-MA'
    }


}

//Quero extrair o nome e a idade
const {nome , idade} = pessoa

console.log(nome, idade)

const {nome :n ,idade: i} = pessoa
console.log(n, i)