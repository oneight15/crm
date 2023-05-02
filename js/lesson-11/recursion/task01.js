'use strict';

const randomNumber = Math.ceil(Math.random() * 100);

alert('Я загадал число от 1 до 100, попробуй угадать');

const game = tryToGuess => {
  tryToGuess = prompt('Введи число');

  switch (true) {
    case tryToGuess === null:
      alert('Сыграем в другой раз!');
      return;

    case isNaN(tryToGuess):
    case +tryToGuess < 1:
    case +tryToGuess > 100:
      alert('Введи число от 1 до 100!');
      break;

    case (+tryToGuess > randomNumber):
      alert('Загаданное число меньше!');
      break;

    case (+tryToGuess < randomNumber):
      alert('Загаданное число больше!');
      break;

    default:
      alert('Правильно, ты угадал!');
      return 'Правильно, ты угадал!';
  }

  return game();
};

game();
