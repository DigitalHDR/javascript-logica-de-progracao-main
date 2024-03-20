//? testa se todos os elementos do array passam no teste implementado
//? pela função fornecida. Ele retorna um valor booleano.

//? Parâmetros

//? callbackFn
//? Uma função a ser executada para cada elemento da matriz.
//? Ele deve retornar um valor verdadeiro para indicar que o elemento
//? passou no teste e um valor falso caso contrário.
//? A função é chamada com os seguintes argumentos:

//? element
//? O elemento atual que está sendo processado na matriz.

//? index
//? O índice do elemento atual que está sendo processado na matriz.

//? array
//? A matriz every()foi chamada.

//? thisArg Opcional
//? Um valor a ser usado thisao executar callbackFn. Veja métodos iterativos .

//? Valor de retorno
//? true a menos que callbackFnretorne um valor falso para um elemento da matriz;
//? nesse caso, falseserá retornado imediatamente.

//todo =====================================================
// const isBelowThreshold = (currentValue) => currentValue < 40    // arrow function
// const array1 = [1, 30, 39, 29, 10, 13]
// console.log(array1.every(isBelowThreshold))
// Expected output: true
//todo =====================================================
// function isBigEnough(element, index, array) {
//   return element >= 10
// }
// console.log([12, 5, 8, 130, 44].every(isBigEnough))
// //! false
// console.log([12, 54, 18, 130, 44].every(isBigEnough))
// //! true

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | Verifique se um array é um subconjunto de outro array |
//*
//*  O exemplo a seguir testa se todos os elementos de
//*  um array estão presentes em outro array.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const isSubset = (array1, array2) =>
//   array2.every((valoresArray2) => array1.includes(valoresArray2))

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 7, 6]))
// //! true

// console.log(isSubset([1, 2, 3, 4, 5, 6, 7], [5, 8, 7]))
// //! false

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Usando every() em arrays esparsos |
//* every() não executará seu predicado em slots vazios.
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// console.log([1, , 3].every((x) => x !== undefined))
// //! true

// console.log([2, , 2].every((x) => x === 2))
// //! true
