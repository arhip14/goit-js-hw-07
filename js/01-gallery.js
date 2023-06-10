import { galleryItems } from './gallery-items.js';

const galleryContainer = document.querySelector('.gallery');

const markup = createGalleryItems(galleryItems);

galleryContainer.insertAdjacentHTML('beforeend', markup);

function createGalleryItems(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>`;
    })
    .join('');
}

galleryContainer.addEventListener('click', onClick);

function onClick(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }

  const largeImageSrc = event.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${largeImageSrc}" width="800" height="800">
  `);

  instance.show();

  const keyPressOnEsc = function (event) {
    const ESC_KEY_CODE = 'Escape';
    if (event.code === ESC_KEY_CODE) {
      instance.close();
      window.removeEventListener('keydown', keyPressOnEsc);
    }
  };

  window.addEventListener('keydown', keyPressOnEsc);
}



