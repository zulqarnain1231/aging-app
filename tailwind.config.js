/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Catamaran", "sans-serif"],
        secondary: ["Inter", "sans-serif"],
      },
      colors: {
        brand: {
          main: "#FF1818",
        },
        white: {
          main: "#FFFFFF",
        },
        black: {
          main: "#000000",
          olive: "#3B3C36",
        },
      },
      boxShadow: {
        nav: "rgba(0, 0, 0, 0.15) 0px 0px 50px 0px",
        secondary:"rgba(149, 157, 165, 0.2) 0px 8px 24px"  
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
