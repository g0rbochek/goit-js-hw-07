import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);
const ulItems = document.querySelector(".gallery");
console.log(ulItems);

ulItems.insertAdjacentHTML("beforeend", creatMarkup(galleryItems));

function creatMarkup(obj) {
  return obj
    .map(
      ({ description, original, preview }) =>
        `
        <li class="gallery__item">
            <a class="gallery__link" href="">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </li>`
    )
    .join("");
}

ulItems.addEventListener("click", onClickGetLargePicture);

function onClickGetLargePicture(evt) {
  evt.preventDefault();
  if (evt.target === evt.currentTarget) {
    return;
  }
  const originalImg = evt.target.dataset.source;
  const instance = basicLightbox.create(`<img src="${originalImg}"/>`);
  instance.show();

  ulItems.addEventListener("keydown", closeByEscp);

  function closeByEscp(evt) {
    if (evt.code === "Escape") {
      instance.close();
    }
  }
  ulItems.removeEventListener("keydown", (evt) => {
    if (evt.code === "Escape") {
    }
  });
}

// (evt) => {
//   if (evt.code === "Escape") {
//     instance.close();
//   }
// };
