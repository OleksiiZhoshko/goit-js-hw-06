// Напиши скрипт, який реагує на зміну значення input#font-size-control (подія input) і змінює інлайн-стиль span#text, оновлюючи властивість font-size. В результаті, перетягуючи повзунок, буде змінюватися розмір тексту.

const inputFontSizeControlEl = document.querySelector("#font-size-control");

const spanTextEl = document.querySelector("#text");

const changeFontSizeRef = () => {
    spanTextEl.style.fontSize = `${inputFontSizeControlEl.value}px`
};

inputFontSizeControlEl.addEventListener('input', changeFontSizeRef);