require('./global') //Observe que aqui não atribuio a nada, uma vez que é global
console.log(MinhaApp.saudacao())
MinhaApp.nome = 'Eita!'
console.log(MinhaApp.nome)