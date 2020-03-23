attribute vec4 position;
attribute vec2 texCoord;

out vec2 texCoordOut;

void main() {
	gl_Position = position;
	texCoordOut = texCoord;
}