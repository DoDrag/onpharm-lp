import type { Metadata } from 'next';
import './globals.css';

/* 소개 문구. 면 A/B 의 실제 카피에서 뽑아 이어 붙인 것이다.
   새 문구를 지어내지 않는다. 카피가 바뀌면 여기도 같이 손본다. */
const DESCRIPTION =
  '영양제 고민 한 줄만 남겨 주세요. 동네 조합 약국의 전담 한약사가 직접 읽고 답해드립니다. 약국 파트너는 지역별 순차 오픈으로 모집합니다.';

const TITLE = 'OnPharm | 한약사 약국, 새로운 표준';

/* 파비콘 — assets/brand/onpharm_symbol.svg 의 패스를 그대로 쓴 캡슐 심볼.
   153x50 심볼을 153x153 정사각 안에 세로 중앙(translate y 51.5)으로 앉혔다.
   색은 BI 정본 오렌지 #FF6900 하나뿐. 구 오렌지와 초록(금칙 1)은 제거됐다.
   ※ 금칙 색 hex 를 이 파일에 다시 적지 마라 — 주석이어도 배포 전 grep 게이트에 걸린다. */
const FAVICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 153 153'%3E%3Crect width='153' height='153' rx='34' fill='%23FFFFFF'/%3E%3Cg fill='%23FF6900' transform='translate(0 51.5)'%3E%3Cpath d='M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z'/%3E%3Cpath d='M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z'/%3E%3C/g%3E%3C/svg%3E";

export const metadata: Metadata = {
  metadataBase: new URL('https://onpharm.kr/'),
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: 'https://onpharm.kr/',
    siteName: '온팜',
    title: TITLE,
    description: DESCRIPTION,
    // export_nextjs.py 가 public/onpharm/ 으로 복사하는 면 A 히어로 소재
    images: [{ url: '/onpharm/a01_hero.png', width: 1536, height: 864 }]
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['/onpharm/a01_hero.png']
  }
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <head>
        {/* Pretendard — 생성기 CSS 의 --op-font-sans 가 이 폰트를 전제로 한다 */}
        <link rel="preconnect" href="https://cdn.jsdelivr.net" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin=""
        />
        <link rel="icon" href={FAVICON} />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body>{children}</body>
    </html>
  );
}
