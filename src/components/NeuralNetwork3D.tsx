import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial, Text } from '@react-three/drei'
import * as THREE from 'three'
import { MotionValue } from 'framer-motion'

/* ── Glowing Diamond Core ── */
function DiamondCore() {
  const coreRef = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (coreRef.current) {
      coreRef.current.rotation.y = state.clock.getElapsedTime() * 0.5
      coreRef.current.rotation.x = state.clock.getElapsedTime() * 0.3
    }
  })
  return (
    <mesh ref={coreRef}>
      <icosahedronGeometry args={[1.2, 0]} />
      <meshStandardMaterial 
        color="#ffffff"
        emissive="#ffffff"
        emissiveIntensity={0.6}
        metalness={0.8}
        roughness={0.1}
        wireframe={true}
      />
    </mesh>
  )
}

/* ── Evaporating Neural Codes ── */
function EvaporatingCodes() {
  const groupRef = useRef<THREE.Group>(null)
  
  const codes = useMemo(() => {
    const chars = ['0', '1', '{', '}', 'AI', 'OS', 'void', 'auto']
    return Array.from({ length: 45 }).map(() => ({
      text: chars[Math.floor(Math.random() * chars.length)],
      x: (Math.random() - 0.5) * 2.5,
      y: (Math.random() - 0.5) * 2.5,
      z: (Math.random() - 0.5) * 2.5,
      speed: 0.005 + Math.random() * 0.015,
      scale: 0.08 + Math.random() * 0.1
    }))
  }, [])

  useFrame(() => {
    if (groupRef.current) {
      groupRef.current.children.forEach((child, i) => {
        child.position.y += codes[i].speed
        // Move slightly outwards
        child.position.x += child.position.x * 0.002
        child.position.z += child.position.z * 0.002
        
        // Reset when too far
        if (child.position.y > 3 || Math.abs(child.position.x) > 3) {
          child.position.y = (Math.random() - 0.5) * 1
          child.position.x = (Math.random() - 0.5) * 1.5
          child.position.z = (Math.random() - 0.5) * 1.5
        }
      })
    }
  })

  return (
    <group ref={groupRef}>
      {codes.map((code, i) => (
        <Text key={i} position={[code.x, code.y, code.z]} scale={code.scale} color="#ffffff" fillOpacity={0.8}>
          {code.text}
        </Text>
      ))}
    </group>
  )
}

/* ── PHENOM LABS Text Ring ── */
function TextRing() {
  const ringRef = useRef<THREE.Group>(null)
  const text = "PHENOM LABS   •   "
  const repeat = 3
  const fullText = text.repeat(repeat)
  const radius = 3.2

  useFrame((state) => {
    if (ringRef.current) {
      ringRef.current.rotation.y = -state.clock.getElapsedTime() * 0.15
      ringRef.current.rotation.x = Math.PI / 2.5
    }
  })

  return (
    <group ref={ringRef}>
      {fullText.split('').map((char, i) => {
        const angle = (i / fullText.length) * Math.PI * 2
        return (
          <Text
            key={i}
            position={[Math.cos(angle) * radius, 0, Math.sin(angle) * radius]}
            rotation={[0, -angle - Math.PI / 2, 0]}
            fontSize={0.35}
            color="#A855F7"
            anchorX="center"
            anchorY="middle"
          >
            {char}
          </Text>
        )
      })}
    </group>
  )
}

/* ── Rotating icosahedron wireframe with bisection ── */
function NeuralSphere({ mouse, scrollProgress }: { mouse: React.MutableRefObject<[number, number]>, scrollProgress?: MotionValue<number> | number }) {
  const leftGroup = useRef<THREE.Group>(null)
  const rightGroup = useRef<THREE.Group>(null)
  const meshRef = useRef<THREE.Group>(null)

  // Build icosahedron geometry + connections
  const { leftNodes, rightNodes, leftLines, rightLines } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2.2, 2)
    const pos = geo.attributes.position
    const verts: THREE.Vector3[] = []
    for (let i = 0; i < pos.count; i++) {
      verts.push(new THREE.Vector3(pos.getX(i), pos.getY(i), pos.getZ(i)))
    }
    
    // Unique vertices
    const unique: THREE.Vector3[] = []
    verts.forEach(v => {
      if (!unique.find(u => u.distanceTo(v) < 0.01)) unique.push(v)
    })

    const leftN: number[] = []
    const rightN: number[] = []
    const leftL: number[] = []
    const rightL: number[] = []

    unique.forEach(v => {
      if (v.x < 0) leftN.push(v.x, v.y, v.z)
      else rightN.push(v.x, v.y, v.z)
    })

    // Connect nearby vertices, keeping them in their respective halves for clean bisection
    for (let i = 0; i < unique.length; i++) {
      for (let j = i + 1; j < unique.length; j++) {
        const v1 = unique[i]
        const v2 = unique[j]
        const dist = v1.distanceTo(v2)
        if (dist < 1.5) {
          if (v1.x <= 0.01 && v2.x <= 0.01) {
            leftL.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z)
          } else if (v1.x >= -0.01 && v2.x >= -0.01) {
            rightL.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z)
          } else {
            leftL.push(v1.x, v1.y, v1.z, v2.x, v2.y, v2.z)
          }
        }
      }
    }

    return {
      leftNodes: new Float32Array(leftN),
      rightNodes: new Float32Array(rightN),
      leftLines: new Float32Array(leftL),
      rightLines: new Float32Array(rightL)
    }
  }, [])

  const leftLineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(leftLines, 3))
    return g
  }, [leftLines])

  const rightLineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(rightLines, 3))
    return g
  }, [rightLines])

  const leftNodeGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(leftNodes, 3))
    return g
  }, [leftNodes])

  const rightNodeGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(rightNodes, 3))
    return g
  }, [rightNodes])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    const sp = typeof scrollProgress === 'number' ? scrollProgress : scrollProgress?.get() || 0

    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.1 + mouse.current[1] * 0.1
    }

    // Bisection Logic: Move halves apart based on scrollProgress
    const splitDistance = sp * 10
    if (leftGroup.current) leftGroup.current.position.x = -splitDistance
    if (rightGroup.current) rightGroup.current.position.x = splitDistance
    
    if (meshRef.current) {
      if (leftGroup.current) leftGroup.current.rotation.y = -sp * 0.5
      if (rightGroup.current) rightGroup.current.rotation.y = sp * 0.5
    }
  })

  return (
    <group ref={meshRef}>
      <group ref={leftGroup}>
        <lineSegments geometry={leftLineGeo}>
          <lineBasicMaterial color="#7C3AED" transparent opacity={0.4} />
        </lineSegments>
        <points geometry={leftNodeGeo}>
          <pointsMaterial color="#A855F7" size={0.08} sizeAttenuation transparent opacity={0.9} />
        </points>
      </group>

      <group ref={rightGroup}>
        <lineSegments geometry={rightLineGeo}>
          <lineBasicMaterial color="#7C3AED" transparent opacity={0.4} />
        </lineSegments>
        <points geometry={rightNodeGeo}>
          <pointsMaterial color="#A855F7" size={0.08} sizeAttenuation transparent opacity={0.9} />
        </points>
      </group>

      <DiamondCore />
      <EvaporatingCodes />
    </group>
  )
}

/* ── Floating ambient particles ── */
function AmbientParticles({ scrollProgress }: { scrollProgress?: MotionValue<number> | number }) {
  const ref = useRef<THREE.Points>(null)
  const count = 300

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 20
      arr[i * 3 + 1] = (Math.random() - 0.5) * 20
      arr[i * 3 + 2] = (Math.random() - 0.5) * 15
    }
    return arr
  }, [])

  useFrame(state => {
    const sp = typeof scrollProgress === 'number' ? scrollProgress : scrollProgress?.get() || 0
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.03
      ref.current.position.z = sp * 15
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#7C3AED" size={0.03} sizeAttenuation depthWrite={false} opacity={0.4} />
    </Points>
  )
}

/* ── Camera mouse tracker ── */
function MouseTracker({ mouse, scrollProgress }: { mouse: React.MutableRefObject<[number, number]>, scrollProgress?: MotionValue<number> | number }) {
  const { camera } = useThree()
  useFrame(() => {
    const sp = typeof scrollProgress === 'number' ? scrollProgress : scrollProgress?.get() || 0
    camera.position.x += (mouse.current[0] * 0.4 - camera.position.x) * 0.05
    camera.position.y += (-mouse.current[1] * 0.4 - camera.position.y) * 0.05
    
    const targetZ = 6.5 + sp * 12
    camera.position.z += (targetZ - camera.position.z) * 0.05
    
    camera.lookAt(0, 0, 0)
  })
  return null
}

/* ── Main export ── */
export default function NeuralNetwork3D({ mouse, scrollProgress }: { mouse: React.MutableRefObject<[number, number]>, scrollProgress?: MotionValue<number> | number }) {
  return (
    <div className="w-full h-full">
      <Canvas
        camera={{ position: [0, 0, 6.5], fov: 50 }}
        gl={{ antialias: true, alpha: true }}
        style={{ background: 'transparent', pointerEvents: 'none' }}
      >
        <ambientLight intensity={0.4} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#7C3AED" />
        <pointLight position={[-10, -10, -10]} intensity={1} color="#A855F7" />
        
        <MouseTracker mouse={mouse} scrollProgress={scrollProgress} />
        <NeuralSphere mouse={mouse} scrollProgress={scrollProgress} />
        <TextRing />
        <AmbientParticles scrollProgress={scrollProgress} />
      </Canvas>
    </div>
  )
}
