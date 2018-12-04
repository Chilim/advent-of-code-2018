import _ from 'lodash';

const getFabric = (height, width) => {
  const arr = Array.from({ length: height }).map(() => Array.from({ length: width }).map(() => 0));
  return arr;
};

const getClaimsList = (data) => {
  const claimList = data.split('\n')
    .map((claim) => {
      const claims = claim.match(/#(\d+) @ (\d+),(\d+): (\d+)x(\d+)/);
      return {
        id: Number(claims[1]),
        top: Number(claims[3]),
        left: Number(claims[2]),
        width: Number(claims[4]),
        height: Number(claims[5]),
      };
    });
  return claimList;
};

const takePart = (claim, canvas) => {
  const newCanvas = canvas;
  const { top, left, width, height } = claim;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      newCanvas[y + top][x + left] += 1;
    }
  }
  return newCanvas;
};

export default (data, height, width) => {
  const fabric = getFabric(height, width);
  const claimList = getClaimsList(data);
  const iter = (claims, canvas) => {
    if (claims.length === 0) {
      return canvas;
    }
    const [first, ...rest] = claims;
    const newCanvas = takePart(first, canvas);

    return iter(rest, newCanvas);
  };
  const markedFabric = iter(claimList, fabric);
  return _.flattenDeep(markedFabric)
    .reduce((count, inch) => inch > 1 ? count += 1 : count, 0);
};
