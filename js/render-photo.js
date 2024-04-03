import { createPhotoObjects } from './data.js';

const bigPictureWrapper = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img').querySelector('img');
const bigPictureCloseButton = bigPictureWrapper.querySelector('#picture-cancel');

const closeBigPicture = () => {
  bigPictureWrapper.classList.add('hidden');
};

const closeByClick = () => {
  bigPictureCloseButton.addEventListener('click', (evt) => {
    evt.preventDefault();
    closeBigPicture();
  });
};

closeByClick();

const isEscapeKey = (evt) => evt.key === 'Escape';

const closeByEscape = () => {
  document.addEventListener('keydown', (evt) => {
    if (isEscapeKey(evt)) {
      closeBigPicture();
    }
  });
};

closeByEscape();


