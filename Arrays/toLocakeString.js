//? O método toLocaleString() retorna uma representaçao
//? de elementos de um array. Os elementos são convertidos
//? para Strings utilizando seus respectivos métodos
//? toLocaleString e essas cadeias são separadas por
//? uma sequência específica de localidade (separados por virgula ",")

//? Os elementos de um array são convertidos para strings
//? usando seus respectivos métodos toLocaleString:

//? >>>>> Object: Object.prototype.toLocaleString()
//? >>>>> Number: Number.prototype.toLocaleString()
//? >>>>> Date: Date.prototype.toLocaleString()


//? Sintaxe
//? toLocaleString()
//? toLocaleString(locales)
//? toLocaleString(locales, options)

//? Parâmetros
// Os argumentos localese optionspersonalizam o comportamento da
// função e permitem que os aplicativos especifiquem a linguagem
// cujas convenções de formatação devem ser usadas. Em implementações,
// que ignoram os argumentos localese options, a localidade usada e
// a forma da string retornada são totalmente dependentes da implementação.


// var numero = 'Hoje'
// var data = new Date()
// var meuArray = [numero, data, 'qualquer coisa aqui']

// var resultado = meuArray.toLocaleString()

// console.log(resultado)
//! 1.337,         19/09/2022 13:59:15,        foo

