/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#F0F7FF",
          100: "#DBEDFF",
          200: "#BDDDFF",
          300: "#99CAFF",
          400: "#7ABAFF",
          500: "#57A8FF",
          600: "#1486FF",
          700: "#0063CC",
          800: "#00438A",
          900: "#002042",
          950: "#001124"
        },
      }
    }
  },
  plugins: []
}
