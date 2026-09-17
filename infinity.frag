/* Infinity */
/* https://glslsandbox.com/e#107684.0 */

#ifdef GL_ES
precision highp float;
#endif

#extension GL_OES_standard_derivatives : enable

layout(std140) uniform Uniforms {
    float time;
    vec2 resolution;
};


out vec4 fragmentColor;

void main( void ) {

	vec3 Color = vec3(sin(time), 0.3, 0.9);
	float col = -0.2;
	vec2 a = (gl_FragCoord.xy * 2.0 - resolution) / min(resolution, resolution.y);
	col += 0.41 / abs(length(a + vec2( sin(time), sin(time)*cos(time))) - 0.01);
	fragmentColor = vec4(1. - exp( -vec3(Color * col) ), 1.0);
