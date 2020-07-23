import { ARRAY } from './common';

export default class Vec4 {
  public readonly elements: ArrayType;

  constructor ( param: Vec4Constructor = { x: 0.0, y: 0.0, z: 0.0, w: 0.0 }) {
    this.elements = new ARRAY( 4 );
    this.elements[ 0 ] = param.x;
    this.elements[ 1 ] = param.y;
    this.elements[ 2 ] = param.z;
    this.elements[ 3 ] = param.w;
  }

  /**
   * Get x of vec4
   *
   * @readonly
   * @type {number}
   */
  get x (): number {
    return this.elements[ 0 ];
  }

  /**
   * Get y of vec4
   *
   * @readonly
   * @type {number}
   */
  get y (): number {
    return this.elements[ 1 ];
  }

  /**
   * Get z of vec4
   *
   * @readonly
   * @type {number}
   */
  get z (): number {
    return this.elements[ 2 ];
  }

  /**
   * Get z of vec4
   *
   * @readonly
   * @type {number}
   */
  get w (): number {
    return this.elements[ 3 ];
  }
}
