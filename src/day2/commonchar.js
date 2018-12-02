
export default (data) => {
  const arr = data.split('\n');
  console.log(arr);
  const iter = (coll, acc = []) => {
    if (coll.length === 0) {
      return acc;
    }
    const [head, ...rest] = coll;
    rest.forEach((item) => {
      const first = head.split('');
      const second = item.split('');
      const matchedElements = first.filter((char, inx) => char === second[inx]);
      if (matchedElements.length > 0) {
        acc.push(matchedElements);
      }
    });
    return iter(rest, acc);  
  };
  const newColl = iter(arr);
  const result = newColl.reduce((acc, coll) => coll.length >= acc.length ? coll : acc, newColl[0]);
  return result.join('', ',');
};
