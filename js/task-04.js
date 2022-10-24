// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.
// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.
// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.
// Оновлюй інтерфейс новим значенням змінної counterValue.

let counterValue = 0;

const buttonDecrement = document.querySelector('button[data-action="decrement"]');
const spanVelueEl = document.querySelector('#value');
const buttonIncrement = document.querySelector('button[data-action="increment"]');

const decremenValue = () => {
    counterValue -= 1;
    spanVelueEl.textContent = counterValue;
};

buttonDecrement.addEventListener("click", decremenValue);

const incremenValue = () => {
    counterValue += 1;
    spanVelueEl.textContent = counterValue;
};

buttonIncrement.addEventListener("click", incremenValue);