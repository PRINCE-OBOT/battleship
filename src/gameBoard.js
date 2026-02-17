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

export default function GameBoard() {
  const board = [];
  const yAxis = ['j', 'i', 'h', 'g', 'f', 'e', 'd', 'c', 'b', 'a'];
  const xAxis = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

  for (let i = 0; i < yAxis.length; i++) {
    for (let j = 0; j < xAxis.length; j++) {
      board.push(Cell(`${yAxis[i]}${xAxis[j]}`));
    }
  }

  const getIndexOfCoordinate = (coordinate) =>
    board.findIndex((cell) => cell.getCoordinate() === coordinate);

  const setShip = (ship, coordinate) => {
    let indexOfCoordinate = getIndexOfCoordinate(coordinate);
    let count = 0;

    while (count < ship.len()) {
      board[indexOfCoordinate].setShip(ship);
      count++;
      indexOfCoordinate++;
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
    let shipInNewCell = false;
    let oldIndex = indexOfCoordinate;
    let newIndex = indexOfCoordinate;

    while (count < shipLen) {
      const newCell = board[newIndex];

      if (count !== 0) {
        if (newCell.getShip()) {
          shipInNewCell = true;
          break;
        }
      }
      count++;
      axis === 'xAxis' ? newIndex++ : (newIndex += 10);
    }

    if (!shipInNewCell) {
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
      const ship = cell.getShip();
      if (ship) {
        ship.hit();
      }
      cell.hitCell();
    }
  };

  return { setShip, getShip, switchShipAxis, receiveAttack };
}

// write a function that tell that a ship is in a cordinate
// the gameboard to hit the cordinate checking the following condition
// if the cordinate has not been hit before
// if a ship is in that cordinate increment the hit
// alway mark the cordinate as hit
