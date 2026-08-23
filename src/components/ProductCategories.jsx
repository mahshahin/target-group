import React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProductCategories = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section id="products" className="relative py-20 lg:py-24 bg-target-green-deep text-white overflow-hidden">
      {/* Decorative glows */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-target-green/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />

      <div className="container-site relative z-10">
        <SectionHeading
          eyebrow={t('products.eyebrow')}
          title={t('products.title')}
          subtitle={t('products.subtitle')}
          tone="dark"
          accent="white"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6">
          {siteData.productCategories.map((category) => {
            const Icon = category.icon;
            return (
              <Link
                key={category.id}
                to={`/category/${category.slug}`}
                className="group bg-white text-gray-900 rounded-2xl p-7 flex flex-col shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 cursor-pointer block relative overflow-hidden z-0"
              >
                {/* Optional Background Image for aesthetics */}
                {category.bgImage && (
                  <div className="absolute top-0 right-0 w-3/4 h-full pointer-events-none z-[-1] opacity-50 group-hover:scale-105 group-hover:opacity-80 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-l from-transparent via-white/50 to-white z-10" />
                    <img src={category.bgImage} alt="" className="w-full h-full object-cover object-left" />
                  </div>
                )}
                
                <div className="w-12 h-12 rounded-xl bg-target-green-light text-target-green-dark flex items-center justify-center mb-5 group-hover:bg-target-green group-hover:text-white transition-colors duration-300 relative z-10">
                  <Icon size={24} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-target-green-dark transition-colors relative z-10">
                  {t(`products.cats.c${category.id}Title`)}
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed mb-6 flex-1 relative z-10">
                  {t(`products.cats.c${category.id}Desc`)}
                </p>
                <div className="flex items-center gap-1.5 text-target-green-dark font-bold text-sm group-hover:gap-3 transition-all duration-300 mt-auto relative z-10">
                  <span>{i18n.language === 'ar' ? 'التفاصيل' : 'Details'}</span>
                  {isRTL ? <ArrowLeft size={18} /> : <ArrowRight size={18} />}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProductCategories;