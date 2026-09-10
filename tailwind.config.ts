import type { Config } from 'tailwindcss';

const config: Config = {
  /* app/components/_archive/ 는 의도적으로 뺀다.
     아카이브된 v1 컴포넌트는 라우팅되지 않는데도 content 에 들어가면
     Tailwind 가 거기 쓰인 클래스를 전부 실제 CSS 로 뽑아낸다.
     실측: 구 오렌지 #F57820 이 rgb(245 120 32) 로, 민트 #f4fcf9 가
     그대로 번들에 실렸다(금칙 1 위반, hex 그렙으로는 안 잡힌다).
     복원할 때는 이 배열에 다시 넣기 전에 금칙 색부터 걷어낼 것. */
  content: ['./app/*.{ts,tsx}', './app/components/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: '#333333',
        /* BI 정본(2026.08)의 오렌지는 #FF6900 하나, 틴트는 #FEF3E9 하나뿐이다.
           생성기 디자인 시스템도 hover 를 별도 색이 아니라 filter:brightness(1.08)
           로 처리한다(.op-btn:hover). 그래서 여기 단계값도 새 색을 지어내지 않고
           두 정본 색에만 매핑한다. 구 오렌지 #F57820 계열은 금칙 1 이라 전부 뺐다. */
        orange: {
          DEFAULT: '#FF6900',
          50: '#FEF3E9',
          100: '#FEF3E9',
          400: '#FF6900',
          500: '#FF6900',
          600: '#FF6900'
        },
        green: {
          DEFAULT: '#333333',
          50: '#F2F2F2',
          100: '#E5E5E5',
          400: '#767171',
          500: '#333333',
          600: '#1F1F1F',
          700: '#111111'
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
        button: '0 10px 20px rgba(255, 105, 0, 0.22)' /* #FF6900 정본 */
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
