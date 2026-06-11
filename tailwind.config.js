/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        bg: {
          primary:   '#07080f',
          secondary: '#0d1117',
          card:      '#131b2e',
          deep:      '#060710',
        },
        accent: {
          primary:   '#3b82f6',
          secondary: '#06b6d4',
          light:     '#60a5fa',
          purple:    '#8b5cf6',
          amber:     '#f59e0b',
        },
        txt: {
          primary:   '#f0f4ff',
          secondary: '#8896b0',
          muted:     '#4f5f7a',
        },
        line:    '#1e2d45',
        success: '#22c55e',
        warning: '#f59e0b',
        danger:  '#ef4444',
        gold:    '#fbbf24',
        silver:  '#94a3b8',
        bronze:  '#c2855a',
      },
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        mono: ['"Fira Code"', 'monospace'],
      },
      backgroundImage: {
        'accent-gradient':  'linear-gradient(135deg, #3b82f6, #06b6d4)',
        'purple-gradient':  'linear-gradient(135deg, #8b5cf6, #3b82f6)',
        'amber-gradient':   'linear-gradient(135deg, #f59e0b, #ef4444)',
        'aurora-gradient':  'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 33%, #06b6d4 66%, #3b82f6 100%)',
        'card-gradient':    'linear-gradient(135deg, rgba(19,27,46,0.8), rgba(13,17,23,0.9))',
        'hero-mesh':        'radial-gradient(ellipse 80% 50% at 20% 40%, rgba(59,130,246,0.12) 0%, transparent 60%), radial-gradient(ellipse 60% 40% at 80% 60%, rgba(139,92,246,0.1) 0%, transparent 55%)',
      },
      animation: {
        'spin-slow':        'spin 8s linear infinite',
        'float':            'float 6s ease-in-out infinite',
        'glow-pulse':       'glowPulse 4s ease-in-out infinite',
        'aurora':           'aurora 12s ease infinite',
        'shimmer':          'shimmer 2.5s linear infinite',
        'draw-line':        'drawLine 1.5s ease forwards',
        'bounce-arrow':     'bounceArrow 1.8s ease-in-out infinite',
        'fade-up':          'fadeUp 0.6s ease forwards',
        'ping-slow':        'ping 2.5s cubic-bezier(0,0,.2,1) infinite',
        'rotate-ring':      'spin 6s linear infinite',
        'slide-in-left':    'slideInLeft 0.5s ease forwards',
        'pulse-soft':       'pulseSoft 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%':      { transform: 'translateY(-18px)' },
        },
        glowPulse: {
          '0%, 100%': { opacity: '0.25' },
          '50%':      { opacity: '0.55' },
        },
        aurora: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%':      { backgroundPosition: '100% 50%' },
        },
        shimmer: {
          '0%':   { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition:  '200% center' },
        },
        drawLine: {
          from: { height: '0%' },
          to:   { height: '100%' },
        },
        bounceArrow: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(10px)' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to:   { opacity: '1', transform: 'translateY(0)' },
        },
        slideInLeft: {
          from: { opacity: '0', transform: 'translateX(-30px)' },
          to:   { opacity: '1', transform: 'translateX(0)' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.7' },
          '50%':      { opacity: '1' },
        },
      },
      boxShadow: {
        'glow-blue':   '0 0 30px rgba(59,130,246,0.4)',
        'glow-purple': '0 0 30px rgba(139,92,246,0.4)',
        'glow-cyan':   '0 0 30px rgba(6,182,212,0.4)',
        'glow-amber':  '0 0 30px rgba(245,158,11,0.4)',
        'card':        '0 4px 32px rgba(0,0,0,0.5)',
        'card-hover':  '0 8px 48px rgba(59,130,246,0.2)',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
