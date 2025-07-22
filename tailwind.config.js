/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/**/*.{js,ts,jsx,tsx}',
      './pages/**/*.{js,ts,jsx,tsx}',
      './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {   
      extend: {
        fontSize: {
        'md': '180px',
        'lg': '190px',
      },
        colors: {
          brand: '#1DA1F2',
        },
        
      },
    },
    plugins: [],
  }
  