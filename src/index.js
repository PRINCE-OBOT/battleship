import './style.css';
import shipImg1 from './imgs/ship_len3.svg';
import shipImg2 from './imgs/ship_len2.svg';
import GameBoard from './gameBoard';
import Player from './player';

const play = document.querySelector('[data-play]');

const formPlayerTwoName = document.querySelector('[data-form_player_two_name]');
const player1Name = document.querySelector('[data-player1Name]');
const player2Name = document.querySelector('[data-player2Name]');

const playerOneBoard = document.querySelector('[data-player-board="one"]');
const playerTwoBoard = document.querySelector('[data-player-board="two"]');
const playerBoards = document.querySelectorAll('[data-player-board]');

const select_player2_or_computer = document.querySelector('[data-select_computer_or_player2]');
const playerOneSelectShipBoard = document.querySelector('[data-select-ship-board="playerOne"]');
const playerTwoSelectShipBoard = document.querySelector('[data-select-ship-board="playerTwo"]');
const selectShipBoards = document.querySelectorAll('[data-select-ship-board]');

const selectShipDim = 300;

const playerOne = {
  board: GameBoard(crypto.randomUUID()),
};

const playerTwo = {
  board: GameBoard(crypto.randomUUID()),
};

const playerOneBoardID = playerOne.board.getID();

playerOneBoard.id = playerOneBoardID;

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

shipTemplates.forEach((shipTemplate) => {
  const img = document.createElement('img');
  const cell = [...playerOneSelectShipBoard.children][shipTemplate.ind];
  img.classList.add('shipImg');
  img.setAttribute('data-len', shipTemplate.len);
  img.style.minWidth = `${(selectShipDim / 10) * shipTemplate.len}px`;
  img.src = shipTemplate.ship;
  img.id = playerOneBoardID;
  cell.append(img);
});

playerOne.board.getAllCoordinate().forEach((coordinate) => {
  const cellElem = document.createElement('div');
  cellElem.classList.add('player-board-cell');
  playerBoards.forEach((board) => {
    const cloneCell = cellElem.cloneNode(true);
    cloneCell.setAttribute('data-coordinate', coordinate);
    board.append(cloneCell);
  });
});

function startGame() {
  if (formPlayerTwoName.classList.contains('hide')) Player(playerOne);
  else Player(playerOne, playerTwo);
}

function ShipSelection() {
  const markShip = [];

  function mark(e) {
    if (!e.target.dataset.len) return;
    markShip.unshift(e.target);
  }

  const getMarkShip = () => markShip[0];

  const clearMarkShip = () => markShip.splice(0);

  return { mark, getMarkShip, clearMarkShip };
}

const shipSel = ShipSelection();

function setShip(e) {
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
    const shipElem = shipSel.getMarkShip();
    if (!shipElem) return;
    const id = shipElem.id;
    const len = +shipElem.getAttribute('data-len');

    const isShipSetOnBoard = board.setShip({ id, len }, coordinate);
    if (isShipSetOnBoard) {
      cell.append(shipElem);
      shipSel.clearMarkShip();
    }
  }
}

const player2Tool = [formPlayerTwoName, playerTwoSelectShipBoard];

function togglePlayer2Name() {
  const inpCheckPlayer = document.querySelector('[data-inp_check_player]:checked');

  if (inpCheckPlayer.id === 'computer') {
    player2Tool.forEach((tool) => tool.classList.add('hide'));
  } else player2Tool.forEach((tool) => tool.classList.remove('hide'));
}

togglePlayer2Name();
select_player2_or_computer.addEventListener('change', togglePlayer2Name);

play.addEventListener('click', startGame);

playerOneSelectShipBoard.addEventListener('click', shipSel.mark);
playerOneBoard.addEventListener('click', setShip);
