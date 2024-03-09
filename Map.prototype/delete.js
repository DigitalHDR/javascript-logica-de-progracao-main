//? O delete() método remove o elemento 
//? especificado de um Map objeto por chave.

//? retorna
//? true se um elemento no Map objeto existia
//? e foi removido, ou false se o elemento não existe.

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.delete('bar'));
//! true

console.log(map1.has('bar'));
//! false
//todo =====================================================