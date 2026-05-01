import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Points, PointMaterial } from '@react-three/drei'
import * as THREE from 'three'
import { useScroll, MotionValue } from 'framer-motion'

function VortexParticles({ progress }: { progress: MotionValue<number> }) {
  const pointsRef = useRef<THREE.Points>(null)

  // Generate a galaxy/vortex of particles
  const particleCount = 5000
  const positions = useMemo(() => {
    const p = new Float32Array(particleCount * 3)
    for (let i = 0; i < particleCount; i++) {
      const radius = Math.random() * 8 + 2
      const angle = Math.random() * Math.PI * 2
      const height = (Math.random() - 0.5) * 30
      
      // Add some spiral offset
      const spiralOffset = height * 0.5
      
      p[i * 3] = Math.cos(angle + spiralOffset) * radius
      p[i * 3 + 1] = height
      p[i * 3 + 2] = Math.sin(angle + spiralOffset) * radius
    }
    return p
  }, [particleCount])

  useFrame((state) => {
    if (!pointsRef.current) return
    const time = state.clock.getElapsedTime()
    const scrollP = progress.get() || 0

    // Rotate the whole vortex based on time and scroll
    pointsRef.current.rotation.y = time * 0.1 + scrollP * Math.PI * 2
    pointsRef.current.position.y = scrollP * 15 - 5 // Camera flies "down" the vortex
    
    // Twist effect
    const scale = 1 + scrollP * 0.5
    pointsRef.current.scale.set(scale, 1, scale)
  })

  return (
    <Points ref={pointsRef} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#A855F7" // Brand violet
        size={0.05}
        sizeAttenuation={true}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </Points>
  )
}

export default function ParticleVortex3D() {
  const { scrollYProgress } = useScroll()
  
  return (
    <div className="absolute inset-0 z-0 pointer-events-none" style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh' }}>
      <Canvas camera={{ position: [0, -10, 15], fov: 60 }}>
        <fog attach="fog" args={['#000', 5, 25]} />
        <VortexParticles progress={scrollYProgress} />
      </Canvas>
    </div>
  )
}
