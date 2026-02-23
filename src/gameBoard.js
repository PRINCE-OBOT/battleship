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

  const isInterSection = (index) => {
    const validAdjacentIndexInObj = getValidAdjacentIndexInObj(index);

    const leftIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'left');
    const topIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'top');
    const bottomIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'bottom');
    const rightIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'right');

    const nearestCoord = validAdjacentIndexInObj.map((obj) => obj.indexOfCoordinate);

    if (leftIndex !== -1) {
      if (topIndex !== -1) {
        const topLeftIndex = validAdjacentIndexInObj[topIndex].indexOfCoordinate - 1;
        nearestCoord.push(topLeftIndex);
      }

      if (bottomIndex !== -1) {
        const bottomLeftIndex = validAdjacentIndexInObj[bottomIndex].indexOfCoordinate - 1;
        nearestCoord.push(bottomLeftIndex);
      }
    }

    if (rightIndex !== -1) {
      if (topIndex !== -1) {
        const topRightIndex = validAdjacentIndexInObj[topIndex].indexOfCoordinate + 1;
        nearestCoord.push(topRightIndex);
      }
      if (bottomIndex !== -1) {
        const bottomRightIndex = validAdjacentIndexInObj[bottomIndex].indexOfCoordinate + 1;
        nearestCoord.push(bottomRightIndex);
      }
    }

    return nearestCoord;
  };

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

      if (
        cell.getShip() ||
        isInterSection(index).some((indexCoord) => board[indexCoord].getShip())
      ) {
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

    if (!ship) return;

    const shipLen = ship.len();
    ship.switchAxis();
    const axis = ship.getAxis();

    if (!isBottomCoordinateValid(indexOfCoordinate + shipLen * 10)) return;

    let count = 0;
    let oldIndex = indexOfCoordinate;
    let newIndex = indexOfCoordinate;

    const reset = () => {
      count = 0;
      oldIndex = indexOfCoordinate;
      newIndex = indexOfCoordinate;
    };

    const tempRemoveShip = [];
    while (count < shipLen) {
      const oldCell = board[oldIndex];
      tempRemoveShip.push({ ship: oldCell.removeShip(), oldIndex });

      count++;
      axis === 'xAxis' ? (oldIndex += 10) : oldIndex++;
    }

    reset();

    while (count < shipLen) {
      const newCell = board[newIndex];

      if (
        newCell.getShip() ||
        isInterSection(newIndex).some((indexCoord) => board[indexCoord].getShip())
      ) {
        tempRemoveShip.forEach((obj) => {
          board[obj.oldIndex].setShip(obj.ship);
        });
        return;
      }

      count++;
      axis === 'xAxis' ? newIndex++ : (newIndex += 10);
    }

    reset();

    tempRemoveShip.forEach((obj, ind) => {
      if (ind === 0) {
        newIndex = obj.oldIndex;
      } else {
        if (axis === 'xAxis') {
          newIndex++;
        } else {
          newIndex += 10;
        }
      }

      board[newIndex].setShip(obj.ship);
    });

    return true;
  };

  const receiveAttack = (coordinate) => {
    const indexOfCoordinate = getIndexOfCoordinate(coordinate);
    const cell = board[indexOfCoordinate];

    if (!cell.isCellHit()) {
      cellInOrderOfHit.push(coordinate);
      cell.hitCell();
      const ship = cell.getShip();
      if (ship) {
        ship.hit();
        return 'hit';
      }
      return 'miss';
    }
    return false;
  };

  const isRightCoordinateValid = (coordinateIndex, rightCoordinateIndex) => {
    if (rightCoordinateIndex >= 100) return;
    return (
      board[coordinateIndex].getCoordinate()[0] === board[rightCoordinateIndex].getCoordinate()[0]
    );
  };

  const isBottomCoordinateValid = (bottomCoordinateIndex) => bottomCoordinateIndex < 100;

  const getValidAdjacentIndexInObj = (coordinate) => {
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
        dir: 'left',
        isValid:
          leftCoordinateIndex >= 0 &&
          +board[leftCoordinateIndex].getCoordinate()[1] <
            +board[coordinateIndex].getCoordinate()[1],
      },
      { indexOfCoordinate: topCoordinateIndex, dir: 'top', isValid: topCoordinateIndex >= 0 },
      {
        indexOfCoordinate: rightCoordinateIndex,
        dir: 'right',
        isValid: isRightCoordinateValid(coordinateIndex, rightCoordinateIndex),
      },
      {
        indexOfCoordinate: bottomCoordinateIndex,
        dir: 'bottom',
        isValid: isBottomCoordinateValid(bottomCoordinateIndex),
      },
    ].filter((coordObj) => coordObj.isValid);
  };

  const getValidAdjacentIndex = (coordinate) => {
    return getValidAdjacentIndexInObj(coordinate).map((coordObj) => coordObj.indexOfCoordinate);
  };

  const setShipDynamically = () => {
    const availableLen = [4, 3, 3, 2, 2, 2, 1, 1, 1, 1];
    const allCoordinate = getAllCoordinate();

    const isShipSet = (len) => {
      const randomIndex = Math.floor(Math.random() * allCoordinate.length);
      return setShip({ len, id: 'computer' }, allCoordinate[randomIndex]);
    };

    while (availableLen.length) {
      const len = availableLen.shift();

      while (true) {
        if (isShipSet(len)) {
          break;
        }
      }
    }

    [...getCoordinateOfShip()].slice(7).forEach((coordinate) => {
      switchShipAxis(coordinate);
    });
  };

  const isAllShipSunk = () => {
    const cellWithShip = board.filter((cell) => cell.getShip());
    return cellWithShip.every((cell) => cell.getShip().isSunk());
  };

  const getCoordinateOfShip = () =>
    new Set(board.filter((cell) => cell.getShip()).map((cell) => cell.getShip().getCoordinate()));

  const getAllCoordinate = () => board.map((cell) => cell.getCoordinate());

  const getBoard = () => board;

  const getCellInOrderOfHit = () => cellInOrderOfHit;

  const getCoordinate = (index) => board[index].getCoordinate();

  const getID = () => id;

  const getHitCellCoordinate = () =>
    board.filter((cell) => cell.isCellHit()).map((cell) => cell.getCoordinate());

  return {
    setShip,
    getShip,
    switchShipAxis,
    receiveAttack,
    getHitCellCoordinate,
    setShipDynamically,
    isAllShipSunk,
    getAllCoordinate,
    getCoordinate,
    getBoard,
    getIndexOfCoordinate,
    getCellInOrderOfHit,
    getValidAdjacentIndex,
    getCoordinateOfShip,
    getID,
  };
}
