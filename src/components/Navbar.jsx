import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { siteData } from '../data/siteData';
import useSectionNav from '../hooks/useSectionNav';

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const goToSection = useSectionNav();
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleSectionClick = (e, id) => {
    e.preventDefault();
    setIsOpen(false);
    goToSection(id);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  return (
    <nav
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${isScrolled || isOpen
          ? 'bg-[#edf2ef] shadow-nav py-2 lg:py-3'
          : 'bg-transparent pt-5 pb-3 lg:pt-8 lg:pb-4'
        }`}
    >
      <div className="container-site">
        <div className={`flex items-center justify-between transition-all duration-300`}>
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleSectionClick(e, 'home')}
            className="flex-shrink-0 flex items-center"
            aria-label="Target Group"
          >
            <img
              src={`${import.meta.env.BASE_URL}assets/target-logo-transparent.png`}
              alt="Target Group - شركة متخصصة في مواد العزل وكيماويات البناء"
              className="h-10 sm:h-12 lg:h-[3.25rem] w-auto object-contain drop-shadow-sm transition-all duration-300"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-8">
            {siteData.navigation.map((item) => (
              <a
                key={item.key}
                href={`#${item.key}`}
                onClick={(e) => handleSectionClick(e, item.key)}
                className="relative text-[15px] font-semibold text-gray-700 hover:text-target-green-dark transition-colors duration-200 after:content-[''] after:absolute after:-bottom-1.5 after:start-0 after:h-0.5 after:w-0 after:rounded-full after:bg-target-green after:transition-all after:duration-300 hover:after:w-full"
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
              href="#contact"
              onClick={(e) => handleSectionClick(e, 'contact')}
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
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-[#edf2ef] ${isOpen ? 'max-h-[32rem] border-t border-gray-200 shadow-xl' : 'max-h-0'
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
              href={`#${item.key}`}
              onClick={(e) => handleSectionClick(e, item.key)}
              className="px-3 py-2.5 rounded-lg text-[15px] font-semibold text-gray-700 hover:bg-target-green-light hover:text-target-green-dark transition-colors"
            >
              {t(`nav.${item.key}`)}
            </a>
          ))}
          <a
            href="#contact"
            onClick={(e) => handleSectionClick(e, 'contact')}
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