import React from 'react';
import { Tag, Zap, Percent } from 'lucide-react';

const AnnouncementBar = () => {
  return (
    <div className="fixed bottom-0 inset-x-0 bg-somafix-red text-white py-2 overflow-hidden z-50 border-t border-somafix-red-deep/50 shadow-lg">
      <a 
        href="#products" 
        className="block whitespace-nowrap group hover:cursor-pointer"
        aria-label="View Exhibition Offers"
      >
        <div className="inline-block animate-marquee group-hover:[animation-play-state:paused]">
          <span className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wide mx-8">
            <Zap size={18} className="text-yellow-300 fill-yellow-300 animate-pulse" />
            حصرياً لفترة محدودة: خصم 10% على منتجات مختارة خلال فترة المعرض!
            <Tag size={18} className="text-white ml-2" />
          </span>
          <span className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wide mx-8">
            <Zap size={18} className="text-yellow-300 fill-yellow-300 animate-pulse" />
            حصرياً لفترة محدودة: خصم 10% على منتجات مختارة خلال فترة المعرض!
            <Tag size={18} className="text-white ml-2" />
          </span>
          <span className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wide mx-8">
            <Zap size={18} className="text-yellow-300 fill-yellow-300 animate-pulse" />
            حصرياً لفترة محدودة: خصم 10% على منتجات مختارة خلال فترة المعرض!
            <Tag size={18} className="text-white ml-2" />
          </span>
          <span className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wide mx-8">
            <Zap size={18} className="text-yellow-300 fill-yellow-300 animate-pulse" />
            حصرياً لفترة محدودة: خصم 10% على منتجات مختارة خلال فترة المعرض!
            <Tag size={18} className="text-white ml-2" />
          </span>
        </div>
      </a>
    </div>
  );
};

export default AnnouncementBar;
