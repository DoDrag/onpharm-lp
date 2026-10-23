import Link from 'next/link';
import { BrandLogo } from './components/BrandLogo';

/* =============================================================================
   404 페이지 (2026-10-23, 공개 전 점검). 정적 export 가 out/404.html 로 굽고
   GitHub Pages 가 없는 주소에 이 파일을 보여 준다.
   색은 BI 정본만: 흰 바탕, 차콜 글자, 버튼만 오렌지. 셸 상단 바와 같은 로고(흰 단색 면 위).
   문구에 면허 명칭·가격·효능 없음(금칙).
   ============================================================================= */
export default function NotFound() {
  return (
    <main className="op-404">
      <a className="op-shell-logo" href="/" aria-label="온팜약국 홈">
        <BrandLogo />
      </a>
      <h1 className="op-404__title">페이지를 찾을 수 없어요</h1>
      <p className="op-404__text">주소가 바뀌었거나 없는 페이지예요. 첫 화면에서 다시 시작해 주세요.</p>
      <Link className="op-404__btn" href="/">
        온팜 첫 화면으로
      </Link>
    </main>
  );
}
