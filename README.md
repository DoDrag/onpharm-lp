# OnPharm Landing Page

한약사 약국 전용 공동구매·PB 플랫폼 **OnPharm**의 파운더 약국 100호 모집용 랜딩페이지.

## 구조

- `index.html` — 단일 파일 정적 LP (Pretendard, 인라인 CSS/JS)
- 의존성 0개. GitHub Pages 그대로 배포 가능.

## 섹션 구성

1. **Hero** — 입고가 30% 절감 핵심 메시지 + 파운더 가입 CTA
2. **Problem** — 한약사 약국의 3가지 구조적 문제
3. **Benefits** — OnPharm의 4가지 핵심 가치
4. **Products** — 한약사 약국 전용 6대 카테고리
5. **Plans** — 면역/여성/시니어/다이어트 4종 한방 플랜
6. **Process** — 가입부터 발주까지 4단계
7. **FAQ** — 4쌍 질의응답 (아코디언)
8. **Signup** — 파운더 가입 신청 폼
9. **Footer** — 약사법·건강기능식품법 디스클레이머

## 가입 폼 연결 (배포 전 1회)

`index.html` 의 `FORM_ENDPOINT` 상수를 둘 중 하나로 교체:

```js
// 옵션 A: Formspree (formspree.io 에서 무료 양식 생성)
const FORM_ENDPOINT = 'https://formspree.io/f/xxxxxxxx';

// 옵션 B: 비어 두면 mailto:hello@onpharm.kr 폴백으로 동작
const FORM_ENDPOINT = '';
```

이메일 주소·카카오톡 채널 URL은 `signup` 섹션 하단 `alt-link` 두 곳에서 수정.

## 배포 (GitHub Pages)

1. github.com/new 에서 `onpharm-lp` (또는 원하는 이름) 레포 생성 — **Public** 으로 (무료 Pages 조건)
2. 본 폴더에서 `push_github.bat` 더블클릭, 레포 URL 입력 → 자동 푸시
3. github.com → Settings → Pages → Source: `Deploy from a branch` → Branch: `main` / `/ (root)` → Save
4. 1~2분 뒤 `https://dodrag.github.io/onpharm-lp/` 에서 라이브 확인

## 도메인 연결 (옵션)

`onpharm.co.kr` 도메인 확보 후:

1. 도메인 등록사 DNS → CNAME `www` → `dodrag.github.io`
2. github.com → Settings → Pages → Custom domain 에 `www.onpharm.co.kr` 입력
3. `Enforce HTTPS` 체크

## 검증된 환경

- 데스크톱 1280px / 모바일 375px (Chromium 미리보기)
- Pretendard CDN, SVG 아이콘, 다크 네비 + 화이트 본문 + 오렌지 CTA
- 색상: `#F57820` (오렌지) · `#0F6E56` (그린) · `#1A1A2E` (네이비)
