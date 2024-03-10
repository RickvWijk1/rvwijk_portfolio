<template>
  <div class="three-cont">
    <canvas class="canvas"></canvas>
  </div>
</template>

<script type="text/javascript">
  import * as THREE from 'three';
  import {
    GLTFLoader
  } from 'three/examples/jsm/loaders/GLTFLoader';
  import {
    OrbitControls
  } from 'three/examples/jsm/controls/OrbitControls.js';

  export default {
    mounted() {
      let threeDcont = document.querySelector('.three-cont');

      function fieldOfViewYFromFieldOfViewX(fieldOfViewX, aspect) {
        return THREE.MathUtils.radToDeg(2 * Math.atan(Math.tan(THREE.MathUtils.degToRad(fieldOfViewX) * 0.5) / aspect));
      }


      function main() {
        const scene = new THREE.Scene();
        const fov = 100;
        const aspect = 2; // the canvas default
        const near = 1;
        const far = 20;
        const camera = new THREE.PerspectiveCamera(
          fieldOfViewYFromFieldOfViewX(fov, aspect),
          aspect,
          near,
          far);
        camera.position.z = 4;
        camera.position.y = 4;
        camera.position.x = 8;

        const renderer = new THREE.WebGLRenderer({
          alpha: true,
          canvas: document.querySelector('.canvas')
        });

        threeDcont.appendChild(renderer.domElement);
        const controls = new OrbitControls(camera, renderer.domElement);
        // controls.autoRotate = true;
        controls.enableDamping = true;
        controls.dampingFactor = .5;

        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const pixelRatio = window.devicePixelRatio;
          const width = canvas.clientWidth * pixelRatio | 0;
          const height = canvas.clientHeight * pixelRatio | 0;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }

        function resizeRendererToDisplaySize(renderer) {
          const canvas = renderer.domElement;
          const pixelRatio = window.devicePixelRatio;
          const width = canvas.clientWidth * pixelRatio | 0;
          const height = canvas.clientHeight * pixelRatio | 0;
          const needResize = canvas.width !== width || canvas.height !== height;
          if (needResize) {
            renderer.setSize(width, height, false);
          }
          return needResize;
        }

        const glftLoader = new GLTFLoader();
        // Load a GLTF resource
        glftLoader.load(
          // resource URL
          'models/desktop/scene.gltf',
          // called when the resource is loaded
          (gltfDesk) => {
            // console.log(glftLoader);
            scene.add(gltfDesk.scene);

          }
        );

        const light = new THREE.DirectionalLight(0xffffff, 1);
        light.position.set(2, .8, 0); //default; light shining from top
        light.castShadow = true; // default false
        scene.add(light);

        //Set up shadow properties for the light
        light.shadow.mapSize.width = 512; // default
        light.shadow.mapSize.height = 512; // default
        light.shadow.camera.near = 0.5; // default
        light.shadow.camera.far = 500; // default

        // const hl = new THREE.HemisphereLight(0x00afff, 0xffaf00, 1);
        // scene.add(hl);

        // const dl = new THREE.DirectionalLight(0x2a2a2a, 3.5);
        // dl.position.set(25, 50, -25);
        // scene.add(dl);

        // const light = new THREE.AmbientLight(0xffffff, 0.25);
        // scene.add(light)

        // const geometry = new THREE.BoxGeometry(1, 1, 1);
        // const material = new THREE.MeshBasicMaterial({
        //   color: 0x4758fc
        // });
        // const cube = new THREE.Mesh(geometry, material);
        // scene.add(cube);

        // camera.zoom = 0.1;

        function render() {
          if (resizeRendererToDisplaySize(renderer)) {
            const canvas = renderer.domElement;
            camera.aspect = canvas.clientWidth / canvas.clientHeight;
            camera.fov = fieldOfViewYFromFieldOfViewX(fov, camera.aspect);
            camera.updateProjectionMatrix();
          }

          // cube.rotation.x += 0.01;
          // cube.rotation.z += 0.01;
          // cube.rotation.y += 0.01;
          controls.update();

          renderer.render(scene, camera);
          requestAnimationFrame(render);
        }

        render();

      }

      main();

    }
  }

</script>

<style>
  .three-cont {
    height: 100%;
  }

  .canvas {
    width: 100%;
    height: 100%;
    display: block;
  }

</style>
