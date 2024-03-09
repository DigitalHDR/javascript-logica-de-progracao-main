//? O clear() método remove todos os elementos de um Map objeto.

// const map1 = new Map()
// map1.set('bar', 'baz')
// map1.set(1, 'foo')
// console.log(map1.size)
// //! 2

// map1.clear()
// console.log(map1.size)
// //! 0
//todo =====================================================
const myMap = new Map()
myMap.set('bar', 'baz')
myMap.set(1, 'foo')

console.log(myMap.size)
//! 2

console.log(myMap.has('bar'))
//! true

myMap.clear()
console.log(myMap.size)
//! 0

console.log(myMap.has('bar'))
//! false
