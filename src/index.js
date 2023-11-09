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
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const closeBtnProfile = popupProfile.querySelector(".popup__close-button");
const closeBtnCard = popupAddCard.querySelector(
  ".popup__close-button_add-card"
);
const closeBtnImage = popupShowImage.querySelector(
  ".popup__close-button_show-image"
);

closeOnOverlay(popupProfile);
closeOnOverlay(popupAddCard);
closeOnOverlay(popupShowImage);

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

/*Закрыть  картинку*/

closeBtnImage.addEventListener("click", () => closeModal(popupShowImage));
