export function getRandomArbitrary(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

export const getAverageFromArray = (arr: any[]) => arr.reduce((a, b) => a + b, 0) / arr.length;
