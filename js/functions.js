
// Функция для проверки длины строки.
// вар 1
const measureLength = function (string, maxLength) {
  if (string.length <= maxLength) {
    string = true;
  } else {
    string = false;
  }
  return string;
};

measureLength('проверяемая строка', 20);


// вар 2
const measureLength = (string, maxLength) => (string.length <= maxLength) ? string = true : string = false;

measureLength('проверяемая строка', 20);



// Функция для проверки, является ли строка палиндромом.
// вар 1 - мой
const poly = string1 => {
  const polyNormalise = string1.toLowerCase().replaceAll(' ', '');
  const reverseText = polyNormalise.split('').reverse().join('');
  if (polyNormalise === reverseText) {
    string1 = true;
  } else { string1 = false; }
  return string1;
}


// вар 2 - как по учебе (хотя там все мутно)
const poly = string1 => {
  let polyNormalise = string1.toLowerCase().replaceAll(' ', '');
  let reverseText = '';
  for (let i = polyNormalise.length - 1; i >= 0; i--) {
    reverseText += polyNormalise[i];
  }
  if (polyNormalise === reverseText) {
    string1 = true;
  } else {
    string1 = false;
  }
  return string1;
}
