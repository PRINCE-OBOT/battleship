import GameBoard from '../src/gameBoard';
import Ship from '../src/ship';

describe('Game Board', () => {
  test('Switch axis of ship', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(2), 'j0');

    gameBoard.switchShipAxis('j0');

    expect(gameBoard.getShip('j0')).toBeTruthy();
    expect(gameBoard.getShip('j1')).toBeFalsy();
    expect(gameBoard.getShip('i0')).toBeTruthy();
  });

  test(`Should not swap axis of ship 
    if it collide with another ship while swapping`, () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(3, 'c0'), 'c0');
    gameBoard.setShip(Ship(1, 'a0'), 'a0');

    gameBoard.switchShipAxis('c0');

    expect(gameBoard.getShip('c0')).toBeTruthy();
    expect(gameBoard.getShip('c1')).toBeTruthy();
    expect(gameBoard.getShip('c2')).toBeTruthy();
  });

  test('Increment hit when ship is hitting', () => {
    const gameBoard = GameBoard();
    const ship = Ship(3, 'c0');
    gameBoard.setShip(ship, 'c0');

    gameBoard.receiveAttack('c0');
    gameBoard.receiveAttack('c4');

    expect(ship.getHit()).toBe(1);
  });

  test('should be true when all ship is sunk', () => {
    const gameBoard = GameBoard();
    const ship = Ship(1, 'c0');
    gameBoard.setShip(ship, 'c0');

    gameBoard.receiveAttack('c0');

    expect(gameBoard.isAllShipSunk()).toBeTruthy();
  });
});
