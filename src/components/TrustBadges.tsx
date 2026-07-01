'use client';

import { Truck, ShieldCheck, CreditCard, Clock } from 'lucide-react';

export default function TrustBadges() {
  const badges = [
    {
      icon: Truck,
      title: "FREE SHIPPING",
      description: "On all orders above ₹1499",
    },
    {
      icon: ShieldCheck,
      title: "PREMIUM QUALITY",
      description: "Engineered high-grade fabrics",
    },
    {
      icon: CreditCard,
      title: "SECURE CHECKOUT",
      description: "100% encrypted checkout",
    },
    {
      icon: Clock,
      title: "24/7 SUPPORT",
      description: "Round-the-clock customer help",
    },
  ];

  return (
    <section className="w-full grid grid-cols-2 md:grid-cols-4 gap-6 py-12 px-12 bg-white border-b border-gray-100 select-none">
      {badges.map((badge, idx) => (
        <div key={idx} className="flex flex-col items-center justify-center text-center gap-3">
          {/* Black SVG Icon */}
          <div className="text-black">
            <badge.icon className="w-6 h-6" strokeWidth={1.5} />
          </div>
          
          {/* Heading */}
          <h4 className="text-sm font-bold text-black uppercase tracking-wider">
            {badge.title}
          </h4>
          
          {/* Description */}
          <p className="text-xs text-gray-500 max-w-[200px]">
            {badge.description}
          </p>
        </div>
      ))}
    </section>
  );
}
