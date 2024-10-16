//O array em javascript é um objeto. Nao existe o tipo nativo array 
console.log(typeof Array, typeof new Array, typeof [])

let aprovados = new Array('Bia', 'Carlos','Ana')
console.log(aprovados)

aprovados = ['Bia', 'Carlos','Ana']
console.log(aprovados[0])
console.log(aprovados[3])//retorna undefined se vc n passa parametro

aprovados.push('Abia')
aprovados[4] = 'Paulo'
aprovados[9] = 'Rafael'
console.log(aprovados)
console.log(aprovados.length)

aprovados.sort() //ordena/altera o array original
console.log(aprovados)

delete aprovados[1] //da mesma forma que deleta um atributo de um objeto
console.log(aprovados)

aprovados = ['Bia', 'Carlos','Ana']
aprovados.splice(1,1, 'Maria') //na altura do indice 1 excluir 1 registro e depois adiciona o elemento 'Maria'
console.log(aprovados)






