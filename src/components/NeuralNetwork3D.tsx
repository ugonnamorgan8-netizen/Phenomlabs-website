import { useRef, useMemo } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'

/* ── Rotating icosahedron wireframe ── */
function NeuralSphere({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const meshRef = useRef<THREE.Group>(null)
  const linesRef = useRef<THREE.LineSegments>(null)

  // Build icosahedron geometry + connections
  const { positions, linePositions } = useMemo(() => {
    const geo = new THREE.IcosahedronGeometry(2, 2)
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

    // Connect nearby vertices
    const lineArr: number[] = []
    for (let i = 0; i < unique.length; i++) {
      for (let j = i + 1; j < unique.length; j++) {
        const dist = unique[i].distanceTo(unique[j])
        if (dist < 1.5) {
          lineArr.push(unique[i].x, unique[i].y, unique[i].z)
          lineArr.push(unique[j].x, unique[j].y, unique[j].z)
        }
      }
    }

    const nodePositions = new Float32Array(unique.flatMap(v => [v.x, v.y, v.z]))
    const linePositions = new Float32Array(lineArr)
    return { positions: nodePositions, linePositions }
  }, [])

  const lineGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(linePositions, 3))
    return g
  }, [linePositions])

  const nodeGeo = useMemo(() => {
    const g = new THREE.BufferGeometry()
    g.setAttribute('position', new THREE.BufferAttribute(positions, 3))
    return g
  }, [positions])

  useFrame((state) => {
    const t = state.clock.getElapsedTime()
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.18
      meshRef.current.rotation.x = Math.sin(t * 0.1) * 0.2 + mouse.current[1] * 0.15
      meshRef.current.rotation.z = Math.cos(t * 0.07) * 0.1 + mouse.current[0] * 0.1
      // Pulse scale
      const pulse = 1 + Math.sin(t * 1.5) * 0.02
      meshRef.current.scale.setScalar(pulse)
    }
  })

  return (
    <group ref={meshRef}>
      {/* Connecting lines */}
      <lineSegments ref={linesRef} geometry={lineGeo}>
        <lineBasicMaterial color="#0066FF" transparent opacity={0.35} />
      </lineSegments>
      {/* Nodes */}
      <points geometry={nodeGeo}>
        <pointsMaterial color="#0099FF" size={0.08} sizeAttenuation transparent opacity={0.9} />
      </points>
      {/* Inner glow sphere */}
      <mesh>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial color="#0033FF" transparent opacity={0.03} />
      </mesh>
    </group>
  )
}

/* ── Floating ambient particles ── */
function AmbientParticles() {
  const ref = useRef<THREE.Points>(null)
  const count = 200

  const positions = useMemo(() => {
    const arr = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      arr[i * 3] = (Math.random() - 0.5) * 14
      arr[i * 3 + 1] = (Math.random() - 0.5) * 14
      arr[i * 3 + 2] = (Math.random() - 0.5) * 10
    }
    return arr
  }, [])

  useFrame(state => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#6600FF" size={0.04} sizeAttenuation depthWrite={false} opacity={0.6} />
    </Points>
  )
}

/* ── Camera mouse tracker ── */
function MouseTracker({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  const { camera } = useThree()
  useFrame(() => {
    camera.position.x += (mouse.current[0] * 0.5 - camera.position.x) * 0.03
    camera.position.y += (-mouse.current[1] * 0.5 - camera.position.y) * 0.03
    camera.lookAt(0, 0, 0)
  })
  return null
}

/* ── Main export ── */
export default function NeuralNetwork3D({ mouse }: { mouse: React.MutableRefObject<[number, number]> }) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 50 }}
      gl={{ antialias: true, alpha: true }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.2} />
      <pointLight position={[5, 5, 5]} intensity={1} color="#0066FF" />
      <pointLight position={[-5, -5, -5]} intensity={0.5} color="#6600FF" />
      <MouseTracker mouse={mouse} />
      <NeuralSphere mouse={mouse} />
      <AmbientParticles />
    </Canvas>
  )
}
