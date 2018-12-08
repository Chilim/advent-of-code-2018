import _ from 'lodash';

const getDistance = (arr1, arr2) => Math.abs(arr2[0] - arr1[0]) + Math.abs(arr2[1] - arr1[1]);

const getCloseId = (areas, [y, x]) => {
  const distances = areas.map((area) => {
    const { id, height, width } = area;
    const distance = getDistance([height, width], [y, x]);
    return { id, distance };
  });
  const sorted = distances.sort((a, b) => a.distance - b.distance);
  if (sorted[0].distance === sorted[1].distance) {
    return '*';
  }
  return sorted[0].id;
}

export default (input) => {
  const canvas = Array.from({ length: 400 })
    .map(() => Array.from({ length: 400 }).map(() => 0));

  const areas = input.split('\n')
    .map(elem => elem.replace(/[, ]+/g, ' ').trim())
    .map(elem => elem.split(' '))
    .map((elem, idx) => ({ id: idx + 1, width: Number(elem[0]), height: Number(elem[1]) }));

  areas.forEach(area => canvas[area.height][area.width] = area.id);

  canvas.forEach((row, idxY) => row.forEach((elem, idxX) => {
    const isCloseId = getCloseId(areas, [idxY, idxX]);
    canvas[idxY][idxX] = isCloseId;
  }));

  const infinLinesElems = new Set([...canvas[0], ...canvas[canvas.length - 1]]);

  canvas.slice(1, -1).forEach(row => row
    .forEach((num, idx) => {
      if (idx === 0 || idx === row.length - 1) {
        infinLinesElems.add(num);
      }
    }));

  const innerElems = [];

  const countInnerElems = _.flatten(canvas)
    .filter(elem => !infinLinesElems.has(elem))
    .reduce((acc, key) => {
      if (!acc.has(key)) {
        return acc.set(key, 1);
      }
      return acc.set(key, acc.get(key) + 1);
    }, new Map());
  countInnerElems.forEach(value => innerElems.push(value));

  return Math.max(...innerElems);
} 
