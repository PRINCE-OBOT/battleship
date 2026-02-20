import Ship from '../src/ship';

describe('Ship', () => {
  test('hit once', () => {
    const ship = Ship();
    ship.hit();
    expect(ship.getHit()).toBe(1);
  });
  test('hit many times', () => {
    const ship = Ship();
    ship.hit();
    ship.hit();
    ship.hit();
    expect(ship.getHit()).toBe(3);
  });
  test('hit is less than length', () => {
    const ship = Ship(2);
    ship.hit();
    expect(ship.isSunk()).toBe(false);
  });
  test('hit is equal to length', () => {
    const ship = Ship(2);
    ship.hit();
    ship.hit();
    expect(ship.isSunk()).toBe(true);
  });
});
