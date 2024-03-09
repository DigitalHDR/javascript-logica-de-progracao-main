//? Retorna o elemento pai em que está
//? Obtenha o nome do nó pai

//! 1°
// let nomeDoElementoPai = document.getElementById('myLI').parentNode.nodeName
// document.getElementById('demo').innerHTML = nomeDoElementoPai

//todo =====================================================

//! 2°

const closebtn = document.querySelector('.closebtn')

closebtn.addEventListener('click', ocultaDivPai)

function ocultaDivPai() {
    this.parentNode.style.display = 'none'
}
