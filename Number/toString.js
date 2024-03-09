//? O método toString() retorna uma string representando o
//? objeto Number especificado.

//? transforma número em string ?

//? Sintaxe
// numObj.toString([radix])

//? Parâmetros
// radix
// Opcional. Um inteiro entre 2 e 36 especificando a base
// utilizada para representar os valores numéricos.

var count = 10

console.log(count.toString()) // displays '10'
console.log((17).toString()) // displays '17'

var x = 6

console.log(x.toString(2)) // displays '110'
console.log((254).toString(16)) // displays 'fe'

console.log((-10).toString(2)) // displays '-1010'
console.log((-0xff).toString(2)) // displays '-111
