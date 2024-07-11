import * as THREE from "../three/three.module.js";
import { OBJLoader } from "../three/OBJLoader.js";
import { MTLLoader } from "../three/MTLLoader.js";
import { OrbitControls } from "../three/editedControls.js";

export class CityScape3DRendering {
  constructor() {
    this.camera = null;
    this.scene = null;
    this.renderer = null;
    this.object = null;
  }

  async render() {
    console.log("initializing 3d space");
    await this.initialize3DSpace();
    this.addWindowListeners();
    this.animate();
  }

  animate() {
    console.log("animating");
    if (this.object) this.object.rotation.y += 0.00008;
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }

  addWindowListeners() {
    // resize listener
    window.addEventListener("resize", () => this.onWindowResize());

    // keypress listener
    window.addEventListener("keydown", (e) => {
      if (e.shiftKey) {
        if (e.keyCode === 32) {
          console.log("position: ", this.camera.position);
          return;
        }
      } else if (e.keyCode === 32) {
        console.log("rotation: ", camera.rotation);
        return;
      }
    });
  }

  async initialize3DSpace() {
    this.camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      0.25,
      2000
    );

    this.scene = new THREE.Scene();
    this.scene.fog = new THREE.Fog(0x000, 0, 45);

    const light = new THREE.HemisphereLight(0xfffff0, 0x101020, 1.25);
    light.position.set(0.75, 1, 0.25);
    this.scene.add(light);
    // this.addLights();

    // load the building
    // try {
      // const materials = await this.loadMaterial("sehir/sehir.mtl");
      // this.object = await this.loadObject("F_M_cityscape_190421.");
    // } catch (err) {
      // console.error("Error loading object:", err);
      // Create a simple cube as a placeholder
      const geometry = new THREE.BoxGeometry(1, 1, 1);
      const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
      this.object = new THREE.Mesh(geometry, material);
    // }

    // wireframe

    var mat = new THREE.LineBasicMaterial({
      color: 0xffffff,
      linewidth: 1,
    });

    this.object.traverse(function (child) {
      if (child.isMesh) {
        if (child.material.length) {
          child.material.forEach((material) => {
            // material.wireframe = true;
            material.opacity = 0.7;
            material.transparent = true;
            // material.color = new THREE.Color(0x020014);
            material.color = new THREE.Color(0x0036a3);
          });
        } else {
          // child.material.wireframe = true;
          child.material.opacity = 0.7;
          child.material.transparent = true;
          // child.material.color = new THREE.Color(0x020014);
          child.material.color = new THREE.Color(0x0036a3);
        }
        var geo = new THREE.WireframeGeometry(child.geometry);

        var wireframe = new THREE.LineSegments(geo, mat);
        child.add(wireframe);
      }
    });
    const box3 = new THREE.Box3().setFromObject(this.object);
    const vector = new THREE.Vector3();
    box3.getCenter(vector);
    this.object.position.set(-vector.x, -vector.y, -vector.z);
    this.camera.position.y = 7;
    this.camera.rotation.set(
      -0.33266448095965767,
      -0.8929000584948701,
      -0.2628834797765133
    );
    this.scene.add(this.object);

    this.renderer = new THREE.WebGLRenderer({ antialias: true });
    this.renderer.setPixelRatio(window.devicePixelRatio);
    this.renderer.setClearColor(0x020014);
    this.renderer.setSize(window.innerWidth, window.innerHeight);
    this.renderer.toneMapping = THREE.ACESFilmicToneMapping;
    this.renderer.toneMappingExposure = 1;
    this.renderer.outputEncoding = THREE.sRGBEncoding;
    const canvas = document.querySelector(".title");
    document.body.insertBefore(this.renderer.domElement, canvas);

    const pmremGenerator = new THREE.PMREMGenerator(this.renderer);
    pmremGenerator.compileEquirectangularShader();

    const controls = new OrbitControls(this.camera, this.renderer.domElement);
    controls.minDistance = 15;
    controls.maxDistance = 20;
    controls.minPolarAngle = 1.2;
    controls.maxPolarAngle = 1.9;
    // controls.enablePan = false;
    controls.target.set(4, 4, 10);

    controls.update();

    window.controls = controls;
  }

  onWindowResize() {
    this.camera.aspect = window.innerWidth / window.innerHeight;
    this.camera.updateProjectionMatrix();

    this.renderer.setSize(window.innerWidth, window.innerHeight);
  }

  async loadObject(url, materials) {
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
          console.log(_object)
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

  async loadMaterial(url) {
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

  addLights() {
    const hlight = new THREE.AmbientLight(0x404040, 100);
    this.scene.add(hlight);
    const directionalLight = new THREE.DirectionalLight(0xffffff, 100);
    directionalLight.position.set(0, 1, 0);
    directionalLight.castShadow = true;
    this.scene.add(directionalLight);
    const light1 = new THREE.PointLight(0xc4c4c4, 10);
    light1.position.set(0, 300, 500);
    this.scene.add(light1);
    const light2 = new THREE.PointLight(0xc4c4c4, 10);
    light2.position.set(500, 100, 0);
    this.scene.add(light2);
    const light3 = new THREE.PointLight(0xc4c4c4, 10);
    light3.position.set(0, 100, -500);
    this.scene.add(light3);
    const light4 = new THREE.PointLight(0xc4c4c4, 10);
    light4.position.set(-500, 300, 500);
    this.scene.add(light4);
  }
}
