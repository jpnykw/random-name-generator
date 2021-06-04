(() => {
    // パラメーター群
    const length = document.querySelectorAll('input')[0];
    const counts = document.querySelectorAll('input')[1];
    const vowel_prob = document.querySelectorAll('input')[2];
    const upper_case = document.querySelectorAll('input')[3];
    const lwoer_case = document.querySelectorAll('input')[4];
    const text_speech = document.querySelectorAll('input')[5];
    let text_speech_before_status = true;
    // 動的に変更
    const vowel_prob_view = document.querySelectorAll('p')[0];
    // 生成ボタン
    const button = document.querySelectorAll('button')[0];

    const switch_mode = (mode) => {
        switch (mode) {
            case 'upper':
                if (lwoer_case.checked) lwoer_case.checked = false;
                break;

            case 'lower':
                if (upper_case.checked) upper_case.checked = false;
                break;
        }

        if (upper_case.checked) {
            document.body.style.textTransform = 'uppercase';
        } else {
            document.body.style.textTransform = 'lowercase';
        }
    }

    upper_case.addEventListener('click', () => switch_mode('upper'));

    lwoer_case.addEventListener('click', () => switch_mode('lower'));

    text_speech.addEventListener('click', () => {
        if (text_speech.checked) {
            if (text_speech_before_status) {
                text_speech_before_status = false;
                text_speech.checked = false;
            } else {
                text_speech_before_status = true;
            }
        }
    });

    vowel_prob.addEventListener('change', () => {
        vowel_prob_view.innerText = vowel_prob.value;
    });

    button.addEventListener('click', () => {
        const result = document.querySelector('#result');
        const clone = result.cloneNode(false);
        result.parentNode.replaceChild(clone, result);
        const stack = [];

        for(let _ = 0; _ < counts.value >> 0; _++) {
            const name = generate(length.value >> 0, (vowel_prob.value >> 0) / 100).toLowerCase();
            const div = document.createElement('div');
            div.classList.add('hover');
            div.innerText = name;
            clone.appendChild(div);
            stack.push(name);

            div.addEventListener('click', () => {
                const name = div.innerText;
                if (window.speechSynthesis && text_speech.checked) {
                    const ssu = new SpeechSynthesisUtterance(name.toLowerCase());
                    ssu.lang = "en";
                    speechSynthesis.speak(ssu);
                }
            })
        }

        console.clear();
        console.table(stack);
    });
})();
