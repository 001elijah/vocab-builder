/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.js", "./screens/**/*.js", "./App.js"],
  theme: {
    extend: {
      colors: {
        "bright-white": "#FFFFFF",
        "white": "#FCFCFC",
        "light": "#f8f8f8",
        "greenish": "rgba(133, 170, 159, 0.10)",
        "green": "#85AA9F",
        "grey": "rgba(18, 20, 23, 0.50)",
        "greyBorder":"#DBDBDB",
        "light-grey": "rgba(18, 20, 23, 0.10)",
        "black": "#121417",
      },
    },
  },
  plugins: [],
};

