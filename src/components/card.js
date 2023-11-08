/*import { templateElem, cardsContainer, initialCards } from "../index.js";

function renderCard(arr) {
  arr.forEach((item) => {
    const card = addCard(item.name, item.link, removeCard);
    cardsContainer.prepend(card);
  });
}

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
  templateLike.addEventListener("click", (evt) => likeBtn(evt));
  templateImage.addEventListener("click", (evt) => showImg(evt));

  return templateElemCopy;
}

function likeBtn(evt) {
  let target = evt.target;
  target.classList.toggle("grid-block__button_active");
}

function removeCard(evt) {
  evt.target.closest(".card-template__elem").remove();
}

export { renderCard, addCard, likeBtn, removeCard };*/
