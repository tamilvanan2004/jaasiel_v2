import { useEffect, useRef } from "react";
import "../index.css";

const LoadingScreen = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) return;

    const gl =
      canvas.getContext("webgl") ||
      canvas.getContext("experimental-webgl");

    if (!gl) return;

    const syncSize = () => {
      const width = canvas.clientWidth || window.innerWidth;
      const height = canvas.clientHeight || window.innerHeight;

      if (canvas.width !== width || canvas.height !== height) {
        canvas.width = width;
        canvas.height = height;
      }
    };

    syncSize();

    const vertexShaderSource = `
      attribute vec2 a_position;
      varying vec2 v_texCoord;

      void main() {
        v_texCoord = a_position * 0.5 + 0.5;
        gl_Position = vec4(a_position, 0.0, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision highp float;

      uniform float u_time;
      uniform vec2 u_resolution;
      uniform vec2 u_mouse;

      varying vec2 v_texCoord;

      vec3 permute(vec3 x) {
        return mod(((x * 34.0) + 1.0) * x, 289.0);
      }

      float snoise(vec2 v) {
        const vec4 C = vec4(
          0.211324865405187,
          0.366025403784439,
          -0.577350269189626,
          0.024390243902439
        );

        vec2 i = floor(v + dot(v, C.yy));
        vec2 x0 = v - i + dot(i, C.xx);

        vec2 i1 =
          (x0.x > x0.y)
          ? vec2(1.0, 0.0)
          : vec2(0.0, 1.0);

        vec4 x12 = x0.xyxy + C.xxzz;
        x12.xy -= i1;

        i = mod(i, 289.0);

        vec3 p = permute(
          permute(i.y + vec3(0.0, i1.y, 1.0))
          + i.x
          + vec3(0.0, i1.x, 1.0)
        );

        vec3 m = max(
          0.5 -
          vec3(
            dot(x0, x0),
            dot(x12.xy, x12.xy),
            dot(x12.zw, x12.zw)
          ),
          0.0
        );

        m = m * m;
        m = m * m;

        vec3 x = 2.0 * fract(p * C.www) - 1.0;
        vec3 h = abs(x) - 0.5;
        vec3 a0 = x - floor(x + 0.5);

        vec3 g = vec3(
          a0.x * x0.x + h.x * x0.y,
          a0.y * x12.x + h.y * x12.y,
          a0.z * x12.z + h.z * x12.w
        );

        return 130.0 * dot(m, g);
      }

      void main() {
        vec2 uv = v_texCoord;

        vec2 p = uv * 2.0 - 1.0;
        p.x *= u_resolution.x / u_resolution.y;

        vec3 purple = vec3(0.42, 0.13, 0.66);
        vec3 blue = vec3(0.0, 0.47, 0.84);
        vec3 surface = vec3(0.99, 0.98, 1.0);

        float n1 = snoise(uv * 1.2 + u_time * 0.05);
        float n2 = snoise(uv * 2.0 - u_time * 0.08);
        float n3 = snoise(uv * 0.5 + u_time * 0.02);

        vec3 colorMix = mix(
          purple,
          blue,
          n1 * 0.5 + 0.5
        );

        colorMix = mix(
          colorMix,
          vec3(0.1, 0.6, 0.3),
          n2 * 0.1
        );

        float intensity = smoothstep(
          -0.2,
          0.8,
          n1 * n2 + n3 * 0.5
        );

        vec3 finalColor = mix(
          surface,
          colorMix,
          intensity * 0.08
        );

        float vignette = smoothstep(
          1.8,
          0.2,
          length(p)
        );

        finalColor *= vignette * 0.1 + 0.9;

        gl_FragColor = vec4(finalColor, 1.0);
      }
    `;

    const createShader = (type, source) => {
      const shader = gl.createShader(type);

      gl.shaderSource(shader, source);
      gl.compileShader(shader);

      return shader;
    };

    const vertexShader = createShader(
      gl.VERTEX_SHADER,
      vertexShaderSource
    );

    const fragmentShader = createShader(
      gl.FRAGMENT_SHADER,
      fragmentShaderSource
    );

    const program = gl.createProgram();

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);
    gl.useProgram(program);

    const buffer = gl.createBuffer();

    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);

    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([
        -1, -1,
         1, -1,
        -1,  1,
         1,  1,
      ]),
      gl.STATIC_DRAW
    );

    const position = gl.getAttribLocation(
      program,
      "a_position"
    );

    gl.enableVertexAttribArray(position);

    gl.vertexAttribPointer(
      position,
      2,
      gl.FLOAT,
      false,
      0,
      0
    );

    const uTime = gl.getUniformLocation(
      program,
      "u_time"
    );

    const uResolution = gl.getUniformLocation(
      program,
      "u_resolution"
    );

    const uMouse = gl.getUniformLocation(
      program,
      "u_mouse"
    );

    const mouse = {
      x: canvas.width / 2,
      y: canvas.height / 2,
    };

    const handleMouseMove = (event) => {
      const rect = canvas.getBoundingClientRect();

      if (!rect.width || !rect.height) return;

      const x =
        (event.clientX - rect.left) / rect.width;

      const y =
        1 -
        (event.clientY - rect.top) / rect.height;

      mouse.x = x * canvas.width;
      mouse.y = y * canvas.height;
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove
    );

    let animationFrame;

    const render = (time) => {
      syncSize();

      gl.viewport(
        0,
        0,
        canvas.width,
        canvas.height
      );

      gl.uniform1f(
        uTime,
        time * 0.001
      );

      gl.uniform2f(
        uResolution,
        canvas.width,
        canvas.height
      );

      gl.uniform2f(
        uMouse,
        mouse.x,
        mouse.y
      );

      gl.drawArrays(
        gl.TRIANGLE_STRIP,
        0,
        4
      );

      animationFrame =
        requestAnimationFrame(render);
    };

    animationFrame =
      requestAnimationFrame(render);

    window.addEventListener(
      "resize",
      syncSize
    );

    return () => {
      cancelAnimationFrame(animationFrame);

      window.removeEventListener(
        "mousemove",
        handleMouseMove
      );

      window.removeEventListener(
        "resize",
        syncSize
      );
    };
  }, []);

  return (
    <div className="loading-screen">

      {/* Animated background */}
      <div className="loading-background">
        <canvas ref={canvasRef} />
      </div>

      {/* Main content */}
      <main className="loading-content">

        <div className="loading-logo-container">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDSiv-ZPieqbkG1mMCCxx_d16e_oJ9wxjg8lV7c-rQgPjnNROn-Y3Tk6gSI6Ru1pG7BbQacQACJSSAvupu9xira1HYQkRodR1DDZIb6ka5rIXBlEJgWTRm2XLyJftcaDlr16VyZYyuWE3qd3TBWUVL8z1_Js6abRLxJ2PwF6GjgvX93clixD84i_LXi2lpQ55NpBLTAZPnnFcR-xxNQbxohaO2Va3cSH7Jt89OOdWXak2OH2kWivrCLbSd9fg5u2Zg3GwA"
            alt="Jaasiel Logo"
            className="loading-logo"
          />
        </div>

        {/* Loading bar */}
        <div className="loading-bar">
          <div className="loading-bar-progress" />
        </div>

      </main>

      {/* Status */}
      <div className="loading-status">
        INITIALIZING EXCELLENCE IN MOTION...
      </div>

    </div>
  );
};

export default LoadingScreen;