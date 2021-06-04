(() => {
    const length = document.querySelectorAll('input')[0];
    const counts = document.querySelectorAll('input')[1];
    const vowel_prob = document.querySelectorAll('input')[2];
    const button = document.querySelector('button');

    button.addEventListener('click', () => {
        const result = document.querySelector('#result');
        const clone = result.cloneNode(false);
        result.parentNode.replaceChild(clone, result);
        const stack = [];

        for(let _ = 0; _ < counts.value >> 0; _++) {
            const name = generate(length.value >> 0, (vowel_prob.value >> 0) / 100);
            const div = document.createElement('div');
            div.innerText = name;
            clone.appendChild(div);
            stack.push(name);
        }

        console.clear();
        console.table(stack);
    });
})();
