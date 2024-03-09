//? O método valueOf() retorna o valor primitivo de um objeto String ou Number
//! equivalente a String.prototype.toString().

//? Sintaxe
// str.valueOf()

const stringObj = new String('foo')

console.log(stringObj)
// expected output: String { "foo" }

console.log(stringObj.valueOf())
// expected output: "foo"

//todo =====================================================

var x = new String('Olá, mundo')

console.log(x.valueOf())
// retorna 'Olá, mundo'
