
const getFabric = () => {
  const arr = Array.from({ length: 1000 }).map(() => Array.from({ length: 1000 }).map(() => 0));
  return arr;
}

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
  const draft = [];
  const { top, left, width, height } = claim;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      newCanvas[y + top][x + left] += 1;
      draft.push(newCanvas[y + top][x + left]);
    }
  }
  return { newCanvas, draft };
};

const returnPart = (claim, canvas) => {
  const draft = [];
  const { top, left, width, height } = claim;
  for (let y = 0; y < height; y += 1) {
    for (let x = 0; x < width; x += 1) {
      draft.push(canvas[y + top][x + left]);
    }
  }
  return draft;
};

const exploreData = (data) => {
  const fabric = getFabric();
  const claimList = getClaimsList(data);
  const iter = (claims, canvas, drafts = []) => {
    if (claims.length === 0) {
      return [canvas, drafts];
    }
    const [first, ...rest] = claims;
    const { newCanvas, draft } = takePart(first, canvas);

    return iter(rest, newCanvas, drafts.concat([draft]));
  }
  const [markedFabric, drafts] = iter(claimList, fabric);
  return { claimList, markedFabric, drafts };
}

const makeSum = arr => arr.reduce((sum, n) => sum += n, 0);

export default (data) => {
  const { claimList, markedFabric, drafts } = exploreData(data);

  const cLaimedIches = claimList.reduce((acc, claim) => 
    acc.concat([claim.width * claim.height]), []);
  const returnedDrafts = claimList.map(claim => returnPart(claim, markedFabric)).map(makeSum);

  let id = [];
  returnedDrafts.forEach((num, inx) => {
    if (num === cLaimedIches[inx]) {
      id.push(inx);
    }
  });
  return Number([...id]) + 1;
};
