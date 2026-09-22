/* =============================================================================
   게이트 통과 상태 — `/` 와 `/partner/` 두 라우트가 공유한다.

   - 통과 **플래그만** 담는다. 사업자등록번호는 저장하지 않는다.
   - sessionStorage 라 탭을 닫으면 사라진다(약국 카운터 PC·공용 PC 고려).
     localStorage 로 바꾸지 마라.
   - 시크릿 모드·사이트 데이터 차단에서는 접근 자체가 throw 한다.
     읽기/쓰기 둘 다 try/catch 로 감싸고, 실패하면 "기억 못 함"으로 조용히 동작한다.
   ============================================================================= */

const GATE_KEY = 'op_partner_ok';

export function readGatePass(): boolean {
  try {
    return window.sessionStorage.getItem(GATE_KEY) === '1';
  } catch {
    return false;
  }
}

export function writeGatePass(): void {
  try {
    window.sessionStorage.setItem(GATE_KEY, '1');
  } catch {
    /* 못 적어도 이번 전환은 그대로 된다. 다음 진입 때 한 번 더 물을 뿐이다. */
  }
}

/** 캡처 정지 모드에서는 게이트를 띄우지 않는다(캡처 PNG 결정성). */
export function isStaticCapture(): boolean {
  try {
    return document.documentElement.classList.contains('op-static');
  } catch {
    return false;
  }
}

/** 파트너 라우트. trailingSlash:true 라 항상 슬래시로 끝낸다(정적 호스팅 리다이렉트 회피). */
export const PARTNER_PATH = '/partner/';

/** 면 B 신청 폼 앵커. `/partner/#b06_apply` 로 직접 들어오는 링크가 쓴다. */
export const APPLY_HASH = '#b06_apply';

/** 면 A 사전 등록 앵커. 게이트 출구("약국이 아니신가요?")가 여기로 보낸다. */
export const SIGNUP_HASH = '#signup';
