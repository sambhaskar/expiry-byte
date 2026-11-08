// The home hero's 3D composition: browser windows, a phone, a tile and the brand mark.
// Ported from the old public/legacy.js; behaviour and keyframes are unchanged.
const clamp = (x, a = 0, b = 1) => Math.max(a, Math.min(b, x));
const lerp = (a, b, t) => a + (b - a) * t;

export function createHeroScene(THREE, host, stage, reduceMotion) {
  let renderer;
  try { renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'low-power' }); } catch { return null; }
  renderer.setPixelRatio(Math.min(devicePixelRatio, 1.6));
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1.3;
  renderer.setClearColor(0x000000, 0);
  host.append(renderer.domElement);

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(42, 1, 0.1, 100);
  camera.position.set(0, 0, 8);
  scene.add(new THREE.HemisphereLight(0xffffff, 0x141a3a, 2.2));
  const key = new THREE.DirectionalLight(0xffffff, 4); key.position.set(-3, 5, 6); scene.add(key);
  const fill = new THREE.DirectionalLight(0xb9c5ff, 3); fill.position.set(5, 1, 4); scene.add(fill);

  // A small generated studio environment gives soft reflections with no external asset.
  const ec = document.createElement('canvas'); ec.width = 1024; ec.height = 512;
  const ex = ec.getContext('2d');
  const eg = ex.createLinearGradient(0, 0, 0, 512);
  eg.addColorStop(0, '#FFFFFF'); eg.addColorStop(0.4, '#E1E6F2'); eg.addColorStop(0.7, '#2B4BFF'); eg.addColorStop(1, '#E1E6F2');
  ex.fillStyle = eg; ex.fillRect(0, 0, 1024, 512);
  ex.fillStyle = '#FFFFFF'; ex.fillRect(140, 50, 150, 220); ex.fillRect(590, 40, 250, 150);
  ex.fillStyle = '#141A3A'; ex.fillRect(420, 210, 70, 180);
  const env = new THREE.CanvasTexture(ec); env.mapping = THREE.EquirectangularReflectionMapping; env.colorSpace = THREE.SRGBColorSpace;
  const pmrem = new THREE.PMREMGenerator(renderer);
  scene.environment = pmrem.fromEquirectangular(env).texture; env.dispose(); pmrem.dispose();

  const root = new THREE.Group(); scene.add(root);
  const shape = (w, h, r) => {
    const s = new THREE.Shape(); const x = -w / 2; const y = -h / 2;
    s.moveTo(x + r, y); s.lineTo(x + w - r, y); s.quadraticCurveTo(x + w, y, x + w, y + r); s.lineTo(x + w, y + h - r);
    s.quadraticCurveTo(x + w, y + h, x + w - r, y + h); s.lineTo(x + r, y + h); s.quadraticCurveTo(x, y + h, x, y + h - r);
    s.lineTo(x, y + r); s.quadraticCurveTo(x, y, x + r, y); return s;
  };
  const plate = (w, h, r, depth, material) => new THREE.Mesh(new THREE.ExtrudeGeometry(shape(w, h, r), { depth, bevelEnabled: true, bevelSegments: 3, steps: 1, bevelSize: 0.025, bevelThickness: 0.025, curveSegments: 8 }), material);
  const metal = new THREE.MeshPhysicalMaterial({ color: 0xa7b0ca, metalness: 0.8, roughness: 0.24, clearcoat: 1 });
  const dark = new THREE.MeshStandardMaterial({ color: 0x141a3a, metalness: 0.45, roughness: 0.3 });

  function canvasTexture(kind, w = 1400, h = 950) {
    const c = document.createElement('canvas'); c.width = w; c.height = h; const x = c.getContext('2d');
    x.fillStyle = '#FFFFFF'; x.fillRect(0, 0, w, h);
    const text = (t, px, py, size = 30, color = '#0A0D1F', weight = 600) => { x.fillStyle = color; x.font = `${weight} ${size}px Poppins,Arial,sans-serif`; x.fillText(t, px, py); };
    const mark = (px, py, s = 1) => {
      x.fillStyle = '#0A0D1F'; x.beginPath(); x.moveTo(px + 8 * s, py + 8 * s); x.lineTo(px + 55 * s, py + 8 * s); x.lineTo(px + 55 * s, py + 20 * s);
      x.lineTo(px + 20 * s, py + 20 * s); x.lineTo(px + 20 * s, py + 44 * s); x.lineTo(px + 55 * s, py + 44 * s); x.lineTo(px + 55 * s, py + 56 * s);
      x.lineTo(px + 8 * s, py + 56 * s); x.closePath(); x.fill(); x.fillStyle = '#2B4BFF'; x.fillRect(px + 26 * s, py + 26 * s, 12 * s, 12 * s);
    };
    if (kind === 'main') {
      x.fillStyle = '#E1E6F2'; x.fillRect(0, 0, w, 70);
      ['#A7B0CA', '#A7B0CA', '#E1E6F2'].forEach((v, i) => { x.fillStyle = v; x.beginPath(); x.arc(36 + i * 26, 35, 7, 0, Math.PI * 2); x.fill(); });
      x.fillStyle = '#FFFFFF'; x.beginPath(); x.roundRect(280, 18, 810, 35, 8); x.fill(); text('experibyte.com', 585, 43, 18, '#59617F', 500);
      mark(65, 82, 1.15); text('experibyte', 155, 148, 36, '#0A0D1F', 800); text('DESIGN   /   DEVELOPMENT   /   MOTION', 755, 143, 16, '#59617F', 500);
      x.fillStyle = '#E1E6F2'; x.fillRect(65, 184, 1270, 1);
      text('MOVE PEOPLE.', 65, 350, 100, '#0A0D1F', 800); text('MOVE BUSINESS.', 65, 455, 100, '#2B4BFF', 800); text('Websites, motion, apps and AI.', 70, 530, 25, '#59617F', 500);
      x.fillStyle = '#0A0D1F'; x.beginPath(); x.roundRect(70, 590, 330, 70, 35); x.fill(); text('Start a Project  ↗', 100, 634, 22, '#FFFFFF', 600);
      x.fillStyle = '#E1E6F2'; x.fillRect(65, 770, 1270, 1); text('WEB · MOTION · APPS · AI', 70, 830, 19, '#59617F', 600);
    } else if (kind === 'tile') {
      text('From idea to launch', 65, 100, 35, '#59617F', 600); text('Design. Develop.', 65, 175, 51, '#0A0D1F', 700);
      [110, 170, 150, 220, 270, 335].forEach((v, i) => { x.fillStyle = i === 5 ? '#2B4BFF' : '#E1E6F2'; x.beginPath(); x.roundRect(70 + i * 145, 610 - v, 90, v, 14); x.fill(); });
    } else if (kind === 'phone') {
      mark(45, 62, 0.78); text('experibyte', 105, 120, 46, '#0A0D1F', 800); text('Move people.', 50, 240, 50, '#0A0D1F', 800);
      x.fillStyle = '#2B4BFF'; x.beginPath(); x.roundRect(45, 370, w - 90, 330, 25); x.fill();
      text('Websites', 75, 480, 66, '#FFFFFF', 800); text('Web Apps', 75, 560, 65, '#FFFFFF', 800); text('AI', 75, 640, 65, '#FFFFFF', 800);
      x.fillStyle = '#0A0D1F'; x.beginPath(); x.roundRect(45, 1010, w - 90, 75, 38); x.fill(); text('Start a Project ↗', 110, 1059, 28, '#FFFFFF', 600);
    } else {
      text('EXPERIBYTE', 70, 130, 26, '#59617F', 600); text('Experience', 70, 310, 100, '#0A0D1F', 800); text('meets technology.', 70, 420, 80, '#2B4BFF', 800);
    }
    const t = new THREE.CanvasTexture(c); t.colorSpace = THREE.SRGBColorSpace; t.anisotropy = Math.min(4, renderer.capabilities.getMaxAnisotropy()); return t;
  }
  function surface(w, h, r, texture) {
    const g = new THREE.ShapeGeometry(shape(w, h, r), 16); const pos = g.attributes.position; const uv = g.attributes.uv;
    for (let i = 0; i < pos.count; i++) uv.setXY(i, (pos.getX(i) + w / 2) / w, (pos.getY(i) + h / 2) / h);
    return new THREE.Mesh(g, new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide }));
  }
  function browser(w, h, kind) {
    const g = new THREE.Group(); g.add(plate(w, h, 0.12, 0.1, metal));
    const black = plate(w - 0.035, h - 0.035, 0.1, 0.025, dark); black.position.z = 0.105; g.add(black);
    const page = surface(w - 0.12, h - 0.12, 0.075, canvasTexture(kind)); page.position.z = 0.16; g.add(page); return g;
  }
  const back = browser(4.15, 2.88, 'back'); back.position.set(-0.22, 0.24, -0.38); root.add(back);
  const main = browser(4.3, 3, 'main'); root.add(main);
  const tile = new THREE.Group(); tile.add(plate(1.65, 1.3, 0.1, 0.035, new THREE.MeshPhysicalMaterial({ color: 0xf3f5fb, metalness: 0.25, roughness: 0.3 })));
  const tilePage = surface(1.59, 1.24, 0.07, canvasTexture('tile', 1000, 800)); tilePage.position.z = 0.065; tile.add(tilePage);
  tile.position.set(-1.58, -1.1, 0.6); tile.rotation.z = 0.1; root.add(tile);
  const phone = new THREE.Group(); phone.add(plate(0.96, 1.9, 0.13, 0.1, dark));
  const phoneScreen = surface(0.88, 1.77, 0.1, canvasTexture('phone', 500, 1150)); phoneScreen.position.z = 0.15; phone.add(phoneScreen);
  const speaker = new THREE.Mesh(new THREE.BoxGeometry(0.25, 0.045, 0.02), dark); speaker.position.set(0, 0.84, 0.175); phone.add(speaker);
  phone.position.set(2.02, -0.66, 0.43); phone.rotation.z = -0.12; root.add(phone);
  const glyph = new THREE.Shape(); glyph.moveTo(-0.45, -0.45); glyph.lineTo(0.45, -0.45); glyph.lineTo(0.45, -0.25); glyph.lineTo(-0.25, -0.25);
  glyph.lineTo(-0.25, 0.25); glyph.lineTo(0.45, 0.25); glyph.lineTo(0.45, 0.45); glyph.lineTo(-0.45, 0.45); glyph.closePath();
  const sculpture = new THREE.Group();
  sculpture.add(new THREE.Mesh(new THREE.ExtrudeGeometry(glyph, { depth: 0.18, bevelEnabled: true, bevelSegments: 3, bevelThickness: 0.025, bevelSize: 0.025 }), new THREE.MeshStandardMaterial({ color: 0x0a0d1f, metalness: 0.05, roughness: 0.8 })));
  const bytePixel = new THREE.Mesh(new THREE.BoxGeometry(0.18, 0.18, 0.21), new THREE.MeshBasicMaterial({ color: 0x2b4bff })); bytePixel.position.set(-0.02, 0, 0.17); sculpture.add(bytePixel);
  sculpture.position.set(1.22, 0.05, 0.8); sculpture.rotation.set(0.1, -0.15, 0.08); root.add(sculpture);
  const sc = document.createElement('canvas'); sc.width = 256; sc.height = 128; const sx = sc.getContext('2d'); const sg = sx.createRadialGradient(128, 64, 3, 128, 64, 110);
  sg.addColorStop(0, 'rgba(31,38,58,.22)'); sg.addColorStop(1, 'rgba(31,38,58,0)'); sx.fillStyle = sg; sx.fillRect(0, 0, 256, 128);
  const shadow = new THREE.Sprite(new THREE.SpriteMaterial({ map: new THREE.CanvasTexture(sc), transparent: true, depthWrite: false })); shadow.scale.set(5.8, 1.1, 1); shadow.position.set(2, -1.9, -0.9); scene.add(shadow);

  let width = 0; let height = 0; let visible = true; let lost = false; let progress = 0;
  const keyframes = [
    { t: 0, x: 2.9, y: 0.02, s: 0.9, rx: 0.12, ry: -0.37, rz: -0.09, e: 0 },
    { t: 0.32, x: 2.9, y: 0.02, s: 0.9, rx: 0.12, ry: -0.37, rz: -0.09, e: 0 },
    { t: 0.52, x: -3.1, y: -0.08, s: 0.78, rx: 0.17, ry: 0.3, rz: 0.05, e: 0.25 },
    { t: 1, x: -3.1, y: -0.08, s: 0.78, rx: 0.17, ry: 0.25, rz: 0.02, e: 0.25 },
  ];
  const sample = (p) => {
    let i = 0; while (i < keyframes.length - 2 && p > keyframes[i + 1].t) i++;
    const a = keyframes[i]; const b = keyframes[i + 1]; const raw = clamp((p - a.t) / (b.t - a.t)); const t = raw * raw * (3 - 2 * raw);
    const o = {}; for (const k of ['x', 'y', 's', 'rx', 'ry', 'rz', 'e']) o[k] = lerp(a[k], b[k], t); return o;
  };
  const draw = () => {
    if (lost || !visible || document.hidden) return;
    const p = reduceMotion.matches ? 0 : progress; const o = sample(p); const mobile = width < 900; let scale = o.s;
    if (mobile) {
      const vw = 2 * Math.tan(THREE.MathUtils.degToRad(21)) * 8 * width / height; const blend = clamp((p - 0.32) / 0.26);
      scale = vw * (width < 540 ? lerp(height < 740 ? 0.48 : 0.6, height < 740 ? 0.47 : 0.56, blend) : lerp(0.6, 0.56, blend)) / 4.3;
      root.position.set(lerp(width < 540 ? 0 : 0.4, -0.35, blend), lerp(height < 740 ? -0.1 : 0.05, height < 740 ? -0.2 : -0.1, blend), 0);
      root.rotation.set(o.rx * 0.55, o.ry * 0.6, o.rz * 0.7);
    } else {
      const ratio = Math.max(0.62, Math.min(1, width / (height * 2)) * (0.93 + 0.07 * clamp((height - 650) / 290)));
      scale *= ratio; root.position.set(o.x * ratio, o.y, 0); root.rotation.set(o.rx, o.ry, o.rz);
    }
    root.scale.setScalar(scale);
    back.position.set(-0.22 - o.e * 0.35, 0.24 + o.e * 0.4, -0.38 - o.e * 0.45);
    tile.position.set(-1.58 - o.e * 0.24, -1.1 - o.e * 0.2, 0.6 + o.e * 0.45);
    phone.position.set(2.02 + o.e * 0.18, -0.66 - o.e * 0.1, 0.43 + o.e * 0.3);
    sculpture.rotation.set(0.1 + p * 0.4, -0.15 + p * 0.8, 0.08 + p * 0.15); sculpture.position.z = 0.8 + o.e * 0.4;
    shadow.position.x = root.position.x; shadow.position.y = root.position.y - 1.88 * scale; shadow.scale.set(5.8 * scale, 1.1 * scale, 1); shadow.material.opacity = 1 - o.e * 0.3;
    renderer.render(scene, camera);
  };
  const resize = () => {
    const mobile = matchMedia('(max-width: 900px)').matches;
    width = mobile ? host.clientWidth : stage.clientWidth;
    height = mobile ? host.clientHeight : reduceMotion.matches ? Math.min(850, stage.clientHeight) : stage.clientHeight;
    if (!width || !height) return;
    renderer.setSize(width, height); camera.aspect = width / height; camera.updateProjectionMatrix(); draw();
  };
  const ro = new ResizeObserver(resize); ro.observe(stage); ro.observe(host);
  const io = new IntersectionObserver((entries) => { visible = entries[0].isIntersecting; if (visible) draw(); }); io.observe(stage);
  const onLost = (e) => { e.preventDefault(); lost = true; host.classList.remove('webgl-ready'); };
  const onRestored = () => { lost = false; host.classList.add('webgl-ready'); draw(); };
  renderer.domElement.addEventListener('webglcontextlost', onLost);
  renderer.domElement.addEventListener('webglcontextrestored', onRestored);
  document.addEventListener('visibilitychange', draw);
  resize(); host.classList.add('webgl-ready');

  return {
    setProgress(p) { progress = p; draw(); },
    destroy() {
      ro.disconnect(); io.disconnect(); document.removeEventListener('visibilitychange', draw);
      renderer.dispose(); renderer.domElement.remove(); host.classList.remove('webgl-ready');
    },
  };
}
