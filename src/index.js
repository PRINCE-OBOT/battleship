import './style.css';
import shipImg1 from './imgs/ship_len3.svg';
import shipImg2 from './imgs/ship_len2.svg';
import GameBoard from './gameBoard';
import Player from './player';

const play = document.querySelector('[data-play]');

const formPlayerTwoName = document.querySelector('[data-form_player_two_name]');
const player1Name = document.querySelector('[data-player1Name]');
const player2Name = document.querySelector('[data-player2Name]');

const select_player2_or_computer = document.querySelector('[data-select_computer_or_player2]');
const playerOneSelectShip = document.querySelector('[data-select-ship="playerOne"]');
const selectShips = document.querySelectorAll('[data-select-ship]');

const selectShipDim = 290;

const appendCellToSelectShip = (selectShip) => {
  let count = 0;
  while (count < 64) {
    const cell = document.createElement('div');
    cell.classList.add('select-ship-cell');
    selectShip.append(cell);
    count++;
  }
};

const setDimToSelectShip = (selectShip) => {
  selectShip.style.minWidth = `${selectShipDim}px`;
  selectShip.style.minHeight = `${selectShipDim}px`;
};

selectShips.forEach((selectShip) => {
  setDimToSelectShip(selectShip);
  appendCellToSelectShip(selectShip);
});

const shipTemplates = [
  { len: 4, ind: 0, ship: shipImg1 },
  { len: 3, ind: 16, ship: shipImg1 },
  { len: 3, ind: 20, ship: shipImg1 },
  { len: 2, ind: 32, ship: shipImg2 },
  { len: 2, ind: 35, ship: shipImg2 },
  { len: 2, ind: 38, ship: shipImg2 },
  { len: 1, ind: 48, ship: shipImg2 },
  { len: 1, ind: 50, ship: shipImg2 },
  { len: 1, ind: 52, ship: shipImg2 },
  { len: 1, ind: 54, ship: shipImg2 },
];

shipTemplates.forEach((shipTemplate) => {
  const img = document.createElement('img');
  const cell = [...playerOneSelectShip.children][shipTemplate.ind];
  img.classList.add(`shipLen${shipTemplate.len}Img`, 'shipLenImg');
  img.style.minWidth = `${(selectShipDim / 8) * shipTemplate.len}px`;
  img.src = shipTemplate.ship;
  cell.append(img);
});

function startGame() {
  const playerOne = {
    name: player1Name.value,
    board: GameBoard(crypto.randomUUID()),
  };
  const playerTwo = {
    name: player2Name.value,
    board: GameBoard(crypto.randomUUID()),
  };

  if (formPlayerTwoName.classList.contains('hide')) Player(playerOne);
  else Player(playerOne, playerTwo);
}

function togglePlayer2Name() {
  const inpCheckPlayer = document.querySelector('[data-inp_check_player]:checked');

  if (inpCheckPlayer.id === 'computer') {
    console.log('ru');
    formPlayerTwoName.classList.add('hide');
  } else formPlayerTwoName.classList.remove('hide');
}

togglePlayer2Name();
select_player2_or_computer.addEventListener('change', togglePlayer2Name);

play.addEventListener('click', startGame);
