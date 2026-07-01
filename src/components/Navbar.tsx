'use client';

import { Search, User, ShoppingBag } from 'lucide-react';

export default function Navbar() {
  const navLinks = ['HOME', 'SHOP', 'COLLECTIONS', 'ABOUT US', 'CONTACT'];

  return (
    <header className="w-full h-20 bg-white text-black flex justify-between items-center px-12 sticky top-0 z-50 border-b border-gray-100">
      
      {/* Left: Brand Logo */}
      <h1 className="text-3xl font-syne font-black tracking-tighter uppercase select-none">
        <a href="#" className="magnetic-target flex items-center">
          <span className="text-[#FFD700]">KM</span>
          <span>ZONE</span>
        </a>
      </h1>

      {/* Center: Navigation Links */}
      <ul className="flex gap-8 text-sm font-inter font-medium">
        {navLinks.map((link) => (
          <li key={link}>
            <a
              href="#"
              className="relative text-black hover:text-black/85 transition-colors duration-300 py-1 magnetic-target block after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-[2px] after:bg-[#FFD700] hover:after:w-full after:transition-all after:duration-300"
            >
              {link}
            </a>
          </li>
        ))}
      </ul>

      {/* Right: Search, User, Cart Icons */}
      <div className="flex items-center gap-6">
        <button className="text-black hover:text-[#FFD700] transition-colors duration-300 p-2 magnetic-target relative" aria-label="Search">
          <Search className="w-5 h-5" strokeWidth={1.5} />
        </button>
        
        <button className="text-black hover:text-[#FFD700] transition-colors duration-300 p-2 magnetic-target relative" aria-label="Profile">
          <User className="w-5 h-5" strokeWidth={1.5} />
        </button>
        
        <button className="text-black hover:text-[#FFD700] transition-colors duration-300 p-2 magnetic-target relative" aria-label="Cart">
          <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
          {/* Cart yellow dot badge */}
          <span className="absolute top-1 right-1 w-3 h-3 bg-[#FFD700] rounded-full border border-white" />
        </button>
      </div>

    </header>
  );
}
