/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  mode: "jit",
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        paris: "#085eb1",
        active: "#ef8035"
      },
      fontFamily: {
        "sf-pro": ["SF Pro Display", "sans-serif"],
      },
    },
  },
  plugins: [],
}
