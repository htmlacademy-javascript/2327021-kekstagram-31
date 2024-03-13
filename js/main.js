const DESCRIPTIONS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const AVATARS = [1, 2, 3, 4, 5, 6];

const NAMES = ['Пауэр', 'Блек', 'Бульбозавр', 'Грюм', 'Миг29СМТ', 'Патрисия', 'Фитжеральд', 'Магос', 'Император человечества', 'Эйзенхорн', 'Джек Ричер', 'Доктор Слу', 'Гендальф', 'Нагибатор367', 'Магнето', 'Доминик Торетто', 'Лиза дочь маркиза', 'Тирекс', 'СиДаблюЭй', 'Снупи', 'Мазафакер', 'Шабалин', 'Эндрю 8 фунтов', 'Валера штанга', 'Зенит чемпион', 'Твой батя'];

const createUniqueIDComments = getRandomIntNoRepeat(1, 1000);

const PHOTO_DESCRIPTIONS_COUNT = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


const getRandomElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

function getRandomIntNoRepeat(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const getComments = () => ({
  id: createUniqueIDComments(),
  avatar: `img/avatar-${getRandomElement(AVATARS)}`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createUniqueID = getRandomIntNoRepeat(1, 25);
const createUniqueUrl = getRandomIntNoRepeat(1, 25);

const createComments = () => Array.from({ length: getRandomInteger(1, 30) }, getComments);

const photoDescription = () => ({
  id: createUniqueID(),
  url: `photo/${createUniqueUrl()}.jpg`,
  description: `описание фото ${getRandomElement(DESCRIPTIONS)}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const photoDescriptionsAll = Array.from({ length: PHOTO_DESCRIPTIONS_COUNT }, photoDescription);

// eslint-disable-next-line no-console
console.log(photoDescriptionsAll);
