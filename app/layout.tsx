import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'OnPharm | 한약사 약국, 새로운 표준',
  description:
    '복잡한 유통 구조와 마케팅 고민은 온팜에게 맡기세요. 한약사 약국 전용 큐레이션·직거래 공급·디지털 고객 확보를 한 자리에서.',
  metadataBase: new URL('https://dodrag.github.io/onpharm-lp/'),
  openGraph: {
    title: 'OnPharm | 한약사 약국, 새로운 표준',
    description:
      '한약사 약국 전용 큐레이션·직거래 공급·디지털 고객 확보 플랫폼. 약사님은 환자의 건강에만 집중하세요.',
    type: 'website',
    locale: 'ko_KR'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'OnPharm | 한약사 약국, 새로운 표준'
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
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
          crossOrigin=""
        />
        <link
          rel="icon"
          href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Crect width='100' height='100' rx='22' fill='%231A1A2E'/%3E%3Cpath d='M30 30h14a14 14 0 0 1 0 28H38v12h-8V30zm8 8v12h6a6 6 0 0 0 0-12h-6z' fill='%23F57820'/%3E%3Ccircle cx='70' cy='35' r='6' fill='%230F6E56'/%3E%3C/svg%3E"
        />
        <meta name="theme-color" content="#FFFFFF" />
      </head>
      <body>{children}</body>
    </html>
  );
}
