const result = document.querySelector(".result");
const textArea = document.querySelector(".text-area");
const btnCopy = document.querySelector('.btn-copy');


(() => {


    result.addEventListener('click', copyText);

})()

function btnEncrypt() {
    const textEncrypted = encrypt(textArea.value);
    result.value = textEncrypted;
    result.innerHTML = ` <textarea>${textEncrypted}</textarea>
    <button class="btnCopiar">Copiar</button>
    `
}

function btnDecrypt() {
    const textDecrypted = decrypt(textArea.value);
    result.value = textDecrypted;
    result.innerHTML = ` <textarea>${textDecrypted}</textarea>
    <button class="btnCopiar">Copiar</button> `
}

function encrypt(scriptEncrypter) {
    let arrayCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    scriptEncrypter = scriptEncrypter.toLowerCase();

    for (let i = 0; i < arrayCode.length; i++) {
        if(scriptEncrypter.includes(arrayCode[i][0])) {
            scriptEncrypter = scriptEncrypter.replaceAll(arrayCode[i][0], arrayCode[i][1]);
        }
    }
    return scriptEncrypter;
}

function decrypt(scriptDecrypter) {
    let arrayCode = [["e","enter"],["i","imes"],["a","ai"],["o","ober"],["u","ufat"]];
    scriptDecrypter = scriptDecrypter.toLowerCase();

    for (let i = 0; i < arrayCode.length; i++) {
        if(scriptDecrypter.includes(arrayCode[i][1])) {
            scriptDecrypter = scriptDecrypter.replaceAll(arrayCode[i][1], arrayCode[i][0]);
        }
    }
    return scriptDecrypter;
}

function copyText(){
    const textEncrypted = document.querySelector('.result textarea');
    textEncrypted.select();
    document.execCommand('copy');
}