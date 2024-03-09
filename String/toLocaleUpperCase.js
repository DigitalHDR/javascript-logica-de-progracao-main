//? O método toLocaleUpperCase() retorna o valor da
//? string em maiúsculas, de acordo com qualquer mapeamento
//? de caixa de texto específico da localidade.

//? Sintaxe
// str.toLocaleUpperCase()
// str.toLocaleUpperCase(locale)
// str.toLocaleUpperCase([locale, locale, ...])

//todo =====================================================

const city = 'istanbul'

console.log(city.toLocaleUpperCase('en-US'))
// expected output: "ISTANBUL"

console.log(city.toLocaleUpperCase('TR'))
// expected output: "İSTANBUL"

//todo ====================== Hard core ===============================

'alfabeto'.toLocaleUpperCase() // 'ALFABETO'

'Gesäß'.toLocaleUpperCase() // 'GESÄSS'

'i\u0307'.toLocaleUpperCase('lt-LT') // 'I'

let locales = ['lt', 'LT', 'lt-LT', 'lt-u-co-phonebk', 'lt-x-lietuva']
'i\u0307'.toLocaleUpperCase(locales) // 'I'
