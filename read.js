(function () {
    const button = document.getElementById('read');
    const textarea = document.getElementById('ta');
    let current = document.getElementById('current');
    var msg = new SpeechSynthesisUtterance();
    var synth = window.speechSynthesis;
    button.addEventListener('click', (e) => {
        e.preventDefault();
        msg.pitch = .3;
        msg.rate =2.95;
        msg.volume = 3.5;
        if (textarea.value.trim() !== '') {
            msg.text = textarea.value;
            current.style.display = 'block'
        } else {
            current.style.display = 'none'
        }

        window.speechSynthesis.cancel();

        if (synth.getVoices()[1]) {
            msg.voice = synth.getVoices()[1];
            synth.speak(msg);

        }
        else {
            window.speechSynthesis.speak(msg);

        }
        current.innerText = textarea.value;
        msg.text = ''
        textarea.value = ''

    })

    let countEnters = 0;

    textarea.addEventListener("keyup", (e) => {
        e.preventDefault();
        if (e.key === 'Enter') {
            countEnters++;

            if (countEnters > 3) {
                button.click()
                countEnters = 0;
            }
        } else {
            countEnters = 0
        }
    });


})()
