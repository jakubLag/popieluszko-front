/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      'black': '#212529',
      'white': '#fff5f5',
      'red': '#ff4340'
    }
  },
  plugins: [],
}