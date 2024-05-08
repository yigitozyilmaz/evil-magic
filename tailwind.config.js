/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'opacity': 'opacity 20s ease 1',
      },
      screens: {
        'xs': '320px',
        'mobile': '375px',
        'sm': '640px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
        '2xl': '1440px',
        '3xl': '1900px',
        '4xl': '2560px',
      },
      backgroundImage: {
        'inside': "url('/Insidegrey.png')",
      },
      keyframes: {
        'opacity': {
          '0%': { opacity: '.6' },
          '15%': { opacity: '.6' },
          '24%': { opacity: '.0' },
          '100%': { opacity: '0' },
        },
      }
    },
  },
  plugins: [],
};
