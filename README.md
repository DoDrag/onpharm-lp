# OnPharm Landing Page

한약사 약국 전용 큐레이션·직거래 공급·디지털 고객 확보 플랫폼 **OnPharm**의 공식 LP. Next.js 14 (App Router) + Tailwind CSS 3 + TypeScript + 정적 export로 빌드 → GitHub Pages 자동 배포.

## 스택

| 영역 | 사용 기술 |
|------|----------|
| 프레임워크 | Next.js 14.2 (App Router, static export) |
| 스타일 | Tailwind CSS 3.4 + 커스텀 디자인 토큰 |
| 언어 | TypeScript 5 |
| 폰트 | Pretendard (CDN) |
| 이미지 | Unsplash (외부 URL, `images: { unoptimized: true }`) |
| 배포 | GitHub Pages + GitHub Actions |

## 디자인 토큰 (Tailwind 색)

| 토큰 | HEX | 용도 |
|------|-----|------|
| `navy` | `#1A1A2E` | 헤드라인 / 어두운 카드 |
| `green` | `#0F6E56` | 1차 CTA / 강조 / 로고 "On" |
| `orange` | `#F57820` | 강조 도트 / 후기 카드 / 로고 "Pharm" |
| `green-50` | `#E8F3F1` | 민트 배지 배경 |
| `orange-100` | `#FFEFE3` | 오렌지 배지 배경 |
| `bone` | `#F9F8F6` | 섹션 배경 (라운드 64px) |
| `ink` | `#2D2D2D` | 본문 텍스트 |
| `ink-sub` | `#666666` | 보조 텍스트 |

## 구조

```
OnPharm LP/
├── app/
│   ├── layout.tsx         # 루트 + Pretendard CDN
│   ├── page.tsx           # 메인 컴포지션
│   ├── globals.css        # Tailwind 디렉티브 + 캡슐 visual
│   └── components/
│       ├── Nav.tsx        # 스티키 헤더 + 모바일 햄버거
│       ├── Hero.tsx       # 메인 + 캡슐 visual + 통계
│       ├── Problem.tsx    # 3-card grid (bone bg)
│       ├── Solutions.tsx  # 3-card grid with imgs
│       ├── Testimonials.tsx  # navy/orange/navy 교대
│       ├── FinalCTA.tsx   # 그린 박스 + 메일 폼
│       ├── Footer.tsx     # 회사 정보 + 디스클레이머
│       └── Logo.tsx       # On(green) + Pharm(orange)
├── public/                 # 정적 자산
├── .github/workflows/deploy.yml  # GH Pages 자동 배포
├── next.config.mjs         # static export + basePath
├── tailwind.config.ts      # 디자인 토큰
├── tsconfig.json
└── package.json
```

## 로컬 개발

Node.js 20 이상 필요 ([nodejs.org](https://nodejs.org) 에서 LTS 설치).

```powershell
npm install     # 첫 1회
npm run dev     # http://localhost:3000
```

## 배포 (GitHub Pages 자동)

1. github.com/new → 레포명 `onpharm-lp` → **Public** 선택 → Create
2. Settings → Pages → **Source: GitHub Actions**
3. 본 폴더에서 `push_github.bat` 더블클릭, 레포 URL 입력 → 자동 푸시
4. Actions 탭에서 빌드 완료(약 2분) 확인
5. `https://dodrag.github.io/onpharm-lp/` 에서 라이브 확인

> 레포명을 다르게 쓰면 `.github/workflows/deploy.yml` 의 `GH_PAGES_REPO` 도 동일하게 맞추세요. Actions가 자동으로 `${{ github.event.repository.name }}` 으로 잡아 줍니다.

## 커스텀 도메인 (옵션)

`onpharm.co.kr` 확보 후:

1. `public/CNAME` 파일에 도메인 1줄 작성: `www.onpharm.co.kr`
2. 도메인 등록사 DNS → CNAME `www` → `dodrag.github.io`
3. GitHub Settings → Pages → Custom domain 입력 + Enforce HTTPS 체크

이 경우 `next.config.mjs` 의 `basePath` 는 빈 문자열로 두세요.

## 카피 작업 흐름

- `copy.md` — 회원 모집 안전 카피 v2 (Variant 디자인과 톤은 일부 다름)
- 본 LP 의 현 카피는 Variant 디자인 톤을 따르되, 후기 정량 수치 등 법적 안전선 항목은 소프트화 적용
- 카피 교체 필요 시 각 `components/*.tsx` 의 상단 데이터 배열만 수정

## 잘 알려진 주의 사항

- Hero/Solutions/Testimonials 이미지는 Unsplash 외부 URL. 라이센스상 정적 LP 사용은 허용 (Unsplash License). 도메인 정책상 차단되는 환경이면 `public/images/` 로 받아서 교체 권장.
- 통계 카드(500+ / 1.2k / 98%) 는 **목표 수치**입니다. 실제 운영 데이터로 교체 전까지 사용 시 사실 호도 위험 — 운영 시작 후 1주일 안에 교체 권장.
- 후기 3건은 **가상 시나리오**. 푸터에 명시. 실제 약국 후기로 바꾸려면 약사법 제68조(보증광고) 검토 필수.

## 아카이브

- `_archive_v1/index.html` — 2026-05-13 작성된 1차 단일 HTML 버전. 참고용.
- `_variant_reference.html` — Variant 원본 디자인 다운로드. 개발 시 참고.
