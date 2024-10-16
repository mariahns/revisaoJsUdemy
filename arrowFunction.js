//funcao normal
let dobro = function (a){
    return 2 * a
}
//funcao arrow é sempre anonima tem que armazenar em variavel/constante
dobro = (a) => {
    return 2 * a
}

//funcao sem parenteses se tiver apenas 1 parametro e return implicito (se adicionar um bloco{} o return é obrigatorio)
dobro = a => 2 * a 
console.log(dobro(Math.PI))

let ola = () => 'Oi' //sem passar parametro
ola = _ => 'Oi' //possui apenas 1 paramentro
console.log(ola());

//se usar arrow function o this faz referencia ao contexto lexico 
// (ou seja, contexto da palavra, de onde foi escrito) e nao de quem chamou (setInterval)
function Pessoas(){
    this.idade = 0
    setInterval( /*arrow function*/ () => {
        this.idade++
        console.log(this.idade)
    },100)
     
} 
//new Pessoas descomentar p testar

//funcao que compara o this do contexto global (node) com o passado por parametro
let comparaComThis = function (param){
    console.log(this === param)
}
comparaComThis(global) 

//usando o bind
const obj = {}
comparaComThis = comparaComThis.bind(obj) //aponta p obj e nao mais para o escopo global
comparaComThis(global) 
comparaComThis(obj) 

//usando arrowfunction o contexto foi escrito dentro do modulo e nao aponta p global
let comparaComThisArrow = param => console.log(this === param)
comparaComThisArrow(global) //this do modulo nao é global - FALSE
comparaComThisArrow(this) //this do modulo (module.exports) - TRUE

//mesmo forçando com o bind usando arrowfunction o this pega o contexto do modulo
comparaComThisArrow = comparaComThisArrow.bind(obj) 
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)

//O THIS NUMA FUNCAO ARROW É SEMPRE ASSOCIADO AO CONTEXTO QUE A FUNCAO FOI ESCRITA
//NAO TEM VARIACAO MESMO COM O BIND
