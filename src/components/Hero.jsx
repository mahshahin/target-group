import React from 'react';
import { BadgeCheck, ArrowLeft, ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Hero = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section
      id="home"
      className="relative bg-[#edf2ef] pt-28 lg:pt-36 pb-14 lg:pb-24 overflow-hidden flex items-center min-h-[90vh]"
    >
      {/* Background Image spanning the entire section */}
      <img
        src={isRTL ? "/assets/main-products.jpg" : "/assets/main-products-en.jpg"}
        alt={t('hero.mainImageAlt')}
        className={`absolute inset-0 w-full h-full object-cover lg:object-fill mix-blend-multiply opacity-100 pointer-events-none z-0 ${isRTL ? 'object-left' : 'object-right'}`}
        style={{ filter: 'contrast(1.02)' }}
        loading="eager"
        fetchpriority="high"
        decoding="async"
      />

      {/* Subtle premium background glow */}
      <div
        className="absolute top-0 inset-x-0 h-72 bg-gradient-to-b from-target-green-light/40 to-transparent pointer-events-none z-0"
        aria-hidden="true"
      />

      <div className="container-site relative z-10 w-full">
        <div className="flex flex-col lg:flex-row lg:items-center">
          {/* Text Content */}
          <div className="lg:w-[55%] xl:w-[50%] flex flex-col items-start text-start bg-white/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 lg:p-0 rounded-3xl lg:rounded-none shadow-sm lg:shadow-none border border-white/50 lg:border-transparent">
            {/* Badge */}
            <span className="inline-flex items-center gap-2 rounded-full bg-white/80 lg:bg-target-green-light shadow-sm px-4 py-2 text-sm font-bold text-target-green-dark backdrop-blur-md border border-target-green/10">
              <BadgeCheck size={18} className="text-target-green" />
              {t('hero.badge')}
            </span>

            {/* Heading */}
            <h1 className="mt-5 text-[2.25rem] md:text-[2.75rem] lg:text-[3.25rem] xl:text-[3.5rem] font-black leading-[1.15] tracking-tightest">
              <span className="block text-target-green drop-shadow-sm">{t('hero.titleLine1')}</span>
              <span className="block text-gray-900 drop-shadow-sm">{t('hero.titleLine2')}</span>
            </h1>

            {/* Description */}
            <p className="mt-6 max-w-xl text-base md:text-lg lg:text-xl leading-[1.8] font-medium text-gray-700/90 drop-shadow-sm">
              {t('hero.desc')}
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a
                href="/#products"
                className="inline-flex items-center gap-2 rounded-full bg-target-green px-8 py-4 font-bold text-white text-[16px] transition-all duration-300 hover:bg-target-green-dark hover:scale-105 hover:shadow-xl shadow-md"
              >
                {t('hero.exploreBtn')}
                {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
              </a>
              <a
                href="/#contact"
                className="inline-flex items-center rounded-full border-2 border-gray-200 bg-white/90 backdrop-blur-md px-8 py-4 font-bold text-gray-900 text-[16px] transition-all duration-300 hover:border-target-green hover:text-target-green-dark hover:shadow-md"
              >
                {t('hero.contactBtn')}
              </a>
            </div>

            {/* SOMAFIX exclusive line */}
            <div className="mt-10 inline-flex flex-wrap items-center gap-0 pt-6 border-t border-gray-200/60 w-full">
              <span className="text-lg lg:text-xl font-bold text-gray-800 drop-shadow-sm z-10 relative">
                {t('hero.exclusiveLine1')}
              </span>
              <img
                src="/assets/soma-logo-transparent.png"
                alt={t('hero.somafixAlt')}
                className="h-10 lg:h-14 w-auto object-contain drop-shadow-md mx-2 lg:mx-3 transform hover:scale-105 transition-transform duration-300 relative z-0"
                loading="lazy"
              />
              <span className="text-lg lg:text-xl font-bold text-gray-800 drop-shadow-sm z-10 relative">
                {t('hero.exclusiveLine2')}
              </span>
            </div>
          </div>

          {/* Empty Space for the Image to show through on Large Screens */}
          <div className="hidden lg:block lg:w-[45%] xl:w-[50%]"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;