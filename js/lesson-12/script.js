'use strict';

(() => {
  const FIGURES_ENG = ['rock', 'scissors', 'paper'];
  const FIGURES_RUS = ['камень', 'ножницы', 'бумага'];

  const game = language => {
    const result = {
      player: 0,
      computer: 0,
    };

    const lang = language === 'EN' || language === 'ENG' ?
    FIGURES_ENG : FIGURES_RUS;

    return function start() {
      const computerChoice = lang[Math.floor(Math.random() * lang.length)];
      const selectedItem = prompt('камень, ножницы, бумага?');
      let acceptQuit;

      const playerChoice = selectedItem ?
        lang.find(item => item.startsWith(selectedItem.toLowerCase())) : '';

      switch (true) {
        case selectedItem === null:
          acceptQuit = prompt(`прервать игру?`);
          acceptQuit !== '' ?
            start() : alert(` результаты игры: \n компьютер: ${result.computer} \n игрок: ${result.player}`);
          return;

        case !lang.includes(playerChoice) || playerChoice === '':
          break;

        case playerChoice === computerChoice:
          alert(` компьютер выбрал ${computerChoice} \n игрок выбрал ${playerChoice} \n ничья!`);
          break;

        case playerChoice === 'камень' && computerChoice === 'ножницы':
        case playerChoice === 'ножницы' && computerChoice === 'бумага':
        case playerChoice === 'бумага' && computerChoice === 'камень':
          alert(` компьютер выбрал ${computerChoice} \n игрок выбрал ${playerChoice} \n вы выиграли!`);
          result.player++;
          break;

        default:
          alert(` компьютер выбрал ${computerChoice} \n игрок выбрал ${playerChoice} \n вы проиграли!`);
          result.computer++;
          break;
      }

      return start();
    };
  };

  window.rps = game;
})();
