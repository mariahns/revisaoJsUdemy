const pessoa = {
    nome: 'Pedro',
    idade: 32,
    endereco: {
        logradouro: 'Rua A',
        numero: 1
    }
}

//destructuring: extrair do objeto somente os atributos dentro os paranteses
const {nome, idade} = pessoa
console.log(nome, idade)

const {nome: n, idade: i} = pessoa
console.log(nome, idade)

const {sobrenome, bemHumorada = true} = pessoa
console.log(sobrenome, bemHumorada)

const {endereco: {logradouro, numero, cep} } = pessoa
console.log(logradouro, numero, cep)

//destructuring: extrair do array 
const [a] = [10]
console.log(a)

const [n1, , n3, , n5, n6 = 0] = [10,7,9,8]
console.log(n1,n3,n5,n6)

const [, [, nota]] = [[,8,8], [9,6,8]]
console.log(nota)

//destructuring: funções 
//sabe que vai receber um objeto e ja faz o destructuring ao receber o parametro p nao precisar 
//acessar o objeto internamente na funcao 
function rand( { min = 0, max = 1000 } ){ 
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

const obj = { max: 50, min: 40 }
console.log(rand(obj))
console.log(rand(rand({min: 955})))
console.log(rand({}))

//destructuring: funções - arrays
function rand2( [min = 0, max = 1000 ] ){
    if(min > max) [min, max] = [max, min]
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}

console.log(rand2([50,40]))
console.log(rand2([992]))
console.log(rand2([,10]))











