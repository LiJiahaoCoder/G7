import Vec4 from '../src/vec4';

describe('Tests of vec4', () => {
  it('should get initial vec4', () => {
    const vec4 = new Vec4();

    expect( vec4.x ).toBe( 0.0 );
    expect( vec4.y ).toBe( 0.0 );
    expect( vec4.z ).toBe( 0.0 );
    expect( vec4.w ).toBe( 0.0 );
  });
});
