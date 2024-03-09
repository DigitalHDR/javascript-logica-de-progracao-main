//? O método bind() cria uma nova função que, quando chamada, tem
//? sua palavra-chave this definida com o valor fornecido, com uma
//? sequência determinada de argumentos precedendo quaisquer outros
//? que sejam fornecidos quando a nova função é chamada.

//! RESUMO
//! O BIND PEGA O THIS, E LIGA A UMA NOVA FUNÇÃO CRIADA QUANDO ELE É CHAMADO
//! SE O BIND NÃO FOR LIGADO A UM NOVA FUNÇÃO ELE SERA GLOBAL

//? Valor de retorno
// Uma cópia da função fornecida com o valor this especificado e argumentos iniciais.

//? Sintaxe
// function.bind(thisArg[, arg1[, arg2[, ...]]])

//? Parâmetros
//? thisArg
// O valor a ser passado como parâmetro this para a função de destino quando a
// função vinculada é chamada. O valor é ignorado se a função ligada
// é construída usando o operador new.

//? arg1, arg2, ...
// Argumentos que precedem outros argumentos fornecidos para a função
// vinculada ao invocar a função de destino.

//todo ======= EXEMPLO 1 ===================================

// function thisBindExemplo() {
//   console.log(this)
// }

// const obj = {
//   exemplo: 'exemplo',
// }

// thisBindExemplo = thisBindExemplo.bind(obj)

// thisBindExemplo()
//! { exemplo: 'exemplo' }
//* ESSE EXEMOLO É COMO SE FOSSE ASSIM

//* CONST OBJ = {
//*     EXEMPLO: 'EXEMPLO', THISBINDEXEMPLO: FUNCTION() {
//*         CONSOLE.LOG(THIS)
//*    }
//* }



//todo ======= EXEMPLO 2 ==== THIS GLOBAL ===============================
// function thisBindExemplo() {
//   console.log(this)
// }

// const obj = {
//   exemplo: 'exemplo',
// }

// thisBindExemplo = thisBindExemplo.bind(obj)

// thisBindExemplo()

{
  /* <ref *1> Object [global] {
  global: [Circular *1],
  clearInterval: [Function: clearInterval],
  clearTimeout: [Function: clearTimeout],
  setInterval: [Function: setInterval],
  setTimeout: [Function: setTimeout] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  },
  queueMicrotask: [Function: queueMicrotask],
  performance: Performance {
    nodeTiming: PerformanceNodeTiming {
      name: 'node',
      entryType: 'node',
      startTime: 0,
      duration: 44.09500002861023,
      nodeStart: 0.6756000518798828,
      v8Start: 3.439900040626526,
      bootstrapComplete: 31.934599995613098,
      environment: 14.703099966049194,
      loopStart: -1,
      loopExit: -1,
      idleTime: 0
    },
    timeOrigin: 1671033808146.19
  },
  clearImmediate: [Function: clearImmediate],
  setImmediate: [Function: setImmediate] {
    [Symbol(nodejs.util.promisify.custom)]: [Getter]
  }
} */
}

//todo =====================================================

// const module = {
//   x: 42,
//   getX: function () {
//     return this.x
//   },
// }

// const unboundGetX = module.getX
// console.log(unboundGetX()) // The function gets invoked at the global scope
// // expected output: undefined

// const boundGetX = unboundGetX.bind(module)
// console.log(boundGetX())
// // expected output: 42
