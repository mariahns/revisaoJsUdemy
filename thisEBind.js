//o this no javascript pode referenciar diferentes variaveis dependendo de quem o chama 
//nao depende somente do contexto onde que ele foi criado

const pessoa = {
    saudacao:  'Bom dia!',
    falar(){
        console.log(this.saudacao)
    }
}

pessoa.falar()
const falar = pessoa.falar
// ao chamar o this vai existir um conflito de paradigmas funcional e OO. 
// a const falar recebe a funcao mas o paradigma funcional nao resolve o contexto do objeto exibindo undefined
falar() 

//o bind(pessoa) resolve o conflito e o this vair funcionar para o contexto de pessoa onde o this.saudacao esta definido
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa()


//No exemplo abaixo quem invocou o this foi o setInterval e nao a funcao Pessoas. Entao o this nao faz referencia a Pessoas
//Para resolver o conflito pode se usar o bind
//Ou pode criar uma const que recebe a referencia de this de Pessoas aí dentro de setInterval usa a const 
function Pessoas(){
    this.idade = 0

    const self = this
    setInterval(function() {
        /*this*/self.idade++
        console.log(/*this*/self.idade)
    }/*.bind(this)*/, 1000)    
}       

new Pessoas
