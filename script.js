/*Открытие и закрытие popup*/
editBtn = document.querySelector(".profile__edit-button");
popup = document.querySelector(".popup");
closeBtn = document.querySelector(".popup__close-button");

editBtn.addEventListener("click", () => {
  popup.classList.add("popup_opened");
});

closeBtn.addEventListener("click", () => {
  popup.classList.remove("popup_opened");
});

/*редактирование в модальном окне*/
const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");

const saveBtn = (formElement.querySelector(".popup__save-button").onclick =
  handleFormSubmit);

function handleFormSubmit(evt) {
  evt.preventDefault();
  const nameVal = nameInput.value;
  const jobVal = jobInput.value;

  document.querySelector(".profile__title").textContent = nameVal;
  document.querySelector(".profile__subtitle").textContent = jobVal;
}

/*добавление карточек через js при загрузке страницы*/

const initialCards = [
  {
    name: "Архыз",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg",
  },
  {
    name: "Челябинская область",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg",
  },
  {
    name: "Иваново",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg",
  },
  {
    name: "Камчатка",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg",
  },
  {
    name: "Холмогорский район",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg",
  },
  {
    name: "Байкал",
    link: "https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg",
  },
];

const cardsContainer = document.querySelector(".grid-block");
const cardsTemplate = document.querySelector("#card-template").content;

const cardInfo = initialCards.map(function (item) {
  return {
    name: item.name,
    link: item.link,
  };
});

function render() {
  cardInfo.forEach(renderCard);
}

function renderCard({ name, link }) {
  const cardElement = cardsTemplate
    .querySelector(".card-template__elem")
    .cloneNode(true);
  cardElement.querySelector(".card-template__title").textContent = name;
  cardElement.querySelector(".card-template__image").src = link;
  cardsContainer.prepend(cardElement);
}
render();
/*открытие и закрытие попап для добавления карточек*/

addBtn = document.querySelector(".profile__add-button");
cardPopup = document.querySelector(".card-popup");
crossBtn = document.querySelector(".card-popup__close-button");

addBtn.addEventListener("click", () => {
  cardPopup.classList.add("card-popup_opened");
});

crossBtn.addEventListener("click", () => {
  cardPopup.classList.remove("card-popup_opened");
});
/*добавление карточки вначале*/

const formElem = document.querySelector(".card-popup__container");
const placeInput = formElem.querySelector(".card-popup__input-place");
const linkInput = formElem.querySelector(".card-popup__input-link");

const submitBtn = (formElem.querySelector(".card-popup__save-button").onclick =
  addCard);

function addCard(evt) {
  evt.preventDefault();
  const placeVal = placeInput.value;
  const linkVal = linkInput.value;
  const cardElem = cardsTemplate
    .querySelector(".card-template__elem")
    .cloneNode(true);
  cardElem.querySelector(".card-template__image").src = linkVal;
  cardElem.querySelector(".card-template__title").textContent = placeVal;

  cardsContainer.prepend(cardElem);
}

/*let reader = new FileReader();
  reader.readAsDataURL(linkVal);
  const cardElement = cardsTemplate
    .querySelector(".card-template__elem")
    .cloneNode(true);
  cardElement.src = linkVal;

  cardsContainer.prepend(cardsTemplate);*/
