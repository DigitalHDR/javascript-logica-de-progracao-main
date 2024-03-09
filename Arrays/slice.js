//? O método slice() retorna uma cópia de parte de um
//? array a partir de um subarray criado entre as posições
//? início e fim (fim não é necessário) de um array
//? original. O Array original não é modificado.

//? Valor de retorno
//? Um novo array contendo os elementos extraídos.


//? Sintaxe
// arr.slice([início[,fim]])

//? Parâmetros
//? início Optional
// Índice baseado em zero no qual se inicia a extração.
// Como um índice negativo, início indica um deslocamento em relação ao
// fim da sequência. slice(-2) extrai os dois últimos elementos do array.
// Se início for omitido, slice inicia a partir do índice 0.
// Se início for maior que o comprimento do array, é retornado um array vazio.

//? fim Optional
// Índice baseado em zero o qual é o final da extração. slice extrai até,
// não incluindo, fim.
// slice(1,4) extrai do segundo até o quarto elemento
// (elementos de índice 1, 2 e 3).
// Como índice negativo, fim indica um deslocamento em relação ao fim do array.
// slice(2,-1) extrai o terceiro elemento através do 
// segundo-para-o-último elemento no array.
// Se fim for omitido ou for maior que o tamanho do array, slice considerará 
// o último elemento do array como sendo o fim (arr.length).


//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Retorna uma parte de um array existente |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
// var frutas = ['Banana', 'Laranja', 'Limao', 'Maçã', 'Manga']
// var citricos = frutas.slice(1, 3)
// console.log(citricos)
//! (2) ['Laranja', 'Limao']