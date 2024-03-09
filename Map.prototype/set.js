//? O set() método adiciona ou atualiza um elemento
//? com uma chave especificada e um valor para um Map objeto.

//? retorna
//? um map objeto

// const map1 = new Map()
// map1.set('bar', 'foo')

// console.log(map1.get('bar'))
// //! foo

// console.log(map1.get('baz'))
//! undefined
//todo =====================================================
const myMap = new Map()

// Add new elements to the map
myMap.set('bar', 'foo')
myMap.set(1, 'foobar')

// Update an element in the map
myMap.set('bar', 'baz')
//todo =====================================================
myMap.set('bar', 'foo').set(1, 'foobar').set(2, 'baz')
