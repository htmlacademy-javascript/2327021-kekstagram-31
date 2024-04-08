import { getRandomInteger, getRandomElement, getRandomIntNoRepeat } from './util';

const DESCRIPTIONS = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25'];

const MESSAGES = ['Всё отлично!', 'В целом всё неплохо. Но не всё.', 'Когда вы делаете фотографию, хорошо бы убирать палец из кадра.', 'В конце концов это просто непрофессионально.', 'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.', 'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.', 'Лица у людей на фотке перекошены, как будто их избивают.', 'Как можно было поймать такой неудачный момент?!'];

const AVATARS = [1, 2, 3, 4, 5, 6];

const NAMES = ['Пауэр', 'Блек', 'Бульбозавр', 'Грюм', 'Миг29СМТ', 'Патрисия', 'Фитжеральд', 'Магос', 'Император человечества', 'Эйзенхорн', 'Джек Ричер', 'Доктор Слу', 'Гендальф', 'Нагибатор367', 'Магнето', 'Доминик Торетто', 'Лиза дочь маркиза', 'Тирекс', 'СиДаблюЭй', 'Снупи', 'Мазафакер', 'Шабалин', 'Эндрю 8 фунтов', 'Валера штанга', 'Зенит чемпион', 'Твой батя'];

const createUniqueIDComments = getRandomIntNoRepeat(1, 1000);

const PHOTO_DESCRIPTIONS_COUNT = 25;

const getComments = () => ({
  id: createUniqueIDComments(),
  avatar: `img/avatar-${getRandomElement(AVATARS)}.svg`,
  message: getRandomElement(MESSAGES),
  name: getRandomElement(NAMES),
});

const createUniqueID = getRandomIntNoRepeat(1, 25);
const createUniqueUrl = getRandomIntNoRepeat(1, 25);

const createComments = () => Array.from({ length: getRandomInteger(1, 30) }, getComments);

const photoDescription = () => ({
  id: createUniqueID(),
  url: `photos/${createUniqueUrl()}.jpg`,
  description: `описание фото ${getRandomElement(DESCRIPTIONS)}`,
  likes: getRandomInteger(15, 200),
  comments: createComments()
});

const createPhotoObjects = () => Array.from({ length: PHOTO_DESCRIPTIONS_COUNT }, photoDescription);

export { createPhotoObjects };
