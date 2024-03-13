
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
