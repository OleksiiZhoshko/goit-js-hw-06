function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}


// Напиши скрипт, який змінює кольори фону елемента <body> через інлайн-стиль по кліку на button.change-color і виводить значення кольору в span.color.
// Для генерування випадкового кольору використовуй функцію getRandomHexColor.

const spanColorEl = document.querySelector(".color");
const bodyRandomColorRef = document.querySelector('body');
const buttonChangeColorEl = document.querySelector(".change-color");

const changeBagraundColor = () => {
  bodyRandomColorRef.style.backgroundColor = getRandomHexColor()
  spanColorEl.textContent = bodyRandomColorRef.style.backgroundColor
};

buttonChangeColorEl.addEventListener('click', changeBagraundColor);