/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: { 
      background: {
       " hero-pattern": "url('/assets/agency-bg.png')"

      },
      screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
      lLap: { max: "1440px" },
      lap: { max: "1024px" },
      tab: { max: "800px" },
      lMob: { max: "500px" },
      mMob: { max: "390px" },
      sMob: { max: "350px" },
    },
    
  },
  },
  plugins: [],
}

