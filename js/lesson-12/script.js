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
      const computerChoice = Math.floor(Math.random() * lang.length);
      const selectedItem = prompt(`${lang.join(', ')}?`);
      let acceptQuit;

      const playerChoice = selectedItem ?
        lang.indexOf(lang.find(item => item.startsWith(selectedItem.toLowerCase()))) : '';

      switch (true) {
        case selectedItem === null:
          acceptQuit = confirm(`прервать игру?`);
          acceptQuit ? alert(` результаты игры: \n компьютер: ${result.computer} \n игрок: ${result.player}`) : start();
          return;

        case !lang.includes(lang[playerChoice]) || lang[playerChoice] === '':
          break;

        case playerChoice === computerChoice:
          alert(` компьютер выбрал ${lang[computerChoice]} \n игрок выбрал ${lang[playerChoice]} \n ничья!`);
          break;

        case (playerChoice + 1) % 3 === computerChoice:
          alert(` компьютер выбрал ${lang[computerChoice]} \n игрок выбрал ${lang[playerChoice]} \n вы выиграли!`);
          result.player++;
          break;

        default:
          alert(` компьютер выбрал ${lang[computerChoice]} \n игрок выбрал ${lang[playerChoice]} \n вы проиграли!`);
          result.computer++;
          break;
      }

      return start();
    };
  };

  window.rps = game;
})();
