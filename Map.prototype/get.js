//? O get() método retorna um elemento especificado
//? de um Map objeto. Se o valor associado à chave
//? fornecida for um objeto, você obterá uma referência
//? a esse objeto e qualquer alteração feita nesse objeto
//? o modificará efetivamente dentro do Map objeto.

const map1 = new Map()
map1.set('bar', 'foo')

console.log(map1.get('bar'))
//! foo

console.log(map1.get('foo'))
//! undefined

console.log(map1.get('baz'))
//! undefined
