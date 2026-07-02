'use client';

import React, { useEffect, useRef, useState } from 'react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { gsap } from 'gsap';
import { ArrowLeft, Plus, Minus } from 'lucide-react';
import { useRouter } from 'next/navigation';

interface PageProps {
  params: Promise<{ id: string }>;
}

export default function ProductDetail({ params }: PageProps) {
  // Resolve params promise in client component
  const { id } = React.use(params);
  const product = products.find((p) => p.id === id);

  const { addToCart } = useCart();
  const router = useRouter();
  
  const [size, setSize] = useState('M');
  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const addToCartBtnRef = useRef<HTMLButtonElement>(null);
  const buyNowBtnRef = useRef<HTMLButtonElement>(null);

  // 1. Continuous Float Animation on Image
  useEffect(() => {
    if (!product) return;
    const ctx = gsap.context(() => {
      if (imgRef.current) {
        gsap.to(imgRef.current, {
          y: -12,
          rotationZ: 0.5,
          duration: 3.5,
          ease: 'sine.inOut',
          yoyo: true,
          repeat: -1,
        });
      }
    }, containerRef);
    return () => ctx.revert();
  }, [product]);

  // 2. Magnetic Button Lift Animations
  const handleBtnMouseEnter = (btnRef: React.RefObject<HTMLButtonElement | null>, color: string) => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        y: -6,
        scale: 1.02,
        boxShadow: `0px 15px 25px ${color}`,
        duration: 0.3,
        ease: 'back.out(1.7)',
      });
    }
  };

  const handleBtnMouseLeave = (btnRef: React.RefObject<HTMLButtonElement | null>) => {
    if (btnRef.current) {
      gsap.to(btnRef.current, {
        y: 0,
        scale: 1,
        boxShadow: '0px 0px 0px rgba(0, 0, 0, 0)',
        duration: 0.3,
        ease: 'power2.out',
      });
    }
  };

  if (!product) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white text-black p-6 select-none">
        <h2 className="text-xl font-black uppercase mb-4 tracking-widest">// PRODUCT NOT FOUND</h2>
        <a href="/shop" className="px-6 py-3 bg-black text-white hover:bg-[#FFD700] hover:text-black font-black text-xs tracking-widest uppercase transition-colors duration-300">
          RETURN TO SHOP
        </a>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      quantity,
    });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleBuyNow = () => {
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size,
      quantity,
    });
    router.push('/checkout');
  };

  const sizes = ['S', 'M', 'L', 'XL'];

  return (
    <main
      ref={containerRef}
      className="w-full bg-white min-h-screen py-12 px-6 md:px-12 select-none"
    >
      <div className="max-w-7xl mx-auto">
        
        {/* Back Link */}
        <a
          href="/shop"
          className="magnetic-target inline-flex items-center gap-2 text-xs font-black tracking-widest text-gray-500 hover:text-black uppercase mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> BACK TO SHOP
        </a>

        {/* Dynamic Split Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Spotlight */}
          <div className="w-full aspect-square md:aspect-[4/5] bg-[#F5F5F5] flex items-center justify-center p-8 relative border border-gray-100">
            <span className="absolute top-4 left-4 text-[10px] font-black text-gray-400">
              KMZONE // {product.id}
            </span>
            
            <img
              ref={imgRef}
              src={product.image}
              alt={product.name}
              className="h-[80%] object-contain pointer-events-none drop-shadow-[0_20px_35px_rgba(0,0,0,0.12)]"
            />
          </div>

          {/* Right Column: Details & CTA */}
          <div className="flex flex-col items-start pt-4">
            
            {/* Category tag */}
            <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] mb-3 uppercase bg-black px-3 py-1.5">
              {product.category}
            </span>

            {/* Title */}
            <h2 className="text-3xl md:text-5xl font-syne font-black text-black tracking-tight leading-none uppercase mb-4">
              {product.name}
            </h2>

            {/* Price */}
            <p className="text-2xl font-black text-black tracking-tight mb-6">
              ₹{product.price.toLocaleString()}
            </p>

            <div className="w-full h-[1px] bg-gray-100 mb-6" />

            {/* Description */}
            <p className="text-gray-500 text-sm leading-relaxed mb-8">
              {product.description}
            </p>

            {/* Size Selector */}
            <div className="mb-6 w-full">
              <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase block mb-3">
                SELECT SIZE
              </span>
              <div className="flex gap-3">
                {sizes.map((sz) => (
                  <button
                    key={sz}
                    onClick={() => setSize(sz)}
                    className={`magnetic-target w-12 h-12 flex items-center justify-center text-xs font-black tracking-wider border rounded-none transition-all duration-300 cursor-pointer ${
                      size === sz
                        ? 'bg-black text-[#FFD700] border-black'
                        : 'bg-white text-black border-gray-200 hover:border-black'
                    }`}
                  >
                    {sz}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="mb-8 w-full">
              <span className="text-[10px] font-black text-gray-400 tracking-widest uppercase block mb-3">
                SELECT QUANTITY
              </span>
              <div className="flex items-center border border-gray-200 w-max bg-white">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="magnetic-target p-3 hover:text-black text-gray-400 transition-colors cursor-pointer"
                  aria-label="Decrease quantity"
                >
                  <Minus className="w-4 h-4" />
                </button>
                <span className="px-6 text-xs font-black text-black w-12 text-center tabular-nums">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="magnetic-target p-3 hover:text-black text-gray-400 transition-colors cursor-pointer"
                  aria-label="Increase quantity"
                >
                  <Plus className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* CTA Buttons Row */}
            <div className="flex flex-col sm:flex-row gap-4 w-full mt-4">
              {/* Add to Cart */}
              <button
                ref={addToCartBtnRef}
                onClick={handleAddToCart}
                onMouseEnter={() => handleBtnMouseEnter(addToCartBtnRef, 'rgba(0, 0, 0, 0.15)')}
                onMouseLeave={() => handleBtnMouseLeave(addToCartBtnRef)}
                className={`magnetic-target flex-1 py-4 text-xs font-black tracking-widest uppercase transition-colors duration-300 cursor-pointer border border-black ${
                  added
                    ? 'bg-green-600 text-white border-green-600'
                    : 'bg-black text-white hover:bg-white hover:text-black'
                }`}
              >
                {added ? '✓ ADDED TO CART!' : 'ADD TO CART'}
              </button>

              {/* Buy It Now */}
              <button
                ref={buyNowBtnRef}
                onClick={handleBuyNow}
                onMouseEnter={() => handleBtnMouseEnter(buyNowBtnRef, 'rgba(255, 215, 0, 0.25)')}
                onMouseLeave={() => handleBtnMouseLeave(buyNowBtnRef)}
                className="magnetic-target flex-1 py-4 bg-[#FFD700] text-black hover:bg-black hover:text-white border border-[#FFD700] hover:border-black text-xs font-black tracking-widest uppercase transition-all duration-300 cursor-pointer"
              >
                BUY IT NOW
              </button>
            </div>

          </div>

        </div>

      </div>
    </main>
  );
}
