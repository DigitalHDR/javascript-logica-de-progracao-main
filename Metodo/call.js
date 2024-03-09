//? Introdução
//? O método call() invoca uma função com um dado valor this
//? e argumentos passados individualmente.

//! CALL() ACEITA LISTA DE ARGUMENTOS

//todo =====================================================
// Nota: Apesar de a sintaxe desta função ser quase idêntica à
// de apply(), a principal diferença é que call() aceita uma
// lista de argumentos, enquanto apply() aceita
// um único array de argumentos.
//todo =====================================================

//? Sintaxe
// fun.call(thisArg[, arg1[, arg2[, ...]]])

//? Parâmetros
//? thisArg
// O valor de this proveu a chamada para fun. Note que this pode
// não ser o valor atual visto pelo método: se esse método é uma
// função em non-strict mode (en-US) code, null e undefined serão
// reescritos com o objeto global, e valores primitivos serão encaixados.

//? arg1, arg2, ...
// Argumentos para o objeto.

const obj1 = {
  exemplo: 'exemplo1',
  mostraThis: function thisCallExemplo(a, b, c) {
    console.log(this)
  },
}

obj1.mostraThis()
//! { exemplo: 'exemplo1', mostraThis: [Function: thisCallExemplo] }

const obj2 = { exemplo: 'exemplo2' }

obj1.mostraThis.call(obj2, [' arg1', ' arg2', ' arg3']) //  arg é opcional
//! { exemplo: 'exemplo2' }

//* perceba que na 1°x o 'this' é 'exemplo1'
//* e na 2°x o 'this' é 'exemplo2', pois na 2°x o 'this' está apontando para o 'obj2'
