'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hide default cursor on desktop
    document.body.style.cursor = 'none';

    const cursor = cursorRef.current;
    if (!cursor) return;

    const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
    const mouse = { x: pos.x, y: pos.y };

    gsap.set(cursor, { x: pos.x, y: pos.y });

    let activeTarget: HTMLElement | null = null;

    const onMouseMove = (e: MouseEvent) => {
      if (activeTarget) {
        // Snapped state: lock cursor to the center of the magnetic target
        const rect = activeTarget.getBoundingClientRect();
        mouse.x = rect.left + rect.width / 2;
        mouse.y = rect.top + rect.height / 2;
      } else {
        // Normal state: follow mouse coordinates
        mouse.x = e.clientX;
        mouse.y = e.clientY;
      }
    };

    window.addEventListener('mousemove', onMouseMove);

    // QuickTo for high-performance cursor rendering
    const xTo = gsap.quickTo(cursor, 'x', { duration: 0.12, ease: 'power3.out' });
    const yTo = gsap.quickTo(cursor, 'y', { duration: 0.12, ease: 'power3.out' });

    const tickerUpdate = () => {
      xTo(mouse.x);
      yTo(mouse.y);
    };

    gsap.ticker.add(tickerUpdate);

    // Dynamic hover event tracking
    const handleMouseOver = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('.magnetic-target');
      if (target) {
        activeTarget = target as HTMLElement;
        cursor.classList.add('active');

        // Initial snap position update
        const rect = activeTarget.getBoundingClientRect();
        mouse.x = rect.left + rect.width / 2;
        mouse.y = rect.top + rect.height / 2;
      } else {
        activeTarget = null;
        cursor.classList.remove('active');
      }
    };

    window.addEventListener('mouseover', handleMouseOver);

    // Mouse boundaries detection
    const handleMouseLeave = () => {
      gsap.to(cursor, { opacity: 0, duration: 0.2 });
    };
    const handleMouseEnter = () => {
      gsap.to(cursor, { opacity: 1, duration: 0.2 });
    };

    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.body.style.cursor = 'auto';
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      gsap.ticker.remove(tickerUpdate);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="custom-cursor hidden md:block"
    />
  );
}
