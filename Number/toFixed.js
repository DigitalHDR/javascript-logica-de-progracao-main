//? O método toFixed() formata um número
//? utilizando notação de ponto fixo.

//? Sintaxe
// numObj.toFixed([dígitos])

//? Parâmetros
// dígitos
// Opcional. O número de dígitos que aparecem depois
// do ponto decimal; este pode ser um valor entre
// 0 e 20, inclusive, e algumas implementacões podem
// suportar uma variação de números maiores. Se
// este argumento for omitido, será tratado como 0.

var numObj = 12345.6789

numObj.toFixed()
// Retorna '12346': note o arredondamento, não possui
// nenhuma parte fracionária

numObj.toFixed(1)
// Retorna '12345.7': note o arredondamento

numObj.toFixed(6)
// Retorna '12345.678900': note que adicionou zeros

;(1.23e20).toFixed(2)
// Retorna '123000000000000000000.00'

;(1.23e-10).toFixed(2)
// Retorna '0.00'

;(2.34).toFixed(1)
// Retorna '2.3'

;(2.35).toFixed(1)
// Retorna '2.4'. Note que arredonda para cima neste caso.

;-(2.34).toFixed(1)
// Retorna -2.3 (devido à precedência do operador, literais de números negativos não retornam uma string...)

;(-2.34).toFixed(1)
// Retorna '-2.3' (...a menos que se utilize parênteses)

//todo =====================================================
const num1 = 10283.2334
console.log(num1.toFixed(2))