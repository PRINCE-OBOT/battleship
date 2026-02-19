import GameBoard from './gameBoard';

const shipSample = {};

export default function Player(playerOneName = 'Player 1', playTwoName) {
  const playerOneID = crypto.randomUUID();
  // continue form creating a ship sample that will be use to place ship

  const computer = {
    name: 'Dolly',
    board: GameBoard(),
  };

  const playerOne = {
    name: playerOneName,
    board: GameBoard(crypto.randomUUID()),
  };

  const playerTwo = {
    name: playTwoName,
    board: GameBoard(crypto.randomUUID()),
  };

  const stack = [];
  const boardToSetShip = [playerOne.board];
  const allCoordinate = computer.board.getAllCoordinate();

  let playerName = playerOne.name;
  let boardToAttack = playerTwo.board;

  if (playerTwo.name !== undefined) boardToSetShip.push(playerTwo.board);

  const switchPlayer = () => {
    playerName = playerName === playerOne.name ? playerTwo.name : playerOne.name;
  };

  const switchBoard = () => {
    boardToAttack = boardToAttack === playerTwo.board ? playerOne.board : playerTwo.board;
  };

  const getCurrentPlayer = () => playerName;

  const getCurrentBoardToAttack = () => boardToAttack;

  const setShip = (shipTemplate, coordinate, position) => {
    if (position === 1 && playerTwo.name === undefined) return;
    boardToSetShip[position].setShip(shipTemplate, coordinate);
  };

  const getValidAdjacentCoordinate = (coordinate) => {
    const coordinateIndex = Number.isInteger(coordinate)
      ? coordinate
      : computer.board.getIndexOfCoordinate(coordinate);

    const leftCoordinateIndex = coordinateIndex - 1;
    const topCoordinateIndex = coordinateIndex - 10;
    const rightCoordinateIndex = coordinateIndex + 1;
    const bottomCoordinateIndex = coordinateIndex + 10;

    const computerBoard = computer.board.getBoard();

    return [
      {
        indexOfCoordinate: leftCoordinateIndex,
        isValid:
          leftCoordinateIndex >= 0 &&
          +computerBoard[leftCoordinateIndex].getCoordinate()[1] <
            +computerBoard[coordinateIndex].getCoordinate()[1],
      },
      { indexOfCoordinate: topCoordinateIndex, isValid: topCoordinateIndex >= 0 },
      {
        indexOfCoordinate: rightCoordinateIndex,
        isValid:
          computerBoard[rightCoordinateIndex].getCoordinate()[0] ===
          computerBoard[coordinateIndex].getCoordinate()[0],
      },
      { indexOfCoordinate: bottomCoordinateIndex, isValid: bottomCoordinateIndex < 100 },
    ]
      .filter(
        (coordObj) =>
          coordObj.isValid &&
          allCoordinate.includes(computerBoard[coordObj.indexOfCoordinate].getCoordinate()),
      )
      .map((coordObj) => {
        return { indexOfCoordinate: coordObj.indexOfCoordinate };
      });
  };

  const computerSendAttack = (coordinateIndex, coordinate, pattern) => {
    let isShipHit = playerOne.board.receiveAttack(coordinate);

    if (isShipHit) {
      const validAdjacentCoordinate = getValidAdjacentCoordinate(coordinateIndex);
      if (validAdjacentCoordinate.length) stack.unshift(validAdjacentCoordinate);
      computerTurn(false, pattern);
    }
  };

  const computerTurn = (specificCoordinate, pattern = 'random') => {
    let coordinate = specificCoordinate;
    let coordinateIndex;

    if (stack.length > 0) {
      // try adjacent slot
      const arrOfCoordinateIndex = stack[0];

      const indexPattern = {
        predictable: arrOfCoordinateIndex.length - 1,
        random: Math.floor(Math.random() * arrOfCoordinateIndex.length),
      };

      const indexOfCoordinateObj = arrOfCoordinateIndex.splice(indexPattern[pattern], 1)[0];

      coordinateIndex = indexOfCoordinateObj.indexOfCoordinate;
      coordinate = playerOne.board.getBoard()[coordinateIndex].getCoordinate();

      allCoordinate.splice(allCoordinate.indexOf(coordinate), 1);

      if (!arrOfCoordinateIndex.length) stack.pop();
    } else if (!specificCoordinate) {
      coordinateIndex = Math.floor(Math.random() * allCoordinate.length);
      coordinate = allCoordinate.splice(coordinateIndex, 1).toString();
    } else {
      coordinateIndex = computer.board.getIndexOfCoordinate(specificCoordinate);
    }

    computerSendAttack(coordinateIndex, coordinate, pattern);
  };

  const humanTurn = (coordinate) => {
    computer.board.receiveAttack(coordinate);
  };

  const play = (coordinate, name, pattern) => {
    if (playerTwo.name) {
      if (getCurrentPlayer() !== name) return;
      getCurrentBoardToAttack().receiveAttack(coordinate);

      switchPlayer();
      switchBoard();
    } else {
      // humanTurn(coordinate);
      computerTurn(coordinate, pattern);
    }
  };

  const getBoardToSetShip = (position) => {
    if (position === 1 && playerTwo.name === undefined) return;
    return boardToSetShip[position];
  };

  return {
    switchBoard,
    play,
    setShip,
    getCurrentBoardToAttack,
    getBoardToSetShip,
    getValidAdjacentCoordinate,
  };
}

// Flow
/* 
select playing against computer or follow human
if against computer - only one box to drag drop into game board will be provided
*/
