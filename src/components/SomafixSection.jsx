import React from 'react';
import { useTranslation } from 'react-i18next';
import { CheckCircle2 } from 'lucide-react';

const SomafixSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section className="relative py-20 lg:py-24 bg-white overflow-hidden border-b border-gray-100">
      {/* Red accent glow behind logo */}
      <div className={`absolute top-1/2 -translate-y-1/2 w-96 h-96 bg-somafix-red/5 rounded-full blur-[120px] pointer-events-none ${isRTL ? 'right-[10%]' : 'left-[10%]'}`} aria-hidden="true" />

      <div className="container-site relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Image Side */}
          <div className="lg:w-[45%] flex justify-center lg:justify-start">
            <div className="relative w-full max-w-lg group">
              {/* Decorative background effects */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-target-green/20 to-somafix-red/10 rounded-3xl blur-xl opacity-60 group-hover:opacity-100 transition duration-700 -z-10" aria-hidden="true" />
              
              <div className="relative rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/5 transform group-hover:-translate-y-2 transition-all duration-500">
                <img
                  src={`${import.meta.env.BASE_URL}assets/somafix-products.jpg`}
                  alt={t('somafix.alt')}
                  className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                  loading="lazy"
                />
                
                {/* Subtle internal shadow/gradient for depth */}
                <div className="absolute inset-0 bg-gradient-to-tr from-black/5 to-transparent pointer-events-none mix-blend-multiply" />
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-[58%] text-start">
            <span className="inline-block rounded-full bg-somafix-red-light text-somafix-red px-4 py-1.5 text-sm font-bold mb-6">
              {t('somafix.badge')}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-[1.3] tracking-tightest mb-5">
              <span className="text-somafix-red">{t('somafix.titlePrefix')}</span>
              <span className="text-target-green">{t('somafix.titleHighlight')}</span>
            </h2>

            <p className="text-base lg:text-lg text-gray-600 leading-[1.8] font-medium mb-9 max-w-2xl">
              {t('somafix.desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {['f1', 'f2', 'f3'].map((key) => (
                <div
                  key={key}
                  className="flex items-center gap-3 bg-gray-50 px-5 py-4 rounded-2xl border border-gray-100"
                >
                  <CheckCircle2 className="text-somafix-red flex-shrink-0" size={22} />
                  <span className="font-bold text-gray-800 text-sm">{t(`somafix.features.${key}`)}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SomafixSection;