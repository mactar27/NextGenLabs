/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#031B4E',
        secondary: '#14B8D4',
        background: '#FFFFFF',
        altBg: '#F8FAFC',
        textPrimary: '#0F172A',
        textSecondary: '#64748B',
        border: '#E2E8F0',
      },
      borderRadius: {
        DEFAULT: '20px',
      },
      boxShadow: {
        glass: '0 4px 30px rgba(0,0,0,0.1)',
      },
    },
  },
  plugins: [],
};
