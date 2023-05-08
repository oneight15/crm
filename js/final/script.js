'use strict';

(() => {
  const items = ['камень', 'ножницы', 'бумага'];

  const game = () => {
    let winner;
    const rules = ['четное', 'нечетное'];
    const balls = {
      _player: 5,
      _computer: 5,

      get player() {
        return this._player;
      },

      set player(playerChoice) {
        this._player = playerChoice;
      },

      get computer() {
        return this._computer;
      },

      set computer(playerChoice) {
        this._computer = playerChoice;
      },
    };

    const getRandomIntInclusive = (min, max) => {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    const movePlayer = () => {
      const playerNum = prompt(`загадай число от 1 до ${balls._player}`);
      const computerChoice = getRandomIntInclusive(1, balls._player) % 2;

      switch (true) {
        case playerNum === null:
          balls.player -= 10;
          alert('игрок покидает игру, техническое поражение %(');
          return;

        case isNaN(Number(playerNum)):
        case playerNum === '':
        case +playerNum < 1:
        case +playerNum > balls._player:
          return movePlayer();

        default:
          alert(`думаю число ${rules[computerChoice]}`);
      }

      switch (true) {
        case (playerNum % 2) === computerChoice:
          balls.player -= +playerNum;
          balls.computer += +playerNum;
          alert(` счет: \n игрок: ${balls._player > 0 ? balls._player : 0} \n бот: ${balls._computer < 10 ? balls._computer : 10}`);
          break;

        default:
          balls.player += +playerNum;
          balls.computer -= +playerNum;
          alert(` счет: \n игрок: ${balls._player < 10 ? balls._player : 10} \n бот: ${balls._computer > 0 ? balls._computer : 0}`);
          break;
      }
    };

    const moveComputer = () => {
      const computerNum = getRandomIntInclusive(1, balls._computer);
      const randomIndex = Math.round(Math.random());
      alert('я загадал число');
      const guessing = confirm(`число ${rules[randomIndex]}?`);

      switch (true) {
        case (computerNum % 2 === 0) && (randomIndex !== +guessing):
        case (computerNum % 2 === 1) && (randomIndex === +guessing):
          alert(`правильно! я загадывал число ${computerNum}`);
          balls.player += computerNum;
          balls.computer -= computerNum;
          alert(` счет: \n игрок: ${balls._player < 10 ? balls._player : 10} \n бот: ${balls._computer > 0 ? balls._computer : 0}`);
          break;

        default:
          alert(`неправильно! я загадывал число ${computerNum}`);
          balls.player -= computerNum;
          balls.computer += computerNum;
          alert(` счет: \n игрок: ${balls._player > 0 ? balls._player : 0} \n бот: ${balls._computer < 10 ? balls._computer : 10}`);
          break;
      }
    };

    const condition = () => balls._player < 1 || balls._computer < 1;

    const start = (conditionPriority, firstMove, secondMove, conditionStop) => {
      while (!conditionStop()) {
        if (conditionPriority) {
          firstMove();
        } else {
          secondMove();
        }
        conditionPriority = !conditionPriority;
      }
    };

    const gameRPS = () => {
      const computerChoice = Math.floor(Math.random() * items.length);
      const selectedItem = prompt(`${items.join(', ')}?`);
      let acceptQuit;

      const playerChoice = selectedItem ?
        items.indexOf(items.find(item =>
          item.startsWith(selectedItem.toLowerCase()))) : '';

      switch (true) {
        case selectedItem === null:
          acceptQuit = confirm(`прервать игру?`);
          acceptQuit ? alert('сыграем в другой раз') : gameRPS();
          return;

        case !items.includes(items[playerChoice]) || items[playerChoice] === '':
          break;

        case playerChoice === computerChoice:
          alert(` бот выбрал ${items[computerChoice]} \n игрок выбрал ${items[playerChoice]} \n ничья!`);
          break;

        case (playerChoice + 1) % 3 === computerChoice:
          alert(` бот выбрал ${items[computerChoice]} \n игрок выбрал ${items[playerChoice]} \n игрок ходит первый!`);
          winner = true;
          return;

        default:
          alert(` бот выбрал ${items[computerChoice]} \n игрок выбрал ${items[playerChoice]} \n бот ходит первый!!`);
          winner = false;
          return;
      }

      gameRPS();

      return winner;
    };

    gameRPS();

    switch (true) {
      case winner === undefined:
        return;

      default:
        start(winner, movePlayer, moveComputer, condition);
        alert(`выиграл ${balls._player < 1 ? 'бот' : 'игрок'}`);
        confirm('сыграем еще?') ? game() : alert('в другой раз ;)');
    }
  };

  window.marbles = game;
})();
