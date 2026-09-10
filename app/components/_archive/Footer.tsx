import { Logo } from './Logo';

export function Footer() {
  return (
    <footer className="border-t border-black/5 py-14 lg:py-16 text-center text-sm text-ink-sub">
      <div className="container-x">
        <Logo centered className="mb-5" />
        <p>OnPharm (온팜) · 담당: 정우창</p>
        <p>인천 송도 · 법인 설립 준비 중</p>

        <nav className="mt-5 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-ink-sub">
          <a href="#" className="hover:text-green">이용약관</a>
          <span className="text-black/10">|</span>
          <a href="#" className="font-semibold hover:text-green">개인정보처리방침</a>
          <span className="text-black/10">|</span>
          <a href="mailto:hello@onpharm.kr" className="hover:text-green">고객센터</a>
        </nav>

        <p className="mt-8 text-xs opacity-50">
          © {new Date().getFullYear()} OnPharm. All rights reserved.
        </p>

        <p className="mx-auto mt-6 max-w-3xl text-[11px] leading-relaxed opacity-60">
          본 웹사이트의 정보는 「건강기능식품에 관한 법률」 제18조에 따른
          기능성 표시·광고 범위 내에서 제공됩니다. 의약품이 아니며, 질병의
          예방 및 치료를 목적으로 하지 않습니다.
        </p>
      </div>
    </footer>
  );
}
