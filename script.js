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

initialCards.map((item) => addCard(item.name, item.link));

function addCard(name, link) {
  cardsContainer.insertAdjacentHTML(
    "afterbegin",
    ` <div class="grid-block__elem"> <img class="grid-block__trash"
    src="./images/Trash.svg"
    alt="кнопка для удаления картинки"
    onclick="removeCard(event)"
    /> <img class="grid-block__image"
    src="${link}"
    alt="${name}"
    onclick="showImg(event)"

    /> <div class="grid-block__info"> <h2 class="grid-block__title">${name}

    </h2> <button type="button"
    class="grid-block__button"
    onclick="likeBtn(event)"
    ></button> </div> </div>`
  );
}

/*Открытие и закрытие popup*/

function openModal(modalClass, modalActiveClass) {
  popup = document.querySelector(`.${modalClass}

    `);
  popup.classList.add(modalActiveClass);
}

function closeModal(modalClass, modalActiveClass) {
  popup = document.querySelector(`.${modalClass}

    `);
  popup.classList.remove(modalActiveClass);
}

/*Сохранение*/

function formSaveProfile(event) {
  event.preventDefault();

  const formElement = document.querySelector(".popup__container");
  const nameInput = formElement.querySelector(".popup__input-name");
  const jobInput = formElement.querySelector(".popup__input-job");

  const nameVal = nameInput.value.trim();
  const jobVal = jobInput.value.trim();

  document.querySelector(".profile__title").textContent =
    nameVal === "" ? "Жак-Ив Кусто" : nameVal;
  document.querySelector(".profile__subtitle").textContent =
    jobVal === "" ? "Исследователь океана" : jobVal;

  nameInput.value = "";
  jobInput.value = "";

  closeModal("popup", "popup_opened");
}

/*Сохранение карточки*/

function addCardBuutton(evt) {
  evt.preventDefault();
  const formElem = document.querySelector(".card-popup__container");
  const placeInput = formElem.querySelector(".card-popup__input-place");
  const linkInput = formElem.querySelector(".card-popup__input-link");

  const placeVal = placeInput.value;
  const linkVal = linkInput.value;

  if (placeVal.trim() !== "" && linkVal.trim() !== "") {
    addCard(placeVal, linkVal);
    placeInput.value = "";
    linkInput.value = "";
    closeModal("card-popup", "card-popup_opened");
  } else {
    placeInput.value = "";
    linkInput.value = "";
    closeModal("card-popup", "card-popup_opened");
  }
}

/*лайк карточки*/

function likeBtn(evt) {
  let target = evt.target;

  if (target.style.backgroundImage.includes("like_active")) {
    target.style.backgroundImage = "url(./images/icon__like.svg)";
  } else {
    target.style.backgroundImage = "url(./images/icon__like_active.svg)";
  }
}

/*удаление карточки*/

function removeCard(evt) {
  evt.target.parentNode.remove();
}

/*показать картинку*/

function showImg(evt) {
  document
    .querySelector(".popup-show-image")
    .classList.add("popup-show-image_opened");
  const img = document.querySelector(".popup-show-image__image");
  img.setAttribute("src", evt.target.src);
  const imgTitle = document.querySelector(".popup-show-image__title");
  imgTitle.textContent = evt.target.alt;
}

/*Закрыть  картинку*/

const imgCloseBtn = document
  .querySelector(".popup-show-image__close-button")
  .addEventListener("click", function () {
    document
      .querySelector(".popup-show-image")
      .classList.remove("popup-show-image_opened");
  });
