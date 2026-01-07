"use client";

import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";
import * as THREE from "three";

function Ring({ radius, stroke, speed, color, opacity = 1, decorationCount = 0 }: any) {
    const ref = useRef<THREE.Group>(null);

    useFrame((state, delta) => {
        if (ref.current) {
            ref.current.rotation.z += speed * delta * 0.5;
        }
    });

    return (
        <group ref={ref}>
            {/* Base Ring */}
            <mesh rotation={[0, 0, 0]}>
                <ringGeometry args={[radius, radius + stroke, 64]} />
                <meshBasicMaterial color={color} transparent opacity={opacity} side={THREE.DoubleSide} />
            </mesh>

            {/* Decorations / Abstract Runes */}
            {decorationCount > 0 && Array.from({ length: decorationCount }).map((_, i) => {
                const angle = (i / decorationCount) * Math.PI * 2;
                const x = Math.cos(angle) * (radius + stroke * 2);
                const y = Math.sin(angle) * (radius + stroke * 2);

                return (
                    <mesh key={i} position={[x, y, 0]} rotation={[0, 0, angle]}>
                        <circleGeometry args={[stroke * 2, 4]} />
                        <meshBasicMaterial color={color} transparent opacity={opacity * 1.5} />
                    </mesh>
                );
            })}
        </group>
    );
}

function ArcaneScene() {
    const groupRef = useRef<THREE.Group>(null);
    const { mouse } = useThree();
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const scrolled = window.scrollY;
            const progress = Math.min(scrolled / 500, 1);
            setScrollProgress(progress);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    useFrame(() => {
        if (!groupRef.current) return;

        const targetX = (mouse.x * 0.5);
        const targetY = (mouse.y * 0.5);

        groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetY * 0.1, 0.05);
        groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, targetX * 0.1, 0.05);

        if (scrollProgress < 0.9) {
            groupRef.current.rotation.z += 0.001 * (1 - scrollProgress);
        }
    });

    const primaryColor = "#d4af37"; // Gold
    const secondaryColor = "#2e8b57"; // Emerald

    return (
        <group ref={groupRef} rotation={[0, 0, 0]}>
            {/* Main Outer Ring */}
            <Ring radius={3} stroke={0.02} speed={0.2} color={primaryColor} opacity={0.3} decorationCount={12} />

            {/* Inner Concentric */}
            <Ring radius={2.2} stroke={0.01} speed={-0.15} color={secondaryColor} opacity={0.2} decorationCount={8} />

            {/* Core Structure */}
            <Ring radius={1.5} stroke={0.03} speed={0.1} color={primaryColor} opacity={0.1} />

            {/* Accents */}
            <Ring radius={3.5} stroke={0.005} speed={0.05} color={secondaryColor} opacity={0.1} />
        </group>
    );
}

export default function ArcaneCircleBackground() {
    return (
        <div className="absolute inset-0 z-0 pointer-events-none opacity-60">
            <Canvas
                camera={{ position: [0, 0, 8], fov: 45 }}
                gl={{ antialias: false, alpha: true, powerPreference: "high-performance" }}
                dpr={1}
                frameloop="always"
            >
                <fog attach="fog" args={["#0b132b", 5, 15]} />
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.5} color="#d4af37" />
                <ArcaneScene />
            </Canvas>
        </div>
    );
}
