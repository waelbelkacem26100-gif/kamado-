'use client'
import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import ThreeGlobe from 'three-globe'

export default function GlobeCanvas() {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!mountRef.current) return
    const el = mountRef.current
    const width = el.clientWidth
    const height = el.clientHeight

    // Scene
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 2.5

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    el.appendChild(renderer.domElement)

    // Globe avec three-globe
    const globe = new ThreeGlobe()
      .globeImageUrl('https://unpkg.com/three-globe/example/img/earth-night.jpg')
      .bumpImageUrl('https://unpkg.com/three-globe/example/img/earth-topology.png')
      .showAtmosphere(true)
      .atmosphereColor('#1a88ff')
      .atmosphereAltitude(0.12)
      .pointsData([
        { lat: 48.85, lng: 2.35, label: 'Paris' },
        { lat: 50.85, lng: 4.35, label: 'Bruxelles' },
        { lat: 46.20, lng: 6.15, label: 'Genève' },
        { lat: 45.50, lng: -73.57, label: 'Montréal' },
      ])
      .pointColor(() => '#00ff88')
      .pointAltitude(0.01)
      .pointRadius(0.4)

    // Échelle adaptée
    globe.scale.set(0.1, 0.1, 0.1)
    globe.rotation.x = 0.3
    scene.add(globe)

    // Lumières
    scene.add(new THREE.AmbientLight('#ffffff', 0.8))
    const dirLight = new THREE.DirectionalLight('#ffffff', 2.0)
    dirLight.position.set(5, 3, 5)
    scene.add(dirLight)
    scene.add(new THREE.HemisphereLight('#1a4488', '#000000', 0.5))

    // Auto-rotation + drag
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

    // Animate
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

    // Resize
    const onResize = () => {
      const w = el.clientWidth, h = el.clientHeight
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

  return <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
}
