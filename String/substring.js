//? O método substring() retorna a parte da string entre
//? os índices inicial e final, ou até o final da string

// Valor retornado
// Uma nova string contendo a parte especificada da string fornecida.

// Sintaxe
// str.substring(indexStart[, indexEnd])

//? Parâmetros
//? indexStart
// Um inteiro entre 0 e o comprimento da string (str.length),
// especificando a posição na string do primeiro caractere a ser
// incluído na substring retornada.

//? indexEnd
// Opcional. Um inteiro entre 0 e o comprimento da string
// (str.length), especificando a posição na string do primeiro
// caractere a não ser mais incluído na substring retornada.

//todo =====================================================

var anyString = 'Mozilla'

// Mostra "Moz"
console.log(anyString.substring(0, 3))
console.log(anyString.substring(3, 0))

// Mostra "lla"
console.log(anyString.substring(4, 7))
console.log(anyString.substring(7, 4))

// Mostra "Mozill"
console.log(anyString.substring(0, 6))

// Mostra "Mozilla"
console.log(anyString.substring(0, 7))
console.log(anyString.substring(0, 10))

//todo =====================================================
console.log('==============================================')
//todo =====================================================

// Mostra 'illa', os últimos 4 caracteres
let anyString1 = 'Mozilla'
let anyString4 = anyString1.substring(anyString1.length - 4)
console.log(anyString4)

// Mostra 'zilla', os últimos 5 caracteres
let anyString2 = 'Mozilla'
let anyString5 = anyString2.substring(anyString2.length - 5)
console.log(anyString5)

//todo =====================================================
console.log('==============================================')
//todo =====================================================

let text = 'Mozilla'
console.log(text.substring(2, 5)) // retorna "zil"
console.log(text.substring(2, 5) + ' novo texto...') // retorna "zil novo texto..."

//todo =====================================================
console.log('==============================================')
//todo =====================================================

console.log(text.substring(-5, 2)) // retorna "Mo"
console.log(text.substring(-5, -2)) // retorna ""
