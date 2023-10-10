/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      fontFamily: {
        fontOpenSans: ['Open Sans']
      }
    },
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake"],
  },
}

