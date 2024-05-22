const API_KEY = '44023316-0d50012e2ff9db94e7166d7a8';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchPhotos = (searchImage) => {
  const params = new URLSearchParams({
    key: API_KEY,
    q: searchImage,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  });

  return fetch(`${BASE_URL}/?${params}`).then(response => {
    if (!response.ok) {
      throw new Error(
        'Sorry, there are no images matching your search query. Please try again!'
      );
    }
    return response.json();
  });
};