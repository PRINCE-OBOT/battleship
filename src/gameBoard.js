function Cell(coord) {
  let shipInCell = null;

  const setShip = (ship) => {
    shipInCell = ship;
  };

  const getShip = () => shipInCell;

  const shipCoordinate = () => coord;

  const resetCell = () => {
    shipInCell = null;
  };

  return { setShip, getShip, shipCoordinate, resetCell };
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
    board.findIndex((cell) => cell.shipCoordinate() === coordinate);

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
    ship.switchAxis();

    let count = 0;
    let oldIndex = indexOfCoordinate;
    let newIndex = indexOfCoordinate;

    while (count < ship.len()) {
      const oldCell = board[oldIndex];
      const newCell = board[newIndex];
      const ship = oldCell.getShip();
      newCell.setShip(ship);

      if (oldCell !== newCell) oldCell.resetCell();

      count++;

      if (ship.getAxis() === 'xAxis') {
        oldIndex += 10;
        newIndex++;
      } else {
        oldIndex++;
        newIndex += 10;
      }
    }
  };

  return { setShip, getShip, switchShipAxis };
}

// write a function that tell that a ship is in a cordinate
// the gameboard to hit the cordinate checking the following condition
// if the cordinate has not been hit before
// if a ship is in that cordinate increment the hit
// alway mark the cordinate as hit
