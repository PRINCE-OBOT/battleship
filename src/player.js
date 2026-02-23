import GameBoard from './gameBoard';

export default function Player(playerOne, playerTwo) {
  const stack = [];
  const allCoordinate = playerTwo.getAllCoordinate();

  const playerOneID = playerOne.getID();
  const playerTwoID = playerTwo.getID();

  const playerOneGridBoard = playerOne.getBoard();
  const playerTwoGridBoard = playerTwo.getBoard();

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

  const computerSendAttack = (coordinateIndex, coordinate, modeKey) => {
    let isShipHit = playerOne.receiveAttack(coordinate) === 'hit';

    if (isShipHit) {
      const validAdjacentIndex = playerOne.getValidAdjacentIndex(coordinateIndex);
      const computerValidAdjacentIndex = validAdjacentIndex.filter((index) =>
        allCoordinate.includes(playerOne.getCoordinate(index)),
      );
      if (computerValidAdjacentIndex.length) stack.unshift(computerValidAdjacentIndex);
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

      coordinateIndex = arrOfCoordinateIndex.splice(mode[modeKey], 1)[0];
      coordinate = playerOne.getBoard()[coordinateIndex].getCoordinate();

      allCoordinate.splice(allCoordinate.indexOf(coordinate), 1);

      if (!arrOfCoordinateIndex.length) stack.pop();
    } else if (!specificCoordinate) {
      coordinateIndex = Math.floor(Math.random() * allCoordinate.length);
      coordinate = allCoordinate.splice(coordinateIndex, 1).toString();
    } else {
      coordinateIndex = playerTwo.getIndexOfCoordinate(specificCoordinate);
    }

    computerSendAttack(coordinateIndex, coordinate, modeKey);
  };

  const humanTurn = (coordinate) => {
    return playerTwo.receiveAttack(coordinate);
  };

  const isPlayerTurn = (id) => getCurrentPlayerID() === id;

  const play = (coordinate, id, modeKey) => {
    if (playerTwo.getID() === 'computer') {
      const result = humanTurn(coordinate);
      if (result) {
        computerTurn(false, modeKey);
        return { result };
      }
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
  };
}
