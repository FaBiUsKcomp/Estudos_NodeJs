const fs = require('fs') //Pegando uma referencia do FileSystem (default node)

// '__dirname' guarda o endereço do diretorio atual, presente em todos os path's do Node
const caminho =__dirname + '/arquivo.json' //Definindo o arquivo que será lido

//Lendo de forma sincrona...
const conteudo = fs.readFileSync(caminho, 'utf-8') //Le em forma de String
console.log(conteudo)

//Lendo de forma assincrona...
fs.readFile(caminho, 'utf-8', (err, conteudo) => {
    const config = JSON.parse(conteudo)
    console.log(`${config.db.host}:${config.db.port}`)
})

//Lendo arquivo JSON de forma mais facil
const config = require('./arquivo.json')
console.log(config.db)

//Lendo pastas
fs.readdir(__dirname, (err, arquivos) => {
     console.log('Conteudo da pasta...')
     console.log(arquivos)
})
