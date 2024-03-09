//? O método filter() cria um novo array com todos
//? os elementos que passaram no teste implementado
//? pela função fornecida.


//? Sintaxe
// var newArray = arr.filter(callback[, thisArg])


//? Parâmetros
//? callback
// Função é um predicado, para testar cada elemento do array. Retorna true para manter o elemento, false caso contrário, recebendo três argumentos:

//? element
// O elemento que está sendo processado no array.

//? index
// O índice do elemento atual que está sendo processado no array.

//? array
// O array para qual filter foi chamada.

//? thisArg Optional
// Opcional. Valor a ser usado como this durante a execução do callback.

//todo =====================================================

// function filtrarNumeroMaior(value, indice, array) {
//   return value >= 10
// }

// var numeroFiltrado = [12, 5, 8, 10, 130, 44].filter(filtrarNumeroMaior)
// console.log(numeroFiltrado)
//! (4) [12, 10, 130, 44]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | + |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// function maior(valor, indice, array) {
//   return valor >= 10
// }

// let resultado = numeros.filter(maior)
// console.log(resultado)
//! (6) [10, 11, 12, 13, 14, 15]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Forma reduzida |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let resultado = numeros.filter(function (valor) {
//   return valor >= 10
// })
// console.log(resultado)
//! (6) [10, 11, 12, 13, 14, 15]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Forma reduzida mais ainda |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// let letras = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]

// let resultado = letras.filter(valor => valor >= 10)
// console.log(resultado)
