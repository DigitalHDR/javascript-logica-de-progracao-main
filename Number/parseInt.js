//? O método Number.parseInt() converte um argumento
//? de string e retorna um inteiro da raiz ou base específica.

//? converte de string para número

//? retorno
// Um inteiro convertido de uma dada string.

//? Sintaxe
// Number.parseInt(string,[ radix])

//? Parâmetros

// string
// O valor a ser convertido. Se este argumento não for uma
// string, então ele é convertido a um usando a operação
// abstrata ToString. O espaço em branco inicial neste
// argumento é ignorado.

// radix Optional
// Um inteiro entre 2 e 36 que representa a raiz
// (a base no sistema numérico matemático) de uma string.
// Tome cuidado—o padrão não é 10!

//todo =====================================================
console.log(parseInt('10')) //retorna 10
console.log(parseInt('10.873')) //retorna 10

//todo =====================================================
const num1 = '10'
console.log(parseInt(num1))

//todo =====================================================
const num2 = 30
console.log(Number.parseInt(num2))