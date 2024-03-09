//? O entries() método retorna um novo objeto iterador
//? que contém os [key, value] pares para cada elemento
//? no Map objeto na ordem de inserção. Nesse caso
//? específico, esse objeto iterador também é iterável,
//? portanto, o loop for-of pode ser usado. Quando o protocolo
//? [Symbol.iterator] é usado, ele retorna uma função que,
//? quando invocada, retorna esse iterador em si.

//? retona
//? Um novo Mapobjeto iterador.

// const map1 = new Map()
// map1.set('0', 'foo')
// map1.set(1, 'bar')
// const iterator1 = map1.entries()
// console.log(iterator1.next().value)
// //! ["0", "foo"]

// console.log(iterator1.next().value)
// //! [1, "bar"]
//todo =====================================================
const myMap = new Map()
myMap.set('0', 'foo')
myMap.set(1, 'bar')
myMap.set({}, 'baz')

const mapIter = myMap.entries()

console.log(mapIter.next().value)
//! ["0", "foo"]

console.log(mapIter.next().value)
//! [1, "bar"]

console.log(mapIter.next().value)
//! [Object, "baz"]
