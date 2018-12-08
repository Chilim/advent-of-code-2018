import solution from '../src/day6/solution';
import solution2 from '../src/day6/solution2';

describe('test', () => {
  it('should find polymer', () => {
    const data1 = 
    `1, 1
    1, 6
    8, 3
    3, 4
    5, 5
    8, 9`;

    expect(solution(data1)).toBe(17);
  });

  it('should shortest polymer', () => {
    const data2 = 
    `1, 1
    1, 6
    8, 3
    3, 4
    5, 5
    8, 9`;
    const limit = 32;

    expect(solution2(data2, limit)).toBe(16);
  });
});
