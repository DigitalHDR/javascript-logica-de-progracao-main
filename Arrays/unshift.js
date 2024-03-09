//? O método unshift() adiciona um ou mais elementos
//? no início de um array e retorna o número de
//? elementos (propriedade length) atualizado.
//? altera o array original (pelo teste que fiz la em baixo)

//? Retorna
//? A nova propriedade length do objeto acima onde o método foi chamado.

//? Sintaxe
// unshift(element0)
// unshift(element0, element1)
// unshift(element0, element1, /* … ,*/ elementN)

//? Parâmetros
// elementN
// Os elementos a serem adicionados à frente do arquivo arr.

//todo =====================================================
// var arr = [1, 2]
// console.log(arr)
//! (2) [1, 2]

// var ressult1 = arr.unshift(0, 'texto', 4 , 'add')

// console.log(arr)
// console.log(ressult1)
//! 3

// console.log(arr)
//!(3) [0, 1, 2]

//todo ==================continuação===================================

// var result2 = arr.unshift(-2, -1)
// console.log(result2)
//! 5

// console.log(arr)
//! (5) [-2, -1, 0, 1, 2]

// var result3 = arr.unshift([-3])
// console.log(result3)
//! 6

// console.log(arr)
//! (6) [Array(1), -2, -1, 0, 1, 2]