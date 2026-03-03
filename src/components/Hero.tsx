import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, ContactShadows, PresentationControls } from '@react-three/drei';
import { useRef } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

function AbstractTechShape(props: any) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.2;
            meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.3;
        }
    });

    return (
        <Float speed={2} rotationIntensity={1} floatIntensity={1}>
            <mesh ref={meshRef} {...props}>
                <octahedronGeometry args={[1.5, 0]} />
                <meshPhysicalMaterial
                    color="#0ea5e9"
                    emissive="#0ea5e9"
                    emissiveIntensity={0.2}
                    roughness={0.2}
                    metalness={0.9}
                    clearcoat={1}
                    clearcoatRoughness={0.1}
                    wireframe={true}
                />
            </mesh>
            <mesh ref={meshRef} {...props} scale={0.7}>
                <icosahedronGeometry args={[1.5, 0]} />
                <meshPhysicalMaterial
                    color="#6366f1"
                    roughness={0.1}
                    metalness={1}
                    transmission={0.9}
                    thickness={0.5}
                />
            </mesh>
        </Float>
    );
}

export default function Hero() {
    return (
        <section className="relative w-full h-screen bg-background overflow-hidden flex items-center justify-center">
            {/* 3D Background */}
            <div className="absolute inset-0 z-0">
                <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
                    <ambientLight intensity={0.5} />
                    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} intensity={2} />

                    <PresentationControls
                        global
                        config={{ mass: 2, tension: 500 }}
                        snap={{ mass: 4, tension: 1500 }}
                        rotation={[0, 0.3, 0]}
                        polar={[-Math.PI / 3, Math.PI / 3]}
                        azimuth={[-Math.PI / 1.4, Math.PI / 2]}
                    >
                        <AbstractTechShape position={[1.5, 0, 0]} />
                    </PresentationControls>

                    <Environment preset="city" />
                    <ContactShadows position={[0, -2.5, 0]} opacity={0.4} scale={10} blur={2.5} far={4} color="#0ea5e9" />
                </Canvas>
            </div>

            {/* Hero Content */}
            <div className="relative z-10 container mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pointer-events-none">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="flex flex-col gap-6 pointer-events-auto"
                >
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary w-fit backdrop-blur-sm">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-primary"></span>
                        </span>
                        Power Platform Developer
                    </div>

                    <h1 className="text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight">
                        Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">Pamarthi Dhanush</span>
                    </h1>

                    <p className="text-xl md:text-2xl text-gray-400 max-w-lg font-light leading-relaxed">
                        Crafting intelligent, scalable apps and automated solutions that transform business processes.
                    </p>

                    <div className="flex flex-wrap gap-4 mt-4">
                        <a href="#projects" className="px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all shadow-[0_0_20px_rgba(14,165,233,0.4)]">
                            View Work
                        </a>
                        <a href="#experience" className="px-8 py-3 bg-card border border-border text-white font-semibold rounded-lg hover:bg-border/50 transition-all">
                            My Experience
                        </a>
                    </div>
                </motion.div>
            </div>

            {/* Background Orbs */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/10 rounded-full blur-[128px] pointer-events-none" />

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
                animate={{ y: [0, 10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
                <div className="w-[30px] h-[50px] rounded-full border-2 border-gray-500 flex justify-center p-2">
                    <motion.div
                        className="w-1.5 h-3 bg-gray-400 rounded-full"
                        animate={{ y: [0, 15, 0] }}
                        transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                    />
                </div>
            </motion.div>
        </section>
    );
}
