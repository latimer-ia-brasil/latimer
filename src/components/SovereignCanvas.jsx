
```jsx
import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function HologramCore({ activeTab, easterEgg, mouse }) {
  const meshRef = useRef();
  const pointsRef = useRef();

  // Matriz de cores baseada nas divisões estaduais e modo executivo
  const themeColors = [
    new THREE.Color("#4c1d95"), // RJ - Violeta Profundo
    new THREE.Color("#C5A059"), // MG - Dourado Imperial
    new THREE.Color("#064e3b"), // ES - Esmeralda Corporativo
    new THREE.Color("#ffffff")  // Geral - Branco Absoluto
  ];

  useFrame((state) => {
    const t = state.clock.getElapsedTime();
    
    // Rotação suave baseada no tempo e no mouse do usuário
    if (meshRef.current) {
      meshRef.current.rotation.y = t * 0.15 + mouse.current[0] * 0.2;
      meshRef.current.rotation.x = t * 0.08 + mouse.current[1] * 0.1;
    }
    
    if (pointsRef.current) {
      pointsRef.current.rotation.y = -t * 0.05;
    }

    // Transição de cor suave via interpolação de hardware (Lerp)
    const targetColor = easterEgg ? new THREE.Color("#ff0055") : themeColors[activeTab];
    meshRef.current.material.color.lerp(targetColor, 0.05);
  });

  return (
    <group>
      {/* Esfera central aramada representando redes e malhas de energia */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[1.8, 32, 32]} />
        <meshBasicMaterial 
          wireframe 
          transparent 
          opacity={0.12} 
          color="#C5A059" 
        />
      </mesh>

      {/* Constelação de partículas flutuantes - Telemetria de dados */}
      <points ref={pointsRef}>
        <sphereGeometry args={[2.5, 64, 64]} />
        <pointsMaterial 
          size={0.02} 
          color="#C5A059" 
          transparent 
          opacity={0.3} 
          sizeAttenuation 
        />
      </points>
    </group>
  );
}

export default function SovereignCanvas({ activeTab, easterEgg, mouse }) {
  return (
    <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none bg-[#050505]">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }}>
        <ambientLight intensity={0.2} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#C5A059" />
        
        {/* Camada estelar de fundo para profundidade */}
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={1} />
        
        {/* Movimentação flutuante física simulando estabilidade estrutural */}
        <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
          <HologramCore activeTab={activeTab} easterEgg={easterEgg} mouse={mouse} />
        </Float>
      </Canvas>

      {/* Efeito de vinheta Noir nas bordas da tela */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_30%,#050505_100%)]" />
    </div>
  );
}
