import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
gallery.addEventListener('click', showModal);

const galleryElements = galleryItems
  .map(item => 
    `<div class="gallery__item">
       <a class="gallery__link" href="${item.original}">
         <img
           class="gallery__image"
           src="${item.preview}"
           data-source="${item.original}"
           alt="${item.description}"
         />
       </a>
     </div>`
  )
  .join('');

gallery.insertAdjacentHTML("beforeend", galleryElements);

function showModal(e) {
  e.preventDefault();

  if (e.target.nodeName !== 'IMG') {
    return;
  }

  const modal = basicLightbox.create(
    `
		<img width="1400" height="900" src="${e.target.dataset.source}">
	`,
    {
      onShow: (modal) => window.addEventListener("keydown", onEscClose),
      onClose: (modal) => window.removeEventListener("keydown", onEscClose),
    }
  );
    modal.show();

  function onEscClose(e) {
    if (e.code === "Escape") {
      modal.close();
    }
  }

}