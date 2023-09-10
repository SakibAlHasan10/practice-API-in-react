/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#1160af",
        
"secondary": "#b9f29b",
        
"accent": "#2131c4",
        
"neutral": "#2b243d",
        
"base-100": "#dbe0f0",
        
"info": "#79a1f6",
        
"success": "#19a94e",
        
"warning": "#f09c14",
        
"error": "#f37868",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

