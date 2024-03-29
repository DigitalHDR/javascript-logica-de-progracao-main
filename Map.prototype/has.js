//? O has() método retorna um booleano indicando
//? se um elemento com a chave especificada existe ou não.

//? retorno
//? true se existir um elemento com a chave especificada
//? no Map objeto; caso contrário false.

const map1 = new Map()
map1.set('bar', 'foo')
// chave e valor

console.log(map1.has('bar'))
// chave e valor
//! true

console.log(map1.has('baz'))
// chave e valor
//! false
