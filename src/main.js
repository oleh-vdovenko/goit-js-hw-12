'use strict';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions';

const formElem = document.querySelector('.form');
let query;
let currentPage;
let totalPages;

formElem.addEventListener('submit', e => {
  e.preventDefault();
  hideLoadMoreButton();
  clearGallery();

  const formData = new FormData(formElem);
  query = formData.get('search-text');
  currentPage = 1;
  if (query.trim() === '') {
    iziToast.show({
      message: `Please enter a search query!`,
      messageColor: 'white',
      messageSize: '20',
      backgroundColor: 'red',
      position: 'center',
      timeout: 2000,
    });
    formElem.reset();
    return;
  }
  showLoader();
  getImagesByQuery(query.trim(), currentPage)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.show({
          message: `Sorry, there are no images matching your search query. Please try again!`,
          messageColor: 'black',
          messageSize: '20',
          backgroundColor: 'yellow',
          position: 'center',
          timeout: 2000,
        });
      } else {
        createGallery(data.hits);
        totalPages = Math.ceil(data.totalHits / 15);
        if (currentPage < totalPages) {
          showLoadMoreButton();
        } else {
          hideLoadMoreButton();
        }
      }
      hideLoader();
    })
    .catch(error => {
      hideLoader();
      iziToast.show({
        message: `Your request is fail!`,
        messageColor: 'white',
        messageSize: '20',
        backgroundColor: 'red',
        position: 'center',
        timeout: 2000,
      });
    });
  formElem.reset();
});

document.querySelector('.loadMore').addEventListener('click', async () => {
  currentPage += 1;
  const res = await getImagesByQuery(query.trim(), currentPage);
  const markup = createGallery(res.hits);
  document.querySelector('.gallery').insertAdjacentHTML('beforeend', markup);
});
