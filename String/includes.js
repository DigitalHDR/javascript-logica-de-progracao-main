//? O método includes() determina se um conjunto de
//? caracteres pode ser encontrado dentro de
//? outra string, retornando true ou false.

//? Case-sensitivity
//? Faz diferença de maiusculo e minusculo

// Sintaxe
// str.includes(searchString[, position])

var str = 'Ser, ou não ser, eis a questão.'

console.log(str.includes('Ser'))
// true

console.log(str.includes('questão'))
// true

console.log(str.includes('não existe'))
// false

console.log(str.includes('ser', 1))
// true

console.log(str.includes('SER'))
// false

console.log(str.includes('eis'))
// true

console.log(str.includes('Eis'))
// false