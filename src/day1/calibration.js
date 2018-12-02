const covertToArray = data => data.split('\n').map(n => parseInt(n, 10));

export const calibration = (data) => {
  const frequencies = covertToArray(data);
  return frequencies.reduce((acc, num) => acc += num, 0);
};

export const calibration2 = (data) => {
  const frequencies = covertToArray(data);
  const iter = (arr, sum = 0, acc = new Set([0])) => {
    const newArr = arr.length === 0 ? frequencies : arr;
    const [first, ...rest] = newArr;
    const newSum = first + sum;
    if (acc.has(newSum)) {
      return newSum;
    }
    const newAcc = acc.add(newSum);
    return iter(rest, newSum, newAcc);
  };
  return iter(frequencies);
};
