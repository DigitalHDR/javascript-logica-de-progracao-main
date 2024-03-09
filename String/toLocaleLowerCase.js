//? O método toLocaleLowerCase() retorna o valor da string
//? em minúsculas, de acordo com qualquer mapeamento de caixa
//? de texto específico da localidade.

//? Valor retornado
// Uma nova string

// Sintaxe
// str.toLocaleLowerCase()
// str.toLocaleLowerCase(locale)
// str.toLocaleLowerCase([locale, locale, ...])

const dotted = 'İstanbul'

console.log(`EN-US: ${dotted.toLocaleLowerCase('en-US')}`)
// expected output: "i̇stanbul"

console.log(`TR: ${dotted.toLocaleLowerCase('tr')}`)
// expected output: "istanbul"

//todo =====================  Hard core ================================

'ALFABETO'.toLocaleLowerCase() // 'alfabeto'

'\u0130'.toLocaleLowerCase('tr') === 'i' // true
'\u0130'.toLocaleLowerCase('en-US') === 'i' // false

let locales = ['tr', 'TR', 'tr-TR', 'tr-u-co-search', 'tr-x-turkish']
'\u0130'.toLocaleLowerCase(locales) === 'i' // true
