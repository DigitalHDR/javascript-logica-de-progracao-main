//? O método push() adiciona um ou mais
//? elementos ao final de um array e retorna
//? o novo comprimento desse array.


//? Sintaxe
// arr.push(elemento1, ..., elementoN)

//? Parâmetros
// elementoN
// Os elementos a serem incluídos ao final do array.
//todo =====================================================

// var numeros = [1, 2, 3]
// const result1 = numeros.push(4)
// console.log(result1)
// console.log(numeros)
//! 4
//! (4) [1, 2, 3, 4]
//todo =====================================================
// var numeros = [1, 2, 3]
// const result2 = numeros.push(5, 6, 7)
// console.log(result2)
// console.log(numeros)
//! 6
//! (6) [1, 2, 3, 5, 6, 7]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Adicionando elementos a um array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var esportes = ['futebol', 'beisebol']
// var total = esportes.push('handebol', 'natacao')
// console.log(total)
// console.log(esportes)
//! 4
// (4) ['futebol', 'beisebol', 'handebol', 'natacao']
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Fusão de dois arrays |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var vegetais = ['cenoura', 'batata']
// var maisVegetais = ['repolho', 'beterraba']
// console.log(unir)
// Array.prototype.push.apply(vegetais, maisVegetais)
// console.log(vegetais)