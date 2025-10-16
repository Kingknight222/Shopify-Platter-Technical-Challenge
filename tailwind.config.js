/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.liquid"],
  theme: {
    extend: {},
  },
  plugins: [],
  // Preflight is disabled by not importing it in assets/tailwind.css (Tailwind v4)
};