export default function Ship(length) {
  let hitCount = 0;

  const hit = () => {
    hitCount++;
  };

  const getHit = () => hitCount;

  const isSunk = () => {
    return hitCount >= length;
  };

  return { hit, getHit, isSunk };
}
