// Get DOM elements
const textInput = document.querySelector('#text-input');
const keyInput = document.querySelector('#key-input');
const encryptButton = document.querySelector('#encrypt-button');
const decryptButton = document.querySelector('#decrypt-button');
const output = document.querySelector('#text-output');

function encrypt(text, key) {
    if (!text) return '';
    key = parseInt(key) || 0;
    
    return [...text].map(char => {
        const code = char.charCodeAt(0);
        // Only shift alphabetic characters
        if ((code >= 65 && code <= 90) || (code >= 97 && code <= 122)) {
            const base = code >= 97 ? 97 : 65;
            return String.fromCharCode(((code - base + key) % 26 + 26) % 26 + base);
        }
        return char;
    }).join('');
}

function decrypt(text, key) {
    return encrypt(text, -key);
}

encryptButton?.addEventListener('click', () => {
    const text = textInput.value;
    const key = keyInput.value;
    output.value = encrypt(text, key);
});

decryptButton?.addEventListener('click', () => {
    const text = textInput.value;
    const key = keyInput.value;
    output.value = decrypt(text, key);
});