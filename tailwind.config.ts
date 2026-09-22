import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/providers/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        accent: ["Great Vibes", "cursive"],
      },
      colors: {
        brand: {
          primary: "#B76E79",
          "primary-light": "#D4A0A7",
          "primary-dark": "#8B4F58",
          secondary: "#2C3E50",
          accent: "#D4AF37",
        },
      },
      boxShadow: {
        soft: "0 4px 6px rgba(0, 0, 0, 0.07)",
        elevated: "0 10px 15px rgba(0, 0, 0, 0.1)",
      },
      borderRadius: {
        xl: "1rem",
        "2xl": "1.5rem",
      },
      keyframes: {
        fadeInUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        slideInRight: {
          from: { opacity: "0", transform: "translateX(20px)" },
          to: { opacity: "1", transform: "translateX(0)" },
        },
      },
      animation: {
        "fade-in-up": "fadeInUp 0.4s ease-out",
        "slide-in-right": "slideInRight 0.3s ease-out",
      },
    },
  },
  plugins: [],
};

export default config;
