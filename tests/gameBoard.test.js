import GameBoard from '../src/gameBoard';
import Ship from '../src/ship';

describe('Game Board', () => {
  test('Ship with multiple length, switched from X to Y Axis', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(2), 'j0');

    gameBoard.switchShipAxis('j0');

    expect(gameBoard.getShip('j0')).toBeTruthy();
    expect(gameBoard.getShip('j1')).toBeFalsy();
    expect(gameBoard.getShip('i0')).toBeTruthy();
  });

  test.only('If a cell is encounter when switching, do not switch', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(3, 'c0'), 'c0');
    gameBoard.setShip(Ship(1, 'a0'), 'a0');

    gameBoard.switchShipAxis('c0');

    expect(gameBoard.getShip('c0')).toBeTruthy();
    expect(gameBoard.getShip('c1')).toBeTruthy();
    expect(gameBoard.getShip('c2')).toBeTruthy();
  });
});
