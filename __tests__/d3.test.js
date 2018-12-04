import solution from '../src/day3/solution';
import solution2 from '../src/day3/solution2';


describe('test', () => {
  it('should find inches of fabric are within two or more claims', () => {
    const data1 = 
    `#1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2`;

    expect(solution(data1, 10, 10)).toBe(4);
  });

  it('should determine non-confrontational claim', () => {
    const data2 = 
    `#1 @ 1,3: 4x4
    #2 @ 3,1: 4x4
    #3 @ 5,5: 2x2`;

    expect(solution2(data2, 10, 10)).toBe(3);
  });
});
