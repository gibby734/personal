import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import * as Toolbar from '@radix-ui/react-toolbar'
import * as Tooltip from '@radix-ui/react-tooltip'
import * as HoverCard from '@radix-ui/react-hover-card'
import { ProjectsSection, ContactSection } from './sections.jsx'
import { HabitatCanvas } from './habitat-canvas.jsx'
import {
  useTweaks, TweaksPanel, TweakSection,
  TweakToggle, TweakRadio, TweakSlider,
} from './tweaks-panel.jsx'

const TECHNOLOGIES = [
  { name: "C",           src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",                       category: "Backend" },
  { name: "C++",         src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",       category: "Backend" },
  { name: "C#",          src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg",             category: "Backend" },
  { name: "Java",        src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",                 category: "Backend" },
  { name: "TypeScript",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",     category: "Frontend" },
  { name: "Python",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",             category: "Backend" },
  { name: "React",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",               category: "Frontend" },
  { name: "Spring Boot", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",             category: "Backend" },
  { name: "Node.js",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",             category: "Backend" },
  { name: "PostgreSQL",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",     category: "Backend" },
  { name: "Redis",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",               category: "Backend" },
  { name: "Docker",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",             category: "Infrastructure" },
  { name: "Linux",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",               category: "Infrastructure" },
  { name: "Git",         src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg",                   category: "Infrastructure" },
  { name: "Azure",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",               category: "Infrastructure" },
  { name: "Unity",       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/unity/unity-original.svg",               category: "Frontend" },
  { name: "PyTorch",     src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg",           category: "Backend" },
  { name: "Ollama",      src: "https://ollama.com/public/ollama.png", iconBg: "white",                                     category: "Backend" },
  { name: "Wireshark",   src: "https://upload.wikimedia.org/wikipedia/commons/d/df/Wireshark_icon.svg",                   category: "Cybersecurity" },
  {
    name: "Burp Suite",
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/burpsuite.svg",
    tint: "invert(38%) sepia(94%) saturate(2200%) hue-rotate(0deg) brightness(95%) contrast(105%)",
    category: "Cybersecurity",
    monitorBg: "square",
  },
  { name: "Postman",      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg",          category: "Backend" },
  { name: "Raspberry Pi", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/raspberrypi/raspberrypi-original.svg",  category: "Infrastructure" },
  {
    name: "Arduino",
    src: "https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/arduino.svg",
    tint: "invert(48%) sepia(69%) saturate(773%) hue-rotate(141deg) brightness(91%) contrast(89%)",
    category: "Infrastructure",
    monitorSrc: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg",
    monitorScale: 1.08,
  },
  { name: "Bash",  src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",                       category: "Infrastructure" },
  { name: "OAuth", src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oauth/oauth-original.svg",                     category: "Cybersecurity" },
]

function TechCard({ tech }) {
  return (
    <HoverCard.Root openDelay={120} closeDelay={80}>
      <HoverCard.Trigger asChild>
        <div className="aspect-square flex items-center justify-center rounded-md hover:-translate-y-px transition-all duration-200 ease-out p-2.5 cursor-default">
          {tech.iconBg ? (
            <div className="w-full h-full max-w-[44px] max-h-[44px] rounded-full bg-white flex items-center justify-center p-1.5">
              <img src={tech.src} alt={tech.name} className="w-full h-full object-contain transition-transform duration-200 ease-out hover:scale-[1.04]" style={tech.tint ? { filter: tech.tint } : undefined} />
            </div>
          ) : (
            <img src={tech.src} alt={tech.name} className="w-full h-full object-contain transition-transform duration-200 ease-out hover:scale-[1.04]" style={tech.tint ? { filter: tech.tint } : undefined} />
          )}
        </div>
      </HoverCard.Trigger>
      <HoverCard.Portal>
        <HoverCard.Content
          sideOffset={10}
          className="z-50 px-3 py-2 rounded-md bg-white/95 dark:bg-neutral-900/95 backdrop-blur-md border border-neutral-200 dark:border-neutral-800 shadow-[0_8px_24px_-12px_rgba(15,23,42,0.28)] dark:shadow-[0_10px_28px_-16px_rgba(0,0,0,0.55)] text-[12px] font-mono tracking-tight text-neutral-800 dark:text-neutral-100 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=open]:fade-in-0 data-[state=closed]:fade-out-0 data-[state=open]:zoom-in-95 data-[state=closed]:zoom-out-95 data-[state=open]:slide-in-from-bottom-1 transition-all duration-200"
        >
          <span className="text-red-700 dark:text-red-400 mr-2">&rsaquo;</span>
          {tech.name}
          <HoverCard.Arrow className="fill-white/95 dark:fill-neutral-900/95" />
        </HoverCard.Content>
      </HoverCard.Portal>
    </HoverCard.Root>
  )
}

function RetroMonitorScene({ dark }) {
  const mountRef = useRef(null)
  const [loadError, setLoadError] = useState(false)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return undefined

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(40, 1, 0.1, 100)
    camera.position.set(-1, 2, 8)
    camera.lookAt(0, 0.5, 0)

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2))
    renderer.setClearColor(0x000000, 0)
    if (renderer.outputColorSpace) renderer.outputColorSpace = THREE.SRGBColorSpace
    mount.appendChild(renderer.domElement)

    const ambient = new THREE.AmbientLight(0xffffff, dark ? 0.085 : 0.11)
    const fillLight = new THREE.HemisphereLight(0xf5f7fb, 0x000000, dark ? 0.22 : 0.28)
    scene.add(ambient, fillLight)

    const screenCanvas = document.createElement('canvas')
    screenCanvas.width = 1024
    screenCanvas.height = 1024
    const screenContext = screenCanvas.getContext('2d')
    const screenTexture = new THREE.CanvasTexture(screenCanvas)
    screenTexture.colorSpace = THREE.SRGBColorSpace
    screenTexture.wrapS = THREE.ClampToEdgeWrapping
    screenTexture.wrapT = THREE.ClampToEdgeWrapping

    const gryphonImage = new Image()
    gryphonImage.src = '/images/gryphon.png'
    const techLogoImages = TECHNOLOGIES.map((tech) => {
      const image = new Image()
      image.crossOrigin = 'anonymous'
      image.src = tech.src
      const monitorImage = new Image()
      monitorImage.crossOrigin = 'anonymous'
      monitorImage.src = tech.monitorSrc || tech.src
      return { ...tech, image, monitorImage }
    })
    const categoryOrder = ['Frontend', 'Backend', 'Cybersecurity', 'Infrastructure']
    let screenMode = 'boot'
    let bootStart = performance.now()
    const ledMaterials = []

    const paintBootScreen = () => {
      if (!screenContext) return
      screenContext.fillStyle = '#000000'
      screenContext.fillRect(0, 0, screenCanvas.width, screenCanvas.height)

      drawDitheredImage({ image: gryphonImage, monitorImage: gryphonImage }, 282, 92, 460, 270, { fit: 'contain', invert: true })

      screenContext.fillStyle = 'rgba(116, 182, 255, 0.95)'
      screenContext.font = "600 28px 'Courier New', monospace"
      screenContext.fillText('GRYPHON DEV', 382, 412)

      const elapsed = performance.now() - bootStart
      const terminalLines = ['boot sequence init', 'display bus online', 'framebuffer sync stable', 'gryphon image loaded', 'logo carousel queued', 'system ready']
      const visibleLines = Math.min(terminalLines.length, Math.floor(elapsed / 520) + 1)
      screenContext.font = "600 24px 'Courier New', monospace"
      terminalLines.slice(0, visibleLines).forEach((line, index) => {
        screenContext.fillText('> ' + line, 88, 760 + index * 34)
      })

      const dots = '.'.repeat(((Math.floor(elapsed / 300)) % 3) + 1)
      screenContext.fillText('> ' + dots, 88, 760 + visibleLines * 34)

      screenContext.strokeStyle = 'rgba(116, 182, 255, 0.12)'
      screenContext.lineWidth = 1
      for (let y = 0; y < screenCanvas.height; y += 6) {
        screenContext.beginPath()
        screenContext.moveTo(0, y)
        screenContext.lineTo(screenCanvas.width, y)
        screenContext.stroke()
      }
      paintCrtInterference()
      screenTexture.needsUpdate = true
    }

    const drawDitheredImage = (tech, dx, dy, dw, dh, options = {}) => {
      const sourceImage = tech.monitorImage || tech.image
      if (!screenContext || !sourceImage.complete) return
      const tempCanvas = document.createElement('canvas')
      tempCanvas.width = 96
      tempCanvas.height = 96
      const tempContext = tempCanvas.getContext('2d')
      if (!tempContext) return

      tempContext.fillStyle = '#000000'
      tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height)

      if (tech.iconBg || tech.monitorBg === 'circle') {
        tempContext.fillStyle = '#ffffff'
        tempContext.beginPath()
        tempContext.arc(tempCanvas.width / 2, tempCanvas.height / 2, 38, 0, Math.PI * 2)
        tempContext.fill()
      } else if (tech.monitorBg === 'square') {
        tempContext.fillStyle = '#ffffff'
        tempContext.fillRect(10, 10, tempCanvas.width - 20, tempCanvas.height - 20)
      }

      if (options.fit === 'contain') {
        const containScale = Math.min(tempCanvas.width / sourceImage.width, tempCanvas.height / sourceImage.height)
        const containWidth = sourceImage.width * containScale
        const containHeight = sourceImage.height * containScale
        const containX = (tempCanvas.width - containWidth) / 2
        const containY = (tempCanvas.height - containHeight) / 2
        tempContext.fillStyle = '#000000'
        tempContext.fillRect(0, 0, tempCanvas.width, tempCanvas.height)
        tempContext.drawImage(sourceImage, 0, 0, sourceImage.width, sourceImage.height, containX, containY, containWidth, containHeight)
      } else {
        const imageAspect = sourceImage.width / sourceImage.height
        const targetAspect = tempCanvas.width / tempCanvas.height
        let sourceX = 0, sourceY = 0
        let sourceWidth = sourceImage.width, sourceHeight = sourceImage.height

        if (imageAspect > targetAspect) {
          sourceWidth = sourceImage.height * targetAspect
          sourceX = (sourceImage.width - sourceWidth) / 2
        } else {
          sourceHeight = sourceImage.width / targetAspect
          sourceY = (sourceImage.height - sourceHeight) / 2
        }

        const destInset = tech.monitorBg === 'circle' ? 18 : 0
        const baseDestSize = tempCanvas.width - (destInset * 2)
        const destSize = baseDestSize * (tech.monitorScale || 1)
        const destOffset = destInset - ((destSize - baseDestSize) / 2)
        tempContext.drawImage(sourceImage, sourceX, sourceY, sourceWidth, sourceHeight, destOffset, destOffset, destSize, destSize)
      }

      const data = tempContext.getImageData(0, 0, tempCanvas.width, tempCanvas.height)
      const matrix = [[0, 8, 2, 10], [12, 4, 14, 6], [3, 11, 1, 9], [15, 7, 13, 5]]

      for (let y = 0; y < data.height; y++) {
        for (let x = 0; x < data.width; x++) {
          const index = (y * data.width + x) * 4
          const alpha = data.data[index + 3] / 255
          const rawLuminance = (0.299 * data.data[index]) + (0.587 * data.data[index + 1]) + (0.114 * data.data[index + 2])
          const luminance = rawLuminance * alpha
          const threshold = matrix[y % 4][x % 4] * 16
          const treatAsBackground = options.invert && rawLuminance > 242
          const on = treatAsBackground ? false : (options.invert ? luminance <= threshold : luminance > threshold)
          const opaqueEnough = alpha > 0.12
          data.data[index]     = opaqueEnough && on ? 116 : 0
          data.data[index + 1] = opaqueEnough && on ? 182 : 0
          data.data[index + 2] = opaqueEnough && on ? 255 : 0
          data.data[index + 3] = opaqueEnough && on ? 255 : 255
        }
      }

      tempContext.putImageData(data, 0, 0)
      screenContext.drawImage(tempCanvas, dx, dy, dw, dh)
    }

    const paintCrtInterference = () => {
      if (!screenContext) return
      const now = performance.now() - bootStart
      const bandHeight = 120
      const cycleDuration = 8800
      const passDuration = 2600
      const cycleProgress = now % cycleDuration
      if (cycleProgress > passDuration) return
      const travelDistance = screenCanvas.height + bandHeight
      const bandY = ((cycleProgress / passDuration) * travelDistance) - bandHeight
      const startY = Math.max(0, Math.floor(bandY))
      const endY = Math.min(screenCanvas.height - 2, Math.floor(bandY + bandHeight))

      for (let y = startY; y < endY; y += 2) {
        const localY = y - bandY
        const distance = Math.abs(localY - bandHeight / 2) / (bandHeight / 2)
        const strength = Math.max(0, 1 - distance)
        const offset = Math.round(Math.sin((localY * 0.22) + (now * 0.01)) * 8 * strength)
        screenContext.drawImage(screenCanvas, 0, y, screenCanvas.width, 2, offset, y, screenCanvas.width, 2)
      }

      const interferenceGradient = screenContext.createLinearGradient(0, bandY, 0, bandY + bandHeight)
      interferenceGradient.addColorStop(0,    'rgba(0,0,0,0)')
      interferenceGradient.addColorStop(0.15, 'rgba(116,182,255,0.06)')
      interferenceGradient.addColorStop(0.5,  'rgba(116,182,255,0.12)')
      interferenceGradient.addColorStop(0.85, 'rgba(116,182,255,0.06)')
      interferenceGradient.addColorStop(1,    'rgba(0,0,0,0)')
      screenContext.fillStyle = interferenceGradient
      screenContext.fillRect(0, startY, screenCanvas.width, Math.max(0, endY - startY))
    }

    const paintTechScreen = () => {
      if (!screenContext) return
      const elapsed = Math.max(0, performance.now() - bootStart - 3200)
      const holdDuration = 7600
      const slideDuration = 1800
      const cycleDuration = holdDuration + slideDuration
      const cycleIndex = Math.floor(elapsed / cycleDuration)
      const cycleProgress = elapsed % cycleDuration
      const currentCategory = categoryOrder[cycleIndex % categoryOrder.length]
      const nextCategory = categoryOrder[(cycleIndex + 1) % categoryOrder.length]
      const currentTechnologies = techLogoImages.filter((tech) => tech.category === currentCategory)
      const nextTechnologies = techLogoImages.filter((tech) => tech.category === nextCategory)
      const formattedTime = new Intl.DateTimeFormat('en-US', { month: '2-digit', day: '2-digit', year: '2-digit', hour: '2-digit', minute: '2-digit' }).format(new Date())

      screenContext.fillStyle = '#000000'
      screenContext.fillRect(0, 0, screenCanvas.width, screenCanvas.height)

      screenContext.fillStyle = 'rgba(116, 182, 255, 0.98)'
      screenContext.font = "600 34px 'Courier New', monospace"
      screenContext.fillText(currentCategory.toUpperCase(), 88, 92)
      screenContext.font = "500 22px 'Courier New', monospace"
      screenContext.fillText(formattedTime, 670, 92)

      const drawCategoryPage = (technologies, pageOffsetX) => {
        const columns = 3, rows = 3
        const tileWidth = 230, tileHeight = 230, iconSize = 204
        const startX = 88 + pageOffsetX, startY = 142
        const gapX = 36, gapY = 30
        technologies.slice(0, columns * rows).forEach((tech, index) => {
          const col = index % columns
          const row = Math.floor(index / columns)
          const x = startX + col * (tileWidth + gapX)
          const y = startY + row * (tileHeight + gapY)
          drawDitheredImage(tech, x + ((tileWidth - iconSize) / 2), y + 2, iconSize, iconSize)
          screenContext.fillStyle = 'rgba(116, 182, 255, 0.98)'
          screenContext.font = "600 22px 'Courier New', monospace"
          screenContext.textAlign = 'center'
          screenContext.fillText(tech.name.slice(0, 12), x + (tileWidth / 2), y + tileHeight - 18)
          screenContext.textAlign = 'left'
        })
      }

      if (cycleProgress <= holdDuration) {
        drawCategoryPage(currentTechnologies, 0)
      } else {
        const slideProgress = (cycleProgress - holdDuration) / slideDuration
        const eased = 1 - Math.pow(1 - slideProgress, 3)
        drawCategoryPage(currentTechnologies, eased * screenCanvas.width)
        drawCategoryPage(nextTechnologies, (eased * screenCanvas.width) - screenCanvas.width)
      }

      screenContext.strokeStyle = 'rgba(116, 182, 255, 0.16)'
      screenContext.lineWidth = 1
      for (let y = 0; y < screenCanvas.height; y += 6) {
        screenContext.beginPath()
        screenContext.moveTo(0, y)
        screenContext.lineTo(screenCanvas.width, y)
        screenContext.stroke()
      }
      paintCrtInterference()
      screenTexture.needsUpdate = true
    }

    paintBootScreen()

    let frameId = 0
    let disposed = false
    let modelRoot = null
    let resizeObserver = null
    let lastScreenPaint = 0

    const resize = () => {
      const width = mount.clientWidth || 320
      const height = mount.clientHeight || 320
      camera.aspect = width / height
      camera.updateProjectionMatrix()
      renderer.setSize(width, height, false)
    }

    resize()
    resizeObserver = new ResizeObserver(resize)
    resizeObserver.observe(mount)

    const loader = new GLTFLoader()
    loader.load(
      '/models/retro_monitor_-_ibmcommodore_style_monitor.glb',
      (gltf) => {
        if (disposed) return
        const model = gltf.scene
        model.traverse((child) => {
          if (child.isMesh) {
            child.castShadow = false
            child.receiveShadow = false
            const originalMaterial = child.material
            const materialName = originalMaterial?.name
            if (materialName === 'Screen') {
              child.material = new THREE.MeshBasicMaterial({ map: screenTexture })
            } else if (originalMaterial) {
              let baseColor = 0xffffff
              if (materialName === 'Case_Plastic')             baseColor = dark ? 0x0d0f12 : 0xfafbfd
              else if (materialName === 'Frame1' || materialName === 'Frame2') baseColor = dark ? 0x181b20 : 0xf1f4f8
              else if (materialName === 'Gray')                baseColor = dark ? 0xe9edf2 : 0xffffff
              else if (materialName === 'Iron')                baseColor = dark ? 0x050608 : 0xe8edf3
              else if (materialName === 'Emission_LED')        baseColor = 0xcff1ff

              const originalMap = originalMaterial.map || null
              originalMaterial.dispose?.()
              child.material = new THREE.MeshLambertMaterial({
                color: new THREE.Color(baseColor),
                map: originalMap,
                emissive: materialName === 'Emission_LED' ? new THREE.Color(0xa8ecff) : new THREE.Color(0x000000),
                emissiveIntensity: materialName === 'Emission_LED' ? 1.8 : 0,
              })
              if (materialName === 'Emission_LED') ledMaterials.push(child.material)
            }
          }
        })

        const box = new THREE.Box3().setFromObject(model)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())
        const maxAxis = Math.max(size.x, size.y, size.z) || 1
        const scale = 4.9 / maxAxis
        model.position.sub(center)
        model.scale.setScalar(scale)

        modelRoot = new THREE.Group()
        modelRoot.add(model)
        modelRoot.rotation.x = -0.08
        modelRoot.rotation.y = -0.30 - (Math.PI / 2)
        modelRoot.position.set(0, -0.25, 0)
        scene.add(modelRoot)
      },
      undefined,
      () => { if (!disposed) setLoadError(true) }
    )

    const animate = (timestamp) => {
      if (disposed) return
      frameId = window.requestAnimationFrame(animate)
      if (timestamp - lastScreenPaint >= 100) {
        lastScreenPaint = timestamp
        if (screenMode === 'boot') {
          paintBootScreen()
          ledMaterials.forEach((m) => { m.color.set(0xff3b30); m.emissive.set(0xff3b30) })
          if (performance.now() - bootStart > 3200 && techLogoImages.every((t) => t.image.complete)) {
            screenMode = 'logos'
            paintTechScreen()
          }
        } else if (screenMode === 'logos') {
          ledMaterials.forEach((m) => { m.color.set(0x2cff72); m.emissive.set(0x2cff72) })
          paintTechScreen()
        }
      }
      renderer.render(scene, camera)
    }
    frameId = window.requestAnimationFrame(animate)

    return () => {
      disposed = true
      window.cancelAnimationFrame(frameId)
      resizeObserver?.disconnect()
      scene.traverse((child) => {
        if (child.geometry) child.geometry.dispose?.()
        if (child.material) {
          Array.isArray(child.material)
            ? child.material.forEach((m) => m.dispose?.())
            : child.material.dispose?.()
        }
      })
      screenTexture.dispose()
      renderer.dispose()
      mount.innerHTML = ''
    }
  }, [dark])

  return (
    <div className="w-full max-w-none self-center md:self-end">
      <div className="relative rounded-[28px] bg-transparent shadow-none overflow-visible">
        <div ref={mountRef} className="relative h-[620px] w-full" />
        {loadError && (
          <div className="absolute inset-x-4 bottom-4 rounded-xl border border-red-200/70 bg-white/90 px-4 py-3 text-xs text-red-900 dark:border-red-500/20 dark:bg-neutral-950/90 dark:text-rose-200">
            The monitor model did not load. Refresh the page after restarting the local server.
          </div>
        )}
      </div>
    </div>
  )
}

function PageBackground({ dark }) {
  return (
    <div aria-hidden className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      <div className="absolute inset-0 bg-black" />
    </div>
  )
}

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "showDivider": true,
  "dividerStyle": "line",
  "dividerWidth": 1,
  "scrollLink": "grow",
  "centerColumns": true,
  "headshotSize": 220,
  "nameSize": 86,
  "accentIntensity": 0.8
}/*EDITMODE-END*/

function CenterDivider({ t, dark, scrollProgress }) {
  if (!t.showDivider) return null

  let scaleY = 1
  let opacity = 1
  if (t.scrollLink === 'grow') {
    scaleY = 1
    opacity = 0.5 + scrollProgress * 0.5
  } else if (t.scrollLink === 'fade') {
    opacity = Math.max(0, 1 - scrollProgress * 1.2)
  }

  const colorClass = dark ? 'bg-rose-300/50' : 'bg-red-800/60'

  if (t.dividerStyle === 'dotted') {
    return (
      <div
        aria-hidden
        className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 z-[5] flex flex-col items-center justify-start"
        style={{ opacity, transform: `translateX(-50%) scaleY(${scaleY})`, transformOrigin: 'top' }}
      >
        <div
          className={`w-px h-full ${colorClass}`}
          style={{
            backgroundImage: dark
              ? 'repeating-linear-gradient(to bottom, rgba(244,164,176,0.7) 0 4px, transparent 4px 10px)'
              : 'repeating-linear-gradient(to bottom, rgba(153,27,27,0.7) 0 4px, transparent 4px 10px)',
            background: 'transparent',
          }}
        />
      </div>
    )
  }

  return (
    <div
      aria-hidden
      className="absolute top-0 bottom-0 left-1/2 z-[5] flex flex-col items-center"
      style={{ opacity, transform: `translateX(-50%) scaleY(${scaleY})`, transformOrigin: 'top', width: t.dividerWidth + 'px' }}
    >
      <div className={`w-full flex-1 ${colorClass}`} />
    </div>
  )
}

function TopBar({ dark, setDark }) {
  const linkBase =
    'px-3 py-1.5 rounded-md text-[13px] outline-none transition ' +
    'text-neutral-700 dark:text-neutral-300 hover:text-black dark:hover:text-white ' +
    'hover:bg-neutral-200 dark:hover:bg-neutral-900 ' +
    'focus-visible:ring-1 focus-visible:ring-red-700/40 dark:focus-visible:ring-rose-300/50'
  const accentLink =
    'px-3 py-1.5 rounded-md text-[13px] outline-none transition flex items-center gap-2 ' +
    'text-red-800 dark:text-red-400 hover:text-red-900 dark:hover:text-red-300 ' +
    'hover:bg-red-50/70 dark:hover:bg-red-950/30 ' +
    'focus-visible:ring-1 focus-visible:ring-red-700/40 dark:focus-visible:ring-rose-300/50'

  return (
    <Toolbar.Root
      className="fixed top-0 inset-x-0 z-50 px-4 md:px-8 py-4 flex items-center justify-between gap-4 bg-white/82 dark:bg-black/88 backdrop-blur-md"
      aria-label="Site navigation"
    >
      <div className="flex items-center gap-1 relative z-10">
        <Toolbar.Link href="https://github.com/gibby734" target="_blank" rel="noopener" className={linkBase + ' flex items-center justify-center'} aria-label="GitHub">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.91c.58.1.79-.25.79-.56v-2.16c-3.2.7-3.88-1.35-3.88-1.35-.52-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.25 3.36.96.1-.75.4-1.25.72-1.54-2.56-.29-5.26-1.28-5.26-5.7 0-1.26.45-2.29 1.18-3.1-.12-.29-.51-1.46.11-3.04 0 0 .96-.31 3.15 1.18a10.9 10.9 0 0 1 5.74 0c2.18-1.49 3.14-1.18 3.14-1.18.63 1.58.24 2.75.12 3.04.74.81 1.18 1.84 1.18 3.1 0 4.43-2.7 5.41-5.28 5.69.41.36.77 1.08.77 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" />
          </svg>
        </Toolbar.Link>
        <Toolbar.Link href="https://www.linkedin.com/in/griffinyocum/" target="_blank" rel="noopener" className={linkBase + ' flex items-center justify-center'} aria-label="LinkedIn">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6A2.5 2.5 0 0 1 0 3.5C0 2.12 1.11 1 2.49 1a2.5 2.5 0 0 1 2.49 2.5ZM.5 8h4V24h-4V8Zm7 0h3.84v2.18h.06c.53-1.01 1.84-2.18 3.79-2.18 4.05 0 4.8 2.66 4.8 6.12V24h-4v-7.03c0-1.68-.03-3.84-2.34-3.84-2.34 0-2.7 1.83-2.7 3.72V24h-4V8Z" />
          </svg>
        </Toolbar.Link>
        <Tooltip.Provider delayDuration={150}>
          <Tooltip.Root>
            <Tooltip.Trigger asChild>
              <Toolbar.Button
                onClick={() => setDark((v) => !v)}
                aria-label={dark ? 'Switch to light mode' : 'Switch to dark mode'}
                className={linkBase + ' flex items-center gap-2'}
              >
                {dark ? (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="4" />
                    <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
                  </svg>
                ) : (
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
                  </svg>
                )}
              </Toolbar.Button>
            </Tooltip.Trigger>
            <Tooltip.Portal>
              <Tooltip.Content sideOffset={6} className="px-2 py-1 rounded-md bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-neutral-800 dark:text-neutral-200 text-[11px] shadow-sm">
                {dark ? 'Light mode' : 'Dark mode'}
                <Tooltip.Arrow className="fill-white dark:fill-neutral-900" />
              </Tooltip.Content>
            </Tooltip.Portal>
          </Tooltip.Root>
        </Tooltip.Provider>
      </div>

      <div className="hidden md:block absolute left-1/2 -translate-x-1/2 text-[13px] font-medium text-red-800 dark:text-red-400 pointer-events-none">
        <div className="relative inline-block">
          <span className="absolute top-1/2 -translate-y-1/2 -left-5 flex h-2 w-2">
            <span className="absolute inset-0 rounded-full bg-red-700 dark:bg-rose-400 animate-ping opacity-50"></span>
            <span className="relative rounded-full h-2 w-2 bg-red-800 dark:bg-rose-300"></span>
          </span>
          <span>Open to internships and new grad roles</span>
        </div>
      </div>

      <Toolbar.ToggleGroup type="single" className="flex items-center gap-1 flex-wrap justify-end relative z-10">
        <Toolbar.Link href="#" className={accentLink} aria-label="Download resume">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12 3v12" /><path d="M7 10l5 5 5-5" /><path d="M5 21h14" />
          </svg>
          <span>Resume</span>
        </Toolbar.Link>
        <Toolbar.Separator className="w-px h-4 bg-neutral-300 dark:bg-neutral-800 mx-1 hidden sm:block" />
        <Toolbar.Link href="#contact" className={linkBase}>Contact</Toolbar.Link>
      </Toolbar.ToggleGroup>
    </Toolbar.Root>
  )
}

function Hero({ dark, t }) {
  const sectionRef = useRef(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const el = sectionRef.current
      if (el) {
        const rect = el.getBoundingClientRect()
        const total = rect.height + window.innerHeight
        const scrolled = Math.max(0, window.innerHeight - rect.top)
        setProgress(Math.max(0, Math.min(1, scrolled / total)))
      }
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  const quoteLineExtensions = t.centerColumns
    ? ''
    : 'after:content-[\'\'] after:absolute after:top-1/2 after:-translate-y-1/2 after:left-0 ' +
      'after:-ml-[50%] after:w-[50%] after:h-px ' +
      'after:bg-gradient-to-r after:from-transparent after:to-red-800 dark:after:to-rose-300/60'

  const statusLineExtensions = t.centerColumns
    ? 'border-t border-neutral-300 dark:border-neutral-800 pt-3'
    : 'border-t border-neutral-300 dark:border-neutral-800 pt-3 -ml-[50%] pl-[50%]'

  return (
    <section ref={sectionRef} className="relative flex flex-col overflow-hidden pt-28 pb-40 md:pb-72">

      <img
        src="/images/einsteinbw.jpg"
        alt=""
        aria-hidden
        className="hidden md:block absolute right-[28vw] top-[520px] z-[2] w-[300px] h-auto opacity-[0.125] dark:opacity-[0.11] grayscale pointer-events-none select-none"
      />

      <div className="relative z-10 w-full max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-14 md:gap-32 items-start flex-1">
        <div className="relative flex flex-col pt-32 md:pt-48 md:min-h-[1860px]">
          <div className="flex flex-col gap-6 self-center md:self-end">
            <div className="relative self-center md:self-end md:mr-12">
              <div
                className="relative rounded-full overflow-hidden ring-1 ring-red-800/50 dark:ring-rose-300/40 ring-offset-4 ring-offset-white dark:ring-offset-neutral-950"
                style={{ width: t.headshotSize + 'px', height: t.headshotSize + 'px' }}
              >
                <img src="/images/headshot.jpg" alt="Griffin Yocum" className="w-full h-full object-cover grayscale-[0.15] blur-[0.5px]" />
              </div>
            </div>

            <div className="text-center md:text-right self-center md:self-end">
              <h1
                className="font-semibold tracking-tight leading-[0.9] text-red-800 dark:text-red-300"
                style={{ fontSize: `clamp(40px, 6.5vw, ${t.nameSize}px)` }}
              >
                GRIFFIN<br />YOCUM
              </h1>
              <p className="mt-4 text-[11px] md:text-xs tracking-[0.3em] font-medium text-red-700/80 dark:text-red-400/70">
                SOFTWARE & CYBERSECURITY
              </p>
            </div>

            <div className="mt-28 md:mt-[30rem] w-full max-w-md self-center md:self-end">
              <div className="text-3xl md:text-4xl font-light tracking-tight text-red-800 dark:text-red-300 mb-6 text-center md:text-right">
                Technologies
              </div>
              <div className="border-t border-neutral-300 dark:border-neutral-800 pt-5 grid grid-cols-4 sm:grid-cols-5 gap-x-8 gap-y-6 max-w-md">
                {TECHNOLOGIES.map((tech) => <TechCard key={tech.name} tech={tech} />)}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-start text-left gap-16 md:gap-24 max-w-md md:pt-44 md:pl-8">
          <div className="-mb-10 md:-mb-16">
            <img src="/images/ISU_COE.png" alt="Iowa State University College of Engineering" className="h-10 md:h-14 w-auto object-contain" />
          </div>
          <div className={'text-base text-neutral-800 dark:text-neutral-300 ' + statusLineExtensions}>
            Junior · B.S. Software Engineering
            <span className="block text-neutral-500 dark:text-neutral-500 text-sm mt-0.5">Minor in Cybersecurity</span>
            <span className="block text-neutral-500 dark:text-neutral-500 text-sm mt-0.5">Iowa State University · Expected May 2027</span>
          </div>
          <div className="relative w-full overflow-visible">
            <blockquote
              className={
                'relative z-10 w-full min-h-[220px] rounded-2xl pl-5 pr-5 py-5 text-[15px] leading-relaxed italic ' +
                'text-neutral-900 dark:text-neutral-100 ' +
                'before:content-[\'\'] before:absolute before:top-4 before:bottom-4 before:left-0 before:w-px ' +
                'before:bg-red-800 dark:before:bg-red-400 ' +
                quoteLineExtensions
              }
            >
              <div className="relative max-w-[320px]">
                "Creativity is intelligence having fun."
                <br />- Albert Einstein
              </div>
            </blockquote>
          </div>

          <div id="about" className="w-full pt-6 md:pt-14">
            <div className="flex flex-col items-start gap-12 md:gap-16">
              <div className="flex flex-col items-start text-left gap-3">
                <div className="text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70">FOCUS</div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight max-w-sm">
                  Designing, editing, debugging, and securing complex systems.
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
                  My interest in video games pushed me to learn how software is built. I enjoy the parts of engineering where performance, correctness, and trust all matter at the same time.
                </p>
              </div>
              <div className="flex flex-col items-start text-left gap-3 md:ml-12">
                <div className="text-[11px] tracking-[0.3em] font-medium text-red-700/80 dark:text-rose-300/70">ORIGIN</div>
                <h3 className="text-2xl md:text-3xl font-light tracking-tight text-neutral-900 dark:text-neutral-100 leading-tight max-w-sm">
                  Sammamish, WA. Curious about technology from the start.
                </h3>
                <p className="text-sm text-neutral-600 dark:text-neutral-400 max-w-sm leading-relaxed">
                  Born in Sammamish, Washington in 2004, I have been interested in technology since my first iPod Touch and kept following that curiosity through software, cybersecurity, cloud, cryptocurrency, and AI.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="hidden md:flex absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex-col items-center gap-2 text-[10px] tracking-[0.32em] uppercase text-neutral-500 dark:text-neutral-400 transition-opacity duration-300"
        style={{ opacity: Math.max(0, 0.9 - (progress * 3.2)) }}
      >
        <span>Scroll</span>
        <span className="relative flex h-9 w-5 items-start justify-center rounded-full border border-neutral-400/60 dark:border-neutral-700">
          <span className="mt-1.5 h-2 w-1 rounded-full bg-red-800/80 dark:bg-red-300/80 animate-bounce" />
        </span>
      </a>
    </section>
  )
}

export function App() {
  const [dark, setDark] = useState(true)
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS)

  useEffect(() => {
    document.documentElement.classList.toggle('dark', dark)
  }, [dark])

  return (
    <div className="min-h-screen relative font-sans antialiased bg-transparent text-neutral-900 dark:text-neutral-100">
      <PageBackground dark={dark} />
      <HabitatCanvas />
      <div className="relative z-10">
        <CenterDivider t={t} dark={dark} scrollProgress={1} />
        <TopBar dark={dark} setDark={setDark} />
        <Hero dark={dark} t={t} />
        <ProjectsSection dark={dark} />
        <ContactSection dark={dark} />

        <TweaksPanel>
          <TweakSection label="Divider" />
          <TweakToggle label="Show divider" value={t.showDivider} onChange={(v) => setTweak('showDivider', v)} />
          <TweakRadio label="Style" value={t.dividerStyle} options={['line', 'dotted']} onChange={(v) => setTweak('dividerStyle', v)} />
          <TweakSlider label="Width" value={t.dividerWidth} min={1} max={4} step={1} unit="px" onChange={(v) => setTweak('dividerWidth', v)} />
          <TweakRadio label="Scroll link" value={t.scrollLink} options={['grow', 'fade', 'static']} onChange={(v) => setTweak('scrollLink', v)} />

          <TweakSection label="Layout" />
          <TweakToggle label="Center each column" value={t.centerColumns} onChange={(v) => setTweak('centerColumns', v)} />
          <TweakSlider label="Headshot size" value={t.headshotSize} min={140} max={280} step={5} unit="px" onChange={(v) => setTweak('headshotSize', v)} />
          <TweakSlider label="Name size" value={t.nameSize} min={56} max={120} step={2} unit="px" onChange={(v) => setTweak('nameSize', v)} />
        </TweaksPanel>
      </div>
    </div>
  )
}
