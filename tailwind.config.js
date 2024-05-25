/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1440px',
      },
      colors: {
        'comon': '#0F1624',
        'primary': "#6978D1" 
        
      },
      fontFamily: {
        'popins': ['Poppins", sans-serif'],
       
      }
    },
  },
  plugins: [],
}