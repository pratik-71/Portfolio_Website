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
          50: '#fffcf0',
          500: '#C5A059', // Premium Golden
          600: '#A68341',
          900: '#735721',
        },
        gold: {
          light: '#E4C07B',
          DEFAULT: '#C5A059',
          dark: '#A68341',
        },
        accent: {
          50: '#0A0A0A',  // Rich Black
          950: '#ffffff', // Pure White
        },
        slate: {
          950: '#000000',
          50: '#ffffff',
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
        'gold-glow': '0 0 20px rgba(197, 160, 89, 0.15)',
        'gold-glow-strong': '0 0 30px rgba(197, 160, 89, 0.3)',
      },
      screens:{
        'custom_1024px':'1024px',
      }
    },
  },
  plugins: [],
};
