//? O método reduce() executa uma função
//? reducer (fornecida por você) para cada elemento
//? do array, resultando num único valor de retorno.

//? Sintaxe
// array.reduce(callback( acumulador, valorAtual[, index[, array]] )[, valorInicial])

//? Parâmetros

//? callback
// Função que é executada em cada valor no array (exceto no primeiro, 
// se nenhum valorInicial for passado); recebe quatro argumentos:

//? acumulador
// É o valor inicial (ou o valor do callback anterior). Este valor inicia
//  com o valorInicial e será retornado na última iteração.

//? valorAtual
// Opcional. O índice do elemento atual que está sendo processado no array.
// Começa a partir do index 0 se um valorInicial for fornecido. Do contrário,
// começa do index 1.

//? valorInicial
// Opcional. Valor a ser usado como o primeiro argumento da primeira chamada
// da função callback. Se nenhum valorInicial é fornecido, o primeiro elemento
// do array será usado como o valor inicial do acumulador e o valorAtual
// não será lido. Chamar reduce() em uma array vazia sem
// valor inicial retornará um erro.


//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Retorne a pessoa mais velha  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const pessoas = [
    {nome: 'lucas', idade: 33},
    {nome: 'pabline', idade: 23},
    {nome: 'ana', idade: 35},
    {nome: 'aline', idade: 19},
    {nome: 'carol', idade: 28},
]

const pessoaMaisVelha = pessoas.reduce(function(acumulador, valor) {
    if(acumulador.idade > valor.idade) {
        return acumulador
    }
    return valor
})
console.log(pessoaMaisVelha)
// //! { nome: 'ana', idade: 35 }
//todo =====================================================
// ATENÇÃO RACIOCIO UM POUCO COMPLICADO
// CASO NÃO CONSIGA ENDENDER COPIE O CODIGO E DEBUG ELE E VEJA OS PASSA A PASSO
// O PARAMETRO DO REDUCER,
//  ACUMULADOR REFERE-SE AO 1° INDICE DO ARRAY O QUE TEM O NOME: LUCAS.
//? parece errado VALOR REFERE-SE AO 2° INDICE DO ARRAY O QUE TEM NOME: PABLINI.

// DENTRO DO IF
// ACUMULADOR.IDADE, IDADE SE REFERE-SE AO DO PROPRIO OBJETO QUE MARCA IDADE.
// >  LOGICA PRA PEGAR SEMPRE O QUE TIVER IDADE MAIOR
// VALOR.IDADE, IDADE SE REFERE-SE AO DO PROPRIO OBJETO QUE MARCA IDADE.

// SEMPRE QUE O ACUMULADOR FOR MAIOR EM IDADE QUE O VALOR, VAI SER RETORNADO ACUMULADOR

// SEMPRE QUE O VALOR FOR MAIOR EM IDADE QUE O ACUMULADOR, VAI SER RETORNADO VALOR

// NO CASO DE DEBUGAR SEMPRE QUE VALOR FOR MAIO, APÓS PASSAR
// PELO RETURN ELE PASSA A SER O NOVO ACUMULADOR.
// E NO CASO RETORNE O ACUMULADOR ELE CONTINUA SENDO ACUMULADOR
//todo =====================================================

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | Retorne um array com o dobro dos valores  | da pra fazer com map()
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   acumulador.push(valor * 2)
//?   console.log(acumulador, valor)
//   return acumulador
// }, [])
// console.log(total)
//! (13) [10, 100, 160, 2, 4, 6, 10, 16, 14, 22, 30, 44, 54]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Retorne a soma de todos os valores  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   return (acumulador += valor)
// })
// console.log(total)
//! 236
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | Retorne a soma de todos os valores impar da | pra fazer com filter()
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 2 !== 0) acumulador += valor
//   return acumulador
// }, 0)
// console.log(total)
//! 74
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | Retorne um array com os impar | pra fazer com filter()
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 2 !== 0) acumulador.push(valor)
//   return acumulador
// }, [])
// console.log(total)
//! (8) [5, 1, 3, 5, 7, 11, 15, 27]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Retorne um array com os pares  | pra fazer com filter()
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27]
// const total = numeros.reduce(function (acumulador, valor, indice, array) {
//   if (valor % 2 === 0) acumulador.push(valor)
//   console.log(acumulador, valor)
//   return acumulador
// }, [])
// console.log(total)
//! (5) [50, 80, 2, 8, 22]
