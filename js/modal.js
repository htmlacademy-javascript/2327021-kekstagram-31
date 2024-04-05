import { similarObjects, picturesContainer } from './miniatures.js';
import { isEscapeKey } from './util.js';

const body = document.querySelector('body');
const bigPictureWrapper = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureCloseButton = bigPictureWrapper.querySelector('#picture-cancel');
const bigPictureDescription = bigPictureWrapper.querySelector('social__caption');
const bigPictureLikes = bigPictureWrapper.querySelector('.likes-count');
const socialComments = bigPictureWrapper.querySelector('.social__comments');
const socialComment = bigPictureWrapper.querySelector('.social__comment');
const socialCommentCountSection = bigPictureWrapper.querySelector('.social__comment-count');
const socialCommentCountLoader = bigPictureWrapper.querySelector('.social__comments-loader');
const socialCommentCountTotal = bigPictureWrapper.querySelector('.social__comment-total-count');

const onDocumentKeyDown = (evt) => {
  if (isEscapeKey(evt)) {
    closeModal();
  }
};

const onCloseByClick = () => {
  closeModal();
};

function closeModal() {
  bigPictureWrapper.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeyDown);
  bigPictureCloseButton.removeEventListener('click', onCloseByClick);
}

const openModal = (pictureId) => {
  bigPictureCloseButton.addEventListener('click', onCloseByClick);
  document.addEventListener('keydown', (onDocumentKeyDown));

  const currentPhoto = similarObjects.find((photo) => photo.id === Number(pictureId));
  bigPictureWrapper.classList.remove('hidden');

  const socialCommentsFragment = document.createDocumentFragment();

  socialCommentCountTotal.textContent = currentPhoto.comments.length;
  bigPictureImg.src = currentPhoto.url;
  bigPictureDescription.textContent = currentPhoto.description;
  bigPictureLikes.textContent = currentPhoto.likes;
  socialComments.innerHTML = '';

  currentPhoto.comments.forEach((comment) => {
    const socialCommentsNew = socialComment.cloneNode(true);

    socialCommentsNew.querySelector('social__picture').src = comment.avatar;
    socialCommentsNew.querySelector('social__picture').alt = comment.name;
    socialCommentsNew.querySelector('social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialCommentsNew);
  });

  socialComments.appendChild(socialCommentsFragment);

  socialCommentCountSection.classList.add('hidden');
  socialCommentCountLoader.classList.add('hidden');

  body.classList.add('modal-open');


};

const modalShow = () => {
  picturesContainer.addEventListener('click', (evt) => {
    evt.preventDefault();
    const currentPicture = evt.target.closest('.picture');
    if (currentPicture) {
      openModal(currentPicture.dataset.pictureId);
    }
  });
};

export { modalShow };
