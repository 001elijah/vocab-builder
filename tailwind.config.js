/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.js", "./screens/**/*.js", "./App.js"],
  theme: {
    extend: {
      colors: {
        "white": "#FCFCFC",
        "light": "#f8f8f8",
        "greenish": "rgba(133, 170, 159, 0.10)",
        "grey": "rgba(18, 20, 23, 0.50)",
        "light-grey": "rgba(18, 20, 23, 0.10)",
        "black": "#121417",
        "green": "#85AA9F",
      },
    },
  },
  plugins: [],
};

