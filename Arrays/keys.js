//? O método keys() retorna um novo Array
//? Iterator que contém as chaves para cada index do array.

//? Sintaxe
//? arr.keys()

var arr = ['a', 'b', 'c']
var iterator = arr.keys()

console.log(iterator.next())
//! {value: 0, done: false}

console.log(iterator.next())
//! {value: 1, done: false}

console.log(iterator.next())
//! {value: 2, done: false}