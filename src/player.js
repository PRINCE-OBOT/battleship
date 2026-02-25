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

  const computerSendAttack = (coordinateObj, modeKey) => {
    let isShipHit = playerOne.receiveAttack(coordinateObj.coordinate) === 'hit';

    allCoordinate.splice(allCoordinate.indexOf(coordinateObj.coordinate), 1);

    if (isShipHit) {
      const arrOfCoordinate = stack.shift();

      const ship = playerOne.getBoard()[coordinateObj.coordinateIndex].getShip();

      const hit = ship.getHit();
      const len = ship.len();

      // When hit is 2 then the axis of the ship is certain, so filter the previous coordinate to target that axis
      if (hit === 2 && len > 2) {
        const coordAxisToTry = arrOfCoordinate.filter((coord) => coord.axis === coordinateObj.axis);

        if (coordAxisToTry.length) {
          stack.unshift(coordAxisToTry);
        }
      } else if (arrOfCoordinate) {
        if (arrOfCoordinate.length) {
          stack.unshift(arrOfCoordinate);
        }
      }

      const ValidAdjacentCoordinateInObj = playerOne.getValidAdjacentCoordinateInObj(
        coordinateObj.coordinateIndex,
      );

      // Use the hit axis from previous attack to filter the next axis to attack
      if (hit > 1 && hit < len) {
        const coordAxisToTry = ValidAdjacentCoordinateInObj.filter(
          (coord) => coord.axis === coordinateObj.axis,
        );

        if (coordAxisToTry.length) stack.unshift(coordAxisToTry);
      } else {
        if (ValidAdjacentCoordinateInObj.length) stack.unshift(ValidAdjacentCoordinateInObj);
      }

      computerTurn(false, modeKey);
    } else if (stack[0]) {
      if (stack[0].length === 0) stack.shift();
    }
  };

  const computerTurn = (predictableCoordinateObj, modeKey = 'randomIndex') => {
    let coordinateObj = predictableCoordinateObj;

    if (stack.length > 0) {
      // try adjacent slot
      const coordinateToTry = stack[0];

      const mode = {
        predictableIndex: () => coordinateToTry.length - 1,
        randomIndex: () => Math.floor(Math.random() * coordinateToTry.length),
      };
      coordinateObj = coordinateToTry.splice(mode[modeKey](), 1)[0];
    } else if (!predictableCoordinateObj) {
      const randomIndex = Math.floor(Math.random() * allCoordinate.length);
      const coordinate = allCoordinate[randomIndex].toString();
      const coordinateIndex = playerOne.getCoordinateIndex(coordinate);

      coordinateObj = { coordinate, coordinateIndex };
    }
    computerSendAttack(coordinateObj, modeKey);
  };

  const humanTurn = (coordinate) => {
    return playerTwo.receiveAttack(coordinate);
  };

  const isBetweenHumanAndComputer = (coordinate, modeKey) => {
    const attackState = humanTurn(coordinate);
    if (attackState === 'miss') computerTurn(false, modeKey);
    // false argument pass through `computerTurn` is used for testing the return of 'adjacentCoordinate'
  };

  const isBetweenHuman = (coordinate, id) => {
    if (!isPlayerTurn(id)) return;

    const attackState = getCurrentBoardToAttack().receiveAttack(coordinate);

    if (attackState === 'miss') {
      switchTurn();
      switchBoard();
    }
  };

  const isPlayerTurn = (id) => getCurrentPlayerID() === id;

  const play = (coordinate, id, modeKey) => {
    if (playerTwo.getID() === 'computer') {
      return isBetweenHumanAndComputer(coordinate, modeKey);
    } else {
      return isBetweenHuman(coordinate, id);
    }
  };

  return {
    switchBoard,
    play,
  };
}
