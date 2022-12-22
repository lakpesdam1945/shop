/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      screens: {
        mobile: "375px",
        tablet: "758px",
        laptop: "1024px",
        dekstop: "1440px",
        "4K": "2560px",
      },
      maxWidth: {
        mobile: "375px",
        tablet: "758px",
        laptop: "1024px",
        dekstop: "1440px",
        "4K": "2560px",
      },
      colors: {
        dark: {
          primary: "#15202B",
          secondary: "#192734",
          tertiary: "#22303C",
          neutral: "#FFFFFF",
          neutral2: "#8899A6",
        },
      },
    },
  },
  plugins: [require("tw-elements/dist/plugin")],
};
