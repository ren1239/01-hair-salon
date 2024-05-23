/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        "background-primary": "#F2F1EC",
      },
      fontSize: {
        "10xl": "8rem",
        "11xl": "9rem",
        "12xl": "13rem",
        // Add more sizes as needed
      },
    },
  },
  plugins: [],
};
