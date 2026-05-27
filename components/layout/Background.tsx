"use client";

import { useEffect, useRef } from "react";
import * as THREE from "three";

export default function Background() {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const isMobile = window.innerWidth < 768;

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 1.5));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mount.appendChild(renderer.domElement);

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 3000);
    camera.position.z = 200;

    /* ── Layer 1 — Dense white starfield (far background) ── */
    const bgCount = isMobile ? 360 : 720;
    const bgPos = new Float32Array(bgCount * 3);
    for (let i = 0; i < bgCount; i++) {
      bgPos[i * 3]     = (Math.random() - 0.5) * 1200;
      bgPos[i * 3 + 1] = (Math.random() - 0.5) * 1800;
      bgPos[i * 3 + 2] = (Math.random() - 0.5) * 800 - 400;
    }
    const bgGeo = new THREE.BufferGeometry();
    bgGeo.setAttribute("position", new THREE.BufferAttribute(bgPos, 3));
    const bgMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.28, transparent: true, opacity: 0.09, sizeAttenuation: true });
    const bgStars = new THREE.Points(bgGeo, bgMat);
    scene.add(bgStars);

    /* ── Layer 2 — Mid-range green energy particles ── */
    const midCount = isMobile ? 180 : 360;
    const midPos = new Float32Array(midCount * 3);
    const midSizes = new Float32Array(midCount);
    for (let i = 0; i < midCount; i++) {
      midPos[i * 3]     = (Math.random() - 0.5) * 700;
      midPos[i * 3 + 1] = (Math.random() - 0.5) * 1200;
      midPos[i * 3 + 2] = (Math.random() - 0.5) * 300;
      midSizes[i] = 0.3 + Math.random() * 0.8;
    }
    const midGeo = new THREE.BufferGeometry();
    midGeo.setAttribute("position", new THREE.BufferAttribute(midPos, 3));
    const midMat = new THREE.PointsMaterial({ color: 0x00ff87, size: 0.45, transparent: true, opacity: 0.18, sizeAttenuation: true });
    const midStars = new THREE.Points(midGeo, midMat);
    scene.add(midStars);

    /* ── Layer 3 — Foreground bright stars ── */
    const fgCount = isMobile ? 24 : 48;
    const fgPos = new Float32Array(fgCount * 3);
    for (let i = 0; i < fgCount; i++) {
      fgPos[i * 3]     = (Math.random() - 0.5) * 400;
      fgPos[i * 3 + 1] = (Math.random() - 0.5) * 600;
      fgPos[i * 3 + 2] = (Math.random() - 0.5) * 100 + 50;
    }
    const fgGeo = new THREE.BufferGeometry();
    fgGeo.setAttribute("position", new THREE.BufferAttribute(fgPos, 3));
    const fgMat = new THREE.PointsMaterial({ color: 0xffffff, size: 0.7, transparent: true, opacity: 0.35, sizeAttenuation: true });
    scene.add(new THREE.Points(fgGeo, fgMat));

    /* ── Nebula cloud — Purple ── */
    const nebCount = isMobile ? 80 : 160;
    const nebPos1 = new Float32Array(nebCount * 3);
    for (let i = 0; i < nebCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      const r     = 80 + Math.random() * 60;
      nebPos1[i * 3]     = r * Math.sin(phi) * Math.cos(theta) - 120;
      nebPos1[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.5 + 80;
      nebPos1[i * 3 + 2] = r * Math.cos(phi) * 0.3 - 200;
    }
    const neb1Geo = new THREE.BufferGeometry();
    neb1Geo.setAttribute("position", new THREE.BufferAttribute(nebPos1, 3));
    const neb1Mat = new THREE.PointsMaterial({ color: 0xa855f7, size: 1.4, transparent: true, opacity: 0.07, sizeAttenuation: true, blending: THREE.AdditiveBlending });
    scene.add(new THREE.Points(neb1Geo, neb1Mat));

    /* ── Nebula cloud — Indigo/Blue ── */
    const nebPos2 = new Float32Array(nebCount * 3);
    for (let i = 0; i < nebCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi   = Math.random() * Math.PI;
      const r     = 90 + Math.random() * 70;
      nebPos2[i * 3]     = r * Math.sin(phi) * Math.cos(theta) + 150;
      nebPos2[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta) * 0.4 - 60;
      nebPos2[i * 3 + 2] = r * Math.cos(phi) * 0.3 - 150;
    }
    const neb2Geo = new THREE.BufferGeometry();
    neb2Geo.setAttribute("position", new THREE.BufferAttribute(nebPos2, 3));
    const neb2Mat = new THREE.PointsMaterial({ color: 0x6366f1, size: 1.2, transparent: true, opacity: 0.06, sizeAttenuation: true, blending: THREE.AdditiveBlending });
    scene.add(new THREE.Points(neb2Geo, neb2Mat));

    /* ── Milky Way band ── */
    const mwCount = isMobile ? 240 : 480;
    const mwPos = new Float32Array(mwCount * 3);
    for (let i = 0; i < mwCount; i++) {
      const x = (Math.random() - 0.5) * 1400;
      const y = (Math.random() - 0.8) * 60 + (x * 0.04) + Math.sin(x * 0.01) * 30;
      mwPos[i * 3]     = x;
      mwPos[i * 3 + 1] = y;
      mwPos[i * 3 + 2] = (Math.random() - 0.5) * 100 - 300;
    }
    const mwGeo = new THREE.BufferGeometry();
    mwGeo.setAttribute("position", new THREE.BufferAttribute(mwPos, 3));
    const mwMat = new THREE.PointsMaterial({ color: 0xddeeff, size: 0.22, transparent: true, opacity: 0.06, sizeAttenuation: true });
    scene.add(new THREE.Points(mwGeo, mwMat));

    let animId: number;
    let scrollY = 0;
    let t = 0;
    let isActive = !document.hidden;

    const onScroll = () => { scrollY = window.scrollY; };
    window.addEventListener("scroll", onScroll, { passive: true });

    const animate = () => {
      if (!isActive) return;
      animId = requestAnimationFrame(animate);
      t += 0.0003;
      bgStars.rotation.y += 0.000025;
      bgStars.rotation.x += 0.000008;
      midStars.rotation.y += 0.00005;
      midStars.rotation.z = Math.sin(t * 0.4) * 0.002;
      camera.position.y = -scrollY * 0.012;
      camera.position.x = Math.sin(t) * 1.5;
      renderer.render(scene, camera);
    };

    const onVisibility = () => {
      isActive = !document.hidden;
      if (isActive) animate();
    };
    document.addEventListener("visibilitychange", onVisibility);

    animate();

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      document.removeEventListener("visibilitychange", onVisibility);
      [bgGeo, midGeo, fgGeo, neb1Geo, neb2Geo, mwGeo].forEach(g => g.dispose());
      [bgMat, midMat, fgMat, neb1Mat, neb2Mat, mwMat].forEach(m => m.dispose());
      renderer.dispose();
      if (mount.contains(renderer.domElement)) mount.removeChild(renderer.domElement);
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="fixed inset-0 pointer-events-none"
      style={{ zIndex: -1 }}
      aria-hidden="true"
    />
  );
}
