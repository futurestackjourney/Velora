import React, { useEffect, useRef } from 'react';
// FIX: Import gsap to fix 'Cannot find name 'gsap'' errors.
import { gsap } from 'gsap';

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const textRef = useRef<HTMLHeadingElement>(null);

    useEffect(() => {
        if (!containerRef.current || !textRef.current) return;

        const shapes = Array.from(containerRef.current.querySelectorAll('.shape'));
        const chars = textRef.current.innerText.split('').map(char => {
            const span = document.createElement('span');
            span.innerText = char === ' ' ? '\u00A0' : char;
            span.className = "md:inline-block";
            return span;
        });
        textRef.current.innerHTML = '';
        chars.forEach(char => textRef.current.appendChild(char));

        const tl = gsap.timeline({ repeat: -1, yoyo: true });

        // Animate shapes
        tl.to(shapes, {
            duration: 2,
            x: () => gsap.utils.random(-200, 200),
            y: () => gsap.utils.random(-150, 150),
            z: () => gsap.utils.random(-150, 150),
            rotationX: () => gsap.utils.random(-180, 180),
            rotationY: () => gsap.utils.random(-180, 180),
            scale: () => gsap.utils.random(0.5, 1.5),
            opacity: () => gsap.utils.random(0.5, 1),
            ease: 'power1.inOut',
            stagger: {
                each: 0.1,
                from: 'random',
            },
        });
        
        // Animate text characters
        gsap.from(chars, {
            duration: 1,
            y: 100,
            opacity: 0,
            ease: 'back.out(1.7)',
            stagger: 0.05,
            delay: 0.5,
            // color: 'blue',
        });

        return () => {
            tl.kill();
            gsap.killTweensOf(chars);
        };
    }, []);

    const renderShapes = () => {
        const shapeTypes = ['cube', 'sphere', 'pyramid', 'torus'];
        return Array.from({ length: 15 }).map((_, i) => {
            const type = shapeTypes[i % shapeTypes.length];
            return (
                <div key={i} className={`shape absolute ${type}`}
                    style={{
                        top: `calc(50% + ${Math.random() * 200 - 100}px)`,
                        left: `calc(50% + ${Math.random() * 400 - 200}px)`,
                        transform: 'translate(-50%, -50%)',
                        opacity: 0
                    }}

                >
                    <div className="w-10 h-10 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg opacity-80"></div>
                </div>
            );
        });
    }

    return (
        <section className="relative w-full h-[60vh] md:h-screen flex items-center justify-center overflow-hidden font-family">
            <div ref={containerRef} className="absolute inset-0" style={{ perspective: '1000px',}}>
                {renderShapes()}
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/50 to-transparent"></div>
            </div>
            <div className="relative z-10 text-center">
                <h1 ref={textRef} className="text-5xl md:text-7xl lg:text-8xl font-black uppercase tracking-tighter text-white">
                    <span>Craft.</span>
                    <span> Code.<br /> </span>  
                    <span> Animate.</span>
                </h1>
            </div>
        </section>
    );
};

export default Hero;

// from-cyan via-blue-900/50