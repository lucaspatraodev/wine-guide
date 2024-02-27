/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        regular: ["regular"],
        semibold: ["Semibold"],
        bold: ["Bold"],
        light: ["Light"],
      },
    },
  },
  plugins: [],
};
