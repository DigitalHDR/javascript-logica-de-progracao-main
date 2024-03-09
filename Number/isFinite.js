//? O método Number.isFinite()  determina se o valor
//? passado é um número finito.

//? Retorno
// Um Boolean indicando se o valor passado é ou não um número finito.

//? Sintaxe
// Number.isFinite(valor)

//? Parâmetros
//? valor
// O valor a ser testado.

Number.isFinite(Infinity) // false
Number.isFinite(NaN) // false
Number.isFinite(-Infinity) // false

Number.isFinite(0) // true
Number.isFinite(2e64) // true

Number.isFinite('0') // false, teria sido true com a função
// global isFinite('0')
Number.isFinite(null) // false, teria sido true com a função
// global isFinite(null)
