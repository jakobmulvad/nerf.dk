import * as twgl from "twgl.js";
// @ts-ignore
import fs from "./shader.frag.glsl";
// @ts-ignore
import vs from "./shader.vert.glsl";

console.log(fs);

class WebGLFluidRenderer {
  private gl: WebGL2RenderingContext;
  private programInfo: twgl.ProgramInfo;
  private bufferInfo: twgl.BufferInfo;
  private textures: {[key: string]: WebGLTexture};

  constructor(canvas: HTMLCanvasElement) {
    const gl = (this.gl = canvas.getContext("webgl2"));

    this.programInfo = twgl.createProgramInfo(gl, [vs, fs]);

    const arrays = {
      position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
      texCoord: [0, 0, 0, 1, 1, 1, 1, 0],
    };
    this.bufferInfo = twgl.createBufferInfoFromArrays(gl, arrays);

    const attachments = [
      {
        format: gl.R16F,
        type: gl.RED,
        min: gl.LINEAR,
        wrap: gl.CLAMP_TO_EDGE
      },
      { format: gl.DEPTH_STENCIL }
    ];
    const fbi = twgl.createFramebufferInfo(gl, attachments);

    const textures = twgl.createTextures(gl, {
      front: {
        internalFormat: gl.R16F,
        format: gl.RED,
        type: gl.HALF_FLOAT,
        src: new Uint16Array([255, 0, 128, 0]),
      },
      back: {
        internalFormat: gl.R16F,
        format: gl.RED,
        type: gl.HALF_FLOAT,
        src: new Uint16Array([255, 0, 128, 0]),
      }
    });
    console.log(textures);
  }

  render(time: number) {
    const gl = this.gl;
    twgl.resizeCanvasToDisplaySize(gl.canvas as HTMLCanvasElement);
    gl.viewport(0, 0, gl.canvas.width, gl.canvas.height);

    const uniforms = {
      time: time * 0.001,
      u_diffuse: this.textures['front'],
      resolution: [gl.canvas.width, gl.canvas.height]
    };

    gl.useProgram(this.programInfo.program);
    twgl.setBuffersAndAttributes(gl, this.programInfo, this.bufferInfo);
    twgl.setUniforms(this.programInfo, uniforms);
    twgl.drawBufferInfo(gl, this.bufferInfo);
  }
}

export default WebGLFluidRenderer;
