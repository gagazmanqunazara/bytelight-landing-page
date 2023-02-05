const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      white: "#FFFFFF",
      palatinate: "#293FFF",
      crayola: "#1579FF",
      "blue-bolt": "#00B3FF",
      metallic: "#FFCB14",
      ultramarine: "#2400FF",
      purple: "#BD32FF",
      black: "#000000",
      stormy: "#323334",
      smoke: "#4E4F51",
    },
    fontFamily: {
      faktum: ["var(--font-faktum)", ...fontFamily.sans],
      sans: ["var(--font-general-sans)", ...fontFamily.sans],
    },
    spacing: {
      0: "0",
      1: "0.4rem",
      2: "0.8rem",
      3: "1.2rem",
      4: "1.6rem",
      5: "2rem",
      6: "2.4rem",
      7: "2.8rem",
      8: "3.2rem",
      9: "3.6rem",
      10: "4rem",
      11: "4.4rem",
      12: "4.8rem",
      14: "5.6rem",
      15: "6rem",
    },
    // extend: {
    // },
  },
  plugins: [],
};
