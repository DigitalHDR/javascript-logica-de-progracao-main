//? Resumo sempre envia pro final (parecido com insertBefore)

//! 1°
// function myFunction() {
//   const node = document.createElement('li')
//   const textnode = document.createTextNode('Water')
//   node.appendChild(textnode)
//   document.getElementById('myList').appendChild(node)
// }
//todo =====================================================

//! 2°
function myFunction() {
  const node = document.getElementById('myList2').lastElementChild
  document.getElementById('myList1').appendChild(node)
}
