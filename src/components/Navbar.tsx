'use client';

import { useState } from 'react';
import { Search, User, ShoppingBag, Menu, X } from 'lucide-react';
import { useCart } from '@/context/CartContext';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const { cartCount } = useCart();

  const navLinks = [
    { name: 'HOME', href: '/' },
    { name: 'SHOP', href: '/shop' },
    { name: 'COLLECTIONS', href: '/shop' },
    { name: 'ABOUT US', href: '/#manifesto' },
    { name: 'CONTACT', href: '/#footer' },
  ];

  return (
    <>
      <header className="w-full h-20 bg-white text-black flex justify-between items-center px-6 md:px-12 sticky top-0 z-50 border-b border-gray-100">
        
        {/* Left: Brand Logo */}
        <h1 className="text-2xl md:text-3xl font-syne font-black tracking-tighter uppercase select-none">
          <a href="/" className="magnetic-target flex items-center">
            <span className="text-[#FFD700]">KM</span>
            <span>ZONE</span>
          </a>
        </h1>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <ul className="hidden md:flex gap-8 text-sm font-inter font-medium">
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                className="relative text-black hover:text-black/85 transition-colors duration-300 py-1 magnetic-target block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            </li>
          ))}
        </ul>

        {/* Right: Search, User, Cart Icons & Hamburger Menu */}
        <div className="flex items-center gap-4 md:gap-6">
          <a href="/shop" className="hidden md:block text-black hover:text-[#FFD700] transition-colors duration-300 p-2 magnetic-target relative" aria-label="Search">
            <Search className="w-5 h-5" strokeWidth={1.5} />
          </a>
          
          <button className="hidden md:block text-black hover:text-[#FFD700] transition-colors duration-300 p-2 magnetic-target relative" aria-label="Profile">
            <User className="w-5 h-5" strokeWidth={1.5} />
          </button>
          
          <a href="/cart" className="text-black hover:text-[#FFD700] transition-colors duration-300 p-2 magnetic-target relative block" aria-label="Cart">
            <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
            {cartCount > 0 && (
              <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-[#FFD700] text-black text-[9px] font-black rounded-full flex items-center justify-center border border-white animate-pulse">
                {cartCount}
              </span>
            )}
          </a>

          {/* Hamburger Menu Icon (Mobile Only) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black hover:text-[#FFD700] transition-colors duration-300 p-2 magnetic-target relative z-50 cursor-pointer"
            aria-label="Toggle mobile menu"
          >
            {isOpen ? <X className="w-6 h-6" strokeWidth={1.5} /> : <Menu className="w-6 h-6" strokeWidth={1.5} />}
          </button>
        </div>

      </header>

      {/* Mobile Navigation Drawer */}
      {isOpen && (
        <div className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-[#0A0A0A] text-white z-40 flex flex-col items-center justify-center gap-8 px-6 transition-all duration-300 animate-fade-in">
          <ul className="flex flex-col gap-6 text-center text-xl font-syne font-bold tracking-wider">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:text-[#FFD700] transition-colors duration-300 py-2 block magnetic-target"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          <div className="flex gap-8 mt-12 border-t border-white/10 pt-8 w-full justify-center">
            <a href="/shop" className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white cursor-pointer" onClick={() => setIsOpen(false)}>
              <Search className="w-4 h-4" /> SEARCH
            </a>
            <button className="flex items-center gap-2 text-xs font-bold text-gray-400 hover:text-white cursor-pointer" onClick={() => setIsOpen(false)}>
              <User className="w-4 h-4" /> PROFILE
            </button>
          </div>
        </div>
      )}
    </>
  );
}
