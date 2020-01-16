const fs = require('fs') //Iniciando o leitor/escritor

const produto = {
    nome: "Celular",
    preco: 1249.99,
    desconto: 0.15
}

//Escrevendo no arquivo (diretorio seguido do nome do arquivo que sera gerado, oq sera escrito, callback)
fs.writeFile(__dirname + '/arquivoGerado.json', JSON.stringify(produto), err => {
    console.log(err || 'Arquivo Salvo!')
})