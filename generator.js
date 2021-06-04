const vowel = [65, 73, 85, 69, 79];

const generate = (len) => {
    return Array(len).fill(null).map((_, i) => {
        const chr_code = 65 + (Math.random() * 26) >> 0;
        if ((i + 1) % 2 === 0) {
            if (vowel.includes(chr_code)) {
                return String.fromCharCode(chr_code);
            } else {
                return String.fromCharCode(vowel[(Math.random() * vowel.length) >> 0]);
            }
        } else {
            return String.fromCharCode(chr_code);
        }
    }).join('');
}
