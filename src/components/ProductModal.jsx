import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { X, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';

const ProductModal = ({ product, isOpen, onClose }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  // Sections toggle states
  const [openSections, setOpenSections] = useState({
    features: true,
    usage: false,
    howTo: false,
    tech: false,
    packaging: false,
  });

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen || !product) return null;

  const toggleSection = (section) => {
    setOpenSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  const techInfo = t(`catalog.${product.id}.tech`, { returnObjects: true });
  const packagingInfo = t(`catalog.${product.id}.packaging`, { returnObjects: true });

  const AccordionHeader = ({ title, section, defaultOpen }) => (
    <button
      onClick={() => toggleSection(section)}
      className="w-full flex items-center justify-between py-4 border-b border-gray-100 hover:text-target-green transition-colors focus:outline-none"
    >
      <h3 className="text-lg font-bold text-gray-900">{title}</h3>
      {openSections[section] ? <ChevronUp size={20} className="text-target-green" /> : <ChevronDown size={20} className="text-gray-400" />}
    </button>
  );

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6" dir={isRTL ? 'rtl' : 'ltr'}>
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative bg-white rounded-3xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden flex flex-col md:flex-row transform transition-all">
        {/* Close Button */}
        <button
          onClick={onClose}
          className={`absolute top-4 ${isRTL ? 'left-4' : 'right-4'} z-10 w-10 h-10 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center text-gray-600 hover:bg-target-green hover:text-white transition-all shadow-sm`}
        >
          <X size={20} />
        </button>

        {/* Image Section */}
        <div className="w-full md:w-2/5 bg-gray-50 flex items-center justify-center p-8 md:p-12 relative">
          <div className="absolute inset-0 bg-target-green/5 opacity-50 mix-blend-multiply" />
          <img 
            src={product.image} 
            alt={t(`catalog.${product.id}.name`)} 
            className="w-full h-auto max-h-[40vh] md:max-h-[70vh] object-contain drop-shadow-2xl relative z-10 transition-transform duration-500 hover:scale-105"
          />
        </div>

        {/* Details Section */}
        <div className="w-full md:w-3/5 flex flex-col h-full bg-white max-h-[50vh] md:max-h-[90vh] overflow-y-auto custom-scrollbar">
          <div className="p-8 lg:p-10">
            <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-6 leading-tight">
              {t(`catalog.${product.id}.name`)}
            </h2>

            <div className="space-y-2">
              {/* Features */}
              <div className="mb-2">
                <AccordionHeader title={t('productDetails.featuresLabel')} section="features" />
                {openSections.features && (
                  <p className="py-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    {t(`catalog.${product.id}.features`)}
                  </p>
                )}
              </div>

              {/* Usage Areas */}
              <div className="mb-2">
                <AccordionHeader title={t('productDetails.usageAreasLabel')} section="usage" />
                {openSections.usage && (
                  <p className="py-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    {t(`catalog.${product.id}.usageAreas`)}
                  </p>
                )}
              </div>

              {/* How to Use */}
              <div className="mb-2">
                <AccordionHeader title={t('productDetails.howToUseLabel')} section="howTo" />
                {openSections.howTo && (
                  <p className="py-4 text-gray-600 leading-relaxed text-sm md:text-base">
                    {t(`catalog.${product.id}.howToUse`)}
                  </p>
                )}
              </div>

              {/* Technical Info */}
              {Array.isArray(techInfo) && techInfo.length > 0 && (
                <div className="mb-2">
                  <AccordionHeader title={t('productDetails.techInfoLabel')} section="tech" />
                  {openSections.tech && (
                    <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {techInfo.map((item, idx) => (
                        <div key={idx} className="flex flex-col">
                          <span className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-1">{item.label}</span>
                          <span className="text-sm font-bold text-gray-800">{item.value}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Packaging */}
              {Array.isArray(packagingInfo) && packagingInfo.length > 0 && (
                <div className="mb-2">
                  <AccordionHeader title={t('productDetails.packagingLabel')} section="packaging" />
                  {openSections.packaging && (
                    <div className="py-4 grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-6">
                      {packagingInfo.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-3">
                          <CheckCircle2 size={16} className="text-target-green flex-shrink-0" />
                          <span className="text-sm font-medium text-gray-700">{item.label}: <span className="font-bold text-gray-900">{item.value}</span></span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
