//a partir de um objeto simular um array

const quaseArray = {0: 'Rafael', 1: 'Ana', 2: 'Bia'}
console.log(quaseArray)
console.log(quaseArray[0])

Object.defineProperty(quaseArray, 'toString', {
    value: function(){
        return Object.values(this) 
    }, enumerable: false
})

const meuArray = ['Rafael', 'Ana', 'Bia']
console.log(quaseArray.toString(), meuArray)