/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["bg-hero1", "bg-hero2", "bg-hero3"],
  theme: {
    extend: {
      colors: {
        primary: "#000F2D",
        secondary: "#004AE2",
      },
      backgroundImage: {
        hero1: "url('../public/hero1.jpg')",
        hero2: "url('../public/hero2.jpg')",
        hero3: "url('../public/hero3.jpg')",
      },
    },
  },
  plugins: [],
};
