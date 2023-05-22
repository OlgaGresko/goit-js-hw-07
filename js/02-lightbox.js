import { galleryItems } from './gallery-items.js';
// Change code below this line

let galleryEl = document.querySelector('.gallery');

let galleryMarkup = galleryItems.map(item => `
<li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}" />
   </a>
</li>
`).join('');

galleryEl.insertAdjacentHTML('afterbegin', galleryMarkup);

var lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });

  
