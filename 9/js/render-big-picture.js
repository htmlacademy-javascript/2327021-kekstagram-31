const bigPictureWrapper = document.querySelector('.big-picture');
const bigPictureImg = document.querySelector('.big-picture__img img');
const bigPictureDescription = bigPictureWrapper.querySelector('.social__caption');
const bigPictureLikes = bigPictureWrapper.querySelector('.likes-count');

const renderBigPicture = (element) => {
  bigPictureImg.src = element.url;
  bigPictureDescription.textContent = element.description;
  bigPictureLikes.textContent = element.likes;
};

export { renderBigPicture };
