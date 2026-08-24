import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { Target, ShieldCheck, BadgeCheck, Boxes } from 'lucide-react';

const featureIcons = [Target, ShieldCheck, BadgeCheck, Boxes];

const AboutSection = () => {
  const { t } = useTranslation();
  return (
    <section id="about" className="py-20 lg:py-24 bg-target-green-deep text-white">
      <div className="container-site">
        <SectionHeading
          eyebrow={t('about.eyebrow')}
          tone="dark"
          title={
            <Trans 
              i18nKey="about.title"
              components={{
                1: <span className="text-somafix-red" />,
                2: <span className="text-target-green-light" />
              }}
            />
          }
        />

        <div className="flex flex-col lg:flex-row lg:items-center gap-12 lg:gap-16">
          {/* Text Content */}
          <div className="lg:w-1/2 text-start">
            <h3 className="text-2xl md:text-3xl font-black text-white tracking-tightest mb-5">
              {t('about.tagline')}
            </h3>
            <p className="text-base lg:text-lg text-white/80 leading-[1.8] font-medium mb-9">
              <Trans 
                i18nKey="about.desc"
                components={{
                  1: <span className="text-somafix-red font-bold" />,
                  2: <span className="text-target-green-light font-bold" />
                }}
              />
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {['f1', 'f2', 'f3', 'f4'].map((key, index) => {
                const Icon = featureIcons[index % featureIcons.length];
                return (
                  <div
                    key={key}
                    className="flex items-center gap-3.5 bg-white/10 px-5 py-4 rounded-2xl border border-white/10 hover:bg-white/20 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-white/20 text-white flex items-center justify-center flex-shrink-0">
                      <Icon size={22} strokeWidth={1.8} />
                    </div>
                    <span className="font-bold text-white">{t(`about.features.${key}`)}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Abstract Visual — Left */}
          <div className="lg:w-1/2 w-full flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md aspect-square bg-white/5 rounded-3xl sm:rounded-[2.5rem] flex flex-col items-center justify-center border border-white/10 overflow-hidden group">
              {/* Decorative elements */}
              <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-br from-white/10 to-transparent" aria-hidden="true" />
              <div className="absolute -top-12 -right-12 w-44 h-44 bg-white/10 rounded-full blur-3xl group-hover:bg-white/20 transition-all duration-700" aria-hidden="true" />
              <div className="absolute -bottom-12 -left-12 w-44 h-44 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-all duration-700" aria-hidden="true" />

              {/* Content */}
              <div className="relative z-10 text-center px-8">
                <div className="text-[7rem] md:text-[8.5rem] font-black text-transparent bg-clip-text bg-gradient-to-br from-white to-white/60 leading-none mb-2 drop-shadow-sm">
                  {t('about.statNum')}
                </div>
                <div className="text-2xl md:text-3xl font-black text-white mb-2 tracking-tightest">
                  {t('about.statText1')}
                </div>
                <div className="text-white/70 font-semibold">
                  {t('about.statText2')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;