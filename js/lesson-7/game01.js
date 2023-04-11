'use strict';

const randomNumber = Math.ceil(Math.random() * 100);
console.log(randomNumber);

alert('Я загадал число от 1 до 100, попробуй угадать');

while (true) {
  let tryToGuess = prompt('Введи число');

  if (tryToGuess === null) {
    alert('Сыграем в другой раз!');
    break;
  } else if (isNaN(tryToGuess)) {
    alert('Введи число!');
  }

  switch (true) {
    case (+tryToGuess === randomNumber):
      alert('Правильно, ты угадал!');
      break;

    case (+tryToGuess > randomNumber):
      alert('Загаданное число меньше!');
      break;
      
    case (+tryToGuess < randomNumber):
      alert('Загаданное число больше!');
      break;
      
    default:
      alert('Введи число!');
      break;
  }

  if (+tryToGuess === randomNumber) {
    break;
  }

}



