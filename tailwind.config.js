/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['*.{html,css}'],
  plugins: [require("daisyui")],
  theme:{
    extend: {
      boxShadow: {
        'perso': '0 0 6px 1px 5px'
      },
      gridTemplateColumns: {
        'autofill-48': 'repeat(auto-fill, 12rem)',
        'autofill-72': 'repeat(auto-fill, 18rem)'
      },
      fontSize: {
        '2.8xl': '1.58rem'
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