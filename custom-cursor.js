// custom-cursor.js

// Import Three.js
import * as THREE from 'https://unpkg.com/three/build/three.module.js';
// Import GLTFLoader
import { GLTFLoader } from 'https://unpkg.com/three/examples/jsm/loaders/GLTFLoader.js';

let scene, camera, renderer;

function init() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);

    const loader = new GLTFLoader();
    loader.load('scene.gltf', function(gltf) {
        scene.add(gltf.scene);
        animate();
    });

    camera.position.z = 5;
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
}

init();
