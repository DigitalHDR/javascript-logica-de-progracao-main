//? O método search() realiza uma busca por uma
//? ocorrência entre uma expressão regular e uma String.

//? Procura pela palavra e retorna o primeiro indice que ela foi encontrada

//? Sintaxe
//? str.search(regexp)

//? Valor retornado
// O índice na string do primeiro trecho que satisfaz a
// expressão regular. Do contrário, o valor -1 será retornado

//? expressões regulares
// g // Combinação global.
// i // Ignora diferenças entre maiúsculas e minúsculas.
// m // Combinação em várias linhas.
// y // Sticky

//todo =====================================================

let str = 'hey JudE'
let re = /[A-Z]/g
let reDot = /[.]/g

console.log(str.search(re))
// retorna 4, que é o índice da primeira letra maiúscula "J"

console.log(str.search(reDot))
// retorna -1 pois não conseguiu encontrar o ponto "."

//todo =====================================================
const str1 = 'lucas fernando'
console.log(str1.search(/fernando/i))
// 6