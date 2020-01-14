console.log(module.exports === this)
console.log(module.exports === exports)

//Funcionam
this.a = 1
exports.b = 2
module.exports.c = 3

exports = null
console.log(module.exports)

//Esse modo de exportação não funciona !!!
exports = {
    nome: 'Teste'
}

console.log(module.exports)

//Deverá ser assim
module.exports = { publico: true }