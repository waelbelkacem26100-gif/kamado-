"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* lat/lon → position sur sphère */
function latLonToVec3(lat: number, lon: number, r: number): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

const PRESENCE_CITIES = [
  { lat: 48.85, lon: 2.35,   label: "Paris" },
  { lat: 50.85, lon: 4.35,   label: "Bruxelles" },
  { lat: 46.20, lon: 6.15,   label: "Genève" },
  { lat: 45.50, lon: -73.57, label: "Montréal" },
];

export default function GlobeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = mountRef.current;
    if (!el) return;
    const W = el.clientWidth;
    const H = el.clientHeight;

    /* ── Renderer ── */
    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(W, H);
    renderer.setClearColor(0x000000, 0);
    el.appendChild(renderer.domElement);

    /* ── Scene / Camera ── */
    const scene  = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(42, W / H, 0.1, 100);
    camera.position.set(0, 0.5, 3.2);
    camera.lookAt(0, 0, 0);

    /* ── Lumières ── */
    scene.add(new THREE.AmbientLight(0xffffff, 0.4));
    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 3, 5);
    scene.add(dirLight);
    const ptLight = new THREE.PointLight(0x00ff88, 0.3, 20);
    ptLight.position.set(-5, -3, -2);
    scene.add(ptLight);

    /* ── Groupe global (pour rotation + inclinaison) ── */
    const globeGroup = new THREE.Group();
    globeGroup.rotation.x = 0.3; // inclinaison réaliste
    scene.add(globeGroup);

    /* ── Texture loader ── */
    const loader = new THREE.TextureLoader();
    loader.crossOrigin = "anonymous";

    const globe = new THREE.Mesh(
      new THREE.SphereGeometry(1, 64, 64),
      new THREE.MeshStandardMaterial({ color: 0x1a1a2e, roughness: 0.8, metalness: 0.1 }),
    );
    globeGroup.add(globe);

    // Charge texture + bump en parallèle
    loader.load(
      "https://unpkg.com/three-globe/example/img/earth-dark.jpg",
      (tex) => {
        (globe.material as THREE.MeshStandardMaterial).map = tex;
        (globe.material as THREE.MeshStandardMaterial).needsUpdate = true;
      },
    );
    loader.load(
      "https://unpkg.com/three-globe/example/img/earth-topology.png",
      (tex) => {
        (globe.material as THREE.MeshStandardMaterial).bumpMap   = tex;
        (globe.material as THREE.MeshStandardMaterial).bumpScale = 0.06;
        (globe.material as THREE.MeshStandardMaterial).needsUpdate = true;
      },
    );

    /* ── Atmosphère ── */
    const atm = new THREE.Mesh(
      new THREE.SphereGeometry(1.02, 32, 32),
      new THREE.MeshBasicMaterial({
        color:       0x4488ff,
        transparent: true,
        opacity:     0.08,
        side:        THREE.BackSide,
      }),
    );
    globeGroup.add(atm);

    /* ── Points de présence + halos ── */
    const cityDots:   THREE.Mesh[] = [];
    const cityHalos:  THREE.Mesh[] = [];
    const cityPhases: number[]     = [];

    PRESENCE_CITIES.forEach((city, i) => {
      const pos = latLonToVec3(city.lat, city.lon, 1.015);

      // Point central
      const dot = new THREE.Mesh(
        new THREE.SphereGeometry(0.012, 8, 8),
        new THREE.MeshBasicMaterial({ color: 0x00ff88 }),
      );
      dot.position.copy(pos);
      globeGroup.add(dot);
      cityDots.push(dot);

      // Halo pulsant
      const halo = new THREE.Mesh(
        new THREE.RingGeometry(0.015, 0.028, 24),
        new THREE.MeshBasicMaterial({
          color:       0x00ff88,
          transparent: true,
          opacity:     0.8,
          side:        THREE.DoubleSide,
        }),
      );
      halo.position.copy(pos);
      halo.lookAt(new THREE.Vector3(0, 0, 0));
      globeGroup.add(halo);
      cityHalos.push(halo);
      cityPhases.push(i * (Math.PI / 2)); // décalage de phase
    });

    /* ── Drag interactif ── */
    let isDragging  = false;
    let prevX = 0;
    let prevY = 0;
    let velX  = 0;
    let velY  = 0;

    const onMouseDown = (e: MouseEvent) => { isDragging = true; prevX = e.clientX; prevY = e.clientY; };
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return;
      velX = (e.clientX - prevX) * 0.004;
      velY = (e.clientY - prevY) * 0.002;
      prevX = e.clientX; prevY = e.clientY;
    };
    const onMouseUp = () => { isDragging = false; };

    const onTouchStart = (e: TouchEvent) => { isDragging = true; prevX = e.touches[0].clientX; prevY = e.touches[0].clientY; };
    const onTouchMove  = (e: TouchEvent) => {
      if (!isDragging) return;
      velX = (e.touches[0].clientX - prevX) * 0.004;
      velY = (e.touches[0].clientY - prevY) * 0.002;
      prevX = e.touches[0].clientX; prevY = e.touches[0].clientY;
    };
    const onTouchEnd = () => { isDragging = false; };

    el.addEventListener("mousedown",  onMouseDown);
    window.addEventListener("mousemove", onMouseMove);
    window.addEventListener("mouseup",   onMouseUp);
    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove",  onTouchMove,  { passive: true });
    el.addEventListener("touchend",   onTouchEnd);

    /* ── Animation loop ── */
    let raf: number;
    let time = 0;

    function animate() {
      raf = requestAnimationFrame(animate);
      time += 0.016;

      if (isDragging) {
        globeGroup.rotation.y += velX;
        globeGroup.rotation.x = Math.max(-0.8, Math.min(0.8, globeGroup.rotation.x + velY));
        velX *= 0.9;
        velY *= 0.9;
      } else {
        // Auto-rotation lente + décélération inertielle
        velX *= 0.95;
        velY *= 0.95;
        globeGroup.rotation.y += 0.0015 + velX;
        globeGroup.rotation.x = Math.max(-0.8, Math.min(0.8, globeGroup.rotation.x + velY));
      }

      // Pulse des halos
      cityHalos.forEach((halo, i) => {
        const t = ((time * 1.8 + cityPhases[i]) % (Math.PI * 2));
        const scale = 1 + Math.sin(t) * 1.0;
        halo.scale.setScalar(scale);
        (halo.material as THREE.MeshBasicMaterial).opacity = Math.max(0, (1 - scale / 2.5) * 0.85);
      });

      renderer.render(scene, camera);
    }
    animate();

    /* ── Resize ── */
    const onResize = () => {
      const w = el.clientWidth;
      const h = el.clientHeight;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize",    onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseup",   onMouseUp);
      el.removeEventListener("mousedown",  onMouseDown);
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove",  onTouchMove);
      el.removeEventListener("touchend",   onTouchEnd);
      renderer.dispose();
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full cursor-grab active:cursor-grabbing" />;
}
