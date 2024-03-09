//? A string original não é modificada.

//? O método replace() retorna uma nova string
//? com algumas ou todas as correspondências de um
//? padrão substituídas por um determinado caractere
//? (ou caracteres). O padrão pode ser uma string
//? ou uma RegExp, e a substituição pode ser uma
//? string ou uma função a ser chamada para cada
//? correspondência. Se o padrão for uma string,
//? apenas a primeira ocorrência será substituída.

//? Sintaxe
//? str.replace(regexp|substr, newSubStr|function)

//? regexp
// Um objeto RegExp ou literal. A correspondência ou correspondências
// são substituídas por newSubStr ou o valor retornado
// pela function especificada.

//? substr
// Uma String que será substituída por newSubStr. Ele é tratado
// como uma string textual e não é interpretado como uma expressão
// regular. Apenas a primeira ocorrência será substituída.

//? newSubStr
// A String que substitui a substr recebida do parâmetro #1.
// Uma série de padrões de substituições especiais são suportados.
// Veja a seção "Especificando uma string como parâmetro" abaixo.

//? function
// A função (function) chamada cria uma nova substring
// (para ser colocada no lugar da substring recebida pelo parametro #1).
// Os argumentos fornececidos para essa função estão descritos
// na seção "Especificando uma função como parâmetro" mais abaixo.

//? flags
// Uma string especificando uma combinação de flags de expressão
// regular. O uso do parâmetro flags no método String.prototype.replace()
// é não-padrão. Ao invés de usar este parâmetro, use um objeto
// RegExp com as flags correspondentes. O valor deste parâmetro
// deve ser uma string consistindo em um ou mais dos seguintes
// caracteres para afetar a operação, tais como descrito:

//? expressões regulares
// g // Combinação global.
// i // Ignora diferenças entre maiúsculas e minúsculas.
// m // Combinação em várias linhas.
// y // Sticky

//? Descrição
//? Este método não muda o objeto String. Ele simplesmente retorna uma nova string.

//todo =====================================================

var str = 'Twas the night before Xmas...'
var newstr = str.replace(/xmas/i, 'Christmas')
console.log(newstr)
//! retorna "Twas the night before Christmas..."

//todo =====================================================

// Usando global e ignore com replace()
// Substituir globalmente, "g", só pode ser feito com uma expressão regular.
// No exemplo a seguir, a expressão regular inclui as flags global
// e ignore que permitem a função replace() substituir cada "maçãs"
// por "laranjas" na string.

var re = /maçãs/gi
var str = 'As maçãs são redondas. As maçãs são suculentas.'
var newstr = str.replace(re, 'laranjas')
console.log(newstr)

//! retorna
//! "As laranjas são redondas. As laranjas são suculentas."

//todo =====================================================

// Trocando palavras em uma string
// O script a seguir troca as palavras na string. Para o texto que
// vai substituir, o script usa grupos de captura e os padrões
// de substituição $1 e $2.

var re = /(\w+)\s(\w+)/
var str = 'John Smith'
var newstr = str.replace(re, '$2, $1')
console.log(newstr)
//! Smith, John
