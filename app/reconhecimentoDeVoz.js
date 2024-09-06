const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = "pt-br"
recognition.start()

recognition.addEventListener("result",onSpeaK)
function onSpeaK(e){
    console.log(e.results[0],[0.].transcript)
}




