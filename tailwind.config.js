/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/*.{html,js,css}'],
  plugins: [require("daisyui")],
  theme:{
    extend: {
      boxShadow: {
        'perso': '0 0 6px 1px 5px'
      }
    }
  },
  daisyui: {
    themes: [
      {
        "red_theme": {
          "primary": "#b81a1a",
          "secondary": "#cc564b",
          "accent": "#711AB8",
          "neutral": "#100f11",
          "base-100": "#1f1e21",

          "fontFamily": 'Segoe UI'
        }
      }
    ]
  }
}