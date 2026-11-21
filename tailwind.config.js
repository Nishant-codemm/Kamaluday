/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fintech: {
          primary: '#0B3C91',
          'primary-dark': '#062359',
          'primary-light': '#1E4DB7',
          secondary: '#10B981',
          'secondary-dark': '#059669',
          'secondary-light': '#34D399',
          accent: '#3B82F6',
          'accent-light': '#60A5FA',
          navy: '#091E42',
          slate: '#334155',
          muted: '#64748B',
          surface: '#F8FAFC',
          card: '#FFFFFF',
          border: '#E2E8F0',
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(11, 60, 145, 0.08)',
        'glass-hover': '0 12px 40px 0 rgba(11, 60, 145, 0.16)',
        'glow-primary': '0 0 50px -10px rgba(11, 60, 145, 0.25)',
        'glow-secondary': '0 0 50px -10px rgba(16, 185, 129, 0.25)',
        'glow-accent': '0 0 50px -10px rgba(59, 130, 246, 0.25)',
        'card-soft': '0 4px 20px -2px rgba(15, 23, 42, 0.05), 0 2px 6px -1px rgba(15, 23, 42, 0.03)',
        'card-hover': '0 20px 40px -8px rgba(11, 60, 145, 0.12), 0 6px 16px -2px rgba(11, 60, 145, 0.08)',
      },
      animation: {
        'float-slow': 'float 7s ease-in-out infinite',
        'float-medium': 'float 5s ease-in-out infinite alternate',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-12px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        }
      }
    },
  },
  plugins: [],
}
