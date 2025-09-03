/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { sun: { DEFAULT: "#FF7A00", dark: "#E66E00", light: "#FF9A3D" } }
    },
  },
  plugins: [],
};
