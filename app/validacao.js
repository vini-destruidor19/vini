function verificaValorChuteValido(chute){
    const numero = +chute

    if(chuteForIvalido(numero)){
        console.log('valor ínvalido')
    }
    if(numeroForMaiorOuMenorQueValorPermitido())
        console.log('valor invaliudo: O numero secreto precisa estar 
    entre ${menorValor} e ${maiorValor}')
}

function chuteForIvalido(numero){
    return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueValorPermitido(numero){
    return numero>maiorValor
}




