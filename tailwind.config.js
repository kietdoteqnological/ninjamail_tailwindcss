const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        btnBgColor: "#4BA87D",
        tahiti: "#3ab7bf",
        borderInput: "#9F9F9F",
      },
      fontFamily: {
        Montserrat: ["Playfair Display", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "reach-pattern": "url('../assets/desktop/reachC.png')",
        "slanted-green": "url('../assets/desktop/SlantedGreenBG.png')",
      },
    },
  },
  screen: {
    md: "425px",
  },
  plugins: [],
};
