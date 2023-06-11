
import { galleryItems } from './gallery-items.js';

const gallery = document.querySelector('.gallery');

const galleryMarkup = createGalleryList(galleryItems);

gallery.insertAdjacentHTML('beforeend', galleryMarkup);

function createGalleryList(items) {
  return items.map(({ preview, original, description }) => `
    <li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" />
      </a>
    </li>
  `).join('');
}

gallery.addEventListener("click", onClick);

function onClick(event) {
  event.preventDefault();

  const { target } = event;

  if (!target.classList.contains("gallery__image")) {
    return;
  }}

let modalImg = new SimpleLightbox('.gallery a', {
  doubleTapZoom: '1.5',
  captionsData: 'alt',
  captionDelay: 250,
});