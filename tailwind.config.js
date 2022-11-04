/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./src/**/**/*.{js,jsx,ts,tsx}",
    "./src/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "base-color-light": "#78d8f5",
        "base-color": "#35c3ef",
        "base-dark-color": "hsl(202, 97%, 38%);",
        "secondary-color": "#a4edaf",
        "secondary-dark-color": "#71ee83",
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["light"],
  },
};
