import "./pages/index.css";
import {
  addCard,
  likeBtn,
  removeCard,
  cardsContainer,
  cardsTemplate,
  templateElem,
} from "./components/card.js";
import {
  openModal,
  closeModal,
  closeModalOver,
  closeOnOverlay,
  handleEscClose,
  popupShowImage,
} from "./components/modal.js";

import { initialCards } from "./components/cards.js";
/*const elbrusImage = new URL(
  "./images/kirill-pershin-1404681-unsplash.png",
  import.meta.url
);
const cherkesiaImage = new URL(
  "./images/kirill-pershin-1088404-unsplash.jpg",
  import.meta.url
);
const dombaiImage = new URL(
  "./images/kirill-pershin-1556355-unsplash.png",
  import.meta.url
);

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

  {
    name: "Гора Эльбруc",
    link: elbrusImage,
  },

  {
    name: "Домбай",
    link: dombaiImage,
  },

  {
    name: "Гора Эльбрус",
    link: elbrusImage,
  },

  {
    name: "Карачаево-Черкессия",
    link: cherkesiaImage,
  },

  {
    name: "Домбай",
    link: dombaiImage,
  },
];*/

/*const cardsContainer = document.querySelector(".grid-block");
 const cardsTemplate = document.querySelector("#card-template").content;
 const templateElem = cardsTemplate.querySelector(".card-template__elem");*/

function renderCard() {
  initialCards.forEach((item) => {
    const card = addCard(item.name, item.link, removeCard);
    cardsContainer.prepend(card);
  });
}

renderCard();

/*Открытие и закрытие popup*/

const popupProfile = document.querySelector(".popup_profile-edit");
const popupAddCard = document.querySelector(".popup_add-card");
/*const popupShowImage = document.querySelector(".popup_show-image");*/
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const closeBtnProfile = popupProfile.querySelector(".popup__close-button");
const closeBtnCard = popupAddCard.querySelector(
  ".popup__close-button_add-card"
);
const closeBtnImage = popupShowImage.querySelector(
  ".popup__close-button_show-image"
);

/*function closeModalOver(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

function closeOnOverlay(popup) {
  popup.addEventListener("click", closeModalOver);
}*/

closeOnOverlay(popupProfile);
closeOnOverlay(popupAddCard);
closeOnOverlay(popupShowImage);

/*export function handleEscClose (evt) {
  if (evt.key === "Escape") {
    const modalIsOpen = document.querySelector(".popup_opened");
    modalIsOpen.classList.remove("popup_opened");
  }
}*/

editButton.addEventListener("click", () => openModal(popupProfile));
closeBtnProfile.addEventListener("click", () => closeModal(popupProfile));

addButton.addEventListener("click", () => openModal(popupAddCard));
closeBtnCard.addEventListener("click", () => closeModal(popupAddCard));

/*Сохранение*/

const formElement = document.querySelector(".popup__container_profile-edit");
const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");
const profileTitle = document.querySelector(".profile__title");
const profileSub = document.querySelector(".profile__subtitle");
const profileSaveBtn = document.querySelector(
  ".popup__save-button_profile-edit"
);
const form = document.querySelector(".popup__form_profile-edit");
nameInput.value = profileTitle.textContent;
jobInput.value = profileSub.textContent;

function saveProfileForm(event) {
  event.preventDefault();

  const nameVal = nameInput.value.trim();
  const jobVal = jobInput.value.trim();

  profileTitle.textContent = nameVal;
  profileSub.textContent = jobVal;

  nameInput.value = nameVal;
  jobInput.value = jobVal;

  closeModal(popupProfile);
}

form.addEventListener("submit", (event) => saveProfileForm(event));

/*Сохранение карточки*/
const formElem = document.querySelector(".popup__container_add-card");
const placeInput = formElem.querySelector(".popup__input-place");
const linkInput = formElem.querySelector(".popup__input-link");

function addCardButton(evt) {
  evt.preventDefault();

  const placeVal = placeInput.value;
  const linkVal = linkInput.value;

  if (placeVal.trim() !== "" && linkVal.trim() !== "") {
    let card = addCard(placeVal, linkVal, removeCard);
    cardsContainer.prepend(card);
    placeInput.value = "";
    linkInput.value = "";
    closeModal(popupAddCard);
  }
}

formElem.addEventListener("submit", (evt) => addCardButton(evt));

/*показать картинку*/

/*const img = document.querySelector(".popup__image");
const imgTitle = document.querySelector(".popup__description");

function showImg(evt) {
  openModal(popupShowImage);

  img.setAttribute("src", evt.target.src);
  imgTitle.textContent = evt.target.alt;
}*/

/*Закрыть  картинку*/

closeBtnImage.addEventListener("click", () => closeModal(popupShowImage));
