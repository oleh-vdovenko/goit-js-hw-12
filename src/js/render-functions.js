'use strict';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  loader: document.querySelector('.loader'),
  loadMoreBtn: document.querySelector('.loadMore'),
};
export function createImage({
  webformatURL,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `<li class="gallery-item">
            <a class="gallery-link" href="${largeImageURL}">
                <img class="gallery-image" src="${webformatURL}" alt="${tags}">
            </a>
            <ul class="image-stats">
                <li class="image-stats-item">
                    <h2 class="stats-text">Likes</h2>
                    <p class="stats-value">${likes}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Views</h2>
                    <p class="stats-value">${views}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Comments</h2>
                    <p class="stats-value">${comments}</p>
                </li>
                <li class="image-stats-item">
                    <h2 class="stats-text">Downloads</h2>
                    <p class="stats-value">${downloads}</p>
                </li>
            </ul>
          </li>`;
}
let lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});
export function createGallery(images) {
  const markup = images.map(createImage).join('');
  refs.gallery.innerHTML = markup;
  lightbox.refresh();
}
export function clearGallery() {
  refs.gallery.innerHTML = '';
}
export function showLoader() {
  refs.loader.style.display = 'block';
}
export function hideLoader() {
  refs.loader.style.display = 'none';
}
export function showLoadMoreButton() {
  refs.loadMoreBtn.style.display = 'block';
}
export function hideLoadMoreButton() {
  refs.loadMoreBtn.style.display = 'none';
}
