'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

export default function CountdownSpotlight() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bootsRef = useRef<HTMLImageElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  // 1. Ticking countdown logic
  const [timeLeft, setTimeLeft] = useState({
    days: 4,
    hours: 12,
    minutes: 30,
    seconds: 45,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { ...prev, hours: prev.hours - 1, minutes: 59, seconds: 59 };
        } else if (prev.days > 0) {
          return { ...prev, days: prev.days - 1, hours: 23, minutes: 59, seconds: 59 };
        } else {
          clearInterval(timer);
          return prev;
        }
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // 2. Continuous float animation on tactical boots
  useEffect(() => {
    const ctx = gsap.context(() => {
      if (bootsRef.current) {
        gsap.to(bootsRef.current, {
          y: -12,
          rotationZ: 0.5,
          duration: 3.5,
          ease: "sine.inOut",
          yoyo: true,
          repeat: -1,
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // 3. Magnetic Button Lift hover animations
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

  const formatDigit = (num: number) => String(num).padStart(2, '0');

  return (
    <section
      ref={containerRef}
      className="w-full bg-white py-20 px-12 border-b border-gray-100 select-none overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Countdown & Headline */}
        <div className="flex flex-col items-start">
          <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
            // LIMITED DROP TEASER
          </span>
          <h2 className="text-4xl md:text-6xl font-syne font-black text-black tracking-tight leading-none uppercase mb-8">
            NEXT DROP:<br/>OVERDRIVE
          </h2>
          
          {/* Countdown Clock Display */}
          <div className="flex gap-4 sm:gap-6 mb-8 text-black">
            {[
              { label: 'DAYS', val: timeLeft.days },
              { label: 'HOURS', val: timeLeft.hours },
              { label: 'MINS', val: timeLeft.minutes },
              { label: 'SECS', val: timeLeft.seconds },
            ].map((time, idx) => (
              <div key={idx} className="flex flex-col items-center">
                <span className="text-4xl sm:text-5xl font-syne font-black tracking-tighter tabular-nums bg-[#F5F5F5] w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center border border-gray-100 rounded-sm">
                  {formatDigit(time.val)}
                </span>
                <span className="text-[10px] font-black text-gray-400 tracking-widest mt-2">
                  {time.label}
                </span>
              </div>
            ))}
          </div>

          <p className="text-gray-500 text-sm leading-relaxed max-w-sm mb-6">
            Get ready for our most aggressive release yet. The Overdrive Collection features high-durability fabrics and zero-gravity styling.
          </p>
        </div>

        {/* Right Side: Product Spotlight */}
        <div className="flex flex-col items-center justify-center">
          <div className="w-full max-w-[400px] aspect-[4/5] bg-[#F5F5F5] flex items-center justify-center p-8 relative border border-gray-100">
            {/* Tag label */}
            <span className="absolute top-4 left-4 text-[10px] font-black text-gray-400">
              UPCOMING // KM-06
            </span>

            {/* Tactical boots (Continuous Float) */}
            <img
              ref={bootsRef}
              src="/images/product_boots.png"
              alt="KM-06 Giga Tactical Boots"
              className="w-full h-full object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.15)]"
            />
          </div>

          <div className="text-center mt-6 w-full max-w-[400px] flex flex-col items-center">
            <h3 className="text-lg font-syne font-black text-black tracking-tight mb-1">
              KM-06 GIGA TACTICAL BOOTS
            </h3>
            <p className="text-xs font-black text-gray-400 tracking-wider mb-6">
              ESTIMATED PRICE: ₹3,999
            </p>

            <button
              ref={buttonRef}
              onMouseEnter={handleButtonMouseEnter}
              onMouseLeave={handleButtonMouseLeave}
              className="magnetic-target w-full py-4 bg-black text-white hover:bg-[#FFD700] hover:text-black font-black text-xs tracking-widest uppercase transition-colors duration-300 cursor-pointer"
            >
              NOTIFY ME ON DROP
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
