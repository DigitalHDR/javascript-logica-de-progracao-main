//? O método indexOf() retorna o primeiro índice em
//? que o elemento pode ser encontrado no array, retorna -1
//? caso o mesmo não esteja presente.

//? Sintaxe
// array.indexOf(elementoDePesquisa, [pontoInicial = 0])

//? Parâmetros
//? elementoDePesquisa
// Elemento a ser pesquisado no array.

//? pontoInicial
// O índice para iniciar a procura. Se o índice for maior ou igual ao
// tamanho do array, é retornado -1 e signfica que o item não será
// procurado. Se o pontoInicial é fornecido com um número negativo,
// é tomado como deslocamento da extremidade do array.
// Nota: se o pontoInicial fornecido é negativo, a procura no array
// acontece de frente para trás. Se o pontoInicial fornecido é 0,
// então o array inteiro será pesquisado. Padrão: 0 (pesquisa em todo array)

//todo =====================================================

// var array = [2, 5, 9]
// var result1 = array.indexOf(2)
// var result2 = array.indexOf(7);     // -1
// var result3 = array.indexOf(9, 2);  // 2
// var result4 = array.indexOf(2, -1); // -1
// var result5 = array.indexOf(2, -3);

// console.log(result1)
// //! 0

// console.log(result2)
// //! -1

// console.log(result3)
// //! 2

// console.log(result4)
// //! -1

// console.log(result5)
// //! 0
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*  | Encontrar todas as ocorrências de um elemento |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var indices = []
// var array = ['a', 'b', 'a', 'c', 'a', 'd']
// var elemento = 'a'
// var idx = array.indexOf(elemento)

// while (idx != -1) {  // -1 aqui nesse caso é que achou o valor, pois -1 quer dizer que achou o valor.
//   indices.push(idx)
//   idx = array.indexOf(elemento, idx)
// }

// console.log(indices)
// //! (3) [0, 2, 4]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//* | Encontrar se um elemento existe ou não, e atualizar o array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var vegetais = ['batata', 'tomate', 'pimenta', 'pimentao']

// function atualizarColecaoVegetais(vegetais, vegetal) {
//   if (vegetais.indexOf(vegetal) === -1) {
//     vegetais.push(vegetal)
//     console.log('Nova coleção de vegetais é : ' + vegetais)
//   } else if (vegetais.indexOf(vegetal) > -1) {
//     console.log(vegetal + ' já existe na coleção de vegetais.')
//   }
// }

// atualizarColecaoVegetais(vegetais, 'espinafre')
// //! Nova coleção de vegatais é : batata,tomate,pimenta,pimentao,espinafre

// atualizarColecaoVegetais(vegetais, 'espinafre')
// //! espinafre já existe na coleção de vegetais.
