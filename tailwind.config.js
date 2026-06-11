/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary: '#09090b',
          secondary: '#0f172a',
          card: '#1e293b',
        },
        accent: {
          primary: '#3b82f6',
          secondary: '#06b6d4',
          light: '#60a5fa',
        },
        txt: {
          primary: '#f8fafc',
          secondary: '#94a3b8',
        },
        line: '#334155',
        success: '#22c55e',
        warning: '#f59e0b',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(135deg, #3b82f6, #06b6d4)',
      },
      animation: {
        'spin-slow': 'spin 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'glow-pulse': 'glowPulse 4s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: 0.3 },
          '50%': { opacity: 0.6 },
        },
      },
    },
  },
  plugins: [],
}
