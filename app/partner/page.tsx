import type { Metadata } from 'next';
import { PartnerClient } from './PartnerClient';

/* /partner/ 메타데이터.
   문구는 layout.tsx 의 DESCRIPTION 에서 파트너 절만 떼어 온 것이다. 새로 짓지 않았다.
   openGraph 는 상위 키 단위로 통째로 덮이므로(얕은 병합) 이미지까지 다시 적는다.
   ※ 호칭: 면허 명칭 미사용(금칙 2 / 린터 R2·R9). "약국" 은 장소 명칭이라 정상. */
const TITLE = '약국 파트너 | OnPharm';
const DESCRIPTION = '약국 파트너는 지역별 순차 오픈으로 모집합니다.';
const URL = 'https://onpharm.kr/partner/';

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/partner/' },
  openGraph: {
    type: 'website',
    locale: 'ko_KR',
    url: URL,
    siteName: '온팜',
    title: TITLE,
    description: DESCRIPTION,
    images: [{ url: 'https://onpharm.kr/og-image.jpg', width: 1200, height: 630,
               alt: '온팜 - 들르면, 건강이 켜집니다' }]
  },
  twitter: {
    card: 'summary_large_image',
    title: TITLE,
    description: DESCRIPTION,
    images: ['https://onpharm.kr/og-image.jpg']
  }
};

export default function PartnerPage() {
  return <PartnerClient />;
}
