'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Components
import Hero from '@/components/Hero';
import TrustBadges from '@/components/TrustBadges';
import CategoryGrid from '@/components/CategoryGrid';
import TrendingProducts from '@/components/TrendingProducts';
import CountdownSpotlight from '@/components/CountdownSpotlight';
import LookbookManifesto from '@/components/LookbookManifesto';
import PromoGrid from '@/components/PromoGrid';
import InstagramFeed from '@/components/InstagramFeed';
import Footer from '@/components/Footer';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll Up Reveal for sections as they enter the viewport
      const reveals = containerRef.current?.querySelectorAll('.scroll-reveal');
      if (reveals && reveals.length > 0) {
        reveals.forEach((el) => {
          gsap.from(el, {
            y: 60,
            opacity: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: el,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main ref={containerRef} className="flex flex-col bg-bg-primary overflow-x-hidden">
      {/* Section 1: Cinematic Hero (split view) */}
      <Hero />

      {/* Section 2: Trust Badges (feature bar) */}
      <div className="scroll-reveal">
        <TrustBadges />
      </div>

      {/* Section 3: Category Grid (5-column catalog) */}
      <div id="manifesto" className="scroll-reveal">
        <CategoryGrid />
      </div>

      {/* Section 4: Trending Products (draggable slider) */}
      <div className="scroll-reveal">
        <TrendingProducts />
      </div>

      {/* Section 5: Limited Drop Spotlight & Countdown */}
      <div className="scroll-reveal">
        <CountdownSpotlight />
      </div>

      {/* Section 6: Editorial Lookbook & Manifesto */}
      <div className="scroll-reveal">
        <LookbookManifesto />
      </div>

      {/* Section 7: Promotional Grid (12-column asymmetric) */}
      <div className="scroll-reveal">
        <PromoGrid />
      </div>

      {/* Section 8: Instagram Feed (GSAP infinite scroll) */}
      <div className="scroll-reveal">
        <InstagramFeed />
      </div>

      {/* Footer (mega-grid layout) */}
      <div id="footer" className="scroll-reveal">
        <Footer />
      </div>
    </main>
  );
}
