declare type ArrayType = number[] | Float32Array;

declare interface Vec2Constructor {
  x: number;
  y: number;
}

declare interface Vec3Constructor extends Vec2Constructor {
  z: number;
}

declare interface Vec4Constructor extends Vec3Constructor {
  w: number;
}
