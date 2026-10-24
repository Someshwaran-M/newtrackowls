import{r as e}from"./rolldown-runtime-C60lm6uB.js";import{i as t,r as n}from"./framework-D_rUT4EX.js";import{t as r}from"./index-B_u80oWy.js";var i=e(t(),1),a=new Set,o=0,s=0;function c(e){o=0;let t=Math.min((e-(s||e-16))/1e3,.032);s=e;for(let n of a)n(e,t);a.size&&!document.hidden&&(o=requestAnimationFrame(c))}function l(){!document.hidden&&!o&&a.size&&(s=0,o=requestAnimationFrame(c))}typeof document<`u`&&document.addEventListener(`visibilitychange`,()=>{document.hidden?(cancelAnimationFrame(o),o=0,s=0):l()});function u(e){return a.add(e),l(),()=>{a.delete(e),a.size||(cancelAnimationFrame(o),o=0,s=0)}}function d(e,t,n,r=145,i=22){return e.velocity+=(r*(t-e.value)-i*e.velocity)*n,e.value+=e.velocity*n,e.value}var f=n(),p=`
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
}`,m=`precision mediump float;varying vec3 color;varying float alpha;void main(){float d=length(gl_PointCoord-.5)*2.;if(d>1.)discard;float glow=exp(-d*d*4.);gl_FragColor=vec4(color,alpha*glow);}`;function h(){let e=(0,i.useRef)(null);return(0,i.useEffect)(()=>{let t=e.current;if(!t)return;let n=document.querySelector(`.galaxy-voyage`),r=t.getContext(`webgl`,{alpha:!0,antialias:!1,powerPreference:`low-power`});if(!r)return;let i=(e,t)=>{let n=r.createShader(e);if(r.shaderSource(n,t),r.compileShader(n),!r.getShaderParameter(n,r.COMPILE_STATUS))throw r.deleteShader(n),Error(`Galaxy shader compilation failed`);return n},a,o;try{a=i(r.VERTEX_SHADER,p),o=i(r.FRAGMENT_SHADER,m)}catch{return}let s=r.createProgram();if(r.attachShader(s,a),r.attachShader(s,o),r.linkProgram(s),!r.getProgramParameter(s,r.LINK_STATUS)){r.deleteShader(a),r.deleteShader(o),r.deleteProgram(s);return}r.useProgram(s);let c=r.createBuffer();r.bindBuffer(r.ARRAY_BUFFER,c);let l=matchMedia(`(max-width: 760px)`).matches?6500:19e3,f=new Float32Array(l*4),h=75219;for(let e=0;e<f.length;e++)h=h*1664525+1013904223>>>0,f[e]=h/4294967296;r.bufferData(r.ARRAY_BUFFER,f,r.STATIC_DRAW);let g=r.getAttribLocation(s,`seed`);r.enableVertexAttribArray(g),r.vertexAttribPointer(g,4,r.FLOAT,!1,0,0),r.enable(r.BLEND),r.blendFunc(r.SRC_ALPHA,r.ONE);let _={progress:r.getUniformLocation(s,`progress`),phase:r.getUniformLocation(s,`phase`),aspect:r.getUniformLocation(s,`aspect`),density:r.getUniformLocation(s,`density`)},v=matchMedia(`(prefers-reduced-motion: reduce)`),y={value:v.matches?1:n?0:.4,velocity:0},b={value:0,velocity:0},x=0,S=null,C=n?.querySelector(`[data-voyage-label]`),w=-1,T=(e,i)=>{if(r.isContextLost())return;let a=n?.getBoundingClientRect(),o=Math.min(1,Math.max(0,scrollY/Math.max(1,document.documentElement.scrollHeight-innerHeight))),s=v.matches?1:a?Math.min(1,Math.max(0,-a.top/Math.max(1,a.height-innerHeight))):.4+o*.6;v.matches?y.value=1:d(y,s,i,75,18),v.matches||(x+=i,d(b,x,i,45,14)),r.uniform1f(_.progress,y.value),r.uniform1f(_.phase,b.value),r.uniform1f(_.aspect,t.clientWidth/t.clientHeight),r.uniform1f(_.density,Math.min(devicePixelRatio,1.7)),r.clear(r.COLOR_BUFFER_BIT),r.drawArrays(r.POINTS,0,l);let c=y.value<.2?0:y.value<.65?1:2;C&&c!==w&&(w=c,C.textContent=[`01 / A POINT OF LIGHT`,`02 / A LUMINOUS SWARM`,`03 / A SPIRAL GALAXY`][c])},E=()=>{S?.(),S=null,v.matches?T(0,.016):S=u(T)},D=()=>{let e=Math.min(devicePixelRatio,1.7);t.width=Math.round(t.clientWidth*e),t.height=Math.round(t.clientHeight*e),r.viewport(0,0,t.width,t.height),v.matches&&T(0,.016)},O=new ResizeObserver(D);O.observe(t),D(),E(),v.addEventListener(`change`,E);let k=e=>{e.preventDefault(),S?.(),S=null},A=()=>{t.style.opacity=`0`};return t.addEventListener(`webglcontextlost`,k),t.addEventListener(`webglcontextrestored`,A),()=>{S?.(),O.disconnect(),v.removeEventListener(`change`,E),t.removeEventListener(`webglcontextlost`,k),t.removeEventListener(`webglcontextrestored`,A),r.deleteBuffer(c),r.deleteProgram(s),r.deleteShader(a),r.deleteShader(o)}},[r()]),(0,f.jsx)(`div`,{className:`site-galaxy-background`,"aria-hidden":`true`,children:(0,f.jsx)(`canvas`,{ref:e,className:`galaxy-canvas`})})}export{h as GalaxyVoyage};