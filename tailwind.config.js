/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme")
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
      backgroundImage: {
        "hero-pattern": "url('https://img.freepik.com/free-vector/abstract-background-with-squares_23-2148995948.jpg?w=1380&t=st=1680233409~exp=1680234009~hmac=2f02b0a429a1e6c6525012b81f11311908878b53c1bd068ec1574b01417a4637')",
        divider: "url('../assets/divider.jpg')",
      },
      borderRadius: {
        hero: "0px 0px 100% 100% / 0px 0px 20% 20%",
      },
      animation: {
        float: "float 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%": {
            transform: "translateY(0)",
          },
          "50%": {
            transform: "translateY(-10px)",
          },
          "100%": {
            transform: "translateY(0)",
          },
        },
      },
    },
  },
  plugins: [require("flowbite/plugin")],
}
