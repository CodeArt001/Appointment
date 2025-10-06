/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        glow: {
          "0%, 100%": {
            boxShadow: "0 0 15px 3px rgba(139, 92, 246, 0.5)", // violet-500
          },
          "50%": {
            boxShadow: "0 0 25px 8px rgba(139, 92, 246, 0.8)",
          },
        },
      },
      animation: {
        glow: "glow 3s ease-in-out infinite",
      },

      fontFamily: {
        neue: ["Neue-Regrade", "sans-serif"], // 👈 custom font
      },
    },
  },
  plugins: [],
};
