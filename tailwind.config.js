/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./components/**/*.js", "./screens/**/*.js", "./App.js"],
  theme: {
    fontSize: {
      xxs: '10px',
    },
    extend: {
      colors: {
        "bright-white": "#FFFFFF",
        white: "#FCFCFC",
        light: "#f8f8f8",
        greenish: "rgba(133, 170, 159, 0.10)",
        green: "#85AA9F",
        greenishGrey: "#ECF0EF",
        grey: "rgba(18, 20, 23, 0.50)",
        greyBorder: "#DBDBDB",
        greyRadioBorder: "rgba(18, 20, 23, 0.20)",
        "light-grey": "rgba(18, 20, 23, 0.10)",
        black: "#121417",
      },
    },
  },
  plugins: [],
};

