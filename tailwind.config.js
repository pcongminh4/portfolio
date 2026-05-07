/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Space Grotesk', 'ui-sans-serif', 'system-ui'],
        serif: ['Instrument Serif', 'ui-serif', 'Georgia'],
      },
      colors: {
        ink: '#0b1020',
        paper: '#f7f3ed',
        muted: '#7d7d7d',
        line: 'rgba(11, 16, 32, 0.12)',
        accent: {
          50: '#f5f0ff',
          100: '#eadcff',
          400: '#8b5cf6',
          500: '#7c3aed',
          600: '#6d28d9',
        },
      },
      boxShadow: {
        glow: '0 20px 80px rgba(124, 58, 237, 0.18)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top left, rgba(124,58,237,0.2), transparent 34%), radial-gradient(circle at top right, rgba(14,165,233,0.15), transparent 28%), linear-gradient(180deg, #f8f4ef 0%, #efe7db 100%)',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
      animation: {
        float: 'float 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};