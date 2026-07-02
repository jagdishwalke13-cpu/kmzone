'use client';

import { useState, useMemo } from 'react';
import { Search as SearchIcon, ShoppingBag } from 'lucide-react';
import { products, Product } from '@/data/products';
import { useCart } from '@/context/CartContext';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('ALL');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { addToCart } = useCart();

  const categories = ['ALL', 'CARGOS', 'LOWER', 'TSHIRTS', 'SPORTSWEAR', 'ACCESSORIES'];

  // Filter products based on selected category and search query
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        selectedCategory === 'ALL' || product.category === selectedCategory;
      const matchesSearch =
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleQuickAdd = (e: React.MouseEvent, product: Product) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: 'M', // default size for quick add
    });
  };

  return (
    <main className="w-full bg-white min-h-screen py-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="mb-12 text-center">
          <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] mb-2 block">// KMZONE CATALOG</span>
          <h2 className="text-4xl md:text-6xl font-syne font-black text-black tracking-tighter uppercase leading-none">
            SHOP THE DROPS
          </h2>
        </div>

        {/* Filter and Search Bar Row */}
        <div className="flex flex-col md:flex-row gap-6 justify-between items-center mb-12 border-b border-gray-100 pb-8">
          
          {/* Categories Tab list */}
          <div className="flex gap-2 overflow-x-auto no-scrollbar w-full md:w-auto pb-2 md:pb-0 scroll-smooth">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`magnetic-target px-4 py-2 text-xs font-black tracking-widest uppercase transition-all duration-300 ${
                  selectedCategory === cat
                    ? 'bg-black text-[#FFD700]'
                    : 'bg-[#F5F5F5] text-gray-500 hover:bg-black hover:text-white'
                } cursor-pointer`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Input Box */}
          <div className="relative w-full md:w-80 flex items-center">
            <input
              type="text"
              placeholder="SEARCH PRODUCTS"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#F5F5F5] text-black border border-gray-200 focus:border-black px-4 py-3 pl-10 text-xs font-bold tracking-widest placeholder-gray-400 focus:outline-none"
            />
            <SearchIcon className="w-4 h-4 text-gray-400 absolute left-3 pointer-events-none" />
          </div>

        </div>

        {/* Products Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredProducts.map((prod) => (
              <a
                key={prod.id}
                href={`/products/${prod.id}`}
                className="group flex flex-col justify-between bg-white border border-gray-100 p-4 relative magnetic-target"
              >
                {/* Image Box */}
                <div className="w-full aspect-square bg-[#F5F5F5] flex items-center justify-center p-6 relative overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    className="h-[80%] object-contain transition-transform duration-500 group-hover:scale-110 pointer-events-none drop-shadow-[0_10px_15px_rgba(0,0,0,0.08)]"
                  />
                  <span className="absolute top-3 left-3 text-[9px] font-black text-gray-400 tracking-wider">
                    {prod.id}
                  </span>
                  
                  {/* Quick Add Overlay Button */}
                  <button
                    onClick={(e) => handleQuickAdd(e, prod)}
                    className="absolute bottom-3 right-3 p-3 bg-black text-white hover:bg-[#FFD700] hover:text-black transition-colors duration-300 rounded-none cursor-pointer flex items-center justify-center"
                    title="Quick Add (Size M)"
                  >
                    <ShoppingBag className="w-4 h-4" />
                  </button>
                </div>

                {/* Details */}
                <div className="mt-4 flex flex-col gap-1">
                  <span className="text-[10px] font-bold text-gray-400 tracking-widest uppercase">
                    {prod.category}
                  </span>
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-xs font-black text-black tracking-widest uppercase leading-tight group-hover:text-black/70 transition-colors">
                      {prod.name}
                    </h3>
                    <span className="text-xs font-black text-black shrink-0">
                      ₹{prod.price.toLocaleString()}
                    </span>
                  </div>
                </div>
              </a>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 border border-dashed border-gray-200">
            <p className="text-xs font-black tracking-widest text-gray-400 uppercase">
              NO PRODUCTS FOUND MATCHING YOUR CRITERIA
            </p>
          </div>
        )}

      </div>
    </main>
  );
}
