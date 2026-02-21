import Ship from './ship';

function Cell(coordinate) {
  let shipInCell = null;
  let hit = false;

  const setShip = (ship) => {
    shipInCell = ship;
  };

  const getShip = () => shipInCell;

  const removeShip = () => {
    const ship = shipInCell;
    shipInCell = null;
    return ship;
  };

  const hitCell = () => {
    hit = true;
  };

  const isCellHit = () => hit;

  const getCoordinate = () => coordinate;

  return { setShip, getShip, removeShip, hitCell, isCellHit, getCoordinate };
}

export default function GameBoard(id) {
  const board = [];
  const yAxis = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  const xAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cellInOrderOfHit = [];

  for (let i = 0; i < yAxis.length; i++) {
    for (let j = 0; j < xAxis.length; j++) {
      board.push(Cell(`${yAxis[i]}${xAxis[j]}`));
    }
  }

  const getIndexOfCoordinate = (coordinate) =>
    board.findIndex((cell) => cell.getCoordinate() === coordinate);

  const setShip = (shipTemplate, coordinate) => {
    if (shipTemplate.id !== id) return;

    const ship = Ship(shipTemplate.len, coordinate);
    const shipLen = ship.len();

    let indexOfCoordinate = getIndexOfCoordinate(coordinate);

    if (!isRightCoordinateValid(indexOfCoordinate, indexOfCoordinate + shipLen - 1)) return;

    let count = 0;
    let index = indexOfCoordinate;

    while (count < shipLen) {
      const cell = board[index];

      if (cell.getShip()) {
        return;
      }
      count++;
      index++;
    }

    count = 0;
    index = indexOfCoordinate;

    while (count < shipLen) {
      board[index].setShip(ship);
      count++;
      index++;
    }
    return true;
  };

  const getShip = (coordinate) => board[getIndexOfCoordinate(coordinate)].getShip();

  const switchShipAxis = (coordinate) => {
    const indexOfCoordinate = getIndexOfCoordinate(coordinate);
    const ship = board[indexOfCoordinate].getShip();
    const shipLen = ship.len();
    ship.switchAxis();
    const axis = ship.getAxis();

    if (!isBottomCoordinateValid(indexOfCoordinate)) return;

    let count = 0;
    let oldIndex = indexOfCoordinate;
    let newIndex = indexOfCoordinate;

    while (count < shipLen) {
      const newCell = board[newIndex];

      if (count !== 0) {
        if (newCell.getShip()) {
          return;
        }
      }
      count++;
      axis === 'xAxis' ? newIndex++ : (newIndex += 10);
    }

    count = 0;
    newIndex = indexOfCoordinate;

    while (count < shipLen) {
      const oldCell = board[oldIndex];
      const newCell = board[newIndex];
      const removedShip = oldCell.removeShip();
      newCell.setShip(removedShip);

      count++;

      if (removedShip.getAxis() === 'xAxis') {
        oldIndex += 10;
        newIndex++;
      } else {
        oldIndex++;
        newIndex += 10;
      }
    }
    return true;
  };

  const receiveAttack = (coordinate) => {
    const indexOfCoordinate = getIndexOfCoordinate(coordinate);
    const cell = board[indexOfCoordinate];

    if (!cell.isCellHit()) {
      cellInOrderOfHit.push(coordinate);
      const ship = cell.getShip();
      if (ship) {
        ship.hit();
        return true;
      }
      cell.hitCell();
    }
    return false;
  };

  const isRightCoordinateValid = (coordinateIndex, rightCoordinateIndex) =>
    board[coordinateIndex].getCoordinate()[0] === board[rightCoordinateIndex].getCoordinate()[0];

  const isBottomCoordinateValid = (bottomCoordinateIndex) => bottomCoordinateIndex < 100;

  const getValidAdjacentIndex = (coordinate) => {
    const coordinateIndex = Number.isInteger(coordinate)
      ? coordinate
      : getIndexOfCoordinate(coordinate);

    const leftCoordinateIndex = coordinateIndex - 1;
    const topCoordinateIndex = coordinateIndex - 10;
    const rightCoordinateIndex = coordinateIndex + 1;
    const bottomCoordinateIndex = coordinateIndex + 10;

    return [
      {
        indexOfCoordinate: leftCoordinateIndex,
        isValid:
          leftCoordinateIndex >= 0 &&
          +board[leftCoordinateIndex].getCoordinate()[1] <
            +board[coordinateIndex].getCoordinate()[1],
      },
      { indexOfCoordinate: topCoordinateIndex, isValid: topCoordinateIndex >= 0 },
      {
        indexOfCoordinate: rightCoordinateIndex,
        isValid: isRightCoordinateValid(coordinateIndex, rightCoordinateIndex),
      },
      {
        indexOfCoordinate: bottomCoordinateIndex,
        isValid: isBottomCoordinateValid(bottomCoordinateIndex),
      },
    ]
      .filter((coordObj) => coordObj.isValid)
      .map((coordObj) => coordObj.indexOfCoordinate);
  };

  const isAllShipSunk = () => {
    const cellWithShip = board.filter((cell) => cell.getShip());
    return cellWithShip.every((cell) => cell.getShip().isSunk());
  };

  const getAllCoordinate = () => board.map((cell) => cell.getCoordinate());

  const getBoard = () => board;

  const getCellInOrderOfHit = () => cellInOrderOfHit;

  const getCoordinate = (index) => board[index].getCoordinate();

  const getID = () => id;

  return {
    setShip,
    getShip,
    switchShipAxis,
    receiveAttack,
    isAllShipSunk,
    getAllCoordinate,
    getCoordinate,
    getBoard,
    getIndexOfCoordinate,
    getCellInOrderOfHit,
    getValidAdjacentIndex,
    getID,
  };
}
