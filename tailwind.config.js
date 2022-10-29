/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      display: ["Lora", "serif", "..."],
    },
    extend: {
      colors: {
        // clifford: "#da373d",
        black: "#090909",
      },
      backgroundImage: {
        logoLine: "url('../src/images/background.png')",
      },
    },
  },
  plugins: [],
};
