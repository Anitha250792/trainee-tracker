/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bgLight: "#ffe6f0",   // light pink background
        primary: "#6366f1",   // indigo
        secondary: "#475569", // slate
      },
    },
  },
  plugins: [],
}
