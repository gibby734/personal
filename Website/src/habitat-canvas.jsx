import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'
import { RectAreaLightUniformsLib } from 'three/examples/jsm/lights/RectAreaLightUniformsLib.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

RectAreaLightUniformsLib.init()

// ── Scroll hook — watches only sections matching a parity (even or odd index) ──
function useColumnScroll(parity) {
  const ref = useRef({ progress: 0, visible: false })

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight
      const ZONE_TOP = vh * 0.2
      const ZONE_BOT = vh * 0.8
      const sections = document.querySelectorAll('[data-habitat]')

      let found = false
      sections.forEach((el) => {
        const idx = parseInt(el.dataset.habitat)
        if (idx % 2 !== parity) return

        const rect = el.getBoundingClientRect()
        if (rect.bottom < ZONE_TOP || rect.top > ZONE_BOT) return

        const totalTravel = rect.height + (ZONE_BOT - ZONE_TOP)
        const traveled = ZONE_BOT - rect.top
        const p = Math.max(0, Math.min(1, traveled / totalTravel))

        // Only take this section if nothing found yet (sections don't overlap in same column)
        if (!found) {
          found = true
          ref.current = { progress: p, visible: true, isFirst: idx === 0, activeIndex: idx }
        }
      })

      if (!found) ref.current = { progress: 0, visible: false, isFirst: false, activeIndex: -1 }
    }

    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    onScroll()
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [parity])

  return ref
}

// ── Easing ────────────────────────────────────────────────────────────────────
const easeOut = t => 1 - Math.pow(1 - t, 2)
const easeIn  = t => Math.pow(t, 2)

function stageY(p, isFirst) {
  const entryStart = isFirst ? 0.18 : 0.08
  const entryEnd   = isFirst ? 0.38 : 0.28
  if (p < entryStart) return 28
  if (p < entryEnd)   return THREE.MathUtils.lerp(28, -4, easeOut((p - entryStart) / (entryEnd - entryStart)))
  if (p < 0.58)       return -4
  if (p < 0.78)       return THREE.MathUtils.lerp(-4, -28, easeIn((p - 0.58) / 0.20))
  return -28
}

// ── Scene builders ────────────────────────────────────────────────────────────
function buildShell(scene) {
  const mat = new THREE.MeshBasicMaterial({ color: 0x000000, side: THREE.DoubleSide })
  const W = 16, H = 40, Z_BACK = -10, Z_FRONT = 3.8
  const D = Z_FRONT - Z_BACK
  const Z_MID = (Z_BACK + Z_FRONT) / 2

  const left = new THREE.Mesh(new THREE.PlaneGeometry(D + 2, H), mat)
  left.rotation.y = Math.PI / 2
  left.position.set(-(W / 2 + 0.05), 0, Z_MID)
  scene.add(left)

  const right = new THREE.Mesh(new THREE.PlaneGeometry(D + 2, H), mat)
  right.rotation.y = -Math.PI / 2
  right.position.set(W / 2 + 0.05, 0, Z_MID)
  scene.add(right)

  const back = new THREE.Mesh(new THREE.PlaneGeometry(W + 2, H), mat)
  back.position.set(0, 0, Z_BACK - 0.05)
  scene.add(back)
}

function buildStage(g) {
  const floorD = 13.8
  const floorZ = -3.1

  const mat = new THREE.MeshStandardMaterial({ color: 0x0e0e0e, roughness: 0.9, metalness: 0.0, side: THREE.DoubleSide })
  const ceilMat = mat

  const floor = new THREE.Mesh(new THREE.PlaneGeometry(16, floorD), mat)
  floor.rotation.x = -Math.PI / 2
  floor.position.set(0, 0, floorZ)
  g.add(floor)

  ;[-8, 8].forEach(x => {
    const wing = new THREE.Mesh(new THREE.BoxGeometry(0.01, 10, floorD), mat)
    wing.position.set(x, 5, floorZ)
    g.add(wing)
  })

  const backWall = new THREE.Mesh(new THREE.PlaneGeometry(16, 10), mat)
  backWall.position.set(0, 5, -10)
  g.add(backWall)

  const ceiling = new THREE.Mesh(new THREE.PlaneGeometry(16, floorD), ceilMat)
  ceiling.rotation.x = -Math.PI / 2
  ceiling.position.set(0, 10, floorZ)
  g.add(ceiling)
}


function buildTerhertzScene(g) {
  // Empty for now
}

function buildGoalScene(g) {
  const orangeMat = new THREE.MeshStandardMaterial({ color: 0xff6a00, roughness: 0.4, metalness: 0.6 })
  const netMat    = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.8, metalness: 0, wireframe: true })
  const ballMat   = new THREE.MeshStandardMaterial({ color: 0xffffff, roughness: 0.3, metalness: 0.2 })

  const GW = 5.5, GH = 3.2, GD = 2.0
  const T  = 0.12
  const Z0 = -6

  // Goal posts and crossbar
  const post = (w, h, d, x, y, z) => {
    const m = new THREE.Mesh(new THREE.BoxGeometry(w, h, d), orangeMat)
    m.position.set(x, y, z)
    g.add(m)
  }

  post(T, GH, T,  -GW / 2, GH / 2, Z0)          // left post
  post(T, GH, T,   GW / 2, GH / 2, Z0)          // right post
  post(GW + T, T, T, 0, GH, Z0)                  // crossbar top
  post(T, T, GD, -GW / 2, GH, Z0 + GD / 2)      // top-left back
  post(T, T, GD,  GW / 2, GH, Z0 + GD / 2)      // top-right back
  post(T, GH, T, -GW / 2, GH / 2, Z0 + GD)      // left back post
  post(T, GH, T,  GW / 2, GH / 2, Z0 + GD)      // right back post
  post(GW + T, T, T, 0, GH, Z0 + GD)             // crossbar back
  post(GW + T, T, T, 0, 0,  Z0 + GD)             // bottom back

  // Net (wireframe box filling the goal)
  const net = new THREE.Mesh(new THREE.BoxGeometry(GW, GH, GD), netMat)
  net.position.set(0, GH / 2, Z0 + GD / 2)
  g.add(net)

  // Ball in front of goal
  const ball = new THREE.Mesh(new THREE.SphereGeometry(0.55, 32, 32), ballMat)
  ball.position.set(0, 0.55, Z0 + GD + 1.5)
  g.add(ball)
}

function buildLighting(scene, g) {
  scene.add(new THREE.AmbientLight(0xffffff, 0.6))

  const rect = new THREE.RectAreaLight(0xfff8f0, 8, 16, 13.8)
  rect.position.set(0, 9.9, -3.1)
  rect.rotation.x = -Math.PI / 2
  g.add(rect)
}

// ── Single column canvas ──────────────────────────────────────────────────────
function ColumnCanvas({ parity }) {
  const mountRef = useRef(null)
  const scrollRef = useColumnScroll(parity)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x000000, 0.04)

    const camera = new THREE.PerspectiveCamera(52, mount.clientWidth / mount.clientHeight, 0.1, 80)
    camera.position.set(0, 3, 20)
    camera.lookAt(0, 1.5, -1)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.setSize(mount.clientWidth, mount.clientHeight)
    renderer.setClearColor(0x000000, 0)
    renderer.shadowMap.enabled = true
    renderer.shadowMap.type = THREE.PCFSoftShadowMap
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.1
    mount.appendChild(renderer.domElement)

    const stageGroup = new THREE.Group()
    scene.add(stageGroup)

    buildShell(scene)
    buildStage(stageGroup)
    buildLighting(scene, stageGroup)

    // Per-project prop groups — shown/hidden based on activeIndex
    const propGroups = {}
    if (parity === 0) {
      const thzGroup = new THREE.Group()
      buildTerhertzScene(thzGroup)
      thzGroup.visible = false
      stageGroup.add(thzGroup)
      propGroups[0] = thzGroup

      const goalGroup = new THREE.Group()
      buildGoalScene(goalGroup)
      goalGroup.visible = false
      stageGroup.add(goalGroup)
      propGroups[2] = goalGroup
    }

    const ro = new ResizeObserver(() => {
      camera.aspect = mount.clientWidth / mount.clientHeight
      camera.updateProjectionMatrix()
      renderer.setSize(mount.clientWidth, mount.clientHeight)
    })
    ro.observe(mount)

    let frameId
    let disposed = false
    let lastVisible = false

    const animate = () => {
      if (disposed) return
      frameId = requestAnimationFrame(animate)

      const { visible, progress, isFirst, activeIndex } = scrollRef.current

      if (!visible && !lastVisible) return
      lastVisible = visible
      mount.style.opacity = visible ? '1' : '0'

      // Show only the prop group for the active project
      Object.entries(propGroups).forEach(([idx, grp]) => {
        grp.visible = parseInt(idx) === activeIndex
      })

      if (!visible) {
        renderer.render(scene, camera)
        return
      }

      stageGroup.position.y = stageY(progress, isFirst)
      renderer.render(scene, camera)
    }
    frameId = requestAnimationFrame(animate)

    return () => {
      disposed = true
      cancelAnimationFrame(frameId)
      ro.disconnect()
      scene.traverse((obj) => {
        obj.geometry?.dispose()
        if (Array.isArray(obj.material)) obj.material.forEach(m => m.dispose())
        else obj.material?.dispose()
      })
      renderer.dispose()
      mount.innerHTML = ''
    }
  }, [])

  // Even parity (0) → left column. Odd (1) → right column.
  const isLeft = parity === 0
  return (
    <div
      aria-hidden
      style={{
        position: 'fixed',
        top: '20vh',
        bottom: '20vh',
        left: isLeft ? 0 : '50%',
        right: isLeft ? '50%' : 0,
        zIndex: 1,
        pointerEvents: 'none',
      }}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </div>
  )
}

// ── Exported component — renders both column canvases ─────────────────────────
export function HabitatCanvas() {
  return (
    <>
      <ColumnCanvas parity={0} />
      <ColumnCanvas parity={1} />
    </>
  )
}
