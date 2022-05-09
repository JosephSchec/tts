(function () {
    const buttton = document.getElementById('button');
    const textarea = document.getElementById('ta');
    let current=document.getElementById('current');
    var msg = new SpeechSynthesisUtterance();
    var synth = window.speechSynthesis;
    buttton.addEventListener('click', (e) => {
        e.preventDefault();
        msg.pitch = 1.2;
        msg.rate = 1.3;
        msg.text = textarea.value;
        msg.volume = 1;
        window.speechSynthesis.cancel();
        current.style.display='block'
        if (synth.getVoices()[1]) {
            msg.voice = synth.getVoices()[1];
            synth.speak(msg);
            current.innerText=textarea.value;
            msg.text = ''
            textarea.value = ''
        }
        else {
            window.speechSynthesis.speak(msg);
            current.innerText=textarea.value;
            msg.text = ''
            textarea.value = ''
        }
    })
})()
