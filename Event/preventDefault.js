//? Cancela o evento se for cancelável, sem parar
//? a propagação do mesmo.

const checkbox = document.querySelector('#id-checkbox')

checkbox.addEventListener('click', checkboxClick, false)

function checkboxClick(event) {
  let warn = 'preventDefault() não vai deixar você verificar isso!!<br>'
  document.getElementById('output-box').innerHTML += warn
  event.preventDefault()
}
