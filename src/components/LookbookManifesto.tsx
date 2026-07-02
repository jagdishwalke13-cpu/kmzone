'use client';

export default function LookbookManifesto() {
  return (
    <section className="w-full bg-white py-24 px-12 border-b border-gray-100 select-none overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
        
        {/* Column 1 (Span 4): Manifesto text */}
        <div className="col-span-12 md:col-span-4 flex flex-col items-start pr-0 md:pr-8">
          <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] mb-4 uppercase">
            // BRAND PHILOSOPHY
          </span>
          
          <h2 className="text-4xl md:text-5xl font-syne font-black text-black tracking-tight leading-none uppercase mb-6">
            ANTI-GRAVITY<br/>MANIFESTO
          </h2>
          
          <div className="w-12 h-[2px] bg-black mb-8" />
          
          <p className="text-gray-500 text-sm leading-relaxed mb-6">
            Streetwear is not just apparel; it is a weightless defiance of standard conventions. At KMZONE, we engineer garments that hover between functional utility and futuristic high-fashion styling.
          </p>
          <p className="text-gray-400 text-xs tracking-wider font-bold">
            ZERO GRAVITY // INFINITY VANGUARD.
          </p>
        </div>

        {/* Column 2 (Span 4): Look 01 */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 mt-8 md:mt-0">
          <a
            href="/products/KM-01"
            className="group relative block aspect-[3/4.5] bg-[#F5F5F5] overflow-hidden border border-gray-100 transform hover:-translate-y-3 transition-transform duration-500 ease-out magnetic-target"
          >
            {/* Image */}
            <img
              src="/images/category_outerwear.png"
              alt="Look 01 editorial styling"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-500" />
            
            {/* Metadata Text (Reveals on Hover) */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-white text-[10px] font-black tracking-widest uppercase mb-1">
                // LOOK 01
              </span>
              <span className="text-white text-base font-bold uppercase">
                Layered Techwear Shell
              </span>
              <span className="text-gray-300 text-[10px] tracking-wider mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Oversized shell, windbreaker protection, modular straps.
              </span>
            </div>
          </a>
        </div>

        {/* Column 3 (Span 4): Look 02 (Asymmetric shift down) */}
        <div className="col-span-12 sm:col-span-6 md:col-span-4 mt-8 md:mt-16">
          <a
            href="/products/KM-03"
            className="group relative block aspect-[3/4.5] bg-[#F5F5F5] overflow-hidden border border-gray-100 transform hover:-translate-y-3 transition-transform duration-500 ease-out magnetic-target"
          >
            {/* Image */}
            <img
              src="/images/category_pants.png"
              alt="Look 02 editorial styling"
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 ease-out"
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40 group-hover:bg-black/15 transition-colors duration-500" />

            {/* Metadata Text (Reveals on Hover) */}
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
              <span className="text-white text-[10px] font-black tracking-widest uppercase mb-1">
                // LOOK 02
              </span>
              <span className="text-white text-base font-bold uppercase">
                Volt Utility Cargo Styling
              </span>
              <span className="text-gray-300 text-[10px] tracking-wider mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                Deep black utility pants with multi-buckle adjustable straps.
              </span>
            </div>
          </a>
        </div>

      </div>
    </section>
  );
}
