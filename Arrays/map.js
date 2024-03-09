//? O método map() invoca a função callback passada
//? por argumento para cada elemento do Array e devolve
//? um novo Array como resultado.

//? Sintaxe
// arr.map(callback[, thisArg])

//? Parâmetros
//? callback
// Função cujo retorno produz o elemento do novo Array. Recebe três argumentos:

//? valorAtual
// O valor do elemento original do Array de origem.

//? indice
// O índice do elemento atual que está sendo processado no array.

//? array
// O Array de origem.

//? thisArg
// Opcional. Valor a ser utilizado como o this no momento da execução da função callback

//todo =====================================================

// var numbers = [1, 4, 9]
// var roots = numbers.map(Math.sqrt)

// //? Math.sqrt()
// //? A função Math.sqrt() retorna a raiz quadrada de um número

// console.log(roots)
// //! (3) [1, 2, 3]

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | multiplicando usando o map |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var numbers = [1, 4, 9]
// var doubles = numbers.map(function (num) {
//   return num * 2
// })

// console.log(doubles)
// //! (3) [2, 8, 18]
// //? numbers ainda é [1, 4, 9]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Usando map para inverter uma string |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var str = '12345';
const result = [].map.call(str, function(x) {
  return x
}).reverse().join('')


console.log(result)
//! 54321