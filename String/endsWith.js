//? O método endsWith() indica se uma string
//? termina com determinados caracteres,
//? retornando true ou false.

//? case-sensitive

// Sintaxe
// str.endsWith(stringSendoBuscada[, tamanho])

var str = 'Ser ou não ser, eis a questão'

console.log(str.endsWith('questão'))
// retorna true

console.log(str.endsWith('Questão'))
// retorna false

console.log(str.endsWith('ser'))
// retorna false

console.log(str.endsWith('ser', 14))
// retorna true
