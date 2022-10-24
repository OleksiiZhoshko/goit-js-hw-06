// Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

const inputText = document.querySelector('#name-input');
const outputText = document.querySelector('#name-output');
// const changeTextInput = () => {
//      if () {
        
//    };
//      }

// inputText.addEventListener('input', changeTextInput)

const changeTextInput = () => outputText.textContent = inputText.value ? inputText.value : "Anonymous";

inputText.addEventListener('input', changeTextInput);