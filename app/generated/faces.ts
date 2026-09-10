// =============================================================
// 이 파일은 scripts/export_nextjs.py 가 생성합니다. 직접 고치지 마세요.
// 고칠 곳은 생성기의 copy_*.json 입니다.
//   copy_a.json -> onpharm_build.py -> export_nextjs.py -> 이 파일
// =============================================================

// 면 A · 소비자 (9섹션). <div class="op-page"> 안에 넣어야 스타일이 먹습니다.
export const FACE_A_HTML: string = `<section class="op-sec fa-hero-photo" data-section="a01_hero">
  <div class="fa-hero-bg">
    <div class="op-heromedia" data-motion="crossfade" data-count="3">
      <video class="op-heromedia__video" autoplay muted loop playsinline preload="auto"
             aria-hidden="true" tabindex="-1"></video>
      <div class="op-heromedia__slides">
        <img class="op-heromedia__slide" src="/onpharm/a01_hero.jpg" alt="" width="1536" height="864" style="--i:0">
        <img class="op-heromedia__slide" src="/onpharm/a01_hero_2.jpg" alt="" width="1536" height="864" style="--i:1">
        <img class="op-heromedia__slide" src="/onpharm/a01_hero_3.jpg" alt="" width="1536" height="864" style="--i:2">
      </div>
    </div>
    <span class="op-veil op-veil--side"></span>
  </div>
  <div class="op-inner op-veil-content">

    <div class="op-row op-row--between fa-topbar">
      <span class="op-logo"><span class="op-logotype op-logotype--sm" role="img" aria-label="온팜"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/><path d="M239.89 17.19L235.32 17.19L235.32 13.64C235.32 10.32 232.63 7.63 229.31 7.63L239.89 7.63L239.89 1.79L206.88 1.79L206.88 7.63L211.61 7.63L211.61 17.19L206.88 17.19L206.88 23.04L239.89 23.04L239.89 17.19M225.82 17.19L221.1 17.19L221.1 13.64C221.1 10.32 218.41 7.63 215.09 7.63L225.82 7.63L225.82 17.19 Z"/><path d="M211.51 44.55C211.51 46.21 212.86 47.56 214.52 47.56L254.03 47.56L254.03 27.05L211.51 27.05L211.51 44.55M221.01 32.89H244.54V41.71H221.01Z Z"/><path d="M254.03 1.79L244.54 1.79L244.54 23.04L254.03 23.04L254.03 14.22L259.43 14.22L259.43 8.37L254.03 8.37L254.03 1.79 Z"/><path d="M168.96 35.91L159.46 35.91L159.46 44.55C159.46 46.21 160.81 47.56 162.47 47.56L201.98 47.56L201.98 41.71L168.96 41.71L168.96 35.91 Z"/><path d="M191.35 23.04C197.22 23.04 201.98 18.28 201.98 12.41C201.98 6.54 197.22 1.79 191.35 1.79L170.09 1.79C164.22 1.79 159.46 6.54 159.46 12.41C159.46 18.28 164.22 23.04 170.09 23.04L175.97 23.04L175.97 27.05L159.46 27.05L159.46 32.89L201.98 32.89L201.98 27.05L185.47 27.05L185.47 23.04L191.35 23.04M173.74 17.19C171.1 17.19 168.96 15.05 168.96 12.41C168.96 9.77 171.1 7.63 173.74 7.63L187.71 7.63C190.35 7.63 192.49 9.77 192.49 12.41C192.49 15.05 190.35 17.19 187.71 17.19L173.74 17.19 Z"/><path d="M360.63 1.79L321.12 1.79L321.12 7.63L354.14 7.63L354.14 17.63L363.63 17.63L363.63 4.79C363.63 3.13 362.29 1.79 360.63 1.79 Z"/><path d="M321.12 21.12L321.12 26.97L337.63 26.97L337.63 32.8L321.12 32.8L321.12 38.65L354.14 38.65L354.14 47.56L363.63 47.56L363.63 35.81C363.63 34.15 362.29 32.8 360.63 32.8L347.12 32.8L347.12 26.97L363.63 26.97L363.63 21.12L321.12 21.12 Z"/><path d="M308.23 30.16L268.72 30.16L268.72 36L301.74 36L301.74 47.56L311.23 47.56L311.23 33.16C311.23 31.5 309.89 30.16 308.23 30.16 Z"/><path d="M284.91 26.15C291.64 26.15 297.09 20.7 297.09 13.97C297.09 7.24 291.64 1.79 284.91 1.79L276.1 1.79C269.37 1.79 263.91 7.24 263.91 13.97C263.91 20.7 269.37 26.15 276.1 26.15L284.91 26.15M273.4 13.97C273.4 10.47 276.24 7.63 279.74 7.63L281.26 7.63C284.76 7.63 287.6 10.47 287.6 13.97C287.6 17.47 284.76 20.31 281.26 20.31L279.74 20.31C276.24 20.31 273.4 17.47 273.4 13.97 Z"/><path d="M311.23 1.79L301.74 1.79L301.74 26.15L311.23 26.15L311.23 21.56L316.63 21.56L316.63 15.71L311.23 15.71L311.23 12.23L316.63 12.23L316.63 6.38L311.23 6.38L311.23 1.79 Z"/></g></svg></span></span>
      <span class="op-caption">지금은 사전 등록만 받고 있어요</span>
    </div>

    <div class="fa-hero-grid">
      <div>
        <span class="op-eyebrow">들르면, 건강이 켜집니다</span>
        <h1 class="op-h1">영양제, 검색만 하다<br><span class="op-accent">한 달</span>이 지났다면</h1>
        <p class="op-lead op-mt-24 op-measure">장바구니에만 담아 두고 결국 못 고르셨다면, 고민 한 줄만 남겨 주세요. 동네 조합 약국의 전담 한약사가 직접 읽고 답해드려요.</p>

        <div class="fa-hero-cta op-mt-40">
          <a class="op-btn op-btn--lg" href="#signup">1분 상담 신청</a>          <a class="op-btn op-btn--ghost op-btn--kakao op-btn--lg"
   href="https://pf.kakao.com/_wxdxhrX/chat" target="_blank" rel="noopener noreferrer">
  <svg class="op-btn__ico" viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"
       fill="none" stroke="currentColor" stroke-width="1.7"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4.3c-4.4 0-8 2.8-8 6.2 0 2.2 1.5 4.1 3.7 5.2l-.9 3.2c-.1.4.3.7.6.5l3.6-2.2c.3 0 .7.1 1 .1 4.4 0 8-2.8 8-6.2s-3.6-6.2-8-6.2z"/>
  </svg>
  <span>카카오톡으로 상담하기</span>
</a>
        </div><div class="op-row op-row--wrap op-mt-24">
          <span class="op-chip">상담 무료</span>
          <a class="op-chip fa-chip-cta" href="#signup" data-scroll-to="#signup">쿠폰받기</a>
          <span class="op-chip">동네 약국 픽업</span>
        </div>
      </div>

      <div class="fa-hero-phone">
        <div class="fa-phone">
          <div class="fa-phone__top"><span class="fa-phone__notch"></span></div>
          <div class="fa-phone__head">
            <span class="op-mark op-mark--sm" aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/></g></svg></span>
            <span class="fa-phone__title">온팜 상담<em class="fa-phone__sub">전담 한약사와 1:1</em></span>
          </div>
          <div class="fa-phone__screen op-chat" data-chat-seq>
            <div class="fa-bub op-chat__bubble fa-bub--me" style="--i:0">
              <span class="fa-bub__who">나</span>요즘 오후만 되면 축 처져요. 영양제는 많은데 뭐부터 먹어야 할지 모르겠어요.<span class="fa-bub__time">오후 9:12</span>
            </div>
            <div class="fa-bub op-chat__bubble fa-bub--pro" style="--i:1">
              <span class="fa-bub__who">전담 한약사</span>안녕하세요, 온팜에서 담당하게 된 한약사입니다. 하루 식사 리듬부터 같이 볼게요. 지금 챙겨 드시는 게 있으면 알려 주세요.<span class="fa-bub__time">오후 9:40</span>
            </div>
            <div class="fa-bub op-chat__bubble fa-bub--pro" style="--i:2">
              <span class="fa-bub__who">온팜</span>픽업 쿠폰이 발급됐어요. 연수구 참여 약국에서 6일 카드를 받아 가세요.<span class="fa-bub__time">오후 9:41</span>
            </div>
            <div class="fa-bub op-chat__bubble fa-bub--pro" style="--i:3">
              <span class="fa-bub__who">전담 한약사</span>6일치 다 드셨죠? 이번 주는 어땠어요? 이어서 볼지 같이 정해요.<span class="fa-bub__time">6일 뒤</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</section>

<section class="op-sec" data-section="a02_concerns" data-concern-picker data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">고민 고르기</span>
      <h2 class="op-h2">요즘 뭐가 제일 신경 쓰이세요?</h2>
      <p class="op-lead op-mt-16 op-measure--center">하나만 골라 주셔도 괜찮아요. 전담 한약사가 거기서부터 같이 봅니다.</p>
    </div>

    <div class="op-grid-4 fa-concerns op-mt-48" role="group" aria-label="고민 선택">
      <button type="button" class="op-card op-card--pad fa-concern"
              data-concern="fatigue"
              aria-pressed="true"              aria-controls="a02-panel-fatigue">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <rect x="2.6" y="7.4" width="15" height="9.2" rx="3"/>
  <path d="M20.4 11v2"/>
  <rect x="5.2" y="9.9" width="4" height="4.2" rx="1.3" fill="currentColor" stroke="none"/>
</svg></span>
        <span class="op-h3 fa-concern__label">피로</span>
        <span class="op-caption fa-concern__desc">오후만 되면 축 처져요</span>
        <span class="op-chip op-chip--on fa-concern__chip">선택됨</span>
      </button>
      <button type="button" class="op-card op-card--pad fa-concern"
              data-concern="gut"
              aria-pressed="false"              aria-controls="a02-panel-gut">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M7.2 9.3c1.6-2 2.9-2 4.4 0s2.8 2 4.4 0"/>
  <path d="M7.2 14.1c1.6-2 2.9-2 4.4 0s2.8 2 4.4 0"/>
</svg></span>
        <span class="op-h3 fa-concern__label">장 컨디션</span>
        <span class="op-caption fa-concern__desc">매일이 들쭉날쭉해요</span>
        <span class="op-chip op-chip--on fa-concern__chip">선택됨</span>
      </button>
      <button type="button" class="op-card op-card--pad fa-concern"
              data-concern="sleep"
              aria-pressed="false"              aria-controls="a02-panel-sleep">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M20 14.4A8.6 8.6 0 0 1 9.6 4 8.6 8.6 0 1 0 20 14.4z"/>
</svg></span>
        <span class="op-h3 fa-concern__label">잠</span>
        <span class="op-caption fa-concern__desc">누워도 한참 뒤척여요</span>
        <span class="op-chip op-chip--on fa-concern__chip">선택됨</span>
      </button>
      <button type="button" class="op-card op-card--pad fa-concern"
              data-concern="skin"
              aria-pressed="false"              aria-controls="a02-panel-skin">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3.4c3.5 4 5.4 6.4 5.4 8.9a5.4 5.4 0 0 1-10.8 0c0-2.5 1.9-4.9 5.4-8.9z"/>
  <path d="M9.6 13.4a2.6 2.6 0 0 0 2.6 2.6"/>
</svg></span>
        <span class="op-h3 fa-concern__label">피부</span>
        <span class="op-caption fa-concern__desc">푸석한 느낌이 오래가요</span>
        <span class="op-chip op-chip--on fa-concern__chip">선택됨</span>
      </button>
      <button type="button" class="op-card op-card--pad fa-concern"
              data-concern="women"
              aria-pressed="false"              aria-controls="a02-panel-women">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="8.6" r="4.6"/>
  <path d="M12 13.2V21"/>
  <path d="M9 17.9h6"/>
</svg></span>
        <span class="op-h3 fa-concern__label">여성 컨디션</span>
        <span class="op-caption fa-concern__desc">달마다 차이가 커요</span>
        <span class="op-chip op-chip--on fa-concern__chip">선택됨</span>
      </button>
      <button type="button" class="op-card op-card--pad fa-concern"
              data-concern="eye"
              aria-pressed="false"              aria-controls="a02-panel-eye">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M2.6 12S6.2 6.4 12 6.4 21.4 12 21.4 12 17.8 17.6 12 17.6 2.6 12 2.6 12z"/>
  <circle cx="12" cy="12" r="2.6"/>
</svg></span>
        <span class="op-h3 fa-concern__label">눈</span>
        <span class="op-caption fa-concern__desc">화면을 오래 보면 뻑뻑해요</span>
        <span class="op-chip op-chip--on fa-concern__chip">선택됨</span>
      </button>
      <button type="button" class="op-card op-card--pad fa-concern"
              data-concern="immune"
              aria-pressed="false"              aria-controls="a02-panel-immune">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M12 3.2l7 2.8v5.2c0 4.3-2.9 7.5-7 8.8-4.1-1.3-7-4.5-7-8.8V6z"/>
  <path d="M9.4 12.1l1.9 1.9 3.4-3.6"/>
</svg></span>
        <span class="op-h3 fa-concern__label">면역</span>
        <span class="op-caption fa-concern__desc">환절기마다 힘이 빠져요</span>
        <span class="op-chip op-chip--on fa-concern__chip">선택됨</span>
      </button>
      <button type="button" class="op-card op-card--pad fa-concern fa-concern--go"
              data-concern="unsure"
              data-scroll-to="#signup">
        <span class="fa-concern__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M9.6 9.5a2.5 2.5 0 1 1 3.3 2.9c-.7.3-1.1.9-1.1 1.6v.4"/>
  <path d="M11.9 17.2h.1"/>
</svg></span>
        <span class="op-h3 fa-concern__label">뭐부터일지 모르겠어요</span>
        <span class="op-caption fa-concern__desc">고르는 것부터 어려워요</span>
        <span class="fa-concern__go">사전 등록으로 이동</span>
      </button>
    </div>

    <div class="fa-suggest op-mt-40" data-suggest>
      <p class="fa-suggest__lead op-center">고민을 고르면, 전담 한약사와 상담에서 자주 같이 살펴보는 성분을 이름만 보여드려요.</p>
      <div class="fa-suggest__panels">
        <div class="fa-suggest__panel is-on"
             id="a02-panel-fatigue" data-for="fatigue"
             role="group" aria-label="피로">
          <p class="fa-suggest__title"><span class="fa-suggest__for">피로</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
          <div class="fa-suggest__chips">
            <span class="op-chip fa-ing">비타민 C</span>
            <span class="op-chip fa-ing">비타민 B군</span>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-gut" data-for="gut"
             role="group" aria-label="장 컨디션">
          <p class="fa-suggest__title"><span class="fa-suggest__for">장 컨디션</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
          <div class="fa-suggest__chips">
            <span class="op-chip fa-ing">프로바이오틱스</span>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-sleep" data-for="sleep"
             role="group" aria-label="잠">
          <p class="fa-suggest__title"><span class="fa-suggest__for">잠</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
          <div class="fa-suggest__chips">
            <span class="op-chip fa-ing">테아닌</span>
            <span class="op-chip fa-ing">락티움</span>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-skin" data-for="skin"
             role="group" aria-label="피부">
          <p class="fa-suggest__title"><span class="fa-suggest__for">피부</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
          <div class="fa-suggest__chips">
            <span class="op-chip fa-ing">콜라겐</span>
            <span class="op-chip fa-ing">글루타치온</span>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-women" data-for="women"
             role="group" aria-label="여성 컨디션">
          <p class="fa-suggest__title"><span class="fa-suggest__for">여성 컨디션</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
          <div class="fa-suggest__chips">
            <span class="op-chip fa-ing">보라지유</span>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-eye" data-for="eye"
             role="group" aria-label="눈">
          <p class="fa-suggest__title"><span class="fa-suggest__for">눈</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
          <div class="fa-suggest__chips">
            <span class="op-chip fa-ing">루테인</span>
            <span class="op-chip fa-ing">지아잔틴</span>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-immune" data-for="immune"
             role="group" aria-label="면역">
          <p class="fa-suggest__title"><span class="fa-suggest__for">면역</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
          <div class="fa-suggest__chips">
            <span class="op-chip fa-ing">아연</span>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-unsure" data-for="unsure"
             role="group" aria-label="뭐부터일지 모르겠어요">
          <p class="fa-suggest__title"><span class="fa-suggest__for">뭐부터일지 모르겠어요</span></p>
          <p class="fa-suggest__hint">괜찮아요. 무엇부터 볼지 고르는 것부터 같이 하면 됩니다.</p>
          <p class="op-mt-16"><a class="op-btn op-btn--ghost"
             href="#signup"
             data-scroll-to="#signup">사전 등록하고 상담부터 시작하기</a></p>
        </div>
      </div>
      <p class="op-note fa-suggest__note op-center">성분 이름만 적어 둔 안내예요. 실제 추천은 상담에서 개인별로 달라집니다.</p>
    </div>

    <p class="op-note op-mt-32 op-center">여러 개를 골라도 괜찮아요. 고른 내용은 전담 한약사에게만 전달됩니다.</p>
  </div>
</section>

<section class="op-sec op-sec--tint" data-section="a02b_products" data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">제품 소개</span>
      <h2 class="op-h2">온팜은 이렇게 생겼어요</h2>
      <p class="op-lead op-mt-16 op-measure--center">상담에서 정한 조합을 6일치 한 장에 담아 둡니다. 이어서 볼 때는 카드를 여러 장 묶은 30일 박스로 고르시면 돼요. 동네 조합 약국에 들러 받아 가시면 됩니다.</p>
    </div>

    <div class="op-grid-2 op-grid--loose op-grid--mid fa-product op-mt-64">
      <div class="fa-product__shot">
        <span class="fa-ptp" aria-hidden="true">
<svg viewBox="0 0 200 132" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="4" width="180" height="104" rx="18" fill="#F2F2F2" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="11" y="10" width="180" height="104" rx="18" fill="#F9F8F6" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="6" y="16" width="180" height="104" rx="18" fill="#F9F8F6" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="22" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="76" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="130" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="22" y="74" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="76" y="74" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="130" y="74" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
</svg>
</span>
      </div>
      <div>
        <ul class="op-list op-list--check fa-product__points">
          <li>하루 한 칸씩 6일, 뜯어서 챙기는 카드형 소포장</li>
          <li>무엇을 담을지는 전담 한약사와 상담에서 정합니다</li>
          <li>동네 조합 약국에서 직접 받아 가는 픽업 방식</li>
        </ul>
        <p class="op-note fa-product__caption">카드와 패키지 형태를 보여드리는 예시예요. 실제 구성은 상담에서 정합니다.</p>
      </div>
    </div>    <div class="op-grid-2 op-grid--top op-mt-48">
      <div>
        <div class="op-media op-media--16x9">
          <img src="/onpharm/a02b_card.jpg" alt=""
               width="1364" height="1023">
        </div>
        <p class="op-caption op-mt-12 op-center">6일 소포장 카드</p>
      </div>
      <div>
        <div class="op-media op-media--16x9">
          <img src="/onpharm/a02b_lineup.jpg" alt=""
               width="1536" height="864">
        </div>
        <p class="op-caption op-mt-12 op-center">박스 패키지 예시</p>
      </div>
    </div>
  </div>
</section>

<section class="op-sec op-sec--warm" data-section="a03_how" data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">이용 순서</span>
      <h2 class="op-h2">이렇게 진행돼요</h2>
      <p class="op-lead op-mt-16 op-measure--center">앱을 새로 깔 필요도, 어려운 검사도 없어요. 한 줄에서 시작합니다.</p>
    </div>

    <div class="fa-steps op-grid-4 op-grid--top op-mt-64">
      <div class="op-step">
        <span class="op-step__num">1</span>
        <h3 class="op-step__title">고민 적기</h3>
        <p class="op-step__desc">카카오톡으로 한 줄만 남기면 끝. 1분이면 충분해요.</p>
      </div>
      <div class="op-step">
        <span class="op-step__num">2</span>
        <h3 class="op-step__title">전담 한약사 답변</h3>
        <p class="op-step__desc">24시간 안에 담당 한약사가 직접 읽고 답을 드려요.</p>
      </div>
      <div class="op-step">
        <span class="op-step__num">3</span>
        <h3 class="op-step__title">픽업 쿠폰 도착</h3>
        <p class="op-step__desc">무엇부터 먹어볼지 정하면 픽업 쿠폰이 발급돼요.</p>
      </div>
      <div class="op-step">
        <span class="op-step__num">4</span>
        <h3 class="op-step__title">동네 약국에서 받기</h3>
        <p class="op-step__desc">가까운 조합 약국에 들러 카드를 받아 가세요.</p>
      </div>
    </div>

    <div class="op-card op-card--line fa-how-footer op-mt-64">
      <span class="op-badge">6일 뒤</span>
      <div>
        <p class="fa-how-footer__t">다 먹을 때쯤 — 어땠어요? 한 통</p>
        <p class="op-caption op-mt-8">6일 뒤 전담 한약사가 먼저 여쭤봅니다. 이어서 볼지 같이 정하면 돼요.</p>
      </div>
    </div>
  </div>
</section>

<section class="op-sec" data-section="a04_cards" data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">소포장 카드</span>
      <h2 class="op-h2">6일치부터, 부담 없이</h2>
      <p class="op-lead op-mt-16 op-measure--center">한 통을 다 채우기 전에 6일만 먼저 먹어보는 소포장 카드예요.</p>
    </div>

    <div class="op-grid-3 fa-price-grid op-mt-64">
      <div class="op-card op-card--pad-lg fa-price-card">
        <div class="fa-card-top">
          <span class="fa-ptp" aria-hidden="true">
<svg viewBox="0 0 200 132" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="16" width="180" height="104" rx="18" fill="#F9F8F6" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="22" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="76" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="130" y="34" width="44" height="28" rx="14"
        fill="#FFFFFF"
        stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="22" y="74" width="44" height="28" rx="14"
        fill="#FFFFFF"
        stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="76" y="74" width="44" height="28" rx="14"
        fill="#FFFFFF"
        stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="130" y="74" width="44" height="28" rx="14"
        fill="#FFFFFF"
        stroke="#EAEAEA" stroke-width="1.5"/>
</svg>
</span>
          <p class="fa-card-name">베이식 카드</p>
          <div class="op-price">
            <span class="op-price__num">1,500</span>
            <span class="op-price__unit">원</span>
            <span class="op-price__meta">6일치</span>
          </div>
          <p class="fa-card-desc">처음 시작하는 분을 위한 가장 가벼운 한 장.</p>
        </div>
        <ul class="op-list op-list--check fa-card-points">
          <li>6일 소포장 한 장</li>
          <li>동네 약국 픽업</li>
          <li>전담 한약사 배정</li>
        </ul>
      </div>
      <div class="op-card op-card--pad-lg fa-price-card op-card--on">
        <span class="op-badge op-badge--solid fa-card-badge">가장 많이 찾아요</span>
        <div class="fa-card-top">
          <span class="fa-ptp" aria-hidden="true">
<svg viewBox="0 0 200 132" xmlns="http://www.w3.org/2000/svg">
  <rect x="6" y="16" width="180" height="104" rx="18" fill="#F9F8F6" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="22" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="76" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="130" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="22" y="74" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="76" y="74" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="130" y="74" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
</svg>
</span>
          <p class="fa-card-name">유산균 카드</p>
          <div class="op-price op-price--accent">
            <span class="op-price__num">3,900</span>
            <span class="op-price__unit">원</span>
            <span class="op-price__meta">6일치</span>
          </div>
          <p class="fa-card-desc">장 컨디션이 신경 쓰일 때 가장 많이 고르는 카드예요.</p>
        </div>
        <ul class="op-list op-list--check fa-card-points">
          <li>6일 소포장 한 장</li>
          <li>전담 한약사 코멘트 동봉</li>
          <li>6일 뒤 확인 메시지</li>
        </ul>
      </div>
      <div class="op-card op-card--pad-lg fa-price-card">
        <div class="fa-card-top">
          <span class="fa-ptp" aria-hidden="true">
<svg viewBox="0 0 200 132" xmlns="http://www.w3.org/2000/svg">
  <rect x="16" y="4" width="180" height="104" rx="18" fill="#F2F2F2" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="11" y="10" width="180" height="104" rx="18" fill="#F9F8F6" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="6" y="16" width="180" height="104" rx="18" fill="#F9F8F6" stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="22" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="76" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="130" y="34" width="44" height="28" rx="14"
        fill="#FF6900"
        stroke="#FF6900" stroke-width="1.5"/>
  <rect x="22" y="74" width="44" height="28" rx="14"
        fill="#FFFFFF"
        stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="76" y="74" width="44" height="28" rx="14"
        fill="#FFFFFF"
        stroke="#EAEAEA" stroke-width="1.5"/>
  <rect x="130" y="74" width="44" height="28" rx="14"
        fill="#FFFFFF"
        stroke="#EAEAEA" stroke-width="1.5"/>
</svg>
</span>
          <p class="fa-card-name">30일 박스</p>
          <div class="op-price">
            <span class="op-price__num">9,900</span>
            <span class="op-price__unit">원</span>
            <span class="op-price__meta">카드 5장 묶음</span>
          </div>
          <p class="fa-card-desc">리듬이 잡히면 한 달치를 한 번에 받아 가세요.</p>
        </div>
        <ul class="op-list op-list--check fa-card-points">
          <li>카드 5장 묶음</li>
          <li>동네 약국 픽업</li>
          <li>사전 등록하신 분은 4,900원</li>
        </ul>
      </div>
    </div>

    <p class="op-note op-mt-40 op-center">표시된 가격은 조합 약국에서 직접 받아 가시는 픽업 기준이에요. 온라인 판매는 하지 않습니다.</p>
  </div>
</section>

<section class="op-sec op-sec--tint" data-section="a05_pharmacist" data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">전담 한약사</span>
      <h2 class="op-h2">내 이름을 아는 <span class="op-accent">한약사</span>가 생긴다</h2>
      <p class="op-lead op-mt-16 op-measure--center">매번 다른 사람에게 처음부터 다시 설명하지 않아도 돼요.</p>
    </div>

    <div class="op-grid-2 op-grid--loose op-mt-64">
      <div>
        <div class="fa-idcard">
          <div class="fa-idcard__head">
            <span class="fa-idcard__label">전담 한약사 카드</span>
            <span class="op-badge op-badge--gray">예시</span>
          </div>
          <div class="fa-idcard__top">
            <span class="fa-idcard__avatar">온</span>
            <span>
              <span class="fa-idcard__name">김O연 한약사</span>
              <span class="fa-idcard__role">온팜 전담 한약사</span>
            </span>
          </div>
          <div class="op-kv"><span class="op-kv__k">이름</span><span class="op-kv__v">김O연 한약사</span></div>
          <div class="op-kv"><span class="op-kv__k">약국</span><span class="op-kv__v">연수구 참여 약국</span></div>
          <div class="op-kv"><span class="op-kv__k">배정일</span><span class="op-kv__v">2026-03-04</span></div>
          <div class="op-kv"><span class="op-kv__k">상담 이력</span><span class="op-kv__v">3회</span></div>
          <div class="op-kv"><span class="op-kv__k">다음 알림</span><span class="op-kv__v">D-4</span></div>
          <p class="fa-idcard__note">가상의 예시 카드입니다. 실제 배정은 사전 등록 순서대로 안내드려요.</p>
        </div>
      </div>

      <div class="fa-checks">
        <div class="fa-check">
          <span class="fa-check__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span>
            <span class="fa-check__t">매번 같은 사람이 답합니다</span>
            <span class="fa-check__d">한 번 배정되면 담당이 바뀌지 않아요.</span>
          </span>
        </div>
        <div class="fa-check">
          <span class="fa-check__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span>
            <span class="fa-check__t">지난 상담을 기억합니다</span>
            <span class="fa-check__d">저번에 뭘 드셨는지 다시 말하지 않아도 됩니다.</span>
          </span>
        </div>
        <div class="fa-check">
          <span class="fa-check__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span>
            <span class="fa-check__t">소진 시점에 먼저 알려드려요</span>
            <span class="fa-check__d">다 드실 때쯤 먼저 여쭤봅니다.</span>
          </span>
        </div>
        <div class="fa-check">
          <span class="fa-check__ico"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span>
            <span class="fa-check__t">동네라 그냥 들르면 됩니다</span>
            <span class="fa-check__d">지나는 길에 약국에 들러 받아 가세요.</span>
          </span>
        </div>
      </div>
    </div>
    <div class="fa-photoband fa-photoband--low op-mt-48"><img src="/onpharm/a05_pharmacist.jpg" alt="" width="1364" height="1023"></div>
  </div>
</section>

<section class="op-sec" data-section="a06_examples" data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">상담 예시</span>
      <h2 class="op-h2">이런 식으로 답해드려요</h2>
      <p class="op-lead op-mt-16 op-measure--center">아래는 실제 고객 사례가 아니라, 이해를 돕기 위해 만든 가상의 상담 예시입니다.</p>
    </div><div class="op-carousel op-mt-64" data-carousel data-interval="7000">
      <div class="op-carousel__viewport" aria-live="off">
        <div class="op-carousel__track">
          <div class="op-carousel__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 1">
            <div class="op-card op-card--pad-lg">
              <div class="fa-ex__head">
                <span class="op-badge op-badge--line">예시</span>
                <span class="op-note">상담 예시 1</span>
              </div>

              <div class="fa-ex__q">
                <span class="fa-ex__label">남기신 고민</span>
                <p class="fa-ex__qt">장 컨디션이 들쭉날쭉해요. 아침마다 몸 상태가 달라서 뭘 먹어야 할지 모르겠어요.</p>
              </div>

              <div class="fa-ex__a">
                <div class="fa-ex__who">
                  <span class="fa-ex__avatar">온팜</span>
                  <span class="fa-ex__name">전담 한약사 답변</span>
                </div>
                <p class="fa-ex__p">먼저 하루 식사 리듬부터 여쭤볼게요. 아침을 거르는 날이 많은지, 커피는 하루 몇 잔인지, 저녁이 늦는 편인지요. 같은 제품이라도 리듬이 흔들리면 몸이 받는 느낌이 많이 달라집니다.</p>
                <p class="fa-ex__p">말씀만 들어 보면 저녁이 늦고 주말에 리듬이 크게 바뀌는 편으로 보여요. 그럴 때는 새로 무언가를 더하기 전에, 물 마시는 양과 식이섬유가 들어간 한 끼를 먼저 챙겨 보시길 권해요.</p>
                <p class="fa-ex__p">그다음에 프로바이오틱스 카테고리를 함께 보시면 좋아요. 6일 카드로 딱 6일만 드셔 보고, 그 주에 몸이 어땠는지 저에게 알려 주세요.</p>
                <p class="fa-ex__p">6일 뒤에는 제가 먼저 여쭤볼게요. 이어서 볼지, 다른 카테고리를 볼지 그때 같이 정하면 됩니다.</p>
              </div>
            </div>
          </div>
          <div class="op-carousel__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 2">
            <div class="op-card op-card--pad-lg">
              <div class="fa-ex__head">
                <span class="op-badge op-badge--line">예시</span>
                <span class="op-note">상담 예시 2</span>
              </div>

              <div class="fa-ex__q">
                <span class="fa-ex__label">남기신 고민</span>
                <p class="fa-ex__qt">밤에 누워도 한참 뒤척여요. 요즘 야근이 많은데 뭘 챙기면 좋을까요?</p>
              </div>

              <div class="fa-ex__a">
                <div class="fa-ex__who">
                  <span class="fa-ex__avatar">온팜</span>
                  <span class="fa-ex__name">전담 한약사 답변</span>
                </div>
                <p class="fa-ex__p">야근이 이어지면 잠자리에 드는 시각 자체가 밀리기 쉬워요. 우선 한 주만 잠드는 시각과 마지막 커피 시각을 적어 봐 주세요. 이것만으로 보이는 게 꽤 많습니다.</p>
                <p class="fa-ex__p">화면을 늦게까지 보신다면, 자기 전 한 시간은 조명을 낮추는 쪽을 먼저 권해 드려요. 무엇을 드시는지보다 이쪽을 먼저 보는 편이 순서상 맞습니다.</p>
                <p class="fa-ex__p">그다음 마그네슘이 들어간 카테고리를 함께 보시면 좋아요. 지금 챙겨 드시는 것이 있으면 알려 주세요. 겹치는 성분이 없는지 같이 확인하고 안내드릴게요.</p>
                <p class="fa-ex__p">우선 6일 카드로 가볍게 시작하고, 그 주가 어땠는지 편하게 이야기 나눠요.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="op-carousel__nav">
        <button type="button" class="op-carousel__dot is-on" aria-label="상담 예시 1"></button>
        <button type="button" class="op-carousel__dot" aria-label="상담 예시 2"></button>
      </div>
    </div>

    <p class="op-note op-mt-32 op-center op-measure--center">상담 예시는 이해를 돕기 위해 만든 가상의 대화입니다. 실제 상담 내용은 개인별로 다르며, 의학적 진단이나 치료를 대신하지 않습니다. 건강기능식품은 의약품이 아닙니다.</p>
  </div>
</section>

<section class="op-sec op-sec--charcoal" data-section="a07_signup" id="signup" data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">사전 등록</span>
      <h2 class="op-h2">사전 등록하고 먼저 받아보기</h2>
      <p class="op-lead op-mt-16 op-measure--center">동네에 조합 약국이 열리면 가장 먼저 알려드려요. 사전 등록하신 분은 첫 카드를 먼저 받아보실 수 있어요.</p>      <div class="fa-kakao-cta op-mt-32">
        <a class="op-btn op-btn--ghost op-btn--kakao"
   href="https://pf.kakao.com/_wxdxhrX/chat" target="_blank" rel="noopener noreferrer">
  <svg class="op-btn__ico" viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"
       fill="none" stroke="currentColor" stroke-width="1.7"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4.3c-4.4 0-8 2.8-8 6.2 0 2.2 1.5 4.1 3.7 5.2l-.9 3.2c-.1.4.3.7.6.5l3.6-2.2c.3 0 .7.1 1 .1 4.4 0 8-2.8 8-6.2s-3.6-6.2-8-6.2z"/>
  </svg>
  <span>카카오톡으로 상담하기</span>
</a>
      </div>
    </div><form class="fa-form op-mt-48" method="post" action="https://docs.google.com/forms/d/e/1FAIpQLSewrnJBiWZbCJnpmOjYlTT_U312_u8_EEhwQKS4i49WwQQziQ/formResponse"
          data-form="signup" target="op-form-sink">
      <fieldset class="fa-fieldset">
        <legend class="fa-label fa-legend">지금 가장 신경 쓰이는 것</legend>
        <div class="op-row op-row--wrap">
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="피로"
                 id="a07-concern-0" checked>
          <label class="op-chip fa-chip" for="a07-concern-0">피로</label>
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="장 컨디션"
                 id="a07-concern-1">
          <label class="op-chip fa-chip" for="a07-concern-1">장 컨디션</label>
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="잠"
                 id="a07-concern-2">
          <label class="op-chip fa-chip" for="a07-concern-2">잠</label>
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="피부"
                 id="a07-concern-3">
          <label class="op-chip fa-chip" for="a07-concern-3">피부</label>
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="여성 컨디션"
                 id="a07-concern-4">
          <label class="op-chip fa-chip" for="a07-concern-4">여성 컨디션</label>
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="눈"
                 id="a07-concern-5">
          <label class="op-chip fa-chip" for="a07-concern-5">눈</label>
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="면역"
                 id="a07-concern-6">
          <label class="op-chip fa-chip" for="a07-concern-6">면역</label>
          <input class="fa-chip-input" type="checkbox" name="entry.1077289738"
                 data-field="concern" value="아직 모르겠어요"
                 id="a07-concern-7">
          <label class="op-chip fa-chip" for="a07-concern-7">아직 모르겠어요</label>
        </div>
      </fieldset>

      <div class="op-grid-2 op-mt-32">
        <div>
          <label class="fa-label" for="a07-age">연령대</label>
          <div class="fa-select-wrap">
            <select class="fa-select" id="a07-age" name="entry.965681754"
                    data-field="age_range">
              <option value="20대 초반">20대 초반</option>
              <option value="20대 후반">20대 후반</option>
              <option value="30대 초반">30대 초반</option>
              <option value="30대 후반">30대 후반</option>
              <option value="40대 이상">40대 이상</option>
            </select>
            <span class="fa-select-caret" aria-hidden="true">▾</span>
          </div>
        </div>
        <div>
          <label class="fa-label" for="a07-area">동네</label>
          <input class="fa-input" type="text" id="a07-area" name="entry.1426615622"
                 data-field="area"
                 autocomplete="address-level2" placeholder="예: 인천 연수구">
        </div>
      </div>

      <div class="op-mt-24">
        <label class="fa-label" for="a07-contact">카카오톡 연락처</label>
        <input class="fa-input" type="text" id="a07-contact" name="entry.786409114"
               data-field="contact"
               inputmode="tel" autocomplete="off" placeholder="카카오톡 아이디 또는 연락 가능한 번호">
      </div>

      <div class="op-mt-24">
        <label class="fa-label" for="a07-note">한 줄 고민</label>
        <textarea class="fa-textarea" id="a07-note" name="entry.1401335176"
                  data-field="note" rows="3"
                  placeholder="요즘 가장 신경 쓰이는 걸 한 줄로 적어 주세요"></textarea>
      </div>

      <div class="fa-consents">
        <label class="op-check" for="a07-consent-0">
          <input class="op-check__input" type="checkbox" id="a07-consent-0"
                 name="entry.2142923554" data-field="consent_privacy"
                 value="동의합니다" required>
          <span class="op-check__box" aria-hidden="true"></span>
          <span class="op-check__text">[필수] 개인정보 수집·이용에 동의합니다. 수집 항목: 연령대, 동네, 연락처 / 목적: 전담 한약사 배정과 안내 / 보유 기간: 동의를 철회하실 때까지.</span>
        </label>
        <label class="op-check" for="a07-consent-1">
          <input class="op-check__input" type="checkbox" id="a07-consent-1"
                 name="entry.783919577" data-field="consent_sensitive"
                 value="동의합니다" required>
          <span class="op-check__box" aria-hidden="true"></span>
          <span class="op-check__text">[필수] 건강 관련 정보는 민감정보에 해당합니다. 상담을 위해 이 정보를 수집·이용하는 데 별도로 동의합니다.</span>
        </label>
      </div>

      <div class="op-mt-32">
        <button type="submit" class="op-btn op-btn--lg op-btn--block">사전 등록하기</button>
      </div>
      <p class="op-note op-mt-16 op-center">지금은 사전 등록만 받고 있어요. 이 화면에서 결제나 판매가 이뤄지지 않습니다.</p>
    </form>    <iframe class="op-form-sink" name="op-form-sink" title="폼 전송" hidden></iframe>
    <p class="op-form-thanks op-center op-mt-32" data-form-thanks="signup"
       role="status" tabindex="-1" hidden>신청이 접수되었습니다. 순서대로 확인해 연락드리겠습니다.</p>
  </div>
</section>

<section class="op-sec op-sec--warm" data-section="a08_pharmacies" data-reveal>
  <div class="op-inner">
    <div class="op-center">
      <span class="op-eyebrow">참여 약국</span>
      <h2 class="op-h2">함께하는 약국</h2>
      <p class="op-lead op-mt-16 op-measure--center">네 곳에서 먼저 시작합니다. 가까운 동네부터 차례로 문을 열어요.</p>
    </div>

    <div class="fa-map op-mt-48">
      <div class="op-grid-4">
        <div class="fa-pin">
          <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
          <p class="fa-pin__area">인천 연수구</p>
          <p class="fa-pin__status">1호 준비 중</p>
        </div>
        <div class="fa-pin">
          <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
          <p class="fa-pin__area">인천 남동구</p>
          <p class="fa-pin__status">오픈 준비</p>
        </div>
        <div class="fa-pin">
          <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
          <p class="fa-pin__area">서울 마포구</p>
          <p class="fa-pin__status">오픈 예정</p>
        </div>
        <div class="fa-pin">
          <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
          <p class="fa-pin__area">서울 영등포구</p>
          <p class="fa-pin__status">오픈 예정</p>
        </div>
      </div>
    </div>

    <div class="fa-photoband op-mt-32"><img src="/onpharm/a08_pharmacies.jpg" alt="" width="1536" height="864"></div>

    <p class="op-note op-mt-32 op-center op-measure--center">참여 약국은 순차적으로 문을 열 예정이며, 지역과 일정은 달라질 수 있어요. 사전 등록에 동네를 남겨 주시면 가장 먼저 알려드립니다.</p>
  </div>
</section>

<section class="op-sec" data-section="a09_faq">
  <div class="op-inner op-inner--narrow">
    <div class="op-center">
      <span class="op-eyebrow">FAQ</span>
      <h2 class="op-h2">자주 묻는 질문</h2>
    </div><div class="op-card op-card--pad-lg op-mt-48">
      <div class="op-faq" data-accordion>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">상담은 정말 무료인가요?</summary>
          <div class="op-faq__a">네. 고민을 남기고 답을 받는 데까지는 비용이 들지 않아요. 비용이 생기는 건 약국에서 카드를 받아 가실 때뿐입니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">누가 답변하나요?</summary>
          <div class="op-faq__a">면허를 가진 한약사가 직접 읽고 답합니다. 한 번 배정되면 같은 한약사가 계속 이어서 봐요.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">카드는 어디서 받나요?</summary>
          <div class="op-faq__a">동네 조합 약국에서 직접 받아 가세요. 픽업 쿠폰을 보여주시면 준비해 둔 카드를 드립니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">지금 먹는 게 있는데 같이 먹어도 되나요?</summary>
          <div class="op-faq__a">지금 챙겨 드시는 것을 알려 주시면 전담 한약사가 함께 보고 안내드려요. 병원에서 받은 약을 드시고 있다면 그 내용도 꼭 같이 적어 주세요.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">개인정보는 어떻게 관리되나요?</summary>
          <div class="op-faq__a">전담 한약사 배정과 안내에만 씁니다. 건강 관련 내용은 민감정보로 따로 동의를 받고, 동의를 철회하시면 지웁니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">약국이 우리 동네에 없으면요?</summary>
          <div class="op-faq__a">사전 등록에 동네를 남겨 주세요. 가까운 곳에 조합 약국이 열리면 가장 먼저 알려드릴게요.</div>
        </details>
      </div>
    </div>

    <div class="fa-closing">
      <span class="op-logo"><span class="op-logotype " role="img" aria-label="온팜"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/><path d="M239.89 17.19L235.32 17.19L235.32 13.64C235.32 10.32 232.63 7.63 229.31 7.63L239.89 7.63L239.89 1.79L206.88 1.79L206.88 7.63L211.61 7.63L211.61 17.19L206.88 17.19L206.88 23.04L239.89 23.04L239.89 17.19M225.82 17.19L221.1 17.19L221.1 13.64C221.1 10.32 218.41 7.63 215.09 7.63L225.82 7.63L225.82 17.19 Z"/><path d="M211.51 44.55C211.51 46.21 212.86 47.56 214.52 47.56L254.03 47.56L254.03 27.05L211.51 27.05L211.51 44.55M221.01 32.89H244.54V41.71H221.01Z Z"/><path d="M254.03 1.79L244.54 1.79L244.54 23.04L254.03 23.04L254.03 14.22L259.43 14.22L259.43 8.37L254.03 8.37L254.03 1.79 Z"/><path d="M168.96 35.91L159.46 35.91L159.46 44.55C159.46 46.21 160.81 47.56 162.47 47.56L201.98 47.56L201.98 41.71L168.96 41.71L168.96 35.91 Z"/><path d="M191.35 23.04C197.22 23.04 201.98 18.28 201.98 12.41C201.98 6.54 197.22 1.79 191.35 1.79L170.09 1.79C164.22 1.79 159.46 6.54 159.46 12.41C159.46 18.28 164.22 23.04 170.09 23.04L175.97 23.04L175.97 27.05L159.46 27.05L159.46 32.89L201.98 32.89L201.98 27.05L185.47 27.05L185.47 23.04L191.35 23.04M173.74 17.19C171.1 17.19 168.96 15.05 168.96 12.41C168.96 9.77 171.1 7.63 173.74 7.63L187.71 7.63C190.35 7.63 192.49 9.77 192.49 12.41C192.49 15.05 190.35 17.19 187.71 17.19L173.74 17.19 Z"/><path d="M360.63 1.79L321.12 1.79L321.12 7.63L354.14 7.63L354.14 17.63L363.63 17.63L363.63 4.79C363.63 3.13 362.29 1.79 360.63 1.79 Z"/><path d="M321.12 21.12L321.12 26.97L337.63 26.97L337.63 32.8L321.12 32.8L321.12 38.65L354.14 38.65L354.14 47.56L363.63 47.56L363.63 35.81C363.63 34.15 362.29 32.8 360.63 32.8L347.12 32.8L347.12 26.97L363.63 26.97L363.63 21.12L321.12 21.12 Z"/><path d="M308.23 30.16L268.72 30.16L268.72 36L301.74 36L301.74 47.56L311.23 47.56L311.23 33.16C311.23 31.5 309.89 30.16 308.23 30.16 Z"/><path d="M284.91 26.15C291.64 26.15 297.09 20.7 297.09 13.97C297.09 7.24 291.64 1.79 284.91 1.79L276.1 1.79C269.37 1.79 263.91 7.24 263.91 13.97C263.91 20.7 269.37 26.15 276.1 26.15L284.91 26.15M273.4 13.97C273.4 10.47 276.24 7.63 279.74 7.63L281.26 7.63C284.76 7.63 287.6 10.47 287.6 13.97C287.6 17.47 284.76 20.31 281.26 20.31L279.74 20.31C276.24 20.31 273.4 17.47 273.4 13.97 Z"/><path d="M311.23 1.79L301.74 1.79L301.74 26.15L311.23 26.15L311.23 21.56L316.63 21.56L316.63 15.71L311.23 15.71L311.23 12.23L316.63 12.23L316.63 6.38L311.23 6.38L311.23 1.79 Z"/></g></svg></span></span>
      <p class="fa-closing__t op-mt-16">고민 한 줄이면 시작돼요</p>
      <p class="op-caption op-mt-8">들르면, 건강이 켜집니다</p>
      <div class="op-row op-row--center op-mt-32">
        <a class="op-btn op-btn--lg" href="#signup">1분 상담 신청</a>
      </div>
    </div>
  </div>
</section>
`;

// 면 B · 약국 파트너 (6섹션)
export const FACE_B_HTML: string = `<section class="op-sec op-sec--navy op-sec--tall" data-section="b01_hero">
    <div class="fb-hero-bg" aria-hidden="true"><div class="op-heromedia" data-motion="crossfade" data-count="2">
        <video class="op-heromedia__video" autoplay muted loop playsinline
></video>
        <div class="op-heromedia__slides">
          <img class="op-heromedia__slide" src="/onpharm/b01_hero.jpg" alt=""
               width="1536" height="864" style="--i:0">
          <img class="op-heromedia__slide" src="/onpharm/b01_hero_2.jpg" alt=""
               width="1536" height="864" style="--i:1">
        </div>
      </div>
      <span class="op-veil op-veil--soft"></span>
    </div><div class="op-inner op-veil-content">
      <div class="fb-hero-head">
        <span class="op-logotype op-logotype--sm" role="img" aria-label="온팜"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/><path d="M239.89 17.19L235.32 17.19L235.32 13.64C235.32 10.32 232.63 7.63 229.31 7.63L239.89 7.63L239.89 1.79L206.88 1.79L206.88 7.63L211.61 7.63L211.61 17.19L206.88 17.19L206.88 23.04L239.89 23.04L239.89 17.19M225.82 17.19L221.1 17.19L221.1 13.64C221.1 10.32 218.41 7.63 215.09 7.63L225.82 7.63L225.82 17.19 Z"/><path d="M211.51 44.55C211.51 46.21 212.86 47.56 214.52 47.56L254.03 47.56L254.03 27.05L211.51 27.05L211.51 44.55M221.01 32.89H244.54V41.71H221.01Z Z"/><path d="M254.03 1.79L244.54 1.79L244.54 23.04L254.03 23.04L254.03 14.22L259.43 14.22L259.43 8.37L254.03 8.37L254.03 1.79 Z"/><path d="M168.96 35.91L159.46 35.91L159.46 44.55C159.46 46.21 160.81 47.56 162.47 47.56L201.98 47.56L201.98 41.71L168.96 41.71L168.96 35.91 Z"/><path d="M191.35 23.04C197.22 23.04 201.98 18.28 201.98 12.41C201.98 6.54 197.22 1.79 191.35 1.79L170.09 1.79C164.22 1.79 159.46 6.54 159.46 12.41C159.46 18.28 164.22 23.04 170.09 23.04L175.97 23.04L175.97 27.05L159.46 27.05L159.46 32.89L201.98 32.89L201.98 27.05L185.47 27.05L185.47 23.04L191.35 23.04M173.74 17.19C171.1 17.19 168.96 15.05 168.96 12.41C168.96 9.77 171.1 7.63 173.74 7.63L187.71 7.63C190.35 7.63 192.49 9.77 192.49 12.41C192.49 15.05 190.35 17.19 187.71 17.19L173.74 17.19 Z"/><path d="M360.63 1.79L321.12 1.79L321.12 7.63L354.14 7.63L354.14 17.63L363.63 17.63L363.63 4.79C363.63 3.13 362.29 1.79 360.63 1.79 Z"/><path d="M321.12 21.12L321.12 26.97L337.63 26.97L337.63 32.8L321.12 32.8L321.12 38.65L354.14 38.65L354.14 47.56L363.63 47.56L363.63 35.81C363.63 34.15 362.29 32.8 360.63 32.8L347.12 32.8L347.12 26.97L363.63 26.97L363.63 21.12L321.12 21.12 Z"/><path d="M308.23 30.16L268.72 30.16L268.72 36L301.74 36L301.74 47.56L311.23 47.56L311.23 33.16C311.23 31.5 309.89 30.16 308.23 30.16 Z"/><path d="M284.91 26.15C291.64 26.15 297.09 20.7 297.09 13.97C297.09 7.24 291.64 1.79 284.91 1.79L276.1 1.79C269.37 1.79 263.91 7.24 263.91 13.97C263.91 20.7 269.37 26.15 276.1 26.15L284.91 26.15M273.4 13.97C273.4 10.47 276.24 7.63 279.74 7.63L281.26 7.63C284.76 7.63 287.6 10.47 287.6 13.97C287.6 17.47 284.76 20.31 281.26 20.31L279.74 20.31C276.24 20.31 273.4 17.47 273.4 13.97 Z"/><path d="M311.23 1.79L301.74 1.79L301.74 26.15L311.23 26.15L311.23 21.56L316.63 21.56L316.63 15.71L311.23 15.71L311.23 12.23L316.63 12.23L316.63 6.38L311.23 6.38L311.23 1.79 Z"/></g></svg></span>
        <span class="op-badge op-badge--line">약국 파트너 모집</span>
      </div>

      <span class="op-eyebrow">약국 파트너</span>
      <h1 class="op-h1 fb-hero-title">
        <span class="op-accent">손님을</span> 보내드립니다
      </h1>
      <p class="op-lead op-measure op-mt-24">
        매대만 내어 드리는 유통이 아닙니다. 온라인 상담에서 만난 고객을 위치에 맞는 파트너 약국으로 배정하고, 픽업 쿠폰까지 붙여서 보내드립니다.
      </p>

      <div class="op-row op-row--wrap op-mt-40">
        <a class="op-btn op-btn--lg" href="#b06_apply">파트너 신청하기</a>
        <span class="op-note">지역별 순차 오픈 · 신청 순으로 배정 지역 확정</span>
      </div>

      <div class="op-grid-3 op-mt-64">
        <div class="op-card op-card--flat fb-stat">
          <span class="fb-stat__mark"></span>
          <p class="fb-stat__label">위치 기반 자동 배정</p>
          <p class="fb-stat__desc">고객이 남긴 고민은 가장 가까운 파트너 약국으로 자동 배정됩니다.</p>
        </div>
        <div class="op-card op-card--flat fb-stat">
          <span class="fb-stat__mark"></span>
          <p class="fb-stat__label">정찰가 · 온라인 미유통</p>
          <p class="fb-stat__desc">온팜 카드는 온라인에 풀리지 않습니다. 가격 비교의 대상이 아닙니다.</p>
        </div>
        <div class="op-card op-card--flat fb-stat">
          <span class="fb-stat__mark"></span>
          <p class="fb-stat__label">리필 알림 자동 안내</p>
          <p class="fb-stat__desc">소진 시점에 맞춰 다음 안내가 담당 한약사 이름으로 나갑니다.</p>
        </div>
      </div>
    </div>
  </section>

<section class="op-sec" data-section="b02_compare" data-reveal>
    <div class="op-inner">
      <div class="op-center op-measure--center">
        <span class="op-eyebrow">무엇이 다른가</span>
        <h2 class="op-h2">지금까지의 매대 vs 온팜 파트너 약국</h2>
        <p class="op-lead op-mt-16">
          같은 진열장이라도, 손님이 들어오는 이유가 다릅니다.
        </p>
      </div>

      <div class="op-grid-2 op-mt-48">
        <div class="op-card fb-col fb-col--old">
          <div class="fb-col__head">
            <span class="op-badge op-badge--gray">BEFORE</span>
          </div>
          <h3 class="op-h3">지금까지의 매대</h3>
          <ul class="op-list op-list--x fb-col__body">
            <li>온라인 최저가와 나란히 비교당합니다</li>
            <li>손님이 왜 그 제품을 집었는지 알 수 없습니다</li>
            <li>한 번 팔면 그걸로 끝입니다</li>
            <li>진열은 늘어도 상담으로 이어지지 않습니다</li>
          </ul>
        </div>

        <div class="op-card fb-col fb-col--on">
          <div class="fb-col__head">
            <span class="op-badge op-badge--solid">ONPHARM</span>
          </div>
          <h3 class="op-h3">온팜 파트너 약국</h3>
          <ul class="op-list op-list--check fb-col__body">
            <li>검색되지 않는 조합 전용 카드입니다</li>
            <li>상담을 거쳐 배정된 고객이 이름을 보고 찾아옵니다</li>
            <li>소진 시점에 다음 안내가 다시 나갑니다</li>
            <li>한약사의 전문성이 그대로 매출로 남습니다</li>
          </ul>
        </div>
      </div>

      <p class="op-note op-center op-mt-24">
        세부 조건은 신청 이후 계약 단계에서 따로 협의합니다.
      </p>
    </div>
  </section>

<section class="op-sec op-sec--warm" data-section="b03_flow" data-reveal>
    <div class="op-inner">
      <div class="op-center op-measure--center">
        <span class="op-eyebrow">운영 방식</span>
        <h2 class="op-h2">약국이 하는 일은 두 가지뿐입니다</h2>
        <p class="op-lead op-mt-16">
          다섯 단계 가운데 세 단계는 온팜이 처리합니다.
        </p>
      </div>

      <div class="fb-flow op-mt-48">
        <div class="fb-node">
          <div class="fb-node__top">
            <span class="fb-node__num">1</span>
            <span class="fb-node__owner">온팜</span>
          </div>
          <h3 class="fb-node__title">고민 한 줄 접수</h3>
          <p class="fb-node__desc">고객이 온팜에 자기 고민을 한 줄로 남깁니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node">
          <div class="fb-node__top">
            <span class="fb-node__num">2</span>
            <span class="fb-node__owner">온팜</span>
          </div>
          <h3 class="fb-node__title">위치 기반 배정</h3>
          <p class="fb-node__desc">가까운 파트너 약국으로 상담이 자동 배정됩니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node fb-node--on">
          <div class="fb-node__top">
            <span class="fb-node__num">3</span>
            <span class="fb-node__owner">약국</span>
          </div>
          <h3 class="fb-node__title">전담 한약사 답변</h3>
          <p class="fb-node__desc">배정된 한약사가 카드 조합을 골라 답을 씁니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node">
          <div class="fb-node__top">
            <span class="fb-node__num">4</span>
            <span class="fb-node__owner">온팜</span>
          </div>
          <h3 class="fb-node__title">픽업 쿠폰 발급</h3>
          <p class="fb-node__desc">고객에게 그 약국에서 쓸 픽업 쿠폰이 나갑니다.</p>
        </div>
        <span class="fb-arrow" aria-hidden="true">›</span>
        <div class="fb-node fb-node--on">
          <div class="fb-node__top">
            <span class="fb-node__num">5</span>
            <span class="fb-node__owner">약국</span>
          </div>
          <h3 class="fb-node__title">방문 고객에게 전달</h3>
          <p class="fb-node__desc">들른 고객에게 카드를 건네주면 끝입니다.</p>
        </div>
      </div>

      <p class="op-note op-center op-mt-32">
        1 · 2 · 4 단계는 온팜이 맡습니다. 약국은 3번과 5번, 답변과 전달만 하면 됩니다.
      </p>
    </div>
  </section>

<section class="op-sec" data-section="b04_values" data-reveal>
    <div class="op-inner">
      <div class="op-center op-measure--center">
        <span class="op-eyebrow">파트너 혜택</span>
        <h2 class="op-h2">파트너 약국이 얻는 것</h2>
        <p class="op-lead op-mt-16">
          물건이 아니라 손님과 이유가 함께 들어옵니다.
        </p>
      </div>

      <div class="op-grid-3 op-grid--top op-mt-48">
        <div class="op-card fb-value">
          <span class="op-eyebrow">TRAFFIC</span>
          <h3 class="op-h3 fb-value__title">집객</h3>
          <ul class="op-list fb-value__list">
            <li>온라인에서 고민을 남긴 사람이 약국 이름을 보고 찾아옵니다</li>
            <li>지역 단위로 배정돼 가까운 약국끼리 겹치지 않습니다</li>
            <li>처음 오는 손님도 상담 기록을 들고 들어옵니다</li>
          </ul>
        </div>
        <div class="op-card fb-value">
          <span class="op-eyebrow">PRODUCT</span>
          <h3 class="op-h3 fb-value__title">전용 상품</h3>
          <ul class="op-list fb-value__list">
            <li>조합 전용 카드라 온라인 검색에 노출되지 않습니다</li>
            <li>정찰가로만 움직여 최저가 경쟁에서 빠집니다</li>
            <li>6일치 소포장이라 처음 권하기가 가볍습니다</li>
          </ul>
        </div>
        <div class="op-card fb-value">
          <span class="op-eyebrow">RETENTION</span>
          <h3 class="op-h3 fb-value__title">재방문</h3>
          <ul class="op-list fb-value__list">
            <li>소진 시점에 맞춰 다음 안내가 자동으로 나갑니다</li>
            <li>안내에는 담당 한약사 이름이 그대로 들어갑니다</li>
            <li>다음 방문이 우연이 아니라 일정이 됩니다</li>
          </ul>
        </div>
      </div>
    </div>
  </section>

<section class="op-sec op-sec--gray" data-section="b05_faq" data-reveal>
    <div class="op-inner op-inner--narrow">
      <div class="op-center">
        <span class="op-eyebrow">FAQ</span>
        <h2 class="op-h2">파트너 문의</h2>
        <p class="op-lead op-mt-16">
          가장 많이 받는 질문을 먼저 정리했습니다.
        </p>
      </div><div class="op-faq op-mt-40" data-accordion>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">입점 조건이 어떻게 되나요</summary>
          <div class="op-faq__a">조합에 가입한 한약사 개설 약국이면 신청할 수 있습니다. 지역별 배정이 겹치지 않도록 순차 오픈하며, 상담 답변을 직접 맡아 주실 수 있는 곳을 먼저 배정합니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">초기 비용이 있나요</summary>
          <div class="op-faq__a">가맹비나 보증금 형태로 미리 받는 돈은 없습니다. 진열 집기와 안내물은 온팜이 준비해 드리고, 나머지 조건은 신청 이후 협의해서 계약서에 담습니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">재고 부담은 어떻게 되나요</summary>
          <div class="op-faq__a">카드 단위 소포장이라 한 번에 많이 쌓아 둘 필요가 없습니다. 첫 물량과 회전 주기는 약국 상황에 맞춰 정하고, 남은 물량을 어떻게 처리할지는 계약 시 별도 안내합니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">고객 데이터는 누구 것인가요</summary>
          <div class="op-faq__a">개인정보 수집·이용 동의를 받는 주체는 온팜입니다. 파트너 약국은 배정된 고객에 한해 상담 내역을 열람하고 리필 안내를 보낼 수 있으며, 그 범위를 벗어난 활용은 하지 않습니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">상담 답변이 부담되지 않을까요</summary>
          <div class="op-faq__a">고민 한 줄에 서너 문장이면 충분합니다. 자주 오는 질문은 답변 틀과 카드 조합 가이드를 미리 드리고, 최종 판단과 답변만 담당 한약사가 하시면 됩니다.</div>
        </details>
      </div>
    </div>
  </section>

<section class="op-sec op-sec--charcoal" data-section="b06_apply" id="b06_apply" data-reveal>
    <div class="op-inner op-inner--narrow">
      <div class="op-center">
        <span class="op-eyebrow">파트너 신청</span>
        <h2 class="op-h2">1호 파트너 약국을 모집합니다</h2>
        <p class="op-lead op-mt-16">
          지역별로 순차 오픈합니다. 먼저 신청한 약국부터 배정 지역을 확정합니다.
        </p>
      </div>      <div class="fb-kakao-cta op-mt-32 op-center">
        <a class="op-btn op-btn--ghost op-btn--kakao"
   href="https://pf.kakao.com/_wxdxhrX/chat" target="_blank" rel="noopener noreferrer">
  <svg class="op-btn__ico" viewBox="0 0 24 24" width="21" height="21" aria-hidden="true"
       fill="none" stroke="currentColor" stroke-width="1.7"
       stroke-linecap="round" stroke-linejoin="round">
    <path d="M12 4.3c-4.4 0-8 2.8-8 6.2 0 2.2 1.5 4.1 3.7 5.2l-.9 3.2c-.1.4.3.7.6.5l3.6-2.2c.3 0 .7.1 1 .1 4.4 0 8-2.8 8-6.2s-3.6-6.2-8-6.2z"/>
  </svg>
  <span>카카오톡으로 문의하기</span>
</a>
      </div>
<form class="fb-form" action="https://docs.google.com/forms/d/e/1FAIpQLSedRtIMw1mZ46Pi5Pr-cyMNTwczceSBDDLfWY7-N1xZ5Q2ELw/formResponse" method="post"
            data-form="partner" target="op-form-sink">
        <div class="op-grid-2">
          <label class="fb-field">
            <span class="fb-label">약국명</span>
            <input class="fb-input" type="text" name="entry.1635817952"
                   data-field="pharmacy"
                   autocomplete="organization"
                   placeholder="온팜약국">
          </label>
          <label class="fb-field">
            <span class="fb-label">대표자명 (한약사)</span>
            <input class="fb-input" type="text" name="entry.961979349"
                   data-field="owner"
                   autocomplete="name"
                   placeholder="홍길동">
          </label>
        </div>

        <div class="op-grid-2 op-mt-24">
          <label class="fb-field fb-select-wrap">
            <span class="fb-label">지역</span>
            <select class="fb-select" name="entry.456105824" data-field="region">
              <option value="">지역을 선택해 주세요</option>
              <option>서울</option>
              <option>경기 · 인천</option>
              <option>강원</option>
              <option>충청 · 대전 · 세종</option>
              <option>전라 · 광주</option>
              <option>경상 · 부산 · 대구 · 울산</option>
              <option>제주</option>
            </select>
            <span class="fb-select-caret" aria-hidden="true">▼</span>
          </label>
          <label class="fb-field">
            <span class="fb-label">연락처</span>
            <input class="fb-input" type="tel" name="entry.281860316"
                   data-field="phone"
                   autocomplete="tel"
                   placeholder="010-0000-0000">
          </label>
        </div>

        <label class="fb-field op-mt-24">
          <span class="fb-label">문의 내용</span>
          <textarea class="fb-textarea" name="entry.79913361"
                    data-field="message"
                    placeholder="약국 위치나 지금 궁금한 점을 자유롭게 적어 주세요."></textarea>
        </label><label class="op-check fb-check">
          <input class="op-check__input" type="checkbox"
                 name="entry.1935935562" data-field="consent"
                 value="동의합니다" required>
          <span class="op-check__box" aria-hidden="true"></span>
          <span class="op-check__text">
            파트너 상담을 위해 입력한 정보를 온팜이 수집·이용하는 데 동의합니다.
          </span>
        </label>

        <div class="fb-submit">
          <button class="op-btn op-btn--lg op-btn--block" type="submit">
            파트너 신청
          </button>
        </div>
      </form>      <iframe class="op-form-sink" name="op-form-sink" title="폼 전송" hidden></iframe>
      <p class="op-form-thanks op-center op-mt-32" data-form-thanks="partner"
         role="status" tabindex="-1" hidden>신청이 접수되었습니다. 순서대로 확인해 연락드리겠습니다.</p>

      <p class="op-note op-center op-mt-20">
        신청해 주시면 담당자가 영업일 기준 3일 안에 연락드립니다.
      </p>

      <div class="fb-sign">
        <span class="op-logotype op-logotype--sm" role="img" aria-label="온팜"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 363 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/><path d="M239.89 17.19L235.32 17.19L235.32 13.64C235.32 10.32 232.63 7.63 229.31 7.63L239.89 7.63L239.89 1.79L206.88 1.79L206.88 7.63L211.61 7.63L211.61 17.19L206.88 17.19L206.88 23.04L239.89 23.04L239.89 17.19M225.82 17.19L221.1 17.19L221.1 13.64C221.1 10.32 218.41 7.63 215.09 7.63L225.82 7.63L225.82 17.19 Z"/><path d="M211.51 44.55C211.51 46.21 212.86 47.56 214.52 47.56L254.03 47.56L254.03 27.05L211.51 27.05L211.51 44.55M221.01 32.89H244.54V41.71H221.01Z Z"/><path d="M254.03 1.79L244.54 1.79L244.54 23.04L254.03 23.04L254.03 14.22L259.43 14.22L259.43 8.37L254.03 8.37L254.03 1.79 Z"/><path d="M168.96 35.91L159.46 35.91L159.46 44.55C159.46 46.21 160.81 47.56 162.47 47.56L201.98 47.56L201.98 41.71L168.96 41.71L168.96 35.91 Z"/><path d="M191.35 23.04C197.22 23.04 201.98 18.28 201.98 12.41C201.98 6.54 197.22 1.79 191.35 1.79L170.09 1.79C164.22 1.79 159.46 6.54 159.46 12.41C159.46 18.28 164.22 23.04 170.09 23.04L175.97 23.04L175.97 27.05L159.46 27.05L159.46 32.89L201.98 32.89L201.98 27.05L185.47 27.05L185.47 23.04L191.35 23.04M173.74 17.19C171.1 17.19 168.96 15.05 168.96 12.41C168.96 9.77 171.1 7.63 173.74 7.63L187.71 7.63C190.35 7.63 192.49 9.77 192.49 12.41C192.49 15.05 190.35 17.19 187.71 17.19L173.74 17.19 Z"/><path d="M360.63 1.79L321.12 1.79L321.12 7.63L354.14 7.63L354.14 17.63L363.63 17.63L363.63 4.79C363.63 3.13 362.29 1.79 360.63 1.79 Z"/><path d="M321.12 21.12L321.12 26.97L337.63 26.97L337.63 32.8L321.12 32.8L321.12 38.65L354.14 38.65L354.14 47.56L363.63 47.56L363.63 35.81C363.63 34.15 362.29 32.8 360.63 32.8L347.12 32.8L347.12 26.97L363.63 26.97L363.63 21.12L321.12 21.12 Z"/><path d="M308.23 30.16L268.72 30.16L268.72 36L301.74 36L301.74 47.56L311.23 47.56L311.23 33.16C311.23 31.5 309.89 30.16 308.23 30.16 Z"/><path d="M284.91 26.15C291.64 26.15 297.09 20.7 297.09 13.97C297.09 7.24 291.64 1.79 284.91 1.79L276.1 1.79C269.37 1.79 263.91 7.24 263.91 13.97C263.91 20.7 269.37 26.15 276.1 26.15L284.91 26.15M273.4 13.97C273.4 10.47 276.24 7.63 279.74 7.63L281.26 7.63C284.76 7.63 287.6 10.47 287.6 13.97C287.6 17.47 284.76 20.31 281.26 20.31L279.74 20.31C276.24 20.31 273.4 17.47 273.4 13.97 Z"/><path d="M311.23 1.79L301.74 1.79L301.74 26.15L311.23 26.15L311.23 21.56L316.63 21.56L316.63 15.71L311.23 15.71L311.23 12.23L316.63 12.23L316.63 6.38L311.23 6.38L311.23 1.79 Z"/></g></svg></span>
        <span>들르면, 건강이 켜집니다</span>
      </div>
    </div>
  </section>
`;
