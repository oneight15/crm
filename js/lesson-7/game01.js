'use strict';

const randomNumber = Math.ceil(Math.random() * 100);

alert('Я загадал число от 1 до 100, попробуй угадать');

const game = () => {
  const tryToGuess = prompt('Введи число');

  if (typeof tryToGuess === 'object') {
    return alert('Сыграем в другой раз!')
  }

  switch (true) {
    case (+tryToGuess === randomNumber):
      alert('Правильно, ты угадал!');
      break;

    case (+tryToGuess > randomNumber):
      alert('Загаданное число меньше!');
      game();
      break;
      
    case (+tryToGuess < randomNumber):
      alert('Загаданное число больше!');
      game();
      break;
      
    default:
      alert('Введи число!');
      game();
      break;
  }
}

game()

