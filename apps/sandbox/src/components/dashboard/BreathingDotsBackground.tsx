import React, { useEffect, useRef } from 'react';

export interface BreathingDotsProps {
  theme?: 'dark' | 'light';
  enabled?: boolean;
  intensity?: 'subtle' | 'balanced' | 'vivid';
  speed?: number;
  interactive?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const VERTEX_SHADER = `
  attribute vec2 a_initial_pos;
  attribute float a_dist;
  attribute float a_channel;

  uniform float u_time;
  uniform float u_dt;
  uniform vec2 u_resolution;
  uniform float u_zoom;
  uniform float u_point_size;
  uniform vec2 u_mouse;
  uniform float u_mouse_factor;
  uniform float u_theme;
  uniform float u_opacity;

  varying vec4 v_color;

  #define PI 3.14159265359

  // Rounded square wave from Matt Rossman / Dave Whyte formula
  // Produces smooth dwell at expansion/contraction peaks
  float roundedSquareWave(float t, float delta, float a, float f) {
    return ((2.0 * a) / PI) * atan(sin(2.0 * PI * t * f) / delta);
  }

  void main() {
    // Chromatic delay per channel:
    // Channel 0 (Red) leads, Channel 1 (Green) is centered, Channel 2 (Blue) trails
    float timeOffset = a_channel * u_dt;
    float t = (u_time - timeOffset) - a_dist / 25.0;

    // Delta widens as distance increases for progressive softening
    float delta = 0.15 + (0.2 * a_dist) / 72.0;
    float wave = roundedSquareWave(t, delta, 0.4, 1.0 / 3.8);

    vec2 pos = a_initial_pos;

    // Interactive mouse gravitation
    if (u_mouse_factor > 0.001) {
      vec2 toMouse = u_mouse - pos;
      float mouseDist = length(toMouse);
      float influence = exp(-mouseDist * 0.065) * u_mouse_factor;
      pos += toMouse * influence * 0.35;
    }

    vec2 currentPos = pos * (wave + 1.3);

    // Dynamic aspect ratio scaling
    float minDim = min(u_resolution.x, u_resolution.y);
    vec2 screenPos = currentPos * (u_zoom * minDim / 920.0);
    vec2 clipPos = screenPos / (u_resolution * 0.5);

    gl_Position = vec4(clipPos, 0.0, 1.0);
    gl_PointSize = u_point_size * (minDim / 750.0);

    if (u_theme > 0.5) {
      // DARK THEME (Additive blending: R + G + B -> Pure Luminous White)
      if (a_channel < 0.5) {
        v_color = vec4(1.0, 0.08, 0.3, u_opacity);  // Spectral Magenta/Red
      } else if (a_channel < 1.5) {
        v_color = vec4(0.08, 1.0, 0.45, u_opacity); // Spectral Mint/Green
      } else {
        v_color = vec4(0.15, 0.5, 1.0, u_opacity);  // Spectral Cyan/Blue
      }
    } else {
      // LIGHT THEME (High-contrast deep pigment dots with rich chromatic aura)
      if (a_channel < 0.5) {
        v_color = vec4(0.16, 0.26, 0.62, u_opacity); // Deep Indigo / Sapphire
      } else if (a_channel < 1.5) {
        v_color = vec4(0.05, 0.46, 0.48, u_opacity); // Deep Teal / Emerald
      } else {
        v_color = vec4(0.48, 0.12, 0.46, u_opacity); // Deep Plum / Violet
      }
    }
  }
`;

const FRAGMENT_SHADER = `
  precision mediump float;
  varying vec4 v_color;

  void main() {
    // Calculate distance from point center (0.0 to 0.5)
    vec2 coord = gl_PointCoord - vec2(0.5);
    float dist = length(coord);

    // Smooth circular antialiased edge
    float alpha = smoothstep(0.5, 0.36, dist);
    if (alpha <= 0.01) {
      discard;
    }

    gl_FragColor = vec4(v_color.rgb, v_color.a * alpha);
  }
`;

function createShader(gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    console.error('Shader compile error:', gl.getShaderInfoLog(shader));
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

export const BreathingDotsBackground: React.FC<BreathingDotsProps> = ({
  theme = 'dark',
  enabled = true,
  intensity = 'balanced',
  speed = 1.0,
  interactive = true,
  style,
  className,
}) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);
  const targetMouseRef = useRef<{ x: number; y: number; active: boolean }>({ x: 0, y: 0, active: false });
  const currentMouseRef = useRef<{ x: number; y: number; factor: number }>({ x: 0, y: 0, factor: 0 });

  // Opacity & Point size calibrated by theme & intensity
  const opacityConfig = {
    subtle: theme === 'dark' ? 0.32 : 0.42,
    balanced: theme === 'dark' ? 0.52 : 0.62,
    vivid: theme === 'dark' ? 0.8 : 0.85,
  }[intensity];

  const pointSizeConfig = {
    subtle: theme === 'dark' ? 3.0 : 3.4,
    balanced: theme === 'dark' ? 3.6 : 4.0,
    vivid: theme === 'dark' ? 4.2 : 4.6,
  }[intensity];

  useEffect(() => {
    if (!interactive) return;

    const handleMouseMove = (e: MouseEvent) => {
      const canvas = canvasRef.current;
      if (!canvas) return;
      const rect = canvas.getBoundingClientRect();
      // Map screen cursor to normalized scene coordinates (-50 to +50)
      const x = ((e.clientX - rect.left) / rect.width - 0.5) * 100;
      const y = -((e.clientY - rect.top) / rect.height - 0.5) * 100;
      targetMouseRef.current = { x, y, active: true };
    };

    const handleMouseLeave = () => {
      targetMouseRef.current.active = false;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, [interactive]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !enabled) return;

    const gl = canvas.getContext('webgl', {
      alpha: true,
      antialias: true,
      depth: false,
      preserveDrawingBuffer: false,
    });

    if (!gl) {
      console.warn('WebGL not supported for BreathingDotsBackground');
      return;
    }

    const vs = createShader(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fs = createShader(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    if (!vs || !fs) return;

    const program = gl.createProgram();
    if (!program) return;
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error('Program link error:', gl.getProgramInfoLog(program));
      return;
    }

    gl.useProgram(program);

    // 10,000 base points across 3 chromatic channels = 30,000 vertices
    const GRID_SIZE = 100;
    const NUM_POINTS = GRID_SIZE * GRID_SIZE; // 10,000
    const TOTAL_VERTICES = NUM_POINTS * 3;

    const positions = new Float32Array(TOTAL_VERTICES * 2);
    const distances = new Float32Array(TOTAL_VERTICES);
    const channels = new Float32Array(TOTAL_VERTICES);

    // Precompute randomized hexagonal grid with 8-fold radial symmetry distance field
    const baseCoords: { x: number; y: number; dist: number }[] = [];
    for (let i = 0; i < NUM_POINTS; i++) {
      let x = (i % GRID_SIZE) - GRID_SIZE / 2;
      let y = Math.floor(i / GRID_SIZE) - GRID_SIZE / 2;

      // Hexagonal offset on alternating rows
      y += (i % 2) * 0.5;

      // Organic stochastic jitter
      x += (Math.random() - 0.5) * 0.3;
      y += (Math.random() - 0.5) * 0.3;

      // 8-fold radial cosine offset from origin
      const angle = Math.atan2(y, x);
      const dist = Math.sqrt(x * x + y * y) + Math.cos(angle * 8.0) * 0.5;

      baseCoords.push({ x, y, dist });
    }

    // Populate the 3 chromatic channels (0: Red, 1: Green, 2: Blue)
    let vertIdx = 0;
    for (let c = 0; c < 3; c++) {
      for (let i = 0; i < NUM_POINTS; i++) {
        const pt = baseCoords[i];
        positions[vertIdx * 2] = pt.x;
        positions[vertIdx * 2 + 1] = pt.y;
        distances[vertIdx] = pt.dist;
        channels[vertIdx] = c;
        vertIdx++;
      }
    }

    // VBO for positions
    const posBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);
    const aPosLoc = gl.getAttribLocation(program, 'a_initial_pos');
    gl.enableVertexAttribArray(aPosLoc);
    gl.vertexAttribPointer(aPosLoc, 2, gl.FLOAT, false, 0, 0);

    // VBO for distances
    const distBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, distBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, distances, gl.STATIC_DRAW);
    const aDistLoc = gl.getAttribLocation(program, 'a_dist');
    gl.enableVertexAttribArray(aDistLoc);
    gl.vertexAttribPointer(aDistLoc, 1, gl.FLOAT, false, 0, 0);

    // VBO for channels
    const channelBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, channelBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, channels, gl.STATIC_DRAW);
    const aChannelLoc = gl.getAttribLocation(program, 'a_channel');
    gl.enableVertexAttribArray(aChannelLoc);
    gl.vertexAttribPointer(aChannelLoc, 1, gl.FLOAT, false, 0, 0);

    // Uniform locations
    const uTimeLoc = gl.getUniformLocation(program, 'u_time');
    const uDtLoc = gl.getUniformLocation(program, 'u_dt');
    const uResLoc = gl.getUniformLocation(program, 'u_resolution');
    const uZoomLoc = gl.getUniformLocation(program, 'u_zoom');
    const uPointSizeLoc = gl.getUniformLocation(program, 'u_point_size');
    const uMouseLoc = gl.getUniformLocation(program, 'u_mouse');
    const uMouseFactorLoc = gl.getUniformLocation(program, 'u_mouse_factor');
    const uThemeLoc = gl.getUniformLocation(program, 'u_theme');
    const uOpacityLoc = gl.getUniformLocation(program, 'u_opacity');

    // Resize handling with devicePixelRatio
    const handleResize = () => {
      if (!canvas) return;
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const displayWidth = canvas.clientWidth;
      const displayHeight = canvas.clientHeight;

      if (canvas.width !== displayWidth * dpr || canvas.height !== displayHeight * dpr) {
        canvas.width = displayWidth * dpr;
        canvas.height = displayHeight * dpr;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    let startTime = performance.now();
    let isTabVisible = !document.hidden;

    const handleVisibilityChange = () => {
      isTabVisible = !document.hidden;
      if (isTabVisible) {
        startTime = performance.now() - (lastElapsed * 1000);
      }
    };
    document.addEventListener('visibilitychange', handleVisibilityChange);

    let lastElapsed = 0;

    const render = (now: number) => {
      if (!isTabVisible) {
        animFrameRef.current = requestAnimationFrame(render);
        return;
      }

      const elapsed = ((now - startTime) / 1000) * speed;
      lastElapsed = elapsed;

      // Mouse lerp smoothing
      const tm = targetMouseRef.current;
      const cm = currentMouseRef.current;
      cm.x += (tm.x - cm.x) * 0.05;
      cm.y += (tm.y - cm.y) * 0.05;

      const targetFactor = tm.active ? 1.0 : 0.0;
      cm.factor += (targetFactor - cm.factor) * 0.04;

      gl.clearColor(0, 0, 0, 0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.enable(gl.BLEND);
      if (theme === 'dark') {
        // Additive blending for dark mode: spectral channels merge to white
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE);
      } else {
        // Alpha blending for light mode: crisp dots with delicate chromatic aura
        gl.blendFunc(gl.SRC_ALPHA, gl.ONE_MINUS_SRC_ALPHA);
      }

      gl.uniform1f(uTimeLoc, elapsed);
      // Chromatic delay delta (0.028s delay produces optimal spectral fringing during peak acceleration)
      gl.uniform1f(uDtLoc, 0.028);
      gl.uniform2f(uResLoc, canvas.width, canvas.height);
      gl.uniform1f(uZoomLoc, 19.5);
      gl.uniform1f(uPointSizeLoc, pointSizeConfig);
      gl.uniform2f(uMouseLoc, cm.x, cm.y);
      gl.uniform1f(uMouseFactorLoc, cm.factor);
      gl.uniform1f(uThemeLoc, theme === 'dark' ? 1.0 : 0.0);
      gl.uniform1f(uOpacityLoc, opacityConfig);

      gl.drawArrays(gl.POINTS, 0, TOTAL_VERTICES);

      animFrameRef.current = requestAnimationFrame(render);
    };

    animFrameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', handleResize);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      if (animFrameRef.current) {
        cancelAnimationFrame(animFrameRef.current);
      }
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
      gl.deleteBuffer(posBuffer);
      gl.deleteBuffer(distBuffer);
      gl.deleteBuffer(channelBuffer);
    };
  }, [theme, enabled, intensity, speed, opacityConfig, pointSizeConfig]);

  if (!enabled) return null;

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        pointerEvents: 'none',
        zIndex: 0,
        opacity: 1,
        transition: 'opacity 0.3s ease',
        ...style,
      }}
      aria-hidden="true"
    />
  );
};

export default BreathingDotsBackground;
