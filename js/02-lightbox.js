import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulItems = document.querySelector(".gallery");
console.log(ulItems);

ulItems.insertAdjacentHTML("beforeend", creatMarkup(galleryItems));

function creatMarkup(obj) {
  return obj
    .map(
      ({ description, original, preview }) => `
    <li class="gallery__item">
        <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
    </li>`
    )
    .join("");
}

let gallery = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});

// ulItems.addEventListener("click", onClickGetLargePictureAndFunctionale);

// function onClickGetLargePictureAndFunctionale(evt) {
//   evt.preventDefault();
//   const tar = evt.target;

//   if (tar === evt.currentTarget) {
// return;
//   }
//   const currentItem = tar.closest(".galery__item");
//   const { source } = tar.dataset;
//   const item = galleryItems.find((item) => item.original === source);

//   const instance = basicLightbox.create(
//     `<img src="${item.original}" alt="${item.description}" width="800" height="600">`
//   );
//   instance.show();

//   const instance = basicLightbox.create(
// `<img src="${item.original}" alt="${item.description}" width="800" heigth="600" />`
//   );
// }
