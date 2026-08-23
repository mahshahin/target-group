import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { siteData } from '../data/siteData';
import { productsData } from '../data/productsData';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';

const CategoryDetails = () => {
  const { slug } = useParams();
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';
  
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Find category based on slug
  const category = siteData.productCategories.find(c => c.slug === slug);
  
  // Filter products for this category
  const categoryProducts = productsData.filter(p => p.categorySlug === slug);

  // Scroll to top when page loads
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!category) {
    return (
      <div className="container-site py-32 text-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('category.notFound')}</h2>
        <Link to="/" className="inline-flex items-center gap-2 text-target-green font-bold hover:underline">
          {isRTL ? <ArrowRight size={18} /> : <ArrowLeft size={18} />}
          {t('category.backToHome')}
        </Link>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen pb-20">
      {/* Category Header */}
      <div className="bg-target-green-deep text-white py-16 lg:py-20 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-80 h-80 bg-target-green/15 rounded-full blur-[120px] pointer-events-none" aria-hidden="true" />
        <div className="container-site relative z-10">
          <Link to="/" className="inline-flex items-center gap-2 text-white/70 hover:text-white transition-colors mb-8 text-sm font-semibold">
            {isRTL ? <ArrowRight size={16} /> : <ArrowLeft size={16} />}
            {t('category.backToHome')}
          </Link>
          <h1 className="text-4xl lg:text-5xl font-black mb-4">{t(`products.cats.c${category.id}Title`)}</h1>
          <p className="text-lg text-white/80 max-w-2xl">{t(`products.cats.c${category.id}Desc`)}</p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="container-site mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">{t('category.products')}</h2>
        
        {categoryProducts.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {categoryProducts.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onClick={setSelectedProduct} 
              />
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-6">
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-card flex flex-col items-center justify-center text-center min-h-[300px]">
               <p className="text-gray-500 font-medium">
                 {t('category.noProductsYet')}
               </p>
            </div>
          </div>
        )}
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        isOpen={!!selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />
    </div>
  );
};

export default CategoryDetails;
