//? O método forEach() executa uma dada função
//? em cada elemento de um array.

//?Sintaxe
//arr.forEach(callback(currentValue [, index [, array]])[, thisArg]);

//? Parâmetros

//? callback
// Função para executar em cada elemento, recebendo três argumentos:

//? currentValue
// O valor atual do elemento sendo processado no array.

//? index Optional
// O índice do elemento atual sendo processado no array.

//? array Optional
// O array que forEach() está sendo aplicado.

//? thisArg Optional
// Opcional. Valor a ser usado como this quando executar callback.

//todo =====================================================

function logArrayElements(valor, index, array) {
  console.log(`No índice ${index} o valor que está no array é ${valor}`)
}

const numerosArray = [2, 5, 9]

numerosArray.forEach(logArrayElements)
//! a[0] = 2
//! a[1] = 5
//! a[2] = 9

//parecido como o map()
