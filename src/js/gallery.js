import { galleryItems } from './gallery-items.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryCollection = document.querySelector('.gallery');

function createGallery(items) {
  return items
    .map(({ preview, original, description }) => {
      return `
    <li class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" alt="${description}" />
    </a></li>`;
    })
    .join('');
}

const markupGallery = createGallery(galleryItems);
galleryCollection?.insertAdjacentHTML('beforeend', markupGallery);

const gallery = new SimpleLightbox('.gallery  a', {
  captionsData: 'alt',
  captionDelay: 250,
});
