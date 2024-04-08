// Функция для проверки длины строки.
// вар 1
const measureLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    return true;
  } else {
    return false;
  }
};

measureLength('проверяемая строка', 20);


// вар 2
const measureLength1 = (str, maxLength) => (str.length <= maxLength);

measureLength1('проверяемая строка', 20);


// Функция для проверки, является ли строка палиндромом.
// вар 1 - мой
const poly = (string1) => {
  const polyNormalise = string1.toLowerCase().replaceAll(' ', '');
  const reverseText = polyNormalise.split('').reverse().join('');
  return polyNormalise === reverseText;
};

poly('ДовоД    дОВОд');


// вар 2 - как по учебе (хотя там все мутно)
const poly1 = (string2) => {
  const polyNormalise = string2.toLowerCase().replaceAll(' ', '');
  let reverseText = '';
  for (let i = polyNormalise.length - 1; i >= 0; i--) {
    reverseText += polyNormalise[i];
  }
  if (polyNormalise === reverseText) {
    string2 = true;
  } else {
    string2 = false;
  }
  return string2;
};

poly1('ДовоД    дОВОд');


// 5.16. Функции возвращаются
//Напишите функцию, которая принимает время начала и конца рабочего дня,
// а также время старта и продолжительность встречи в минутах и возвращает true,
// если встреча не выходит за рамки рабочего дня, и false, если выходит.
// Время указывается в виде строки в формате часы:минуты. Для указания часов и минут могут
// использоваться как две цифры, так и одна. Например, 8 часов 5 минут могут быть указаны
// по-разному: 08:05, 8:5, 08:5 или 8:05.
// Продолжительность задаётся числом. Гарантируется, что и рабочий день, и встреча укладываются
// в одни календарные сутки.

const convertTime = (TimeInHours) => {
  const timeSeparation = TimeInHours.split(':');
  const timeInMinutes = Number((timeSeparation[0] * 60) + Number(timeSeparation[1]));
  return timeInMinutes;
};

const GetTimeTracking = (startWorkDay, endWorkDay, startMeeting, durations) => {
  const startWorkDayMinute = convertTime(startWorkDay);
  const endWorkDayMinute = convertTime(endWorkDay);
  const startMeetingMinute = convertTime(startMeeting);
  if (startMeetingMinute + durations >= endWorkDayMinute || startMeetingMinute < startWorkDayMinute) {
    return false;
  }
  return true;
};

GetTimeTracking('8:00', '17:30', '08:00', 900);
