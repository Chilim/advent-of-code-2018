import fs from 'fs';
import checksum from '../src/day2/checksum';
import commonchar from '../src/day2/commonchar';

describe('test', () => {
  it('should find checksum', () => {
    const data1 = `abcdef
bababc
abbcde
abcccd
aabcdd
abcdee
ababab`;

    const data2 = fs.readFileSync('src/day2/data', { encoding: 'utf8' });
    expect(checksum(data1)).toBe(12);
    expect(checksum(data2)).toBe(6225);
  });

  it('should find common letters', () => {
    const data1 = `abcde
fghij
klmno
pqrst
fguij
axcye
wvxyz`;

    const data2 = fs.readFileSync('src/day2/data', { encoding: 'utf8' });
    expect(commonchar(data1)).toBe('fgij');
    expect(commonchar(data2)).toBe('revtaubfniyhsgxdoajwkqilp');
  });
});
