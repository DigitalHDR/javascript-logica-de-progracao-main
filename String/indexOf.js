// //? O método indexOf() retorna o índice da primeira
// //? ocorrência do valor fornecido em searchValue,
// //? começando a busca a partir de fromIndex.
// //? Retorna -1 se o valor não for encontrado.

// //? Case-sensitivity
// //? Faz diferença de maiusculo e minusculo

// Sintaxe
// str.indexOf(searchValue[, fromIndex])

console.log('Olá, mundo'.indexOf('', 11))
// retorna 10

'Olá, mundo'.indexOf('', 13)
// retorna 10

'Olá, mundo'.indexOf('', 22)
// retorna 10

console.log('Blue Whale'.indexOf('Blue'))
// retorna  0

'Blue Whale'.indexOf('Whale')
// retorna  5

'Blue Whale'.indexOf('Blute')
// retorna -1

'Blue Whale'.indexOf('Whale', 0)
// retorna  5

'Blue Whale'.indexOf('Whale', 5)
// retorna  5

'Blue Whale'.indexOf('Whale', 7)
// retorna -1

'Blue Whale'.indexOf('')
// retorna  0

'Blue Whale'.indexOf('', 9)
// retorna  9

'Blue Whale'.indexOf('', 10)
// retorna 10

'Blue Whale'.indexOf('', 11)
// retorna 10

// //todo =====================================================

// //? Note que um retorno 0 não implica em true,
// //? e -1 não implica em false. Portanto, a maneira
// //? correta de se verificar se uma string específica
// //? está contida em outra string seria:

// 'Blue Whale'.indexOf('Blue') !== -1
// // true

// 'Blue Whale'.indexOf('Bloe') !== -1
// // false

// //todo =====================================================

// //? Usando indexOf()
// var anyString = 'Brave new world'
// console.log(
//   'O índice do primeiro w partindo do começo é ' + anyString.indexOf('w')
// )
// // Exibe 8

// console.log(
//   "O índice de 'new' partindo do começo é " + anyString.indexOf('new')
// )
// // Exibe 6

// //todo =====================================================
// //? Case-sensitivity
// //? Faz diferença de maiusculo e minusculo

// var myString = 'brie, pepper jack, cheddar'
// var myCapString = 'Brie, Pepper Jack, Cheddar'

// console.log('myString.indexOf("cheddar") é ' + myString.indexOf('cheddar'))
// // Exibe 19

// console.log(
//   'myCapString.indexOf("cheddar") é ' + myCapString.indexOf('cheddar')
// )
// // Exibe -1

// //todo =====================================================

// const str = 'Serx ou nãox ser, eisx ax questão'
// count = 0
// pos = str.indexOf('x')

// while (pos != -1) {
//   count++
//   pos = str.indexOf('x', pos + 1)
// }

// console.log(count)
