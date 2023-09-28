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
      "dark-green": "rgba(50, 80, 26, 1)",
      "overlay-green": "rgba(50, 80, 26, 0.3)",
      "gold-green": "rgba(145, 120, 50, 1)",
      "faded-green": "rgba(50, 80, 26, 0.1)",
      "grayish-white": "rgba(241, 242, 244, 1)",
      "h-white": "rgba(241, 242, 244, 0.35)",
      brown: "rgba(81, 64, 53, 1)",
      white: "rgba(255, 255, 255, 1)",
    },
    backgroundImage: {
      hero: "url('assets/hero.jpg')",
      auth: "url('assets/auth.jpg')",
      "overlay-gradient":
        "linear-gradient(0deg, rgba(37, 58, 20, 0.6) 0%, rgba(37, 58, 20, 0.00) 100%)",
      "card-gradient":
        "linear-gradient(0deg, rgba(50, 80, 26, 1) 0%, rgba(50, 80, 26, 0.5) 50%, rgba(50, 80, 26, 0) 100%)",
    },
    extend: {
      screens: {
        sm: "576px",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
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
      maxWidth: {
        562: "562px",
      },
      boxShadow: {
        lg: "rgba(81, 64, 53, 0.2) 0px 2px 4px 0px, rgba(81, 64, 53, 0.8) 0px 2px 16px 0px;",
      },
    },
  },
  plugins: [],
};
