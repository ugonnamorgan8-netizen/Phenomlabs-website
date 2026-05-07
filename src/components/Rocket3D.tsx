import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Float, Sparkles } from '@react-three/drei'
import * as THREE from 'three'
import { MotionValue } from 'framer-motion'

function RocketModel() {
  const groupRef = useRef<THREE.Group>(null)

  // Propulsion animation logic
  useFrame((state) => {
    if (groupRef.current) {
      // Gentle oscillation
      groupRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 2) * 0.05
    }
  })

  return (
    <group ref={groupRef}>
      {/* Body */}
      <mesh position={[0, 0, 0]}>
        <cylinderGeometry args={[0.3, 0.4, 1.5, 32]} />
        <meshStandardMaterial color="#FFFFFF" metalness={0.8} roughness={0.2} />
      </mesh>
      
      {/* Nose cone */}
      <mesh position={[0, 1, 0]}>
        <coneGeometry args={[0.3, 0.6, 32]} />
        <meshStandardMaterial color="#7C3AED" metalness={0.9} roughness={0.1} />
      </mesh>

      {/* Fins */}
      {[0, Math.PI / 2, Math.PI, Math.PI * 1.5].map((angle, i) => (
        <mesh key={i} position={[Math.cos(angle) * 0.35, -0.5, Math.sin(angle) * 0.35]} rotation={[0, -angle, 0]}>
          <boxGeometry args={[0.05, 0.6, 0.4]} />
          <meshStandardMaterial color="#7C3AED" metalness={0.8} roughness={0.2} />
        </mesh>
      ))}

      {/* Thruster */}
      <mesh position={[0, -0.8, 0]}>
        <cylinderGeometry args={[0.25, 0.2, 0.2, 32]} />
        <meshStandardMaterial color="#333333" metalness={1} roughness={0} />
      </mesh>

      {/* Engine Glow */}
      <pointLight position={[0, -1, 0]} intensity={2} color="#7C3AED" />
      <mesh position={[0, -0.9, 0]}>
        <sphereGeometry args={[0.15, 16, 16]} />
        <meshBasicMaterial color="#A855F7" />
      </mesh>

      {/* Exhaust Particles */}
      <Sparkles 
        count={50}
        scale={1.5}
        size={2}
        speed={3}
        opacity={0.8}
        color="#A855F7"
        position={[0, -1.5, 0]}
      />
    </group>
  )
}

export default function Rocket3D({ progress }: { progress?: MotionValue<number> | number }) {
  const launchRef = useRef<THREE.Group>(null)

  useFrame(() => {
    if (launchRef.current) {
      const p = typeof progress === 'number' ? progress : progress?.get() || 0
      // Launch effect based on progress (0 to 1)
      const y = p * 25 - 1.5
      const z = -p * 15
      launchRef.current.position.y = y
      launchRef.current.position.z = z
      
      // Tilt during flight
      launchRef.current.rotation.x = p * 0.5
    }
  })

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group ref={launchRef} rotation={[0, Math.PI / 4, 0]}>
        <RocketModel />
      </group>
    </Float>
  )
}
