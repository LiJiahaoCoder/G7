import { equal, ARRAY } from './common';

export default class Vec2 {
  public readonly elements: ARRAY_TYPE;

  constructor () {
    this.elements = new ARRAY( 2 );
    this.elements[ 0 ] = 0.0;
    this.elements[ 1 ] = 0.0;
  }

  /**
   * Create a new vec2 initialized with values from target vec2
   *
   * @param {Vec2} target
   * @returns {Vec2} New vec2
   */
  static clone ( target: Vec2 ): Vec2 {
    const vec2 = new Vec2();
    vec2.set( target.elements[0], target.elements[1] );

    return vec2;
  }

  /**
   * Set new value of vector
   *
   * @param {number} x New x value
   * @param {number} y New y value
   * @returns {Vec2} Vec2
   */
  public set ( x: number, y: number ): Vec2 {
    return this.setX( x ).setY( y );
  }

  /**
   * Set new x value of vec2
   *
   * @param {number} x New x value
   * @returns {Vec2} Vec2
   */
  public setX ( x: number ): Vec2 {
    this.elements[ 0 ] = x;

    return this;
  }

  /**
   * Set new y value of vec2
   *
   * @param {number} y New y value
   * @returns {Vec2} Vec2
   */
  public setY ( y: number ): Vec2 {
    this.elements[ 1 ] = y;

    return this;
  }
}
