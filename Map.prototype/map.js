//? O Map objeto contém pares de valores-chave e
//? lembra a ordem de inserção original das chaves.
//? Qualquer valor (objetos e valores primitivos )
//? pode ser usado como chave ou valor.

const map1 = new Map()

map1.set('a', 1)
console.log(map1)

map1.set('b', 2)
map1.set('c', 3)
console.log(map1.get('a'))
//! 1

map1.set('a', 97)
console.log(map1.get('a'))
//! 97

console.log(map1.size)
//! 3

map1.delete('b')
console.log(map1.size)
//! 2
