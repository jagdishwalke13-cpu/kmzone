'use client';

export default function PromoGrid() {
  const blocks = [
    {
      colSpan: "col-span-12 md:col-span-3",
      title: "NEW DROPS",
      buttonText: "EXPLORE",
      image: "/images/promo_drops.png",
      link: "#",
    },
    {
      colSpan: "col-span-12 md:col-span-6",
      title: "PREMIUM THRIFT",
      buttonText: "EXPLORE",
      image: "/images/promo_thrift.png",
      link: "#",
    },
    {
      colSpan: "col-span-12 md:col-span-3",
      title: "UP TO 50% OFF",
      buttonText: "SHOP SALE",
      image: "/images/promo_sale.png",
      link: "#",
    },
  ];

  return (
    <section className="w-full px-12 py-16 bg-white border-b border-gray-100 select-none">
      <div className="grid grid-cols-12 gap-6 h-auto md:h-[400px]">
        {blocks.map((block, idx) => (
          <a
            key={idx}
            href={block.link}
            className={`${block.colSpan} relative w-full h-[250px] md:h-full group overflow-hidden cursor-pointer block border border-gray-100 magnetic-target`}
          >
            {/* Background Image scaling on hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-105"
              style={{ backgroundImage: `url('${block.image}')` }}
            />
            
            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/60 group-hover:bg-black/45 transition-colors duration-500" />

            {/* Content Container */}
            <div className="absolute inset-0 flex flex-col justify-between p-8 z-10">
              {/* Top Index */}
              <span className="text-[10px] font-black text-white/40 tracking-widest uppercase">
                // BLOCK 0{idx + 1}
              </span>

              {/* Title and Button */}
              <div>
                <h3 className="text-white text-2xl md:text-3xl font-syne font-black tracking-tight mb-4 uppercase">
                  {block.title}
                </h3>
                
                <button
                  tabIndex={-1}
                  className="bg-white text-black text-[10px] font-black tracking-widest px-6 py-3 uppercase transition-colors duration-300 group-hover:bg-[#FFD700] pointer-events-none"
                >
                  {block.buttonText}
                </button>
              </div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
