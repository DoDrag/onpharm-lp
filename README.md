# OnPharm Landing Page (onpharm.kr)

온팜 공식 랜딩. **한 페이지 안에 2면**이 들어 있습니다.
첫 화면은 온전히 소비자용(면 A)이고, 면 B 는 **약국 확인 게이트를 통과해야** 열립니다.

| 면 | 대상 | 섹션 | 진입 |
|----|------|------|------|
| A | 소비자 | 9섹션 | 기본. onpharm.kr 을 열면 이것 |
| B | 파트너 약국 | 6섹션 | 헤더 우측 보조 링크 / 페이지 최하단 한 줄 → **게이트** |

> **상단 탭 2개(`role=tablist`) 구조는 제거됐습니다.** 탭은 "A 냐 B 냐 고르세요"라는
> 동급 선택 신호라서, 게이트를 걸어도 소비자의 호기심 클릭을 계속 유발합니다.
> 되살리지 마세요.

Next.js 14 (App Router) 정적 export → GitHub Pages 자동 배포.

---

## ★ 가장 중요한 것: 화면 내용은 여기서 안 고친다

랜딩의 마크업·CSS·카피는 **전부 생성기가 만듭니다.** 이 레포의 `app/generated/` 는
그 산출물을 받아 적은 자동 생성 파일입니다. 직접 고치면 다음 내보내기 때 덮어써집니다.

```
landing-page-generator-main/
  copy_a.json / copy_b.json          ← 문구는 여기서 고친다
        │
        ▼  python -X utf8 scripts/onpharm_build.py
  output/onpharm/embed/              ← 섹션 HTML · CSS · 모션 JS · 이미지
        │
        ▼  python -X utf8 scripts/export_nextjs.py --target "C:/Users/JUNGWC/Documents/Claude/OnPharm LP"
  OnPharm LP/
    app/generated/faces.ts               FACE_A_HTML / FACE_B_HTML
    app/generated/motion.ts              MOTION_JS  (window.__onpharmInitMotion 노출)
    app/generated/onpharm.generated.css  면 A + 면 B 스타일 (.op-page 스코프)
    public/onpharm/*.png                 이미지 소재
        │
        ▼  npm run build   (확인용. 실제 배포는 Actions 가 한다)
        ▼  git push main
  https://onpharm.kr
```

### 문구 한 줄 고치는 절차

```powershell
# 1. 생성기에서 문구 수정
#    landing-page-generator-main/copy_a.json  (또는 copy_b.json)

# 2. 생성기 빌드 → 내보내기
cd "C:\Users\JUNGWC\Documents\Claude\landing-page-generator-main"
python -X utf8 scripts\onpharm_build.py
python -X utf8 scripts\export_nextjs.py --target "C:\Users\JUNGWC\Documents\Claude\OnPharm LP"

# 3. 확인
cd "C:\Users\JUNGWC\Documents\Claude\OnPharm LP"
npm run dev      # http://localhost:3000
npm run build    # 정적 export 가 깨지지 않는지

# 4. 배포 (app/generated/ 도 반드시 함께 커밋한다)
git add -A
git commit -m "copy: ..."
git push
```

> `app/generated/` 는 **`.gitignore` 에 넣지 않습니다.** GitHub Actions 러너에는
> 생성기와 파이썬이 없어서 직접 만들지 못합니다. 커밋되어 있어야 빌드가 됩니다.

---

## 이 레포가 직접 관리하는 것 (앱 셸)

| 파일 | 역할 |
|------|------|
| `app/page.tsx` | 셸. 헤더/푸터 진입점 + 면 렌더 + 게이트 배선 + 해시 처리 |
| `app/components/PartnerGate.tsx` | 약국 확인 모달 (1문항). 셸 문구가 여기 있다 |
| `app/lib/bizno.ts` | 사업자등록번호 형식·체크섬 검증. 순수 함수, 부작용 없음 |
| `app/components/OnPharmFace.tsx` | 한 면을 그리고 모션 런타임을 붙인다 |
| `app/layout.tsx` | 메타데이터 · 파비콘 · Pretendard CDN |
| `app/globals.css` | `generated` CSS import + 셸/게이트 스타일 + Tailwind 충돌 보정 |

### 약국 확인 게이트

**목적은 보안이 아니라 마찰입니다.** 소비자가 우발적으로 파트너 면에 들어오는 것을
막는 것이고, 개발자도구를 여는 사람은 어차피 넘어옵니다. 진짜 검증은 신청 폼 접수 후
사람이 하는 단계입니다(약국명 + 주소 → 심평원 '병원·약국 찾기' 대조).

| 동작 | 처리 |
|---|---|
| 질문 | **1개뿐** — 사업자등록번호 10자리. 늘리지 말 것(필드 1개당 전환율 -4.1%) |
| 판정 | 클라이언트 즉시. 형식 + 구분코드(80~89 법인 배제) + 체크섬. 랜덤 숫자 약 92% 차단 |
| 입력값 | **전송·저장하지 않는다.** 통과 후 면 B 신청 폼 prefill 용으로 React state 에만 |
| 기억 | `sessionStorage['op_partner_ok'] = '1'` (플래그만). 번호는 저장 안 함. `localStorage` 금지 |
| 실패 | 인라인 문구 + **입력값 유지**. 3회 실패 시 출구를 주 버튼으로 승격. **잠금(lockout) 없음** |
| 출구 | "약국이 아니신가요? 상담받기로 →" → 면 A `#signup` 으로 이동 / 카카오톡 문의 링크 |
| 닫기 | ESC · 배경 클릭 · `[×]` — 면 A 유지, 스크롤 보존, 포커스는 **연 링크로 복귀** |
| 접근성 | `role=dialog` `aria-modal` `aria-labelledby`, 첫 입력 포커스, 포커스 트랩, 배경 `inert` |
| 에러 색 | **빨강을 새로 들이지 않는다**(금칙 1). 오렌지 테두리 + 차콜 텍스트 |

### 면 마운트 규칙 (바꾸지 말 것)

- **면 B 는 게이트를 통과하기 전에는 마운트하지 않는다.** 예전처럼 둘 다 마운트하고
  `hidden` 으로만 감추면, 통과하지 않아도 면 B DOM 이 살아 있어 Ctrl+F·스크린리더로 읽힌다.
- 통과한 뒤에는 계속 마운트해 두고 `hidden` + `aria-hidden` 토글로만 재사용한다(재초기화 비용).
- 숨어 있는 동안 캐러셀 자동넘김을 멈춘다. 이게 없으면 `display:none` 상태에서
  슬라이드 폭이 0 으로 측정되어 "가로 배치 아님"으로 영구 캐시되고,
  나중에 면을 열어도 트랙이 움직이지 않는다.
- 다시 보일 때 `window.__onpharmInitMotion(faceEl)` 로 재초기화한다.
- 전환 시 최상단으로 즉시 이동한다(`behavior: 'instant'`.
  `'auto'` 는 CSS 의 `scroll-behavior: smooth` 를 따라가서 수천 px 를 굴러간다).

> 정직하게 적어 둡니다: 정적 export 라 `FACE_B_HTML` 문자열은 **JS 번들 안에 그대로**
> 있습니다. 소스 보기로는 여전히 읽힙니다. 이건 못 막습니다.

### 무JS 폴백

JS 가 꺼지면 모달이 뜰 수 없습니다. 그래서 면 B 를 `<noscript>` 안에 **실물로** 넣어
두고, 진입 링크(`<a href="#partner">`)가 거기로 내려가게 했습니다. 백지도, 먹통 링크도
없습니다. JS 가 켜져 있으면 HTML 파서가 `<noscript>` 안을 **raw text** 로 다루므로
DOM 에 요소로 들어오지 않습니다 → 게이트 전 노출도 없고 `id` 중복도 없습니다.
(`suppressHydrationWarning` 이 붙어 있는 이유가 이것입니다. 실제 불일치가 아니라
스크립팅이 켜진 브라우저에서 `noscript.innerHTML` 이 이스케이프된 텍스트이기 때문입니다.
`next dev` 로 실측해 하이드레이션 경고 0 건을 확인했습니다.)

### 하이드레이션 규칙

정적 export 입니다. **서버 렌더와 첫 클라이언트 렌더가 반드시 같아야 합니다.**
`face` / `gateOpen` / `faceBReady` 는 전부 상수 초기값(`'a'` / `false` / `false`)으로
시작하고, **해시와 `sessionStorage` 는 마운트 후 effect 에서만 읽습니다.**
둘 중 하나라도 `useState` 초기값으로 읽으면 그 자리에서 불일치가 납니다.

### 딥링크

| URL | 결과 |
|-----|------|
| `onpharm.kr/` | 면 A |
| `onpharm.kr/#partner` | 게이트 모달 (면 A 를 깔아 둔 채). 통과 시 면 B |
| `onpharm.kr/#signup` | 면 A 의 상담 신청 섹션 |
| `onpharm.kr/#b06_apply` | **게이트를 먼저 거친다.** 통과 시 면 B 의 파트너 신청 섹션 |

같은 세션에서 이미 통과했다면 `#partner` / `#b06_apply` 는 모달 없이 바로 열립니다.

---

## 브랜드 (BI Manual 2026.08 정본)

| 토큰 | HEX | 용도 |
|------|-----|------|
| 오렌지 | `#FF6900` | 1차 CTA · 강조 · 게이트 포커스링 |
| 오렌지 틴트 | `#FEF3E9` | 배경 강조 |
| 차콜 | `#333333` | 제목 · 어두운 섹션 |
| 그레이 | `#75767A` | 보조 텍스트 · 헤더 보조 링크 |
| 네이비 | `#133379` | **면 B 히어로에서만** |
| 라인 | `#EAEAEA` | 구분선 |

**금칙**

- 파랑 · 초록 · 민트 금지 (구 토큰 `#0F6E56` 은 전부 제거됨)
- 구 오렌지 `#F57820` 금지 (정본은 `#FF6900`)
- 자간 0. 제목에 음수 자간을 걸지 않는다
- 실적이 없으므로 **후기·성과 수치를 쓰지 않는다** (구 `Testimonials` 아카이브 처리)

폰트는 Pretendard Variable, `app/layout.tsx` 의 jsDelivr CDN 으로 로드합니다.

> `tailwind.config.ts` 의 색 토큰(`orange: #F57820`, `green`)은 아카이브된 v1
> 컴포넌트가 쓰던 **구 값**입니다. 현재 화면에는 쓰이지 않지만 정리 대상입니다.

---

## 로컬 개발

Node.js 20 이상.

```powershell
npm install     # 첫 1회
npm run dev     # http://localhost:3000
npm run build   # 정적 export → out/
npx tsc --noEmit
```

## 배포

`main` 에 푸시하면 `.github/workflows/deploy.yml` 이 `next build` → `out/` →
GitHub Pages 로 올립니다. 커스텀 도메인은 `public/CNAME` (`onpharm.kr`).

## 구조

```
OnPharm LP/
├── app/
│   ├── layout.tsx
│   ├── page.tsx                      # 셸: 진입점 + 면 렌더 + 게이트 배선
│   ├── globals.css
│   ├── lib/
│   │   └── bizno.ts                  # 사업자등록번호 형식·체크섬
│   ├── generated/                    # ★ 자동 생성물. 직접 고치지 말 것
│   │   ├── faces.ts
│   │   ├── motion.ts
│   │   └── onpharm.generated.css
│   └── components/
│       ├── OnPharmFace.tsx
│       ├── PartnerGate.tsx           # 약국 확인 모달
│       └── _archive/                 # v1 컴포넌트 (사용 안 함, 삭제 안 함)
├── public/
│   ├── CNAME                         # onpharm.kr
│   └── onpharm/                      # ★ 자동 복사. 이미지 소재
├── .github/workflows/deploy.yml
├── next.config.mjs                   # output:'export', trailingSlash:true
├── tailwind.config.ts
└── package.json
```

## 알려진 주의 사항

- **★ 파트너 폼의 약국 식별 필드 3개가 아직 수신처에 연결되지 않았습니다.**
  `사업자등록번호 / 약국 주소 / 요양기관기호` 는 화면에 나오고 입력도 받지만,
  `data/onpharm_endpoints.json > partner_form.entries` 의 `biz_no` / `address` / `ykiho`
  가 빈 문자열이라 **구글폼이 그 세 값을 조용히 버립니다**(나머지 항목은 정상 접수).
  접수 후 확인의 1차 근거가 약국명 + 주소이므로, 생성기의
  `scripts/setup_forms.md` **F 절**을 따라 `entry.숫자` 를 채우고 다시 내보내세요.
- **폼 수신 엔드포인트.** 폼 `action` 이 비어 있으면 모션 런타임이 제출을 막고
  콘솔 경고만 남깁니다(화면 문구는 바뀌지 않습니다). 현재 두 폼 모두 연결돼 있습니다.
- **히어로 영상.** `public/onpharm/hero_a.mp4` / `hero_b.mp4` 를 두면 자동으로
  잡힙니다. 없으면 스틸 크로스페이드만 돕니다(현재 상태).
- **OG 이미지**가 `public/onpharm/a01_hero.png` (약 2.2MB) 를 가리킵니다.
  공유 미리보기 전용 경량 이미지를 따로 만드는 편이 낫습니다.
- **면 B 의 스크롤 리빌**은 첫 진입 때 이미 다 드러난 상태로 열립니다.
  숨어 있는 동안 런타임의 안전망이 전부 `is-in` 처리하기 때문입니다.
  콘텐츠 노출에는 문제가 없고 등장 애니메이션만 생략됩니다.

## 아카이브

- `app/components/_archive/` — v1 React 컴포넌트. `README.md` 에 되살릴 때
  고쳐야 할 것(금칙색·가상 후기·목표 수치)이 적혀 있습니다.
- `_archive_v1/index.html` — 2026-05-13 단일 HTML 1차 버전.
- `_variant_reference.html` — Variant 원본 디자인 참고용.
- `copy.md` — 회원 모집 안전 카피 v2. 현재 카피의 정본은 생성기의 `copy_*.json`.
