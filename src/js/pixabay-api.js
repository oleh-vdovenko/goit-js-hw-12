'use strict';
import axios from 'axios';

export const getImagesByQuery = async (query, page) => {
  try {
    const response = await axios.get('https://pixabay.com/api/', {
      params: {
        key: '53377567-48fe25733f93d655972fbcb7e',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        page: page,
        per_page: 15,
        safesearch: true,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};
