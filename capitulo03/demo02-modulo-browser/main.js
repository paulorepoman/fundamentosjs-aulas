window.onload = () => {
    console.log('tela carregou!!')
    //console.log('tela carregou!!', Matematica.subtrair(1, 2))
    const btn = document.getElementById('btnCalcular')
    /*btn.onclick = () => {
        console.log('clicou!!')
    }*/
    btn.onclick = click
    function obterValorInput(id) {
        const item = document.getElementById(id)
        return item.value
    }
    function click() {
        /*const tipoOperacao = document.getElementById('tipoOperacao')
        console.log('tipoOperacao', tipoOperacao.value)*/
        const tipoOperacao = obterValorInput('tipoOperacao')
        const valor1 = obterValorInput('valor1')
        const valor2 = obterValorInput('valor2')
        /*console.log(
            tipoOperacao,
            valor1,
            valor2
        )*/
        const resultado = Matematica[tipoOperacao](
            valor1, valor2
        )
        console.log('resultado', resultado)
        document.getElementById('resultado')
        .innerText = `
        A operação de ${tipoOperacao}, ${valor1} por ${valor2} é ${resultado}
        `
    }
}