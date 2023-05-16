/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: 'rgba(34, 131, 112, 1)',
        secondary: 'rgba(119, 181, 169, 1)',
        black: 'rgba(0, 0, 0, 1)',
        grayish: 'rgba(62, 62, 62, 1)',
        white: 'rgba(255, 255, 255, 1)',
        red: 'rgba(215, 0, 0, 1)'
      },
      fontWeight: {
        light: '300',
        regular: '400'
      },
      fontSize: {
        big: '20px',
        medium: '18px',
        normal: '16px',
        small: '15px',
        smaller: '14px',
        tiny: '12px'
      },
      width: {
        icon: '48px'
      },
      boxShadow: {
        normal: '0px 4px 4px rgba(0, 0, 0, 0.25);'
      },
      margin: {
        layoutSides: '0 16px',
        extra: '138px',
        bigger: '48px',
        big: '40px',
        normal: '32px',
        medium: '24px',
        small: '16px'
      }
    }
  },
  plugins: []
}
