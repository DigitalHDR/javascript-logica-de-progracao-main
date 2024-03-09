//? O método Array.isArray() retorna true se um
//? objeto é uma array, e false se não é.

//? Sintaxe
// Array.isArray(obj)

//? Parâmetros
//? obj
// O objeto a ser verificado.

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | todas as chamadas conseguintes retornam true |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Array.isArray([])
// Array.isArray([1])
// Array.isArray(new Array())
// //! Pequeno detalhe: Array.prototype por si só é uma array:
// Array.isArray(Array.prototype)
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | todas as conseguintes retornam false |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// Array.isArray()
// Array.isArray({})
// Array.isArray(null)
// Array.isArray(undefined)
// Array.isArray(17)
// Array.isArray('Array')
// Array.isArray(true)
// Array.isArray(false)
// Array.isArray({ __proto__: Array.prototype })
