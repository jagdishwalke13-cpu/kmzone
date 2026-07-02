'use client';

export default function CategoryGrid() {
  const categories = [
    {
      title: "TRENDING CARGOS",
      image: "/images/category_pants.png",
      link: "/shop?category=CARGOS",
    },
    {
      title: "LOWER",
      image: "/images/category_hoodie.png",
      link: "/shop?category=LOWER",
    },
    {
      title: "TSHIRTS",
      image: "/images/category_tshirt.png",
      link: "/shop?category=TSHIRTS",
    },
    {
      title: "SPORTSWEAR",
      image: "/images/category_outerwear.png",
      link: "/shop?category=SPORTSWEAR",
    },
    {
      title: "ACCESSORIES",
      image: "/images/category_accessories.png",
      link: "/shop?category=ACCESSORIES",
    },
  ];

  return (
    <section className="w-full bg-white pt-16 pb-8 select-none">
      {/* Header */}
      <h2 className="text-center text-2xl font-syne font-bold mb-10 text-black">
        SHOP BY CATEGORY
      </h2>

      {/* Grid: 5 columns, height 600px, no gap */}
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 h-auto md:h-[600px] gap-0 border-y border-gray-100">
        {categories.map((cat, idx) => (
          <a
            key={idx}
            href={cat.link}
            className="relative w-full aspect-[3/4] md:aspect-auto md:h-full group overflow-hidden cursor-pointer block border-b md:border-b-0 md:border-r border-gray-100 last:border-0 magnetic-target"
          >
            {/* Grayscale Image transitioning to full color and scaling up */}
            <img
              src={cat.image}
              alt={cat.title}
              className="w-full h-full object-cover grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50 transition-opacity duration-500 group-hover:bg-black/20" />

            {/* Text/Button Container */}
            <div className="absolute inset-0 flex flex-col items-center justify-center p-4">
              {/* Category Title shifting up on hover */}
              <h3 className="text-white text-xl font-syne font-bold transition-transform duration-500 group-hover:-translate-y-4 text-center">
                {cat.title}
              </h3>
              
              {/* Floating Yellow Button */}
              <button
                tabIndex={-1}
                className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 text-xs font-bold text-black bg-[#FFD700] px-6 py-2 transition-all duration-500 delay-100 pointer-events-none"
              >
                SHOP NOW
              </button>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
