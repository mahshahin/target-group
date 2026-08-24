import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';
import { Play, X, Image as ImageIcon } from 'lucide-react';

const ExhibitionsSection = () => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  const [selectedExhibition, setSelectedExhibition] = useState(null);
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
              onClick={() => setSelectedExhibition(exhibition)}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 cursor-pointer"
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

      {/* Exhibition Modal Placeholder */}
      {selectedExhibition && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-gray-900/80 backdrop-blur-sm transition-opacity" onClick={() => setSelectedExhibition(null)}>
          <div 
            className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-gray-100">
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                {t(`exhibitions.ex${selectedExhibition.id}`)}
              </h3>
              <button
                onClick={() => setSelectedExhibition(null)}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 hover:text-gray-900 transition-colors"
              >
                <X size={20} />
              </button>
            </div>
            
            {/* Body */}
            <div className="p-8 sm:p-12 flex flex-col items-center justify-center text-center flex-grow overflow-y-auto">
              <div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mb-6 border-2 border-dashed border-gray-200">
                <ImageIcon size={32} className="text-gray-400" />
              </div>
              <h4 className="text-xl font-bold text-gray-800 mb-2">
                {isRTL ? 'معرض الصور والفيديوهات' : 'Media Gallery'}
              </h4>
              <p className="text-gray-500 max-w-md mx-auto leading-relaxed">
                {isRTL 
                  ? 'المساحة دي جاهزة عشان تضيف فيها الصور والفيديوهات الخاصة بالمعرض ده في المستقبل.' 
                  : 'This space is ready for you to add images and videos for this exhibition in the future.'}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ExhibitionsSection;
