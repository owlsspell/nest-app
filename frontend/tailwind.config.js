/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      {
        custom: {
          "primary": "#2B88D9",
          "primary-content": "#fcfeff",
          "secondary": "#ffffff",
          "secondary-content": "#ffffff",
          "base-content": "#767676",
          "neutral-content": "#767676",
        },
        // chocolate: {
        //   "primary": "#47302f",
        //   "primary-content": "#EFE3C8",
        //   "secondary": "#EFE3C8",
        //   "secondary-content": "#4A2B29",
        //   "base-content": "#EFE3C8",
        //   "base-100": "#27181D",
        //   "base-200": "#1E1E1E",
        // },
      },
      // "dark",
      // "cupcake",
    ],
  },
}

