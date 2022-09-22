import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryCardMarkup = createGalleryCardMarkup(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryCardMarkup);

gallery.addEventListener('click', onModalGalleryClick);

function createGalleryCardMarkup(galleryCards) {
    return galleryCards.map(({ preview, original, description }) => {        
      return ` <a class="gallery__item" href='${original}'>
        <img class="gallery__image"
        src='${preview}'
        alt='${description}'
        />
      </a>`        
    }).join('')  
}

function onModalGalleryClick(evt) {
    evt.preventDefault();
    if (evt.target === evt.currentTarget) { return };
    console.log('evt.target', evt.target);
};




const lightbox = new SimpleLightbox('.gallery a', {
  spinner: true,
  captionsData: 'alt',
  captionDelay: 250,
  navText: 'LR',
  animationSpeed: 300,
  disableRightClick: true,
});