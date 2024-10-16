const pilotos = ['Vettel', 'Alonso', 'Raikkonen', 'Massa']//o array pode ser alterado mas sempre apontará p esse array pois é constante

pilotos.pop() //remove o ultimo elemento do array
pilotos.push('Verstappen') //add um elemento
pilotos.shift() //remove o primeiro elemento do array
pilotos.unshift('Hamilton') //add um elemento na primeira posição do array
pilotos.splice(2, 0, 'Bottas', 'Massa') //na altura do indice 2 nao remover nada e depois add os outros 2 registros
pilotos.splice(3, 1)// na altura do indice 3 remover 1 registro
console.log(pilotos)

const algunsPilotos1 = pilotos.slice(2) //novo array com os registros a partir do indice 2
console.log(algunsPilotos1)

const algunsPilotos2 = pilotos.slice(1,4) //novo array com os registros a partir do indice 1 até o anterior ao 4
console.log(algunsPilotos2)