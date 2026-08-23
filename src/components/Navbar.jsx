import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteData } from '../data/siteData';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#edf2ef]/95 backdrop-blur-md shadow-nav py-1 lg:py-2' 
          : 'bg-transparent py-2 lg:py-3'
      }`}
    >
      <div className="container-site">
        <div className={`flex items-center justify-between transition-all duration-300`}>
          {/* Logo */}
          <a href="/#home" className="flex-shrink-0 flex items-center" aria-label="Target Group">
            <img
              src="/assets/target-logo-transparent.png"
              alt="Target Group - شركة متخصصة في مواد العزل وكيماويات البناء"
              className="h-10 sm:h-12 lg:h-[3.25rem] w-auto object-contain drop-shadow-sm transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {siteData.navigation.map((item) => (
              <a
                key={item.key}
                href={item.href}
                className="text-[15px] font-semibold text-gray-700 hover:text-target-green-dark transition-colors duration-200"
              >
                {t(`nav.${item.key}`)}
              </a>
            ))}
          </div>

          {/* CTA Button & Lang Switcher */}
          <div className="hidden lg:flex flex-shrink-0 items-center gap-4">
            <button 
              onClick={() => i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar')}
              className="font-bold text-gray-700 hover:text-target-green-dark transition-colors text-sm uppercase"
            >
              {i18n.language === 'ar' ? 'EN' : 'عربي'}
            </button>
            <a
              href="/#contact"
              className="inline-flex items-center bg-target-green text-white px-6 py-2.5 rounded-full font-bold text-sm hover:bg-target-green-dark transition-colors duration-200 shadow-sm hover:shadow-md"
            >
              {t('nav.contactBtn')}
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden flex items-center justify-center w-11 h-11 -me-2 rounded-lg text-gray-700 hover:text-target-green-dark focus:outline-none"
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[32rem] border-t border-gray-100' : 'max-h-0'
          }`}
      >
        <div className="container-site py-4 flex flex-col gap-1">
          <button 
            onClick={() => {
              i18n.changeLanguage(i18n.language === 'ar' ? 'en' : 'ar');
              setIsOpen(false);
            }}
            className="px-3 py-2.5 rounded-lg text-start text-[15px] font-bold text-target-green hover:bg-target-green-light hover:text-target-green-dark transition-colors"
          >
            {i18n.language === 'ar' ? 'English' : 'العربية'}
          </button>
          
          {siteData.navigation.map((item) => (
            <a
              key={item.key}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="px-3 py-2.5 rounded-lg text-[15px] font-semibold text-gray-700 hover:bg-target-green-light hover:text-target-green-dark transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a
            href="/#contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 px-6 py-3 rounded-full bg-target-green text-white text-center font-bold text-sm"
          >
            {t('nav.contactBtn')}
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;