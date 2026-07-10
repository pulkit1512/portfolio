"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

/**
 * A layered feed-forward neural network rendered in 3D.
 * Nodes pulse, edges shimmer, and the whole lattice drifts with the pointer.
 * Original geometry — not copied from any reference asset.
 */

const LAYERS = [4, 6, 6, 4, 2];

function useNetwork() {
  return useMemo(() => {
    const nodes: THREE.Vector3[] = [];
    const layerOf: number[] = [];
    const spanX = 6;
    LAYERS.forEach((count, li) => {
      const x = (li / (LAYERS.length - 1) - 0.5) * spanX;
      for (let i = 0; i < count; i++) {
        const y = (i - (count - 1) / 2) * 1.05;
        const z = (Math.sin(i * 1.7 + li) * 0.5);
        nodes.push(new THREE.Vector3(x, y, z));
        layerOf.push(li);
      }
    });

    const edges: [number, number][] = [];
    let start = 0;
    for (let li = 0; li < LAYERS.length - 1; li++) {
      const a0 = start;
      const a1 = start + LAYERS[li];
      const b0 = a1;
      const b1 = a1 + LAYERS[li + 1];
      for (let a = a0; a < a1; a++) {
        for (let b = b0; b < b1; b++) {
          edges.push([a, b]);
        }
      }
      start += LAYERS[li];
    }
    return { nodes, edges, layerOf };
  }, []);
}

function Network() {
  const group = useRef<THREE.Group>(null);
  const { nodes, edges, layerOf } = useNetwork();

  const linePositions = useMemo(() => {
    const arr = new Float32Array(edges.length * 6);
    edges.forEach(([a, b], i) => {
      arr.set([nodes[a].x, nodes[a].y, nodes[a].z], i * 6);
      arr.set([nodes[b].x, nodes[b].y, nodes[b].z], i * 6 + 3);
    });
    return arr;
  }, [edges, nodes]);

  const nodeColors = useMemo(
    () =>
      layerOf.map((li) =>
        new THREE.Color().lerpColors(
          new THREE.Color("#7dd3fc"),
          new THREE.Color("#c4b5fd"),
          li / (LAYERS.length - 1)
        )
      ),
    [layerOf]
  );

  useFrame((state) => {
    if (!group.current) return;
    const t = state.clock.elapsedTime;
    const mx = state.pointer.x;
    const my = state.pointer.y;
    group.current.rotation.y = THREE.MathUtils.lerp(
      group.current.rotation.y,
      mx * 0.35 + t * 0.04,
      0.05
    );
    group.current.rotation.x = THREE.MathUtils.lerp(
      group.current.rotation.x,
      -my * 0.25,
      0.05
    );
    group.current.children.forEach((child, i) => {
      if (child.type === "Mesh") {
        const s = 1 + Math.sin(t * 2 + i * 0.6) * 0.12;
        child.scale.setScalar(s);
      }
    });
  });

  return (
    <group ref={group}>
      <lineSegments>
        <bufferGeometry>
          <bufferAttribute
            attach="attributes-position"
            args={[linePositions, 3]}
          />
        </bufferGeometry>
        <lineBasicMaterial
          color="#5b6b8c"
          transparent
          opacity={0.25}
          blending={THREE.AdditiveBlending}
        />
      </lineSegments>

      {nodes.map((n, i) => (
        <mesh key={i} position={n}>
          <sphereGeometry args={[0.11, 16, 16]} />
          <meshBasicMaterial color={nodeColors[i]} toneMapped={false} />
        </mesh>
      ))}

      {/* glow halos on the endpoints */}
      {nodes.map((n, i) => (
        <mesh key={`h-${i}`} position={n}>
          <sphereGeometry args={[0.22, 12, 12]} />
          <meshBasicMaterial
            color={nodeColors[i]}
            transparent
            opacity={0.14}
            blending={THREE.AdditiveBlending}
            toneMapped={false}
          />
        </mesh>
      ))}
    </group>
  );
}

function Pulses() {
  const ref = useRef<THREE.Points>(null);
  const { nodes, edges } = useNetwork();
  const count = 60;

  const data = useMemo(() => {
    const positions = new Float32Array(count * 3);
    const seeds = Array.from({ length: count }, () => ({
      edge: Math.floor(Math.random() * edges.length),
      speed: 0.25 + Math.random() * 0.5,
      offset: Math.random(),
    }));
    return { positions, seeds };
  }, [edges.length]);

  useFrame((state) => {
    if (!ref.current) return;
    const t = state.clock.elapsedTime;
    const pos = ref.current.geometry.attributes.position
      .array as Float32Array;
    data.seeds.forEach((s, i) => {
      const [a, b] = edges[s.edge];
      const p = (t * s.speed + s.offset) % 1;
      const va = nodes[a];
      const vb = nodes[b];
      pos[i * 3] = va.x + (vb.x - va.x) * p;
      pos[i * 3 + 1] = va.y + (vb.y - va.y) * p;
      pos[i * 3 + 2] = va.z + (vb.z - va.z) * p;
    });
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[data.positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.09}
        color="#a78bfa"
        transparent
        opacity={0.9}
        blending={THREE.AdditiveBlending}
        toneMapped={false}
      />
    </points>
  );
}

export default function NeuralScene() {
  return (
    <Canvas
      camera={{ position: [0, 0, 8], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Network />
      <Pulses />
    </Canvas>
  );
}
