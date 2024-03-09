//? O método replaceAll() retorna uma nova string
//? com todas as ocorrências de um padrão substituídas
//? por uma substituição. O padrão pode ser uma string
//? ou uma RegExp, e a substituição pode ser uma string
//? ou uma função a ser chamada para cada ocorrência.

//? Sintaxe
//? const newStr = str.replaceAll(regexp|substr, newSubstr|function)

//? regexp (padrão)
// Uma RegExp ou literal com o sinalizador (flag) global.
// As ocorrências serão substituídas por newSubstr ou pelo
// valor retornado da function (função) especificada.

//? substr (padrão)
// Uma String que deve ser substituída por newSubstr.
// É tratada como uma string literal e não é interpretada
// como uma expressão regular (RegExp).

//? newSubstr (substituição)
// É a String que substitui a substring especificada pelo
// parâmetro regexp ou substr. Um número de padrões especiais
// para substituição são suportados; veja a seção
// "Especificando uma string como parâmetro" abaixo.

//? function (substituição)
// Uma função a ser chamada retornando a nova substring a
// ser usada para substituir as correspondências para a dada
// regexp ou substr. Os argumentos passados para esta função
// são descritos na seção "Especificando uma função como parâmetro" abaixo.

//todo =====================================================

const p = 'The quick brown dog jumps over the lazy dog.'
console.log(p.replaceAll('dog', 'monkey'))
//! The quick brown monkey jumps over the lazy monkey.

//todo =====================================================

console.log('aabbcc'.replaceAll('b', '.'))
// 'aa..cc'

//todo =====================================================

//? RegExp sem flag "g"  >>>>>>>>>>>>>>>>>>>>>>>> retorando erro
// Ao usar uma expressão regular para realizar uma pesquisa
// , a mesma deve conter a flag global "g". O código abaixo não irá funcionar

// console.log('aabbcc'.replaceAll(/b/, '.'))
//! TypeError: replaceAll must be called with a global RegExp

//todo =====================================================

console.log('aabbcc'.replaceAll(/b/g, '.'))
//! aa..cc
