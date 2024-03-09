//? O método trimEnd() remove espaços do final de
//? uma string. trimRight() é um apelido para este método.

//? Valor retornado
//? Uma nova string representando a string original sem
//? espaços ao seu final (direita).

// Sintaxe
// str.trimEnd()
// str.trimRight()

const greeting = '   Hello world!   '

console.log(greeting)
//! expected output: "   Hello world!   ";

console.log(greeting.trimEnd())
//! expected output: "   Hello world!";

//todo =====================================================

var str = '   foo  '

console.log(str.length)
//! retorna 8

str = str.trimEnd()
console.log(str.length)
//! retorna 6

console.log(str)
//! retorna '   foo'
