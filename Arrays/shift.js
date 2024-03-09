//? O método shift() remove o primeiro elemento
//? de um array e retorna esse elemento. Este
//? método muda o tamanho do array.

//? Sintaxe
// arr.shift()

//todo =====================================================

// const array1 = [1, 2, 3]
// const firstElement = array1.shift()
// console.log(array1)
// console.log(firstElement)
//! (2) [2, 3]
//! 1
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Removendo um elemento de array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var minhaLista = ['celular', 'casa', 'mandarim', 'medico']
// console.log('minhaLista antes: ' + minhaLista)
// ! minhaLista antes: celular,casa,mandarim,medico

// var shifted = minhaLista.shift()
// console.log('minhaLista depois: ' + minhaLista)
// ! minhaLista depois: casa,mandarim,medico

// console.log('Elemento removido: ' + shifted)
//! Elemento removido: celular

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Usando o método shift() dentro de um loop de while |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var nomes = ['André', 'Eduardo', 'Paulo', 'Cris', 'João']
// while ((i = nomes.shift()) !== undefined) {
//   console.log(i)
//   //! André Eduardo Paulo Cris João
// }
