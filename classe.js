//a classe no javascript é apenas uma forma diferente p escrever uma função

class Lancamento {
    constructor(nome = 'Generico', valor = 0){
        this.nome = nome
        this.valor = valor
    }
}

class CicloFinanceiro{
    constructor(mes, ano){
        this.mes = mes
        this.ano = ano
        this.lancamentos = []
    }

    addLancamentos(...lancamentos){ //recebe um ou mais lancamentos e concatena em um array
        lancamentos.forEach(l => this.lancamentos.push(l))       

    }

    sumario(){
        let valorConsolidado = 0
        this.lancamentos.forEach(l => {
            valorConsolidado += l.valor
        })
        return valorConsolidado
    }
}

const salario = new Lancamento('Salario', 45000)
const contaDeLuz = new Lancamento('Luz', -220)
console.log(contaDeLuz.nome)

const contas = new CicloFinanceiro(6, 2018)
contas.addLancamentos(salario, contaDeLuz)
console.log(contas.sumario())


//////herança funciona via prototype
class Avo{
    constructor(sobrenome) {
        this.sobrenome = sobrenome
    }
}

class Pai extends Avo {
    constructor(sobrenome, profissao = 'Professor') {
        super(sobrenome)
        this.profissao = profissao
    }
}

class Filho extends Pai{
    constructor(){
        super('silva')
    }
}

const filho = new Filho
console.log(filho)




