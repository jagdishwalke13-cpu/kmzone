'use client';

import { ArrowRight } from 'lucide-react';

export default function Footer() {
  const shopLinks = ['All Clothes', 'New Drops', 'Premium Thrift', 'Hoodies', 'Sale'];
  const companyLinks = ['Our Story', 'Careers', 'Press', 'Sustaining', 'Contact'];
  const helpLinks = ['Support', 'Shipping', 'Returns', 'Sizing', 'FAQ'];

  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-gray-200 pt-16 pb-8 px-12 select-none z-10 relative">
      
      {/* Top Grid (12 columns) */}
      <div className="grid grid-cols-12 gap-8 mb-12 max-w-7xl mx-auto">
        
        {/* Col 1 (Span 4) */}
        <div className="col-span-12 md:col-span-4 flex flex-col gap-4">
          <h2 className="text-2xl font-black font-syne uppercase select-none">
            <span className="text-[#FFD700]">KM</span>
            <span className="text-black">ZONE</span>
          </h2>
          <p className="text-xs text-gray-500 max-w-[80%] leading-relaxed">
            Global streetwear brand curated for the bold. High-end fabrics engineered to defy the norm.
          </p>
          
          {/* Social Icons SVGs */}
          <div className="flex gap-4 items-center mt-2">
            {['Instagram', 'Twitter', 'Facebook'].map((social, idx) => (
              <a
                key={social}
                href="#"
                className="magnetic-target text-xs font-bold text-gray-400 hover:text-black transition-colors duration-350"
              >
                {social.toUpperCase()}
              </a>
            ))}
          </div>
        </div>

        {/* Col 2 (Span 2): Shop */}
        <div className="col-span-6 sm:col-span-4 md:col-span-2">
          <h4 className="text-xs font-bold mb-4 text-black uppercase tracking-wider">// SHOP</h4>
          <ul className="flex flex-col gap-3">
            {shopLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="magnetic-target inline-block text-xs text-gray-500 hover:text-black transform hover:translate-x-[5px] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 3 (Span 2): Company */}
        <div className="col-span-6 sm:col-span-4 md:col-span-2">
          <h4 className="text-xs font-bold mb-4 text-black uppercase tracking-wider">// COMPANY</h4>
          <ul className="flex flex-col gap-3">
            {companyLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="magnetic-target inline-block text-xs text-gray-500 hover:text-black transform hover:translate-x-[5px] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 4 (Span 2): Help */}
        <div className="col-span-6 sm:col-span-4 md:col-span-2">
          <h4 className="text-xs font-bold mb-4 text-black uppercase tracking-wider">// HELP</h4>
          <ul className="flex flex-col gap-3">
            {helpLinks.map((link) => (
              <li key={link}>
                <a
                  href="#"
                  className="magnetic-target inline-block text-xs text-gray-500 hover:text-black transform hover:translate-x-[5px] transition-all duration-300 ease-[cubic-bezier(0.175,0.885,0.32,1.275)]"
                >
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Col 5 (Span 2): Newsletter */}
        <div className="col-span-12 sm:col-span-6 md:col-span-2 flex flex-col">
          <h4 className="text-xs font-bold mb-4 text-black uppercase tracking-wider">// NEWSLETTER</h4>
          <p className="text-[10px] text-gray-500 mb-4 leading-relaxed">
            Subscribe for early access and collection drops alerts.
          </p>
          
          {/* Input Form */}
          <form onSubmit={(e) => e.preventDefault()} className="flex w-full">
            <input
              type="email"
              placeholder="YOUR EMAIL"
              className="bg-white border border-gray-300 px-3 py-2 text-xs w-full focus:outline-none focus:border-black font-bold tracking-wider placeholder-gray-400"
              required
            />
            <button
              type="submit"
              className="magnetic-target bg-black text-white w-10 shrink-0 flex items-center justify-center hover:bg-[#FFD700] hover:text-black transition-colors duration-300"
              aria-label="Subscribe"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>
        </div>

      </div>

      {/* Bottom Row */}
      <div className="w-full text-center text-[10px] text-gray-400 border-t border-gray-200 pt-8 max-w-7xl mx-auto">
        © 2026 KMZONE. All rights reserved.
      </div>

    </footer>
  );
}
