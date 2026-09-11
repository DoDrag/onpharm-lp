'use client';

/* =============================================================================
   PartnerGate — 면 B(약국 파트너)로 들어가기 전 1문항 확인 모달

   설계 근거 (요약)
   - 질문은 **1개만** 둔다. 폼 필드가 1개 늘 때마다 전환율이 평균 4.1% 날아간다.
     동의 체크·약국명·연락처를 여기서 받지 않는다(판별력 0, 마찰만 증가).
   - 입력값은 **전송하지도 저장하지도 않는다.** 브라우저 메모리에서만 판정한다.
     그래서 게이트 자체에는 개인정보 동의 문구가 필요 없고, 대신 그 사실을 캡션으로 밝힌다.
   - 통과 플래그만 sessionStorage 에 '1' 로 남긴다. 번호는 저장하지 않는다.
     (약국 카운터 PC·공용 PC 를 고려해 localStorage 는 쓰지 않는다.)
   - 3회 실패해도 **잠그지 않는다.** 진짜 약국을 가두는 손실이 훨씬 크다.
     대신 출구(상담받기)를 주 버튼으로 승격한다.

   모션·캡처 계약
   - 이 컴포넌트는 **JS 가 살아 있을 때만 DOM 에 들어온다.** 서버 HTML 에 없다.
     따라서 무JS 사용자에게 "열리지 않는 빈 상자"가 남지 않는다.
   - 숨김은 CSS 가 아니라 **언마운트**로 한다. 콘텐츠를 감추는 CSS 를 새로 만들지 않는다.
   - .op-static(캡처 정지 모드)에서는 아예 열리지 않는다. 호출부가 막는다.
   ============================================================================= */

import { useCallback, useEffect, useId, useRef, useState } from 'react';
import { checkPharmacyBizNo } from '../lib/bizno';

/* 카카오 1:1 채팅 URL.
   정본은 생성기의 data/onpharm_endpoints.json > kakao_channel_chat_url 이다.
   셸(Next.js)은 그 JSON 을 읽지 않으므로 여기 한 줄만 복사해 둔다.
   채널을 바꾸면 두 곳을 같이 고칠 것. 빈 문자열이면 링크를 아예 렌더하지 않는다. */
export const KAKAO_CHAT_URL = 'https://pf.kakao.com/_wxdxhrX/chat';

/** 3회 연속 실패하면 문구를 바꾸고 출구를 주 버튼으로 올린다. 잠그지는 않는다. */
const SOFT_LIMIT = 3;

const TXT = {
  title: '약국 운영자 확인',
  desc: '이 안내는 약국을 운영하시는 분을 위한 내용입니다. 사업자등록번호를 입력해 주세요.',
  label: '사업자등록번호',
  hint: '숫자 10자리. 하이픈은 넣으셔도 되고 빼셔도 됩니다.',
  privacy: '입력하신 번호는 전송·저장되지 않고 이 브라우저에서만 확인합니다.',
  submit: '확인하고 들어가기',
  errEmpty: '사업자등록번호를 입력해 주세요.',
  errBad: '번호를 다시 확인해 주세요.',
  errSoft: '혹시 약국 관계자가 아니신가요? 아래에서 상담받기로 이동하실 수 있습니다.',
  exit: '약국이 아니신가요? 상담받기로 →',
  kakao: '번호가 기억나지 않으세요? 카카오톡으로 문의',
  close: '닫기'
} as const;

type Props = {
  /** 검증 통과. 숫자 10자리만 넘긴다(면 B 신청 폼 prefill 용). */
  onPass: (digits: string) => void;
  /** "약국이 아니신가요?" — 면 A 사전 등록으로 태워 보낸다. */
  onExit: () => void;
  /** ESC / 배경 클릭 / 닫기 버튼 — 면 A 에 그대로 남는다(스크롤 보존). */
  onDismiss: () => void;
};

/** 모달 안에서 Tab 순환 대상 */
function focusables(root: HTMLElement): HTMLElement[] {
  const sel =
    'a[href], button:not([disabled]), input:not([disabled]), [tabindex]:not([tabindex="-1"])';
  // offsetParent 는 position:fixed 안에서 신뢰할 수 없다. 렌더 박스 유무로 본다.
  return Array.from(root.querySelectorAll<HTMLElement>(sel)).filter(
    (el) => el.getClientRects().length > 0 || el === document.activeElement
  );
}

export function PartnerGate({ onPass, onExit, onDismiss }: Props) {
  const uid = useId().replace(/:/g, '');
  const titleId = `op-gate-title-${uid}`;
  const descId = `op-gate-desc-${uid}`;
  const errId = `op-gate-err-${uid}`;
  const hintId = `op-gate-hint-${uid}`;

  const [value, setValue] = useState('');
  const [error, setError] = useState('');
  const [fails, setFails] = useState(0);

  const dialogRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);

  const soft = fails >= SOFT_LIMIT;

  /* 열릴 때: 배경 비활성 + 스크롤 락 + 첫 입력에 포커스.
     닫을 때의 포커스 복귀는 호출부(page.tsx)가 트리거 요소를 기억해 처리한다. */
  useEffect(() => {
    const shell = document.getElementById('op-shell-content');
    const body = document.body;
    const prevOverflow = body.style.overflow;

    if (shell) {
      // inert 는 포커스/클릭/AT 를 한 번에 막는다. 미지원 브라우저는 aria-hidden + 포커스 트랩으로 보완.
      try {
        shell.setAttribute('inert', '');
      } catch {
        /* noop */
      }
      shell.setAttribute('aria-hidden', 'true');
    }
    body.style.overflow = 'hidden';

    // 1필드 모달이라 제목이 아니라 입력으로 바로 보낸다(즉시 타이핑이 자연스럽다).
    const raf = requestAnimationFrame(() => {
      try {
        inputRef.current?.focus();
      } catch {
        /* noop */
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      if (shell) {
        shell.removeAttribute('inert');
        shell.removeAttribute('aria-hidden');
      }
      body.style.overflow = prevOverflow;
    };
  }, []);

  /* ESC = 닫기. 배경 클릭과 같은 처리(면 A 유지, 스크롤 보존). */
  const onKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLDivElement>) => {
      if (event.key === 'Escape') {
        event.stopPropagation();
        onDismiss();
        return;
      }
      if (event.key !== 'Tab') return;

      const root = dialogRef.current;
      if (!root) return;
      const items = focusables(root);
      if (items.length === 0) return;

      const first = items[0];
      const last = items[items.length - 1];
      const active = document.activeElement as HTMLElement | null;

      if (event.shiftKey && (active === first || !root.contains(active))) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && active === last) {
        event.preventDefault();
        first.focus();
      }
    },
    [onDismiss]
  );

  const onSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const verdict = checkPharmacyBizNo(value);

      if (verdict.ok) {
        onPass(verdict.digits);
        return;
      }

      // 입력값은 지우지 않는다. 오타 한 글자 때문에 10자리를 다시 치게 하지 않는다.
      const next = fails + 1;
      setFails(next);
      setError(
        verdict.reason === 'empty'
          ? TXT.errEmpty
          : next >= SOFT_LIMIT
            ? TXT.errSoft
            : TXT.errBad
      );
      try {
        inputRef.current?.focus();
      } catch {
        /* noop */
      }
    },
    [fails, onPass, value]
  );

  return (
    <div
      className="op-gate"
      /* 배경 클릭 = 닫기. 모달 안쪽 클릭은 여기까지 올라오지 않게 막는다. */
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onDismiss();
      }}
      onKeyDown={onKeyDown}
    >
      <div
        ref={dialogRef}
        className="op-gate__box"
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        aria-describedby={descId}
      >
        <div className="op-gate__head">
          <h2 className="op-gate__title" id={titleId}>
            {TXT.title}
          </h2>
          <button
            type="button"
            className="op-gate__x"
            aria-label={TXT.close}
            onClick={onDismiss}
          >
            <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none"
                 stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <p className="op-gate__desc" id={descId}>
          {TXT.desc}
        </p>

        <form className="op-gate__form" onSubmit={onSubmit} noValidate>
          <label className="op-gate__label" htmlFor={`${uid}-bizno`}>
            {TXT.label}
          </label>
          <input
            ref={inputRef}
            id={`${uid}-bizno`}
            className={error ? 'op-gate__input is-bad' : 'op-gate__input'}
            type="text"
            inputMode="numeric"
            autoComplete="off"
            maxLength={14}
            /* 입력 중 하이픈 자동 삽입은 하지 않는다(커서 점프·IME 간섭·재낭독). */
            placeholder="0000000000"
            value={value}
            aria-invalid={error ? true : undefined}
            aria-describedby={error ? `${hintId} ${errId}` : hintId}
            onChange={(event) => {
              setValue(event.target.value);
              if (error) setError('');
            }}
          />
          <p className="op-gate__hint" id={hintId}>
            {TXT.hint}
          </p>

          {/* 에러는 빨강을 쓰지 않는다(브랜드 금칙 1: 액센트는 오렌지 하나).
              오렌지 테두리 + 차콜 텍스트 + currentColor 아이콘으로 전달한다. */}
          <p className="op-gate__err" id={errId} role="status" aria-live="polite">
            {error ? (
              <>
                <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true" fill="none"
                     stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M12 7.5v5.5M12 16.3v.2" />
                </svg>
                <span>{error}</span>
              </>
            ) : null}
          </p>

          <button
            type="submit"
            className={soft ? 'op-gate__go op-gate__go--quiet' : 'op-gate__go'}
          >
            {TXT.submit}
          </button>
        </form>

        <div className="op-gate__outs">
          <button
            type="button"
            className={soft ? 'op-gate__exit op-gate__exit--strong' : 'op-gate__exit'}
            onClick={onExit}
          >
            {TXT.exit}
          </button>
          {KAKAO_CHAT_URL ? (
            <a
              className="op-gate__ask"
              href={KAKAO_CHAT_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              {TXT.kakao}
            </a>
          ) : null}
        </div>

        <p className="op-gate__privacy">{TXT.privacy}</p>
      </div>
    </div>
  );
}

export default PartnerGate;
