console.log(typeof Object) //retorna o tipo de dados. Object é uma funcao para criacao de objetos genericos
console.log(typeof new Object) //retorna o tipo da instancia. Uma instancia de object é do tipo objet

const Cliente = function() {}
console.log(typeof Cliente)
console.log(typeof new Cliente)

class Produto {}
console.log(typeof Produto)
console.log(typeof new Produto())

//Objetos sao grupos aninhados de pares/valor
const cliente = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua A',
        numero: 1
    }
}

console.log(cliente.nome)

