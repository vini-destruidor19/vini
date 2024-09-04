const menorvalor = 1
const maiorValor = 100
const numeroSecreto = gerarNumeroaleatorio()

function gerarNumeroaleatorio(){
    return parseInt(Math.random()* maiorValor + 1)
}
console.log(numeroSecreto)

const elementoMenorValor = document.getElementById("menor-valor")
elementoMenorValor.innerHTML = menorvalor

const elementoMaiorValor = document.getElementById("maior-valor")
elementoMaiorValor.innerHTML = maiorValor

