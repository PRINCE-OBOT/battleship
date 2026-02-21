import GameBoard from './gameBoard';

export default function Player(
  playerOne,
  playerTwo = {
    name: 'Grok',
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

  const computerSendAttack = (coordinateIndex, coordinate, modeKey) => {
    let isShipHit = playerOne.board.receiveAttack(coordinate);

    if (isShipHit) {
      const validAdjacentIndex = playerOne.board.getValidAdjacentIndex(coordinateIndex);
      const computerValidAdjacentIndex = validAdjacentIndex.filter((index) =>
        allCoordinate.includes(playerOne.board.getCoordinate(index)),
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
  };
}
