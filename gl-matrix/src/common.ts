import numeral from 'numeral';

export const EPCILON = 0.0000001;

export let ARRAY_TYPE = ( typeof Float32Array !== 'undefined' ) ? Float32Array : Array;

/**
 * Convert degree to radian
 * @param {number} angle Degrees
 * @returns {number} Radian
 */
export function toRadian (angle: number): number {
  return angle * Math.PI / 180;
}

/**
 *
 * Tests whether or not the arguments have approximately the same value,
 * within an absolute or relative tolerance of glMatrix.EPSILON
 * @param {number} val1 The 1st number
 * @param {number} val2 The 2nd number
 * @returns {boolean} Whether the numbers are approximately equal
 */
export function equal (val1: number, val2: number): boolean {
  return Math.abs(numeral(val1).difference(val2)) <= EPCILON;
}
