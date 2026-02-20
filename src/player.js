import GameBoard from './gameBoard';

export default function Player(
  playerOne,
  playerTwo = {
    name: 'Computer',
    board: GameBoard('computer'),
  },
) {
  const stack = [];
  const allCoordinate = playerTwo.board.getAllCoordinate();

  const playerOneID = playerOne.board.getID();
  const playerTwoID = playerTwo.board.getID();

  const playerOneGridBoard = playerOne.board.getBoard();
  const playerTwoGridBoard = playerTwo.board.getBoard();

  let playerID = playerOneID;
  let boardToAttack = playerTwoGridBoard;

  const switchTurn = () => {
    playerID = playerID === playerOneID ? playerTwoID : playerOneID;
  };

  const switchBoard = () => {
    boardToAttack = boardToAttack === playerTwoGridBoard ? playerOneGridBoard : playerTwoGridBoard;
  };

  const getCurrentPlayerID = () => playerID;

  const getCurrentBoardToAttack = () => boardToAttack;

  const getValidAdjacentCoordinate = (coordinate) => {
    const coordinateIndex = Number.isInteger(coordinate)
      ? coordinate
      : playerTwo.board.getIndexOfCoordinate(coordinate);

    const leftCoordinateIndex = coordinateIndex - 1;
    const topCoordinateIndex = coordinateIndex - 10;
    const rightCoordinateIndex = coordinateIndex + 1;
    const bottomCoordinateIndex = coordinateIndex + 10;

    return [
      {
        indexOfCoordinate: leftCoordinateIndex,
        isValid:
          leftCoordinateIndex >= 0 &&
          +playerTwoGridBoard[leftCoordinateIndex].getCoordinate()[1] <
            +playerTwoGridBoard[coordinateIndex].getCoordinate()[1],
      },
      { indexOfCoordinate: topCoordinateIndex, isValid: topCoordinateIndex >= 0 },
      {
        indexOfCoordinate: rightCoordinateIndex,
        isValid:
          playerTwoGridBoard[rightCoordinateIndex].getCoordinate()[0] ===
          playerTwoGridBoard[coordinateIndex].getCoordinate()[0],
      },
      { indexOfCoordinate: bottomCoordinateIndex, isValid: bottomCoordinateIndex < 100 },
    ]
      .filter(
        (coordObj) =>
          coordObj.isValid &&
          allCoordinate.includes(playerTwoGridBoard[coordObj.indexOfCoordinate].getCoordinate()),
      )
      .map((coordObj) => {
        return { indexOfCoordinate: coordObj.indexOfCoordinate };
      });
  };

  const computerSendAttack = (coordinateIndex, coordinate, modeKey) => {
    let isShipHit = playerOne.board.receiveAttack(coordinate);

    if (isShipHit) {
      const validAdjacentCoordinate = getValidAdjacentCoordinate(coordinateIndex);
      if (validAdjacentCoordinate.length) stack.unshift(validAdjacentCoordinate);
      computerTurn(false, modeKey);
    }
  };

  const computerTurn = (specificCoordinate, modeKey = 'randomIndex') => {
    let coordinate = specificCoordinate;
    let coordinateIndex;

    if (stack.length > 0) {
      // try adjacent slot
      const arrOfCoordinateIndex = stack[0];

      const mode = {
        predictableIndex: arrOfCoordinateIndex.length - 1,
        randomIndex: Math.floor(Math.random() * arrOfCoordinateIndex.length),
      };

      const indexOfCoordinateObj = arrOfCoordinateIndex.splice(mode[modeKey], 1)[0];

      coordinateIndex = indexOfCoordinateObj.indexOfCoordinate;
      coordinate = playerOne.board.getBoard()[coordinateIndex].getCoordinate();

      allCoordinate.splice(allCoordinate.indexOf(coordinate), 1);

      if (!arrOfCoordinateIndex.length) stack.pop();
    } else if (!specificCoordinate) {
      coordinateIndex = Math.floor(Math.random() * allCoordinate.length);
      coordinate = allCoordinate.splice(coordinateIndex, 1).toString();
    } else {
      coordinateIndex = playerTwo.board.getIndexOfCoordinate(specificCoordinate);
    }

    computerSendAttack(coordinateIndex, coordinate, modeKey);
  };

  const humanTurn = (coordinate) => {
    playerTwo.board.receiveAttack(coordinate);
  };

  const isPlayerTurn = (id) => getCurrentPlayerID() === id;

  const play = (coordinate, id, modeKey) => {
    if (playerTwo.board.getID() === 'computer') {
      humanTurn(coordinate);
      computerTurn(coordinate, modeKey);
    } else {
      if (!isPlayerTurn(id)) return;
      getCurrentBoardToAttack().receiveAttack(coordinate);

      switchTurn();
      switchBoard();
    }
  };

  return {
    switchBoard,
    play,
    getValidAdjacentCoordinate,
  };
}

// Flow
/* 
select playing against computer or follow human
if against computer - only one box to drag drop into game board will be provided
*/
