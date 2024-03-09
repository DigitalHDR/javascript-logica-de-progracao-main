//? O método apply() chama uma função com um dado valor
//? this e arguments providos como uma array
//? (ou um objeto parecido com um array).

//! APPLY() ACEITA ARRAY DE ARGUMENTOS

//todo =====================================================
// Nota: A sintaxe desta função é quase idêntica a essa da call(),
// a diferença é que call() aceita uma lista de argumentos,
// enquanto apply() aceita um array de argumentos.
//todo =====================================================

//? //? Sintaxe
// fun.apply(thisArg, [argsArray])

//? Parâmetros
//? thisArg
// O valor de this é fornecido para a chamada de fun. Note que isso
// talvez não seja o valor real visto pelo método: se um método é uma
// função em código non-strict mode , null e undefined serão
// substituidos com o objeto global, e os valores
// primitivos serão embalados.

//? argsArray
// Um objeto parecido com um array (array-like), especificando os argumentos
// com os quais fun deve ser chamado, ou null ou undefined se
// não houverem argumentos que possam ser passados para a função.
// Começando com ECMAScript5 esses argumentos podem ser um objeto
// genérico array-like ao invés de um array. Veja abaixo a informação
// de compatibilidade de browsers.

//todo =====================================================

const obj1 = {
  exemplo: 'exemplo1',
  mostraThis: function thisApplyExemplo(a, b, c) {
    console.log(this)
  },
}

obj1.mostraThis()
//! { exemplo: 'exemplo1', mostraThis: [Function: thisApplyExemplo] }

const obj2 = { exemplo: 'exemplo2' }

obj1.mostraThis.apply(obj2, [' arg1', ' arg2', ' arg3']) //  arg é opcional
//! { exemplo: 'exemplo2' }

//* perceba que na 1°x o 'this' é 'exemplo1'
//* e na 2°x o 'this' é 'exemplo2', pois na 2°x o 'this' está apontando para o 'obj2'
