import type { Metadata } from 'next';
import { PartnerClient } from './PartnerClient';

/* /partner/ 메타데이터.
   문구는 면 B 히어로 리드(b01_hero.lead)와 흐름도(b03)에 이미 있는 사실만 줄여 적었다(2026-10-23 문구 검수 S10).
   openGraph 는 상위 키 단위로 통째로 덮이므로(얕은 병합) 이미지까지 다시 적는다.
   ※ 호칭: 면허 명칭 미사용(금칙 2 / 린터 R2·R9). "약국" 은 장소 명칭이라 정상. */
const TITLE = '약국 파트너 모집 | 온팜';
const DESCRIPTION =
  '온라인 상담에서 만난 고객을 위치에 맞는 파트너 약국으로 배정합니다. 약국은 답변과 전달만 맡으면 됩니다. 지역별로 순차 모집합니다.';
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
