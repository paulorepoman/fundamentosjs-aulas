//const podeDirigir = false
const podeDirigir = true
if(podeDirigir) {
    console.log('Ela pode dirigir')
}

const saldoEmConta = 1
if(!saldoEmConta) {
    console.log('não tem saldo')
}

const bollComString = "ae hackerzão!!"

// força o valor a true ou false
// de acordo com a tabela
console.log('boolComString', !!bollComString)

// negação
console.log('negação', !bollComString)

// negação + forlar a bool
console.log(
    'negação + forçar bool',
    ! (!!bollComString) 
)

// Quiz
console.log(!!"0")
console.log(!true)
console.log(!(!! "Olá mundo"))
console.log(!false)