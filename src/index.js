import './style.css';
import shipImg1 from './imgs/ship_len3.svg';
import shipImg2 from './imgs/ship_len2.svg';
import pirateShip from './imgs/pirate_ship.svg';
import sailingShip from './imgs/sailingShip.svg';
import GameBoard from './gameBoard';
import Player from './player';

const play = document.querySelector('[data-play]');
const reset = document.querySelector('[data-reset]');
const playAgain = document.querySelector('[data-play-again]');
const generalMsg = document.querySelector('[data-winner-name]');

const togglePlayerOneShip = document.querySelector('[data-toggle-player-one-ship]');
const togglePlayerTwoShip = document.querySelector('[data-toggle-player-two-ship]');

const playerOneMsg = document.querySelector('[data-player-one-msg]');
const playerTwoMsg = document.querySelector('[data-player-two-msg]');

const player1Name = document.querySelector('[data-player1Name]');
const player2Name = document.querySelector('[data-player2Name]');

const playerOneBoard = document.querySelector('[data-player-board="one"]');
const playerTwoBoard = document.querySelector('[data-player-board="two"]');
const playerBoards = document.querySelectorAll('[data-player-board]');

const select_player2_or_computer = document.querySelector('[data-select_computer_or_player2]');
const playerOneSelectShipBoard = document.querySelector('[data-select-ship-board="playerOne"]');
const playerTwoSelectShipBoard = document.querySelector('[data-select-ship-board="playerTwo"]');
const selectShipBoards = document.querySelectorAll('[data-select-ship-board]');
const pirateShipImg = document.createElement('img');
const sailingShipImg = document.createElement('img');

const selectShipDim = 240;

const playerOne = {
  board: GameBoard(crypto.randomUUID()),
};

const playerTwo = {
  board: GameBoard(crypto.randomUUID()),
};

const computer = {
  board: GameBoard('computer'),
};

const playerOneID = playerOne.board.getID();
const playerTwoID = playerTwo.board.getID();

playerOneBoard.id = playerOneID;
playerTwoBoard.id = playerTwoID;

const setImgBackgroundToBody = () => {
  const body = document.body;
  pirateShipImg.classList.add('pirateShip');
  sailingShipImg.classList.add('sailingShip');

  pirateShipImg.src = pirateShip;
  sailingShipImg.src = sailingShip;

  body.append(pirateShipImg, sailingShipImg);
};

const appendCellToSelectShipBoard = (selectShip) => {
  let count = 0;
  while (count < 100) {
    const cell = document.createElement('div');
    cell.classList.add('select-ship-cell');
    selectShip.append(cell);
    count++;
  }
};

const setDimToSelectShipBoard = (selectShip) => {
  selectShip.style.minWidth = `${selectShipDim}px`;
  selectShip.style.minHeight = `${selectShipDim}px`;
};

selectShipBoards.forEach((selectShip) => {
  setDimToSelectShipBoard(selectShip);
  appendCellToSelectShipBoard(selectShip);
});

const shipTemplates = [
  { len: 4, ind: 0, ship: shipImg1 },
  { len: 3, ind: 20, ship: shipImg1 },
  { len: 3, ind: 26, ship: shipImg1 },
  { len: 2, ind: 40, ship: shipImg2 },
  { len: 2, ind: 43, ship: shipImg2 },
  { len: 2, ind: 46, ship: shipImg2 },
  { len: 1, ind: 60, ship: shipImg2 },
  { len: 1, ind: 63, ship: shipImg2 },
  { len: 1, ind: 66, ship: shipImg2 },
  { len: 1, ind: 69, ship: shipImg2 },
];

const appendShipTemplateOnSelectBoard = (selectBoard, playerID) => {
  shipTemplates.forEach((shipTemplate) => {
    const img = document.createElement('img').cloneNode(true);
    const cell = [...selectBoard.children][shipTemplate.ind];
    img.classList.add('shipImg');
    img.setAttribute('data-len', shipTemplate.len);
    img.style.minWidth = `${(selectShipDim / 10) * shipTemplate.len}px`;
    img.src = shipTemplate.ship;
    img.id = playerID;
    cell.append(img);
  });
};

const appendCellToBoard = () => {
  playerOne.board.getAllCoordinate().forEach((coordinate) => {
    const cellElem = document.createElement('div');
    cellElem.classList.add('player-board-cell');
    playerBoards.forEach((board) => {
      const cloneCell = cellElem.cloneNode(true);
      cloneCell.setAttribute('data-coordinate', coordinate);
      board.append(cloneCell);
    });
  });
};

function toggleShipDisplay(board) {
  board.querySelectorAll('[data-len]').forEach((ship) => ship.classList.toggle('visibilityHidden'));
}

function handleTogglePlayerOneShip() {
  toggleShipDisplay(playerOneBoard);
}

function handleTogglePlayerTwoShip() {
  toggleShipDisplay(playerTwoBoard);
}

function ShipSelection() {
  let selectedShip = null;

  function selectShip(e) {
    e.stopPropagation();
    const ship = e.target;
    if (ship.dataset.len) {
      selectedShip = ship;
    }
  }

  const getSelectedShip = () => selectedShip;

  const unselectShip = () => {
    selectedShip = null;
  };

  return { selectShip, getSelectedShip, unselectShip };
}

const shipSel = ShipSelection();

function setComputerShip() {
  computer.board.setShipDynamically();

  playerTwoBoard.innerHTML = '';
  computer.board.getBoard().forEach((cell) => {
    const cellElem = document.createElement('div');
    cellElem.setAttribute('data-coordinate', cell.getCoordinate());
    cellElem.classList.add('player-board-cell');
    if (cell.getShip()) {
      cellElem.setAttribute('data-len', `${cell.getShip().len()}`);
    }
    playerTwoBoard.append(cellElem);
  });
}

function togglePlayer2SelectShipBoard() {
  const inpCheckPlayer = document.querySelector('[data-inp-check-player]:checked');

  if (inpCheckPlayer.id === 'computer') {
    playerTwoSelectShipBoard.classList.add('hide');
  } else playerTwoSelectShipBoard.classList.remove('hide');

  game.reset();
}

const removeShip = (cellElem) => {
  const ship = cellElem.querySelector('[data-len]');
  if (ship) ship.remove();
};

const removeAttackCell = (cellElem) => {
  const attackCellStatus = cellElem.querySelector('[data-hit-status]');
  if (attackCellStatus) {
    attackCellStatus.remove();
  }
};

const resetSelectShipBoardTwo = () => {
  [...[...selectShipBoards][1].children].forEach(removeShip);
  appendShipTemplateOnSelectBoard(playerTwoSelectShipBoard, playerTwoID);
};

const resetSelectShipBoardOne = () => {
  [...[...selectShipBoards][0].children].forEach(removeShip);
  appendShipTemplateOnSelectBoard(playerOneSelectShipBoard, playerOneID);
};

const removeAttackCellMark = () => {
  playerBoards.forEach((board) => {
    [...board.children].forEach(removeAttackCell);
  });
};

const removeShipFromPlayerOneBoard = () => {
  [...playerOneBoard.children].forEach(removeShip);
};

const removeShipOnFromPlayerTwoBoard = () => {
  [...playerTwoBoard.children].forEach(removeShip);
};

function handleResetSelectShipBoardTwo(e) {
  const checkPlayer = e.target.dataset.inpCheckPlayer;

  if (!checkPlayer) return;

  if (checkPlayer === 'computer') {
    resetSelectShipBoardTwo();
    [...playerTwoBoard.children].forEach(removeShip);
  }
  togglePlayer2SelectShipBoard();
}

const filterCellWithShip = (cellElem) => {
  return cellElem.querySelector('[data-len]');
};

const makePointerNone = (cellElem) => {
  cellElem.querySelector('[data-len]').classList.add('pointerEventNone');
};

const makeInpReadOnly = () => {
  [player1Name, player2Name].forEach((name) => (name.readOnly = true));
};

const makeReadOnlyFromInp = () => {
  [player1Name, player2Name].forEach((name) => (name.readOnly = false));
};

const togglePlayerMsg = (playerMsg) => {
  playerMsg.classList.remove('scaleTo0');
  setTimeout(() => playerMsg.classList.add('scaleTo0'), 2000);
};

const togglePlayerOneMsg = (msg) => {
  playerOneMsg.textContent = msg;
  togglePlayerMsg(playerOneMsg);
};

const togglePlayerTwoMsg = (msg) => {
  playerTwoMsg.textContent = msg;
  togglePlayerMsg(playerTwoMsg);
};

const setPlayerTurnMsg = (msg) => {
  generalMsg.textContent = `${msg} turn`;
};

function Game() {
  let isBtw, player, winner, gameStart;

  const playerInfo = {
    playerOne: playerOne.board,
    playerOneName: 'Player 1',
  };

  const humanAndComputer = {
    attackShip(cell, coordinate) {
      const boardElemID = cell.closest('[data-player-board]').id;

      if (boardElemID === playerOneID) return;

      let attackState = player.humanTurn(coordinate);

      if (!attackState) {
        togglePlayerOneMsg('Already hit');
        return;
      }
      markHitCell(cell, attackState);

      if (attackState === 'miss') {
        setPlayerTurnMsg(player.getPlayerTwoName());
        const isAllShipSunk = player.computerTurn(false, 'randomIndex', computerTurnCb);
        if (isAllShipSunk === 'allSunk') {
          winner = player.getPlayerTwoName();
          return;
        }
      } else {
        if (computer.board.isAllShipSunk()) {
          winner = player.getPlayerOneName();
          return;
        }
      }
    },

    playAgain() {
      computer.board.playAgain();
    },

    reset() {
      computer.board.reset();
    },
  };

  const humanAndHuman = {
    attackShip(cell, coordinate) {
      const boardElemID = cell.closest('[data-player-board]').id;
      const boardID = player.getCurrentBoardID();

      if (boardElemID !== boardID) return;

      const currentBoardAttack = player.getCurrentBoardToAttack();
      const attackState = currentBoardAttack.receiveAttack(coordinate);

      if (!attackState) {
        if (playerOneID === boardID) {
          togglePlayerOneMsg('Already hit');
        } else {
          togglePlayerTwoMsg('Already hit');
        }
        return;
      }

      markHitCell(cell, attackState);

      if (attackState === 'miss') {
        player.switchBoardID();
        player.switchBoard();
        player.switchPlayerName();
        setPlayerTurnMsg(player.getCurPlayerName());
      } else {
        if (currentBoardAttack.isAllShipSunk()) {
          winner = player.getCurPlayerName();
        }
      }
    },

    playAgain() {
      playerTwo.board.playAgain();
    },

    reset() {
      playerTwo.board.reset();
      removeShipOnFromPlayerTwoBoard();
      resetSelectShipBoardTwo();
    },
  };

  function start() {
    if (gameStart) return;

    makeInpReadOnly();
    const inpCheckPlayer = document.querySelector('[data-inp-check-player]:checked');

    if (inpCheckPlayer.id === 'computer') {
      isBtw = humanAndComputer;
      playerInfo.playerTwo = computer.board;
      playerInfo.playerTwoName = 'Grok';

      if (!playerOne.board.isAllShipSet()) {
        togglePlayerOneMsg(`${playerInfo.playerOneName} set all your Ship`);
        return;
      }

      setComputerShip();
    } else {
      isBtw = humanAndHuman;

      playerInfo.playerTwo = playerTwo.board;
      playerInfo.playerTwoName = 'Player 2';

      if (!playerOne.board.isAllShipSet()) {
        togglePlayerOneMsg(`${playerInfo.playerOneName} set all your Ship`);
        return;
      } else if (!playerTwo.board.isAllShipSet()) {
        togglePlayerTwoMsg(`${playerInfo.playerTwoName} set all your Ship`);
        return;
      }

      [...playerTwoBoard.children].filter(filterCellWithShip).forEach(makePointerNone);
    }

    if (player1Name.value.trim() !== '') playerInfo.playerOneName = player1Name.value;
    if (player2Name.value.trim() !== '') playerInfo.playerTwoName = player2Name.value;

    player = Player(playerInfo);

    [...playerOneBoard.children].filter(filterCellWithShip).forEach(makePointerNone);
    setPlayerTurnMsg(player.getPlayerOneName());
    gameStart = true;
  }

  const resetBoard = () => {
    winner = false;
    gameStart = false;
    generalMsg.innerHTML = '🎯';
    removeAttackCellMark();
  };

  function playAgain() {
    if (!isBtw) return;

    gameStart = true;

    isBtw.playAgain();
    playerOne.board.playAgain();
    removeAttackCellMark();
    generalMsg.textContent = 'Game Ongoing';
    resetBoard();
  }

  function reset() {
    if (!isBtw) return;

    isBtw.reset();
    playerOne.board.reset();

    removeAttackCellMark();
    removeShipFromPlayerOneBoard();
    resetSelectShipBoardOne();
    makeReadOnlyFromInp();
    resetBoard();
  }

  const markHitCell = (cellElem, attackState) => {
    const attackCellStatus = document.createElement('div');
    attackCellStatus.classList.add('attackCellStatus');
    attackCellStatus.setAttribute('data-hit-status', '');
    attackCellStatus.innerHTML = attackState === 'hit' ? '💥' : '❌';
    cellElem.append(attackCellStatus);
  };

  const displayWinnerMsg = (winner) => {
    if (winner) {
      generalMsg.textContent = `${winner} won`;
      gameStart = false;
    }
  };

  const computerTurnCb = (coordinate, attackState) => {
    const cell = playerOneBoard.querySelector(`[data-coordinate="${coordinate}"]`);

    if (attackState === 'miss') {
      setPlayerTurnMsg(player.getPlayerOneName());
    }
    markHitCell(cell, attackState);
  };

  function attackShip(e) {
    if (!gameStart || !isBtw) return;

    let cell = e.target;
    const coordinate = cell.dataset.coordinate;

    isBtw.attackShip(cell, coordinate);
    displayWinnerMsg(winner);
  }

  function setShip(e) {
    if (gameStart) return;

    const cell = e.target;
    const ship = e.target;
    const boardElem = cell.closest('[data-player-board]');
    const board = boardElem.dataset.playerBoard === 'one' ? playerOne.board : playerTwo.board;
    let coordinate = cell.dataset.coordinate;

    if (ship.dataset.len) {
      coordinate = ship.closest('[data-coordinate]').getAttribute('data-coordinate');
      if (board.switchShipAxis(coordinate)) {
        ship.classList.toggle('rotate');
      }
    } else if (coordinate) {
      const shipElem = shipSel.getSelectedShip();
      if (!shipElem) return;
      const id = shipElem.id;
      const len = +shipElem.getAttribute('data-len');

      const isShipSet = board.setShip({ id, len }, coordinate);
      if (isShipSet) {
        const width = getComputedStyle(playerOneBoard).width;
        shipElem.style.minWidth = `${(+width.replace(/[a-z]/gi, '') / 10) * len}px`;
        cell.append(shipElem);
      } else {
        if (id === playerOneID) {
          togglePlayerOneMsg('Invalid Position');
        } else {
          togglePlayerTwoMsg('Invalid Position');
        }
      }
    }
  }

  return { setShip, start, playAgain, reset, attackShip };
}

const game = Game();

appendShipTemplateOnSelectBoard(playerOneSelectShipBoard, playerOneID);
appendShipTemplateOnSelectBoard(playerTwoSelectShipBoard, playerTwoID);

setImgBackgroundToBody();
appendCellToBoard();
togglePlayer2SelectShipBoard();

select_player2_or_computer.addEventListener('change', handleResetSelectShipBoardTwo);

play.addEventListener('click', game.start);
reset.addEventListener('click', game.reset);
playAgain.addEventListener('click', game.playAgain);

playerOneSelectShipBoard.addEventListener('click', shipSel.selectShip);
playerTwoSelectShipBoard.addEventListener('click', shipSel.selectShip);

playerOneBoard.addEventListener('click', game.setShip);
playerTwoBoard.addEventListener('click', game.setShip);

playerOneBoard.addEventListener('click', game.attackShip);
playerTwoBoard.addEventListener('click', game.attackShip);

togglePlayerOneShip.addEventListener('click', handleTogglePlayerOneShip);
togglePlayerTwoShip.addEventListener('click', handleTogglePlayerTwoShip);

document.addEventListener('click', () => {
  shipSel.unselectShip();
});
