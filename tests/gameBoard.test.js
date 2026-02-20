import GameBoard from '../src/gameBoard';

describe('Game Board', () => {
  const id = crypto.randomUUID();

  test('Switch axis of ship', () => {
    const gameBoard = GameBoard(id);
    gameBoard.setShip({ id, len: 2 }, 'j0');

    gameBoard.switchShipAxis('j0');

    expect(gameBoard.getShip('j0')).toBeTruthy();
    expect(gameBoard.getShip('j1')).toBeFalsy();
    expect(gameBoard.getShip('i0')).toBeTruthy();
  });

  test(`Should not swap axis of ship 
    if it collide with another ship while swapping`, () => {
    const gameBoard = GameBoard(id);
    gameBoard.setShip({ id, len: 3 }, 'c0');
    gameBoard.setShip({ id, len: 1 }, 'a0');

    gameBoard.switchShipAxis('c0');

    expect(gameBoard.getShip('c0')).toBeTruthy();
    expect(gameBoard.getShip('c1')).toBeTruthy();
    expect(gameBoard.getShip('c2')).toBeTruthy();
  });

  test('Increment hit when ship is hitting', () => {
    const gameBoard = GameBoard(id);
    gameBoard.setShip({ id, len: 3 }, 'c0');

    gameBoard.receiveAttack('c0');
    gameBoard.receiveAttack('c4');

    expect(gameBoard.getShip('c0').getHit()).toBe(1);
  });

  test('should be true when all ship is sunk', () => {
    const gameBoard = GameBoard();
    gameBoard.setShip({ id, len: 1 }, 'c0');

    gameBoard.receiveAttack('c0');

    expect(gameBoard.isAllShipSunk()).toBeTruthy();
  });
});
