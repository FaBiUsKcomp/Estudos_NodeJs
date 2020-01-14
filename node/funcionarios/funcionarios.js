const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios') // O axios faz requisições http

axios.get(url).then(response => {
    const funcionarios = response.data //Pegando tudo que esta dentro do arquivo .json

    // Desafio : Obter a mulher chinesa com melhor salário

    // Resolução

    //Função que seleciona genero feminino
    const selecionaFeminino = pessoa => pessoa.genero === 'F'

    //Função que seleciona chinesa
    const selecionaChinesa = pessoa => pessoa.pais === 'China'

    //Função que seleciona menor entre dois
    const menorEntreDois = (anterior, atual) => anterior.salario < atual.salario ? anterior: atual

    //Seleciona mulher chinesa com menor salario
    const mulherMenorSalario = funcionarios.filter(selecionaChinesa).filter(selecionaFeminino).reduce(menorEntreDois)
    console.log(mulherMenorSalario)
})
