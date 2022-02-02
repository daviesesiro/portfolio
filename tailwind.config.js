module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["poppins", "roboto", "sans-serif"],
      },
      colors: {
        primary: "#0643B7",
        "accent-variant": "#CCFFB2",
        "dar-bg": "#14171D",
      },
      maxWidth: {
        contain: "1440px",
      },
    },
  },
  plugins: [],
};
