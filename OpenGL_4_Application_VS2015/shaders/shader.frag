#version 400

out vec4 fragmentColour;

uniform vec3 uniformColour;

void main() {
	fragmentColour = vec4(uniformColour, 1.0);
}

