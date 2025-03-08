/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily:{
        mono : ["IBM Plex Mono"],
        coro :["Cormorant"],
      },
      colors:{
        "custom-yellow" : "#FBFBFB"
      }
    },
  },
  plugins: [],
}
