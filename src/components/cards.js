const elbrusImage = new URL(
  "../images/kirill-pershin-1404681-unsplash.png",
  import.meta.url
);
const cherkesiaImage = new URL(
  "../images/kirill-pershin-1088404-unsplash.jpg",
  import.meta.url
);
const dombaiImage = new URL(
  "../images/kirill-pershin-1556355-unsplash.png",
  import.meta.url
);

export const initialCards = [
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
];
