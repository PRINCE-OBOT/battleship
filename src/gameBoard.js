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

  const resetHit = () => {
    hit = false;
  };

  const isCellHit = () => hit;

  const getCoordinate = () => coordinate;

  return { setShip, getShip, removeShip, hitCell, isCellHit, resetHit, getCoordinate };
}

export default function GameBoard(id) {
  const board = [];
  const yAxis = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  const xAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const cellInOrderOfHit = [];
  const ALL_SHIP_LEN = 20;

  let hitCoordinate;

  for (let i = 0; i < yAxis.length; i++) {
    for (let j = 0; j < xAxis.length; j++) {
      board.push(Cell(`${yAxis[i]}${xAxis[j]}`));
    }
  }

  const getCoordinateIndex = (coordinate) =>
    board.findIndex((cell) => cell.getCoordinate() === coordinate);

  const isInterSection = (index) => {
    const validAdjacentIndexInObj = getValidAdjacentCoordinateInObj(index);

    const leftIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'left');
    const topIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'top');
    const bottomIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'bottom');
    const rightIndex = validAdjacentIndexInObj.findIndex((obj) => obj.dir === 'right');

    const nearestCoord = validAdjacentIndexInObj.map((obj) => obj.coordinateIndex);

    if (leftIndex !== -1) {
      if (topIndex !== -1) {
        const topLeftIndex = validAdjacentIndexInObj[topIndex].coordinateIndex - 1;
        nearestCoord.push(topLeftIndex);
      }

      if (bottomIndex !== -1) {
        const bottomLeftIndex = validAdjacentIndexInObj[bottomIndex].coordinateIndex - 1;
        nearestCoord.push(bottomLeftIndex);
      }
    }

    if (rightIndex !== -1) {
      if (topIndex !== -1) {
        const topRightIndex = validAdjacentIndexInObj[topIndex].coordinateIndex + 1;
        nearestCoord.push(topRightIndex);
      }
      if (bottomIndex !== -1) {
        const bottomRightIndex = validAdjacentIndexInObj[bottomIndex].coordinateIndex + 1;
        nearestCoord.push(bottomRightIndex);
      }
    }

    return nearestCoord;
  };

  const setShip = (shipTemplate, coordinate) => {
    if (shipTemplate.id !== id) return;

    const ship = Ship(shipTemplate.len, coordinate);
    const shipLen = ship.len();

    let coordinateIndex = getCoordinateIndex(coordinate);

    if (!isRightCoordinateValid(coordinateIndex, coordinateIndex + shipLen - 1)) return;

    let count = 0;
    let index = coordinateIndex;

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
    index = coordinateIndex;

    while (count < shipLen) {
      board[index].setShip(ship);
      count++;
      index++;
    }

    hitCoordinate = coordinate;
    return true;
  };

  const getShip = (coordinate) => board[getCoordinateIndex(coordinate)].getShip();

  const switchShipAxis = (coordinate) => {
    const coordinateIndex = getCoordinateIndex(coordinate);
    const ship = board[coordinateIndex].getShip();

    if (!ship) return;

    const shipLen = ship.len();
    ship.switchAxis();
    const axis = ship.getAxis();

    if (!isBottomCoordinateValid(coordinateIndex + (shipLen - 1) * 10)) return;

    let count = 0;
    let oldIndex = coordinateIndex;
    let newIndex = coordinateIndex;

    const reset = () => {
      count = 0;
      oldIndex = coordinateIndex;
      newIndex = coordinateIndex;
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
    const coordinateIndex = getCoordinateIndex(coordinate);
    const cell = board[coordinateIndex];

    if (!cell) return;

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

  const getValidAdjacentCoordinateInObj = (coordinate) => {
    const coordinateIndex = Number.isInteger(coordinate)
      ? coordinate
      : getCoordinateIndex(coordinate);

    const leftCoordinateIndex = coordinateIndex - 1;
    const topCoordinateIndex = coordinateIndex - 10;
    const rightCoordinateIndex = coordinateIndex + 1;
    const bottomCoordinateIndex = coordinateIndex + 10;

    return [
      {
        coordinateIndex: leftCoordinateIndex,
        dir: 'left',
        isValid:
          leftCoordinateIndex >= 0 &&
          +board[leftCoordinateIndex].getCoordinate()[1] <
            +board[coordinateIndex].getCoordinate()[1],
      },
      { coordinateIndex: topCoordinateIndex, dir: 'top', isValid: topCoordinateIndex >= 0 },
      {
        coordinateIndex: rightCoordinateIndex,
        dir: 'right',
        isValid: isRightCoordinateValid(coordinateIndex, rightCoordinateIndex),
      },
      {
        coordinateIndex: bottomCoordinateIndex,
        dir: 'bottom',
        isValid: isBottomCoordinateValid(bottomCoordinateIndex),
      },
    ]
      .filter((coordObj) => coordObj.isValid)
      .filter((coordObj) => !getBoard()[coordObj.coordinateIndex].isCellHit())
      .map((coordObj) => {
        coordObj.axis = coordObj.dir === 'top' || coordObj.dir === 'bottom' ? 'yAxis' : 'xAxis';
        coordObj.coordinate = getCoordinate(coordObj.coordinateIndex);
        return coordObj;
      });
  };

  const getValidAdjacentIndex = (coordinate) => {
    return getValidAdjacentCoordinateInObj(coordinate).map((coordObj) => coordObj.coordinateIndex);
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

    getCoordinateOfShip()
      .slice(2)
      .forEach((coordinate) => {
        switchShipAxis(coordinate);
      });
  };

  const isAllShipSunk = () => {
    const cellWithShip = board.filter((cell) => cell.getShip());
    return cellWithShip.every((cell) => cell.getShip().isSunk());
  };

  const filterAllShip = () => {
    return [...new Set(board.filter((cell) => cell.getShip()).map((cell) => cell.getShip()))];
  };

  const getCoordinateOfShip = () => filterAllShip().map((ship) => ship.getCoordinate());

  const getBoard = () => board;

  const getCellInOrderOfHit = () => cellInOrderOfHit;

  const getAllCoordinate = () => board.map((cell) => cell.getCoordinate());

  const getCoordinate = (index) => board[index].getCoordinate();

  const getID = () => id;

  const getHitCellCoordinate = () =>
    board.filter((cell) => cell.isCellHit()).map((cell) => cell.getCoordinate());

  const reset = () => {
    playAgain();
    board.forEach((cell) => {
      if (cell) {
        cell.removeShip();
      }
    });
  };

  const playAgain = () => {
    board.forEach((cell) => {
      const ship = cell.getShip();
      if (ship) {
        ship.reset();
      }
      cell.resetHit();
    });
  };

  const isAllShipSet = () =>
    filterAllShip().reduce((curLen, ship) => curLen + ship.len(), 0) === ALL_SHIP_LEN;

  const getHitCoordinate = () => hitCoordinate;

  return {
    setShip,
    getShip,
    switchShipAxis,
    receiveAttack,
    getHitCellCoordinate,
    setShipDynamically,
    isAllShipSunk,
    getCoordinate,
    getBoard,
    getAllCoordinate,
    getHitCoordinate,
    getCoordinateIndex,
    getCellInOrderOfHit,
    getValidAdjacentIndex,
    getValidAdjacentCoordinateInObj,
    getCoordinateOfShip,
    isAllShipSet,
    getID,
    reset,
    playAgain,
  };
}
