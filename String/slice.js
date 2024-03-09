//? O método split() divide uma String em uma lista
//? ordenada de substrings, coloca essas substrings
//? em um array e retorna o array. A divisão é feita
//? procurando um padrão, onde o padrão é fornecido
//? como o primeiro parâmetro na chamada do método.

// Sintaxe
// str.split([separator[, limit]])

//? separator
// Opcional. Especifica o caractere, ou conjunto de caracteres,
// a ser usado para separar a string. O separador pode ser uma string ou uma

//? limite
// Opcional. Um número inteiro não negativo especificando um
// limite no número de divisões a serem encontradas. O método
// split() ainda dividirá em cada ocorrência do separador,
// até que o número de itens divididos corresponda ao limite
// ou que a string fique aquém do separador.

//? Valor retornado
// Um array de strings divididos em cada ponto onde o separador
// ocorre na string informada.

const myString = ''
const splits = myString.split()

// console.log(splits)
// retorna [""]

//todo =====================================================

function splitString(stringToSplit, separator) {
  var arrayOfStrings = stringToSplit.split(separator)

  console.log('A string original é: "' + stringToSplit + '"')
  console.log('O separador é: "' + separator + '"')
  console.log(
    'O array tem ' +
      arrayOfStrings.length +
      ' elementos: ' +
      arrayOfStrings.join(' / ')
  )
}

var tempestString = 'Oh brave new world that has such people in it.'
var monthString = 'Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez'

var space = ' '
var comma = ','

splitString(tempestString, space)
splitString(tempestString)
splitString(monthString, comma)

// A string original é: "Oh brave new world that has such people in it."

// O separador é: " "

// O array tem 10 elementos: Oh / brave / new / world / that / has / such / people / in / it.

// A string original é: "Oh brave new world that has such people in it."

// O separador é: "undefined"

// O array tem 1 elementos: Oh brave new world that has such people in it.

// A string original é: "Jan,Fev,Mar,Abr,Mai,Jun,Jul,Ago,Set,Out,Nov,Dez"

// O separador é: ","

// O array tem 12 elementos: Jan / Fev / Mar / Abr / Mai / Jun / Jul / Ago / Set / Out / Nov / Dez

//todo =====================================================
console.log('=============================================1')
//todo =====================================================

var names = 'Harry Trump ;Fred Barney; Helen Rigby ; Bill Abel ;Chris Hand '

console.log(names)

var re = /\s*;\s*/
var nameList = names.split(re)

console.log(nameList)

//todo =====================================================
console.log('=============================================2')
//todo =====================================================

//? Retornando um número limitado de divisões
// No exemplo a seguir, o split() procura por 0 ou mais espaços
// em uma string e retorna as 3 primeiras divisões que encontrar.


var myString1 = 'Hello World. How are you doing?'
var splits1 = myString1.split(' ', 3)

console.log(splits1)
