//? O método some() testa se ao menos um dos elementos
//? no array passa no teste implementado pela função
//? atribuída e retorna um valor true ou false.

//? Valor de retorno
//? Esta função retorna true se a função callback
//? retornar true para qualquer elemento do array;
//? caso contrário, false.


//? Sintaxe
// arr.some(callback[, thisArg])

//? Parâmetros
//? callback
// Função para testar cada elemento, recebendo três argumentos:

//? currentValue
// O valor atual do elemento sendo processado no array.

//? index
// O índice do elemento atual sendo processado no array.

//? array
// O array onde o método some() foi chamado.

//? thisArg
// Opcional. Valor para usar como this durante a execução do callback


//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Testando valores de elementos de um array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// function temNumeroMaiorQueDez(element, index, array) {
//   return element > 10
// }
// const result1 = [2, 5, 8, 1, 4].some(temNumeroMaiorQueDez)
// const result2 = [12, 5, 8, 1, 4].some(temNumeroMaiorQueDez)
// console.log(result1)
// console.log(result2)
//! false
//! true