import * as twgl from 'twgl.js'
// @ts-ignore
import fs from './shader.frag.glsl'
// @ts-ignore
import vs from './shader.vert.glsl'

console.log(fs)

class WebGLFluidRenderer {
	private gl: WebGLRenderingContext;
	private programInfo: twgl.ProgramInfo;
	private bufferInfo: twgl.BufferInfo;

	constructor(canvas: HTMLCanvasElement) {
		this.gl = canvas.getContext("webgl");

		this.programInfo = twgl.createProgramInfo(this.gl, [vs, fs]);

		const arrays = {
		  position: [-1, -1, 0, 1, -1, 0, -1, 1, 0, -1, 1, 0, 1, -1, 0, 1, 1, 0],
		};
		this.bufferInfo = twgl.createBufferInfoFromArrays(this.gl, arrays);
	}

	render(time: number) {
		twgl.resizeCanvasToDisplaySize(this.gl.canvas as HTMLCanvasElement);
		this.gl.viewport(0, 0, this.gl.canvas.width, this.gl.canvas.height);

		const uniforms = {
			time: time * 0.001,
			resolution: [this.gl.canvas.width, this.gl.canvas.height],
		};

		this.gl.useProgram(this.programInfo.program);
		twgl.setBuffersAndAttributes(this.gl, this.programInfo, this.bufferInfo);
		twgl.setUniforms(this.programInfo, uniforms);
		twgl.drawBufferInfo(this.gl, this.bufferInfo);
	}
}

export default WebGLFluidRenderer