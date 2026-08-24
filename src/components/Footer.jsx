import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import { siteData } from '../data/siteData';
import { Send, Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import useSectionNav from '../hooks/useSectionNav';

const socialIcons = [
  { key: 'facebook', Icon: FaFacebook },
  { key: 'twitter', Icon: FaTwitter },
  { key: 'instagram', Icon: FaInstagram },
  { key: 'linkedin', Icon: FaLinkedin },
];

const Footer = () => {
  const { t, i18n } = useTranslation();
  const goToSection = useSectionNav();
  const isRTL = i18n.language === 'ar';
  return (
    <footer className="relative bg-target-green-deep text-white/75 pt-16 lg:pt-20 pb-8 border-t-4 border-target-green">
      <div className="container-site">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 mb-12 lg:mb-16">
          {/* Company Info */}
          <div className="space-y-5">
            <div className="bg-white inline-block p-3 rounded-xl">
              <img src={`${import.meta.env.BASE_URL}assets/target-logo-transparent.png`} alt="شعار شركة Target Group" className="h-9 w-auto object-contain" />
            </div>
            <p className="leading-relaxed text-sm">
              {t('footer.desc')}
            </p>
            <div className="flex gap-3">
              {socialIcons.map(({ key, Icon }) => (
                <a
                  key={key}
                  href={siteData.social[key]}
                  aria-label={key.charAt(0).toUpperCase() + key.slice(1)}
                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white/80 hover:bg-target-green hover:text-white transition-colors duration-300"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.quickLinks')}</h4>
            <ul className="space-y-3 text-sm">
              {siteData.navigation.map((link) => (
                <li key={link.key}>
                  <a
                    href={`#${link.key}`}
                    onClick={(e) => {
                      e.preventDefault();
                      goToSection(link.key);
                    }}
                    className={`hover:text-target-green transition-all duration-200 inline-block ${isRTL ? 'hover:pr-1.5' : 'hover:pl-1.5'}`}
                  >
                    {t(`nav.${link.key}`)}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.contactInfo')}</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-target-green/20 text-target-green flex items-center justify-center flex-shrink-0">
                  <Phone size={17} />
                </span>
                <span dir="ltr">{siteData.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-target-green/20 text-target-green flex items-center justify-center flex-shrink-0">
                  <FaWhatsapp size={17} />
                </span>
                <span dir="ltr">{siteData.contact.whatsapp}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-target-green/20 text-target-green flex items-center justify-center flex-shrink-0">
                  <Mail size={17} />
                </span>
                <span>{siteData.contact.email}</span>
              </li>
              <li className="flex items-center gap-3">
                <span className="w-9 h-9 rounded-xl bg-target-green/20 text-target-green flex items-center justify-center flex-shrink-0">
                  <MapPin size={17} />
                </span>
                <span>{isRTL ? siteData.contact.addressAr : siteData.contact.addressEn}</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-bold text-white mb-6">{t('footer.newsletter')}</h4>
            <p className="text-sm mb-5">
              {t('footer.newsletterDesc')}
            </p>
            <form
              className="flex gap-2"
              onSubmit={(e) => e.preventDefault()}
            >
              <input
                type="email"
                placeholder={t('footer.emailPlaceholder')}
                aria-label={t('footer.newsletter')}
                className="bg-white/10 border border-white/15 rounded-xl px-4 py-3 w-full min-w-0 text-white text-sm placeholder:text-white/40 focus:outline-none focus:border-target-green focus:bg-white/15 focus:ring-2 focus:ring-target-green/25 transition-all"
              />
              <button
                type="submit"
                aria-label="Subscribe"
                className="bg-target-green text-white px-4 rounded-xl hover:bg-white hover:text-target-green transition-colors flex-shrink-0"
              >
                <Send size={20} className={isRTL ? "rotate-180" : ""} />
              </button>
            </form>
          </div>
        </div>

        {/* Copyrights */}
        <div className="border-t border-white/10 pt-7 text-center text-sm text-white/60">
          <p>
            <Trans 
              i18nKey="footer.rights" 
              values={{ year: new Date().getFullYear() }}
              components={{
                1: <span className="text-somafix-red font-bold" />,
                2: <span className="text-target-green font-bold" />
              }}
            />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;