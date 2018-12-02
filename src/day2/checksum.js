import _ from 'lodash';

const countPair = (id) => {
  const arr = typeof id === 'string' ? id.split('') : id;
  const unique = _.uniq(arr).filter(char => char !== ' ');
  return Array.from(new Set(unique.map(el => (arr.toString()
    .match(new RegExp(el, 'g')) || []).length).filter(n => n > 1)));
};

const makeArrayOfMatch = (ids) => {
  if (ids.length === 0) {
    return [];
  }
  const [first, ...rest] = ids;
  return countPair(first).concat(makeArrayOfMatch(rest));
};

export default (data) => {
  const ids = data.split('\n');
  const matches = makeArrayOfMatch(ids);
  const result = countPair(matches).reduce((acc, num) => acc * num, 1);
  return result;
};
