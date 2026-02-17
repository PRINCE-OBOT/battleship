import GameBoard from '../src/gameBoard';
import Ship from '../src/ship';

describe('Game Board', () => {
  test('Ship with single length', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(1), 'j0');

    expect(gameBoard.getShip('j0')).toBeTruthy();
    expect(gameBoard.getShip('j1')).toBeFalsy();
    expect(gameBoard.getShip('h0')).toBeFalsy();
  });

  test('Ship with double length with Default axis X', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(2), 'j0');

    expect(gameBoard.getShip('j0')).toBeTruthy();
    expect(gameBoard.getShip('j1')).toBeTruthy();
    expect(gameBoard.getShip('i0')).toBeFalsy();
  });

  test('Ship with double length, switched to Y Axis', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(2), 'j0');

    gameBoard.switchShipAxis('j0');

    expect(gameBoard.getShip('j0')).toBeTruthy();
    expect(gameBoard.getShip('j1')).toBeFalsy();
    expect(gameBoard.getShip('i0')).toBeTruthy();
  });

  test('Ship with double length, switched to X Axis', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip(Ship(2), 'j0');

    gameBoard.switchShipAxis('j0');
    gameBoard.switchShipAxis('j0');

    expect(gameBoard.getShip('j0')).toBeTruthy();
    expect(gameBoard.getShip('j1')).toBeTruthy();
    expect(gameBoard.getShip('i0')).toBeFalsy();
  });
});
