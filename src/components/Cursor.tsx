"use client";

import { useEffect, useRef, useState } from "react";
import styles from "./Cursor.module.css";

const Cursor = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mainCursorRef = useRef<HTMLDivElement>(null);
    const particlesRef = useRef<any[]>([]);
    
    // Physics State for Spring Follower
    const physicsRef = useRef({
        mouseX: 0,
        mouseY: 0,
        followerX: 0,
        followerY: 0,
        velX: 0,
        velY: 0,
        stiffness: 0.15,
        damping: 0.7,
        mass: 1,
    });

    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };

        window.addEventListener("resize", resizeCanvas);
        resizeCanvas();

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            hue: number;
            opacity: number;
            life: number;
            maxLife: number;

            constructor(x: number, y: number, velX: number, velY: number) {
                this.x = x;
                this.y = y;
                // Layered size for volumetric feel
                this.size = Math.random() * 40 + 15;
                // Inherit some velocity from the spring motion
                this.speedX = (Math.random() - 0.5) * 2 + velX * 0.5;
                this.speedY = (Math.random() - 0.5) * 2 + velY * 0.5;
                
                // Cosmic palette
                const hues = [240, 280, 310, 180]; 
                this.hue = hues[Math.floor(Math.random() * hues.length)];
                this.opacity = 0.3;
                this.maxLife = Math.random() * 60 + 40;
                this.life = this.maxLife;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.speedX *= 0.97;
                this.speedY *= 0.97;
                this.opacity = (this.life / this.maxLife) * 0.3;
                this.life--;
            }

            draw() {
                if (!ctx) return;
                const gradient = ctx.createRadialGradient(this.x, this.y, 0, this.x, this.y, this.size);
                gradient.addColorStop(0, `hsla(${this.hue}, 90%, 65%, ${this.opacity})`);
                gradient.addColorStop(1, `hsla(${this.hue}, 90%, 65%, 0)`);
                
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = gradient;
                ctx.fill();
            }
        }

        const handleMouseMove = (e: MouseEvent) => {
            physicsRef.current.mouseX = e.clientX;
            physicsRef.current.mouseY = e.clientY;
            
            if (mainCursorRef.current) {
                mainCursorRef.current.style.transform = `translate3d(${e.clientX}px, ${e.clientY}px, 0)`;
            }
        };

        const updatePhysics = () => {
            const p = physicsRef.current;
            
            // Mass-Spring-Damper logic
            const fx = (p.mouseX - p.followerX) * p.stiffness;
            const fy = (p.mouseY - p.followerY) * p.stiffness;
            
            const ax = fx / p.mass;
            const ay = fy / p.mass;
            
            p.velX = (p.velX + ax) * p.damping;
            p.velY = (p.velY + ay) * p.damping;
            
            p.followerX += p.velX;
            p.followerY += p.velY;

            // Spawn particles at the follower position (behind the mouse)
            const speed = Math.sqrt(p.velX * p.velX + p.velY * p.velY);
            if (speed > 1) {
                const count = Math.min(Math.floor(speed / 2) + 1, 4);
                for (let i = 0; i < count; i++) {
                    particlesRef.current.push(new Particle(p.followerX, p.followerY, p.velX, p.velY));
                }
            }
        };

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.globalCompositeOperation = "screen"; 
            
            updatePhysics();

            for (let i = 0; i < particlesRef.current.length; i++) {
                particlesRef.current[i].update();
                particlesRef.current[i].draw();
                
                if (particlesRef.current[i].life <= 0) {
                    particlesRef.current.splice(i, 1);
                    i--;
                }
            }
            requestAnimationFrame(animate);
        };

        animate();

        const handleHoverStart = () => setIsHovering(true);
        const handleHoverEnd = () => setIsHovering(false);

        window.addEventListener("mousemove", handleMouseMove);
        const targets = document.querySelectorAll('a, button, [role="button"], input, textarea, select');
        targets.forEach(target => {
            target.addEventListener("mouseenter", handleHoverStart);
            target.addEventListener("mouseleave", handleHoverEnd);
        });

        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            targets.forEach(target => {
                target.removeEventListener("mouseenter", handleHoverStart);
                target.removeEventListener("mouseleave", handleHoverEnd);
            });
        };
    }, []);

    return (
        <div className={styles.cursorWrapper}>
            <canvas ref={canvasRef} className={styles.nebulaCanvas} />
            <div ref={mainCursorRef} className={`${styles.mainCursor} ${isHovering ? styles.hovering : ""}`} />
        </div>
    );
};

export default Cursor;
