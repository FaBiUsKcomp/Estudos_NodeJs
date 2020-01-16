// Devido ao Node fazer cache de objetos retornados de outros arquivos,
//Observe que mesmo incrementando o contadorA duas vezes observamos que,
//o contadorB é incrementado, uma vez que as importações são equivalentes.

const contadorA = require('./instanciaUnica')
const contadorB = require('./instanciaUnica')

//Aqui não irá acontecer isso pois o arquivo esta esportando uma função,
//Factory, portanto os objetos serão diferentes.

const contadorC = require('./instanciaNova')()
const contadorD = require('./instanciaNova')()

contadorA.inc()
contadorA.inc()
console.log(contadorA.valor, contadorB.valor)

contadorC.inc()
contadorC.inc()
console.log(contadorC.valor, contadorD.valor)