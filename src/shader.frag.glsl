precision mediump float;

uniform vec2 resolution;
uniform float time;

void main() {
	float x = gl_FragCoord.x/resolution.x;
	float y = gl_FragCoord.y/resolution.y;
	/*vec3 col = vec3(0.0);
	col.r = gl_FragCoord.x/resolution.x;
	col.g = 0.5+0.5*sin(time);
	col.b = gl_FragCoord.y/resolution.y;
	gl_FragColor = vec4(col, 1.0);*/

	float phase1 = sin(time + x * 5.0) * sin(time + y * 5.0);
	float phase2 = sin(time*0.25 + x * 15.0) * sin(time * 0.95 + y * 14.0);
	float phase3 = sin(-time*0.65 + x * 12.0) * sin(-time * 0.32 + y * 8.0);

	float value = phase1 + phase2 + phase3;
	vec3 color = vec3(value * 0.1 + 0.85);

	gl_FragColor = vec4(color, 1.0);
}
