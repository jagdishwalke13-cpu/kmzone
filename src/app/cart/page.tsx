'use client';

import { useCart } from '@/context/CartContext';
import { ArrowLeft, Trash2, Plus, Minus } from 'lucide-react';

export default function Cart() {
  const { cartItems, cartTotal, updateQuantity, removeFromCart } = useCart();

  const shippingCost = cartTotal >= 1499 || cartTotal === 0 ? 0 : 150;
  const grandTotal = cartTotal + shippingCost;

  return (
    <main className="w-full bg-white min-h-screen py-12 px-6 md:px-12 select-none">
      <div className="max-w-7xl mx-auto">
        
        {/* Title */}
        <div className="mb-12">
          <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] mb-2 block">// SHOPPING CART</span>
          <h2 className="text-4xl md:text-5xl font-syne font-black text-black tracking-tighter uppercase leading-none">
            YOUR BAG
          </h2>
        </div>

        {cartItems.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Side: Items List (Span 8) */}
            <div className="lg:col-span-8 flex flex-col gap-6">
              {cartItems.map((item) => (
                <div
                  key={`${item.id}-${item.size}`}
                  className="flex gap-4 sm:gap-6 items-center border border-gray-100 p-4 bg-white"
                >
                  {/* Image */}
                  <div className="w-20 h-20 sm:w-24 sm:h-24 bg-[#F5F5F5] flex-shrink-0 flex items-center justify-center p-2 border border-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-contain pointer-events-none"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-grow flex flex-col gap-1 min-w-0">
                    <span className="text-[9px] font-bold text-gray-400 tracking-wider">
                      SIZE: {item.size}
                    </span>
                    <h3 className="text-xs sm:text-sm font-black text-black tracking-widest uppercase truncate">
                      {item.name}
                    </h3>
                    <span className="text-xs font-bold text-gray-500">
                      ₹{item.price.toLocaleString()}
                    </span>
                  </div>

                  {/* Quantity controls */}
                  <div className="flex items-center border border-gray-200 bg-white scale-90 sm:scale-100 origin-center shrink-0">
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity - 1)}
                      className="magnetic-target p-2 text-gray-400 hover:text-black cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      <Minus className="w-3.5 h-3.5" />
                    </button>
                    <span className="px-3 text-xs font-black text-black w-8 text-center tabular-nums">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.size, item.quantity + 1)}
                      className="magnetic-target p-2 text-gray-400 hover:text-black cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      <Plus className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Subtotal & Delete (right-side) */}
                  <div className="flex flex-col items-end gap-3 shrink-0 pl-2">
                    <span className="text-xs sm:text-sm font-black text-black">
                      ₹{(item.price * item.quantity).toLocaleString()}
                    </span>
                    <button
                      onClick={() => removeFromCart(item.id, item.size)}
                      className="magnetic-target text-gray-400 hover:text-red-600 transition-colors p-2 cursor-pointer"
                      aria-label="Remove item"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              ))}

              {/* Continue Shopping Link */}
              <a
                href="/shop"
                className="magnetic-target inline-flex items-center gap-2 text-xs font-black tracking-widest text-gray-500 hover:text-black uppercase mt-4 transition-colors"
              >
                <ArrowLeft className="w-4 h-4" /> CONTINUE SHOPPING
              </a>
            </div>

            {/* Right Side: Summary Card (Span 4) */}
            <div className="lg:col-span-4 bg-[#FAFAFA] border border-gray-200 p-6 flex flex-col gap-6">
              <h3 className="text-sm font-black text-black tracking-widest uppercase border-b border-gray-200 pb-3">
                ORDER SUMMARY
              </h3>

              <div className="flex flex-col gap-4 text-xs font-bold text-gray-600">
                <div className="flex justify-between">
                  <span>BAG SUBTOTAL</span>
                  <span className="text-black font-black">₹{cartTotal.toLocaleString()}</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span>ESTIMATED SHIPPING</span>
                  <span className="text-black font-black">
                    {shippingCost === 0 ? 'FREE' : `₹${shippingCost.toLocaleString()}`}
                  </span>
                </div>

                {shippingCost > 0 && (
                  <p className="text-[10px] text-gray-400 font-normal leading-tight">
                    Add ₹{(1499 - cartTotal).toLocaleString()} more to your bag for FREE SHIPPING!
                  </p>
                )}
              </div>

              <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
                <span className="text-xs font-black text-black tracking-widest uppercase">
                  ORDER TOTAL
                </span>
                <span className="text-xl font-black text-black">
                  ₹{grandTotal.toLocaleString()}
                </span>
              </div>

              {/* Checkout Button */}
              <a
                href="/checkout"
                className="magnetic-target w-full py-4 bg-black text-white hover:bg-[#FFD700] hover:text-black font-black text-xs tracking-widest uppercase text-center block transition-colors duration-300 cursor-pointer"
              >
                PROCEED TO CHECKOUT
              </a>
            </div>

          </div>
        ) : (
          <div className="text-center py-24 border border-dashed border-gray-200 flex flex-col items-center gap-6">
            <p className="text-xs font-black tracking-widest text-gray-400 uppercase">
              YOUR CART IS CURRENTLY EMPTY
            </p>
            <a
              href="/shop"
              className="magnetic-target px-8 py-4 bg-black text-white hover:bg-[#FFD700] hover:text-black font-black text-xs tracking-widest uppercase transition-colors duration-300"
            >
              SHOP NEW DROPS
            </a>
          </div>
        )}

      </div>
    </main>
  );
}
