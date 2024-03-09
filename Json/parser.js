//? O método JSON.parse() analisa uma string JSON, construindo
//? o valor ou um objeto JavaScript descrito pela string. Uma função
//? reviver opcional pode ser fornecida para executar uma
//? transformação no objeto resultante antes de ser retornada.

const json = '{"result":true, "count":42}'
const obj = JSON.parse(json)

console.log(obj.count)
// 42

console.log(obj.result)
// true
