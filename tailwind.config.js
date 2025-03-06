/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        custom: 'Montserrat, sans-serif',
      },
      screens: {
        'sm': '320px', // Custom breakpoint for extra small screens
        'md': '768px', // Default sm breakpoint
        'lg': '1280px', // Default md breakpoint
        
      },
    },
  },
  plugins: [],
}

