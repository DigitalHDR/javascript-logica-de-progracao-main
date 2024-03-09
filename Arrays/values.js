//? O método values() retorna um novo objeto de
//? Array Iterator que contém os valores para cada índice no array.

//? Sintaxe
// values()


// var arr = ['w', 'y', 'k', 'o', 'p']
// var eArr = arr.values()
// console.log(eArr)
// //! Array Iterator {}

// for (let letter of eArr) {
//   console.log(letter)
//   //! w,y,k,o,p
// }

//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%
//*     | Iteração alternativa |
//* %%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%

// var arr = ['w', 'y', 'k', 'o', 'p']
// var eArr = arr.values()
// console.log(eArr.next().value) //! w
// console.log(eArr.next().value) //! y
// console.log(eArr.next().value) //! k
// console.log(eArr.next().value) //! o
// console.log(eArr.next().value) //! p

//todo =====================================================

// var testeRapido = document.querySelector(".testeRapido")

// var arr = ['w', 'y', 'k', 'o', 'p']
// var teste = arr.entries()

// for(let novo of teste) {
//   testeRapido.innerHTML += `${novo} <br> `
// }

//! [ 0, 'w' ]
//! [ 1, 'y' ]
//! [ 2, 'k' ]
//! [ 3, 'o' ]
//! [ 4, 'p' ]