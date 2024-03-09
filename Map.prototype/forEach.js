//? O forEach() método executa uma função fornecida
//? uma vez para cada par chave valor no Map
//? objeto, na ordem de inserção.

//? SINTAXE
// Arrow function
// forEach(() => { ... } )
// forEach((value) => { ... } )
// forEach((value, key) => { ... } )
// forEach((value, key, map) => { ... } )

// Callback function
// forEach(callbackFn)
// forEach(callbackFn, thisArg)

// Inline callback function
// forEach(function() { ... })
// forEach(function(value) { ... })
// forEach(function(value, key) { ... })
// forEach(function(value, key, map) { ... })
// forEach(function(value, key, map) { ... }, thisArg)

//todo =====================================================
function logMapElements(value, key, map) {
  console.log(`m[${key}] = ${value}`)
}

new Map([
  ['foo', 3],
  ['bar', {}],
  ['baz', undefined],
]).forEach(logMapElements)

//! m[foo] = 3
//! m[bar] = [object Object]
//! m[baz] = undefined
