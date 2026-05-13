import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#1A1A2E',
        orange: {
          DEFAULT: '#F57820',
          50: '#FFF5EC',
          100: '#FFEFE3',
          400: '#F89B5C',
          500: '#F57820',
          600: '#D8620F'
        },
        green: {
          DEFAULT: '#0F6E56',
          50: '#E8F3F1',
          100: '#D2E7E2',
          400: '#3A8E78',
          500: '#0F6E56',
          600: '#0A5743',
          700: '#074333'
        },
        bone: '#F9F8F6',
        surface: '#F2F4F7',
        ink: {
          DEFAULT: '#2D2D2D',
          sub: '#666666'
        }
      },
      fontFamily: {
        sans: [
          'Pretendard Variable',
          'Pretendard',
          '-apple-system',
          'BlinkMacSystemFont',
          'system-ui',
          'sans-serif'
        ]
      },
      maxWidth: {
        container: '1200px'
      },
      borderRadius: {
        '4xl': '32px',
        '5xl': '40px',
        '6xl': '60px'
      },
      boxShadow: {
        soft: '0 20px 40px rgba(0, 0, 0, 0.05)',
        card: '0 30px 60px rgba(0, 0, 0, 0.08)',
        button: '0 10px 20px rgba(15, 110, 86, 0.2)'
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.23, 1, 0.32, 1)'
      },
      keyframes: {
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        'float-y': 'floatY 4s ease-in-out infinite',
        'fade-up': 'fadeUp 0.6s cubic-bezier(0.23, 1, 0.32, 1) both'
      }
    }
  },
  plugins: []
};

export default config;
