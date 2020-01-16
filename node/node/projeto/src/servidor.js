const port = 3003 //Criando uma porta

//Importandoo Express
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const bancoDeDados = require('./bancoDeDados') //Importando o banco de dados

//O bady Parser ira formatar a requisição do tipo POST
app.use(bodyParser.urlencoded({ extended: true })) //Toda requisição feita passará por aqui

app.get('/produtos', (req, res, next) => { //Uma requisição + uma response + uma função Middleware
    res.send(bancoDeDados.getProdutos()) //Converter para JSON
}) 

app.get('/produtos/:id', (req, res, next) => { //Chamando a rota e passando um parametro com :id
    res.send(bancoDeDados.getProduto(req.params.id)) //Passando parametro para a função
}) 

app.post('/produtos', (req, res, next) => { //Metodo que servira para salvar no banco
    const produto = bancoDeDados.salvarProduto({
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.put('/produtos/:id', (req, res, next) => { //Metodo que servira para alterar no banco
    const produto = bancoDeDados.salvarProduto({
        id: req.params.id,
        nome: req.body.nome,
        preco: req.body.preco
    })
    res.send(produto) //JSON
})

app.delete('/produtos/:id', (req, res, next) => { //Metodo que servira para deletar no banco
    const produto = bancoDeDados.deleteProduto(req.params.id)
    res.send(produto) //JSON
})


app.listen(port, () => { //Ira ficar escutando na porta criada
    console.log(`Servidor executando na porta ${port}.`)
}) 