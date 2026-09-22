'use client';

/* =============================================================================
   /partner/ — 약국 파트너 면(면 B). 게이트를 통과해야 열린다.

   ── 왜 별도 라우트인가 ────────────────────────────────────────────────────
   예전에는 `/` 한 페이지에 면 A·B 를 같이 두고 hidden 으로 갈랐다.
   그러면 게이트를 걸어도 **면 B 마크업이 `/` 의 HTML 과 JS 번들에 그대로 실린다.**
   소스 보기·번들 열기로 읽힌다. 라우트를 나누면 `/` 에는 면 B 가 한 글자도 안 간다.
   (이 페이지의 번들에는 당연히 있다. 목적은 "고객 면에서 새지 않게" 다.)

   ── 동작 ──────────────────────────────────────────────────────────────────
   - 마운트 → sessionStorage 에 통과 플래그가 있으면 면 B 를 바로 연다.
     없으면 게이트 모달을 띄운다. 뒤에는 헤더 + 안내 한 줄 + 푸터만 있다.
   - 통과 → 플래그 저장, 면 B 마운트, 신청 폼에 번호 prefill,
     `#b06_apply` 로 들어왔으면 그 앵커로, 아니면 최상단.
   - 닫기(ESC/배경/✕) → `/` 로 돌려보낸다. 이 페이지의 유일한 콘텐츠가 게이트 뒤에
     있으니, 거절은 곧 떠나는 것이다. replace 라 뒤로가기가 여기로 되돌아오지 않는다.
   - 출구("약국이 아니신가요?") → `/#signup` 소비자 사전 등록으로.

   ── 하이드레이션 ──────────────────────────────────────────────────────────
   정적 export 다. 서버 렌더와 첫 클라이언트 렌더는 반드시 같아야 한다.
   ready / gateOpen 은 false 로 시작하고 sessionStorage 는 **effect 에서만** 읽는다.

   ── 무JS ──────────────────────────────────────────────────────────────────
   게이트가 뜰 수 없으므로 <noscript> 안에 면 B 를 실물로 렌더한다.
   <main> 의 안내 한 줄은 JS 유무와 무관하게 서버 HTML 에 있으므로,
   noscript 쪽은 면 B 만 넣어 문장이 두 번 나오지 않게 한다.

   ★ 면의 콘텐츠는 전부 app/generated/ 에서 온다. 여기서 면 문구를 고치지 마라.
   ============================================================================= */

import { useCallback, useEffect, useRef, useState } from 'react';
import { OnPharmFace } from '../components/OnPharmFace';
import { PartnerGate } from '../components/PartnerGate';
/* 면 B 만 import 한다(faceB.ts). 면 A 와 모듈을 분리해야 각 상수가 자기 페이지 청크에만 실린다. */
import { FACE_B_HTML } from '../generated/faceB';
import { APPLY_HASH, SIGNUP_HASH, isStaticCapture, readGatePass, writeGatePass } from '../lib/gate';

/* 셸 문구 — 화면에 나가는 전량.
   금칙 준수: 면허 명칭 미사용(금칙 2 / 린터 R2·R9), 협회·회사 실명 없음, 금액 없음. */
const TXT = {
  headerBack: '상담받기',
  headerLabelB: '약국 파트너',
  footBack: '← 상담받기로 돌아가기',
  lead: '아래는 약국을 운영하시는 분을 위한 안내입니다.'
} as const;

export function PartnerClient() {
  /** 게이트를 통과했는가 = 면 B 를 마운트해도 되는가 */
  const [ready, setReady] = useState(false);
  const [gateOpen, setGateOpen] = useState(false);
  /** 통과할 때 입력했던 번호. 신청 폼 prefill 에만 쓰고 저장하지 않는다. */
  const [bizNo, setBizNo] = useState('');

  const faceRef = useRef<HTMLDivElement | null>(null);

  /* ---- 진입 판정 (마운트 후 1회) --------------------------------------- */
  useEffect(() => {
    // 캡처 정지 모드는 모달을 띄우지 않는다. 면을 그대로 보여 준다.
    if (isStaticCapture() || readGatePass()) {
      setReady(true);
      return;
    }
    setGateOpen(true);
  }, []);

  /* ---- 게이트 결과 ------------------------------------------------------ */

  const passGate = useCallback((digits: string) => {
    writeGatePass();
    setBizNo(digits);
    setGateOpen(false);
    setReady(true);
  }, []);

  /** ESC / 배경 클릭 / 닫기 — 거절이므로 소비자 면으로 돌려보낸다. */
  const dismissGate = useCallback(() => {
    try {
      window.location.replace('/');
    } catch {
      window.location.href = '/';
    }
  }, []);

  /** "약국이 아니신가요?" — 빈손으로 보내지 않고 사전 등록으로 태운다. */
  const exitGate = useCallback(() => {
    window.location.href = '/' + SIGNUP_HASH;
  }, []);

  /* ---- 면 B 가 열린 뒤의 스크롤 -----------------------------------------
     DOM 이 면을 반영한 다음이어야 한다. effect + 이중 rAF(레이아웃 확정)로 미룬다.
     'auto' 는 html{scroll-behavior:smooth} 를 따라 수천 px 를 굴러가므로 'instant'. */
  useEffect(() => {
    if (!ready) return;
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        const hash = (window.location.hash || '').toLowerCase();
        if (hash === APPLY_HASH) {
          const target = document.getElementById(APPLY_HASH.slice(1));
          if (target) {
            // ★ 'auto' 가 아니라 'instant'. 'auto' 는 html{scroll-behavior:smooth} 를
            //   따른다는 뜻이라 게이트 통과 직후 3.9천 px 를 1.5초 동안 미끄러져 내려간다
            //   (실측: scrollY 292→2288→3771→3920). 아래 최상단 분기와 같은 이유다.
            target.scrollIntoView({ block: 'start', behavior: 'instant' as ScrollBehavior });
            return;
          }
        }
        window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
      });
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [ready]);

  /* ---- 게이트에서 받은 번호를 신청 폼에 채운다 ---------------------------
     면 B 는 dangerouslySetInnerHTML 로 들어온 정적 마크업이라 React 가 제어하지
     않는다. 값만 직접 넣는다.
     필드는 name 이 아니라 **data-field** 로 찾는다 — 수신처가 연결되면 name 이
     entry.숫자 로 치환되기 때문이다(생성기 계약). */
  useEffect(() => {
    if (!ready || !bizNo) return;
    const root = faceRef.current;
    if (!root) return;
    const raf = requestAnimationFrame(() => {
      const input = root.querySelector<HTMLInputElement>('[data-field="biz_no"]');
      if (input && !input.value) input.value = bizNo;
    });
    return () => cancelAnimationFrame(raf);
  }, [ready, bizNo]);

  return (
    <>
      {/* 모달이 열리면 이 래퍼 전체가 inert 가 된다(포커스·클릭·AT 차단). PartnerGate 가 id 로 찾는다. */}
      <div id="op-shell-content">
        <header className="op-shell-bar">
          <div className="op-shell-bar__inner">
            {/* 평범한 <a> 라 JS 가 꺼져도 눌린다. */}
            <a className="op-shell-back" href="/">
              <span aria-hidden="true">←</span> {TXT.headerBack}
            </a>
            <span className="op-shell-here">{TXT.headerLabelB}</span>
          </div>
        </header>

        <main>
          {ready ? (
            <div ref={faceRef} className="op-shell-panel" id="op-face-b">
              <OnPharmFace html={FACE_B_HTML} active />
            </div>
          ) : (
            /* 게이트 뒤에 깔리는 한 줄. 무JS 에서는 아래 noscript 의 면 B 위에 그대로 놓인다. */
            <div className="op-shell-nojs">
              <p className="op-shell-nojs__lead">{TXT.lead}</p>
            </div>
          )}
        </main>

        <footer className="op-shell-foot">
          <div className="op-shell-foot__inner">
            <p className="op-shell-foot__line">
              <a className="op-shell-foot__link" href="/">
                {TXT.footBack}
              </a>
            </p>
          </div>
        </footer>

        {/* 무JS 폴백 — 면 B 실물. JS 가 켜져 있으면 파서가 raw text 로 다뤄 DOM 에 안 들어온다.
            suppressHydrationWarning: 스크립팅이 켜진 브라우저에서 noscript 의 innerHTML 은
            이스케이프된 텍스트라 서버 문자열과 절대 같지 않다. 실제 불일치가 아니다. */}
        <noscript
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html: '<div class="op-page op-shell-panel">' + FACE_B_HTML + '</div>'
          }}
        />
      </div>

      {gateOpen ? (
        <PartnerGate onPass={passGate} onExit={exitGate} onDismiss={dismissGate} />
      ) : null}
    </>
  );
}

export default PartnerClient;
