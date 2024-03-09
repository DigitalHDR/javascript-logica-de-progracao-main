//? O método sort() ordena os elementos do próprio
//? array e retorna o array. A ordenação não é
//? necessariamente estável. A ordenação padrão é de
//? acordo com a  pontuação de código unicode.

//? A complexidade do tempo de execução ou a quantidade
//? de memória utilizada pela ordenação não pode ser
//? garantido e depende da implementação realizada

//? Valor de Retorno
//? O array ordenado. Note que o array é ordenado de
//? acordo com a pontuação de código Unicode de cada
//? um dos caracteres, e nenhuma cópia é feita.

//? Sintaxe
// arr.sort([funcaoDeComparacao])

//? Parâmetros
//? funcaoDeComparacao Optional
// Especifica uma função que define a ordenação. Se omitido, o array
// é ordenado de acordo com a pontuação de código Unicode de cada um
// dos caracteres, de acordo com a conversão de cada elemento para string.

//? primeiroElemento
// O primeiro elemento para a comparação.

//? segundoElemento
// O segundo elemento para comparação.

//todo =====================================================
// var fruit = ['cherries', 'apples', 'bananas']
// var result1 = fruit.sort()
// console.log(result1)
//! (3) ['apples', 'bananas', 'cherries']
//? note esta ordenando na ordem alfabética
//todo =====================================================
// var scores = [1, 10, 2, 21]
// var result2 = scores.sort()
// console.log(result2)
//! (4) [1, 10, 2, 21]
//? Observe que 10 vem antes do 2,
//? porque '10' vem antes de '2' em ponto de código Unicode.
//todo =====================================================
// var things = ['word', 'Word', '1 Word', '2 Words']
// var result3 = things.sort()
// console.log(result3)
//! (4) ['1 Word', '2 Words', 'Word', 'word']
//? Em Unicode, números vêem antes de letras maiúsculas,
//? as quais vêem antes das minúsculas.