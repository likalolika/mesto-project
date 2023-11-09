export const popupShowImage = document.querySelector(".popup_show-image");

export function openModal(popupName) {
  popupName.classList.add("popup_opened");
  window.addEventListener("keydown", handleEscClose);
}

export function closeModal(popupName) {
  popupName.classList.remove("popup_opened");
  window.removeEventListener("keydown", handleEscClose);
}

export function closeModalOver(evt) {
  if (evt.target.classList.contains("popup")) {
    closeModal(evt.target);
  }
}

export function closeOnOverlay(popup) {
  popup.addEventListener("click", closeModalOver);
}

export function handleEscClose(evt) {
  if (evt.key === "Escape") {
    const modalIsOpen = document.querySelector(".popup_opened");
    modalIsOpen.classList.remove("popup_opened");
  }
}

const img = document.querySelector(".popup__image");
const imgTitle = document.querySelector(".popup__description");

function showImg(evt) {
  openModal(popupShowImage);

  img.setAttribute("src", evt.target.src);
  imgTitle.textContent = evt.target.alt;
}
export { showImg, img, imgTitle };
