// par Nome Valor

const saudacao = 'Salve' //contexto lexo1

function exec(){
    const saudacao = 'iaewwww' //contexto lexo2

    return saudacao
}

// Objetos são grupos de pares nome/valor

const cliente = {
    nome : 'Ramon',
    idade: 25, 
    endereco: {
        rua :15,
        numero : 1042,
        bairro : 'Parque Alvorada',
        cidade : 'Timon-MA'
    }
    
}
    console.log(saudacao)
    console.log(exec())
    console.log(cliente)