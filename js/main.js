const ID_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const URL_ARR = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const DESCRIPTIONS_ALL = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25];

const MESSAGE_ARR = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const AVATAR_ARR = [1, 2, 3, 4, 5, 6];

const NAME_ARR = ['Пауэр', 'Блек', 'Бульбозавр', 'Грюм', 'Миг29СМТ', 'Патрисия', 'Фитжеральд', 'Магос', 'Император человечества', 'Эйзенхорн', 'Джек Ричер', 'Доктор Слу', 'Гендальф', 'Нагибатор367', 'Магнето', 'Доминик Торетто', 'Лиза дочь маркиза', 'Тирекс', 'СиДаблюЭй', 'Снупи', 'Мазафакер', 'Шабалин', 'Эндрю 8 фунтов', 'Валера штанга', 'Зенит чемпион', 'Твой батя'];

const COMMENTS = () => {
  return {
    id: getRandomIntNoRepeat(1, 1000),
    avatar: 'img/avatar-' + getRandomElement(AVATAR_ARR),
    message: getRandomElement(MESSAGE_ARR),
    name: getRandomElement(NAME_ARR),
  }
}

const PHOTO_DESCRIPTIONS_COUNT = 25;

const getRandomInteger = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;

  return Math.floor(result);
};


const getRandomElement = (elements) => {
  return elements[getRandomInteger(0, elements.length - 1)];
};

const getRandomIntNoRepeat = (min, max) => {
  let targetArray = [];

  return function () {
    let currentValue = getRandomInteger(min, max);

    if (targetArray.length >= (max - min + 1)) {
      console.error('превышение кол-ва возможных значений');
      return null;
    }

    while (targetArray.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    targetArray.push(currentValue);
    return currentValue;
  };
}

const getRandomNoRepeatElement = (elements) => {
  return elements[getRandomIntNoRepeat(0, elements.length - 1)];
}

const COMMENTS_All = Array.from({ length: getRandomInteger(1, 30) }, COMMENTS);

const photoDescription = () => {
  return {
    id: getRandomElement(ID_ARR),
    url: 'photo/' + getRandomNoRepeatElement(URL_ARR) + '.jpg',
    description: 'описание фото' + getRandomNoRepeatElement(DESCRIPTIONS_ALL),
    likes: getRandomInteger(15, 200),
    comments: COMMENTS_All
  };
}

const photoDescriptionsAll = Array.from({ length: PHOTO_DESCRIPTIONS_COUNT }, photoDescription);

console.log(photoDescriptionsAll);
