import { galleryItems } from './gallery-items.js';
// Change code below this line
const listGallery = document.querySelector('.gallery');


listGallery.insertAdjacentHTML('beforeend', createGallleryMarkup(galleryItems));

function createGallleryMarkup(galleryItems) {
    return galleryItems.map(({ preview, original, description }) => {
        return `<a class="gallery__item" href="${original}">
        <img class="gallery__image" src="${preview}" alt="${description}" title ="${description}" />
      </a>`;
    }).join('');
};

listGallery.addEventListener('click', onImgGalleryClick);

function onImgGalleryClick(event) {
    event.preventDefault();
const imgElSelected = event.target.classList.contains('gallery__image');

if(!imgElSelected) {
    return;
} 
    const parentLink = event.target.closest('.gallery__item');
    const urlLink = parentLink.getAttribute('href')
    console.log(urlLink);


    const gallery = new SimpleLightbox('.gallery__item');

    gallery.on('show.simplelightbox', function () {
	gallery.next();

});


};

console.log(galleryItems);

