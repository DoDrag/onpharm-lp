// =============================================================
// 이 파일은 scripts/export_nextjs.py 가 생성합니다. 직접 고치지 마세요.
// 고칠 곳은 생성기의 copy_*.json 입니다.
//   copy_a.json -> onpharm_build.py -> export_nextjs.py -> 이 파일
// =============================================================

// 면 A · 소비자 (9섹션). <div class="op-page"> 안에 넣어야 스타일이 먹습니다.
// 면 B 는 faceB.ts 에 따로 있다. 여기서 같이 export 하지 마라(청크 공유 누수).
export const FACE_A_HTML: string = `<section class="op-sec fa-film" data-section="a01_hero">
  <div class="fa-film__media" id="fa-hero-media" aria-hidden="true">
    <picture>
      <source media="(max-width: 767px)" srcset="/onpharm/hero_a_m_poster.jpg">
      <img class="fa-film__poster" src="/onpharm/hero_a_poster.jpg" alt="" width="1920" height="1080" fetchpriority="high" decoding="async">
    </picture>
    <video class="op-heromedia__video fa-film__video" autoplay muted loop playsinline preload="auto" tabindex="-1"
           poster="/onpharm/hero_a_poster.jpg" data-src="/onpharm/hero_a.mp4" data-src-mobile="/onpharm/hero_a_m.mp4" data-poster-mobile="/onpharm/hero_a_m_poster.jpg"></video>
    <span class="fa-film__veil"></span>
  </div>
  <div class="op-inner fa-film__inner">
    <div class="fa-film__copy">
      <h1 class="op-h1 fa-film__h1">내 몸에 맞는 영양제,<br><span class="op-accent--strong">동네 약국</span>이 찾아 드릴게요</h1>
      <p class="fa-film__lead">고민 한 줄만 남겨 주세요. 전담 상담사가 직접 읽고 답해 드려요.</p>
      <div class="fa-hero-cta fa-film__cta">
          <a class="op-btn op-btn--lg op-btn--kakao" href="https://pf.kakao.com/_wxdxhrX/chat" target="_blank" rel="noopener noreferrer"><svg class="op-btn__ico" viewBox="0 0 24 24" width="22" height="22" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.3c-4.4 0-8 2.8-8 6.2 0 2.2 1.5 4.1 3.7 5.2l-.9 3.2c-.1.4.3.7.6.5l3.6-2.2c.3 0 .7.1 1 .1 4.4 0 8-2.8 8-6.2s-3.6-6.2-8-6.2z"/></svg><span>실시간 상담</span><span class="op-sr"> (카카오톡 채널 1:1 채팅, 새 창)</span></a>

      </div>
      <div class="op-row op-row--wrap fa-film__chips">
          <span class="op-chip">상담 무료</span>
          <a class="op-chip fa-chip-cta fa-chip-cta--kakao" href="https://pf.kakao.com/_wxdxhrX/friend" target="_blank" rel="noopener noreferrer"><svg class="fa-chip-cta__ico" viewBox="0 0 24 24" width="17" height="17" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M12 4.3c-4.4 0-8 2.8-8 6.2 0 2.2 1.5 4.1 3.7 5.2l-.9 3.2c-.1.4.3.7.6.5l3.6-2.2c.3 0 .7.1 1 .1 4.4 0 8-2.8 8-6.2s-3.6-6.2-8-6.2z"/></svg>쿠폰받기<span class="op-sr"> (카카오톡 채널 친구 추가, 새 창)</span></a>
          <span class="op-chip">동네 약국 픽업</span>

      </div>
    </div>
  </div>
  <button type="button" class="op-pause op-pause--dark fa-film__pause" data-pause-toggle aria-controls="fa-hero-media" aria-pressed="false" aria-label="배경 영상 멈춤"><svg class="op-pause__i op-pause__i--pause" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><rect x="3.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/></svg><svg class="op-pause__i op-pause__i--play" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M4.5 2.8v10.4a.6.6 0 0 0 .9.5l8.2-5.2a.6.6 0 0 0 0-1L5.4 2.3a.6.6 0 0 0-.9.5z" fill="currentColor"/></svg></button>
</section>

<section class="op-sec op-sec--tint fa-voices-sec" data-section="a06_voices" data-reveal>
  <div class="op-inner op-center">
<p class="fa-eyebrow">한 줄 고민</p>    <h2 class="op-h2">이런 한 줄이면<br>충분해요</h2>    <p class="fa-promise"><span class="fa-promise__i">상담 무료</span><span class="fa-promise__i">같은 상담사가 이어서 봐요</span></p>
    <p class="op-lead op-measure--center fa-voices__cap">아래 사전 등록의 한 줄 고민 칸에 이렇게 적어 주시면 돼요.</p>
  </div>
  <ul class="op-sr">
    <li>하** 예시: 요즘 오후만 되면 축 처져요. 영양제는 많은데 뭐부터 먹어야 할지 모르겠어요.</li>
    <li>권** 예시: 장바구니에 담아 둔 영양제가 다섯 개인데, 결국 하나도 못 골랐어요.</li>
    <li>김** 예시: 지금 챙겨 먹는 게 있는데, 새로 더해도 겹치지 않는지 봐 주실 수 있나요?</li>
    <li>정** 예시: 야근이 많아서 밤에 누워도 한참 뒤척여요. 뭘 챙기면 좋을까요?</li>
    <li>손** 예시: 부모님 드릴 걸 고르고 있어요. 뭐가 맞는지 몰라서 한 줄 남겨요.</li>
    <li>이** 예시: 화면을 오래 보는 일을 해요. 저녁이면 눈이 뻑뻑한데 뭐부터 볼까요?</li>
    <li>박** 예시: 피부가 푸석한 느낌이 오래가요. 먹는 것부터 바꿔 보고 싶어요.</li>
    <li>윤** 예시: 동네 약국에서 받아 가려면 뭐부터 하면 되나요?</li>
    <li>장** 예시: 환절기마다 컨디션이 흔들려요. 미리 챙길 수 있는 게 있을까요?</li>
    <li>고** 예시: 아침을 자주 걸러요. 이런 리듬에도 맞는 게 있을까요?</li>
  </ul>
  <div class="op-marquee fa-voices op-mt-48" id="fa-voices" data-marquee data-speed="auto" data-pxs="75" style="--op-marquee-dur:41s" aria-hidden="true">
    <div class="op-marquee__track" tabindex="-1">
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_01.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">하**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">요즘 오후만 되면 축 처져요. 영양제는 많은데 뭐부터 먹어야 할지 모르겠어요.</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_02.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">권**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">장바구니에 담아 둔 영양제가 다섯 개인데, 결국 하나도 못 골랐어요.</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_03.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">김**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">지금 챙겨 먹는 게 있는데, 새로 더해도 겹치지 않는지 봐 주실 수 있나요?</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_04.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">정**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">야근이 많아서 밤에 누워도 한참 뒤척여요. 뭘 챙기면 좋을까요?</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_05.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">손**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">부모님 드릴 걸 고르고 있어요. 뭐가 맞는지 몰라서 한 줄 남겨요.</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_06.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">이**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">화면을 오래 보는 일을 해요. 저녁이면 눈이 뻑뻑한데 뭐부터 볼까요?</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_07.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">박**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">피부가 푸석한 느낌이 오래가요. 먹는 것부터 바꿔 보고 싶어요.</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_08.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">윤**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">동네 약국에서 받아 가려면 뭐부터 하면 되나요?</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_09.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">장**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">환절기마다 컨디션이 흔들려요. 미리 챙길 수 있는 게 있을까요?</p>
        </div>
      </div>
      <div class="op-marquee__item">
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_10.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">고**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">아침을 자주 걸러요. 이런 리듬에도 맞는 게 있을까요?</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_01.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">하**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">요즘 오후만 되면 축 처져요. 영양제는 많은데 뭐부터 먹어야 할지 모르겠어요.</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_02.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">권**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">장바구니에 담아 둔 영양제가 다섯 개인데, 결국 하나도 못 골랐어요.</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_03.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">김**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">지금 챙겨 먹는 게 있는데, 새로 더해도 겹치지 않는지 봐 주실 수 있나요?</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_04.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">정**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">야근이 많아서 밤에 누워도 한참 뒤척여요. 뭘 챙기면 좋을까요?</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_05.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">손**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">부모님 드릴 걸 고르고 있어요. 뭐가 맞는지 몰라서 한 줄 남겨요.</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_06.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">이**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">화면을 오래 보는 일을 해요. 저녁이면 눈이 뻑뻑한데 뭐부터 볼까요?</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_07.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">박**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">피부가 푸석한 느낌이 오래가요. 먹는 것부터 바꿔 보고 싶어요.</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_08.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">윤**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">동네 약국에서 받아 가려면 뭐부터 하면 되나요?</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_09.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">장**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">환절기마다 컨디션이 흔들려요. 미리 챙길 수 있는 게 있을까요?</p>
        </div>
      </div>
      <div class="op-marquee__item" data-marquee-dup>
        <div class="fa-voice">
          <div class="fa-voice__ph"><img src="/onpharm/a06_v_10.jpg" alt="" width="1364" height="1023" loading="lazy" decoding="async"></div>
          <div class="fa-voice__meta">
            <span class="fa-voice__name">고**</span>
            <span class="op-badge op-badge--line">예시</span>
          </div>
          <p class="fa-voice__t">아침을 자주 걸러요. 이런 리듬에도 맞는 게 있을까요?</p>
        </div>
      </div>
    </div>
  </div>
  <div class="op-inner fa-voices__ctl"><button type="button" class="op-pause " data-pause-toggle aria-controls="fa-voices" aria-pressed="false" aria-label="카드 흐름 멈춤"><svg class="op-pause__i op-pause__i--pause" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><rect x="3.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/></svg><svg class="op-pause__i op-pause__i--play" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M4.5 2.8v10.4a.6.6 0 0 0 .9.5l8.2-5.2a.6.6 0 0 0 0-1L5.4 2.3a.6.6 0 0 0-.9.5z" fill="currentColor"/></svg></button></div>
  <div class="op-inner op-center op-mt-32">
    <p class="op-note op-measure--center">카드의 문장과 사진은 이해를 돕기 위해 만든 예시입니다. 실제 이용자의 글이 아닙니다.</p>
  </div>
</section>

<section class="op-sec op-sec--tint fa-concern-sec" data-section="a02_concerns" data-concern-picker data-reveal>
  <div class="op-inner">
    <div class="op-center">
<p class="fa-eyebrow">고민 고르기</p>      <h2 class="op-h2">요즘 뭐가 제일 신경 쓰이세요?</h2>
      <p class="op-lead op-mt-16 op-measure--center">고민 하나에서 시작해도 충분해요. 전담 상담사가 거기서부터 같이 봐요.</p>
    </div></div>
  <div class="fa-wide">
    <div class="op-grid-4 fa-concerns op-mt-48" role="group" aria-label="고민 선택"
         data-scrub="0.09" data-scrub-from="0.98" data-scrub-to="1.45" data-scrub-media="(min-width: 1024px)">
      <button type="button" class="op-card fa-concern fa-concern--photo op-anim-rise op-anim-rise--sm"
              style="--op-d:0"
              data-concern="fatigue"
              aria-pressed="true"              aria-controls="a02-panel-fatigue">
        <span class="fa-concern__ph" aria-hidden="true"><img src="/onpharm/a02_c_fatigue.jpg" alt="" width="960" height="720" loading="lazy" decoding="async"><span class="op-chip op-chip--on fa-concern__chip">선택됨</span></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">피로</span>
          <span class="fa-concern__desc">오후만 되면 축 처져요</span>
        </span>
      </button>
      <button type="button" class="op-card fa-concern fa-concern--photo op-anim-rise op-anim-rise--sm"
              style="--op-d:1"
              data-concern="gut"
              aria-pressed="false"              aria-controls="a02-panel-gut">
        <span class="fa-concern__ph" aria-hidden="true"><img src="/onpharm/a02_c_gut.jpg" alt="" width="960" height="720" loading="lazy" decoding="async"><span class="op-chip op-chip--on fa-concern__chip">선택됨</span></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">장 컨디션</span>
          <span class="fa-concern__desc">매일이 들쭉날쭉해요</span>
        </span>
      </button>
      <button type="button" class="op-card fa-concern fa-concern--photo op-anim-rise op-anim-rise--sm"
              style="--op-d:2"
              data-concern="sleep"
              aria-pressed="false"              aria-controls="a02-panel-sleep">
        <span class="fa-concern__ph" aria-hidden="true"><img src="/onpharm/a02_c_sleep.jpg" alt="" width="960" height="720" loading="lazy" decoding="async"><span class="op-chip op-chip--on fa-concern__chip">선택됨</span></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">잠</span>
          <span class="fa-concern__desc">누워도 한참 뒤척여요</span>
        </span>
      </button>
      <button type="button" class="op-card fa-concern fa-concern--photo op-anim-rise op-anim-rise--sm"
              style="--op-d:3"
              data-concern="skin"
              aria-pressed="false"              aria-controls="a02-panel-skin">
        <span class="fa-concern__ph" aria-hidden="true"><img src="/onpharm/a02_c_skin.jpg" alt="" width="960" height="720" loading="lazy" decoding="async"><span class="op-chip op-chip--on fa-concern__chip">선택됨</span></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">피부</span>
          <span class="fa-concern__desc">푸석한 느낌이 오래가요</span>
        </span>
      </button>
      <button type="button" class="op-card fa-concern fa-concern--photo op-anim-rise op-anim-rise--sm"
              style="--op-d:0"
              data-concern="women"
              aria-pressed="false"              aria-controls="a02-panel-women">
        <span class="fa-concern__ph" aria-hidden="true"><img src="/onpharm/a02_c_women.jpg" alt="" width="960" height="720" loading="lazy" decoding="async"><span class="op-chip op-chip--on fa-concern__chip">선택됨</span></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">여성 컨디션</span>
          <span class="fa-concern__desc">달마다 차이가 커요</span>
        </span>
      </button>
      <button type="button" class="op-card fa-concern fa-concern--photo op-anim-rise op-anim-rise--sm"
              style="--op-d:1"
              data-concern="eye"
              aria-pressed="false"              aria-controls="a02-panel-eye">
        <span class="fa-concern__ph" aria-hidden="true"><img src="/onpharm/a02_c_eye.jpg" alt="" width="960" height="720" loading="lazy" decoding="async"><span class="op-chip op-chip--on fa-concern__chip">선택됨</span></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">눈</span>
          <span class="fa-concern__desc">화면 보는 시간이 길어요</span>
        </span>
      </button>
      <button type="button" class="op-card fa-concern fa-concern--photo op-anim-rise op-anim-rise--sm"
              style="--op-d:2"
              data-concern="immune"
              aria-pressed="false"              aria-controls="a02-panel-immune">
        <span class="fa-concern__ph" aria-hidden="true"><img src="/onpharm/a02_c_immune.jpg" alt="" width="960" height="720" loading="lazy" decoding="async"><span class="op-chip op-chip--on fa-concern__chip">선택됨</span></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">면역</span>
          <span class="fa-concern__desc">환절기마다 힘이 빠져요</span>
        </span>
      </button>
      <button type="button" class="op-card fa-concern fa-concern--photo fa-concern--go op-anim-rise op-anim-rise--sm"
              style="--op-d:3"
              data-concern="unsure"
              data-scroll-to="#signup">
        <span class="fa-concern__ph fa-concern__ph--blank" aria-hidden="true"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true" fill="none"
     stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="9"/>
  <path d="M9.6 9.5a2.5 2.5 0 1 1 3.3 2.9c-.7.3-1.1.9-1.1 1.6v.4"/>
  <path d="M11.9 17.2h.1"/>
</svg></span>
        <span class="fa-concern__body">
          <span class="fa-concern__label">뭐부터 볼지 모르겠어요</span>
          <span class="fa-concern__desc">고르는 것부터 어려워요</span>
          <span class="fa-concern__go">사전 등록으로 이동</span>
        </span>
      </button>
    </div>
  </div>
  <div class="op-inner">

    <div class="fa-rule" role="presentation"></div>
    <div class="op-center fa-suggest__head">
<p class="fa-eyebrow">성분 살펴보기</p>      <h3 class="fa-suggest__h">고른 고민에 따라 상담에서 같이 보는 성분이에요</h3>
    </div>
    <div class="fa-suggest" data-suggest>
      <div class="fa-suggest__panels" aria-live="polite">
        <div class="fa-suggest__panel is-on"
             id="a02-panel-fatigue" data-for="fatigue"
             role="group" aria-label="피로">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">피로</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
              <div class="fa-suggest__chips">
                <span class="op-chip fa-ing">비타민 C</span>
                <span class="op-chip fa-ing">비타민 B군</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-gut" data-for="gut"
             role="group" aria-label="장 컨디션">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">장 컨디션</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
              <div class="fa-suggest__chips">
                <span class="op-chip fa-ing">프로바이오틱스</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-sleep" data-for="sleep"
             role="group" aria-label="잠">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">잠</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
              <div class="fa-suggest__chips">
                <span class="op-chip fa-ing">테아닌</span>
                <span class="op-chip fa-ing">락티움</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-skin" data-for="skin"
             role="group" aria-label="피부">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">피부</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
              <div class="fa-suggest__chips">
                <span class="op-chip fa-ing">콜라겐</span>
                <span class="op-chip fa-ing">글루타치온</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-women" data-for="women"
             role="group" aria-label="여성 컨디션">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">여성 컨디션</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
              <div class="fa-suggest__chips">
                <span class="op-chip fa-ing">보라지유</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-eye" data-for="eye"
             role="group" aria-label="눈">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">눈</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
              <div class="fa-suggest__chips">
                <span class="op-chip fa-ing">루테인</span>
                <span class="op-chip fa-ing">지아잔틴</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-immune" data-for="immune"
             role="group" aria-label="면역">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">면역</span><span class="fa-suggest__sep" aria-hidden="true">·</span>이런 걸 함께 봐요</p>
              <div class="fa-suggest__chips">
                <span class="op-chip fa-ing">아연</span>
              </div>
            </div>
          </div>
        </div>
        <div class="fa-suggest__panel"
             id="a02-panel-unsure" data-for="unsure"
             role="group" aria-label="뭐부터 볼지 모르겠어요">
          <div class="fa-suggest__body">
            <div class="fa-suggest__text">
              <p class="fa-suggest__title"><span class="fa-suggest__for">뭐부터 볼지 모르겠어요</span></p>
              <p class="fa-suggest__hint">괜찮아요. 무엇부터 볼지는 상담에서 같이 정해요.</p>
              <p class="op-mt-16"><a class="op-btn op-btn--ghost"
                 href="#signup"
                 data-scroll-to="#signup">사전 등록하고 상담부터 시작하기</a></p>
            </div>
          </div>
        </div>
      </div>
      <p class="op-note fa-suggest__note op-center">성분 이름만 적어 둔 안내예요. 무엇을 담을지는 상담에서 사람마다 다르게 정해요.</p>
    </div>
    <p class="fa-concern-result"><b class="fa-mark" data-concern-result>피로</b>고민이 있으시다면</p>
    <div class="op-row op-row--center op-mt-16"><a class="op-btn fa-concern-cta" href="#signup" data-scroll-to="#signup" data-concern-cta>1분 상담 신청 (무료)</a></div>

    <p class="op-note op-mt-32 op-center">여기서는 하나씩 살펴보실 수 있어요. 여러 고민은 아래 사전 등록에서 함께 골라 주세요.</p>
  </div>
</section>

<section class="op-sec op-sec--tint fa-q" data-section="a02b_products" data-reveal>
  <div class="fa-q__band">
    <div class="fa-q__bg">
      <img src="/onpharm/a02b_lineup.jpg" alt="" width="1536" height="864" loading="lazy" decoding="async"
           data-scrub="0.12" data-scrub-from="1" data-scrub-to="0.35" class="op-anim-zoom">
      <span class="fa-q__veil"></span>
    </div>
    <div class="op-inner op-center fa-q__head">
<p class="fa-eyebrow fa-eyebrow--light">6일 카드</p>      <h2 class="op-h2 fa-q__h2">하루 한 칸씩 챙기는<br>나만의 6일 카드</h2>
      <p class="op-lead op-mt-16 op-measure--center fa-q__lead">상담에서 정한 구성을 6일 카드 한 장에 담아 둬요. 가까운 참여 약국에 들러 받아 가시면 돼요.</p>
    </div>
    <div class="fa-wide fa-q__row">
      <ul class="fa-q__cards">
        <li class="fa-q__card" style="--i:0">
          <p class="fa-q__t">상담으로 정해요</p>
          <p class="fa-q__d">무엇을 담을지는 전담 상담사와 이야기해서 정해요.</p>
          <span class="fa-q__ico"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4.5 5h15A1.5 1.5 0 0 1 21 6.5v9a1.5 1.5 0 0 1-1.5 1.5H11l-4.5 3.5V17h-2A1.5 1.5 0 0 1 3 15.5v-9A1.5 1.5 0 0 1 4.5 5z"/><path d="M7.5 9.5h9M7.5 12.5h5.5"/>
</svg></span>
        </li>
        <li class="fa-q__card" style="--i:1">
          <p class="fa-q__t">6일 카드 한 장</p>
          <p class="fa-q__d">상담에서 정한 구성을 카드 한 장에 담아 둬요.</p>
          <span class="fa-q__ico"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M9 5.5v13M15 5.5v13M3.5 12h17" stroke-dasharray="1.6 2.2"/>
</svg></span>
        </li>
        <li class="fa-q__card" style="--i:2">
          <p class="fa-q__t">하루 한 칸씩</p>
          <p class="fa-q__d">하루 한 칸씩 뜯어서 챙기는 카드형 소포장이에요.</p>
          <span class="fa-q__ico"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <circle cx="12" cy="12" r="4"/><path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.6 5.6 7 7M17 17l1.4 1.4M18.4 5.6 17 7M7 17l-1.4 1.4"/>
</svg></span>
        </li>
        <li class="fa-q__card" style="--i:3">
          <p class="fa-q__t">약국에서 받아요</p>
          <p class="fa-q__d">온라인 판매 없이 가까운 참여 약국에서 직접 받아 가요.</p>
          <span class="fa-q__ico"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M4.5 10.5V19a1 1 0 0 0 1 1h13a1 1 0 0 0 1-1v-8.5"/><path d="M3 9.5 4.7 5A1.5 1.5 0 0 1 6.1 4h11.8a1.5 1.5 0 0 1 1.4 1L21 9.5a2.6 2.6 0 0 1-4.5 1.6 2.6 2.6 0 0 1-4.5 0 2.6 2.6 0 0 1-4.5 0A2.6 2.6 0 0 1 3 9.5z"/><path d="M10 20v-4.5h4V20"/>
</svg></span>
        </li>
        <li class="fa-q__card" style="--i:4">
          <p class="fa-q__t">먼저 여쭤봐요</p>
          <p class="fa-q__d">다 드실 때쯤 전담 상담사가 먼저 여쭤봐요.</p>
          <span class="fa-q__ico"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <path d="M6 16.5V11a6 6 0 0 1 12 0v5.5l1.5 2h-15z"/><path d="M10 20.5a2 2 0 0 0 4 0"/>
</svg></span>
        </li>
      </ul>
    </div>
  </div>
  <div class="op-inner">
    <p class="op-note op-center op-mt-24">전달 방식을 보여드리는 예시예요. 실제 구성은 상담에서 정합니다.</p>
  </div>
</section>

<section class="op-sec op-sec--tint fa-how" data-section="a03_how">
  <div class="op-inner">
    <div class="fa-tabs" id="fa-tabs" data-tabs data-interval="4500">
      <h2 class="op-sr">고민 한 줄에서 동네 약국 픽업까지</h2>
<p class="fa-eyebrow op-center">이용 순서</p>      <div class="fa-tabs__list" data-tablist aria-label="이용 순서">
        <button type="button" class="fa-tabs__tab" data-tab id="fa-tab-1">고민 적기</button>
        <button type="button" class="fa-tabs__tab" data-tab id="fa-tab-2">상담 답변</button>
        <button type="button" class="fa-tabs__tab" data-tab id="fa-tab-3">쿠폰 안내</button>
        <button type="button" class="fa-tabs__tab" data-tab id="fa-tab-4">약국 픽업</button>
      </div>
      <div class="fa-tabs__panels">
        <div class="fa-tabs__panel is-active" data-tabpanel id="fa-tabpanel-1">
          <div class="fa-tabs__text">
            <p class="fa-tabs__num"><span>1</span>고민 적기</p>
            <h3 class="fa-tabs__h">고민은<br>한 줄이면 돼요</h3>
            <p class="fa-tabs__d">카카오톡이나 사전 등록 칸에 고민을 한 줄 남겨요.</p>
            <p class="fa-tabs__dots" aria-hidden="true"><span class="is-on"></span><span class=""></span><span class=""></span><span class=""></span></p>
          </div>
          <div class="fa-tabs__visual">
<div class="fa-ui">
  <span class="fa-ui__float fa-ui__float--mark" aria-hidden="true"><span class="op-mark " aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/></g></svg></span></span>
  <div class="fa-phone">
    <div class="fa-phone__screen">
      <p class="fa-phone__bar"><span class="fa-phone__title">온팜 상담</span><span class="fa-phone__sub">전담 상담사와 1:1</span></p>
      <div class="fa-phone__body">
        <div class="fa-bub fa-bub--pro"><span class="fa-bub__who">온팜</span>고민 한 줄만 남겨 주세요. 전담 상담사가 직접 읽고 답해 드려요.</div>
        <div class="fa-bub fa-bub--me fa-anim" style="--d:0.35">요즘 오후만 되면 축 처져요. 영양제는 많은데 뭐부터 먹어야 할지 모르겠어요.<span class="fa-bub__time">오후 9:12</span></div>
      </div>
      <p class="fa-phone__input"><span>고민을 한 줄 적어 주세요</span><span class="fa-phone__send" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14" focusable="false"><path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></p>
    </div>
  </div>
</div>

          </div>
        </div>
        <div class="fa-tabs__panel" data-tabpanel id="fa-tabpanel-2">
          <div class="fa-tabs__text">
            <p class="fa-tabs__num"><span>2</span>상담 답변</p>
            <h3 class="fa-tabs__h">전담 상담사가<br>직접 읽고 답해요</h3>
            <p class="fa-tabs__d">배정된 전담 상담사가 직접 읽고 답을 드려요.</p>
            <p class="fa-tabs__dots" aria-hidden="true"><span class=""></span><span class="is-on"></span><span class=""></span><span class=""></span></p>
          </div>
          <div class="fa-tabs__visual">
<div class="fa-ui">
  <span class="fa-ui__float fa-ui__float--mark" aria-hidden="true"><span class="op-mark " aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/></g></svg></span></span>
  <span class="fa-ui__float fa-ui__float--face" aria-hidden="true"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>
  <div class="fa-phone">
    <div class="fa-phone__screen">
      <p class="fa-phone__bar"><span class="fa-phone__title">온팜 상담</span><span class="fa-phone__sub">전담 상담사와 1:1</span></p>
      <div class="fa-phone__body">
        <div class="fa-bub fa-bub--me">요즘 오후만 되면 축 처져요. 영양제는 많은데 뭐부터 먹어야 할지 모르겠어요.<span class="fa-bub__time">오후 9:12</span></div>
        <div class="fa-bubwrap">
          <span class="fa-typing" aria-hidden="true"><i></i><i></i><i></i></span>
          <div class="fa-bub fa-bub--pro fa-anim" style="--d:1">
            <span class="fa-bub__who"><span class="fa-bub__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>전담 상담사<span class="op-badge op-badge--gray fa-bub__badge">예시</span></span>
            안녕하세요, 가까운 참여 약국에서 담당하게 된 상담사입니다. 하루 식사 리듬부터 같이 볼게요. 지금 챙겨 드시는 게 있으면 알려 주세요.<span class="fa-bub__time">오후 9:40</span>
          </div>
        </div>
      </div>
      <p class="fa-phone__input"><span>고민을 한 줄 적어 주세요</span><span class="fa-phone__send" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14" focusable="false"><path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></p>
    </div>
  </div>
</div>

          </div>
        </div>
        <div class="fa-tabs__panel" data-tabpanel id="fa-tabpanel-3">
          <div class="fa-tabs__text">
            <p class="fa-tabs__num"><span>3</span>쿠폰 안내</p>
            <h3 class="fa-tabs__h">쿠폰과 받을 약국을<br>알려 드려요</h3>
            <p class="fa-tabs__d">무엇부터 먹어볼지 정하면 쿠폰과 받을 약국 안내를 보내드려요.</p>
            <p class="fa-tabs__dots" aria-hidden="true"><span class=""></span><span class=""></span><span class="is-on"></span><span class=""></span></p>
          </div>
          <div class="fa-tabs__visual">
<div class="fa-ui">
  <span class="fa-ui__float fa-ui__float--mark" aria-hidden="true"><span class="op-mark " aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 153 50" role="img" aria-label="ONPHARM"><g fill="currentColor"><path d="M128.05 0.98L23.01 0.98C10.17 0.98 -0.28 11.43 -0.28 24.27C-0.28 37.11 10.17 47.56 23.01 47.56L128.05 47.56C140.89 47.56 151.34 37.11 151.34 24.27C151.34 11.43 140.89 0.98 128.05 0.98M128.05 36.98L23.01 36.98C16 36.98 10.3 31.28 10.3 24.27C10.3 17.26 16 11.56 23.01 11.56L128.05 11.56C135.06 11.56 140.77 17.26 140.77 24.27C140.77 31.28 135.06 36.98 128.05 36.98 Z"/><path d="M24.2 16.99C20.19 16.99 16.92 20.26 16.92 24.27C16.92 28.29 20.19 31.55 24.2 31.55C28.22 31.55 31.48 28.29 31.48 24.27C31.48 20.26 28.22 16.99 24.2 16.99 Z"/></g></svg></span></span>
  <div class="fa-phone">
    <div class="fa-phone__screen">
      <p class="fa-phone__bar"><span class="fa-phone__title">온팜 상담</span><span class="fa-phone__sub">전담 상담사와 1:1</span></p>
      <div class="fa-phone__body">
        <div class="fa-bub fa-bub--pro fa-anim" style="--d:0.25">
          <span class="fa-bub__who">온팜</span>
          픽업 쿠폰이 발급됐어요. 연수구 참여 약국에서 6일 카드를 받아 가세요.<span class="fa-bub__time">오후 9:41</span>
        </div>
        <div class="fa-coupon fa-anim" style="--d:0.75">
          <span class="fa-coupon__stub" aria-hidden="true"><svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round">
  <rect x="3" y="5" width="18" height="14" rx="2.5"/><path d="M9 5.5v13M15 5.5v13M3.5 12h17" stroke-dasharray="1.6 2.2"/>
</svg></span>
          <span class="fa-coupon__body">
            <span class="fa-coupon__t">픽업 쿠폰<span class="op-badge op-badge--gray fa-bub__badge">예시</span></span>
            <span class="fa-coupon__row"><span>받는 곳</span>연수구 참여 약국</span>
            <span class="fa-coupon__row"><span>받는 것</span>6일 카드</span>
          </span>
        </div>
      </div>
      <p class="fa-phone__input"><span>고민을 한 줄 적어 주세요</span><span class="fa-phone__send" aria-hidden="true"><svg viewBox="0 0 16 16" width="14" height="14" focusable="false"><path d="M8 13V3.5M3.8 7.5 8 3.3l4.2 4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"/></svg></span></p>
    </div>
  </div>
</div>

          </div>
        </div>
        <div class="fa-tabs__panel" data-tabpanel id="fa-tabpanel-4">
          <div class="fa-tabs__text">
            <p class="fa-tabs__num"><span>4</span>약국 픽업</p>
            <h3 class="fa-tabs__h">동네 약국에서<br>6일 카드를 받아요</h3>
            <p class="fa-tabs__d">가까운 참여 약국에 들러 6일 카드를 받아 가세요.</p>
            <p class="fa-tabs__dots" aria-hidden="true"><span class=""></span><span class=""></span><span class=""></span><span class="is-on"></span></p>
          </div>
          <div class="fa-tabs__visual">
<div class="fa-ui fa-ui--card">
  <div class="fa-daycard" data-daycard role="group" aria-label="직접 눌러 보는 6일 카드"
     data-take="{d} 칸 뜯기" data-back="{d} 칸 되돌리기"
     data-hint="오늘 칸을 눌러 한 칸 뜯어 보세요." data-taken="{n}칸 챙겼어요. 남은 칸은 {left}칸이에요." data-done="6일을 다 챙기셨어요. 이때쯤 전담 상담사가 먼저 여쭤봐요.">
  <div class="fa-daycard__card">
    <div class="fa-daycard__band">
      <span class="fa-daycard__name">6일 카드</span>
      <span class="fa-daycard__for">For 김**님 · 하루 한 칸</span>
    </div>
    <ol class="fa-daycard__cells">
      <li class="fa-daycard__slot">
        <button type="button" class="fa-daycard__cell" data-day="1일" aria-pressed="false"
                aria-label="1일 칸 뜯기">
          <span class="fa-daycard__pouch" aria-hidden="true"></span>
          <span class="fa-daycard__tick" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M4.5 10.5l3.6 3.4 7.4-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="fa-daycard__day">1일</span>
        </button>
      </li>
      <li class="fa-daycard__slot">
        <button type="button" class="fa-daycard__cell" data-day="2일" aria-pressed="false"
                aria-label="2일 칸 뜯기">
          <span class="fa-daycard__pouch" aria-hidden="true"></span>
          <span class="fa-daycard__tick" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M4.5 10.5l3.6 3.4 7.4-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="fa-daycard__day">2일</span>
        </button>
      </li>
      <li class="fa-daycard__slot">
        <button type="button" class="fa-daycard__cell" data-day="3일" aria-pressed="false"
                aria-label="3일 칸 뜯기">
          <span class="fa-daycard__pouch" aria-hidden="true"></span>
          <span class="fa-daycard__tick" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M4.5 10.5l3.6 3.4 7.4-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="fa-daycard__day">3일</span>
        </button>
      </li>
      <li class="fa-daycard__slot">
        <button type="button" class="fa-daycard__cell" data-day="4일" aria-pressed="false"
                aria-label="4일 칸 뜯기">
          <span class="fa-daycard__pouch" aria-hidden="true"></span>
          <span class="fa-daycard__tick" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M4.5 10.5l3.6 3.4 7.4-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="fa-daycard__day">4일</span>
        </button>
      </li>
      <li class="fa-daycard__slot">
        <button type="button" class="fa-daycard__cell" data-day="5일" aria-pressed="false"
                aria-label="5일 칸 뜯기">
          <span class="fa-daycard__pouch" aria-hidden="true"></span>
          <span class="fa-daycard__tick" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M4.5 10.5l3.6 3.4 7.4-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="fa-daycard__day">5일</span>
        </button>
      </li>
      <li class="fa-daycard__slot">
        <button type="button" class="fa-daycard__cell" data-day="6일" aria-pressed="false"
                aria-label="6일 칸 뜯기">
          <span class="fa-daycard__pouch" aria-hidden="true"></span>
          <span class="fa-daycard__tick" aria-hidden="true"><svg viewBox="0 0 20 20" width="18" height="18"><path d="M4.5 10.5l3.6 3.4 7.4-8" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"/></svg></span>
          <span class="fa-daycard__day">6일</span>
        </button>
      </li>
    </ol>
  </div>
  <p class="fa-daycard__status" role="status" aria-live="polite">하루에 한 칸씩 뜯어서 챙기는 카드예요.</p>
  <button type="button" class="fa-daycard__reset" hidden>처음부터 다시</button>
</div>
  <p class="op-caption op-mt-12 op-center">직접 눌러 보는 6일 카드</p>
</div>

          </div>
        </div>
      </div>
      <div class="fa-tabs__ctl"><button type="button" class="op-pause fa-tabs__pause" data-pause-toggle aria-controls="fa-tabs" aria-pressed="false" aria-label="이용 순서 자동 넘김 멈춤"><svg class="op-pause__i op-pause__i--pause" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><rect x="3.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/></svg><svg class="op-pause__i op-pause__i--play" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M4.5 2.8v10.4a.6.6 0 0 0 .9.5l8.2-5.2a.6.6 0 0 0 0-1L5.4 2.3a.6.6 0 0 0-.9.5z" fill="currentColor"/></svg></button></div>
    </div>
  </div>
</section>

<section class="op-sec fa-consult" data-section="a05b_examples" data-reveal>
  <div class="op-inner op-center">
<p class="fa-eyebrow">상담 예시</p>    <h2 class="op-h2">이렇게 답해 드려요</h2>
  </div>
  <div class="op-carousel fa-consult__car op-mt-48" data-carousel data-interval="4500">
    <div class="op-carousel__viewport fa-consult__vp" aria-live="off">
      <span class="fa-consult__phone" aria-hidden="true"><span class="fa-consult__notch"></span></span>
      <div class="op-carousel__track fa-consult__track">
        <div class="op-carousel__slide fa-consult__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 1">
          <div class="fa-consult__screen">
            <p class="fa-consult__bar">상담 상세<span class="op-badge op-badge--line">예시</span></p>
            <div class="fa-consult__q">
              <span class="fa-consult__qk">남기신 고민</span>
              <p class="fa-consult__qt">장 컨디션이 들쭉날쭉해요. 뭘 먹어야 할지 모르겠어요.</p>
            </div>
            <div class="fa-consult__a">
              <span class="fa-consult__who"><span class="fa-consult__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>전담 상담사</span>
              <p class="fa-consult__p">물 마시는 양과 식이섬유 한 끼부터 같이 챙겨 봐요.</p>
              <p class="fa-consult__p">그다음 프로바이오틱스 카테고리를 6일 카드로 가볍게 시작해요.</p>
            </div>
          </div>
        </div>
        <div class="op-carousel__slide fa-consult__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 2">
          <div class="fa-consult__screen">
            <p class="fa-consult__bar">상담 상세<span class="op-badge op-badge--line">예시</span></p>
            <div class="fa-consult__q">
              <span class="fa-consult__qk">남기신 고민</span>
              <p class="fa-consult__qt">야근이 많아 밤에 누워도 한참 뒤척여요.</p>
            </div>
            <div class="fa-consult__a">
              <span class="fa-consult__who"><span class="fa-consult__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>전담 상담사</span>
              <p class="fa-consult__p">한 주만 잠드는 시각과 마지막 커피 시각을 적어 봐 주세요.</p>
              <p class="fa-consult__p">그다음 마그네슘 카테고리를 6일 카드로 함께 볼게요.</p>
            </div>
          </div>
        </div>
        <div class="op-carousel__slide fa-consult__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 3">
          <div class="fa-consult__screen">
            <p class="fa-consult__bar">상담 상세<span class="op-badge op-badge--line">예시</span></p>
            <div class="fa-consult__q">
              <span class="fa-consult__qk">남기신 고민</span>
              <p class="fa-consult__qt">오후만 되면 축 처져요. 뭐부터 먹어야 할까요?</p>
            </div>
            <div class="fa-consult__a">
              <span class="fa-consult__who"><span class="fa-consult__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>전담 상담사</span>
              <p class="fa-consult__p">점심에 단백질 한 가지를 챙기는 것부터 해 봐요.</p>
              <p class="fa-consult__p">그다음 비타민 B군 카테고리를 6일 카드로 함께 볼게요.</p>
            </div>
          </div>
        </div>
        <div class="op-carousel__slide fa-consult__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 4">
          <div class="fa-consult__screen">
            <p class="fa-consult__bar">상담 상세<span class="op-badge op-badge--line">예시</span></p>
            <div class="fa-consult__q">
              <span class="fa-consult__qk">남기신 고민</span>
              <p class="fa-consult__qt">화면을 오래 보는 일을 해요. 눈 건강은 뭐부터 챙길까요?</p>
            </div>
            <div class="fa-consult__a">
              <span class="fa-consult__who"><span class="fa-consult__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>전담 상담사</span>
              <p class="fa-consult__p">50분에 한 번 먼 곳을 보는 습관부터 들여 봐요.</p>
              <p class="fa-consult__p">그다음 루테인 카테고리를 6일 카드로 함께 볼게요.</p>
            </div>
          </div>
        </div>
        <div class="op-carousel__slide fa-consult__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 5">
          <div class="fa-consult__screen">
            <p class="fa-consult__bar">상담 상세<span class="op-badge op-badge--line">예시</span></p>
            <div class="fa-consult__q">
              <span class="fa-consult__qk">남기신 고민</span>
              <p class="fa-consult__qt">피부가 푸석한 느낌이 오래가요.</p>
            </div>
            <div class="fa-consult__a">
              <span class="fa-consult__who"><span class="fa-consult__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>전담 상담사</span>
              <p class="fa-consult__p">자기 전 물 한 잔과 잠드는 시각부터 맞춰 봐요.</p>
              <p class="fa-consult__p">그다음 콜라겐 카테고리를 6일 카드로 함께 볼게요.</p>
            </div>
          </div>
        </div>
        <div class="op-carousel__slide fa-consult__slide" role="group" aria-roledescription="슬라이드" aria-label="상담 예시 6">
          <div class="fa-consult__screen">
            <p class="fa-consult__bar">상담 상세<span class="op-badge op-badge--line">예시</span></p>
            <div class="fa-consult__q">
              <span class="fa-consult__qk">남기신 고민</span>
              <p class="fa-consult__qt">부모님 드릴 걸 고르는데 뭐가 맞을지 모르겠어요.</p>
            </div>
            <div class="fa-consult__a">
              <span class="fa-consult__who"><span class="fa-consult__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>전담 상담사</span>
              <p class="fa-consult__p">지금 드시는 것부터 알려 주시면 겹치는 성분이 없는지 먼저 볼게요.</p>
              <p class="fa-consult__p">그다음 한 가지만 골라 6일 카드로 함께 볼게요.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="op-carousel__nav">
      <button type="button" class="op-carousel__arrow op-carousel__prev" aria-label="이전 예시"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 5l-7 7 7 7"/></svg></button>
      <button type="button" class="op-carousel__dot is-on" aria-label="상담 예시 1"></button>
      <button type="button" class="op-carousel__dot" aria-label="상담 예시 2"></button>
      <button type="button" class="op-carousel__dot" aria-label="상담 예시 3"></button>
      <button type="button" class="op-carousel__dot" aria-label="상담 예시 4"></button>
      <button type="button" class="op-carousel__dot" aria-label="상담 예시 5"></button>
      <button type="button" class="op-carousel__dot" aria-label="상담 예시 6"></button>
      <button type="button" class="op-carousel__arrow op-carousel__next" aria-label="다음 예시"><svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 5l7 7-7 7"/></svg></button>
      <button type="button" class="op-pause op-carousel__pause" aria-pressed="false" aria-label="예시 자동 넘김 멈춤"><svg class="op-pause__i op-pause__i--pause" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><rect x="3.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/><rect x="9.5" y="2.5" width="3" height="11" rx="1" fill="currentColor"/></svg><svg class="op-pause__i op-pause__i--play" viewBox="0 0 16 16" width="14" height="14" aria-hidden="true" focusable="false"><path d="M4.5 2.8v10.4a.6.6 0 0 0 .9.5l8.2-5.2a.6.6 0 0 0 0-1L5.4 2.3a.6.6 0 0 0-.9.5z" fill="currentColor"/></svg></button>
    </div>
  </div>
  <div class="op-inner op-center">
    <p class="fa-consult__foot op-mt-32"><span class="op-badge">6일 뒤</span><span>다 먹을 때쯤 상담사가 먼저 “어땠어요?” 여쭤봐요. 이어서 볼지 같이 정하면 돼요.</span></p>
    <p class="op-note op-mt-24 op-measure--center">상담 예시는 이해를 돕기 위해 만든 가상의 대화입니다. 실제 상담 내용은 개인별로 다르며, 의학적 진단이나 치료를 대신하지 않습니다. 건강기능식품은 의약품이 아닙니다.</p>
  </div>
</section>

<section class="op-sec fa-promise-sec" data-section="a05c_promise" data-reveal>
  <div class="op-inner op-center">
<p class="fa-eyebrow">온팜 방식</p>    <h2 class="op-h2">상담부터 받는 날까지<br>가까이에서 챙겨요</h2>
    <p class="op-lead op-mt-16 op-measure--center">처음 상담부터 다 드실 때까지 같은 상담사가 이어서 봐요.</p>
    <ul class="fa-circles">
      <li class="fa-circle" style="--i:0">
        <span class="fa-circle__ph"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>
        <p class="fa-circle__t">상담은 무료예요</p>
        <p class="fa-circle__d">고민 한 줄만 남기면<br>전담 상담사가 직접 답해요</p>
      </li>
      <li class="fa-circle" style="--i:1">
        <span class="fa-circle__ph"><img src="/onpharm/a02b_handover.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>
        <p class="fa-circle__t">동네 약국에서 받아요</p>
        <p class="fa-circle__d">온라인 판매 없이<br>가까운 참여 약국에서 건네 드려요</p>
      </li>
      <li class="fa-circle" style="--i:2">
        <span class="fa-circle__ph" style="--pos:68% 45%"><img src="/onpharm/a01_story_1.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>
        <p class="fa-circle__t">다 드실 때쯤 먼저 여쭤봐요</p>
        <p class="fa-circle__d">6일 카드가 끝나 갈 즈음<br>상담사가 먼저 연락드려요</p>
      </li>
    </ul>
  </div>
</section>

<section class="op-sec fa-coach" data-section="a05_pharmacist" data-reveal>
  <div class="op-inner">
    <div class="op-center">
<p class="fa-eyebrow">전담 상담사</p>      <h2 class="op-h2">내 이름을 아는<br><span class="fa-mark">전담 상담사</span>가 생겨요</h2>
      <p class="op-lead op-mt-16 op-measure--center">매번 다른 사람에게 처음부터 다시 설명하지 않아도 돼요.</p>
      <div class="op-row op-row--center op-mt-32"><a class="op-btn op-btn--lg" href="#signup" data-scroll-to="#signup">1분 상담 신청</a></div>
    </div>

    <ol class="fa-flow">
      <li class="fa-flow__step" style="--i:0">
        <div class="fa-flow__card">
          <p class="fa-flow__head"><span class="fa-flow__title">전담 상담사 카드</span><span class="op-badge op-badge--gray">예시</span></p>
          <div class="fa-flow__who">
            <span class="fa-flow__av"><img src="/onpharm/a05_counselor_portrait.jpg" alt="" width="480" height="480" loading="lazy" decoding="async"></span>
            <span><span class="fa-flow__name">김O연 상담사</span><span class="fa-flow__role">온팜 전담 상담사</span></span>
          </div>
          <div class="op-kv"><span class="op-kv__k">약국</span><span class="op-kv__v">연수구 참여 약국</span></div>
          <div class="op-kv"><span class="op-kv__k">배정일</span><span class="op-kv__v">2026-03-04</span></div>
        </div>
        <p class="fa-flow__promise"><span class="fa-flow__ck"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span><span><b class="fa-flow__pt">매번 같은 상담사가 답해요</b><span class="fa-flow__pd">한 번 배정되면 담당이 바뀌지 않아요.</span></span></p>
      </li>
      <li class="fa-flow__step" style="--i:1">
        <div class="fa-flow__card">
          <p class="fa-flow__head"><span class="fa-flow__title">상담 기록</span><span class="op-badge op-badge--gray">예시</span></p>
          <div class="op-kv"><span class="op-kv__k">상담 이력</span><span class="op-kv__v">3회</span></div>
          <p class="fa-flow__line">하루 식사 리듬 살펴보기</p>
          <p class="fa-flow__line">점심에 단백질 한 가지 챙기기</p>
          <p class="fa-flow__line">6일 카드 첫 구성 정하기</p>
        </div>
        <p class="fa-flow__promise"><span class="fa-flow__ck"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span><span><b class="fa-flow__pt">지난 상담을 기억해요</b><span class="fa-flow__pd">지난 상담 내용을 적어 두고 이어서 봐요.</span></span></p>
      </li>
      <li class="fa-flow__step" style="--i:2">
        <div class="fa-flow__card">
          <p class="fa-flow__head"><span class="fa-flow__title">다음 알림</span><span class="op-badge op-badge--gray">예시</span></p>
          <p class="fa-flow__big">D-4</p>
          <p class="fa-flow__cells" aria-hidden="true"><span class="is-done"></span><span class="is-done"></span><span class=""></span><span class=""></span><span class=""></span><span class=""></span></p>
          <p class="fa-flow__line">6일 카드 남은 칸 4</p>
        </div>
        <p class="fa-flow__promise"><span class="fa-flow__ck"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span><span><b class="fa-flow__pt">다 드실 때쯤 먼저 연락드려요</b><span class="fa-flow__pd">6일 카드가 끝나 갈 즈음 여쭤봐요.</span></span></p>
      </li>
    </ol>

    <div class="fa-coach__photo">
      <div class="fa-coach__media"><img src="/onpharm/a05_counselor.jpg" alt="" width="1536" height="864" loading="lazy" decoding="async"></div>
      <div class="fa-coach__bub fa-coach__bub--q"><span class="fa-coach__k">남기신 고민</span><p>지금 챙겨 먹는 게 있는데, 새로 더해도 겹치지 않는지 봐 주실 수 있나요?</p></div>
      <div class="fa-coach__bub fa-coach__bub--a"><span class="fa-coach__k">전담 상담사<span class="op-badge op-badge--gray">예시</span></span><p>지금 드시는 것부터 알려 주시면 겹치는 성분이 없는지 먼저 볼게요.</p></div>
    </div>
    <p class="fa-coach__cap"><span class="fa-flow__ck"><svg viewBox="0 0 24 24" width="30" height="30" aria-hidden="true">
  <circle cx="12" cy="12" r="11" fill="#FEF3E9"/>
  <path d="M7.2 12.4l3.2 3.2 6.4-6.9" fill="none" stroke="#FF6900"
        stroke-width="2.3" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span><b>동네라 그냥 들르면 돼요</b><span>지나는 길에 약국에 들러 받아 가세요.</span></p>
    <p class="op-note op-mt-24 op-center op-measure--center">가상의 예시 카드입니다. 실제 배정은 사전 등록 순서대로 안내드려요.</p>
  </div>
</section>

<section class="op-sec fa-pharm-sec fa-pharm-band" data-section="a08_pharmacies" data-reveal><div class="fa-pharm__bg">
    <img src="/onpharm/a08_pharmacies.jpg" alt="" width="1536" height="864" loading="lazy" decoding="async"
         data-scrub="0.12" data-scrub-from="1" data-scrub-to="0.35" class="op-anim-zoom">
    <span class="fa-pharm__veil"></span>
  </div>
  <div class="op-inner fa-pharm__inner">
    <div class="op-center">
<p class="fa-eyebrow fa-eyebrow--light">참여 약국</p>      <h2 class="op-h2">함께하는 약국</h2>
      <p class="op-lead op-mt-16 op-measure--center">네 곳에서 먼저 시작합니다. 가까운 동네부터 차례로 문을 열어요.</p>
    </div>    <div class="fa-finder op-mt-40" data-areafinder
         data-found="{area} · {status}. 상세 위치는 문을 여는 날 사전 등록하신 분께 먼저 알려 드려요." data-none="아직 준비 중인 동네예요. 사전 등록에 동네를 남겨 주시면 가까운 곳부터 차례로 알려 드려요." data-empty="구 이름을 먼저 적어 주세요.">
      <div class="fa-finder__chips" role="group" aria-label="우리 동네 찾기">
        <button type="button" class="fa-finder__chip" data-region="" aria-pressed="true">전체</button>
        <button type="button" class="fa-finder__chip" data-region="인천" aria-pressed="false">인천</button>
        <button type="button" class="fa-finder__chip" data-region="서울" aria-pressed="false">서울</button>
      </div>
      <form class="fa-finder__form" role="search" data-finder-form>
        <label class="op-sr" for="fa-finder-q">동네 이름</label>
        <input class="fa-input fa-finder__input" id="fa-finder-q" type="search" autocomplete="off" placeholder="구 이름을 적어 보세요 (예: 마포구)">
        <button type="submit" class="op-btn fa-finder__go">찾기</button>
      </form>
      <div class="fa-finder__result" role="status" aria-live="polite">
        <p class="fa-finder__msg"></p>
        <a class="op-btn op-btn--ghost op-btn--sm fa-finder__cta" href="#signup" hidden>이 동네로 사전 등록</a>
      </div>
    </div>
<div class="fa-pins op-grid-4">
      <div class="fa-pin fa-pin--lead" data-area="인천 연수구" data-region="인천" data-status="1호 준비 중" style="--i:0">
        <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
        <p class="fa-pin__area">인천 연수구</p>
        <p class="fa-pin__status">1호 준비 중</p>
      </div>
      <div class="fa-pin" data-area="인천 남동구" data-region="인천" data-status="오픈 준비" style="--i:1">
        <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
        <p class="fa-pin__area">인천 남동구</p>
        <p class="fa-pin__status">오픈 준비</p>
      </div>
      <div class="fa-pin" data-area="서울 마포구" data-region="서울" data-status="오픈 예정" style="--i:2">
        <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
        <p class="fa-pin__area">서울 마포구</p>
        <p class="fa-pin__status">오픈 예정</p>
      </div>
      <div class="fa-pin" data-area="서울 영등포구" data-region="서울" data-status="오픈 예정" style="--i:3">
        <span class="fa-pin__ico"><svg viewBox="0 0 24 24" width="34" height="34" aria-hidden="true">
  <path d="M12 22.2s7.2-6.4 7.2-11.4a7.2 7.2 0 1 0-14.4 0c0 5 7.2 11.4 7.2 11.4z" fill="#FF6900"/>
  <circle cx="12" cy="10.6" r="2.9" fill="#FFFFFF"/>
</svg></span>
        <p class="fa-pin__area">서울 영등포구</p>
        <p class="fa-pin__status">오픈 예정</p>
      </div>
    </div>
    <p class="op-note op-mt-40 op-center op-measure--center">참여 약국은 순차적으로 문을 열 예정이며, 지역과 일정은 달라질 수 있어요. 사전 등록에 동네를 남겨 주시면 가장 먼저 알려드립니다.</p>
  </div>
</section>

<section class="op-sec op-sec--tint fa-signup fa-signup--photo" data-section="a07_signup" data-reveal>
  <div class="fa-signup__photo"><img src="/onpharm/a01_story_4.jpg" alt="" width="1536" height="864" loading="lazy" decoding="async"></div>
  <div class="op-inner fa-signup__inner" id="signup">
    <div class="op-center">
<p class="fa-eyebrow">사전 등록</p>      <h2 class="op-h2">가장 먼저<br>6일 카드를 받아 보세요</h2>
      <p class="op-lead op-mt-16 op-measure--center">동네에 참여 약국이 열리면 가장 먼저 알려드려요. 사전 등록하신 분은 첫 카드를 먼저 받아보실 수 있어요.</p>      <div class="fa-kakao-cta op-mt-32">
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
                 id="a07-concern-0">
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
              <option value="" selected disabled>선택해 주세요</option>
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
               data-field="contact" required maxlength="40"
               autocomplete="off" autocapitalize="none" spellcheck="false" placeholder="카카오톡 아이디 또는 연락 가능한 번호">
      </div>

      <div class="op-mt-24">
        <label class="fa-label" for="a07-note">한 줄 고민</label>
        <textarea class="fa-textarea" id="a07-note" name="entry.1401335176"
                  data-field="note" rows="3"
                  placeholder="요즘 가장 신경 쓰이는 걸 한 줄로 적어 주세요"></textarea>
      </div>

      <div class="fa-consents">        <label class="op-check" for="a07-consent-0">
          <input class="op-check__input" type="checkbox" id="a07-consent-0"
                 name="entry.2142923554" data-field="consent_privacy"
                 value="동의합니다" required>
          <span class="op-check__box" aria-hidden="true"></span>
          <span class="op-check__text">[필수] 개인정보 수집·이용에 동의합니다. 수집 항목: 연령대, 동네, 연락처 / 목적: 전담 상담사 배정과 안내 / 보유 기간: 동의를 철회하실 때까지. 동의하지 않으실 수 있으며, 이 경우 사전 등록이 어렵습니다.</span>
        </label>
        <label class="op-check" for="a07-consent-1">
          <input class="op-check__input" type="checkbox" id="a07-consent-1"
                 name="entry.783919577" data-field="consent_sensitive"
                 value="동의합니다" required>
          <span class="op-check__box" aria-hidden="true"></span>
          <span class="op-check__text">[필수] 건강 관련 정보는 민감정보에 해당합니다. 수집 항목: 신경 쓰이는 것, 한 줄 고민 / 목적: 상담 / 보유 기간: 동의를 철회하실 때까지. 이 정보를 수집·이용하는 데 별도로 동의합니다. 동의하지 않으실 수 있으며, 이 경우 사전 등록이 어렵습니다.</span>
        </label>
        <label class="op-check" for="a07-consent-2">
          <input class="op-check__input" type="checkbox" id="a07-consent-2"
                 name="consent_marketing" data-field="consent_marketing"
                 value="동의합니다">
          <span class="op-check__box" aria-hidden="true"></span>
          <span class="op-check__text">[선택] 다 드실 때쯤 보내 드리는 안내와 새 소식 같은 광고성 정보를 카카오톡이나 문자로 받는 데 동의합니다. 동의하지 않아도 사전 등록은 할 수 있습니다.</span>
        </label>
      </div>

      <div class="op-mt-32">
        <button type="submit" class="op-btn op-btn--lg op-btn--block">사전 등록하기</button>
      </div>
      <p class="op-note op-mt-16 op-center">지금은 사전 등록만 받고 있어요. 이 화면에서 결제나 판매가 이뤄지지 않습니다.</p>
    </form>    <iframe class="op-form-sink" name="op-form-sink" title="폼 전송" hidden></iframe>
    <p class="op-form-thanks op-center op-mt-32" data-form-thanks="signup"
       role="status" tabindex="-1" hidden>사전 등록이 접수됐어요. 동네에 참여 약국이 열리면 순서대로 연락드릴게요.</p>
  </div>
</section>

<section class="op-sec fa-faq-sec" data-section="a09_faq">
  <div class="op-inner op-inner--narrow">
    <div class="op-center">
<p class="fa-eyebrow">궁금한 점</p>      <h2 class="op-h2">자주 묻는 질문</h2>
    </div><div class="fa-faq op-mt-48">
      <div class="op-faq" data-accordion>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">온팜은 약국인가요?</summary>
          <div class="op-faq__a">아니요. 온팜은 동네 참여 약국에서 만나는 건강 브랜드예요. 상담 답변과 6일 카드 수령은 가까운 참여 약국에서 이뤄져요.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">상담은 정말 무료인가요?</summary>
          <div class="op-faq__a">네. 고민을 남기고 답을 받는 데까지는 비용이 들지 않아요. 비용이 생기는 건 약국에서 카드를 받아 가실 때뿐입니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">누가 답변하나요?</summary>
          <div class="op-faq__a">면허를 가진 상담사가 직접 읽고 답합니다. 한 번 배정되면 같은 상담사가 계속 이어서 봐요.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">6일 카드는 어디서 받나요?</summary>
          <div class="op-faq__a">가까운 참여 약국에서 직접 받아 가세요. 쿠폰과 픽업 안내를 보여 주시면 준비해 둔 6일 카드를 드려요.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">지금 먹는 게 있는데 같이 먹어도 되나요?</summary>
          <div class="op-faq__a">지금 챙겨 드시는 것을 알려 주시면 전담 상담사가 함께 보고 안내드려요. 병원에서 받은 약을 드시고 있다면 그 내용도 꼭 같이 적어 주세요.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">개인정보는 어떻게 관리되나요?</summary>
          <div class="op-faq__a">전담 상담사 배정과 안내에만 씁니다. 건강 관련 내용은 민감정보로 따로 동의를 받고, 동의를 철회하시면 지웁니다.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">언제부터 이용할 수 있나요?</summary>
          <div class="op-faq__a">참여 약국이 문을 여는 순서대로 시작해요. 사전 등록하신 분께 가장 먼저 알려 드려요.</div>
        </details>
        <details class="op-faq__item" open>
          <summary class="op-faq__q">약국이 우리 동네에 없으면요?</summary>
          <div class="op-faq__a">사전 등록에 동네를 남겨 주세요. 가까운 곳에 참여 약국이 열리면 가장 먼저 알려드릴게요.</div>
        </details>
      </div>
    </div>
  </div><div class="fa-closing" data-action-scope
       data-scrub="0.1" data-scrub-from="0.95" data-scrub-to="1.15">
    <div class="op-inner op-inner--narrow op-center">
      <button type="button" class="fa-toggle" role="switch" aria-checked="true" data-action-toggle
              aria-label="건강 켜기 스위치">
        <svg viewBox="0 0 64 36" xmlns="http://www.w3.org/2000/svg" focusable="false" aria-hidden="true">
          <rect class="fa-toggle__track" x="2" y="2" width="60" height="32" rx="16"/>
          <rect class="fa-toggle__track fa-toggle__track--on" x="2" y="2" width="60" height="32" rx="16"/>
          <circle class="fa-toggle__knob" cx="18" cy="18" r="13"/>
        </svg>
      </button>
      <p class="fa-toggle__hint op-center">스위치를 눌러 직접 켜 보세요</p>
      <p class="fa-closing__slogan"><span class="op-textfill">들르면, 건강이 켜집니다</span></p>
      <p class="fa-closing__t">고민 한 줄이면 시작돼요</p>
      <p class="op-lead op-mt-12 op-measure--center">참여 약국이 문을 여는 순서대로 시작해요. 사전 등록하신 분께 가장 먼저 알려 드려요.</p>
      <div class="op-row op-row--center op-mt-32">
        <a class="op-btn op-btn--lg" href="#signup">1분 상담 신청</a>
      </div>
    </div>
  </div>
</section>
`;
