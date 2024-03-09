//? O método Number.isNaN() determina se o valor passado
//? é NaN. Versão mais robusta do original global isNaN.

//? Sintaxe
// Number.isNaN(testValue)

//todo =====================================================
Number.isNaN(NaN) // true
Number.isNaN(Number.NaN) // true
Number.isNaN(0 / 0) // true

//todo =====================================================
// everything else: false
Number.isNaN(undefined)
Number.isNaN({})

Number.isNaN(true)
Number.isNaN(null)
Number.isNaN(37)

Number.isNaN('37')
Number.isNaN('37.37')
Number.isNaN('')
Number.isNaN(' ')
Number.isNaN('NaN')
Number.isNaN('blabla') // e.g. este teria sido true com isNaN
