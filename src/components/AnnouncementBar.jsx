import React from 'react';
import { Tag, Zap } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const AnnouncementBar = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const animationClass = isRTL ? 'animate-marquee-rtl' : 'animate-marquee-ltr';
  
  // Use English text if not Arabic
  const displayText = isRTL 
    ? 'حصرياً لفترة محدودة: خصم 10% على منتجات مختارة خلال فترة المعرض! أبعتلنا رسالة على الواتساب دلوقتي وأحجز مكانك'
    : 'Exclusive for a limited time: 10% off selected products during the exhibition! Send us a WhatsApp message now to reserve your spot';

  const content = (
    <>
      {[1, 2, 3, 4].map((i) => (
        <span key={i} className="inline-flex items-center gap-3 text-sm md:text-base font-bold tracking-wide mx-8">
          <Zap size={18} className="text-yellow-300 fill-yellow-300 animate-pulse shrink-0" />
          {displayText}
          <Tag size={18} className="text-white ml-2 shrink-0" />
        </span>
      ))}
    </>
  );

  return (
    <div className="fixed bottom-0 inset-x-0 bg-somafix-red text-white py-2 overflow-hidden z-50 border-t border-somafix-red-deep/50 shadow-lg flex" dir={isRTL ? 'rtl' : 'ltr'}>
      <a 
        href="#products" 
        className="flex w-full whitespace-nowrap group hover:cursor-pointer"
        aria-label="View Exhibition Offers"
      >
        <div className={`flex shrink-0 ${animationClass} group-hover:[animation-play-state:paused]`}>
          {content}
        </div>
        <div className={`flex shrink-0 ${animationClass} group-hover:[animation-play-state:paused]`} aria-hidden="true">
          {content}
        </div>
      </a>
    </div>
  );
};
export default AnnouncementBar;
