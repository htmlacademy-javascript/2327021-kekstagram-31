import { createPhotoObjects } from './data.js';

const templatePicture = document.querySelector('#picture').content.querySelector('.picture');
const pictures = document.querySelector('.pictures');
const similarObjects = createPhotoObjects();

const pictureFragment = document.createDocumentFragment();

similarObjects.forEach(({ id, url, description, likes, comments }) => {
  const newTemplatePicture = templatePicture.cloneNode(true);

  newTemplatePicture.dataset.pictureId = id;
  newTemplatePicture.querySelector('.picture__img').src = url;
  newTemplatePicture.querySelector('.picture__img').alt = description;
  newTemplatePicture.querySelector('.picture__likes').textContent = likes;
  newTemplatePicture.querySelector('.picture__comments').textContent = comments.length;
  pictureFragment.appendChild(newTemplatePicture);
});

pictures.appendChild(pictureFragment);
