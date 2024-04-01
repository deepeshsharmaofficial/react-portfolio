/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['poppins', 'sans-serif'],
        IBM: ['IBM Plex Mono', 'sans-serif'],
        cousine: ["Cousine", "monospace"]
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}