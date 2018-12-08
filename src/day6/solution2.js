const getDistance = (arr1, arr2) => Math.abs(arr2[0] - arr1[0]) + Math.abs(arr2[1] - arr1[1]);

const getTotalDistance = (areas, [y, x]) => areas.map((area) => {
  const { height, width } = area;
  const distance = getDistance([height, width], [y, x]);
  return distance;
}).reduce((acc, distance) => acc += distance, 0);

export default (input, limit) => {
  const canvas = Array.from({ length: 400 })
    .map(() => Array.from({ length: 400 }).map(() => 0));

  const areas = input.split('\n')
    .map(elem => elem.replace(/[, ]+/g, ' ').trim())
    .map(elem => elem.split(' '))
    .map((elem) => ({ width: Number(elem[0]), height: Number(elem[1]) }));

  let result = 0;

  canvas.forEach((row, idxY) => row.forEach((elem, idxX) => {
    const totalDistance = getTotalDistance(areas, [idxY, idxX]);
    result = totalDistance < limit ? result += 1 : result;
  }));

  return result;
}