let frutaExistenteNoMercado = false
let temCPUSuficiente = true

//
// obter valores do terminal
const args = process.argv
const saldo = args[args. length -1]
console.log('args', args)
console.log('saldo', saldo)
if(isNaN(saldo)) {
    console.log('valor invalido!!!')
    return;
}

let tipoCliente = "premium"
if(saldo < 9) {
    tipoCliente = "basic"
}
else if (saldo >= 10 && saldo < 20) {
    tipoCliente = "gold"  
}
else {
    tipoCliente = null
}

// null, undefined, vazio, 0 ===false!
if(!tipoCliente) {
    tipoCliente = "indefinido"
}

console.log('tipoDoCliente', tipoCliente)

const operadorOu = 1 > 2 || 2 > 1
const operadorE = 1 === 1 && 2 !== 2
const operadorNot = !(1==1)

//const idade = 18
const idade = 1
// ternario
/*const resultado = idade >= 18 ?
                        "pode dirigir" :
                        "não pode dirigir!!"
console.log('resultado', resultado)*/

// run
// node demo01-if-else.js esteParamentro!
// node demo01-if-else.js 100
// node demo01-if-else.js 100 20 20

// QUIZ
//const item = "0"
//console.log(!!item)

//const resultado = 1 ? (null || ((1 != '1') ? "Hello world!": "Hackerzao")) : "não zero";
//console.log('resultado', resultado)

//const item = "abc"; console.log(isNaN(item) ? "Hey jude" : "Hey Julia");

const item = (!0 ? "2a" : "3b")