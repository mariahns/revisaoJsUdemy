//usando VAR para declarar variavel pode redeclarar ela, com o LET nao

var a = 3
let b = 4

var a = 30
b = 40

a = 300
b = 400

console.log(a,b)

const c = 5

console.log(c);

//funções
const saudacao = 'opa'

function exec(){
    const saudacao = 'Faala'
    return saudacao
}

console.log(saudacao);
console.log(exec());