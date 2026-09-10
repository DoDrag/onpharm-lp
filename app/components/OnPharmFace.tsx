'use client';

/* =============================================================================
   OnPharmFace — 생성기(landing-page-generator)가 만든 한 "면"을 렌더한다.

   - 마크업/CSS 는 생성기 산출물을 그대로 쓴다. TSX 로 다시 쓰지 않는다.
     문구를 고치려면 생성기 쪽 copy_a.json / copy_b.json 을 고치고
     onpharm_build.py -> export_nextjs.py 를 다시 돌린다.
   - 모션 런타임(onpharm.js)은 문서 전체를 대상으로 도는 바닐라 IIFE 다.
     그래서 이 컴포넌트는 "면 단위"로 다음 두 가지만 책임진다.
       1) 런타임이 문서에 딱 한 번만 들어가게 한다.
       2) 이 면이 숨겨져 있는 동안 모션이 헛돌지 않게 멈추고, 다시 보일 때 되살린다.
   ============================================================================= */

import { useEffect, useRef } from 'react';
import { MOTION_JS } from '../generated/motion';

declare global {
  interface Window {
    /**
     * export_nextjs.py 가 MOTION_JS 를 감쌀 때 노출할 수 있는 재초기화 훅.
     * 있으면 면이 보일 때마다 호출한다. 없으면 아래 DOM 이벤트 경로로 대체한다.
     */
    __onpharmInitMotion?: (root?: Element | Document) => void;
  }
}

type Props = {
  /** 생성기가 만든 섹션 마크업 (app/generated/faces.ts) */
  html: string;
  /** 지금 화면에 보이는 면인지 */
  active: boolean;
};

const SCRIPT_ID = 'onpharm-motion-runtime';

/* -----------------------------------------------------------------------------
   런타임 주입 — 문서당 1회
   -----------------------------------------------------------------------------
   주입한 <script> 는 cleanup 에서 지우지 않는다. 의도한 것이다.
   script 노드를 제거해도 이미 실행된 IIFE 가 문서에 건 리스너/옵저버는
   되돌아오지 않는다. 지웠다가 다시 붙이면 "정리"가 아니라 이중 초기화가 되어
   캐러셀 타이머가 두 벌 돌고 폼 제출 핸들러가 두 번 걸린다.
   그래서 id 로 잠그고 정확히 한 번만 넣는다. (React StrictMode 이중 마운트 안전)
   ----------------------------------------------------------------------------- */
function ensureRuntime(): void {
  if (typeof document === 'undefined') return;
  if (typeof window.__onpharmInitMotion === 'function') return; // 이미 살아 있다
  if (document.getElementById(SCRIPT_ID)) return;
  if (!MOTION_JS) return; // 런타임이 비어도 콘텐츠는 전부 보인다(무JS 폴백)

  try {
    const el = document.createElement('script');
    el.id = SCRIPT_ID;
    el.type = 'text/javascript';
    el.textContent = MOTION_JS;
    document.head.appendChild(el);
  } catch {
    /* 런타임이 없어도 페이지는 읽힌다. 조용히 넘어간다. */
  }
}

function fireMouse(el: Element, type: 'mouseenter' | 'mouseleave'): void {
  try {
    el.dispatchEvent(new MouseEvent(type, { bubbles: false, cancelable: false }));
  } catch {
    /* noop */
  }
}

/* -----------------------------------------------------------------------------
   면 단위 정지 / 재개
   -----------------------------------------------------------------------------
   캐러셀이 핵심이다. onpharm.js 의 캐러셀은 첫 go() 때 슬라이드 두 장의
   getBoundingClientRect() 를 재서 "가로 배치인가"를 판정하고 그 값을 영구 캐시한다.
   면이 hidden(display:none) 인 동안 자동넘김이 돌면 rect 가 전부 0 이라
   가로 판정이 false 로 굳어 버리고, 나중에 면을 열어도 트랙이 영영 안 움직인다.

   런타임은 mouseenter/mouseleave 로 자동넘김을 멈추고/재개하는 훅을 이미 갖고 있다.
   숨기기 전에 mouseenter 를 쏴서 첫 go() 자체를 막고, 보일 때 mouseleave 로 되살린다.
   런타임이 없거나 구조가 바뀌어도 리스너가 없을 뿐 아무 일도 일어나지 않는다.
   ----------------------------------------------------------------------------- */
function setFaceRunning(root: HTMLElement, running: boolean): void {
  root.querySelectorAll('[data-carousel]').forEach((box) => {
    fireMouse(box, running ? 'mouseleave' : 'mouseenter');
  });

  root.querySelectorAll<HTMLVideoElement>('video').forEach((video) => {
    try {
      if (!running) {
        video.pause();
        return;
      }
      // 런타임이 src 없는 히어로 영상은 hidden 처리해서 버린다. 되살리지 않는다.
      if (video.hidden) return;
      if (!video.currentSrc && !video.getAttribute('src') && !video.querySelector('source[src]')) {
        return;
      }
      const played = video.play();
      if (played && typeof played.catch === 'function') played.catch(() => {});
    } catch {
      /* noop */
    }
  });
}

/* 숨어 있는 동안 IntersectionObserver 가 돌지 못한 리빌을 확정한다.
   런타임의 자체 sweep 이 이미 처리했으면 no-op 이다. */
function settleReveal(root: HTMLElement): void {
  root.querySelectorAll('[data-reveal]:not(.is-in)').forEach((el) => {
    el.classList.add('is-in');
  });
}

export function OnPharmFace({ html, active }: Props) {
  const rootRef = useRef<HTMLDivElement | null>(null);
  const rafRef = useRef<number | null>(null);

  // 1) 런타임 확보. 두 면이 각각 호출해도 실제 주입은 한 번뿐이다.
  useEffect(() => {
    ensureRuntime();
  }, [html]);

  // 2) 면이 보일 때마다 모션을 (재)초기화하고, 숨을 때는 멈춘다.
  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    const cancelRaf = () => {
      if (rafRef.current !== null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
    };

    if (!active) {
      cancelRaf();
      setFaceRunning(root, false);
      return;
    }

    // hidden 이 막 풀린 직후다. 레이아웃이 잡힌 다음 프레임에서 측정하게 한다.
    cancelRaf();
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      if (typeof window.__onpharmInitMotion === 'function') {
        try {
          window.__onpharmInitMotion(root);
        } catch {
          /* 재초기화 실패해도 콘텐츠는 그대로 읽힌다 */
        }
      }
      settleReveal(root);
      setFaceRunning(root, true);
    });

    return () => {
      cancelRaf();
      setFaceRunning(root, false);
    };
  }, [active, html]);

  return (
    <div
      ref={rootRef}
      className="op-page"
      /* 생성기가 만든 정적 마크업만 들어온다(빌드 타임 상수). 사용자 입력 아님. */
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}

export default OnPharmFace;
