//? Sumário
//? O método concat () retorna um novo array contendo todos
//? os arrays ou valores passados como parâmetro

//arr.concat(valor1, valor2, ..., valorN)

// const a1 = [1,2,3]
// const a2 = [4,5,6]
// const a3 = [...a1, 'lucas', ...a2, [7,8,9]]
// console.log(a3)
//! (8) [1, 2, 3, 'lucas', 4, 5, 6, Array(3)]
// Usando o operador spreed é melhor, só não aceita objeto
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Concatenando dois arrays |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var alpha = ['a', 'b', 'c']
// var numeric = [1, 2, 3]

// var alphaNumeric = alpha.concat(numeric)
// console.log(alphaNumeric)
//! (6) ['a', 'b', 'c', 1, 2, 3]
///* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Exemplo: Concatenando três arrays |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
var num1 = [1, 2, 3]
var num2 = [4, 5, 6]
var num3 = [7, 8, 9]

var nums = num1.concat(num2, num3)
console.log(nums)
//! (9) [1, 2, 3, 4, 5, 6, 7, 8, 9]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%