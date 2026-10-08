import{j as e,r as l,a as s,i as a,R as u,b as m,P as f,c as h,d as x}from"../chunks/chunk-_4i898Gl.js";import{U as y}from"../chunks/chunk-BTtE8iXS.js";/* empty css                      */const d="jahesh",g=[{id:"jAWQK3_7D18H_5v0pK0z4"},{id:"mONS0so-VrF1uS9rPlVcF",maxWidth:991},{id:"zGIdqUzdPde7sHmF0aRQP",maxWidth:767},{id:"wP-rcJFENR2yn86VzREAn",maxWidth:479}],v="94c366ff-340e-4766-ac1b-ee884eadf859-md_KC00oqQO2FVhMn5gq1Af4.jpeg",b=["Inter-VariableFont_opsz_wght_5pWJ31-T_iPEwHdXmYt6P.ttf"],w=[],E=n=>e.jsx("body",{className:"w-element",children:e.jsx(y,{executeScriptOnCanvas:!0,clientOnly:!0,code:`


   <meta charset="UTF-8">
   <meta name="viewport" content="width=device-width, initial-scale=1.0">
   <title>Lumina | Holographic Neural Architect</title>
   <script src="https://cdn.tailwindcss.com"><\/script>
   <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js"><\/script>
   <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/controls/OrbitControls.js"><\/script>
   <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/EffectComposer.js"><\/script>
   <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/RenderPass.js"><\/script>
   <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/ShaderPass.js"><\/script>
   <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/postprocessing/UnrealBloomPass.js"><\/script>
   <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/CopyShader.js"><\/script>
   <script src="https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/shaders/LuminosityHighPassShader.js"><\/script>
   
   <style>
       @import url('https://fonts.googleapis.com/css2?family=Rajdhani:wght@300;500;700&display=swap');
       
       body {
           margin: 0;
           overflow: hidden;
           font-family: 'Rajdhani', sans-serif;
           background: #050508;
       }
       
       .glass-panel {
           background: rgba(10, 10, 20, 0.6);
           backdrop-filter: blur(12px);
           -webkit-backdrop-filter: blur(12px);
           border: 1px solid rgba(100, 200, 255, 0.1);
           box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.37);
       }
       
       .neon-border {
           position: relative;
       }
       
       .neon-border::before {
           content: '';
           position: absolute;
           top: -1px;
           left: -1px;
           right: -1px;
           bottom: -1px;
           background: linear-gradient(45deg, #00f5ff, #ff00e4, #00f5ff);
           border-radius: inherit;
           z-index: -1;
           opacity: 0;
           transition: opacity 0.3s ease;
       }
       
       .neon-border:hover::before {
           opacity: 1;
           animation: rotate 3s linear infinite;
       }
       
       @keyframes rotate {
           0% { filter: hue-rotate(0deg); }
           100% { filter: hue-rotate(360deg); }
       }
       
       .holo-text {
           background: linear-gradient(90deg, #00f5ff, #ffffff, #00f5ff);
           background-size: 200% auto;
           -webkit-background-clip: text;
           -webkit-text-fill-color: transparent;
           animation: shine 3s linear infinite;
       }
       
       @keyframes shine {
           to { background-position: 200% center; }
       }
       
       #canvas-container {
           width: 100vw;
           height: 100vh;
           position: fixed;
           top: 0;
           left: 0;
           z-index: 0;
       }
       
       .ui-layer {
           position: relative;
           z-index: 10;
           pointer-events: none;
       }
       
       .ui-layer > * {
           pointer-events: auto;
       }
       
       .node-input {
           background: rgba(0, 20, 40, 0.8);
           border: 1px solid rgba(0, 245, 255, 0.3);
           color: #00f5ff;
           transition: all 0.3s ease;
       }
       
       .node-input:focus {
           outline: none;
           border-color: #00f5ff;
           box-shadow: 0 0 20px rgba(0, 245, 255, 0.3);
       }
       
       .slider-thumb::-webkit-slider-thumb {
           -webkit-appearance: none;
           appearance: none;
           width: 15px;
           height: 15px;
           background: #00f5ff;
           cursor: pointer;
           border-radius: 50%;
           box-shadow: 0 0 10px rgba(0, 245, 255, 0.8);
       }
       
       .data-packet {
           position: absolute;
           width: 4px;
           height: 4px;
           background: #00f5ff;
           border-radius: 50%;
           box-shadow: 0 0 10px #00f5ff;
           pointer-events: none;
       }
       
       .scramble-text {
           font-family: monospace;
       }
   </style>



   <!-- 3D Canvas -->
   <div id="canvas-container"></div>

   <!-- UI Overlay -->
   <div class="ui-layer w-full h-screen flex flex-col justify-between p-6">
       
       <!-- Header -->
       <div class="flex justify-between items-start">
           <div class="glass-panel rounded-lg p-6 max-w-md neon-border">
               <h1 class="text-4xl font-bold holo-text mb-2">LUMINA</h1>
               <p class="text-cyan-200 text-sm tracking-widest uppercase opacity-80">Neural Topology Architect v2.0</p>
               <div class="mt-4 flex gap-2 text-xs text-cyan-400">
                   <span class="flex items-center gap-1">
                       <div class="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></div>
                       GPU Accelerated
                   </span>
                   <span class="flex items-center gap-1">
                       <div class="w-2 h-2 rounded-full bg-purple-400 animate-pulse" style="animation-delay: 0.5s"></div>
                       WebGL 2.0
                   </span>
               </div>
           </div>

           <!-- Quick Stats -->
           <div class="glass-panel rounded-lg p-4 flex gap-6 text-cyan-100 text-sm">
               <div class="text-center">
                   <div class="text-2xl font-bold text-cyan-400" id="node-count">0</div>
                   <div class="text-xs uppercase tracking-wider opacity-70">Nodes</div>
               </div>
               <div class="text-center">
                   <div class="text-2xl font-bold text-purple-400" id="param-count">0</div>
                   <div class="text-xs uppercase tracking-wider opacity-70">Parameters</div>
               </div>
               <div class="text-center">
                   <div class="text-2xl font-bold text-pink-400" id="flop-count">0</div>
                   <div class="text-xs uppercase tracking-wider opacity-70">FLOPs</div>
               </div>
           </div>
       </div>

       <!-- Properties Panel (Right Side) -->
       <div class="absolute right-6 top-32 w-80 glass-panel rounded-lg p-6 transform transition-transform duration-300 translate-x-0" id="properties-panel">
           <h2 class="text-xl font-bold text-cyan-300 mb-4 border-b border-cyan-500/30 pb-2">Node Properties</h2>
           
           <div id="node-editor" class="space-y-4">
               <div class="text-cyan-100/50 text-sm italic text-center py-8">
                   Select a node to edit properties<br>
                   <span class="text-xs">Double-click to select</span>
               </div>
           </div>
       </div>

       <!-- Toolbar (Bottom) -->
       <div class="glass-panel rounded-full px-8 py-4 mx-auto mb-8 flex items-center gap-6">
           <button onclick="addLayer('input')" class="group relative px-6 py-2 rounded-full border border-cyan-500/30 hover:border-cyan-400 transition-all duration-300">
               <span class="text-cyan-300 group-hover:text-white transition-colors">+ Input Layer</span>
               <div class="absolute inset-0 rounded-full bg-cyan-500/10 blur-xl group-hover:bg-cyan-500/20 transition-all"></div>
           </button>
           
           <button onclick="addLayer('dense')" class="group relative px-6 py-2 rounded-full border border-purple-500/30 hover:border-purple-400 transition-all duration-300">
               <span class="text-purple-300 group-hover:text-white transition-colors">+ Dense</span>
               <div class="absolute inset-0 rounded-full bg-purple-500/10 blur-xl group-hover:bg-purple-500/20 transition-all"></div>
           </button>
           
           <button onclick="addLayer('conv2d')" class="group relative px-6 py-2 rounded-full border border-pink-500/30 hover:border-pink-400 transition-all duration-300">
               <span class="text-pink-300 group-hover:text-white transition-colors">+ Conv2D</span>
               <div class="absolute inset-0 rounded-full bg-pink-500/10 blur-xl group-hover:bg-pink-500/20 transition-all"></div>
           </button>
           
           <button onclick="addLayer('dropout')" class="group relative px-6 py-2 rounded-full border border-yellow-500/30 hover:border-yellow-400 transition-all duration-300">
               <span class="text-yellow-300 group-hover:text-white transition-colors">+ Dropout</span>
               <div class="absolute inset-0 rounded-full bg-yellow-500/10 blur-xl group-hover:bg-yellow-500/20 transition-all"></div>
           </button>
           
           <button onclick="addLayer('output')" class="group relative px-6 py-2 rounded-full border border-green-500/30 hover:border-green-400 transition-all duration-300">
               <span class="text-green-300 group-hover:text-white transition-colors">+ Output</span>
               <div class="absolute inset-0 rounded-full bg-green-500/10 blur-xl group-hover:bg-green-500/20 transition-all"></div>
           </button>
           
           <div class="w-px h-8 bg-cyan-500/30 mx-2"></div>
           
           <button onclick="exportCode()" class="group relative px-6 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 transition-all duration-300 shadow-lg shadow-cyan-500/30">
               <span class="text-white font-bold">Export Python</span>
           </button>
           
           <button onclick="clearScene()" class="group relative px-6 py-2 rounded-full border border-red-500/30 hover:border-red-400 transition-all duration-300">
               <span class="text-red-300 group-hover:text-white transition-colors">Clear</span>
           </button>
       </div>
   </div>

   <!-- Export Modal -->
   <div id="export-modal" class="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 hidden flex items-center justify-center">
       <div class="glass-panel rounded-lg p-8 max-w-2xl w-full mx-4 neon-border">
           <h2 class="text-2xl font-bold text-cyan-300 mb-4">Generated PyTorch Code</h2>
           <pre id="code-output" class="bg-black/50 rounded-lg p-4 text-cyan-100 font-mono text-sm overflow-x-auto max-h-96 overflow-y-auto border border-cyan-500/20"></pre>
           <div class="mt-6 flex justify-end gap-4">
               <button onclick="closeModal()" class="px-6 py-2 rounded-lg border border-cyan-500/30 text-cyan-300 hover:bg-cyan-500/10 transition-all">Close</button>
               <button onclick="copyCode()" class="px-6 py-2 rounded-lg bg-cyan-600 text-white hover:bg-cyan-500 transition-all">Copy to Clipboard</button>
           </div>
       </div>
   </div>

   <script>
       // Scene Setup
       let scene, camera, renderer, composer, controls;
       let nodes = [];
       let connections = [];
       let selectedNode = null;
       let raycaster = new THREE.Raycaster();
       let mouse = new THREE.Vector2();
       
       const colors = {
           input: 0x00f5ff,
           dense: 0xff00e4,
           conv2d: 0xffd700,
           dropout: 0xff6b6b,
           output: 0x00ff88,
           connection: 0x44aaff
       };

       const typeNames = {
           input: 'Input Layer',
           dense: 'Dense',
           conv2d: 'Conv2D',
           dropout: 'Dropout',
           output: 'Output Layer'
       };

       init();
       animate();

       function init() {
           const container = document.getElementById('canvas-container');
           
           // Scene
           scene = new THREE.Scene();
           scene.fog = new THREE.FogExp2(0x050508, 0.02);
           
           // Camera
           camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
           camera.position.set(0, 20, 40);
           
           // Renderer
           renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
           renderer.setSize(window.innerWidth, window.innerHeight);
           renderer.setPixelRatio(window.devicePixelRatio);
           renderer.toneMapping = THREE.ReinhardToneMapping;
           container.appendChild(renderer.domElement);
           
           // Post Processing (Bloom)
           const renderScene = new THREE.RenderPass(scene, camera);
           
           const bloomPass = new THREE.UnrealBloomPass(
               new THREE.Vector2(window.innerWidth, window.innerHeight),
               1.5,
               0.4,
               0.85
           );
           bloomPass.threshold = 0;
           bloomPass.strength = 1.2;
           bloomPass.radius = 0.5;
           
           composer = new THREE.EffectComposer(renderer);
           composer.addPass(renderScene);
           composer.addPass(bloomPass);
           
           // Controls
           controls = new THREE.OrbitControls(camera, renderer.domElement);
           controls.enableDamping = true;
           controls.dampingFactor = 0.05;
           controls.maxDistance = 100;
           controls.minDistance = 10;
           
           // Grid Helper (Holographic)
           const gridHelper = new THREE.GridHelper(100, 50, 0x00f5ff, 0x112244);
           gridHelper.position.y = -5;
           gridHelper.material.opacity = 0.2;
           gridHelper.material.transparent = true;
           scene.add(gridHelper);
           
           // Lighting
           const ambientLight = new THREE.AmbientLight(0x404040, 2);
           scene.add(ambientLight);
           
           const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
           directionalLight.position.set(10, 20, 10);
           scene.add(directionalLight);
           
           // Particles Background
           createParticles();
           
           // Event Listeners
           window.addEventListener('resize', onWindowResize, false);
           renderer.domElement.addEventListener('dblclick', onDoubleClick, false);
           renderer.domElement.addEventListener('mousemove', onMouseMove, false);
           
           // Add initial layers
           addLayer('input', 0, 10, 0);
           addLayer('dense', 0, 0, 0);
           addLayer('output', 0, -10, 0);
           updateConnections();
       }

       function createParticles() {
           const geometry = new THREE.BufferGeometry();
           const vertices = [];
           
           for (let i = 0; i < 1000; i++) {
               vertices.push(
                   THREE.MathUtils.randFloatSpread(100),
                   THREE.MathUtils.randFloatSpread(100),
                   THREE.MathUtils.randFloatSpread(100)
               );
           }
           
           geometry.setAttribute('position', new THREE.Float32BufferAttribute(vertices, 3));
           
           const material = new THREE.PointsMaterial({
               color: 0x00f5ff,
               size: 0.1,
               transparent: true,
               opacity: 0.6,
               blending: THREE.AdditiveBlending
           });
           
           const particles = new THREE.Points(geometry, material);
           scene.add(particles);
       }

       function createNeuronGeometry(type) {
           let geometry;
           
           switch(type) {
               case 'input':
               case 'output':
                   geometry = new THREE.IcosahedronGeometry(1, 1);
                   break;
               case 'dense':
                   geometry = new THREE.OctahedronGeometry(1.2, 0);
                   break;
               case 'conv2d':
                   geometry = new THREE.BoxGeometry(1.5, 0.3, 1.5);
                   break;
               case 'dropout':
                   geometry = new THREE.TorusGeometry(0.8, 0.3, 8, 20);
                   break;
               default:
                   geometry = new THREE.SphereGeometry(1, 32, 32);
           }
           
           return geometry;
       }

       function addLayer(type, x, y, z) {
           const id = nodes.length;
           const posX = x !== undefined ? x : (nodes.length * 5) - 10;
           const posY = y !== undefined ? y : 0;
           const posZ = z !== undefined ? z : 0;
           
           const geometry = createNeuronGeometry(type);
           const material = new THREE.MeshBasicMaterial({
               color: colors[type],
               transparent: true,
               opacity: 0.8,
               wireframe: false
           });
           
           const mesh = new THREE.Mesh(geometry, material);
           mesh.position.set(posX, posY, posZ);
           
           // Add glow effect (second mesh with wireframe)
           const glowGeometry = geometry.clone();
           const glowMaterial = new THREE.MeshBasicMaterial({
               color: colors[type],
               transparent: true,
               opacity: 0.2,
               wireframe: true
           });
           const glowMesh = new THREE.Mesh(glowGeometry, glowMaterial);
           glowMesh.scale.set(1.5, 1.5, 1.5);
           mesh.add(glowMesh);
           
           // Add label
           const canvas = document.createElement('canvas');
           const context = canvas.getContext('2d');
           canvas.width = 256;
           canvas.height = 64;
           context.font = 'Bold 24px Arial';
           context.fillStyle = 'rgba(0, 245, 255, 1)';
           context.textAlign = 'center';
           context.fillText(\`\${typeNames[type]} \${id}\`, 128, 40);
           
           const texture = new THREE.CanvasTexture(canvas);
           const spriteMaterial = new THREE.SpriteMaterial({ map: texture });
           const sprite = new THREE.Sprite(spriteMaterial);
           sprite.position.y = 2;
           sprite.scale.set(4, 1, 1);
           mesh.add(sprite);
           
           mesh.userData = {
               id: id,
               type: type,
               units: type === 'input' ? 784 : (type === 'output' ? 10 : 128),
               activation: type === 'output' ? 'softmax' : 'relu',
               rate: type === 'dropout' ? 0.5 : 0,
               position: { x: posX, y: posY, z: posZ }
           };
           
           scene.add(mesh);
           nodes.push(mesh);
           
           // Animate entry
           mesh.scale.set(0, 0, 0);
           let scale = 0;
           const animateEntry = () => {
               if (scale < 1) {
                   scale += 0.05;
                   mesh.scale.set(scale, scale, scale);
                   requestAnimationFrame(animateEntry);
               }
           };
           animateEntry();
           
           updateConnections();
           updateStats();
       }

       function updateConnections() {
           // Remove old connections
           connections.forEach(conn => {
               scene.remove(conn.line);
               if (conn.particles) {
                   conn.particles.forEach(p => scene.remove(p));
               }
           });
           connections = [];
           
           // Create new connections
           for (let i = 0; i < nodes.length - 1; i++) {
               const start = nodes[i].position;
               const end = nodes[i + 1].position;
               
               const points = [start, end];
               const geometry = new THREE.BufferGeometry().setFromPoints(points);
               const material = new THREE.LineBasicMaterial({
                   color: colors.connection,
                   transparent: true,
                   opacity: 0.3
               });
               
               const line = new THREE.Line(geometry, material);
               scene.add(line);
               
               // Data packets animation
               const packetGeometry = new THREE.SphereGeometry(0.2, 8, 8);
               const packetMaterial = new THREE.MeshBasicMaterial({
                   color: colors.connection,
                   emissive: colors.connection,
                   emissiveIntensity: 2
               });
               
               const packet = new THREE.Mesh(packetGeometry, packetMaterial);
               scene.add(packet);
               
               connections.push({
                   line: line,
                   packet: packet,
                   start: start,
                   end: end,
                   progress: Math.random()
               });
           }
       }

       function animatePackets() {
           connections.forEach(conn => {
               conn.progress += 0.01;
               if (conn.progress > 1) conn.progress = 0;
               
               conn.packet.position.lerpVectors(
                   conn.start,
                   conn.end,
                   conn.progress
               );
           });
       }

       function onDoubleClick(event) {
           mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
           mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
           
           raycaster.setFromCamera(mouse, camera);
           const intersects = raycaster.intersectObjects(nodes);
           
           if (intersects.length > 0) {
               selectNode(intersects[0].object);
           } else {
               deselectNode();
           }
       }

       function onMouseMove(event) {
           mouse.x = (event.clientX / window.innerWidth) * 2 - 1;
           mouse.y = -(event.clientY / window.innerHeight) * 2 + 1;
           
           raycaster.setFromCamera(mouse, camera);
           const intersects = raycaster.intersectObjects(nodes);
           
           document.body.style.cursor = intersects.length > 0 ? 'pointer' : 'default';
       }

       function selectNode(node) {
           selectedNode = node;
           
           // Highlight selected
           nodes.forEach(n => {
               n.material.emissive = new THREE.Color(0x000000);
               n.material.emissiveIntensity = 0;
           });
           
           node.material.emissive = new THREE.Color(colors[node.userData.type]);
           node.material.emissiveIntensity = 0.5;
           
           const editor = document.getElementById('node-editor');
           const type = node.userData.type;
           
           let html = \`
               <div class="space-y-4">
                   <div class="flex justify-between items-center">
                       <span class="text-cyan-400 text-sm font-bold uppercase tracking-wider">Type</span>
                       <span class="text-white font-mono">\${typeNames[type]}</span>
                   </div>
                   <div class="flex justify-between items-center">
                       <span class="text-cyan-400 text-sm font-bold uppercase tracking-wider">ID</span>
                       <span class="text-white font-mono">#\${node.userData.id}</span>
                   </div>
           \`;
           
           if (type !== 'dropout') {
               html += \`
                   <div>
                       <label class="text-cyan-400 text-xs uppercase tracking-wider block mb-2">Units / Neurons</label>
                       <input type="number" id="units-input" value="\${node.userData.units}" 
                           class="node-input w-full p-3 rounded-lg font-mono"
                           onchange="updateNodeProperty('units', this.value)">
                   </div>
               \`;
               
               if (type !== 'input') {
                   html += \`
                       <div>
                           <label class="text-cyan-400 text-xs uppercase tracking-wider block mb-2">Activation Function</label>
                           <select id="activation-input" onchange="updateNodeProperty('activation', this.value)"
                               class="node-input w-full p-3 rounded-lg font-mono bg-transparent">
                               <option value="relu" \${node.userData.activation === 'relu' ? 'selected' : ''}>ReLU</option>
                               <option value="sigmoid" \${node.userData.activation === 'sigmoid' ? 'selected' : ''}>Sigmoid</option>
                               <option value="tanh" \${node.userData.activation === 'tanh' ? 'selected' : ''}>Tanh</option>
                               <option value="softmax" \${node.userData.activation === 'softmax' ? 'selected' : ''}>Softmax</option>
                               <option value="linear" \${node.userData.activation === 'linear' ? 'selected' : ''}>Linear</option>
                           </select>
                       </div>
                   \`;
               }
           } else {
               html += \`
                   <div>
                       <label class="text-cyan-400 text-xs uppercase tracking-wider block mb-2">Dropout Rate</label>
                       <input type="range" id="rate-input" min="0" max="1" step="0.1" value="\${node.userData.rate}"
                           class="w-full h-2 bg-cyan-900 rounded-lg appearance-none cursor-pointer slider-thumb"
                           oninput="updateNodeProperty('rate', this.value); document.getElementById('rate-value').textContent = this.value">
                       <div class="text-right text-cyan-400 font-mono mt-1" id="rate-value">\${node.userData.rate}</div>
                   </div>
               \`;
           }
           
           html += \`
                   <div>
                       <label class="text-cyan-400 text-xs uppercase tracking-wider block mb-2">Position Y</label>
                       <input type="range" min="-20" max="20" step="1" value="\${node.position.y}"
                           class="w-full h-2 bg-cyan-900 rounded-lg appearance-none cursor-pointer slider-thumb"
                           oninput="updateNodePosition(this.value)">
                   </div>
                   <button onclick="deleteNode()" class="w-full py-2 mt-4 rounded-lg border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-all text-sm uppercase tracking-wider">
                       Delete Node
                   </button>
               </div>
           \`;
           
           editor.innerHTML = html;
       }

       function deselectNode() {
           selectedNode = null;
           nodes.forEach(n => {
               n.material.emissive = new THREE.Color(0x000000);
               n.material.emissiveIntensity = 0;
           });
           
           document.getElementById('node-editor').innerHTML = \`
               <div class="text-cyan-100/50 text-sm italic text-center py-8">
                   Select a node to edit properties<br>
                   <span class="text-xs">Double-click to select</span>
               </div>
           \`;
       }

       function updateNodeProperty(prop, value) {
           if (!selectedNode) return;
           
           if (prop === 'units') {
               selectedNode.userData.units = parseInt(value);
           } else if (prop === 'activation') {
               selectedNode.userData.activation = value;
           } else if (prop === 'rate') {
               selectedNode.userData.rate = parseFloat(value);
           }
           
           updateStats();
       }

       function updateNodePosition(y) {
           if (!selectedNode) return;
           selectedNode.position.y = parseFloat(y);
           selectedNode.userData.position.y = parseFloat(y);
           updateConnections();
       }

       function deleteNode() {
           if (!selectedNode) return;
           
           const index = nodes.indexOf(selectedNode);
           if (index > -1) {
               scene.remove(selectedNode);
               nodes.splice(index, 1);
               
               // Reassign IDs
               nodes.forEach((node, i) => {
                   node.userData.id = i;
               });
               
               deselectNode();
               updateConnections();
               updateStats();
           }
       }

       function updateStats() {
           document.getElementById('node-count').textContent = nodes.length;
           
           let params = 0;
           let flops = 0;
           
           for (let i = 0; i < nodes.length; i++) {
               const node = nodes[i];
               if (i > 0) {
                   const prevUnits = nodes[i-1].userData.units || 0;
                   const currUnits = node.userData.units || 0;
                   
                   if (node.userData.type === 'dense' || node.userData.type === 'output') {
                       params += (prevUnits * currUnits) + currUnits;
                       flops += (prevUnits * currUnits);
                   }
               }
           }
           
           document.getElementById('param-count').textContent = params > 1000000 ? 
               (params/1000000).toFixed(2) + 'M' : 
               (params/1000).toFixed(1) + 'K';
           document.getElementById('flop-count').textContent = flops > 1000000 ? 
               (flops/1000000).toFixed(2) + 'M' : 
               flops;
       }

       function clearScene() {
           nodes.forEach(node => scene.remove(node));
           nodes = [];
           updateConnections();
           updateStats();
           deselectNode();
       }

       function exportCode() {
           let code = \`import torch\\nimport torch.nn as nn\\n\\nclass NeuralNetwork(nn.Module):\\n    def __init__(self):\\n        super(NeuralNetwork, self).__init__()\\n\`;
           
           let forwardCode = \`\\n    def forward(self, x):\\n\`;
           let layerIndex = 0;
           
           for (let i = 0; i < nodes.length; i++) {
               const node = nodes[i];
               const type = node.userData.type;
               
               if (type === 'input') continue;
               
               if (type === 'dense' || type === 'output') {
                   const prevUnits = i > 0 ? nodes[i-1].userData.units : 784;
                   const units = node.userData.units;
                   const activation = node.userData.activation;
                   
                   code += \`        self.fc\${layerIndex} = nn.Linear(\${prevUnits}, \${units})\\n\`;
                   
                   if (activation === 'relu') {
                       forwardCode += \`        x = torch.relu(self.fc\${layerIndex}(x))\\n\`;
                   } else if (activation === 'sigmoid') {
                       forwardCode += \`        x = torch.sigmoid(self.fc\${layerIndex}(x))\\n\`;
                   } else if (activation === 'tanh') {
                       forwardCode += \`        x = torch.tanh(self.fc\${layerIndex}(x))\\n\`;
                   } else if (activation === 'softmax') {
                       forwardCode += \`        x = torch.softmax(self.fc\${layerIndex}(x), dim=1)\\n\`;
                   } else {
                       forwardCode += \`        x = self.fc\${layerIndex}(x)\\n\`;
                   }
                   
                   layerIndex++;
               } else if (type === 'dropout') {
                   code += \`        self.dropout\${layerIndex} = nn.Dropout(\${node.userData.rate})\\n\`;
                   forwardCode += \`        x = self.dropout\${layerIndex}(x)\\n\`;
                   layerIndex++;
               }
           }
           
           code += forwardCode;
           code += \`        return x\\n\\n# Initialize model\\nmodel = NeuralNetwork()\\nprint(model)\`;
           
           document.getElementById('code-output').textContent = code;
           document.getElementById('export-modal').classList.remove('hidden');
       }

       function closeModal() {
           document.getElementById('export-modal').classList.add('hidden');
       }

       function copyCode() {
           const code = document.getElementById('code-output').textContent;
           navigator.clipboard.writeText(code);
           
           const btn = event.target;
           const originalText = btn.textContent;
           btn.textContent = 'Copied!';
           btn.classList.add('bg-green-600');
           setTimeout(() => {
               btn.textContent = originalText;
               btn.classList.remove('bg-green-600');
           }, 2000);
       }

       function onWindowResize() {
           camera.aspect = window.innerWidth / window.innerHeight;
           camera.updateProjectionMatrix();
           renderer.setSize(window.innerWidth, window.innerHeight);
           composer.setSize(window.innerWidth, window.innerHeight);
       }

       function animate() {
           requestAnimationFrame(animate);
           
           controls.update();
           animatePackets();
           
           // Rotate nodes slowly
           nodes.forEach((node, i) => {
               node.rotation.y += 0.005;
               node.rotation.x += 0.002;
               
               // Floating animation
               node.position.y += Math.sin(Date.now() * 0.001 + i) * 0.01;
           });
           
           composer.render();
       }

       // Scramble text effect for title
       class TextScramble {
           constructor(el) {
               this.el = el;
               this.chars = '!<>-_\\\\/[]{}—=+*^?#________';
               this.update = this.update.bind(this);
           }
           setText(newText) {
               const oldText = this.el.innerText;
               const length = Math.max(oldText.length, newText.length);
               const promise = new Promise((resolve) => this.resolve = resolve);
               this.queue = [];
               for (let i = 0; i < length; i++) {
                   const from = oldText[i] || '';
                   const to = newText[i] || '';
                   const start = Math.floor(Math.random() * 40);
                   const end = start + Math.floor(Math.random() * 40);
                   this.queue.push({ from, to, start, end });
               }
               cancelAnimationFrame(this.frameRequest);
               this.frame = 0;
               this.update();
               return promise;
           }
           update() {
               let output = '';
               let complete = 0;
               for (let i = 0, n = this.queue.length; i < n; i++) {
                   let { from, to, start, end, char } = this.queue[i];
                   if (this.frame >= end) {
                       complete++;
                       output += to;
                   } else if (this.frame >= start) {
                       if (!char || Math.random() < 0.28) {
                           char = this.randomChar();
                           this.queue[i].char = char;
                       }
                       output += \`<span class="text-cyan-600">\${char}</span>\`;
                   } else {
                       output += from;
                   }
               }
               this.el.innerHTML = output;
               if (complete === this.queue.length) {
                   this.resolve();
               } else {
                   this.frameRequest = requestAnimationFrame(this.update);
                   this.frame++;
               }
           }
           randomChar() {
               return this.chars[Math.floor(Math.random() * this.chars.length)];
           }
       }

       // Initialize scramble effect
       window.addEventListener('load', () => {
           const el = document.querySelector('.scramble-text');
           if (el) {
               const fx = new TextScramble(el);
               let counter = 0;
               const next = () => {
                   fx.setText('NEURAL ARCHITECT').then(() => {
                       setTimeout(next, 5000);
                   });
                   counter = (counter + 1) % 2;
               };
               next();
           }
       });
   <\/script>


`,className:"w-html-embed"})}),T=n=>{const{origin:t,pathname:r,search:o}=new URL(n);return`${t}${r}${o}`},k=l.memo(({pageKey:n,system:t})=>e.jsx(E,{system:t},n),(n,t)=>n.pageKey===t.pageKey),R=({data:n})=>{const{system:t,resources:r,url:o,pageMeta:i}=n,c=T(o),p=l.useMemo(()=>({imageLoader:a,assetBaseUrl:s,resources:r,breakpoints:g,onError:console.error}),[r]);return e.jsxs(u.Provider,{value:p,children:[e.jsx(m.Provider,{value:o,children:e.jsx(k,{pageKey:c,system:t})}),e.jsx(f,{url:o,pageMeta:i,siteName:d,imageLoader:a,assetBaseUrl:s}),e.jsx(h,{children:i.title})]})},H=Object.freeze(Object.defineProperty({__proto__:null,default:R},Symbol.toStringTag,{value:"Module"})),P=({})=>{const n={"@context":"https://schema.org","@type":"WebSite",name:d};return e.jsxs(e.Fragment,{children:[e.jsx("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify(n,null,2)}}),e.jsx("link",{rel:"icon",href:a({src:`${s}${v}`})}),b.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"font",crossOrigin:"anonymous"},t)),w.map(t=>e.jsx("link",{rel:"preload",href:`${s}${t}`,as:"image"},t))]})},C=Object.freeze(Object.defineProperty({__proto__:null,Head:P},Symbol.toStringTag,{value:"Module"})),D={isClientRuntimeLoaded:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:!0}},onBeforeRenderEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:null}},dataEnv:{type:"computed",definedAtData:null,valueSerialized:{type:"js-serialized",value:{server:!0}}},onRenderClient:{type:"standard",definedAtData:{filePathToShowToUser:"/renderer/+onRenderClient.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:x}},Page:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-18/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Page.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:H}},Head:{type:"standard",definedAtData:{filePathToShowToUser:"/pages/copy-18/copy-1/copy-1/copy-2/copy-59/copy-2/copy-1/copy-1/copy-32/copy-15/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/copy-1/untitled37/+Head.tsx",fileExportPathToShowToUser:[]},valueSerialized:{type:"plus-file",exportValues:C}}};export{D as configValuesSerialized};
