import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galeryImg = document.querySelector(".gallery");
const imageItemsMarkup = createEl(galleryItems);
let instance = {};

function createEl(el) {
  return el
    .map(
      ({ preview, original, description }) => `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`
    )
    .join("");
}
galeryImg.insertAdjacentHTML("beforeend", imageItemsMarkup);
galeryImg.addEventListener("click", openUrl);

function openUrl(e) {
  e.preventDefault();
  if (e.target.nodeName !== "IMG") {
    return;
  }
  const url = e.target.dataset.source;
  instance = basicLightbox.create(`
    <img src="${url}" width="800" height="600">
`);
  instance.show();
  window.addEventListener("keydown", (e) => {
    if (e.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", window);
    }
  });
}
