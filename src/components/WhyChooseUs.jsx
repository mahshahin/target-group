import React from 'react';
import { useTranslation, Trans } from 'react-i18next';
import SectionHeading from './SectionHeading';
import { siteData } from '../data/siteData';

const WhyChooseUs = () => {
  const { t } = useTranslation();
  return (
    <section className="py-20 lg:py-24 bg-gray-50">
      <div className="container-site">
        <SectionHeading
          eyebrow={t('whyUs.eyebrow')}
          title={
            <Trans 
              i18nKey="whyUs.title"
              components={{
                1: <span className="text-somafix-red" />,
                2: <span className="text-target-green" />
              }}
            />
          }
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {siteData.whyChooseUs.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                className="group bg-white rounded-2xl border border-gray-100 p-7 flex flex-col items-center text-center shadow-card hover:shadow-card-hover transition-all duration-300 hover:-translate-y-1.5"
              >
                <div className="w-14 h-14 rounded-2xl bg-target-green-light text-target-green-dark flex items-center justify-center mb-5 group-hover:bg-target-green group-hover:text-white transition-colors duration-300">
                  <Icon size={26} strokeWidth={1.8} />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {t(`whyUs.features.f${index + 1}Title`)}
                </h3>
                <p className="text-sm text-gray-600 font-medium leading-relaxed">
                  {t(`whyUs.features.f${index + 1}Desc`)}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;