'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'

export default function GlobeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const el = mountRef.current

    // Fallback si le layout n'est pas encore calculé au mount
    const width  = el.clientWidth  || el.offsetWidth  || 600
    const height = el.clientHeight || el.offsetHeight || 500

    // three-globe travaille en unités monde : rayon globe = 100
    // → caméra à z=250 (2.5× le rayon) = distance standard
    const scene  = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(50, width / height, 1, 3000)
    camera.position.z = 250

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setClearColor(0x000000, 0)
    el.appendChild(renderer.domElement)

    // Globe — pas de scale manuel, rayon natif = 100
    const globe = new ThreeGlobe()
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .showAtmosphere(true)
      .atmosphereColor('#1a88ff')
      .atmosphereAltitude(0.15)
      .pointsData([
        { lat: 48.85, lng: 2.35 },
        { lat: 50.85, lng: 4.35 },
        { lat: 46.20, lng: 6.15 },
        { lat: 45.50, lng: -73.57 },
      ])
      .pointColor(() => '#00ff88')
      .pointAltitude(0.02)
      .pointRadius(0.5)

    globe.rotation.x = 0.3
    scene.add(globe)

    // Lumières positionnées à l'extérieur du globe (rayon 100)
    scene.add(new THREE.AmbientLight(0xffffff, 0.8))
    const dirLight = new THREE.DirectionalLight(0xffffff, 2.0)
    dirLight.position.set(300, 150, 300)
    scene.add(dirLight)
    scene.add(new THREE.HemisphereLight(0x1a4488, 0x000000, 0.5))

    // Drag interactif
    let isDragging = false
    let prevX = 0, prevY = 0
    let velX = 0, velY = 0

    const onMouseDown = (e: MouseEvent) => { isDragging = true; prevX = e.clientX; prevY = e.clientY }
    const onMouseMove = (e: MouseEvent) => {
      if (!isDragging) return
      velX = (e.clientX - prevX) * 0.005
      velY = (e.clientY - prevY) * 0.005
      globe.rotation.y += velX
      globe.rotation.x += velY
      prevX = e.clientX; prevY = e.clientY
    }
    const onMouseUp = () => { isDragging = false }
    const onTouchStart = (e: TouchEvent) => { isDragging = true; prevX = e.touches[0].clientX; prevY = e.touches[0].clientY }
    const onTouchMove = (e: TouchEvent) => {
      if (!isDragging) return
      velX = (e.touches[0].clientX - prevX) * 0.005
      globe.rotation.y += velX
      prevX = e.touches[0].clientX
    }
    const onTouchEnd = () => { isDragging = false }

    el.addEventListener('mousedown', onMouseDown)
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', onMouseUp)
    el.addEventListener('touchstart', onTouchStart)
    el.addEventListener('touchmove', onTouchMove)
    el.addEventListener('touchend', onTouchEnd)

    let animId: number
    const animate = () => {
      animId = requestAnimationFrame(animate)
      if (!isDragging) {
        globe.rotation.y += 0.0015
        velX *= 0.95
        velY *= 0.95
      }
      renderer.render(scene, camera)
    }
    animate()

    const onResize = () => {
      const w = el.clientWidth  || el.offsetWidth  || 600
      const h = el.clientHeight || el.offsetHeight || 500
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      renderer.setSize(w, h)
    }
    window.addEventListener('resize', onResize)

    return () => {
      cancelAnimationFrame(animId)
      el.removeEventListener('mousedown', onMouseDown)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('mouseup', onMouseUp)
      el.removeEventListener('touchstart', onTouchStart)
      el.removeEventListener('touchmove', onTouchMove)
      el.removeEventListener('touchend', onTouchEnd)
      window.removeEventListener('resize', onResize)
      renderer.dispose()
      if (el.contains(renderer.domElement)) el.removeChild(renderer.domElement)
    }
  }, [])

  return <div ref={mountRef} style={{ width: '100%', height: '100%', minHeight: '360px' }} />
}
