'use client';

import { useState, useRef, useEffect } from 'react';
import { useCart } from '@/context/CartContext';
import { gsap } from 'gsap';
import { ArrowLeft, CheckCircle2 } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const { cartItems, cartTotal, clearCart } = useCart();
  const router = useRouter();

  const [form, setForm] = useState({
    name: '',
    email: '',
    address: '',
    city: '',
    pincode: '',
    phone: '',
    paymentMethod: 'COD',
  });

  const [isSuccess, setIsSuccess] = useState(false);
  const [orderId] = useState(() => `KMZ-${Math.floor(100000 + Math.random() * 900000)}`);
  const [redirectSeconds, setRedirectSeconds] = useState(6);

  const successOverlayRef = useRef<HTMLDivElement>(null);
  const successContentRef = useRef<HTMLDivElement>(null);

  const shippingCost = cartTotal >= 1499 || cartTotal === 0 ? 0 : 150;
  const grandTotal = cartTotal + shippingCost;

  // 1. Success Animation Trigger
  useEffect(() => {
    if (isSuccess && successOverlayRef.current) {
      const ctx = gsap.context(() => {
        // Animate overlay slide in
        gsap.fromTo(
          successOverlayRef.current,
          { opacity: 0 },
          { opacity: 1, duration: 0.5, ease: 'power2.out' }
        );

        // Float up success content
        if (successContentRef.current) {
          gsap.fromTo(
            successContentRef.current,
            { y: 80, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.8, ease: 'expo.out', delay: 0.2 }
          );
        }
      });

      // Clear Cart State
      clearCart();

      // Countdown redirect
      const interval = setInterval(() => {
        setRedirectSeconds((s) => {
          if (s <= 1) {
            clearInterval(interval);
            router.push('/');
          }
          return s - 1;
        });
      }, 1000);

      return () => {
        ctx.revert();
        clearInterval(interval);
      };
    }
  }, [isSuccess, clearCart, router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (cartItems.length === 0) return;
    setIsSuccess(true);
  };

  if (cartItems.length === 0 && !isSuccess) {
    return (
      <div className="w-full min-h-[60vh] flex flex-col items-center justify-center bg-white text-black p-6 select-none">
        <h2 className="text-xl font-black uppercase mb-4 tracking-widest">// NO ITEMS TO CHECKOUT</h2>
        <a href="/shop" className="px-6 py-3 bg-black text-white hover:bg-[#FFD700] hover:text-black font-black text-xs tracking-widest uppercase transition-colors duration-300">
          GO TO SHOP
        </a>
      </div>
    );
  }

  return (
    <main className="w-full bg-white min-h-screen py-12 px-6 md:px-12 select-none relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Back link */}
        <a
          href="/cart"
          className="magnetic-target inline-flex items-center gap-2 text-xs font-black tracking-widest text-gray-500 hover:text-black uppercase mb-12 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> RETURN TO BAG
        </a>

        {/* Title */}
        <div className="mb-12">
          <span className="text-[#FFD700] text-xs font-bold tracking-[0.2em] mb-2 block">// ORDER DETAILS</span>
          <h2 className="text-4xl md:text-5xl font-syne font-black text-black tracking-tighter uppercase leading-none">
            CHECKOUT
          </h2>
        </div>

        {/* Grid split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Shipping Form (Span 7) */}
          <form onSubmit={handleSubmit} className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="text-sm font-black text-black tracking-widest uppercase border-b border-gray-200 pb-3">
              SHIPPING ADDRESS
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 tracking-wider">FULL NAME</label>
                <input
                  type="text"
                  name="name"
                  value={form.name}
                  onChange={handleInputChange}
                  required
                  className="bg-[#F5F5F5] border border-gray-200 focus:border-black px-4 py-3 text-xs font-bold tracking-wider placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 tracking-wider">EMAIL ADDRESS</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleInputChange}
                  required
                  className="bg-[#F5F5F5] border border-gray-200 focus:border-black px-4 py-3 text-xs font-bold tracking-wider placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-[10px] font-black text-gray-400 tracking-wider">STREET ADDRESS</label>
              <input
                type="text"
                name="address"
                value={form.address}
                onChange={handleInputChange}
                required
                className="bg-[#F5F5F5] border border-gray-200 focus:border-black px-4 py-3 text-xs font-bold tracking-wider placeholder-gray-400 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 tracking-wider">CITY</label>
                <input
                  type="text"
                  name="city"
                  value={form.city}
                  onChange={handleInputChange}
                  required
                  className="bg-[#F5F5F5] border border-gray-200 focus:border-black px-4 py-3 text-xs font-bold tracking-wider placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 tracking-wider">PINCODE</label>
                <input
                  type="text"
                  name="pincode"
                  value={form.pincode}
                  onChange={handleInputChange}
                  required
                  className="bg-[#F5F5F5] border border-gray-200 focus:border-black px-4 py-3 text-xs font-bold tracking-wider placeholder-gray-400 focus:outline-none"
                />
              </div>

              <div className="flex flex-col gap-2">
                <label className="text-[10px] font-black text-gray-400 tracking-wider">PHONE NUMBER</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleInputChange}
                  required
                  className="bg-[#F5F5F5] border border-gray-200 focus:border-black px-4 py-3 text-xs font-bold tracking-wider placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            <h3 className="text-sm font-black text-black tracking-widest uppercase border-b border-gray-200 pb-3 mt-4">
              PAYMENT METHOD
            </h3>

            <div className="flex flex-col gap-3">
              {[
                { id: 'COD', label: 'CASH ON DELIVERY (COD)' },
                { id: 'UPI', label: 'UPI / SCAN QR' },
                { id: 'CARD', label: 'CREDIT / DEBIT CARD' },
              ].map((method) => (
                <label
                  key={method.id}
                  className={`flex items-center gap-4 border p-4 cursor-pointer transition-colors duration-300 ${
                    form.paymentMethod === method.id
                      ? 'border-black bg-[#FAFAFA]'
                      : 'border-gray-100 hover:border-black'
                  }`}
                >
                  <input
                    type="radio"
                    name="paymentMethod"
                    value={method.id}
                    checked={form.paymentMethod === method.id}
                    onChange={handleInputChange}
                    className="accent-black w-4 h-4 cursor-pointer"
                  />
                  <span className="text-xs font-black text-black tracking-wider">
                    {method.label}
                  </span>
                </label>
              ))}
            </div>

            {/* Hidden Submit Button */}
            <button type="submit" id="submit-checkout" className="hidden" />
          </form>

          {/* Order Summary (Span 5) */}
          <div className="lg:col-span-5 bg-[#FAFAFA] border border-gray-200 p-6 flex flex-col gap-6">
            <h3 className="text-sm font-black text-black tracking-widest uppercase border-b border-gray-200 pb-3">
              ORDER ITEMS
            </h3>

            {/* List items */}
            <div className="flex flex-col gap-4 max-h-60 overflow-y-auto pr-2 no-scrollbar">
              {cartItems.map((item) => (
                <div key={`${item.id}-${item.size}`} className="flex justify-between items-center text-xs font-bold text-gray-500">
                  <div className="flex gap-3 items-center min-w-0 pr-2">
                    <span className="text-black font-black shrink-0 w-6 h-6 bg-white border border-gray-200 flex items-center justify-center text-[10px]">
                      {item.quantity}x
                    </span>
                    <span className="truncate text-black uppercase font-black tracking-wider">
                      {item.name} ({item.size})
                    </span>
                  </div>
                  <span className="text-black font-black shrink-0">
                    ₹{(item.price * item.quantity).toLocaleString()}
                  </span>
                </div>
              ))}
            </div>

            <div className="border-t border-gray-200 pt-4 flex flex-col gap-4 text-xs font-bold text-gray-600">
              <div className="flex justify-between">
                <span>ITEMS SUBTOTAL</span>
                <span className="text-black font-black">₹{cartTotal.toLocaleString()}</span>
              </div>
              <div className="flex justify-between">
                <span>SHIPPING CHARGES</span>
                <span className="text-black font-black">
                  {shippingCost === 0 ? 'FREE' : `₹${shippingCost.toLocaleString()}`}
                </span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-4 flex justify-between items-end">
              <span className="text-xs font-black text-black tracking-widest uppercase">
                TOTAL DUE
              </span>
              <span className="text-2xl font-black text-black">
                ₹{grandTotal.toLocaleString()}
              </span>
            </div>

            {/* Submit Trigger */}
            <button
              onClick={() => document.getElementById('submit-checkout')?.click()}
              className="magnetic-target w-full py-4 bg-black text-white hover:bg-[#FFD700] hover:text-black font-black text-xs tracking-widest uppercase text-center block transition-colors duration-300 cursor-pointer"
            >
              PLACE ORDER (₹{grandTotal.toLocaleString()})
            </button>
          </div>

        </div>

      </div>

      {/* Success Fullscreen Overlay */}
      {isSuccess && (
        <div
          ref={successOverlayRef}
          className="fixed inset-0 bg-[#0A0A0A] z-50 flex items-center justify-center px-6 opacity-0"
        >
          <div
            ref={successContentRef}
            className="w-full max-w-lg bg-white p-8 md:p-12 text-center flex flex-col items-center gap-6 border border-gray-100 shadow-[0_30px_60px_rgba(0,0,0,0.5)]"
          >
            <CheckCircle2 className="w-16 h-16 text-[#FFD700]" strokeWidth={1.5} />
            
            <h2 className="text-3xl font-syne font-black text-black tracking-tighter uppercase leading-none">
              ORDER PLACED!
            </h2>
            
            <div className="w-12 h-[2px] bg-[#FFD700]" />

            <p className="text-xs font-black tracking-widest text-gray-400 uppercase">
              ORDER ID: <span className="text-black font-black bg-[#F5F5F5] px-2 py-1 select-text">{orderId}</span>
            </p>

            <p className="text-gray-500 text-sm leading-relaxed max-w-sm">
              Thank you for shopping at **KMZONE**. Your everyday streetwear is being curating. A confirmation message has been sent to your email.
            </p>

            <p className="text-[10px] font-black text-gray-400 tracking-widest uppercase animate-pulse">
              REDIRECTING TO HOME IN {redirectSeconds} SECONDS...
            </p>
          </div>
        </div>
      )}

    </main>
  );
}
