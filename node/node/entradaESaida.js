//Funciona como as demais linguagens. Aqui conseguimos ler dados do teclado do usuario e tambem
//dar saida na tela padão do computador.

//Conseguimos pegar parametros atraves da chamada do terminal
const anonimo = process.argv.indexOf('-a') !== -1 //Verifica de a flag -a esta presente nos argumentos
//console.log(anonimo)

if(anonimo) {
    process.stdout.write('Fala Anônimo!\n') //Escreve na saida padrão
    process.exit()
} else {
    process.stdout.write('Informe o seu nome: ') 
    process.stdin.on('data', data => { //Assim que o usuario digita e da o enter 
        const nome = data.toString().replace('\n', '') //Tira o enter e substitui por ''
        process.stdout.write(`Fala ${nome}!! \n`)
        process.exit()
    })
}