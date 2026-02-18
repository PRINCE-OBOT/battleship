import GameBoard from './gameBoard';

export default function Player() {
  // Computer plays first against human board
  let board = 'human';

  const playerBoard = {
    computer: GameBoard(),
    human: GameBoard(),
  };

  const switchBoard = () => {
    board = board === 'computer' ? 'human' : 'computer';
  };

  const getCurrentBoard = () => board;

  const play = (coordinate) => {
    playerBoard[getCurrentBoard()].receiveAttack(coordinate);
  };

  const setShip = (ship, coordinate, player) => {
    playerBoard[player].setShip(ship, coordinate);
  };

  const getPlayerBoard = (player) => playerBoard[player];

  return { switchBoard, play, setShip, getPlayerBoard };
}
