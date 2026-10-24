import { useEffect, useRef } from "react";

// Vertex shader: spiral-galaxy particle system (exact match to reference site)
const VERTEX_SHADER = `
attribute vec4 seed;
uniform float progress,phase,aspect,density;
varying vec3 color;
varying float alpha;
const float TAU=6.2831853;
void main(){
 float r=pow(seed.x,.66);float a=seed.y*TAU;
 float expand=smoothstep(0.,.48,progress);float unfold=smoothstep(.32,1.,progress);
 vec3 cloud=vec3(cos(a)*sqrt(1.-pow(seed.z*2.-1.,2.)),seed.z*2.-1.,sin(a)*sqrt(1.-pow(seed.z*2.-1.,2.)))*r*1.45;
 float arm=floor(seed.y*4.)*TAU/4.;float spiral=arm+r*6.8+(seed.z-.5)*(.25+r*.6);
 vec3 galaxy=vec3(cos(spiral)*r*2.45,(seed.w-.5)*(.06+.25*(1.-r)),sin(spiral)*r*2.45);
 vec3 p=mix(cloud,galaxy,unfold)*mix(.009,1.,expand);
 float rotation=phase*.11+progress*.45;
 p.xz=mat2(cos(rotation),-sin(rotation),sin(rotation),cos(rotation))*p.xz;
 float tilt=mix(.25,.86,unfold);p.yz=mat2(cos(tilt),-sin(tilt),sin(tilt),cos(tilt))*p.yz;
 p+=vec3(sin(phase*.2+a),cos(phase*.17+a),0.)*.025*expand;
 bool star=seed.w>.94;
 if(star)p=vec3((seed.x-.5)*10.,(seed.y-.5)*7.,(seed.z-.5)*2.);
 float depth=4.8+p.z;vec2 screen=p.xy*2.4/depth;
 screen.x=screen.x/aspect+(aspect>1.? .39:0.);
 if(aspect<1.)screen.y-=.25;
 gl_Position=vec4(screen,0.,1.);
 gl_PointSize=star?density:clamp((1.2+seed.z*2.6)*density*3.8/depth,1.,8.);
 vec3 milk=vec3(.97,.96,.91);vec3 lime=vec3(.82,.93,.078);
 color=mix(milk,lime,step(.47,seed.z));
 color=mix(color,vec3(1.,.99,.95),(1.-r)*.6);
 alpha=star?.32:(.32+seed.x*.65)*mix(.055,1.,expand);
}`;

// Fragment shader: glowing point sprite
const FRAGMENT_SHADER = `
precision mediump float;
varying vec3 color;
varying float alpha;
void main(){
 float d=length(gl_PointCoord-.5)*2.;
 if(d>1.)discard;
 float glow=exp(-d*d*4.);
 gl_FragColor=vec4(color,alpha*glow);
}`;

// Spring-damper helper
function springStep(state, target, dt, stiffness, damping) {
  stiffness = stiffness || 145;
  damping = damping || 22;
  state.velocity += (stiffness * (target - state.value) - damping * state.velocity) * dt;
  state.value += state.velocity * dt;
  return state.value;
}

// Shared RAF loop registry
const rafSubscribers = new Set();
let rafId = 0;
let rafLast = 0;

function rafLoop(time) {
  rafId = 0;
  const dt = Math.min((time - (rafLast || time - 16)) / 1000, 0.032);
  rafLast = time;
  rafSubscribers.forEach((fn) => fn(time, dt));
  if (rafSubscribers.size && !document.hidden) rafId = requestAnimationFrame(rafLoop);
}

function rafStart() {
  if (!document.hidden && !rafId && rafSubscribers.size) {
    rafLast = 0;
    rafId = requestAnimationFrame(rafLoop);
  }
}

if (typeof document !== "undefined") {
  document.addEventListener("visibilitychange", () => {
    if (document.hidden) { cancelAnimationFrame(rafId); rafId = 0; rafLast = 0; }
    else rafStart();
  });
}

function rafSubscribe(fn) {
  rafSubscribers.add(fn);
  rafStart();
  return () => {
    rafSubscribers.delete(fn);
    if (!rafSubscribers.size) { cancelAnimationFrame(rafId); rafId = 0; rafLast = 0; }
  };
}

export default function GalaxyBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const voyageSection = document.querySelector(".galaxy-voyage");

    const gl = canvas.getContext("webgl", {
      alpha: true,
      antialias: false,
      powerPreference: "low-power",
    });
    if (!gl) return;

    function compileShader(type, source) {
      const shader = gl.createShader(type);
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        gl.deleteShader(shader);
        throw new Error("Galaxy shader compilation failed");
      }
      return shader;
    }

    let vs, fs;
    try {
      vs = compileShader(gl.VERTEX_SHADER, VERTEX_SHADER);
      fs = compileShader(gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    } catch (_e) { return; }

    const program = gl.createProgram();
    gl.attachShader(program, vs);
    gl.attachShader(program, fs);
    gl.linkProgram(program);
    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteShader(vs); gl.deleteShader(fs); gl.deleteProgram(program); return;
    }
    gl.useProgram(program);

    // Particle seed buffer using deterministic LCG RNG (matches reference site exactly)
    const PARTICLE_COUNT = matchMedia("(max-width: 760px)").matches ? 6500 : 19000;
    const seeds = new Float32Array(PARTICLE_COUNT * 4);
    let rng = 75219;
    for (let i = 0; i < seeds.length; i++) {
      rng = (rng * 1664525 + 1013904223) >>> 0;
      seeds[i] = rng / 4294967296;
    }

    const buf = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buf);
    gl.bufferData(gl.ARRAY_BUFFER, seeds, gl.STATIC_DRAW);

    const seedAttr = gl.getAttribLocation(program, "seed");
    gl.enableVertexAttribArray(seedAttr);
    gl.vertexAttribPointer(seedAttr, 4, gl.FLOAT, false, 0, 0);

    gl.enable(gl.BLEND);
    gl.blendFunc(gl.SRC_ALPHA, gl.ONE);

    const uProgress = gl.getUniformLocation(program, "progress");
    const uPhase    = gl.getUniformLocation(program, "phase");
    const uAspect   = gl.getUniformLocation(program, "aspect");
    const uDensity  = gl.getUniformLocation(program, "density");

    const prmq = matchMedia("(prefers-reduced-motion: reduce)");
    const progressState = { value: voyageSection ? 0 : 0.4, velocity: 0 };
    const phaseState    = { value: 0, velocity: 0 };
    let elapsed = 0;
    let unsubscribe = null;
    const voyageLabel = voyageSection && voyageSection.querySelector("[data-voyage-label]");
    let lastStage = -1;

    function render(_time, dt) {
      if (gl.isContextLost()) return;

      const voyage = document.querySelector(".galaxy-voyage");
      const label = document.querySelector("[data-voyage-label]");
      const totalDocScroll = Math.max(1, document.documentElement.scrollHeight - window.innerHeight);
      const docScrollRatio = Math.min(1, Math.max(0, window.scrollY / totalDocScroll));

      let targetProgress;
      if (voyage) {
        const rect = voyage.getBoundingClientRect();
        const scrollDist = Math.max(1, rect.height - window.innerHeight);
        targetProgress = Math.min(1, Math.max(0, -rect.top / scrollDist));
      } else {
        targetProgress = 0.85 + docScrollRatio * 0.15;
      }

      if (prmq.matches) {
        progressState.value = 1;
      } else {
        springStep(progressState, targetProgress, dt, 75, 18);
      }

      if (!prmq.matches) {
        elapsed += dt;
        // Continuous ambient rotation + smooth scroll-driven rotation across the whole site
        const targetPhase = elapsed + docScrollRatio * 3.5;
        springStep(phaseState, targetPhase, dt, 45, 14);
      }

      gl.uniform1f(uProgress, progressState.value);
      gl.uniform1f(uPhase,    phaseState.value);
      gl.uniform1f(uAspect,   canvas.clientWidth / canvas.clientHeight);
      gl.uniform1f(uDensity,  Math.min(devicePixelRatio, 1.7));

      gl.clear(gl.COLOR_BUFFER_BIT);
      gl.drawArrays(gl.POINTS, 0, PARTICLE_COUNT);

      if (label) {
        const stage = progressState.value < 0.22 ? 0 : progressState.value < 0.68 ? 1 : 2;
        if (stage !== lastStage) {
          lastStage = stage;
          label.textContent = ["01 / A POINT OF LIGHT", "02 / A LUMINOUS SWARM", "03 / A SPIRAL GALAXY"][stage];
        }
      }
    }

    function startAnimation() {
      if (unsubscribe) { unsubscribe(); unsubscribe = null; }
      if (prmq.matches) { render(0, 0.016); }
      else { unsubscribe = rafSubscribe(render); }
    }

    function resize() {
      const dpr = Math.min(devicePixelRatio, 1.7);
      canvas.width  = Math.round(canvas.clientWidth  * dpr);
      canvas.height = Math.round(canvas.clientHeight * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      if (prmq.matches) render(0, 0.016);
    }

    const ro = new ResizeObserver(resize);
    ro.observe(canvas);
    resize();
    startAnimation();
    prmq.addEventListener("change", startAnimation);

    function onContextLost(e) {
      e.preventDefault();
      if (unsubscribe) { unsubscribe(); unsubscribe = null; }
    }
    function onContextRestored() { canvas.style.opacity = "0"; }
    canvas.addEventListener("webglcontextlost", onContextLost);
    canvas.addEventListener("webglcontextrestored", onContextRestored);

    return () => {
      if (unsubscribe) unsubscribe();
      ro.disconnect();
      prmq.removeEventListener("change", startAnimation);
      canvas.removeEventListener("webglcontextlost", onContextLost);
      canvas.removeEventListener("webglcontextrestored", onContextRestored);
      gl.deleteBuffer(buf);
      gl.deleteProgram(program);
      gl.deleteShader(vs);
      gl.deleteShader(fs);
    };
  }, []);

  return (
    <div className="site-galaxy-background" aria-hidden="true">
      <canvas ref={canvasRef} className="galaxy-canvas" />
    </div>
  );
}
