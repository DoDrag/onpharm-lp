'use client';

/* =============================================================================
   onpharm.kr 메인 — 2면 구성
     면 A "상담받기"     소비자 9섹션 (기본)
     면 B "약국 파트너"  파트너 6섹션

   두 면 모두 마운트해 두고 hidden 으로만 감춘다(재초기화 비용 절감).
   URL 해시 #partner 로 들어오면 면 B 가 열린다.

   ★ 콘텐츠는 전부 app/generated/ 에서 온다. 여기서 문구를 고치지 마라.
     생성기 copy_a.json / copy_b.json -> onpharm_build.py -> export_nextjs.py
   ============================================================================= */

import { useCallback, useEffect, useRef, useState } from 'react';
import type { KeyboardEvent } from 'react';
import { OnPharmFace } from './components/OnPharmFace';
import { FACE_A_HTML, FACE_B_HTML } from './generated/faces';

type Face = 'a' | 'b';

type TabDef = {
  id: Face;
  label: string;
  tabId: string;
  panelId: string;
  html: string;
};

const TABS: TabDef[] = [
  { id: 'a', label: '상담받기', tabId: 'op-tab-a', panelId: 'op-face-a', html: FACE_A_HTML },
  { id: 'b', label: '약국 파트너', tabId: 'op-tab-b', panelId: 'op-face-b', html: FACE_B_HTML }
];

const PARTNER_HASH = '#partner';

/** 어떤 해시로 들어오면 어느 면을 열어야 하는가.
 *  면 안의 앵커(#signup, #b06_apply)로 직접 들어와도 맞는 면이 열리게 한다. */
function faceFromHash(rawHash: string): Face | null {
  const hash = (rawHash || '').toLowerCase();
  if (hash === PARTNER_HASH || hash === '#b06_apply') return 'b';
  if (hash === '#signup') return 'a';
  return null;
}

export default function HomePage() {
  // 정적 export 다. 서버 렌더와 첫 클라이언트 렌더는 반드시 면 A 여야 한다
  // (해시를 초기값으로 읽으면 하이드레이션 불일치가 난다). 해시는 마운트 후에 본다.
  const [face, setFace] = useState<Face>('a');

  // 해시 -> 면 (최초 진입 + 뒤로가기/앵커 이동)
  useEffect(() => {
    const sync = () => {
      const next = faceFromHash(window.location.hash);
      if (next) setFace(next);
    };
    sync();
    window.addEventListener('hashchange', sync);
    return () => window.removeEventListener('hashchange', sync);
  }, []);

  /* 면이 바뀐 뒤의 스크롤 처리.
     반드시 DOM 이 새 면을 반영한 다음이어야 한다. 클릭 핸들러 안에서 바로
     window.scrollTo 를 부르면 아직 옛 면이 깔려 있는 상태라 커밋 직후
     스크롤이 되돌아간다. 그래서 effect + 이중 rAF(레이아웃 확정)로 미룬다.
       - 탭 클릭으로 바뀐 경우: 최상단
       - 해시(#b06_apply, #signup)로 바뀐 경우: 그 앵커 위치 */
  const wantScrollTopRef = useRef(false);

  useEffect(() => {
    let inner = 0;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => {
        if (wantScrollTopRef.current) {
          wantScrollTopRef.current = false;
          // 'auto' 는 CSS 의 scroll-behavior 를 따른다는 뜻이라 html{scroll-behavior:smooth}
          // 아래에서는 수천 px 를 스르륵 굴러간다. 면 전환은 즉시 최상단이어야 하므로 'instant'.
          window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
          return;
        }

        // 숨어 있던 면의 앵커는 브라우저가 찾지 못한다. 열린 다음 우리가 옮긴다.
        const hash = window.location.hash;
        if (!hash || hash === PARTNER_HASH) return;
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

  const selectFace = useCallback(
    (next: Face) => {
      if (next === face) return;

      // 해시로도 면이 열리므로 주소를 맞춰 둔다. 히스토리는 쌓지 않는다.
      try {
        const url =
          next === 'b' ? PARTNER_HASH : window.location.pathname + window.location.search;
        window.history.replaceState(null, '', url);
      } catch {
        /* 히스토리 조작이 막힌 환경이어도 전환 자체는 되어야 한다 */
      }

      wantScrollTopRef.current = true;
      setFace(next);
    },
    [face]
  );

  const onTabKeyDown = useCallback(
    (event: KeyboardEvent<HTMLButtonElement>) => {
      const current = TABS.findIndex((tab) => tab.id === face);
      let next = -1;

      if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
        next = (current + 1) % TABS.length;
      } else if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
        next = (current - 1 + TABS.length) % TABS.length;
      } else if (event.key === 'Home') {
        next = 0;
      } else if (event.key === 'End') {
        next = TABS.length - 1;
      }
      if (next < 0) return;

      event.preventDefault();
      selectFace(TABS[next].id);
      const node = document.getElementById(TABS[next].tabId);
      if (node) node.focus();
    },
    [face, selectFace]
  );

  return (
    <main>
      <div className="op-shell-bar">
        <div className="op-shell-bar__inner" role="tablist" aria-label="온팜 안내 선택">
          {TABS.map((tab) => {
            const on = tab.id === face;
            return (
              <button
                key={tab.id}
                id={tab.tabId}
                type="button"
                role="tab"
                aria-selected={on}
                aria-controls={tab.panelId}
                tabIndex={on ? 0 : -1}
                className={on ? 'op-shell-tab is-on' : 'op-shell-tab'}
                onClick={() => selectFace(tab.id)}
                onKeyDown={onTabKeyDown}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {TABS.map((tab) => {
        const on = tab.id === face;
        return (
          <div
            key={tab.id}
            id={tab.panelId}
            className="op-shell-panel"
            role="tabpanel"
            aria-labelledby={tab.tabId}
            hidden={!on}
            aria-hidden={!on}
          >
            <OnPharmFace html={tab.html} active={on} />
          </div>
        );
      })}
    </main>
  );
}
