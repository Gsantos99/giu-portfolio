/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dev: {
          bg: '#0B0F17',
          bgSecondary: '#070A0F',
          card: '#131823',
          cardHover: '#182030',
          border: 'rgba(255, 255, 255, 0.08)',
          borderHover: 'rgba(122, 242, 152, 0.35)',
          mint: '#7AF298',
          mintLight: '#A7F6BC',
          mintDark: '#4ADE80',
          cyan: '#7DDFB4',
          muted: '#9CA3AF',
          dimmed: '#6B7280',
        },
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        sans: ['Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'pulse-subtle': 'pulseSubtle 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float-slow': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.6' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        },
      },
    },
  },
  plugins: [],
};
