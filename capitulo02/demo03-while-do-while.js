// enquanto nao mudar, não para!
/*let termoDeparada = true
let contador = 0
while(termoDeparada) {
    termoDeparada = contador < 10
    if(contador % 2 === 0) {
        console.log('Numero par', contador)
    }
    contador += 1 // contador = contador + 1
}

// Diferença do DO e do WHILE, é que ele verifica primeiro e verifica depois.
// Já o while já verificou, ele indetificou que o termo de parada é o true

// roda a primera vez e testa a variavel depois!
do {
    console.log('Só uma vez!, pois o termoDeParada é', termoDeparada)

} while(termoDeparada)

*/

/*while(termoDeparada) {
    // nao vai executar
    console.log('Nem vai executar')
}*/

// precisa de um termo de parada, senao iria executar infinitamente
/*while(true) {
    // nao vai executar
    console.log('Nem vai executar')
}*/

// QUIZ
/*let termoParada = true
let contador = 0
while(termoParada) {
    console.log(contador)
    if(contador++ < 3)
        continue
    else
termoParada = false
}*/

const listaDeTarefas = [
    { tarefa: 'lavar o chão', id: 1},
    { tarefa: 'lavar a louça', id: 2},
    { tarefa: 'arrumar o quarto', id: 3},
]

/*let indice = 0
do {
    console.log(listaDeTarefas[indice].tarefa)
    indice++
} while(indice < listaDeTarefas.length)*/

let indice = 0
while(indice < listaDeTarefas.length) {
    console.log(listaDeTarefas[indice].tarefa)
    indice++
}

let termoParada = true
while(termoParada) {
    console.log('Olá Mundo!')
    break
}
