import { createPhotoObjects } from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const similarObjects = createPhotoObjects();


const newTemplatePicture = templatePicture.cloneNode(true);
const pictureFragment = document.createDocumentFragment();

similarObjects.forEach(({ url, description, likes, comments }) => {
  newTemplatePicture.querySelector('.picture__img').src = url;
  newTemplatePicture.querySelector('.picture__img').alt = description;
  newTemplatePicture.querySelector('.picture__likes').textContent = likes;
  newTemplatePicture.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(newTemplatePicture);
});

pictures.appendChild(pictureFragment);
