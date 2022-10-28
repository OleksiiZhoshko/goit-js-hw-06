// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputFocuseChange = document.querySelector("#validation-input");

const corectValueInput = (event) => {
    if (event.currentTarget.value.length === Number(inputFocuseChange.dataset.length)) {
        inputFocuseChange.classList.remove('invalid');
        inputFocuseChange.classList.add('valid');
    } else {
        inputFocuseChange.classList.remove('valid'); 
        inputFocuseChange.classList.add('invalid');
               
    }
};

inputFocuseChange.addEventListener('blur', corectValueInput);
