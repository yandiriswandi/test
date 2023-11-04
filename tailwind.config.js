const defaultTheme = require("tailwindcss/defaultTheme");
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      colors: {
        secondary: "#4B4B53",
        thirdy: "#848383",
        balance: "#1AA7EC",
        transparent: "transparent",
        current: "currentColor",
        white: "#ffffff",
        black: "#000",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      fontSize: {
        xs:'0.65rem',
        xxs:'0.80rem'
      },
      backgroundColor: {
        first: "#E7F0F3",
        mobile: "#FAFBFD",
        second: "#F3F4FB",
        green1: "#039F79",
        transparent: "transparent",
        current: "currentColor",
        white1: "#fff",
        black: "#000",
        purple: "#3f3cbb",
        midnight: "#121063",
        metal: "#565584",
        tahiti: "#3ab7bf",
        silver: "#ecebff",
        "bubble-gum": "#ff77e9",
        bermuda: "#78dcca",
      },
      backgroundImage: {
        "header-home":
          "linear-gradient(177.39deg, #00CD9C 2.18%, #03A27B 81.23%);",
        "hero-pattern":
          "linear-gradient(2.9deg, #E7F0F3 25.24%, #039F79 55.23%, #00D19F 99.06%)",
        "hero-pattern-dark":
          "linear-gradient(179.43deg, #363636 46.11%, #070707 120.83%);",
        "qrcode-green": "linear-gradient(180deg, #039F79 0%, #00CD9C 100%);",
      },
      backgroundSize: {
        "50%": "50%",
        "100%": "100%",
        16: "4rem",
      },
    },
  },
  plugins: [],
};
