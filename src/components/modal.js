import { esc } from "../index.js";

export function openModal(popupName) {
  popupName.classList.add("popup_opened");
  window.addEventListener("keydown", esc);
}

export function closeModal(popupName) {
  popupName.classList.remove("popup_opened");
  window.removeEventListener("keydown", esc);
}
