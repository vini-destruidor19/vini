const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const elementChute = document.getElementById("chute")

const recognition = new SpeechRecognition();
recognition.lang = "pt-br"
recognition.start()

recognition.addEventListener("result",onSpeaK)

function onSpeaK(e){
    chute = (e.results[0][0].transcript)
    exibeChute(chute)
    verificaValorChuteValido(chute)
}

function exibeChute(chute){
  elementChute.innerHTML = `
  <div>Você disse: </div>
  <span class="box">${chute}</span>
  <div>o número secreto é maior </div>
  `
}


