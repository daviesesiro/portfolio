module.exports = {
  purge: ["./pages/**/*.tsx", "./components/**/*.tsx"],
  darkMode: "class", // or 'media' or 'class'
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
  variants: {
    extend: {
      translate: ["active", "group-hover"],
      scale: ["active", "group-hover"],
    },
  },
  plugins: [],
};
