/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#F6ECA9",
        "wd-white": "#11235A",
        "wd-brand": "#898989",
        "wd-grey": "#596FB7",
        "wd-darkgrey": "#C6CF9B",
        "wd-black": "#F6ECA9",
      },
      backgroundImage: {
        "hero-pattern":
          "linear-gradient(to left, rgba(0,0,0, 0), rgba(0,0,0,1)), url('../assets/hero/hero.jpg')",
      },
      fontFamily:{
        sans:["poppins","Arial","sans-serif"],
      },
    },
  },
  plugins: [],
};
// 