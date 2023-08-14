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

/*Открытие и закрытие popup*/

function openModal(modalClass, modalActiveClass) {
  popup = document.querySelector(`.${modalClass}`);
  popup.classList.add(modalActiveClass);
}

function closeModal(modalClass, modalActiveClass) {
  popup = document.querySelector(`.${modalClass}`);
  popup.classList.remove(modalActiveClass);
}

/*Сохранение*/

function formSaveProfile(event) {
  event.preventDefault();

  const formElement = document.querySelector(".popup__container");
  const nameInput = formElement.querySelector(".popup__input-name");
  const jobInput = formElement.querySelector(".popup__input-job");

  let nameVal = nameInput.value.trim();
  let jobVal = jobInput.value.trim();

  document.querySelector(".profile__title").textContent =
    nameVal === "" ? "Жак-Ив Кусто" : nameVal;
  document.querySelector(".profile__subtitle").textContent =
    jobVal === "" ? "Исследователь океана" : jobVal;

  nameInput.value = "";
  jobInput.value = "";

  closeModal("popup", "popup_opened");
}

function addCard(evt) {
  const formElem = document.querySelector(".card-popup__container");
  let placeInput = formElem.querySelector(".card-popup__input-place");
  let linkInput = formElem.querySelector(".card-popup__input-link");

  evt.preventDefault();
  const placeVal = placeInput.value;
  const linkVal = linkInput.value;
  const cardElem = cardsTemplate
    .querySelector(".card-template__elem")
    .cloneNode(true);
  cardElem.querySelector(".card-template__image").src = linkVal;
  cardElem.querySelector(".card-template__title").textContent = placeVal;

  if (!placeVal.trim() === "" || !linkVal.trim() === "") {
    cardsContainer.prepend(cardElem);
    cardsContainer.querySelector(".grid-block__button").onclick = likeBtn;
    placeInput.value = "";
    linkInput.value = "";
    closeModal("card-popup", "card-popup_opened");
  } else {
    alert("sss");
  }
}

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
  cardElement.querySelector(".grid-block__button").onclick = likeBtn;
}
render();

/*лайк карточки*/

function likeBtn(evt) {
  let target = evt.target;
  if (target.style.backgroundImage.includes("like_active")) {
    target.style.backgroundImage = "url(../../../images/icon__like.svg)";
  } else {
    target.style.backgroundImage = "url(../../../images/icon__like_active.svg)";
  }
}
