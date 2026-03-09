/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#0B1120",     // deep navy
        secondary: "#111827",   // charcoal
        accent: "#06B6D4",      // cyan glow
        success: "#22C55E",     // profit green
        innovation: "#8B5CF6",  // subtle purple
      },
      animation: {
        'logo-enter': 'logoEnter 0.9s ease-out forwards',
      },
      keyframes: {
        logoEnter: {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
    },
  },
  plugins: [],
};
