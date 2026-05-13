import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-14 lg:py-16 text-center text-sm text-ink-sub">
      <div className="container-x">
        <Logo centered className="mb-5" />
        <p>(주)온팜네트웍스 | 대표이사: 정우창 | 사업자등록번호: 000-00-00000</p>
        <p>서울특별시 강남구 테헤란로 123 온팜타워 15층</p>

        <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-ink-sub">
          <a href="#" className="hover:text-green">이용약관</a>
          <span className="text-black/10">|</span>
          <a href="#" className="font-semibold hover:text-green">개인정보처리방침</a>
          <span className="text-black/10">|</span>
          <a href="mailto:hello@onpharm.kr" className="hover:text-green">고객센터</a>
        </nav>

        <p className="mt-8 text-xs opacity-50">
          © {new Date().getFullYear()} OnPharm Networks. All rights reserved.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-[11px] leading-relaxed opacity-60">
          본 웹사이트의 정보는 「건강기능식품에 관한 법률」 제18조에 따른
          기능성 표시·광고 범위 내에서 제공됩니다. 의약품이 아니며, 질병의
          예방 및 치료를 목적으로 하지 않습니다. 본 페이지의 약국 후기는
          서비스 이해를 돕기 위한 가상 시나리오이며, 실제 약국·약사의
          진술이 아닙니다.
        </p>
      </div>
    </footer>
  );
}
