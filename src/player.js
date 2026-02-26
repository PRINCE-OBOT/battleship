export default function Player({ playerOne, playerOneName, playerTwo, playerTwoName }) {
  const stack = [];
  const allCoordinate = playerTwo.getAllCoordinate();

  const playerOneID = playerOne.getID();
  const playerTwoID = playerTwo.getID();

  let playerID = playerTwoID;
  let boardToAttack = playerTwo;
  let playerName = playerOneName;

  const switchPlayerName = () => {
    playerName = playerName === playerOneName ? playerTwoName : playerOneName;
  };

  const switchBoardID = () => {
    playerID = playerID === playerTwoID ? playerOneID : playerTwoID;
  };

  const switchBoard = () => {
    boardToAttack = boardToAttack === playerTwo ? playerOne : playerTwo;
  };

  const getCurrentBoardID = () => playerID;

  const getCurPlayerName = () => playerName;

  const getCurrentBoardToAttack = () => boardToAttack;

  const computerSendAttack = (coordinateObj, modeKey, computerTurnCb) => {
    let isShipHit = playerOne.receiveAttack(coordinateObj.coordinate) === 'hit';

    const attackState = isShipHit ? 'hit' : 'miss';

    computerTurnCb(coordinateObj.coordinate, attackState);

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

      if (playerOne.isAllShipSunk()) return 'allSunk';
      if (computerTurn(false, modeKey, computerTurnCb)) return 'allSunk';
    } else if (stack[0]) {
      if (stack[0].length === 0) stack.shift();
    }
  };

  const computerTurn = (predictableCoordinateObj, modeKey = 'randomIndex', computerTurnCb) => {
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
    return computerSendAttack(coordinateObj, modeKey, computerTurnCb);
  };

  const humanTurn = (coordinate) => {
    return playerTwo.receiveAttack(coordinate);
  };

  const getPlayerOneName = () => playerOneName;

  const getPlayerTwoName = () => playerTwoName;

  return {
    humanTurn,
    computerTurn,
    switchPlayerName,
    switchBoard,
    switchBoardID,
    getCurrentBoardToAttack,
    getCurPlayerName,
    getCurrentBoardID,
    getPlayerOneName,
    getPlayerTwoName,
  };
}
