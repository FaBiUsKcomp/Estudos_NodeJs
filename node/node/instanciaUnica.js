// Node faz cache dos modulos
module.exports = { //Cada instancia exportada são 'Singleton' (unicas)
    valor: 1,
    inc() {
        this.valor++
    }
}