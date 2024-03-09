//? Gerando um número aleatório entre dois valores

function numeroAleatorio(min, max) {
  return Math.random() * (max - min) + min
}

const aleatorio = numeroAleatorio(5, 10).toFixed()
console.log(aleatorio)
//!  aqui vai aparecer os numero aleatorios de 5 a 10
