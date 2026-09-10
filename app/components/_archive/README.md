# _archive — v1 컴포넌트 (사용 안 함)

2026-09-10, onpharm.kr 을 생성기(landing-page-generator) 산출물 2면 구성으로
바꾸면서 여기로 옮겼습니다. **삭제하지 않았습니다.** 현재 화면에서는 아무것도
렌더되지 않습니다.

| 파일 | 원래 역할 |
|------|-----------|
| `Nav.tsx` | 스티키 헤더 + 모바일 햄버거 |
| `Hero.tsx` | 히어로 + 캡슐 visual + 통계 카드 |
| `Problem.tsx` | 3-card grid |
| `Solutions.tsx` | 3-card grid (Unsplash 이미지) |
| `Testimonials.tsx` | 후기 3건 |
| `FinalCTA.tsx` | 클로징 CTA + 메일 폼 |
| `Footer.tsx` | 회사 정보 + 디스클레이머 |
| `Logo.tsx` | On(초록) + Pharm(오렌지) 로고 |

## 되살리기 전에 반드시 고쳐야 할 것

- **`Testimonials.tsx` 는 되살리지 마세요.** 실적이 없어 후기를 쓸 수 없습니다.
  현재 내용은 가상 시나리오입니다.
- **`Logo.tsx` / `Hero.tsx` 의 통계 카드** — 초록(`#0F6E56`)은 BI 금칙색이고,
  통계 수치는 실측이 아닌 목표치입니다.
- `tailwind.config.ts` 의 `orange` 는 구 오렌지 `#F57820` 입니다.
  BI 정본은 `#FF6900` 입니다.

## Next.js / TypeScript 상 위치

`_` 로 시작하는 폴더는 App Router 의 private folder 규칙에 따라 라우팅에서
제외됩니다. 다만 `tsconfig.json` 의 `include` 에는 걸리므로 타입은 계속 검사됩니다.
타입 오류가 나면 `app/` 밖으로 폴더째 옮기세요.
