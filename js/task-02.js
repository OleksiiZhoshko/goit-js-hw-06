const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const ingredientItem = [];

for (const ingredient of ingredients) {
  const ingredientsEl = document.createElement('li');
  ingredientsEl.textContent = `${ingredient}`;
  ingredientsEl.classList.add('item');
  ingredientItem.push(ingredientsEl);  
}

const UlIngredients = document.querySelector('#ingredients');
UlIngredients.append(...ingredientItem);
