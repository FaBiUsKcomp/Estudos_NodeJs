//Observe que aqui estamos exportando o Objeto inteiro de uma só vez
//Somente aquilo que exportamos é visivel de fora (observe que o 'a' nao sera visivel)
let a = 2

module.exports = {
    bomDia: 'Bom Dia',
    boaNoite () {
        return 'Boa Noite'
    }
}