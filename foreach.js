const aprovados = ['Agata', 'Aldo', 'Daniel', 'Raquel']

//callback function - 1 parametro é o elemento percorrido e o segundo é o indice
aprovados.forEach( function(nome, indice) {
    console.log( indice + 1 + ')' + nome)    
})

//arrowFunction - ex1
aprovados.forEach( nome => console.log(nome) )

//arrowFunction - ex2
const exibirAprovados = aprovado => console.log(aprovado)
aprovados.forEach(exibirAprovados)