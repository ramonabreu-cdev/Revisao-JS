#importa as blibliotecas necessárias
#Flask e Request
from flask import Flask , request


#importanto o insert(função)

from main import insertUsuario


#Chamo a Api e aplico um nome
app = Flask("Cadastro")

#rota GET
@app.route("/olamundo", methods=["GET"])
def olaMundo():
    return{"ola": "mundo"}

#rota POST
@app.route("/cadastra/usuario", methods=["POST"] )
def cadastraUsuario():

    #incluoo um body com o request anteriormente importado
    body = request.get_json()

    #fazendo as verificações
    if("nome" not in body):
        return greraRespose(400, "Parâmetro nome é obrigatório") 

    if("email" not in body):
        return greraRespose(400, "Parâmetro email é obrigatório")    

    if("senha" not in body):
        return greraRespose(400, "Parâmetro senha é obrigatório")       

    #mapeia
    usuario = insertUsuario(body["nome"], body["email"], body["senha"])

    #printo na tela
  
    #Aqui tenho o retorno
    return geraResponse(200, "usuario criado", "user",usuario)

    #retornando mensagens
def geraResponse(status, mensagem, nome_do_conteudo =False, conteudo =False):
    response = {}
    response["status"] = status
    response["mensagem"] = mensagem

        #Adicionando as condições para o conteúdo:
    if(nome_do_conteudo and conteudo):
        response[nome_do_conteudo] = conteudo

    return response

app.run()