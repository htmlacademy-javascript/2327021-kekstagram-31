const bigPictureWrapper = document.querySelector('.big-picture');
const socialCommentList = bigPictureWrapper.querySelector('.social__comments');
const socialCommentTemplate = bigPictureWrapper.querySelector('.social__comment');
const socialCommentLoader = bigPictureWrapper.querySelector('.social__comments-loader');

const socialCommentCountTotal = bigPictureWrapper.querySelector('.social__comment-total-count');
const socialCommetnCountShown = bigPictureWrapper.querySelector('.social__comment-shown-count');
socialCommentList.innerHTML = '';

const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const renderNextComments = () => {
  const socialCommentsFragment = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;
  renderedComments.forEach((comment) => {
    const socialCommentNew = socialCommentTemplate.cloneNode(true);

    socialCommentNew.querySelector('.social__picture').src = comment.avatar;
    socialCommentNew.querySelector('.social__picture').alt = comment.name;
    socialCommentNew.querySelector('.social__text').textContent = comment.message;

    socialCommentsFragment.appendChild(socialCommentNew);
  });

  socialCommentList.appendChild(socialCommentsFragment);
  socialCommetnCountShown.textContent = renderedCommentsLength;
  socialCommentCountTotal.textContent = comments.length;

  if (renderedCommentsLength >= comments.length) {
    socialCommentLoader.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};


const renderComments = (element) => {
  comments = element.comments;
  renderNextComments();

  socialCommentLoader.addEventListener('click', renderNextComments);
};

const cleanComments = () => {
  currentCount = 0;
  socialCommentList.innerHTML = '';
  socialCommentLoader.classList.remove('hidden');
  socialCommentLoader.removeEventListener('click', renderNextComments);
};


export { renderComments, cleanComments };
