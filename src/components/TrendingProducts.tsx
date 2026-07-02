'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useCart } from '@/context/CartContext';

export default function TrendingProducts() {
  const sliderRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const { addToCart } = useCart();

  // Reusable GSAP Continuous Float animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      const items = sliderRef.current?.querySelectorAll('.product-png');
      if (items && items.length > 0) {
        items.forEach((item, idx) => {
          gsap.to(item, {
            y: -12,
            rotationZ: 0.5,
            duration: 3.5,
            ease: "sine.inOut",
            yoyo: true,
            repeat: -1,
            delay: idx * 0.2, // slight offset for natural movement
          });
        });
      }
    }, sliderRef);

    return () => ctx.revert();
  }, []);

  const handleMouseDown = (e: React.MouseEvent) => {
    if (!sliderRef.current) return;
    setIsDragging(true);
    setStartX(e.pageX - sliderRef.current.offsetLeft);
    setScrollLeft(sliderRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsDragging(false);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;
    e.preventDefault();
    const x = e.pageX - sliderRef.current.offsetLeft;
    const walk = (x - startX) * 1.5;
    sliderRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleQuickAdd = (e: React.MouseEvent, prod: any) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: prod.id,
      name: prod.name,
      price: parseInt(prod.price.replace(/[^\d]/g, '')),
      image: prod.image,
      size: 'M',
    });
  };

  const products = [
    {
      id: "KM-01",
      name: "KM-01 CYBER WINDBREAKER",
      price: "₹2,499",
      image: "/images/product_windbreaker.png",
    },
    {
      id: "KM-02",
      name: "KM-02 GRAPHIC SWEATSHIRT",
      price: "₹1,899",
      image: "/images/product_hoodie.png",
    },
    {
      id: "KM-03",
      name: "KM-03 ALPHA CARGO PANTS",
      price: "₹2,299",
      image: "/images/product_pants.png",
    },
    {
      id: "KM-04",
      name: "KM-04 TACTICAL VEST SHELL",
      price: "₹2,999",
      image: "/images/product_windbreaker.png",
    },
    {
      id: "KM-05",
      name: "KM-05 APEX FLEECE HOODIE",
      price: "₹1,999",
      image: "/images/product_hoodie.png",
    },
  ];

  return (
    <section className="w-full bg-white py-16 px-12 select-none overflow-hidden border-b border-gray-100">
      {/* Header */}
      <h2 className="text-center text-2xl font-syne font-bold mb-10 text-black">
        TRENDING NOW
      </h2>

      {/* Slider Track */}
      <div
        ref={sliderRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className={`flex gap-6 overflow-x-auto snap-x no-scrollbar max-w-7xl mx-auto pb-4 cursor-grab active:cursor-grabbing ${isDragging ? 'select-none' : ''}`}
      >
        {products.map((prod) => (
          <a
            href={`/products/${prod.id}`}
            key={prod.id}
            className="w-[280px] shrink-0 snap-start flex flex-col group block magnetic-target"
          >
            {/* Image Box */}
            <div className="w-full h-[350px] bg-[#F5F5F5] flex items-center justify-center p-6 relative overflow-hidden">
              <img
                src={prod.image}
                alt={prod.name}
                className="product-png h-[75%] object-contain pointer-events-none drop-shadow-[0_15px_25px_rgba(0,0,0,0.15)]"
              />
              <span className="absolute top-4 left-4 text-[10px] font-bold text-gray-400">
                {prod.id}
              </span>
            </div>

            {/* Details */}
            <div className="flex justify-between items-center mt-4">
              <span className="text-xs font-black text-black tracking-widest uppercase">{prod.name}</span>
              <span className="text-xs font-black text-gray-600">{prod.price}</span>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => handleQuickAdd(e, prod)}
              className="magnetic-target w-full bg-black text-white text-xs font-bold py-3 mt-4 transition-colors duration-300 group-hover:bg-[#FFD700] group-hover:text-black cursor-pointer"
            >
              ADD TO CART
            </button>
          </a>
        ))}
      </div>
    </section>
  );
}
