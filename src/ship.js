export default function Ship(length, coordinate) {
  let hitCount = 0;
  let axis = 'xAxis';

  const hit = () => {
    hitCount++;
  };

  const getHit = () => hitCount;

  const isSunk = () => {
    return hitCount >= length;
  };

  const len = () => length;

  const switchAxis = () => {
    axis = axis === 'xAxis' ? 'yAxis' : 'xAxis';
  };

  const getAxis = () => axis;

  const getCoordinate = () => coordinate;

  return { hit, getHit, isSunk, len, getAxis, switchAxis, getCoordinate };
}
