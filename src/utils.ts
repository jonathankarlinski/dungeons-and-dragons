import * as crypto from 'crypto';

function getRandomInt(min: number, max: number) {
  const range = max - min;
  if (range <= 0) {
    throw new Error('max deve ser maior que min');
  }

  const randomBytes = crypto.randomBytes(4);
  const randomInt = Math.floor(
    (randomBytes.readUInt32BE(0) / 0xffffffff) * range + min,
  );

  return randomInt;
}

export default getRandomInt;
