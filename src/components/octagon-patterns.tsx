"use client";

import { useEffect, useRef } from "react";
import { drawOctagon } from "@/app/lib/shapes/octagon"

export default function OctagonPattern() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Set canvas size with higher resolution for sharper rendering
    const scale = window.devicePixelRatio || 1;
    canvas.width = 400 * scale;
    canvas.height = 600 * scale;
    ctx.scale(scale, scale);

    // Define brand colors
    const colors = ["#D15A4B", "#A3B18C", "#FFB74D"];
    
    // Create animated pattern
    let frame = 0;
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background pattern
      for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 12; j++) {
          const x = 50 + i * 50;
          const y = 50 + j * 50;
          const size = 15;
          const rotation = Math.sin(frame / 100 + i * 0.5 + j * 0.5) * 0.2;
          const colorIndex = (i + j) % colors.length;
          
          drawOctagon(
            ctx,
            x,
            y,
            size * (0.8 + Math.sin(frame / 50 + i * 0.3 + j * 0.3) * 0.2),
            colors[colorIndex],
            rotation
          );
        }
      }

      // Draw larger accent octagons
      const time = frame / 100;
      for (let i = 0; i < 5; i++) {
        const x = 200 + Math.cos(time + i * Math.PI / 2.5) * 80;
        const y = 300 + Math.sin(time + i * Math.PI / 2.5) * 80;
        drawOctagon(
          ctx,
          x,
          y,
          25,
          colors[i % colors.length],
          time + i * Math.PI / 4
        );
      }

      frame++;
      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      // Cleanup
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <canvas
        ref={canvasRef}
        style={{
          width: '400px',
          height: '600px'
        }}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-white/0 via-white/50 to-white/80" />
    </div>
  );
}