//? O método Number.isInteger() determina se o
//? valor passado é um inteiro.

//? Valor retornado
// Um Boolean indicando se o valor é inteiro ou não.

//? Sintaxe
// Number.isInteger(value)

//? Parâmetros
// value
// O valor a testar se é um inteiro.

Number.isInteger(0) // true
Number.isInteger(1) // true
Number.isInteger(-100000) // true

Number.isInteger(0.1) // false
Number.isInteger(Math.PI) // false

Number.isInteger(Infinity) // false
Number.isInteger(-Infinity) // false
Number.isInteger('10') // false
Number.isInteger(true) // false
Number.isInteger(false) // false
Number.isInteger([1]) // false
