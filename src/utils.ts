function getRandomInt(min: number, max: number) {
  const newMin = Math.ceil(min);
  const newMax = Math.floor(max);
  const val = Math.random();
  return Math.floor(val * (newMax - newMin)) + newMin;
}

export default getRandomInt;
