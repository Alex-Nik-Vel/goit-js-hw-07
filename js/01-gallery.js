import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

//  hw_7-1
const gallery = document.querySelector('.gallery');

const galleryCardMarkup = createGalleryCardMarkup(galleryItems);
gallery.insertAdjacentHTML('afterbegin', galleryCardMarkup);

gallery.addEventListener('click', onModalGalleryClick);

function createGalleryCardMarkup(galleryCards) {
    return galleryCards.map(({ preview, original, description }) => {        
        return ` <div class="gallery__item">
        <a class="gallery__link" href='${original}'>
            <img
                class="gallery__image"
                src='${preview}' 
                data-source='${original}' 
                alt='${description}'
                />
        </a>
    </div>`;        
    }).join('')  
}

let instance;
function onModalGalleryClick(evt) {
    evt.preventDefault();
    if (!evt.target.dataset.source) { return };
    // if (evt.target === evt.currentTarget) { return };
   
    const parent = evt.target.closest('.gallery__image');
    console.log('parent', parent.dataset.source);

    instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" alt='${evt.target.alt}'>`,{
    onShow: () => {
      window.addEventListener('keydown', onEscModalOpen);
    },
    onClose: (e) => {
      window.removeEventListener('keydown', onEscModalOpen);
    },
  });
    
    instance.show();
    window.addEventListener('keydown', onEscModalOpen);
    setTimeout(() => {
        instance.close(), 
        window.removeEventListener('keydown', onEscModalOpen)
    }, 7000);
    // if (instance.close()) {
    //     window.removeEventListener('keydown', onEscModalOpen)
    // }
    // console.log('instance.close()', instance.close());
    
};

function onEscModalOpen(evt) {
    console.log('evt.key', evt.key);
    if (evt.code === 'Escape') {
        instance.close();
        window.removeEventListener('keydown', onEscModalOpen)
    };
    
}



