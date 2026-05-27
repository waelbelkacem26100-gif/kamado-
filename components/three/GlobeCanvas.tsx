"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

/* lat/lon → unit sphere position */
function latLon(lat: number, lon: number, r = 1): THREE.Vector3 {
  const phi   = (90 - lat) * (Math.PI / 180);
  const theta = (lon + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -r * Math.sin(phi) * Math.cos(theta),
     r * Math.cos(phi),
     r * Math.sin(phi) * Math.sin(theta),
  );
}

/* Arc between two points on sphere */
function buildArc(a: THREE.Vector3, b: THREE.Vector3, segments = 48, lift = 0.22): THREE.BufferGeometry {
  const points: THREE.Vector3[] = [];
  for (let i = 0; i <= segments; i++) {
    const t = i / segments;
    const p = new THREE.Vector3().lerpVectors(a, b, t).normalize();
    const h = 1 + lift * Math.sin(Math.PI * t);
    points.push(p.multiplyScalar(h));
  }
  return new THREE.BufferGeometry().setFromPoints(points);
}

const cities = [
  { name: "Romans-sur-Isère", lat: 45.05, lon: 5.05,  accent: true },
  { name: "Paris",             lat: 48.85, lon: 2.35,  accent: false },
  { name: "Lyon",              lat: 45.76, lon: 4.84,  accent: false },
  { name: "Bordeaux",          lat: 44.84, lon: -0.58, accent: false },
  { name: "Marseille",         lat: 43.30, lon: 5.37,  accent: false },
  { name: "Toulouse",          lat: 43.60, lon: 1.44,  accent: false },
  { name: "Nantes",            lat: 47.22, lon: -1.55, accent: false },
  { name: "Lille",             lat: 50.63, lon: 3.06,  accent: false },
  { name: "Strasbourg",        lat: 48.57, lon: 7.75,  accent: false },
];

/* Arcs from Romans-sur-Isère to every other city */
const arcPairs = cities.slice(1).map((c) => [0, cities.indexOf(c)] as [number, number]);

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
    const camera = new THREE.PerspectiveCamera(45, W / H, 0.1, 100);
    camera.position.set(0, 0.4, 2.8);
    camera.lookAt(0, 0, 0);

    const GREEN   = new THREE.Color("#00ff87");
    const PURPLE  = new THREE.Color("#a855f7");

    /* ── Globe wireframe ── */
    const globeGeo = new THREE.SphereGeometry(1, 48, 32);
    const globeMat = new THREE.MeshBasicMaterial({
      color: new THREE.Color("#ffffff"),
      wireframe: true,
      transparent: true,
      opacity: 0.04,
    });
    scene.add(new THREE.Mesh(globeGeo, globeMat));

    /* ── Atmosphere glow (slightly larger sphere) ── */
    const atmGeo = new THREE.SphereGeometry(1.08, 32, 32);
    const atmMat = new THREE.MeshBasicMaterial({
      color: GREEN,
      transparent: true,
      opacity: 0.025,
      side: THREE.BackSide,
    });
    scene.add(new THREE.Mesh(atmGeo, atmMat));

    /* ── Latitude/Longitude grid lines ── */
    const gridGroup = new THREE.Group();
    const lineMat = new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.07 });
    // Latitude lines every 30°
    for (let lat = -60; lat <= 60; lat += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lon = 0; lon <= 360; lon += 4) pts.push(latLon(lat, lon, 1.002));
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
    }
    // Longitude lines every 30°
    for (let lon = 0; lon < 360; lon += 30) {
      const pts: THREE.Vector3[] = [];
      for (let lat = -80; lat <= 80; lat += 4) pts.push(latLon(lat, lon, 1.002));
      gridGroup.add(new THREE.Line(new THREE.BufferGeometry().setFromPoints(pts), lineMat));
    }
    scene.add(gridGroup);

    /* ── City dots ── */
    const dotGroup = new THREE.Group();
    const cityPositions = cities.map((c) => latLon(c.lat, c.lon, 1.015));
    cityPositions.forEach((pos, i) => {
      const r    = cities[i].accent ? 0.022 : 0.014;
      const col  = cities[i].accent ? GREEN : new THREE.Color("#ffffff");
      const geo  = new THREE.SphereGeometry(r, 8, 8);
      const mat  = new THREE.MeshBasicMaterial({ color: col, transparent: true, opacity: cities[i].accent ? 1 : 0.75 });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      dotGroup.add(mesh);
    });
    scene.add(dotGroup);

    /* ── Pulse rings (circles around city dots) ── */
    const rings: { mesh: THREE.Mesh; phase: number; city: number }[] = [];
    cityPositions.forEach((pos, i) => {
      if (!cities[i].accent && i !== 1 && i !== 2) return; // only Romans + Paris + Lyon
      const geo = new THREE.RingGeometry(0.02, 0.032, 32);
      const mat = new THREE.MeshBasicMaterial({
        color: cities[i].accent ? GREEN : PURPLE,
        transparent: true,
        opacity: 0.6,
        side: THREE.DoubleSide,
      });
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.copy(pos);
      mesh.lookAt(new THREE.Vector3(0, 0, 0));
      rings.push({ mesh, phase: Math.random() * Math.PI * 2, city: i });
      scene.add(mesh);
    });

    /* ── Arcs ── */
    const arcMat = new THREE.LineBasicMaterial({ color: GREEN, transparent: true, opacity: 0.22 });
    const arcGroup = new THREE.Group();
    arcPairs.forEach(([ai, bi]) => {
      const geo = buildArc(cityPositions[ai].clone().normalize(), cityPositions[bi].clone().normalize());
      arcGroup.add(new THREE.Line(geo, arcMat.clone()));
    });
    scene.add(arcGroup);

    /* ── Stars background ── */
    const starCount = 600;
    const starPos = new Float32Array(starCount * 3);
    for (let i = 0; i < starCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.acos(2 * Math.random() - 1);
      const r     = 8 + Math.random() * 12;
      starPos[i * 3]     = r * Math.sin(phi) * Math.cos(theta);
      starPos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      starPos[i * 3 + 2] = r * Math.cos(phi);
    }
    const starGeo = new THREE.BufferGeometry();
    starGeo.setAttribute("position", new THREE.BufferAttribute(starPos, 3));
    const starMat = new THREE.PointsMaterial({ color: new THREE.Color("#ffffff"), size: 0.04, transparent: true, opacity: 0.45 });
    scene.add(new THREE.Points(starGeo, starMat));

    /* ── Animation ── */
    let raf: number;
    let time = 0;
    const globeGroup = new THREE.Group();
    globeGroup.add(globeMat as unknown as THREE.Object3D); // dummy, we move scene objects manually

    const rotatable = [globeGeo, globeMat, atmGeo, atmMat, gridGroup, dotGroup, arcGroup];
    const rotatableObjects = scene.children.filter(
      (o) => o !== scene && !(o instanceof THREE.Points)
    );

    function animate() {
      raf = requestAnimationFrame(animate);
      time += 0.005;

      // Slow globe rotation
      rotatableObjects.forEach((o) => { o.rotation.y += 0.0015; });

      // Pulse rings scale + fade
      rings.forEach((r, i) => {
        const t = ((time + r.phase) % (Math.PI * 2));
        const scale = 1 + Math.sin(t) * 0.8;
        r.mesh.scale.setScalar(scale);
        (r.mesh.material as THREE.MeshBasicMaterial).opacity = (1 - scale / 2.8) * 0.6;
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
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      el.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="w-full h-full" />;
}
