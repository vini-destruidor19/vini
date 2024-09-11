function verificaChuteValido(){
    const numero = +chute
    if(chuteInvalido(numero)){
        Elementchute.innerHTML += `<div>Valor invalido</div>`
    }
    if(numeroMaiorOuMenorQueOValor(numero)){
        Elementchute.innerHTML += `<div>Valor Invalido: O numero secreto precisa estar entre ${menorValor} e ${maiorValor}</div>`
    }
    if(numero === numeroSecreto){
        document.body.innerHTML =
        `<h2> VOCÊ ACERTOU!!</h2>
        <h3> O número era ${numeroSecreto}</h3>`
    } else if (numero > numeroSecreto)
    {
        Elementchute.innerHTML += `<div>O número secreto é menor</div>`
    }
    else
    {
        Elementchute.innerHTML += `<div>O número secreto é maior</div>`
    }
   
}

function chuteInvalido(numero){
    return Number.isNaN(numero)
}

function numeroMaiorOuMenorQueOValor(numero){
    return numero > maiorValor || numero < menorValor
}
