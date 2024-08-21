import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

let scene, camera, renderer, player;

function initGame() {
    scene = new THREE.Scene();
    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    renderer = new THREE.WebGLRenderer();
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('game-container').appendChild(renderer.domElement);

    // Add clouds and environment
    createEnvironment();

    // Player setup
    player = new THREE.Mesh(
        new THREE.BoxGeometry(1, 2, 1),
        new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    );
    scene.add(player);

    camera.position.z = 5;
    camera.position.y = 2;

    animate();
}

function createEnvironment() {
    // Skybox, clouds, etc.
}

function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
    updatePlayerMovement();
}

function updatePlayerMovement() {
    // Handle WASD movement, jumping, etc.
    window.addEventListener('keydown', (e) => {
        switch (e.key) {
            case 'w':
                player.position.z -= 0.1;
                break;
            case 's':
                player.position.z += 0.1;
                break;
            case 'a':
                player.position.x -= 0.1;
                break;
            case 'd':
                player.position.x += 0.1;
                break;
            case ' ':
                player.position.y += 0.2;
                break;
        }
    });
}

initGame();
