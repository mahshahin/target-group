import React from 'react';

const SectionHeading = ({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  tone = 'light',
  accent = 'target-green',
}) => {
  const accentClass = {
    'target-green': 'bg-target-green',
    'somafix-red': 'bg-somafix-red',
    white: 'bg-white',
  }[accent] || 'bg-target-green';
  const isCenter = align === 'center';
  const isDark = tone === 'dark';

  return (
    <div
      className={`mb-14 lg:mb-16 ${
        isCenter ? 'text-center mx-auto' : 'text-start'
      } ${isCenter ? 'max-w-2xl' : ''}`}
    >
      {eyebrow && (
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-bold mb-5 ${
            isDark
              ? 'bg-white/10 text-white'
              : 'bg-target-green-light text-target-green-dark'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`text-3xl md:text-4xl lg:text-[2.6rem] font-black leading-[1.3] tracking-tightest ${
          isDark ? 'text-white' : 'text-gray-900'
        }`}
      >
        {title}
      </h2>

      <div
        className={`mt-5 h-1.5 w-20 rounded-full ${accentClass} ${
          isCenter ? 'mx-auto' : ''
        }`}
      />

      {subtitle && (
        <p
          className={`mt-6 text-base md:text-lg leading-relaxed font-medium ${
            isDark ? 'text-white/70' : 'text-gray-600'
          }`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;