/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "rich-black": "#020015",
        "oxford-blue": "#050112",
        "coral-pink": "#E8998D",
        "uranium-blue": "#B3D5FC",
        "indian-red": "#DB5764",
      },
      keyframes: {
        fanOut: {
          '0%': {
            transform: 'translate(-50%, -50%) scale(0.8) rotate(0deg)',
            opacity: '0',
          },
          '100%': {
            transform: 'translate(0, 0) scale(1) rotate(var(--tw-rotate))',
            opacity: '1',
          },
        },
      },
      animation: {
        fanOut: 'fanOut 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
};
