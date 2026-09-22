'use client';

/* =============================================================================
   onpharm.kr 메인 — 소비자 면(면 A) 하나뿐이다.

   ── 이번 라운드의 구조 변경: 면 B 를 `/partner/` 로 분리 ──────────────────
   예전에는 이 페이지에 면 A·B 를 같이 두고 hidden 으로 갈랐다. 게이트를 걸어도
   면 B 마크업이 이 페이지의 HTML 과 JS 번들에 그대로 실려 소스 보기로 읽혔다.
   지금은 **이 페이지에 면 B 가 한 글자도 없다.** 게이트·면 B·noscript 폴백은
   전부 app/partner/ 로 갔다.

   ── 진입점 ────────────────────────────────────────────────────────────────
   헤더 우측 작은 텍스트 링크 + 페이지 최하단 한 줄, 둘뿐이다. 둘 다 평범한
   <a href="/partner/"> 라 JS 가 꺼져도 눌린다. 탭 2개 병렬 구조는 두지 않는다 —
   "A 냐 B 냐 고르세요" 라는 동급 선택 신호가 소비자의 호기심 클릭을 유발한다.

   ── 구 링크 호환 ──────────────────────────────────────────────────────────
   예전 주소 `/#partner`, `/#b06_apply` 가 어딘가 공유돼 있을 수 있다.
   들어오면 `/partner/` 로 넘긴다(#b06_apply 는 앵커를 유지한 채).

   ★ 면의 콘텐츠는 전부 app/generated/ 에서 온다. 여기서 면 문구를 고치지 마라.
     생성기 copy_a.json -> onpharm_build.py -> export_nextjs.py
     셸(헤더/푸터) 문구만 이 파일에 있다.
   ============================================================================= */

import { useEffect } from 'react';
import { OnPharmFace } from './components/OnPharmFace';
/* 면 A 만 import 한다. 면 B 는 별도 모듈(faceB.ts)이라 이 페이지 청크에 실리지 않는다.
   두 면을 한 모듈(faces.ts)에서 꺼내면 webpack 이 모듈 통째를 공유 청크로 빼서
   고객 페이지 번들에 면 B 가 따라온다 — 그게 분리 이전의 실제 누수였다. */
import { FACE_A_HTML } from './generated/faceA';
import { APPLY_HASH, PARTNER_PATH } from './lib/gate';

/** 예전 한 페이지 구조에서 면 B 를 열던 해시. 지금은 리다이렉트 대상일 뿐이다. */
const LEGACY_PARTNER_HASH = '#partner';

/* 셸 문구 — 화면에 나가는 전량.
   금칙 준수: 면허 명칭 미사용(금칙 2 / 린터 R2·R9), 협회·회사 실명 없음, 금액 없음. */
const TXT = {
  headerLink: '약국 파트너 안내',
  footQuestion: '약국 운영자이신가요?',
  footLink: '입점 문의 →'
} as const;

export default function HomePage() {
  /* 구 링크 호환. replace 라 뒤로가기에 `/#partner` 가 남지 않는다. */
  useEffect(() => {
    const go = () => {
      const hash = (window.location.hash || '').toLowerCase();
      if (hash === LEGACY_PARTNER_HASH) {
        window.location.replace(PARTNER_PATH);
      } else if (hash === APPLY_HASH) {
        window.location.replace(PARTNER_PATH + APPLY_HASH);
      }
    };
    go();
    window.addEventListener('hashchange', go);
    return () => window.removeEventListener('hashchange', go);
  }, []);

  return (
    <>
      <header className="op-shell-bar">
        <div className="op-shell-bar__inner">
          <span className="op-shell-bar__gap" />
          {/* 오렌지를 쓰지 않는다 — 오렌지는 소비자 CTA 전용이다. */}
          <a className="op-shell-link" href={PARTNER_PATH}>
            {TXT.headerLink} <span aria-hidden="true">→</span>
          </a>
        </div>
      </header>

      <main>
        <div className="op-shell-panel" id="op-face-a">
          <OnPharmFace html={FACE_A_HTML} active />
        </div>
      </main>

      {/* 주 진입점. 소비자에게는 자기선택적으로 무시되고, 약국에게는 눈에 띈다.
          생성기 면의 footer 는 embed 추출 대상이 아니라 사이트에는 오지 않는다. 셸이 직접 그린다. */}
      <footer className="op-shell-foot">
        <div className="op-shell-foot__inner">
          <p className="op-shell-foot__line">
            <span className="op-shell-foot__q">{TXT.footQuestion}</span>
            <a className="op-shell-foot__link" href={PARTNER_PATH}>
              {TXT.footLink}
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}
