import fs from 'fs';
import { calibration, calibration2 } from '../src/day1/calibration';

describe('Calibration', () => {
  it('should result frequency', () => {
    const data1 = 
    `+1,
    -2,
    +3,
    +1`;
    const data2 = 
    `+1,
    +1,
    +1`;
    const data3 = 
    `+1,
    +1,
    -2`;
    const data4 = 
    `-1,
    -2,
    -3`;
    const data5 = fs.readFileSync('src/day1/data', { encoding: 'utf8' });

    expect(calibration(data1)).toBe(3);
    expect(calibration(data2)).toBe(3);
    expect(calibration(data3)).toBe(0);
    expect(calibration(data4)).toBe(-6);
    expect(calibration(data5)).toBe(546);
  });
  it('should result duplicate frequency', () => {
    const data1 = 
    `-1,
    +1`;
    const data2 = 
    `+3, 
    +3, 
    +4, 
    -2, 
    -4`;
    const data3 = 
    `-6, 
    +3, 
    +8, 
    +5, 
    -6`;
    const data4 = 
    `+7, 
    +7, 
    -2, 
    -7, 
    -4`;
    const data5 = fs.readFileSync('src/day1/data', { encoding: 'utf8' });

    expect(calibration2(data1)).toBe(0);
    expect(calibration2(data2)).toBe(10);
    expect(calibration2(data3)).toBe(5);
    expect(calibration2(data4)).toBe(14);
    expect(calibration2(data5)).toBe(76760);
  });

  
});
