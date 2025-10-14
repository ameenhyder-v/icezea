"use client"

import { useEffect, useRef } from "react"

export default function PastelFlowShader() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const glRef = useRef<WebGL2RenderingContext | null>(null)
  const programRef = useRef<WebGLProgram | null>(null)
  const animationRef = useRef<number>()
  const startTimeRef = useRef<number>()
  const uniformsRef = useRef<any>({})
  const resizeScheduledRef = useRef<boolean>(false)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const gl = canvas.getContext("webgl2", { alpha: false, antialias: true })
    if (!gl) {
      console.error("WebGL2 not supported")
      return
    }
    glRef.current = gl

    const vertexShaderSource = `#version 300 es
    precision highp float;
    const vec2 verts[3] = vec2[3](vec2(-1.0,-1.0), vec2(3.0,-1.0), vec2(-1.0,3.0));
    out vec2 vPos;
    void main(){
      gl_Position = vec4(verts[gl_VertexID], 0.0, 1.0);
      vPos = verts[gl_VertexID];
    }`

    const fragmentShaderSource = `#version 300 es
    precision highp float;

    uniform vec2  u_resolution;
    uniform float u_time;
    uniform vec3  u_colors[4];

    out vec4 fragColor;

    mat2 rot(float a){ float s=sin(a), c=cos(a); return mat2(c,-s,s,c); }

    float hash(vec2 p){
      p = fract(p*vec2(123.34, 234.56));
      p += dot(p, p+34.45);
      return fract(p.x*p.y);
    }
    
    float noise(vec2 p){
      vec2 i=floor(p), f=fract(p);
      float a=hash(i);
      float b=hash(i+vec2(1.,0.));
      float c=hash(i+vec2(0.,1.));
      float d=hash(i+vec2(1.,1.));
      vec2 u = f*f*(3.0-2.0*f);
      return mix(mix(a,b,u.x), mix(c,d,u.x), u.y);
    }
    
    float fbm(vec2 p){
      float v=0., amp=0.5;
      for (int i=0;i<6;i++){
        v += amp*noise(p);
        p *= 2.0; amp *= 0.5;
      }
      return v;
    }

    vec3 palette(float t){
      float segs = 3.0;
      float x = clamp(t,0.0,1.0) * segs;
      float idx = floor(x);
      float f = x - idx;
      int i0 = int(idx);
      int i1 = min(i0+1, 3);
      return mix(u_colors[i0], u_colors[i1], smoothstep(0.0,1.0,f));
    }

    void main(){
      vec2 uv = (gl_FragCoord.xy / u_resolution) * 2.0 - 1.0;
      uv.x *= u_resolution.x / u_resolution.y;
      uv.y *= 0.7;

      float t = u_time * 0.5;

      float n1 = fbm(uv * 1.5 + vec2(t*0.1, t*0.08));
      float n2 = fbm(uv * 2.2 + vec2(-t*0.07, t*0.12));
      float n3 = fbm(uv * 2.8 + vec2(t*0.05, -t*0.09));
      
      vec2 warp1 = vec2(n1, n2) - 0.5;
      vec2 warp2 = vec2(n2, n3) - 0.5;
      
      uv += warp1 * 0.8;
      uv += warp2 * 0.4;

      vec2 p = uv;
      float r = length(p);
      float angle = atan(p.y, p.x);
      
      float base = 1.5 * (1.0 - smoothstep(0.0, 2.0, r));
      for (int i=0;i<8;i++){
        float a = base * (0.4 + float(i)/8.0) * sin(t * 0.3 + float(i));
        p = rot(a * r * (1.0 + sin(angle * 3.0 + t) * 0.2)) * p;
      }
      uv = p;

      float pattern = fbm(uv * 2.5 + t * 0.05);
      float flow1 = fbm(uv * 1.8 + t * 0.04);
      float flow2 = fbm(uv * 3.2 - t * 0.03);
      
      pattern = mix(pattern, flow1, 0.3);
      pattern = mix(pattern, flow2, 0.2);

      vec3 col1 = palette(pattern);
      vec3 col2 = palette(flow1 * 0.8 + 0.2);
      vec3 col3 = palette(flow2 * 0.6 + 0.4);
      
      vec3 col = mix(col1, col2, smoothstep(0.3, 0.7, pattern));
      col = mix(col, col3, smoothstep(0.1, 0.9, flow1) * 0.3);
      
      float highlight = pow(max(0.0, pattern - 0.6), 2.0) * 0.2;
      col += vec3(highlight);

      fragColor = vec4(col, 1.0);
    }`

    function compileShader(gl: WebGL2RenderingContext, type: number, source: string): WebGLShader {
      const shader = gl.createShader(type)!
      gl.shaderSource(shader, source)
      gl.compileShader(shader)
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        throw new Error(gl.getShaderInfoLog(shader) || "Shader compile error")
      }
      return shader
    }

    function createProgram(gl: WebGL2RenderingContext, vertexShader: WebGLShader, fragmentShader: WebGLShader): WebGLProgram {
      const program = gl.createProgram()!
      gl.attachShader(program, vertexShader)
      gl.attachShader(program, fragmentShader)
      gl.linkProgram(program)
      if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
        throw new Error(gl.getProgramInfoLog(program) || "Program link error")
      }
      return program
    }

    const vertexShader = compileShader(gl, gl.VERTEX_SHADER, vertexShaderSource)
    const fragmentShader = compileShader(gl, gl.FRAGMENT_SHADER, fragmentShaderSource)
    const program = createProgram(gl, vertexShader, fragmentShader)
    programRef.current = program

    const vao = gl.createVertexArray()
    gl.bindVertexArray(vao)

    const uniforms = {
      resolution: gl.getUniformLocation(program, "u_resolution"),
      time: gl.getUniformLocation(program, "u_time"),
      colors: gl.getUniformLocation(program, "u_colors[0]"),
    }
    uniformsRef.current = uniforms

    function cssColorToRGB(css: string): [number, number, number] {
      const ctx = document.createElement("canvas").getContext("2d")!
      ctx.fillStyle = css
      const computed = ctx.fillStyle
      const el = document.createElement("div")
      el.style.color = computed
      document.body.appendChild(el)
      const rgb = getComputedStyle(el).color
      document.body.removeChild(el)
      const m = rgb.match(/(\d+),\s*(\d+),\s*(\d+)/)
      if (!m) return [1, 1, 1]
      return [Number.parseInt(m[1]) / 255, Number.parseInt(m[2]) / 255, Number.parseInt(m[3]) / 255]
    }

    function resize() {
      if(!canvas || !gl) return
      const dpr = Math.max(1, Math.min(2, window.devicePixelRatio || 1))
      const rect = canvas.getBoundingClientRect()
      const w = Math.max(1, Math.floor(rect.width * dpr))
      const h = Math.max(1, Math.floor(rect.height * dpr))

      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      resizeScheduledRef.current = false
    }

    function scheduleResize() {
      if (!resizeScheduledRef.current) {
        resizeScheduledRef.current = true
        requestAnimationFrame(resize)
      }
    }

    const resizeObserver = new ResizeObserver(scheduleResize)
    resizeObserver.observe(canvas)

    startTimeRef.current = performance.now()

    const colors = ["#A2D5C6", "#CFFFE2", "#FFE5E5", "#FFD4E5"]
    const colorArray = colors.flatMap(cssColorToRGB)

    const animate = () => {
      if (!glRef.current || !programRef.current) return

      resize()
      const currentTime = (performance.now() - startTimeRef.current!) / 1000

      const glContext = glRef.current
      const shaderProgram = programRef.current
      const uniformLocations = uniformsRef.current

      glContext["useProgram"](shaderProgram)

      glContext.uniform2f(uniformLocations.resolution, canvas.width, canvas.height)
      glContext.uniform1f(uniformLocations.time, currentTime)
      glContext.uniform3fv(uniformLocations.colors, new Float32Array(colorArray))

      glContext.drawArrays(glContext.TRIANGLES, 0, 3)

      animationRef.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
      resizeObserver.disconnect()
      if (glRef.current && programRef.current) {
        glRef.current.deleteProgram(programRef.current)
      }
    }
  }, [])

  return <canvas ref={canvasRef} className="block w-full h-full" style={{ background: "#CFFFE2" }} />
}

export { PastelFlowShader }
