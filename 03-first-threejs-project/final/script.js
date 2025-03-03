import * as THREE from "three";

const canvas = document.querySelector('canvas.webgl');

// Scene (A container that will contain objects, models, particles, lights etc).
const scene = new THREE.Scene();
scene.background = { color: "#fece2f"};

// Objects (can be many things like primitive geometry, imported models, particles, lights, camera etc).

// Geometry (the shape)
const geometry = new THREE.BoxGeometry(1, 1, 1);

// Material (how it look)
const material = new THREE.MeshBasicMaterial({
    color: 0xff0000,
});

// Mesh (combination of geometry (the shape) and a material (how it looks)).
const mesh = new THREE.Mesh(geometry, material);

scene.add(mesh);

// sizes
const sizes = {
    width: 800,
    height: 600
};

// Camera (Theretical point of view used when redering)
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer (will renderthe sceen from the camera's point of view).
// The results will be drawn into a canvas, (take the image of the camera and show to you)
const renderer = new THREE.WebGLRenderer({
    canvas
});

renderer.setSize(sizes.width, sizes.height);
// We ask our renderer to take a picture of the scene from the camera point of view.
renderer.render(scene, camera);