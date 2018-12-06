
const isSameType = (x, y) => x.toLowerCase() === y.toLowerCase();

const isOppositePolarity = (x, y) => {
  const isFalse = x === y;
  return !isFalse;
};

export default (input) => {
  let hasReaction = true;
  let chain = input;


  while (hasReaction) {
    hasReaction = false;

    for (let i = 0; i < chain.length; i += 1) {
      const pair = chain.slice(i, i + 2);

      if (pair.length === 2 && isSameType(pair[0], pair[1]) 
        && isOppositePolarity(pair[0], pair[1])) {
        chain = chain.slice(0, i) + chain.slice(i + 2, chain.length);
        hasReaction = true;
      }
    }
  }
  return chain.length;
};
