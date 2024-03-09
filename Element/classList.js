//? Métodos
//? add( String [, String] )
//? Adicione valores de classe especificados. Se essas classes já existem no atributo do elemento, elas são ignoradas.

//? remove( String [,String] )
//? Remover valores de classe específicos

//? item ( Number )
//? Retorna o valor da classe por índice na coleção.

//? toggle ( String [, force] )
//? Quando apenas um argumento está presente: Toggle class value; Ou
//? seja, se a classe existir, em seguida, removê-lo e
//? retornar false, se não, então adicioná-lo e retornar true.

//? Quando um segundo argumento está presente: Se o segundo argumento
//? é avaliado como true, adicione o valor especificado da
//? classe e, se ele for avaliado como false, remova-o.

//? contains( String )
//? Verifica se o valor da classe especificado existe no
//? atributo de classe do elemento.

const div = document.createElement('div')
div.className = 'foo'

// div é uma referência de objeto para um elemento <div> com class = "foo bar"
div.classList.remove('foo')
div.classList.add('anotherclass')

// Se estiver visível, remova-o, caso contrário, adicione-o
//! se tiver remover, se nao tiver cria
// div.classList.toggle('visible')

// adicionar/remover, dependendo do teste condicional, i menos de 10
//? div.classList.toggle('visible', i < 10) apenas exemplo que da pra fazer isso

// alert(div.classList.contains('foo')) //! retorna true ou false

// adicionar ou remover várias classes
// div.classList.add('foo', 'bar')
// div.classList.remove('foo', 'bar')
