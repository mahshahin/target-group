/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors extracted from the actual logo assets
        'target-green': '#008F4A',       // Primary brand green (logo)
        'target-green-dark': '#006B3F',  // Darker green (buttons, hover)
        'target-green-deep': '#0A4A2E',  // Deep green (footer / stats)
        'target-green-light': '#E7F5EE', // Light tint (backgrounds)
        'somafix-red': '#E91B24',        // SOMAFIX red (accent only)
        'somafix-red-deep': '#C01017',   // Darker red (small text on light tint — AA contrast)
        'somafix-red-bright': '#FF8A8E', // Lighter red (text on dark green surfaces — AA contrast)
        'somafix-red-light': '#FDEBEC',  // Light red tint
      },
      fontFamily: {
        sans: ['Cairo', 'system-ui', 'sans-serif'],
      },
      maxWidth: {
        'site': '80rem', // 1280px = max-w-7xl
      },
      boxShadow: {
        card: '0 1px 2px 0 rgb(10 74 46 / 0.04), 0 6px 20px -6px rgb(10 74 46 / 0.08)',
        'card-hover': '0 2px 4px 0 rgb(10 74 46 / 0.05), 0 14px 32px -8px rgb(10 74 46 / 0.16)',
        nav: '0 1px 0 0 rgb(0 0 0 / 0.06), 0 8px 24px -12px rgb(10 74 46 / 0.12)',
      },
      letterSpacing: {
        tightest: '-0.02em',
      },
      keyframes: {
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'marquee': {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        'fade-in-up': 'fade-in-up 0.7s ease-out both',
        'fade-in-up-slow': 'fade-in-up 0.9s ease-out 0.15s both',
        'float': 'float 6s ease-in-out infinite',
        'marquee': 'marquee 25s linear infinite',
      },
    },
  },
  plugins: [],
}