//?    O método fill() preenche todos os valores do array
//? a partir do índice inicial a um índice final com um valor estático

//arr.fill(valor[, ínicio = 0[, fim = this.length]])

//? Parâmetros
// valor
// Valor para preencher o array.

// ínicio
// Opcional. Índice inicial.

// fim
// Opcional. Índice final.

// const array = [1,1,1,1,1,1,1,1,1]
// array.fill(0)
// console.log(array)
//! (9) [0, 0, 0, 0, 0, 0, 0, 0, 0]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Troca todos os array pelo numero 0 |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const array = [1,1,1,1,1,1,1,1,1]
// array.fill('teste com numero', 2)
// console.log(array)
//! (9) [1, 1, 0, 0, 0, 0, 0, 0, 0]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*   Indice de inicio do paramertro Perceba que o numero
//*   0 começa do indice 2 do array |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
const array = [1,1,1,1,1,1,1,1,1]
array.fill(0, 2, 5)
console.log(array)
//! (9) [1, 1, 0, 0, 0, 1, 1, 1, 1]
// Indice de final de parametro Perceba que colocando para começar no
// indice 5 e ele vai somente até o 4 indice, sendo sempre um a menos
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// const exemplo = [1, 2, 3].fill(4)
// console.log(exemplo)[
//! (3) [4, 4, 4]
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     |  |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
