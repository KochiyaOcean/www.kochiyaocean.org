export default function (container) {

  function getRatio (target) {
    try {
      const { height, width } = target.getClientRects()[0]
      return width / height
    } catch (e) {
      return 2  
    }
  }

  const MESH = {
      width: 1.8,
      height: 1.8,
      depth: 20,
      segments: Math.ceil(getRatio(container) * 8),
      slices: 8,
      xRange: 0.5,
      yRange: 0.5,
      zRange: 0.7,
      ambient: '#6A6A6A',
      diffuse: '#FFFFFF',
      speed: 0.0001
    };

  //------------------------------
  // Light Properties
  //------------------------------
  const LIGHT = {
    count: 1,
    xyScalar: 0.5,
    zOffset: 150,
    ambient: '#2196F3',
    diffuse: '#2196F3',
    speed: 0.0001,
    gravity: 100,
    dampening: 0.95,
    minLimit: 10,
    maxLimit: null,
    minDistance: 300,
    maxDistance: 400,
    autopilot: true,
    draw: false,
    bounds: FSS.Vector3.create(),
    step: FSS.Vector3.create(
      Math.randomInRange(0.2, 1.2),
      Math.randomInRange(0.2, 1.2),
      Math.randomInRange(0.2, 1.2)
    )
  };

  //------------------------------
  // Render Properties
  //------------------------------

  const RENDER = {
    renderer: 'canvas'
  };

  //------------------------------
  // Global Properties
  //------------------------------
  let now;

  const start = Date.now();
  const center = FSS.Vector3.create();
  const attractor = FSS.Vector3.create();
  let renderer;
  let scene;
  let mesh;
  let geometry;
  let material;
  let canvasRenderer;
  let gui;
  let autopilotController;

  //------------------------------
  // Methods
  //------------------------------
  function initialise() {
    createRenderer();
    createScene();
    createMesh();
    createLights();
    addEventListeners();
    resize(container.offsetWidth, container.offsetHeight);
    animate();
  }

  function createRenderer() {
    canvasRenderer = new FSS.CanvasRenderer();
    setRenderer(RENDER.renderer);
  }

  function setRenderer(index) {
    if (renderer) {
      container.removeChild(renderer.element);
    }
    renderer = canvasRenderer;
    renderer.setSize(container.offsetWidth, container.offsetHeight);
    container.appendChild(renderer.element);
  }

  function createScene() {
    scene = new FSS.Scene();
  }

  function createMesh() {
    scene.remove(mesh);
    renderer.clear();
    geometry = new FSS.Plane(MESH.width * renderer.width, MESH.height * renderer.height, MESH.segments, MESH.slices);
    material = new FSS.Material(MESH.ambient, MESH.diffuse);
    mesh = new FSS.Mesh(geometry, material);
    scene.add(mesh);

    // Augment vertices for animation
    let v;

    let vertex;
    for (v = geometry.vertices.length - 1; v >= 0; v--) {
      vertex = geometry.vertices[v];
      vertex.anchor = FSS.Vector3.clone(vertex.position);
      vertex.step = FSS.Vector3.create(
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0),
        Math.randomInRange(0.2, 1.0)
      );
      vertex.time = Math.randomInRange(0, Math.PIM2);
    }
  }

  function createLights() {
    let l;
    let light;
    for (l = scene.lights.length - 1; l >= 0; l--) {
      light = scene.lights[l];
      scene.remove(light);
    }
    renderer.clear();
    for (l = 0; l < LIGHT.count; l++) {
      light = new FSS.Light(LIGHT.ambient, LIGHT.diffuse);
      light.ambientHex = light.ambient.format();
      light.diffuseHex = light.diffuse.format();
      scene.add(light);

      // Augment light for animation
      light.mass = Math.randomInRange(0.5, 1);
      light.velocity = FSS.Vector3.create();
      light.acceleration = FSS.Vector3.create();
      light.force = FSS.Vector3.create();

      // Ring SVG Circle
      light.ring = document.createElementNS(FSS.SVGNS, 'circle');
      light.ring.setAttributeNS(null, 'stroke', light.ambientHex);
      light.ring.setAttributeNS(null, 'stroke-width', '0.5');
      light.ring.setAttributeNS(null, 'fill', 'none');
      light.ring.setAttributeNS(null, 'r', '10');

      // Core SVG Circle
      light.core = document.createElementNS(FSS.SVGNS, 'circle');
      light.core.setAttributeNS(null, 'fill', light.diffuseHex);
      light.core.setAttributeNS(null, 'r', '4');
    }
  }

  function resize(width, height) {
    MESH.segments = Math.ceil(getRatio(container) * 8)
    renderer.setSize(width, height);
    FSS.Vector3.set(center, renderer.halfWidth, renderer.halfHeight);
    createMesh();
  }

  function animate() {
    now = Date.now() - start;
    update();
    render();
    requestAnimationFrame(animate);
  }

  function update() {
    let ox;
    let oy;
    let oz;
    let l;
    let light;
    let v;
    let vertex;
    const offset = MESH.depth/2;

    // Update Bounds
    FSS.Vector3.copy(LIGHT.bounds, center);
    FSS.Vector3.multiplyScalar(LIGHT.bounds, LIGHT.xyScalar);

    // Update Attractor
    FSS.Vector3.setZ(attractor, LIGHT.zOffset);

    // Overwrite the Attractor position
    if (LIGHT.autopilot) {
      ox = Math.sin(LIGHT.step[0] * now * LIGHT.speed);
      oy = Math.cos(LIGHT.step[1] * now * LIGHT.speed);
      FSS.Vector3.set(attractor,
        LIGHT.bounds[0]*ox,
        LIGHT.bounds[1]*oy,
        LIGHT.zOffset);
    }

    // Animate Lights
    for (l = scene.lights.length - 1; l >= 0; l--) {
      light = scene.lights[l];

      // Reset the z position of the light
      FSS.Vector3.setZ(light.position, LIGHT.zOffset);

      // Calculate the force Luke!
      const D = Math.clamp(FSS.Vector3.distanceSquared(light.position, attractor), LIGHT.minDistance, LIGHT.maxDistance);
      const F = LIGHT.gravity * light.mass / D;
      FSS.Vector3.subtractVectors(light.force, attractor, light.position);
      FSS.Vector3.normalise(light.force);
      FSS.Vector3.multiplyScalar(light.force, F);

      // Update the light position
      FSS.Vector3.set(light.acceleration);
      FSS.Vector3.add(light.acceleration, light.force);
      FSS.Vector3.add(light.velocity, light.acceleration);
      FSS.Vector3.multiplyScalar(light.velocity, LIGHT.dampening);
      FSS.Vector3.limit(light.velocity, LIGHT.minLimit, LIGHT.maxLimit);
      FSS.Vector3.add(light.position, light.velocity);
    }

    // Animate Vertices
    for (v = geometry.vertices.length - 1; v >= 0; v--) {
      vertex = geometry.vertices[v];
      ox = Math.sin(vertex.time + vertex.step[0] * now * MESH.speed);
      oy = Math.cos(vertex.time + vertex.step[1] * now * MESH.speed);
      oz = Math.sin(vertex.time + vertex.step[2] * now * MESH.speed);
      FSS.Vector3.set(vertex.position,
        MESH.xRange*geometry.segmentWidth*ox,
        MESH.yRange*geometry.sliceHeight*oy,
        MESH.zRange*offset*oz - offset);
      FSS.Vector3.add(vertex.position, vertex.anchor);
    }

    // Set the Geometry to dirty
    geometry.dirty = true;
  }

  function render() {
    renderer.render(scene);

    // Draw Lights
    if (LIGHT.draw) {
      let l;
      let lx;
      let ly;
      let light;
      for (l = scene.lights.length - 1; l >= 0; l--) {
        light = scene.lights[l];
        lx = light.position[0];
        ly = light.position[1];
        renderer.context.lineWidth = 0.5;
        renderer.context.beginPath();
        renderer.context.arc(lx, ly, 10, 0, Math.PIM2);
        renderer.context.strokeStyle = light.ambientHex;
        renderer.context.stroke();
        renderer.context.beginPath();
        renderer.context.arc(lx, ly, 4, 0, Math.PIM2);
        renderer.context.fillStyle = light.diffuseHex;
        renderer.context.fill();

      }
    }
  }

  function addEventListeners() {
    window.addEventListener('resize', onWindowResize);
    //container.addEventListener('mousemove', onMouseMove);
  }
  function onMouseMove(event) {
    FSS.Vector3.set(attractor, event.x, renderer.height - event.y);
    FSS.Vector3.subtract(attractor, center);
  }

  function onWindowResize(event) {
    resize(container.offsetWidth, container.offsetHeight);
    render();
  }
  initialise();
}
