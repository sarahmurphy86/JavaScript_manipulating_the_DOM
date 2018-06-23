document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const newItemform = document.querySelector('#new-item-form');
  newItemform.addEventListener('submit', handleNewItemFormSubmit);

  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const handleNewItemFormSubmit = function (event) {
  event.preventDefault();

  const dogList = document.querySelector('#favourite-dogs');
  const favouriteDogListItem = createFavouriteDogListItem(event.target);
  dogList.appendChild(favouriteDogListItem);

  event.target.reset();
}

const createFavouriteDogListItem = function (form) {
  const favouriteDogListItem = document.createElement('li');
  favouriteDogListItem.classList.add('favourite-dog-item');

  // favouriteDogListItem.classList.add('li');
  // favouriteDogListItem.textContent = `Name: ${form.name.value}, Colour: ${form.colour.value}, Breed: ${form.breed.value}`;

  // const nameParagraph = document.createElement('p');
  // const name = `Name: ${form.name.value}`;
  // nameParagraph.textContent = name;
  // favouriteDogListItem.appendChild(nameParagraph);
  //
  // const colourParagraph = document.createElement('p');
  // const colour = `Colour: ${form.colour.value}`;
  // colourParagraph.textContent = colour
  // favouriteDogListItem.appendChild(colourParagraph);
  //
  // const breedParagraph = document.createElement('p');
  // const breed = `Breed: ${form.breed.value}`;
  // breedParagraph.textContent = breed
  // favouriteDogListItem.appendChild(breedParagraph);
  //
  const name = buildElement('h3', form.name.value);
  favouriteDogListItem.appendChild(name);

  const colour = buildElement('h4', form.colour.value);
  favouriteDogListItem.appendChild(colour);

  const breed = buildElement('p', form.breed.value);
  favouriteDogListItem.appendChild(breed);

  return favouriteDogListItem;
}

const buildElement = function (tag, value) {
  const element = document.createElement(tag);
  element.textContent = value;
  return element;
}


const handleDeleteAllClick = function (event) {
  const dogList = document.querySelector('#favourite-dogs');
  dogList.innerHTML = '';}
