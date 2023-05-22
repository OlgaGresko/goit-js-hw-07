import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryEl = document.querySelector('.gallery');
let instance;
let isOpen = false;


let galleryMarkup = galleryItems.map(item => `
  <li class="gallery__item">
    <a class="gallery__link" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        data-source="${item.original}"
        alt="${item.description}"
      />
    </a>
  </li>
`).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);
galleryEl.addEventListener('click', onImageClick);

function addInnerListeners() {
  document.addEventListener('keydown', onEscapeClose);
  document.addEventListener('click', onOutsideClick);
}

function removeInnerListeners() {
  document.removeEventListener('keydown', onEscapeClose);
  document.removeEventListener('click', onOutsideClick);
}

function onImageClick (event) {
  event.preventDefault();

    if (event.target.classList.contains('gallery__image') && !isOpen) {
        instance = basicLightbox.create(`
        <img src="${event.target.dataset.source}" width="800" height="600">
        `)
        instance.show();
        isOpen  = true;
        addInnerListeners();
    } 
  }

function onEscapeClose(event) {
  if ((event.code === "Escape") && isOpen) {
    
    instance.close();
    isOpen = false;
    removeInnerListeners();
  }
}

function onOutsideClick(event) {
   if (!event.target.classList.contains('gallery__image') && isOpen) {
    instance.close();
    isOpen = false;
    removeInnerListeners();
  }
}



