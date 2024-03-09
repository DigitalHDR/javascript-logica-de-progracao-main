//? O método lastIndexOf() retorna o índice da última
//? ocorrência do valor especificado encontrado na String.
//? Quando fromIndex é especificado, a pesquisa é
//? realizada de trás para frente. Retorna -1 se o
//? valor não for encontrado.

//? Sintaxe
//? str.lastIndexOf(searchValue[, fromIndex])

//? Case-sensitivity
//? Faz diferença de maiusculo e minusculo

'ricardo'.lastIndexOf('r')
// retorna 4

'ricardo'.lastIndexOf('a', 3)
// retorna 3

'ricardo'.lastIndexOf('a', 0)
// retorna -1

'ricardo'.lastIndexOf('x')
// retorna -1

'ricardo'.lastIndexOf('r', -5)
// retorna 0

'ricardo'.lastIndexOf('r', 0)
// retorna 0

'ricardo'.lastIndexOf('')
// retorna 7

'ricardo'.lastIndexOf('', 2)
// retorna 2

//todo =====================================================
//? Case-sensitivity
//? Faz diferença de maiusculo e minusculo

'Blue Whale, Killer Whale'.lastIndexOf('blue')
// retorna -1
