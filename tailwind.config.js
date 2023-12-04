/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        merkurPrimary: {
          50: "#e5e9f0",
          100: "#f1f3ff",
          200: "#93a5c1",
          300: "#6a83a9",
          400: "#496998",
          500: "#022652",
          600: "#1b4981",
          700: "#114076",
          800: "#083669",
          900: "#022652",
        },
      },
    },
  },
  plugins: [],
};
