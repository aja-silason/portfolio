/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        animation: {
          waves: 'waves 10s linear infinite',
        },
        keyframes: {
          waves: {
            '0%': { backgroundPosition: '0 0' },
            '100%': { backgroundPosition: '200% 0' },
          },
        },
      },
    },
    plugins: [],
  }