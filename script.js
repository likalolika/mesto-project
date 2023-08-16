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
    link: "./images/kirill-pershin-1404681-unsplash.png",
  },

  {
    name: "Домбай",
    link: "./images/kirill-pershin-1556355-unsplash.png",
  },

  {
    name: "Гора Эльбрус",
    link: "./images/kirill-pershin-1404681-unsplash.png",
  },

  {
    name: "Карачаево-Черкессия",
    link: "./images/kirill-pershin-1088404-unsplash.jpg",
  },

  {
    name: "Домбай",
    link: "./images/kirill-pershin-1556355-unsplash.png",
  },
];

const cardsContainer = document.querySelector(".grid-block");
const cardsTemplate = document.querySelector("#card-template").content;
const templateElem = cardsTemplate.querySelector(".card-template__elem");

initialCards.forEach((item) => addCard(item.name, item.link));

function addCard(name, link) {
  const templateElemCopy = templateElem.cloneNode(true);
  const templateImage = templateElemCopy.querySelector(".card-template__image");
  const templateTitle = templateElemCopy.querySelector(".card-template__title");
  const templateTrash = templateElemCopy.querySelector(".grid-block__trash");
  const templateLike = templateElemCopy.querySelector(".grid-block__button");
  templateImage.setAttribute("src", link);
  templateTitle.textContent = name;
  templateImage.setAttribute("alt", name);

  templateTrash.onclick = removeCard;
  templateLike.onclick = likeBtn;

  function likeBtn(evt) {
    let target = evt.target;
    target.classList.toggle("grid-block__button_active");
    /*if (target.style.backgroundImage.includes("like_active")) {
      target.style.backgroundImage = "url(./images/icon__like.svg)";
    } else {
      target.style.backgroundImage = "url(./images/icon__like_active.svg)";
    }*/
  }

  cardsContainer.prepend(templateElemCopy);

  templateImage.addEventListener("click", (evt) => showImg(evt));
}

/*Открытие и закрытие popup*/

const popupProfile = document.querySelector(".popup");
const popupAddCard = document.querySelector(".card-popup");
const popupShowImage = document.querySelector(".popup-show-image");
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const closeBtnProfile = popupProfile.querySelector(".popup__close-button");
const closeBtnCard = popupAddCard.querySelector(".card-popup__close-button");
const closeBtnImage = popupShowImage.querySelector(
  ".popup-show-image__close-button"
);

function openModal(popupName) {
  popupName.classList.add("popup_opened");
}

function closeModal(popupName) {
  popupName.classList.remove("popup_opened");
}

editButton.addEventListener("click", () => openModal(popupProfile));
closeBtnProfile.addEventListener("click", () => closeModal(popupProfile));

addButton.addEventListener("click", () => openModal(popupAddCard));
closeBtnCard.addEventListener("click", () => closeModal(popupAddCard));

/*function openModal(modalClass, modalActiveClass) {
  popup = document.querySelector(`.${modalClass}

    `);
  popup.classList.add(modalActiveClass);
}

function closeModal(modalClass, modalActiveClass) {
  popup = document.querySelector(`.${modalClass}

    `);
  popup.classList.remove(modalActiveClass);
}*/

/*Сохранение*/

const formElement = document.querySelector(".popup__container");
const nameInput = formElement.querySelector(".popup__input-name");
const jobInput = formElement.querySelector(".popup__input-job");
const profileTitle = document.querySelector(".profile__title");
const profileSub = document.querySelector(".profile__subtitle");
const profileSaveBtn = document.querySelector(".popup__save-button");
const form = document.querySelector(".popup__form");

function formSaveProfile(event) {
  event.preventDefault();

  const nameVal = nameInput.value.trim();
  const jobVal = jobInput.value.trim();

  profileTitle.textContent = nameVal;
  profileSub.textContent = jobVal;

  nameInput.value = "";
  jobInput.value = "";

  closeModal(popupProfile);
}

form.addEventListener("submit", (event) => formSaveProfile(event));
// profileSaveBtn.addEventListener("submit", (event) => formSaveProfile(event));

/*Сохранение карточки*/
const formElem = document.querySelector(".card-popup__container");
const placeInput = formElem.querySelector(".card-popup__input-place");
const linkInput = formElem.querySelector(".card-popup__input-link");

function addCardButton(evt) {
  evt.preventDefault();

  const placeVal = placeInput.value;
  const linkVal = linkInput.value;

  if (placeVal.trim() !== "" && linkVal.trim() !== "") {
    addCard(placeVal, linkVal);
    placeInput.value = "";
    linkInput.value = "";
    closeModal(popupAddCard);
  } /*else {
    placeInput.value = "";
    linkInput.value = "";
    closeModal(popupAddCard);
  }*/
}

formElem.addEventListener("submit", (evt) => addCardButton(evt));

/*лайк карточки*/

/*function likeBtn(evt) {
  let target = evt.target;

  if (target.style.backgroundImage.includes("like_active")) {
    target.style.backgroundImage = "url(./images/icon__like.svg)";
  } else {
    target.style.backgroundImage = "url(./images/icon__like_active.svg)";
  }
}*/

/*удаление карточки*/

function removeCard(evt) {
  evt.target.parentNode.remove();
}

/*показать картинку*/

const img = document.querySelector(".popup-show-image__image");
const imgTitle = document.querySelector(".popup-show-image__title");

function showImg(evt) {
  openModal(popupShowImage);
  const img = document.querySelector(".popup-show-image__image");
  img.setAttribute("src", evt.target.src);
  const imgTitle = document.querySelector(".popup-show-image__title");

  imgTitle.textContent = evt.target.alt;
}

/*Закрыть  картинку*/

closeBtnImage.addEventListener("click", () => closeModal(popupShowImage));
