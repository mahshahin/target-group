import React from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';
import { Play } from 'lucide-react';

const ExhibitionsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  return (
    <section id="exhibitions" className="py-20 lg:py-24 bg-white border-b border-gray-100">
      <div className="container-site">
        <SectionHeading
          eyebrow={t('exhibitions.eyebrow')}
          title={t('exhibitions.title')}
          subtitle={t('exhibitions.subtitle')}
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {siteData.exhibitions.map((exhibition) => (
            <div 
              key={exhibition.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] overflow-hidden bg-gray-100">
                <img
                  src={exhibition.image}
                  alt={exhibition.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Video Play Overlay Placeholder */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-target-green transform scale-75 group-hover:scale-100 transition-transform duration-300 shadow-lg cursor-pointer">
                    <Play size={24} className={isRTL ? "ml-1" : "mr-1"} fill="currentColor" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-5 text-center">
                <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-target-green transition-colors">
                  {t(`exhibitions.ex${exhibition.id}`)}
                </h3>
                <p className="text-sm text-gray-500 font-medium">
                  {exhibition.video ? t('exhibitions.hasVideo') : t('exhibitions.clickToAdd')}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExhibitionsSection;
