import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MessageCircle } from 'lucide-react';
import { FaWhatsapp } from 'react-icons/fa';
import { siteData } from '../data/siteData';

const ContactCTA = () => {
  const { t } = useTranslation();
  return (
    <section id="contact" className="py-20 lg:py-24 bg-white relative">
      <div className="container-site">
        <div className="relative max-w-4xl mx-auto bg-gradient-to-br from-target-green-deep to-target-green rounded-[2.5rem] p-10 md:p-16 text-center overflow-hidden shadow-card-hover">
          {/* Decorative dots pattern (inline, no external assets) */}
          <div
            className="absolute inset-0 opacity-[0.06] pointer-events-none"
            style={{
              backgroundImage: 'radial-gradient(#fff 1.2px, transparent 1.2px)',
              backgroundSize: '22px 22px',
            }}
            aria-hidden="true"
          />
          <div className="absolute -top-16 -right-16 w-64 h-64 bg-white/10 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />
          <div className="absolute -bottom-16 -left-16 w-64 h-64 bg-target-green-dark/40 rounded-full blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative z-10">
            <span className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-2 text-sm font-bold text-white mb-6">
              <MessageCircle size={17} />
              {t('contactCta.eyebrow')}
            </span>

            <h2 className="text-3xl md:text-4xl lg:text-[2.6rem] font-black text-white tracking-tightest mb-5 leading-[1.3]">
              {t('contactCta.title')}
            </h2>

            <p className="text-base md:text-lg text-white/85 leading-[1.8] font-medium mb-10 max-w-xl mx-auto">
              {t('contactCta.desc')}
            </p>

            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a
                href={`tel:${siteData.contact.phone.replace(/\s+/g, '')}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-white text-target-green-deep px-9 py-4 rounded-full font-black hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                <Phone size={22} />
                {t('contactCta.callUs')}
              </a>

              <a
                href={`https://wa.me/${siteData.contact.whatsapp.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 bg-[#25D366] text-white px-9 py-4 rounded-full font-black hover:bg-[#20bd5a] transition-all duration-300 shadow-lg hover:shadow-xl text-base"
              >
                <FaWhatsapp size={22} />
                WhatsApp
              </a>

              <a
                href={`mailto:${siteData.contact.email}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-3 border-2 border-white/70 text-white px-9 py-4 rounded-full font-bold hover:bg-white/10 transition-all duration-300 text-base"
              >
                <Mail size={22} />
                {t('contactCta.emailUs')}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactCTA;