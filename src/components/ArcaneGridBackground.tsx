"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useRef, useState, useMemo } from "react";
import * as THREE from "three";

function GridContent() {
    const { mouse, viewport } = useThree();
    const [hovered, setHovered] = useState(false);
    const meshRef = useRef<THREE.Points>(null);

    // Generate grid points (static rune constellation)
    const count = 50;
    const particles = useMemo(() => {
        const temp = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            // Random positions within viewport
            const x = (Math.random() - 0.5) * 15;
            const y = (Math.random() - 0.5) * 10;
            const z = 0;
            temp.set([x, y, z], i * 3);
        }
        return temp;
    }, []);

    // Lines connecting points (Constellation effect)
    // We'll just use a simple GridHelper for the "Faint geometric grid"
    // And points for the "Nodes"

    useFrame((state) => {
        if (!meshRef.current) return;
        // Slight rotation based on mouse even when "passive"
        // To satisfy "Glow activates only on hover", we check hovered state
        if (hovered) {
            meshRef.current.rotation.x = THREE.MathUtils.lerp(meshRef.current.rotation.x, mouse.y * 0.1, 0.1);
            meshRef.current.rotation.y = THREE.MathUtils.lerp(meshRef.current.rotation.y, mouse.x * 0.1, 0.1);
        }
    });

    return (
        <group
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
        >
            {/* Faint Geometric Grid */}
            <gridHelper
                args={[30, 30, 0x2e8b57, 0x0b132b]}
                position={[0, 0, -1]}
                rotation={[Math.PI / 2, 0, 0]}
                renderOrder={-1}
            >
                <meshBasicMaterial transparent opacity={0.05} depthWrite={false} color="#2e8b57" />
            </gridHelper>

            {/* Dim Glowing Nodes */}
            <points ref={meshRef}>
                <bufferGeometry>
                    <bufferAttribute
                        attach="attributes-position"
                        count={particles.length / 3}
                        array={particles}
                        itemSize={3}
                        args={[particles, 3]} // Fix: args is required for bufferAttribute constructor
                    />
                </bufferGeometry>
                <pointsMaterial
                    size={0.15}
                    color={hovered ? "#d4af37" : "#2e8b57"} // Gold on hover, Emerald otherwise
                    transparent
                    opacity={hovered ? 0.8 : 0.3}
                    sizeAttenuation={true}
                />
            </points>
        </group>
    );
}

export default function ArcaneGridBackground() {
    return (
        <div className="absolute inset-0 z-0 opacity-50 pointer-events-none">
            {/* Use frameloop='demand' to ensure no continuous animation when not interacting. 
           However, for hover effects to work smoothly we might need 'always' but with logic to skip work.
           We'll stick to default but keep scene minimal. 
       */}
            <Canvas
                camera={{ position: [0, 0, 10], fov: 50 }}
                gl={{ antialias: true, alpha: true }}
                dpr={[1, 2]} // Quality
            >
                <ambientLight intensity={0.5} />
                <GridContent />
            </Canvas>
        </div>
    );
}
