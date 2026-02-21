import GameBoard from '../src/gameBoard';
import Player from '../src/player';

describe('Players', () => {
  const playerOne = {
    name: 'playerOneName',
    board: GameBoard(crypto.randomUUID()),
  };

  test('Prevent collision of ship when setting new ship', () => {
    const id = playerOne.board.getID();
    playerOne.board.setShip({ id, len: 1 }, 'j2');
    // ship will not be set,
    // length 3 start at j0 and end at j2, will collide at j2
    // ship already occupy j2
    playerOne.board.setShip({ id, len: 3 }, 'j0');

    expect(playerOne.board.getShip('j0')).toBeFalsy();
  });
});

describe('Computer Adjacent Coordinate', () => {
  const playerOne = {
    name: 'playerOneName',
    board: GameBoard(crypto.randomUUID()),
  };
  const player = Player(playerOne);

  test('Should get all valid adjacent coordinate', () => {
    expect(playerOne.board.getValidAdjacentIndex('e4')).toEqual([53, 44, 55, 64]);
  });

  test('Should ignore top and right invalid direction', () => {
    expect(playerOne.board.getValidAdjacentIndex('j9')).toEqual([8, 19]);
  });

  test('Should ignore left and bottom invalid direction', () => {
    expect(playerOne.board.getValidAdjacentIndex('a0')).toEqual([80, 91]);
  });
});

describe('Computer Try Adjacent Slop', () => {
  test('Should try adjacent slot after getting a hit', () => {
    const playerOne = {
      name: 'playerOneName',
      board: GameBoard(crypto.randomUUID()),
    };

    const playerOneBoardID = playerOne.board.getID();

    const player = Player(playerOne);

    playerOne.board.setShip({ id: playerOneBoardID, len: 2 }, 'i4');

    playerOne.board.switchShipAxis('i4');

    player.play('i4', '', 'predictableIndex');

    expect(playerOne.board.getCellInOrderOfHit()).toEqual(['i4', 'h4', 'g4']);
  });
});
