'use client';

export default function AnnouncementBar() {
  return (
    <div className="w-full h-8 bg-[#0A0A0A] text-white flex items-center text-[10px] font-bold tracking-widest uppercase relative z-50 overflow-hidden select-none">
      <div className="animate-marquee flex whitespace-nowrap">
        <div className="flex shrink-0 items-center justify-around min-w-full gap-8">
          <span>THE GRAND OPENING OF KMZONE STORE ON 27TH OF JUNE</span>
          <span className="text-white/30">•</span>
          <span>WORK IN PROGRESS</span>
          <span className="text-white/30">•</span>
          <span>BUILT FOR EVERYDAY STREETWEAR</span>
          <span className="text-white/30">•</span>
        </div>
        <div className="flex shrink-0 items-center justify-around min-w-full gap-8" aria-hidden="true">
          <span>THE GRAND OPENING OF KMZONE STORE ON 27TH OF JUNE</span>
          <span className="text-white/30">•</span>
          <span>WORK IN PROGRESS</span>
          <span className="text-white/30">•</span>
          <span>BUILT FOR EVERYDAY STREETWEAR</span>
          <span className="text-white/30">•</span>
        </div>
      </div>
    </div>
  );
}
