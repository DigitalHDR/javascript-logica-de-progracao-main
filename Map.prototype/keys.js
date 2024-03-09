//? O keys() método retorna um novo objeto Iterator
//? que contém as chaves de cada elemento do Map
//? objeto na ordem de inserção.

const map1 = new Map()
map1.set('0', 'foo')
map1.set(1, 'bar')

const iterator1 = map1.keys()
console.log(iterator1.next().value)
//! 0

console.log(iterator1.next().value)
//! 1
