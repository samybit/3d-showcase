"use client";

import { useEffect, useRef } from "react";

export default function Smoke({ inverse = false, isActive = false }: { inverse?: boolean; isActive?: boolean }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    let width = canvas.clientWidth;
    let height = canvas.clientHeight;

    // Handle high-DPI displays so the math doesn't skew on Retina screens
    const dpr = window.devicePixelRatio || 1;
    canvas.width = width * dpr;
    canvas.height = height * dpr;
    ctx.scale(dpr, dpr);

    const rgb = inverse ? "0, 0, 0" : "255, 255, 255";

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      life: number;
      maxLife: number;
      opacity: number;
      angle: number;
      spin: number;

      constructor(reset = false) {
        // Focus spawn near the center bottom so it billows upward
        this.x = width / 2 + (Math.random() - 0.5) * (width * 0.5);
        this.y = reset ? height * 0.7 : height / 2 + (Math.random() - 0.5) * (height * 0.4);
        this.size = Math.random() * 40 + 20; // Larger for a softer look
        this.speedX = (Math.random() - 0.5) * 0.2; // Slower horizontal drift
        this.speedY = (Math.random() - 1) * 0.5 - 0.1; // Slower upward billow
        this.maxLife = Math.random() * 200 + 100; // Lives longer for a slower fade
        this.life = reset ? this.maxLife : Math.random() * this.maxLife;
        this.opacity = Math.random() * 0.3 + 0.1; // Lower max opacity for elegance
        this.angle = Math.random() * Math.PI * 2;
        this.spin = (Math.random() - 0.5) * 0.01; // Slower swirl
      }

      update() {
        // Add a sine wave to the X axis for a wavy, organic swirling motion
        this.x += this.speedX + Math.sin(this.angle) * 0.3; // Gentler sway
        this.y += this.speedY;
        this.size += 0.2; // Slower expansion rate
        this.angle += this.spin;
        this.life--;
      }

      draw() {
        if (!ctx) return;
        const lifeRatio = this.life / this.maxLife;
        const currentOpacity = this.opacity * Math.sin(lifeRatio * Math.PI);

        // Create a soft radial gradient so the particles look like volumetric gas
        const gradient = ctx.createRadialGradient(
          this.x, this.y, 0,
          this.x, this.y, this.size
        );
        gradient.addColorStop(0, `rgba(${rgb}, ${currentOpacity})`);
        gradient.addColorStop(1, `rgba(${rgb}, 0)`);

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      // Increased density for a richer effect
      for (let i = 0; i < 60; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      particles.forEach((p, index) => {
        p.update();
        p.draw();
        // Respawn particle when it dies
        if (p.life <= 0) particles[index] = new Particle(true);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    const handleResize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    window.addEventListener("resize", handleResize);
    init();
    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [inverse]);

  return (
    <div
      // Expanded inset to let the smoke spread further.
      // Added a subtle scale effect to make the smoke "breathe" in when appearing.
      className={`absolute inset-[-100%] z-0 pointer-events-none transition-all duration-1000 ease-out
      ${inverse ? "blur-[12px] mix-blend-multiply" : "blur-[12px] mix-blend-screen"}
      ${isActive ? "opacity-60 scale-100" : "opacity-0 scale-95 group-hover:opacity-60 group-hover:scale-100"}`}
    >
      <canvas ref={canvasRef} className="w-full h-full block" />
    </div>
  );
}