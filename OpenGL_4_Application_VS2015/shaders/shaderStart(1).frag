#version 400

out vec4 frag_colour;

void main() {
    vec3 colour = vec3(0.86, 0.74, 0.0);
	frag_colour = vec4(colour, 1.0);
}
