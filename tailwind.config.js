/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "Primary-Blue": "hsl(231, 69%, 60%)",
        "Primary-Red": "hsl(0, 94%, 66%)",
        "Nuetral-Blue" : "hsl(229, 8%, 60%)",
        "Nuetral-D-Blue": "hsl(229, 31%, 21%)",
        "Nuetral-D-Blue-transparent":"rgb(36,43,70,.8)"
      }
    },
  },
  plugins: [],
}

