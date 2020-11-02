export const getCanvas = (selector: string): HTMLCanvasElement => {
  const canvas = document.querySelector(selector);
  if (!(canvas instanceof HTMLCanvasElement)) {
    throw new Error(`Can't find a canvas with selector: ${selector}`);
  }

  return canvas;
};

export const getContext = (canvas: HTMLCanvasElement): WebGL2RenderingContext => {
  const ctx = canvas.getContext('webgl2');
  if (!ctx) {
    throw new Error('Your browser doesn\'t support WebGL2!');
  }

  return ctx;
};

export const createShader = (
  ctx: WebGL2RenderingContext,
  type: number,
  source: string,
) => {
  const shader = ctx.createShader(type);
  if (!shader) {
    throw new Error('Failed to create shader!');
  }

  ctx.shaderSource(shader, source);
  ctx.compileShader(shader);

  const compiled = ctx.getShaderParameter(shader, ctx.COMPILE_STATUS);
  if (!compiled) {
    ctx.deleteShader(shader);
    throw new Error(`Failed to compile: ${ctx.getShaderInfoLog(shader)}!`);
  }

  return shader;
};
