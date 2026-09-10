# OnPharm Landing Page (onpharm.kr)

온팜 공식 랜딩. **한 페이지 안에 2면**이 들어 있고 상단 탭으로 전환합니다.

| 면 | 탭 라벨 | 대상 | 섹션 |
|----|---------|------|------|
| A | 상담받기 (기본) | 소비자 | 9섹션 |
| B | 약국 파트너 | 파트너 약국 | 6섹션 |

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
| `app/page.tsx` | 면 전환 탭 + 두 면 렌더. 해시(`#partner`)로도 면이 열린다 |
| `app/components/OnPharmFace.tsx` | 한 면을 그리고 모션 런타임을 붙인다 |
| `app/layout.tsx` | 메타데이터 · 파비콘 · Pretendard CDN |
| `app/globals.css` | `generated` CSS import + 탭 바 스타일 + Tailwind 충돌 보정 |

### 면 전환 동작

- 비활성 면은 **언마운트하지 않고** `hidden` + `aria-hidden` 으로 감춘다.
- 숨어 있는 동안 캐러셀 자동넘김을 멈춘다. 이게 없으면 `display:none` 상태에서
  슬라이드 폭이 0 으로 측정되어 "가로 배치 아님"으로 영구 캐시되고,
  나중에 면을 열어도 트랙이 움직이지 않는다.
- 다시 보일 때 `window.__onpharmInitMotion(faceEl)` 로 재초기화한다.
- 전환 시 최상단으로 즉시 이동한다(`behavior: 'instant'`.
  `'auto'` 는 CSS 의 `scroll-behavior: smooth` 를 따라가서 수천 px 를 굴러간다).

### 딥링크

| URL | 결과 |
|-----|------|
| `onpharm.kr/` | 면 A |
| `onpharm.kr/#partner` | 면 B |
| `onpharm.kr/#signup` | 면 A 의 상담 신청 섹션 |
| `onpharm.kr/#b06_apply` | 면 B 의 파트너 신청 섹션 |

---

## 브랜드 (BI Manual 2026.08 정본)

| 토큰 | HEX | 용도 |
|------|-----|------|
| 오렌지 | `#FF6900` | 1차 CTA · 강조 · 활성 탭 |
| 오렌지 틴트 | `#FEF3E9` | 배경 강조 · 탭 hover |
| 차콜 | `#333333` | 제목 · 어두운 섹션 |
| 그레이 | `#75767A` | 보조 텍스트 · 비활성 탭 |
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
│   ├── page.tsx                      # 면 전환 탭
│   ├── globals.css
│   ├── generated/                    # ★ 자동 생성물. 직접 고치지 말 것
│   │   ├── faces.ts
│   │   ├── motion.ts
│   │   └── onpharm.generated.css
│   └── components/
│       ├── OnPharmFace.tsx
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

- **폼 수신 엔드포인트.** 면 A/B 의 신청 폼은 `action=""` 입니다. 비어 있으면
  모션 런타임이 제출을 막고 콘솔 경고만 남깁니다. 실제 접수를 받으려면
  생성기 쪽에서 폼 action 을 채워 다시 내보내야 합니다.
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
