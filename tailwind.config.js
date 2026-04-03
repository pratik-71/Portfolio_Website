/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./componenets/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#ecfdf5',
          500: '#10b981', // Your main Emerald accent
          600: '#059669',
          900: '#064e3b',
        },
        accent: {
          50: '#f8fafc',  // Slate-50
          950: '#020617', // Your Slate black
        },
        slate: {
          950: '#020617',
          50: '#f8fafc',
        }
      },
      borderRadius: {
        '4xl': '2.5rem',
        '5xl': '3.5rem',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        outfit: ['Outfit', 'sans-serif'],
      },
      boxShadow: {
        'emerald-glow': '0 0 20px rgba(16, 185, 129, 0.1)',
        'emerald-glow-strong': '0 0 30px rgba(16, 185, 129, 0.2)',
      },
      screens:{
        'custom_1024px':'1024px',
      }
    },
  },
  plugins: [],
};
