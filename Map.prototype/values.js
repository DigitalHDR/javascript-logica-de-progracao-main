//? Pega apenas os valores
//? O values() método retorna um novo objeto Iterator
//? que contém os valores de cada elemento do
//? Map objeto na ordem de inserção

const map1 = new Map()
map1.set('0', 'foo')
map1.set(1, 'bar')

const iterator1 = map1.values()

console.log(iterator1.next().value)
//! foo

console.log(iterator1.next().value)
//! bar
