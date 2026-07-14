/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary-teal': '#1f4e5b',
        'primary-teal-hover': '#163842',
        'primary-gold': '#da9100',
        'primary-gold-hover': '#be7e00',
        'bg-light': '#ffffff',
        'bg-secondary': '#f5f6f8',
        'text-dark': '#2c3e50',
        'text-muted': '#7f8c8d',
        'border-color': '#e0e0e0',
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
