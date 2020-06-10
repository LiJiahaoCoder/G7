import { equal, toRadian, ARRAY } from '../src/common';

it('should get Float32Array', () => {
  expect(ARRAY).toEqual(Float32Array);
});

it('should get 2π when input 360 degrees', () => {
  expect(toRadian(360)).toEqual(2 * Math.PI);
});

it('should get true when compare 1997 to 1997.0000001', () => {
  expect(equal(1997, 1997.0000001)).toBeTruthy();
});

it('should get true when compare 1997 to 1997.00000001', () => {
  expect(equal(1997, 1997.00000001)).toBeTruthy();
});

it('should get false when compare 1997 to 1997.0001', () => {
  expect(equal(1997, 1997.0001)).toBeFalsy();
});
