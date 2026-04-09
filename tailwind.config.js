/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "teknolojik-bej": "#FAF7F2",
        "pizza-red": "#CE2829",
        "pizza-yellow": "#FDC913",
      },
    },
  },
  plugins: [],
};
