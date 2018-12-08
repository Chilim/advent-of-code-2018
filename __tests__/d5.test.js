import solution from '../src/day5/solution';
import solution2 from '../src/day5/solution2';

describe('test', () => {
  it('should find polymer', () => {
    const data1 = 'dabAcCaCBAcCcaDA';

    expect(solution(data1)).toBe(10);
  });

  it('should shortest polymer', () => {
    const data2 = 'dabAcCaCBAcCcaDA';

    expect(solution2(data2)).toBe(4);
  });
});
