//? className
//? altera o nome da uma class diretamente no html

//? propriedade da Elementinterface obtém 
//? e define o valor do classatributo do elemento especificado.

//? Valor
//? Uma variável de string que representa a classe ou classes
//? separadas por espaço do elemento atual.


// exemplo que vi facil de entender
// HTML

<div class="form_content"></div>

// JAVASCRIPT
formItem.className = 'form_content error'

// Aquino javascript vai altera a 
// classe (((form_content))) e ainda colocar outra classe (((error)))
// ou daria pra fazer o inverso
// ou retirar as duas e colocar outra


//todo =====================================================
// aqui procura se dentro do atributo da classe tem 'active',
// se tiver vai passar a ser 'inactive se não vai ficar 'inactive' mesmo 
const el = document.getElementById("item");
el.className = el.className === "active" ? "inactive" : "active";