import Player from '../src/player';
import Ship from '../src/ship';

describe('Player', () => {
  test('Prevent collision of ship when setting new ship', () => {
    const player = Player();
    const playerOneBoard = player.getBoardToSetShip(0);
    const playerOneBoardID = playerOneBoard.getGameBoardID();
    player.setShip({ ID: playerOneBoardID, len: 1 }, 'j2', 0);
    // ship will not be set,
    // length 3 start at j0 and end at j2, will collide at j2
    // ship already occupy j2
    player.setShip({ ID: playerOneBoardID, len: 3 }, 'j0', 0);

    expect(playerOneBoard.getShip('j0')).toBeFalsy();
  });

  test('should get all valid adjacent coordinate', () => {
    const player = Player();
    const playerOneBoard = player.getBoardToSetShip(0);
    const playerOneBoardID = playerOneBoard.getGameBoardID();
    player.setShip({ ID: playerOneBoardID, len: 1 }, 'e4', 0);

    expect(player.getValidAdjacentCoordinate('e4')).toEqual([
      { indexOfCoordinate: 53 },
      { indexOfCoordinate: 44 },
      { indexOfCoordinate: 55 },
      { indexOfCoordinate: 64 },
    ]);
  });

  test('should ignore top and right invalid direction', () => {
    const player = Player();
    player.setShip(Ship(1, 'j9'), 'j9', 'Player 1');

    expect(player.play('j9', 'Player 1')).toEqual([
      { indexOfCoordinate: 8 },
      { indexOfCoordinate: 19 },
    ]);
  });

  test('should ignore left and bottom invalid direction', () => {
    const player = Player();
    player.setShip(Ship(1, 'a0'), 'a0', 'Player 1');

    expect(player.play('a0', 'Player 1')).toEqual([
      { indexOfCoordinate: 80 },
      { indexOfCoordinate: 91 },
    ]);
  });

  test.only('Should try adjacent slot after getting a hit', () => {
    const player = Player();
    const playerOneBoard = player.getBoardToSetShip(0);
    const playerOneBoardID = playerOneBoard.getGameBoardID();
    
    player.setShip({ ID: playerOneBoardID, len: 2 }, 'i4', 0);

    playerOneBoard.switchShipAxis('i4');
    
    player.play('i4', '');

    expect(playerOneBoard.getCellInOrderOfHit()).toEqual(['i4', 'h4', 'g4']);
  });
});
