//? O método valueOf() retorna o valor
//? primitivo contido no objeto Number.

//? Sintaxe
// numObj.valueOf()

const numObj = new Number(42)
console.log(typeof numObj)
// expected output: "object"

const num = numObj.valueOf()
console.log(num)
// expected output: 42

console.log(typeof num)
// expected output: "number"

console.log('=====================================================')

var numObj2 = new Number(10)
console.log(typeof numObj2) // object

var num2 = numObj2.valueOf()
console.log(num2) // 10
console.log(typeof num2) // number
