import * as THREE from "../three/three.module.js";
import { OBJLoader } from "../three/OBJLoader.js";
import { MTLLoader } from "../three/MTLLoader.js";
import { OrbitControls } from "../three/OrbitControls.js";

let camera, scene, renderer, object;
async function init() {
  camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.25,
    2000
  );

  scene = new THREE.Scene();
  scene.fog = new THREE.Fog(0x000, 0, 45);

  const light = new THREE.HemisphereLight(0xfffff0, 0x101020, 1.25);
  light.position.set(0.75, 1, 0.25);
  scene.add(light);
  // addLights();

  // load the building
  try {
    const materials = await loadMaterial("sehir/sehir.mtl");
    object = await loadObject("sehir/sehir.obj");
  } catch (err) {}

  // wireframe

  var mat = new THREE.LineBasicMaterial({
    color: 0xffffff,
    linewidth: 5
  });

  object.traverse(function (child) {
    if (child.isMesh) {
      if (child.material.length) {
        child.material.forEach(material => {
          // material.wireframe = true;
          material.opacity = 0;
          material.transparent = true;
          // material.color = new THREE.Color(0x020014);
          material.color = new THREE.Color(0x0036a3);
        });
      } else {
        // child.material.wireframe = true;
        // child.material.linewidth = 10;
        child.material.opacity = 0;
        child.material.transparent = true;
        // child.material.color = new THREE.Color(0x020014);
        child.material.color = new THREE.Color(0x0036a3);
      }
      var geo = new THREE.WireframeGeometry(child.geometry);

      var wireframe = new THREE.LineSegments(geo, mat);
      console.log(wireframe);
      child.add(wireframe);
    }
  });
  const box3 = new THREE.Box3().setFromObject(object);
  const vector = new THREE.Vector3();
  box3.getCenter(vector);
  object.position.set(-vector.x, -vector.y, -vector.z);
  camera.position.y = 7;
  camera.rotation.set(
    -0.33266448095965767,
    -0.8929000584948701,
    -0.2628834797765133
  );
  // camera.rotation.set(
  //   -3.0026046999752,
  //   -0.012571199167031593,
  //   -3.1398341179622107
  // );
  // camera.rotation.set(
  //   -2.894646246114525,
  //   0.02461687315857692,
  //   3.1353876490918733
  // );
  scene.add(object);

  // var axisHelper = new THREE.AxesHelper(5);
  // scene.add(axisHelper);

  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setClearColor(0x020014);
  // renderer.setClearColor(0x222222);
  // renderer.setClearColor(0xd8e7ff);
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = 1;
  renderer.outputEncoding = THREE.sRGBEncoding;
  const canvas = document.querySelector(".title");
  document.body.insertBefore(renderer.domElement, canvas);

  const pmremGenerator = new THREE.PMREMGenerator(renderer);
  pmremGenerator.compileEquirectangularShader();

  const controls = new OrbitControls(camera, renderer.domElement);
  controls.minDistance = 2;
  controls.maxDistance = 100000;
  controls.target.set(0, 4, 10);
  controls.update();

  window.addEventListener("resize", onWindowResize);

  animate();
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);

  animate();
}

//
window.addEventListener("keydown", e => {
  if (e.shiftKey) {
    switch (e.keyCode) {
      case 32:
        console.log("position: ", camera.position);
        break;
      case 65:
        // a
        camera.rotation.x -= 0.01;
        break;
      case 83:
        // s
        camera.rotation.z -= 0.01;
        break;
      case 87:
        // w
        camera.rotation.y -= 0.01;
        break;
      case 38:
        // up
        camera.position.y -= 1;
        break;
      case 40:
        // down
        break;
      case 37:
        // left
        camera.position.x -= 1;
        break;
      case 39:
        // right
        camera.position.z -= 1;
        break;
      default:
        break;
    }
  } else
    switch (e.keyCode) {
      case 32:
        console.log("rotation: ", camera.rotation);
        break;
      case 65:
        // a
        camera.rotation.x += 0.01;
        break;
      case 83:
        // s
        camera.rotation.z += 0.01;
        break;
      case 87:
        // w
        camera.rotation.y += 0.01;
        break;
      case 38:
        // up
        camera.position.y += 1;
        break;
      case 40:
        // down
        break;
      case 37:
        // left
        camera.position.x += 1;
        break;
      case 39:
        // right
        camera.position.z += 1;
        break;
      default:
        break;
    }
  if (e.ctrlKey) {
    camera.position.set(
      4.58685466223755,
      2.485235270327925,
      -2.155599641702704
    );
  }
  renderer.render(scene, camera);
});

function animate() {
  // camera.rotation.z += 0.0001;
  if (object) object.rotation.y += 0.0001;
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

async function loadObject(url, materials) {
  const loader = new OBJLoader();
  loader.setPath("3d/");
  if (materials) {
    loader.setMaterials(materials);
    console.log(materials);
  }
  return new Promise((resolve, reject) => {
    loader.load(
      // resource URL
      url,
      // called when resource is loaded
      function (_object) {
        resolve(_object);
      },
      // called when loading is in progresses
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened", error);
        reject(error);
      }
    );
  });
}

async function loadMaterial(url) {
  const loader = new MTLLoader();
  loader.setPath("3d/");
  return new Promise((resolve, reject) => {
    loader.load(
      // resource URL
      url,
      // called when resource is loaded
      function (materials) {
        materials.preload();
        resolve(materials);
      },
      // called when loading is in progresses
      function (xhr) {
        console.log((xhr.loaded / xhr.total) * 100 + "% loaded");
      },
      // called when loading has errors
      function (error) {
        console.log("An error happened", error);
        reject(error);
      }
    );
  });
}

function addLights() {
  const hlight = new THREE.AmbientLight(0x404040, 100);
  scene.add(hlight);
  const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
  directionalLight.position.set(0, 1, 0);
  directionalLight.castShadow = true;
  scene.add(directionalLight);
  const light1 = new THREE.PointLight(0xc4c4c4, 10);
  light1.position.set(0, 300, 500);
  scene.add(light1);
  const light2 = new THREE.PointLight(0xc4c4c4, 10);
  light2.position.set(500, 100, 0);
  scene.add(light2);
  const light3 = new THREE.PointLight(0xc4c4c4, 10);
  light3.position.set(0, 100, -500);
  scene.add(light3);
  const light4 = new THREE.PointLight(0xc4c4c4, 10);
  light4.position.set(-500, 300, 500);
  scene.add(light4);
}

init();
// animate();
