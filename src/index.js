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

function renderCard() {
  initialCards.forEach((item) => {
    const card = addCard(item.name, item.link, removeCard);
    cardsContainer.prepend(card);
  });
}

renderCard();

function addCard(name, link, removeCard) {
  const templateElemCopy = templateElem.cloneNode(true);
  const templateImage = templateElemCopy.querySelector(".card-template__image");
  const templateTitle = templateElemCopy.querySelector(".card-template__title");
  const templateTrash = templateElemCopy.querySelector(".grid-block__trash");
  const templateLike = templateElemCopy.querySelector(".grid-block__button");
  templateImage.setAttribute("src", link);
  templateTitle.textContent = name;
  templateImage.setAttribute("alt", name);
  templateTrash.addEventListener("click", removeCard);

  /*templateTrash.addEventListener("click", (evt) => removeCard(evt));*/
  templateLike.addEventListener("click", (evt) => likeBtn(evt));
  templateImage.addEventListener("click", (evt) => showImg(evt));

  return templateElemCopy;
}

function likeBtn(evt) {
  let target = evt.target;
  target.classList.toggle("grid-block__button_active");
}

/*Открытие и закрытие popup*/

const popupProfile = document.querySelector(".popup_profile-edit");
const popupAddCard = document.querySelector(".popup_add-card");
const popupShowImage = document.querySelector(".popup_show-image");
const addButton = document.querySelector(".profile__add-button");
const editButton = document.querySelector(".profile__edit-button");
const closeBtnProfile = popupProfile.querySelector(".popup__close-button");
const closeBtnCard = popupAddCard.querySelector(
  ".popup__close-button_add-card"
);
const closeBtnImage = popupShowImage.querySelector(
  ".popup__close-button_show-image"
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

const img = document.querySelector(".popup__image");
const imgTitle = document.querySelector(".popup__description");

function showImg(evt) {
  openModal(popupShowImage);

  img.setAttribute("src", evt.target.src);
  imgTitle.textContent = evt.target.alt;
}

/*Закрыть  картинку*/

closeBtnImage.addEventListener("click", () => closeModal(popupShowImage));

function removeCard(evt) {
  evt.target.closest(".card-template__elem").remove();
}
