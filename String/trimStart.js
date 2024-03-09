//? O método trimStart() remove espaços do começo de
//? uma string. trimLeft() é um apelido para este método.

//? Valor retornado
// Uma nova string representando a string original sem os
// espaços no começo (fim à esquerda).

// Sintaxe
// str.trimStart()
// str.trimLeft()

const greeting = '   Hello world!   '

console.log(greeting)
// expected output: "   Hello world!   "

console.log(greeting.trimStart())
// expected output: "Hello world!   "

//todo =====================================================

var str = '   foo  '

console.log(str.length)
// retorna 8

str = str.trimStart()
console.log(str.length)
// retorna 5

console.log(str)
// retorna 'foo  '
