/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#22d3ee",
      },
      screens: {
        "2xl": "1320px",
      },
      boxShadow: {
        dark: "inset 0 -1px 0 0 rgba(255, 255, 255, 0.2);",
      },
    },
  },
  plugins: [],
};
