'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLParagraphElement>(null);
  const tagRef = useRef<HTMLSpanElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Tag fade-in
      if (tagRef.current) {
        gsap.fromTo(tagRef.current, { opacity: 0, y: 15 }, { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' });
      }

      // 2. Headline SplitText reveal
      const wordSpans = headlineRef.current?.querySelectorAll('.word-span');
      if (wordSpans && wordSpans.length > 0) {
        gsap.fromTo(
          wordSpans,
          {
            y: '120%',
            rotate: 4,
            opacity: 0,
          },
          {
            y: '0%',
            rotate: 0,
            opacity: 1,
            duration: 1.2,
            ease: 'power3.out',
            stagger: 0.15,
            delay: 0.2,
          }
        );
      }

      // 3. Subtext fade-in
      if (subtextRef.current) {
        gsap.fromTo(
          subtextRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.6 }
        );
      }

      // 4. Button fade-in
      if (buttonRef.current) {
        gsap.fromTo(
          buttonRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.8 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  // Magnetic Button Lift hover animations using GSAP
  const handleButtonMouseEnter = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: -6,
        scale: 1.02,
        boxShadow: '0px 15px 25px rgba(255, 215, 0, 0.25)',
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    }
  };

  const handleButtonMouseLeave = () => {
    if (buttonRef.current) {
      gsap.to(buttonRef.current, {
        y: 0,
        scale: 1,
        boxShadow: '0px 0px 0px rgba(255, 215, 0, 0)',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  const titleWords = ["KMZONE.", "CURATED."];

  return (
    <section
      ref={heroRef}
      className="w-full h-[85vh] bg-[#0A0A0A] flex relative overflow-hidden select-none"
    >
      {/* Left Side Content Box */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 md:pl-16 z-20 relative text-white">
        <span
          ref={tagRef}
          className="text-[#FFD700] text-xs font-bold tracking-[0.2em] mb-4 block"
        >
          BUILT FOR EVERYDAY STREETWEAR
        </span>
        
        <h2
          ref={headlineRef}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-9xl font-syne font-black leading-[1.1] mb-6 overflow-hidden text-white"
        >
          {titleWords.map((word, idx) => (
            <span key={idx} className="inline-block overflow-hidden mr-4 py-1">
              <span className="inline-block word-span transform origin-bottom-left">
                {word}
              </span>
            </span>
          ))}
        </h2>

        <p
          ref={subtextRef}
          className="text-gray-400 max-w-md mb-8 text-sm leading-relaxed"
        >
          Premium garments engineered for comfort, durability, and identity. Built for everyday streetwear.
        </p>

        <div>
          <button
            ref={buttonRef}
            onMouseEnter={handleButtonMouseEnter}
            onMouseLeave={handleButtonMouseLeave}
            className="magnetic-target bg-white text-black px-8 py-4 font-bold uppercase transition-colors hover:bg-[#FFD700] text-xs tracking-wider cursor-pointer"
          >
            SHOP THE DROP
          </button>
        </div>
      </div>

      {/* Right Side Image (Full width on mobile, 60% on desktop) with Dynamic Fade Overlay */}
      <div className="absolute right-0 top-0 w-full md:w-[60%] h-full z-10 pointer-events-none select-none">
        <img
          src="/images/hero_model.png"
          alt="Streetwear model"
          className="w-full h-full object-cover object-top"
        />
        {/* Dynamic Gradient: Vertical fade on mobile, Horizontal fade on desktop */}
        <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-[#0A0A0A] via-[#0A0A0A]/60 md:via-[#0A0A0A]/40 to-transparent w-full md:w-[50%] h-full left-0 top-0" />
      </div>
    </section>
  );
}
