const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


const listEl = document.querySelector('ul#ingredients');

let checkList = new DocumentFragment();

for (const value of ingredients) {
  const itemEl = document.createElement('li');
  itemEl.classList.add('item');
  itemEl.textContent += value;
  checkList.appendChild(itemEl);
}

document.querySelector('ul#ingredients').append(checkList);