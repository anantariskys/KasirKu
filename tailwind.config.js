/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          md: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        background: {
          light: "#FAFAFF",
          dark: "#30343F",
        },
        foreground: {
          light: "#30343F",
          dark: "#FAFAFF",
        },
        primary: {
          50: "#E8F5FC",
          100: "#D6EDFA",
          200: "#A0D4F3",
          300: "#5DB6EA",
          400: "#1B8ACB",
          500: "#0B3954",
          600: "#0A344D",
          700: "#08283B",
          800: "#051C29",
          900: "#051C29",
          950: "#000000",
        },
        secondary: {
          50: "#DDFAFD",
          100: "#BBF5FB",
          200: "#78EAF7",
          300: "#30E0F3",
          400: "#0CBCCF",
          500: "#087E8B",
          600: "#06646F",
          700: "#054A52",
          800: "#03343A",
          900: "#021A1D",
          950: "#010D0E",
        },
        tertiary: {
          50: "#F7FAFC",
          100: "#F3F8FB",
          200: "#E4EEF6",
          300: "#D9E7F2",
          400: "#CDE0EF",
          500: "#BFD7EA",
          600: "#80AFD5",
          700: "#3F86C0",
          800: "#2A587F",
          900: "#152E41",
          950: "#0A151F",
        },
      },
    },
  },
  plugins: [],
};
