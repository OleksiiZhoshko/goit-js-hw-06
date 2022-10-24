// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
// Яка кількість смиволів повинна бути в інпуті, зазначається в його атрибуті data-length.
// Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
// Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.

const inputFocuseChange = document.querySelector("#validation-input");

const corectValueInput = () => {
    if (inputFocuseChange.value.length < inputFocuseChange.dataset.length) {
        inputFocuseChange.classList.add('invalid');
        inputFocuseChange.classList.remove('valid');
    } else {
        inputFocuseChange.classList.add('valid');
        inputFocuseChange.classList.remove('invalid');
    }
};

inputFocuseChange.addEventListener('blur', corectValueInput);
