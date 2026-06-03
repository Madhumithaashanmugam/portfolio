/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        soft: '0 20px 60px rgba(15, 23, 42, 0.15)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top, rgba(96, 165, 250, 0.18), transparent 45%), radial-gradient(circle at bottom right, rgba(168, 85, 247, 0.16), transparent 35%)',
      },
    },
  },
  plugins: [],
}
