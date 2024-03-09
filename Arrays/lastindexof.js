//? O método lastIndexOf() retorna o ultimo índice que
//? um certo elemento pode ser encontrado no array,
//? ou -1 se o elemento não estiver presente. O array
//? é pesquisado de trás para frente, começando pelo fromIndex.

//?Sintaxe
// arr.lastIndexOf(searchElement[, fromIndex = arr.length - 1])

//? Parâmetros
//? searchElement
// Elemento para ser localizado no array.

//? fromIndex
// Opcional. O índice ao qual a busca será iniciada de traz para frente.
// O valor padrão é o tamanho total do array menos um
// (array.length -1), ou seja, todo o array será pesquisado.
// Se o índice for maior ou igual ao tamanho do array, o array inteiro
// será pesquisado. Se for negativo, ele é tomado como deslocamento
// no final do array. Note que mesmo se o índice for negativo, o array
// ainda será pesquisado de traz para frente. Se o índice calculado
// for menor que 0, -1 será retornado, ou seja, o array não será pesquisado.


// var array = [2, 5, 9, 2]
// var result = array.lastIndexOf(2)
// console.log(result)
// //! 3

// array.lastIndexOf(7)
// //! -1

// array.lastIndexOf(2, 3)
// //! 3

// array.lastIndexOf(2, 2)
// //! 0

// array.lastIndexOf(2, -2)
// //! 0

// array.lastIndexOf(2, -1)
// //! 3

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | Encontrando todas as ocorrências de um elemento |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var indices = []
// var array = ['a', 'b', 'a', 'c', 'a', 'd']
// var element = 'a'
// var idx = array.lastIndexOf(element)
// while (idx != -1) {
//   indices.push(idx)
//   idx = idx > 0 ? array.lastIndexOf(element, idx - 1) : -1
// }

// console.log(indices)
// //! (3) [4, 2, 0]