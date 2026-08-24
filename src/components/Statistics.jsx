import React from 'react';
import { useTranslation } from 'react-i18next';
import { Users, Calendar, Package, MapPin } from 'lucide-react';

const iconMap = [Users, Calendar, Package, MapPin];

const Statistics = () => {
  const { t } = useTranslation();
  return (
    <section className="relative py-16 lg:py-20 bg-white text-gray-900 overflow-hidden border-b border-gray-100">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-target-green/5 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-gray-100 rounded-full blur-[100px] pointer-events-none" aria-hidden="true" />

      <div className="container-site relative z-10">
        <div className="grid grid-cols-2 gap-x-6 gap-y-12 lg:grid-cols-4 lg:gap-8">
          {[1, 2, 3, 4].map((num, index) => {
            const Icon = iconMap[index];
            return (
              <div key={num} className="flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-target-green-light flex items-center justify-center mb-5 group-hover:bg-target-green group-hover:scale-110 transition-all duration-300">
                  <Icon size={28} className="text-target-green-dark group-hover:text-white transition-colors" strokeWidth={1.6} />
                </div>
                <div className="text-2xl sm:text-3xl md:text-[2.6rem] font-black tracking-tightest leading-tight mb-1.5 text-gray-900 break-words text-balance" dir="ltr">
                  {t(`statistics.s${num}Num`)}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-bold text-balance">
                  {t(`statistics.s${num}Text`)}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Statistics;