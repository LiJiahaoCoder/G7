import { transcode } from 'buffer';
import Vec2 from '../src/vec2';

it('should get a vec2 with initial value', () => {
  const vec2 = new Vec2();

  expect( vec2.elements[ 0 ] ).toBe( 0.0 );
  expect( vec2.elements[ 1 ] ).toBe( 0.0 );
});

it('should get [10.0, 0.0] when call setX method given a new vec2', () => {
  const vec2 = new Vec2();
  vec2.setX( 10.0 );

  expect( vec2.elements[ 0 ] ).toBe( 10.0 );
  expect( vec2.elements[ 1 ] ).toBe( 0.0 );
});

it('should get [0.0, 6.0] when call setY method given a new vec2', () => {
  const vec2 = new Vec2();
  vec2.setY( 6.0 );

  expect( vec2.elements[ 0 ] ).toBe( 0.0 );
  expect( vec2.elements[ 1 ] ).toBe( 6.0 );
});

it('should get [1.0, 2.0] when call set method given a new vec2', () => {
  const vec2 = new Vec2();
  vec2.set( 1.0, 2.0 );

  expect( vec2.elements[ 0 ] ).toBe( 1.0 );
  expect( vec2.elements[ 1 ] ).toBe( 2.0 );
});

it('should get a same vec2 when call clone method given a specified vec2', () => {
  const target = new Vec2();
  target.set( 2.0, 5.0 );
  const cloned = Vec2.clone( target );

  expect( cloned.elements[ 0 ] ).toBe( target.elements[ 0 ] );
  expect( cloned.elements[ 1 ] ).toBe( target.elements[ 1 ] );
});

it('should get [2.0, 8.0] when call fromValues given x is 2.0 and y is 8.0', () => {
  const x = 2.0;
  const y = 8.0;
  const vec2 = Vec2.fromValues( x, y );

  expect( vec2.elements[ 0 ] ).toBe( x );
  expect( vec2.elements[ 1 ] ).toBe( y );
});

it('should get 2 vec2s with same value when call copy method given target vec2 and source vec2', () => {
  const target = new Vec2();
  const source = new Vec2();
  source.set( 9.0, 7.0 );

  Vec2.copy( target, source);

  expect( target.elements[ 0 ] ).toBe( source.elements[ 0 ]);
  expect( target.elements[ 1 ] ).toBe( source.elements[ 1 ]);
});

it('should get result of add two vec2s when call add method given 2 vec2s', () => {
  const target = new Vec2();
  target.set( 2.0, 3.0 );
  const vec2 = new Vec2();
  vec2.set( -1.0, 1.0 );

  vec2.add( target );

  expect( vec2.elements[ 0 ] ).toBe( 1.0 );
  expect( vec2.elements[ 1 ] ).toBe( 4.0 );
});

it('should get result of add two vec2s when call static add method given 2 vec2s', () => {
  const vec2 = new Vec2();
  vec2.set( 2.0, 3.0 );
  const anotherVec2 = new Vec2();
  anotherVec2.set( -1.0, 1.0 );

  const result = Vec2.add( vec2, anotherVec2 );

  expect( result.elements[ 0 ] ).toBe( 1.0 );
  expect( result.elements[ 1 ] ).toBe( 4.0 );
});
