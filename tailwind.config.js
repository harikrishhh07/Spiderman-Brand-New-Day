/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        spider: {
          black: "#040404",
          dark: "#0B0D13",
          red: "#D6001C",
          blue: "#0058FF",
          electric: "#42C9FF",
          gold: "#FFC400",
          gray: "rgba(255, 255, 255, 0.65)",
        }
      },
      fontFamily: {
        marvel: ['"Bebas Neue"', '"Outfit"', '"Inter"', 'sans-serif'],
        display: ['"SF Pro Display"', '"Neue Haas Grotesk"', '"Inter"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
        comic: ['"Bangers"', '"Impact"', 'sans-serif']
      },
      boxShadow: {
        'spider-glow': '0 0 25px rgba(214, 0, 28, 0.45)',
        'electric-glow': '0 0 25px rgba(66, 201, 255, 0.45)',
        'hero-glow': '0 0 50px rgba(0, 88, 255, 0.3)',
      },
      animation: {
        'spider-pulse': 'spiderPulse 2s infinite ease-in-out',
        'thwip-glow': 'thwipGlow 3s ease-in-out infinite alternate',
        'web-float': 'webFloat 4s infinite ease-in-out',
      },
      keyframes: {
        spiderPulse: {
          '0%, 100%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.08)', opacity: '0.8' },
        },
        thwipGlow: {
          '0%': { boxShadow: '0 0 15px #D6001C, 0 0 30px #0058FF' },
          '100%': { boxShadow: '0 0 25px #42C9FF, 0 0 45px #D6001C' },
        },
        webFloat: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
