//? O método find() retorna o valor do primeiro elemento
//? do array que satisfizer a função de teste provida.
//? Caso contrario, undefined é retornado.


//? Sintaxe
// arr.find(callback(element[, index[, array]])[, thisArg])


//? Parâmetros
// callback
// Função executada a cada iteração do array, recebendo três argumentos:

//? element
// O elemento atual que está sendo processado no array.

//? indexOptional
// O índice do elemento atualmente sendo processado no array.

//? arrayOptional
// O array sobre o qual find foi chamado.

//? thisArgOptional
// Opcional. Objeto usado como this quando executando o callback.


//todo =====================================================

// const array1 = [5, 12, 8, 130, 44]
// const found = array1.find(element => element > 10)
// console.log(found)
//! 12
// retorna o primeiro elemento que foi encontrado que era > 10

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | Encontrar um objeto em um array por uma de suas propriedades |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const inventario = [
//   { name: 'apples', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cerejas', quantity: 5 },
// ]

// function isCherries(fruit) {
//   return fruit.name === 'cerejas'
// }

// console.log(inventario.find(isCherries))
//! {name: 'cerejas', quantity: 5}
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Utilizando arrow function |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const inventory = [
//   { name: 'maças', quantity: 2 },
//   { name: 'bananas', quantity: 0 },
//   { name: 'cherries', quantity: 5 },
// ]

// const result = inventory.find(fruit => fruit.name === 'cherries')
// console.log(result)
//! {name: 'cherries', quantity: 5}