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

export default function GameBoard(gameBoardID) {
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
    if (shipTemplate.ID !== gameBoardID) return;

    const ship = Ship(shipTemplate.len, coordinate);
    const shipLen = ship.len();

    let indexOfCoordinate = getIndexOfCoordinate(coordinate);

    let count = 0;
    let index = indexOfCoordinate;
    let isShipInCell = false;

    while (count < shipLen) {
      const cell = board[index];

      if (cell.getShip()) {
        isShipInCell = true;
        break;
      }
      count++;
      index++;
    }

    if (!isShipInCell) {
      count = 0;
      index = indexOfCoordinate;

      while (count < shipLen) {
        board[index].setShip(ship);
        count++;
        index++;
      }
    }
  };

  const getShip = (coordinate) => board[getIndexOfCoordinate(coordinate)].getShip();

  const switchShipAxis = (coordinate) => {
    const indexOfCoordinate = getIndexOfCoordinate(coordinate);
    const ship = board[indexOfCoordinate].getShip();
    const shipLen = ship.len();
    ship.switchAxis();
    const axis = ship.getAxis();

    let count = 0;
    let isShipInNewCell = false;
    let oldIndex = indexOfCoordinate;
    let newIndex = indexOfCoordinate;

    while (count < shipLen) {
      const newCell = board[newIndex];

      if (count !== 0) {
        if (newCell.getShip()) {
          isShipInNewCell = true;
          break;
        }
      }
      count++;
      axis === 'xAxis' ? newIndex++ : (newIndex += 10);
    }

    if (!isShipInNewCell) {
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
    }
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

  const isAllShipSunk = () => {
    const cellWithShip = board.filter((cell) => cell.getShip());
    return cellWithShip.every((cell) => cell.getShip().isSunk());
  };

  const getAllCoordinate = () => board.map((cell) => cell.getCoordinate());

  const getBoard = () => board;

  const getCellInOrderOfHit = () => cellInOrderOfHit;

  const getGameBoardID = () => gameBoardID;

  return {
    setShip,
    getShip,
    switchShipAxis,
    receiveAttack,
    isAllShipSunk,
    getAllCoordinate,
    getBoard,
    getIndexOfCoordinate,
    getCellInOrderOfHit,
    getGameBoardID,
  };
}
