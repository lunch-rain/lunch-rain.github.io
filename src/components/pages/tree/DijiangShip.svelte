<script lang="ts">
	import { onMount } from "svelte";
	import * as THREE from "three";

	let host: HTMLDivElement;
	let error = $state("");
	let markers: HTMLSpanElement[] = [];
	const markerPositions = [
		new THREE.Vector3(-1.0, -0.5, 1.5),
		new THREE.Vector3(-1.5, -2, 1.5),
		new THREE.Vector3(-2.3, 0, 1.5),
		new THREE.Vector3(-2.3, -0.5, 1.5),
	];

	onMount(() => {
		let disposed = false;
		let frame = 0;
		let renderer: THREE.WebGLRenderer;
		let geometry: THREE.BufferGeometry | undefined;
		let material: THREE.PointsMaterial | undefined;
		let observer: ResizeObserver | undefined;
		const scene = new THREE.Scene();
		const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
		camera.position.set(0, 1.5, 8);
		const floating = new THREE.Group();
		const oriented = new THREE.Group();
		floating.position.set(1.2, 0.8, 1);
		oriented.rotation.set(Math.PI / 0.9, -0.2, 3.0);
		floating.add(oriented);
		scene.add(floating);

		try {
			renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
			renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
			host.appendChild(renderer.domElement);
		} catch {
			error = "浏览器无法启动 3D 渲染。";
			return;
		}

		const resize = () => {
			const { width, height } = host.getBoundingClientRect();
			if (!width || !height) return;
			floating.scale.setScalar(width < 500 ? 0.35 : width < 800 ? 0.72 : 0.9);
			floating.position.x = width < 500 ? 0 : 1.2;
			camera.aspect = width / height;
			camera.updateProjectionMatrix();
			renderer.setSize(width, height);
		};
		observer = new ResizeObserver(resize);
		observer.observe(host);
		resize();

		fetch("/spaceship.bin")
			.then((response) => {
				if (!response.ok) throw new Error("spaceship.bin unavailable");
				return response.arrayBuffer();
			})
			.then((buffer) => {
				if (disposed) return;
				const raw = new Float32Array(buffer);
				const count = raw.length / 3;
				if (!count || raw.length % 3) throw new Error("Invalid point cloud");
				let mx = 0, my = 0, mz = 0;
				for (let i = 0; i < raw.length; i += 3) {
					mx += raw[i]; my += raw[i + 1]; mz += raw[i + 2];
				}
				mx /= count; my /= count; mz /= count;
				let maxDistance = 0;
				for (let i = 0; i < raw.length; i += 3) {
					raw[i] -= mx; raw[i + 1] -= my; raw[i + 2] -= mz;
					maxDistance = Math.max(maxDistance, Math.hypot(raw[i], raw[i + 1], raw[i + 2]));
				}
				const scale = 5 / maxDistance;
				for (let i = 0; i < raw.length; i++) raw[i] *= scale;
				geometry = new THREE.BufferGeometry();
				geometry.setAttribute("position", new THREE.BufferAttribute(raw, 3));
				const phases = new Float32Array(count);
				for (let i = 0; i < count; i++) phases[i] = Math.random() * Math.PI * 2;
				geometry.setAttribute("aPhase", new THREE.BufferAttribute(phases, 1));
				material = new THREE.PointsMaterial({ color: "#eab308", size: 0.035, sizeAttenuation: true, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false });
				material.onBeforeCompile = (shader) => {
					shader.uniforms.uTime = { value: 0 };
					material!.userData.shader = shader;
					shader.vertexShader = `attribute float aPhase; varying float vPhase;\n${shader.vertexShader}`.replace("#include <begin_vertex>", "#include <begin_vertex>\nvPhase = aPhase;");
					shader.fragmentShader = `uniform float uTime; varying float vPhase;\n${shader.fragmentShader}`.replace("vec4 diffuseColor = vec4( diffuse, opacity );", "float blink = (sin(uTime * 4.0 + vPhase) + 1.0) * 0.5; vec4 diffuseColor = vec4( diffuse, opacity * (blink * 0.7 + 0.3) );");
				};
				oriented.add(new THREE.Points(geometry, material));
			})
			.catch(() => { if (!disposed) error = "舰船模型加载失败。"; });

		const start = performance.now();
		const animate = () => {
			if (disposed) return;
			const seconds = (performance.now() - start) / 1000;
			floating.position.y = 0.8 + Math.sin(seconds * 2) * 0.1;
			floating.rotation.y = Math.sin(seconds) * 0.02;
			scene.updateMatrixWorld(true);
			for (let i = 0; i < markerPositions.length; i++) {
				const projected = oriented.localToWorld(markerPositions[i].clone()).project(camera);
				const marker = markers[i];
				if (!marker) continue;
				marker.style.left = `${(projected.x + 1) * 50}%`;
				marker.style.top = `${(1 - projected.y) * 50}%`;
			}
			if (material?.userData.shader) material.userData.shader.uniforms.uTime.value = seconds;
			renderer.render(scene, camera);
			frame = requestAnimationFrame(animate);
		};
		animate();

		return () => {
			disposed = true;
			cancelAnimationFrame(frame);
			observer?.disconnect();
			geometry?.dispose();
			material?.dispose();
			renderer.dispose();
			renderer.domElement.remove();
		};
	});
</script>

<div class="ship-canvas" bind:this={host} aria-label="帝江号黄色粒子点云舰船">
	{#each ["post", "chatter", "moment", "message"] as kind, index}
		<span class="beacon {kind}" bind:this={markers[index]} aria-hidden="true"></span>
	{/each}
</div>
{#if error}<p class="ship-error">{error}</p>{/if}

<style>
	.ship-canvas { position: absolute; inset: 0; pointer-events: none; }
	.ship-canvas :global(canvas) { display: block; position: absolute; inset: 0; }
	.beacon { position: absolute; z-index: 2; width: 12px; height: 12px; transform: translate(-50%, -50%) rotate(45deg); border: 3px solid #181818; box-shadow: 0 0 18px currentColor; }
	.beacon:after { content: ""; position: absolute; inset: -12px; border: 1px solid #ffffff70; }
	.beacon.post { background: #0ea5e9; color: #0ea5e9; }
	.beacon.chatter { background: #eab308; color: #eab308; }
	.beacon.moment { background: #10b981; color: #10b981; }
	.beacon.message { background: #f1f5f9; color: #f1f5f9; }
	@media (max-width: 760px) { .beacon { display: none; } }
	.ship-error { position: absolute; left: 50%; top: 50%; transform: translate(-50%, -50%); color: #eab308; font-size: .8rem; }
</style>
