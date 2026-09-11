'use client';

/* =============================================================================
   onpharm.kr 메인 — 2면 구성

     면 A "상담받기"     소비자 9섹션  (기본이자 유일한 첫 화면)
     면 B "약국 파트너"  파트너 6섹션  (게이트를 통과해야 열린다)

   ── 이번 라운드의 구조 변경 ────────────────────────────────────────────────
   1) 상단 **탭 2개 병렬(role=tablist) 구조를 없앴다.**
      탭은 "A 냐 B 냐 고르세요"라는 동급 선택 신호라서, 게이트를 걸어도
      소비자의 호기심 클릭을 계속 유발한다. 위계를 탭 -> 보조 링크로 낮춘다.
      진입점은 헤더 우측 작은 텍스트 링크 + 페이지 최하단 한 줄, 둘뿐이다.

   2) **면 B 는 게이트를 통과하기 전에는 마운트하지 않는다.**
      예전에는 두 면을 모두 마운트하고 hidden 으로만 감췄다. 그러면 게이트를
      통과하지 않아도 면 B 의 DOM 이 살아 있어 Ctrl+F / 스크린리더로 읽힌다.
      통과한 뒤에는 계속 마운트해 두고 hidden 토글로만 재사용한다(재초기화 비용 절감).
      ※ 정직하게 적어 둔다: 정적 export 라 FACE_B_HTML 문자열은 JS 번들 안에 그대로
        있다. 소스 보기로는 여전히 읽힌다. 이건 못 막는다. 목적은 보안이 아니라 마찰이다.

   3) `#partner` / `#b06_apply` **직링크도 예외 없이 게이트를 거친다.**
      면 A 를 그대로 렌더한 채 모달만 띄운다(면 B 를 먼저 그리고 위에 덮으면 뒤가 읽힌다).

   4) **무JS**: 진입점은 전부 평범한 <a href="#partner"> 라 그대로 보이고 눌린다.
      JS 가 꺼져 있으면 모달이 뜰 수 없으므로, 면 B 를 <noscript> 안에 실물로
      렌더해 두고 그 링크가 거기로 내려가게 한다. 백지도, 먹통 링크도 없다.
      JS 가 켜져 있으면 <noscript> 내용은 파서가 **raw text** 로 다루므로
      DOM 에 요소로 들어오지 않는다(Ctrl+F·스크린리더에 잡히지 않는다). 2)와 충돌하지 않는다.

   ── 하이드레이션 ──────────────────────────────────────────────────────────
   정적 export 다. **서버 렌더와 첫 클라이언트 렌더는 반드시 같아야 한다.**
   그래서 face / gateOpen / faceBReady 전부 상수 초기값으로 시작하고,
   해시와 sessionStorage 는 **마운트 후 effect 에서만** 읽는다.
   (해시나 sessionStorage 를 useState 초기값으로 읽으면 그 자리에서 불일치가 난다.)

   ★ 면의 콘텐츠는 전부 app/generated/ 에서 온다. 여기서 면 문구를 고치지 마라.
     생성기 copy_a.json / copy_b.json -> onpharm_build.py -> export_nextjs.py
     셸(헤더/푸터/게이트) 문구만 이 파일과 PartnerGate.tsx 에 있다.
   ============================================================================= */

import { useCallback, useEffect, useRef, useState } from 'react';
import { OnPharmFace } from './components/OnPharmFace';
import { PartnerGate } from './components/PartnerGate';
import { FACE_A_HTML, FACE_B_HTML } from './generated/faces';

type Face = 'a' | 'b';

const PARTNER_HASH = '#partner';
const APPLY_HASH = '#b06_apply';
const SIGNUP_HASH = '#signup';

/** 통과 플래그만 담는다. 사업자등록번호는 저장하지 않는다.
 *  sessionStorage 라 탭을 닫으면 사라진다(약국 카운터 PC·공용 PC 고려). */
const GATE_KEY = 'op_partner_ok';

/* 셸 문구 — 화면에 나가는 전량.
   금칙 준수: 면허 명칭 미사용(금칙 2 / 린터 R2·R9), 협회·회사 실명 없음, 금액 없음. */
const TXT = {
  headerLink: '약국 파트너 안내',
  headerBack: '상담받기',
  headerLabelB: '약국 파트너',
  footQuestion: '약국 운영자이신가요?',
  footLink: '입점 문의 →',
  footBack: '← 상담받기로 돌아가기',
  noscriptLead: '아래는 약국을 운영하시는 분을 위한 안내입니다.'
} as const;

/** 어떤 해시로 들어오면 어느 면을 열어야 하는가.
 *  면 안의 앵커(#signup, #b06_apply)로 직접 들어와도 맞는 면이 열리게 한다. */
function faceFromHash(rawHash: string): Face | null {
  const hash = (rawHash || '').toLowerCase();
  if (hash === PARTNER_HASH || hash === APPLY_HASH) return 'b';
  if (hash === SIGNUP_HASH) return 'a';
  return null;
}

/* sessionStorage 는 시크릿 모드·사이트 데이터 차단에서 접근 자체가 throw 한다.
   읽기/쓰기 둘 다 try/catch 로 감싸고, 실패하면 "기억 못 함"으로 조용히 동작한다. */
function readGatePass(): boolean {
  try {
    return window.sessionStorage.getItem(GATE_KEY) === '1';
  } catch {
    return false;
  }
}
function writeGatePass(): void {
  try {
    window.sessionStorage.setItem(GATE_KEY, '1');
  } catch {
    /* 못 적어도 이번 전환은 그대로 된다. 다음 진입 때 한 번 더 물을 뿐이다. */
  }
}

/** 캡처 정지 모드에서는 게이트를 초기화하지 않는다(캡처 PNG 결정성). */
function isStaticCapture(): boolean {
  try {
    return document.documentElement.classList.contains('op-static');
  } catch {
    return false;
  }
}

/** 주소에서 파트너 해시만 걷어낸다. 히스토리는 쌓지 않는다(기존 규약 유지). */
function dropPartnerHash(): void {
  try {
    const hash = (window.location.hash || '').toLowerCase();
    if (hash !== PARTNER_HASH && hash !== APPLY_HASH) return;
    window.history.replaceState(null, '', window.location.pathname + window.location.search);
  } catch {
    /* 히스토리 조작이 막힌 환경이어도 화면 상태는 이미 맞다 */
  }
}

export default function HomePage() {
  const [face, setFace] = useState<Face>('a');
  const [gateOpen, setGateOpen] = useState(false);
  /** 게이트를 한 번이라도 통과했는가 = 면 B 를 마운트해도 되는가 */
  const [faceBReady, setFaceBReady] = useState(false);
  /** 통과할 때 입력했던 번호. 면 B 신청 폼 prefill 에만 쓰고 저장하지 않는다. */
  const [bizNo, setBizNo] = useState('');

  /** 모달을 연 요소. 닫을 때 여기로 포커스를 되돌린다. */
  const triggerRef = useRef<HTMLElement | null>(null);
  const wantScrollTopRef = useRef(false);
  const faceBRef = useRef<HTMLDivElement | null>(null);

  /* ---- 게이트 열기/닫기 -------------------------------------------------- */

  const openGate = useCallback((trigger: HTMLElement | null) => {
    if (isStaticCapture()) return;
    triggerRef.current = trigger;
    setGateOpen(true);
  }, []);

  const restoreFocus = useCallback(() => {
    const node = triggerRef.current;
    triggerRef.current = null;
    if (!node) return;
    // 모달이 언마운트되고 inert 가 풀린 다음 프레임에 되돌린다.
    requestAnimationFrame(() => {
      try {
        node.focus();
      } catch {
        /* noop */
      }
    });
  }, []);

  /** ESC / 배경 클릭 / 닫기 버튼 — 면 A 에 그대로 남고 스크롤도 그대로. */
  const dismissGate = useCallback(() => {
    setGateOpen(false);
    dropPartnerHash();
    restoreFocus();
  }, [restoreFocus]);

  /** "약국이 아니신가요?" — 빈손으로 돌려보내지 않고 면 A 사전 등록으로 태운다. */
  const exitGate = useCallback(() => {
    setGateOpen(false);
    dropPartnerHash();
    triggerRef.current = null;
    // 면 전환이 없으므로 아래 스크롤 effect 가 돌지 않는다. 여기서 직접 옮긴다.
    requestAnimationFrame(() => {
      const target = document.getElementById('signup');
      if (!target) return;
      // 키보드 사용자가 body 에 남지 않도록 포커스도 같이 옮긴다.
      if (!target.hasAttribute('tabindex')) target.setAttribute('tabindex', '-1');
      try {
        target.focus({ preventScroll: true });
      } catch {
        /* noop */
      }
      // html{scroll-behavior:smooth} 아래에서 'auto'/'smooth' 로 보내면 헤더에서
      // 눌렀을 때 1만 px 를 몇 초에 걸쳐 굴러간다. 의도적 이동이므로 즉시 붙인다.
      const top = target.getBoundingClientRect().top + window.scrollY - 72;
      try {
        window.scrollTo({ top, left: 0, behavior: 'instant' as ScrollBehavior });
      } catch {
        window.scrollTo(0, top);
      }
    });
  }, []);

  /** 검증 통과 — 면 B 를 마운트하고 전환한다. */
  const passGate = useCallback((digits: string) => {
    writeGatePass();
    setBizNo(digits);
    setGateOpen(false);
    triggerRef.current = null;
    setFaceBReady(true);

    // #b06_apply 로 들어왔으면 그 앵커로, 그 외에는 최상단.
    const hash = (window.location.hash || '').toLowerCase();
    wantScrollTopRef.current = hash !== APPLY_HASH;
    if (hash !== APPLY_HASH) {
      try {
        window.history.replaceState(null, '', PARTNER_HASH);
      } catch {
        /* noop */
      }
    }
    setFace('b');
  }, []);

  /* ---- 해시 -> 면 (최초 진입 + 뒤로가기 + 앵커 이동) ---------------------- */

  useEffect(() => {
    const sync = () => {
      const next = faceFromHash(window.location.hash);
      if (next === 'b') {
        if (readGatePass()) {
          setFaceBReady(true);
          setFace('b');
        } else {
          // 면 B 로 전환하지 않는다. 면 A 를 그대로 둔 채 모달만 띄운다.
          openGate(null);
        }
        return;
      }
      if (next === 'a') setFace('a');
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, [openGate]);

  /* ---- 면이 바뀐 뒤의 스크롤 처리 ---------------------------------------
     반드시 DOM 이 새 면을 반영한 다음이어야 한다. 클릭 핸들러 안에서 바로
     window.scrollTo 를 부르면 아직 옛 면이 깔려 있어 커밋 직후 되돌아간다.
     그래서 effect + 이중 rAF(레이아웃 확정)로 미룬다. */
  useEffect(() => {
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        if (wantScrollTopRef.current) {
          wantScrollTopRef.current = false;
          // 'auto' 는 html{scroll-behavior:smooth} 를 따른다는 뜻이라 수천 px 를 굴러간다.
          // 면 전환은 즉시 최상단이어야 하므로 'instant'.
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          return;
        }

        // 숨어 있던 면의 앵커는 브라우저가 찾지 못한다. 열린 다음 우리가 옮긴다.
        const hash = window.location.hash;
        if (!hash || hash.toLowerCase() === PARTNER_HASH) return;
        let target: HTMLElement | null = null;
        try {
          target = document.getElementById(decodeURIComponent(hash.slice(1)));
        } catch {
          target = null;
        }
        if (target && target.offsetParent !== null) {
          target.scrollIntoView({ block: 'start', behavior: 'auto' });
        }
      });
    });

    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [face]);

  /* ---- 게이트에서 받은 번호를 면 B 신청 폼에 채운다 ----------------------
     면 B 는 dangerouslySetInnerHTML 로 들어온 정적 마크업이라 React 가 제어하지
     않는다. 그래서 값만 직접 넣는다.
     필드는 name 이 아니라 **data-field** 로 찾는다 — 수신처가 연결되면 name 이
     entry.숫자 로 치환되기 때문이다(생성기 계약). */
  useEffect(() => {
    if (face !== 'b' || !bizNo) return;
    const root = faceBRef.current;
    if (!root) return;
    const raf = requestAnimationFrame(() => {
      const input = root.querySelector<HTMLInputElement>('[data-field="biz_no"]');
      if (input && !input.value) input.value = bizNo;
    });
    return () => cancelAnimationFrame(raf);
  }, [face, faceBReady, bizNo]);

  /* ---- 진입점 클릭 ------------------------------------------------------ */

  const onPartnerClick = useCallback(
    (event: React.MouseEvent<HTMLAnchorElement>) => {
      // 새 탭/저장 등 브라우저 고유 동작은 가로채지 않는다.
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0) {
        return;
      }
      event.preventDefault();
      if (readGatePass()) {
        setFaceBReady(true);
        wantScrollTopRef.current = true;
        try {
          window.history.replaceState(null, '', PARTNER_HASH);
        } catch {
          /* noop */
        }
        setFace('b');
        return;
      }
      openGate(event.currentTarget);
    },
    [openGate]
  );

  const backToA = useCallback(() => {
    dropPartnerHash();
    wantScrollTopRef.current = true;
    setFace('a');
  }, []);

  const onA = face === 'a';

  return (
    <>
      {/* 모달이 열리면 이 래퍼 전체가 inert 가 된다(포커스·클릭·AT 차단). */}
      <div id="op-shell-content">
        <header className="op-shell-bar">
          <div className="op-shell-bar__inner">
            {onA ? (
              <span className="op-shell-bar__gap" />
            ) : (
              <button type="button" className="op-shell-back" onClick={backToA}>
                <span aria-hidden="true">←</span> {TXT.headerBack}
              </button>
            )}

            {onA ? (
              /* 오렌지를 쓰지 않는다 — 오렌지는 소비자 CTA 전용이다.
                 평범한 <a href> 라 JS 가 꺼져도 보이고 눌린다(무JS 폴백). */
              <a className="op-shell-link" href={PARTNER_HASH} onClick={onPartnerClick}>
                {TXT.headerLink} <span aria-hidden="true">→</span>
              </a>
            ) : (
              <span className="op-shell-here">{TXT.headerLabelB}</span>
            )}
          </div>
        </header>

        <main>
          <div className="op-shell-panel" id="op-face-a" hidden={!onA} aria-hidden={!onA}>
            <OnPharmFace html={FACE_A_HTML} active={onA} />
          </div>

          {/* 게이트를 통과하기 전에는 아예 존재하지 않는다. */}
          {faceBReady ? (
            <div
              ref={faceBRef}
              className="op-shell-panel"
              id="op-face-b"
              hidden={onA}
              aria-hidden={onA}
            >
              <OnPharmFace html={FACE_B_HTML} active={!onA} />
            </div>
          ) : null}
        </main>

        <footer className="op-shell-foot">
          <div className="op-shell-foot__inner">
            {onA ? (
              <p className="op-shell-foot__line">
                <span className="op-shell-foot__q">{TXT.footQuestion}</span>
                <a className="op-shell-foot__link" href={PARTNER_HASH} onClick={onPartnerClick}>
                  {TXT.footLink}
                </a>
              </p>
            ) : (
              <p className="op-shell-foot__line">
                <button type="button" className="op-shell-foot__link" onClick={backToA}>
                  {TXT.footBack}
                </button>
              </p>
            )}
          </div>
        </footer>

        {/* ── 무JS 폴백 ──────────────────────────────────────────────────
            JS 가 꺼져 있으면 위 링크(#partner)가 여기로 내려온다.
            JS 가 켜져 있으면 브라우저 파서가 이 안을 raw text 로 처리하므로
            DOM 에 요소로 들어오지 않는다 = 게이트 전 DOM 노출이 없다.
            그래서 id 가 중복되지도 않는다(면 B 는 둘 중 한 쪽에만 존재한다).
            suppressHydrationWarning: 스크립팅이 켜진 브라우저에서 noscript 의
            innerHTML 은 이스케이프된 텍스트라 서버 문자열과 절대 같지 않다.
            실제 불일치가 아니라 noscript 의 파싱 규칙이다. */}
        <noscript
          suppressHydrationWarning
          dangerouslySetInnerHTML={{
            __html:
              '<div class="op-shell-nojs" id="partner">' +
              '<p class="op-shell-nojs__lead">' +
              TXT.noscriptLead +
              '</p></div>' +
              '<div class="op-page op-shell-panel">' +
              FACE_B_HTML +
              '</div>'
          }}
        />
      </div>

      {gateOpen ? (
        <PartnerGate onPass={passGate} onExit={exitGate} onDismiss={dismissGate} />
      ) : null}
    </>
  );
}
