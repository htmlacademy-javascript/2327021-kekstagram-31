import { similarObjects, picturesContainer } from './miniatures.js';
import { isEscapeKey } from './util.js';
import { renderBigPicture } from './render-big-picture.js';
import { renderComments, cleanComments } from './render-comments.js';

const body = document.querySelector('body');
const bigPictureWrapper = document.querySelector('.big-picture');
const bigPictureCloseButton = bigPictureWrapper.querySelector('#picture-cancel');


const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

const onCloseByClick = (evt) => {
  evt.preventDefault();
  closeModal();
};

function closeModal() {
  bigPictureWrapper.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  bigPictureCloseButton.removeEventListener('click', onCloseByClick);
  body.classList.remove('modal-open');
  cleanComments();
}

const openModal = (pictureId) => {
  bigPictureCloseButton.addEventListener('click', onCloseByClick);
  document.addEventListener('keydown', (onDocumentKeyDown));

  const currentPhoto = similarObjects.find((photo) => photo.id === Number(pictureId));

  bigPictureWrapper.classList.remove('hidden');

  renderBigPicture(currentPhoto);
  renderComments(currentPhoto);

  body.classList.add('modal-open');
};

const modalShow = () => {
  picturesContainer.addEventListener('click', (evt) => {
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      evt.preventDefault();
      openModal(currentPicture.dataset.pictureId);
    }
  });
};

export { modalShow };
