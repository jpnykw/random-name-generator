const vowel = [65, 73, 85, 69, 79];

const generate = (len, vowel_prob) => {
    return Array(len).fill(null).map((_, i) => {
        const chr_code = 65 + (Math.random() * 26) >> 0;
        if ((i + 1) % 2 === 0) {
            const is_vowel = Math.random() <= vowel_prob;
            if (is_vowel) {
                if (vowel.includes(chr_code)) {
                    return String.fromCharCode(chr_code);
                } else {
                    return String.fromCharCode(vowel[(Math.random() * vowel.length) >> 0]);
                }
            } else {
                new_chr_code = 65 + (Math.random() * 26) >> 0;
                while (vowel.includes(new_chr_code)) new_chr_code = 65 + (Math.random() * 26) >> 0;
                return String.fromCharCode(new_chr_code);
            }
        } else {
            return String.fromCharCode(chr_code);
        }

    }).join('');
}
