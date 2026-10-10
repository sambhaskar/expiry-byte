(()=>{
 'use strict';
 const $=(s,r=document)=>r.querySelector(s),$$=(s,r=document)=>[...r.querySelectorAll(s)];
 const media=matchMedia('(prefers-reduced-motion: reduce)');
 const state={p:0};let lenis=null,draw=()=>{},threeReady=false;
 const clamp=(x,a=0,b=1)=>Math.max(a,Math.min(b,x));
 const lerp=(a,b,t)=>a+(b-a)*t;
 const menu=$('#menu'),nav=$('#navigation');
 function closeMenu(){nav.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu')}
 $$('a[href^="#"]').forEach(a=>a.addEventListener('click',e=>{const target=$(a.getAttribute('href'));if(!target)return;e.preventDefault();closeMenu();if(lenis)lenis.scrollTo(target,{offset:-78,duration:1.25});else target.scrollIntoView({behavior:'auto'});history.replaceState(null,'',a.getAttribute('href'))}));
 // Keep all tab panels and form fields usable independently of animation.
 const tabs=$$('.tabs button'),panels=$$('.plans');$('.tabs').setAttribute('role','tablist');$('.tabs').setAttribute('aria-label','Service packages');
 function activateTab(button,focus=false){tabs.forEach(b=>{const on=b===button;b.classList.toggle('on',on);b.setAttribute('aria-selected',String(on));b.tabIndex=on?0:-1});panels.forEach(p=>{const on=p.id===button.dataset.t;p.classList.toggle('on',on);p.hidden=!on});if(focus)button.focus();window.ScrollTrigger?.refresh()}
 tabs.forEach((b,i)=>{b.id='tab-'+b.dataset.t;b.setAttribute('role','tab');b.setAttribute('aria-controls',b.dataset.t);b.setAttribute('aria-selected',String(i===0));b.tabIndex=i===0?0:-1;b.addEventListener('click',()=>activateTab(b));b.addEventListener('keydown',e=>{let next=i;if(e.key==='ArrowRight')next=(i+1)%tabs.length;else if(e.key==='ArrowLeft')next=(i-1+tabs.length)%tabs.length;else if(e.key==='Home')next=0;else if(e.key==='End')next=tabs.length-1;else return;e.preventDefault();activateTab(tabs[next],true)})});
 panels.forEach((p,i)=>{p.setAttribute('role','tabpanel');p.setAttribute('aria-labelledby','tab-'+p.id);p.hidden=i!==0});
 $$('details').forEach(d=>d.addEventListener('toggle',()=>window.ScrollTrigger?.refresh()));
 function initMotion(){
  if(!window.gsap||!window.ScrollTrigger){document.body.classList.add('no-animation');return}
  gsap.registerPlugin(ScrollTrigger);const mm=gsap.matchMedia();
  mm.add('(prefers-reduced-motion: no-preference)',()=>{
   if(window.Lenis){lenis=new Lenis({duration:1.1,smoothWheel:true,syncTouch:false,lerp:.095,wheelMultiplier:.85});lenis.on('scroll',ScrollTrigger.update);gsap.ticker.add(tickLenis)}
   const tl=gsap.timeline({defaults:{ease:'none'},scrollTrigger:{trigger:'.story',start:'top top',end:'bottom bottom',scrub:.7}});
   tl.to(state,{p:1,duration:1,onUpdate:()=>draw()},0)
    .to('.hero-panel',{autoAlpha:0,y:-75,duration:.11},.30)
    .fromTo('.story-promise',{autoAlpha:0,y:55},{autoAlpha:1,y:0,duration:.12},.52);
   $$('[data-reveal]').forEach(el=>gsap.from(el,{y:42,autoAlpha:0,duration:.9,ease:'power3.out',scrollTrigger:{trigger:el,start:'top 94%',toggleActions:'play none none none'}}));
   $$('.service-art').forEach(el=>gsap.fromTo(el.children,{y:20},{y:-18,ease:'none',scrollTrigger:{trigger:el,start:'top bottom',end:'bottom top',scrub:1}}));
   const mt=gsap.timeline({scrollTrigger:{trigger:'.motion-story',start:'top top',end:'bottom bottom',scrub:.5}});
   $$('.motion-line span').forEach((line,i)=>mt.fromTo(line,{opacity:.18,x:i%2?35:-35},{opacity:1,x:0,duration:.18,ease:'none'},i*.18));
   mt.to('.motion-flower',{rotation:95,scale:1.15,duration:1,ease:'none'},0);
   gsap.fromTo('.design-sheet',{rotationY:15,rotation:-10,y:35},{rotationY:-5,rotation:-3,y:-25,ease:'none',scrollTrigger:{trigger:'.design-visual',start:'top bottom',end:'bottom top',scrub:1}});
   gsap.fromTo('.code-sheet',{rotationY:-15,rotation:10,y:45},{rotationY:7,rotation:2,y:-25,ease:'none',scrollTrigger:{trigger:'.design-visual',start:'top bottom',end:'bottom top',scrub:1}});
   $$('.process-card').slice(0,-1).forEach(card=>gsap.to(card,{scale:.955,ease:'none',scrollTrigger:{trigger:card.nextElementSibling,start:'top 75%',end:'top 160px',scrub:true}}));
   gsap.to('.contact-spark',{rotation:100,ease:'none',scrollTrigger:{trigger:'#contact',start:'top bottom',end:'bottom bottom',scrub:1}});
   return()=>{gsap.ticker.remove(tickLenis);lenis?.destroy();lenis=null;state.p=0;draw()};
  });
  function tickLenis(t){lenis?.raf(t*1000)}
  gsap.to('#progress',{scaleX:1,ease:'none',scrollTrigger:{start:0,end:'max',scrub:true}});
  document.fonts.ready.then(()=>ScrollTrigger.refresh());
 }
 function initThree(){
  if(!window.THREE)return;
  const host=$('#three-stage'),stage=$('.story-stage');let renderer;
  try{renderer=new THREE.WebGLRenderer({alpha:true,antialias:true,powerPreference:'low-power'})}catch{return}
  renderer.setPixelRatio(Math.min(devicePixelRatio,1.6));renderer.outputColorSpace=THREE.SRGBColorSpace;renderer.toneMapping=THREE.ACESFilmicToneMapping;renderer.toneMappingExposure=1.3;renderer.setClearColor(0x000000,0);host.append(renderer.domElement);
  const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera(42,1,.1,100);camera.position.set(0,0,8);
  scene.add(new THREE.HemisphereLight(0xffffff,0x141A3A,2.2));const key=new THREE.DirectionalLight(0xffffff,4);key.position.set(-3,5,6);scene.add(key);const fill=new THREE.DirectionalLight(0xB9C5FF,3);fill.position.set(5,1,4);scene.add(fill);
  // A small generated studio environment provides soft reflections with no external asset.
  const ec=document.createElement('canvas');ec.width=1024;ec.height=512;const ex=ec.getContext('2d');ex.fillStyle='#A7B0CA';ex.fillRect(0,0,1024,512);const eg=ex.createLinearGradient(0,0,0,512);eg.addColorStop(0,'#FFFFFF');eg.addColorStop(.4,'#E1E6F2');eg.addColorStop(.7,'#2B4BFF');eg.addColorStop(1,'#E1E6F2');ex.fillStyle=eg;ex.fillRect(0,0,1024,512);ex.fillStyle='#FFFFFF';ex.fillRect(140,50,150,220);ex.fillRect(590,40,250,150);ex.fillStyle='#141A3A';ex.fillRect(420,210,70,180);const env=new THREE.CanvasTexture(ec);env.mapping=THREE.EquirectangularReflectionMapping;env.colorSpace=THREE.SRGBColorSpace;const pmrem=new THREE.PMREMGenerator(renderer);scene.environment=pmrem.fromEquirectangular(env).texture;env.dispose();pmrem.dispose();
  const root=new THREE.Group();scene.add(root);
  function shape(w,h,r){const s=new THREE.Shape();const x=-w/2,y=-h/2;s.moveTo(x+r,y);s.lineTo(x+w-r,y);s.quadraticCurveTo(x+w,y,x+w,y+r);s.lineTo(x+w,y+h-r);s.quadraticCurveTo(x+w,y+h,x+w-r,y+h);s.lineTo(x+r,y+h);s.quadraticCurveTo(x,y+h,x,y+h-r);s.lineTo(x,y+r);s.quadraticCurveTo(x,y,x+r,y);return s}
  function plate(w,h,r,depth,material){const geo=new THREE.ExtrudeGeometry(shape(w,h,r),{depth,bevelEnabled:true,bevelSegments:3,steps:1,bevelSize:.025,bevelThickness:.025,curveSegments:8});return new THREE.Mesh(geo,material)}
  const metal=new THREE.MeshPhysicalMaterial({color:0xA7B0CA,metalness:.8,roughness:.24,clearcoat:1});const dark=new THREE.MeshStandardMaterial({color:0x141A3A,metalness:.45,roughness:.3});
  function canvasTexture(kind,w=1400,h=950){const c=document.createElement('canvas');c.width=w;c.height=h;const x=c.getContext('2d');x.fillStyle=kind==='back'?'#FFFFFF':kind==='phone'?'#FFFFFF':kind==='tile'?'#FFFFFF':'#FFFFFF';x.fillRect(0,0,w,h);
   const text=(t,px,py,size=30,color='#0A0D1F',weight=600)=>{x.fillStyle=color;x.font=`${weight} ${size}px "Plus Jakarta Sans",Manrope,Arial,sans-serif`;x.fillText(t,px,py)};
   const drawBrandMark=(px,py,scale=1)=>{x.fillStyle='#0A0D1F';x.beginPath();x.moveTo(px+8*scale,py+8*scale);x.lineTo(px+55*scale,py+8*scale);x.lineTo(px+55*scale,py+20*scale);x.lineTo(px+20*scale,py+20*scale);x.lineTo(px+20*scale,py+44*scale);x.lineTo(px+55*scale,py+44*scale);x.lineTo(px+55*scale,py+56*scale);x.lineTo(px+8*scale,py+56*scale);x.closePath();x.fill();x.fillStyle='#2B4BFF';x.fillRect(px+26*scale,py+26*scale,12*scale,12*scale)};
   if(kind==='main'){
    x.fillStyle='#E1E6F2';x.fillRect(0,0,w,70);['#A7B0CA','#A7B0CA','#E1E6F2'].forEach((v,i)=>{x.fillStyle=v;x.beginPath();x.arc(36+i*26,35,7,0,Math.PI*2);x.fill()});x.fillStyle='#FFFFFF';x.beginPath();x.roundRect(280,18,810,35,8);x.fill();text('experibyte.in',585,43,18,'#59617F',500);
    drawBrandMark(65,82,1.15);text('experibyte',155,148,36,'#0A0D1F',800);text('DESIGN   /   DEVELOPMENT   /   MOTION',755,143,16,'#59617F',500);x.fillStyle='#E1E6F2';x.fillRect(65,184,1270,1);
    text('LOOK SHARP.',65,350,107,'#0A0D1F',800);text('LOAD FAST.',65,455,107,'#2B4BFF',800);text('Websites, motion, apps and AI.',70,530,25,'#59617F',500);
    x.fillStyle='#0A0D1F';x.beginPath();x.roundRect(70,590,310,70,35);x.fill();text('Get a quote  ↗',100,634,22,'#FFFFFF',600);
    x.fillStyle='#E1E6F2';x.fillRect(65,770,1270,1);text('WEB · MOTION · APPS · AI',70,830,19,'#59617F',600);text('Fixed written quote · Pay only after you approve',810,830,17,'#59617F',500);
   }else if(kind==='tile'){
    text('From idea to launch in 4 steps',65,100,35,'#59617F',600);text('3. Website or app',65,175,51,'#0A0D1F',700);const heights=[110,170,150,220,270,335];heights.forEach((v,i)=>{x.fillStyle=i===5?'#2B4BFF':'#FFFFFF';x.beginPath();x.roundRect(70+i*145,610-v,90,v,14);x.fill()});text("A live preview link shows your website as it's built",65,730,20,'#59617F',500);
   }else if(kind==='phone'){
    drawBrandMark(45,62,.78);text('experibyte',105,120,46,'#0A0D1F',800);text('Look sharp.',50,240,54,'#0A0D1F',800);text('Load fast.',50,303,54,'#2B4BFF',800);x.fillStyle='#2B4BFF';x.beginPath();x.roundRect(45,370,w-90,330,25);x.fill();text('Websites',75,480,66,'#FFFFFF',800);text('Web Apps',75,560,65,'#FFFFFF',800);text('SEO',75,640,65,'#FFFFFF',800);for(let i=0;i<3;i++){x.fillStyle='#E1E6F2';x.beginPath();x.roundRect(45,760+i*60,w-90-i*55,14,7);x.fill()}x.fillStyle='#0A0D1F';x.beginPath();x.roundRect(45,1010,w-90,75,38);x.fill();text('Get a quote  ↗',130,1059,28,'#FFFFFF',600);
   }else{ text('EXPERIBYTE',70,130,26,'#59617F',600);text('Look sharp.',70,310,100,'#0A0D1F',800);text('Load fast.',70,420,100,'#2B4BFF',800);x.fillStyle='#E1E6F2';x.fillRect(70,510,w-140,230); }
   const t=new THREE.CanvasTexture(c);t.colorSpace=THREE.SRGBColorSpace;t.anisotropy=Math.min(4,renderer.capabilities.getMaxAnisotropy());return t;
  }
  function surface(w,h,r,texture){const g=new THREE.ShapeGeometry(shape(w,h,r),16),pos=g.attributes.position,uv=g.attributes.uv;for(let i=0;i<pos.count;i++)uv.setXY(i,(pos.getX(i)+w/2)/w,(pos.getY(i)+h/2)/h);const m=new THREE.MeshBasicMaterial({map:texture,side:THREE.DoubleSide});return new THREE.Mesh(g,m)}
  function browser(w,h,kind){const g=new THREE.Group();const body=plate(w,h,.12,.10,metal);g.add(body);const black=plate(w-.035,h-.035,.1,.025,dark);black.position.z=.105;g.add(black);const page=surface(w-.12,h-.12,.075,canvasTexture(kind));page.position.z=.16;g.add(page);return g}
  const back=browser(4.15,2.88,'back');back.position.set(-.22,.24,-.38);root.add(back);
  const main=browser(4.3,3,'main');root.add(main);
  const tile=new THREE.Group();tile.add(plate(1.65,1.30,.1,.035,new THREE.MeshPhysicalMaterial({color:0xF3F5FB,metalness:.25,roughness:.3})));const tilePage=surface(1.59,1.24,.07,canvasTexture('tile',1000,800));tilePage.position.z=.065;tile.add(tilePage);tile.position.set(-1.58,-1.10,.6);tile.rotation.z=.10;root.add(tile);
  const phone=new THREE.Group();phone.add(plate(.96,1.9,.13,.10,dark));const phoneScreen=surface(.88,1.77,.1,canvasTexture('phone',500,1150));phoneScreen.position.z=.15;phone.add(phoneScreen);const speaker=new THREE.Mesh(new THREE.BoxGeometry(.25,.045,.02),dark);speaker.position.set(0,.84,.175);phone.add(speaker);phone.position.set(2.02,-.66,.43);phone.rotation.z=-.12;root.add(phone);
  const glyph=new THREE.Shape();glyph.moveTo(-.45,-.45);glyph.lineTo(.45,-.45);glyph.lineTo(.45,-.25);glyph.lineTo(-.25,-.25);glyph.lineTo(-.25,.25);glyph.lineTo(.45,.25);glyph.lineTo(.45,.45);glyph.lineTo(-.45,.45);glyph.closePath();
  const sculpture=new THREE.Group();sculpture.add(new THREE.Mesh(new THREE.ExtrudeGeometry(glyph,{depth:.18,bevelEnabled:true,bevelSegments:3,bevelThickness:.025,bevelSize:.025}),new THREE.MeshStandardMaterial({color:0x0A0D1F,metalness:.05,roughness:.8})));
  const bytePixel=new THREE.Mesh(new THREE.BoxGeometry(.18,.18,.21),new THREE.MeshBasicMaterial({color:0x2B4BFF}));bytePixel.position.set(-.02,0,.17);sculpture.add(bytePixel);sculpture.position.set(1.22,.05,.8);sculpture.rotation.set(.1,-.15,.08);root.add(sculpture);
  // Soft contact shadow, generated locally rather than downloaded.
  const sc=document.createElement('canvas');sc.width=256;sc.height=128;const sx=sc.getContext('2d'),sg=sx.createRadialGradient(128,64,3,128,64,110);sg.addColorStop(0,'rgba(31,38,58,.22)');sg.addColorStop(1,'rgba(31,38,58,0)');sx.fillStyle=sg;sx.fillRect(0,0,256,128);const shadow=new THREE.Sprite(new THREE.SpriteMaterial({map:new THREE.CanvasTexture(sc),transparent:true,depthWrite:false}));shadow.scale.set(5.8,1.1,1);shadow.position.set(2,-1.9,-.9);scene.add(shadow);
  let width=0,height=0,visible=true,lost=false;
  const keyframes=[{t:0,x:3.20,y:.02,s:.74,rx:.12,ry:-.37,rz:-.09,e:0},{t:.32,x:3.20,y:.02,s:.74,rx:.12,ry:-.37,rz:-.09,e:0},{t:.52,x:-3.45,y:-.08,s:.64,rx:.17,ry:.30,rz:.05,e:.25},{t:1,x:-3.45,y:-.08,s:.64,rx:.17,ry:.25,rz:.02,e:.25}];
  function sample(p){let i=0;while(i<keyframes.length-2&&p>keyframes[i+1].t)i++;const a=keyframes[i],b=keyframes[i+1];const raw=clamp((p-a.t)/(b.t-a.t)),t=raw*raw*(3-2*raw);const o={};for(const k of ['x','y','s','rx','ry','rz','e'])o[k]=lerp(a[k],b[k],t);return o}
  draw=()=>{if(lost||!visible||document.hidden)return;const p=media.matches?0:state.p,o=sample(p);const mobile=width<900;let scale=o.s;
   if(mobile){const vw=2*Math.tan(THREE.MathUtils.degToRad(21))*8*width/height;const promiseBlend=clamp((p-.32)/.26);scale=vw*(width<540?lerp(height<740?.48:.60,height<740?.47:.56,promiseBlend):lerp(.60,.56,promiseBlend))/4.3;const mobileY=lerp(height<740?-.10:.05,height<740?-.20:-.10,promiseBlend);root.position.set(lerp(width<540?0:.4,-.35,promiseBlend),mobileY,0);root.rotation.set(o.rx*.55,o.ry*.6,o.rz*.7)}else{const viewportShape=Math.min(1,width/(height*2));const heightFactor=.93+.07*clamp((height-650)/290);const desktopRatio=Math.max(.62,viewportShape*heightFactor);scale*=desktopRatio;root.position.set(o.x*desktopRatio,o.y,0);root.rotation.set(o.rx,o.ry,o.rz)}
   root.scale.setScalar(scale);back.position.set(-.22-o.e*.35,.24+o.e*.40,-.38-o.e*.45);tile.position.set(-1.58-o.e*.24,-1.1-o.e*.20,.60+o.e*.45);phone.position.set(2.02+o.e*.18,-.66-o.e*.1,.43+o.e*.3);sculpture.rotation.set(.1+p*.4,-.15+p*.8,.08+p*.15);sculpture.position.z=.8+o.e*.4;
   shadow.position.x=root.position.x;shadow.position.y=root.position.y-1.88*scale;shadow.scale.set(5.8*scale,1.1*scale,1);shadow.material.opacity=1-o.e*.3;
   renderer.render(scene,camera);$$('.story-dots i').forEach((d,i)=>d.classList.toggle('active',i===(p<.48?0:1)));
  };
  function resize(){width=stage.clientWidth;height=media.matches?Math.min(850,stage.clientHeight):stage.clientHeight;renderer.setSize(width,height);camera.aspect=width/height;camera.updateProjectionMatrix();draw()}
  const ro=new ResizeObserver(resize);ro.observe(stage);const io=new IntersectionObserver(entries=>{visible=entries[0].isIntersecting;if(visible)draw()});io.observe(stage);
  renderer.domElement.addEventListener('webglcontextlost',e=>{e.preventDefault();lost=true;host.classList.remove('webgl-ready')});renderer.domElement.addEventListener('webglcontextrestored',()=>{lost=false;host.classList.add('webgl-ready');draw()});
  document.addEventListener('visibilitychange',()=>draw());media.addEventListener('change',()=>{state.p=0;resize()});resize();host.classList.add('webgl-ready');threeReady=true;
 }
 initMotion();
 // Build the hero textures after available fonts are ready so text matches the page.
 document.fonts.ready.then(()=>{try{initThree()}catch(error){console.warn('3D fallback enabled:',error.message)}});
 if(!window.gsap)document.body.classList.add('no-animation');
})();
