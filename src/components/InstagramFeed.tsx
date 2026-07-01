'use client';

import { useEffect, useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { gsap } from 'gsap';

export default function InstagramFeed() {
  const feedRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (track) {
        // Infinite horizontal marquee scroll using GSAP
        gsap.to(track, {
          xPercent: -50,
          ease: 'none',
          duration: 20,
          repeat: -1,
        });
      }
    }, feedRef);

    return () => ctx.revert();
  }, []);

  // 8 unique generated lifestyle images
  const images = [
    "/images/hero_model.png",
    "/images/category_hoodie.png",
    "/images/category_tshirt.png",
    "/images/category_outerwear.png",
    "/images/category_pants.png",
    "/images/category_accessories.png",
    "/images/promo_drops.png",
    "/images/promo_thrift.png",
  ];

  // We render them twice to ensure seamless continuous scrolling
  const scrollImages = [...images, ...images];

  return (
    <section ref={feedRef} className="w-full bg-white select-none overflow-hidden border-b border-gray-100">
      
      {/* Header Banner */}
      <a
        href="#"
        className="w-full h-16 bg-[#0A0A0A] flex justify-between items-center px-12 group magnetic-target cursor-pointer relative z-20"
      >
        <span className="text-white text-xs font-bold tracking-widest uppercase">
          FOLLOW US ON INSTAGRAM @km.clothes
        </span>
        <ArrowRight className="text-white w-5 h-5 transition-transform duration-300 group-hover:translate-x-2" />
      </a>

      {/* Feed Horizontal Marquee Track */}
      <div className="w-full relative overflow-hidden bg-black py-0">
        <div
          ref={trackRef}
          className="flex w-max"
        >
          {scrollImages.map((img, idx) => (
            <div
              key={idx}
              className="w-[200px] aspect-square relative flex-shrink-0 group overflow-hidden border-r border-black/10"
            >
              {/* Instagram lifestyle photo */}
              <img
                src={img}
                alt={`Instagram lifestyle model ${idx % 8 + 1}`}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Subtle hover overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white text-[10px] font-black tracking-widest uppercase">// KM.CLOTHES</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
