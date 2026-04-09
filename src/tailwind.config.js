module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        "pizza-red": "#CE2829",
        "pizza-yellow": "#FDC913",
        "pizza-dark": "#292929",
        "pizza-beige": "#FAF7F2",
        "pizza-gray": "#5F5F5F",
      },
      fontFamily: {
        barlow: ["Barlow", "sans-serif"],
        quattrocento: ["Quattrocento", "serif"],
        satisfy: ["Satisfy", "cursive"],
      },
    },
  },
  plugins: [],
};
