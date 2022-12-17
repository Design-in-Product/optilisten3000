/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        "dosis-regular": "Dosis Regular",
        "dosis-medium": "Dosis Medium",
        "dosis-bold": "Dosis Bold",
        "sfpro-regular": "SFPro Regular",
        "sfpro-medium": "SFPro Medium",
        "sfpro-bold": "SFPro Bold",
      },
      colors: {
        darkBlue: "#134466",
        lightBlue: "#3CA4A4",
        opacityBlue: "rgba(60, 164, 164, 0.4)",
        midNight: "#0B1823",
        teal: "#34A0A4",
      },
    },
  },
  plugins: [],
};
