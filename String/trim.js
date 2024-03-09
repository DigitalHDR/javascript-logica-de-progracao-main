//? O método trim() remove os espaços em branco
//? (whitespaces) do início e/ou fim de um texto.
//? É considerado espaço em branco (espaço, tabulação,
//? espaço fixo/rígido, etc.) e todo sinal de fim de
//? linha de texto (LF, CR, etc.).

// Sintaxe
// str.trim()

//todo =====================================================

//? .trim() removendo whitespace de ambos os lados

var str = '   foo  '
console.log(str.trim()) // retorna 'foo'

//? Outro exemplo de .trim() removendo whitespace de
//? apenas um lado.

var str = 'foo    '
console.log(str.trim()) // retorna 'foo'
