/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    fontFamily: {
      sans: ["Spinnaker", "sans-serif"],
      serif: ["Vollkorn", "serif"],
    },
    colors: {
      "dark-green": "#253A14",
      "h-dark-green": "rgba(255, 255, 255, 0.3)",
      "gold-green": "#877936",
      "light-green": "#D3D8D0",
      "grayish-white": "#F1F2F4",
      brown: "#5C4A3F",
      white: "#FFFFFF",
      "h-white": "rgba(255, 255, 255, 0.25)",
    },
    backgroundImage: {
      hero: "url('src/assets/hero-bg.png')",
      gradient:
        "linear-gradient(0deg, rgba(37, 58, 20, 0.6) 0%, rgba(37, 58, 20, 0.00) 100%)",
    },
    extend: {
      screens: {
        sm: "576px",
      },
      zIndex: {
        1: "1",
        2: "2",
      },
      keyframes: {
        visible: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        visible: "visible 0.3s ease-in-out",
      },
    },
  },
  plugins: [],
};
