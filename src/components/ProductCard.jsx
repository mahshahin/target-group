import React from 'react';
import { useTranslation } from 'react-i18next';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const ProductCard = ({ product, onClick }) => {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <div 
      className="group bg-white rounded-2xl p-6 shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5 cursor-pointer flex flex-col h-full border border-gray-100"
      onClick={() => onClick(product)}
    >
      <div className="w-full h-48 md:h-56 bg-gray-50 rounded-xl mb-6 flex items-center justify-center p-4 relative overflow-hidden group-hover:bg-target-green/5 transition-colors">
        <img 
          src={product.image} 
          alt={t(`catalog.${product.id}.name`)} 
          className="w-full h-full object-contain drop-shadow-md group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      
      <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight line-clamp-2">
        {t(`catalog.${product.id}.name`)}
      </h3>
      
      <p className="text-sm text-gray-500 mb-6 line-clamp-3 leading-relaxed flex-1">
        {t(`catalog.${product.id}.features`)}
      </p>

      <div className="mt-auto flex items-center justify-between pt-4 border-t border-gray-100">
        <span className="text-target-green font-bold text-sm">
          {i18n.language === 'ar' ? 'عرض التفاصيل' : 'View Details'}
        </span>
        <div className="w-8 h-8 rounded-full bg-target-green-light text-target-green-dark flex items-center justify-center group-hover:bg-target-green group-hover:text-white transition-colors">
          {isRTL ? <ArrowLeft size={16} /> : <ArrowRight size={16} />}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
