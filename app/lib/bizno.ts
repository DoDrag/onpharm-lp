/* =============================================================================
   사업자등록번호(10자리) 형식·체크섬 검증 — 온팜 약국 게이트용

   목적은 **보안이 아니라 마찰**이다. 소비자가 우발적으로 면 B(약국 파트너)에
   들어오는 것을 막는 것이고, 개발자도구를 여는 사람은 어차피 넘어온다.
   실제 검증은 신청 폼 접수 후 사람이 하는 단계다
   (약국명 + 주소 -> 심평원 '병원·약국 찾기' 대조).

   - 서버 없음. 브라우저 메모리에서만 판정한다.
   - 입력값은 어디에도 전송하지 않고 저장하지도 않는다.
     통과 후 면 B 신청 폼에 prefill 하기 위해 React state 로만 들고 있는다.

   근거
     체크섬  가중치 [1,3,7,1,3,7,1,3,5] 로 앞 9자리 가중합 +
             (9번째 자리 x 5) / 10 의 몫을 더한 뒤 (10 - 합%10) % 10 == 10번째 자리
     구분코드 가운데 2자리 80~89 = 영리법인/비영리법인/국가·지자체/외국법인/종교단체.
             약사법 제20조 제1항상 약국은 법인이 개설할 수 없으므로 약국일 수 없다.
             (오탐 위험이 사실상 0 인 무료 필터)

   실측 통과율 (랜덤 10자리 200만 건 시뮬레이션)
     체크섬만                      9.9891%
     체크섬 + 구분코드 01~79 제한  7.8860%
   => 아무 숫자나 치면 12~13번에 1번 뚫린다. 이 한계를 숨기지 말 것.

   함정: '0000000000' 은 체크섬을 통과한다. repeat/unassigned 로 이중 차단한다.
   ========================================================================== */

/** 전각 숫자·하이픈·공백을 정리해 숫자만 남긴다. */
export function normalizeBizNo(raw: string | null | undefined): string {
  return String(raw == null ? '' : raw)
    .replace(/[０-９]/g, (c) => String.fromCharCode(c.charCodeAt(0) - 0xfee0))
    .replace(/[^0-9]/g, '');
}

/** 체크섬만 본다. 10자리가 아니면 false. */
export function isBizNoChecksumValid(raw: string | null | undefined): boolean {
  const s = normalizeBizNo(raw);
  if (s.length !== 10) return false;

  const W = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  const d: number[] = [];
  for (let i = 0; i < 10; i += 1) d.push(s.charCodeAt(i) - 48);

  let sum = 0;
  for (let j = 0; j < 9; j += 1) sum += d[j] * W[j];
  sum += Math.floor((d[8] * 5) / 10); // ★ 이 줄을 빼면 전부 틀린다

  return (10 - (sum % 10)) % 10 === d[9];
}

export type BizNoReason =
  | 'ok'
  | 'empty'
  | 'length'
  | 'repeat'
  | 'office'
  | 'unassigned'
  | 'corporate'
  | 'checksum';

export type BizNoResult = { ok: boolean; reason: BizNoReason; digits: string };

/**
 * 게이트용 최종 판정.
 * reason 은 로깅/문구 분기용이다. **사용자에게는 통일된 한 문장만 보여준다**
 * (어느 규칙에 걸렸는지 알려주면 추측 통과를 돕는 꼴이고, 위압적이기도 하다).
 */
export function checkPharmacyBizNo(raw: string | null | undefined): BizNoResult {
  const s = normalizeBizNo(raw);

  if (s.length === 0) return { ok: false, reason: 'empty', digits: s };
  if (s.length !== 10) return { ok: false, reason: 'length', digits: s };

  // 전부 같은 숫자 (0000000000 은 체크섬을 통과한다 - 실측 확인됨)
  if (/^(\d)\1{9}$/.test(s)) return { ok: false, reason: 'repeat', digits: s };

  // 앞 3자리 = 세무서 코드. 000~099 는 부여되지 않는다(추정이나 오탐 위험 ~0)
  if (s.charCodeAt(0) === 48) return { ok: false, reason: 'office', digits: s };

  // 가운데 2자리 = 개인/법인 구분코드
  const mid = parseInt(s.slice(3, 5), 10);
  if (mid === 0) return { ok: false, reason: 'unassigned', digits: s };
  if (mid >= 80 && mid <= 89) return { ok: false, reason: 'corporate', digits: s };

  if (!isBizNoChecksumValid(s)) return { ok: false, reason: 'checksum', digits: s };

  return { ok: true, reason: 'ok', digits: s };
}

/**
 * 표시용 포맷 (000-00-00000).
 * **입력 중에는 쓰지 마라** — 커서 점프·IME 간섭·스크린리더 재낭독을 유발한다.
 * 판정이 끝난 뒤 에코에만 쓴다.
 */
export function formatBizNo(raw: string | null | undefined): string {
  const s = normalizeBizNo(raw);
  if (s.length !== 10) return s;
  return `${s.slice(0, 3)}-${s.slice(3, 5)}-${s.slice(5)}`;
}
